import { useEffect, useRef, useState } from "react";
import "./App.css";

import { Players } from "rune-games-sdk";
import { Character } from "./components/character";
import { Collectible } from "./components/collectible";
import { Damage } from "./components/damage";
import { Explosive } from "./components/explosive/explosive.component";
import { Level } from "./components/level";
import { ScoreUi } from "./components/score-ui";
import {
  MAZE_WIDTH,
  TILE_SIZE_VW,
  UPDATE_DURATION,
  ZERO_COORDINATES,
} from "./engine";
import { useControls } from "./engine/hooks/use-controls";
import { GameState } from "./engine/types";
import {
  Entity,
  isCharacter,
  isDamage,
  isExplosive,
  isMovable,
  isSpace,
  type Character as ICharacter,
} from "./engine/types/entities";

function App() {
  const [game, setGame] = useState<GameState>();
  const [runePlayers, setRunePlayers] = useState<Players>();
  const [playerId, setPlayerId] = useState<string>();

  const isPopupVisible = useRef(false);

  const isEnded = game?.isEnded;

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game, players, yourPlayerId }) => {
        setGame(game);
        setRunePlayers(players);
        setPlayerId(yourPlayerId);
      },
    });
  }, []);

  useEffect(() => {
    if (isEnded && !isPopupVisible.current) {
      isPopupVisible.current = true;
      Rune.showGameOverPopUp();
    }
  }, [isEnded]);

  const playerCharacter = game?.entities.find((entity) => {
    return entity.id === playerId;
  });

  const { swipeProps } = useControls({
    character: playerCharacter as ICharacter,
    disabled: game?.isEnded,
  });

  if (!game) {
    return <div>Loading...</div>;
  }

  const { entities } = game;

  // Group layers by entity type
  const layers = entities.reduce((acc, entity) => {
    const { type } = entity;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(entity);
    return acc;
  }, {} as Record<string, Entity[]>);

  // Sort entities by id in layers
  for (const type of Object.keys(layers)) {
    layers[type] = layers[type].sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  }

  const characters = layers["character"];

  const displayLayers = ["space", "explosive", "character", "damage"];
  const displayEntities = displayLayers
    .map((layer) => layers[layer])
    .flat()
    .filter(Boolean);

  return (
    <>
      <Level>
        {displayEntities.map((entity) => {
          return (
            <div
              key={entity.id}
              id="entities"
              style={{
                transform: `translate(${entity.position[0] * TILE_SIZE_VW}vw, ${
                  entity.position[1] * TILE_SIZE_VW
                }vw)`,
                width: `${TILE_SIZE_VW}vw`,
                height: `${TILE_SIZE_VW}vw`,
                backgroundColor: isSpace(entity) ? "#2B3A3A" : "transparent",
                transition: isMovable(entity)
                  ? `all ${UPDATE_DURATION}ms linear`
                  : undefined,
                zIndex: isCharacter(entity)
                  ? entity.position[1] * MAZE_WIDTH + entity.position[0]
                  : isDamage(entity) || isExplosive(entity)
                  ? entity.position[1] * MAZE_WIDTH + entity.position[0] + 1
                  : undefined,
              }}
            >
              {isExplosive(entity) && <Explosive />}
              {isSpace(entity) && (
                <Collectible isCollected={entity.playerId !== undefined} />
              )}
              {isCharacter(entity) && (
                <Character
                  velocity={game.isEnded ? ZERO_COORDINATES : entity.velocity}
                  timer={entity.timer}
                  skin={entity.skin}
                  isWinner={entity.id === game.winnerId}
                />
              )}
              {isDamage(entity) && <Damage />}
            </div>
          );
        })}
      </Level>
      <div id="touch" {...swipeProps} />
      {runePlayers && playerId && (
        <ScoreUi
          players={runePlayers}
          scores={game.scores}
          playerId={playerId}
          playerSkins={characters}
        />
      )}
    </>
  );
}

export default App;
