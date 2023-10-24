import { useEffect, useState } from "react";
import "./App.css";

import { Players } from "rune-games-sdk";
import { Character } from "./components/character";
import { Collectible } from "./components/collectible";
import { Explosive } from "./components/explosive/explosive.component";
import { Level } from "./components/level";
import { ScoreUi } from "./components/score-ui";
import { MAZE_WIDTH, TILE_SIZE_VW, UPDATE_DURATION } from "./engine";
import { useControls } from "./engine/hooks/use-controls";
import { GameState } from "./engine/types";
import {
  Entity,
  isCharacter,
  isExplosive,
  isSpace,
  type Character as ICharacter,
  isDamage,
} from "./engine/types/entities";
import { Damage } from "./components/damage";

function App() {
  const [game, setGame] = useState<GameState>();
  const [runePlayers, setRunePlayers] = useState<Players>();
  const [playerId, setPlayerId] = useState<string>();

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game, players, yourPlayerId }) => {
        setGame(game);
        setRunePlayers(players);
        setPlayerId(yourPlayerId);
      },
    });
  }, []);

  const playerCharacter = game?.entities.find((entity) => {
    return entity.id === playerId;
  });

  const { swipeProps } = useControls({
    character: playerCharacter as ICharacter,
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

  const displayLayers = ["space", "explosive", "character", "damage"];
  const displayEntities = displayLayers
    .map((layer) => layers[layer])
    .flat()
    .filter(Boolean);

  let charactersCount = 0;

  return (
    <>
      <Level>
        {displayEntities.map((entity) => {
          if (isCharacter(entity)) {
            charactersCount++;
          }

          return (
            <div
              key={entity.id}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: `translate(${entity.position[0] * TILE_SIZE_VW}vw, ${
                  entity.position[1] * TILE_SIZE_VW
                }vw)`,
                width: `${TILE_SIZE_VW}vw`,
                height: `${TILE_SIZE_VW}vw`,
                backgroundColor: isSpace(entity) ? "#2B3A3A" : "transparent",
                transition: `all ${UPDATE_DURATION}ms linear`,
                zIndex: isCharacter(entity)
                  ? entity.position[1] * MAZE_WIDTH + entity.position[0]
                  : 0,
              }}
            >
              {isExplosive(entity) && <Explosive />}
              {isSpace(entity) && entity.playerId === undefined ? (
                <Collectible />
              ) : null}
              {isCharacter(entity) && (
                <Character
                  velocity={entity.velocity}
                  isCurrent={charactersCount === 1}
                />
              )}
              {isDamage(entity) && <Damage />}
            </div>
          );
        })}
      </Level>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        {...swipeProps}
      />
      {runePlayers && playerId && (
        <ScoreUi
          players={runePlayers}
          scores={game.scores}
          playerId={playerId}
        />
      )}
    </>
  );
}

export default App;
