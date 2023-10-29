import { useEffect, useRef, useState } from "react";
import "./App.css";

import { Players } from "rune-games-sdk";
import { Character } from "./components/character";
import { Collectible } from "./components/collectible";
import { Crate } from "./components/crate";
import { Damage } from "./components/damage";
import { Explosive } from "./components/explosive";
import { Ghost } from "./components/ghost";
import { Level } from "./components/level";
import { ScoreUi } from "./components/score-ui";
import { Wall } from "./components/wall";
import {
  MAZE_HEIGHT,
  MAZE_WIDTH,
  TILE_SIZE_VW,
  UPDATE_DURATION,
  ZERO_COORDINATES,
  actions,
} from "./engine";
import { useControls } from "./engine/hooks/use-controls";
import { GameState } from "./engine/types";
import {
  Entity,
  isCharacter,
  isCrate,
  isDamage,
  isExplosive,
  isGhost,
  isMovable,
  isSpace,
  isWall,
  type Character as ICharacter,
} from "./engine/types/entities";
import { getLights } from "./engine/utils/get-lights/get-lights";
import { useSound } from "./sound";
import { Decoration } from "./components/decoration";

const actionNames = new Set(Object.keys(actions));

function App() {
  const [game, setGame] = useState<GameState>();
  const [previousGame, setPreviousGame] = useState<GameState>();
  const [runePlayers, setRunePlayers] = useState<Players>();
  const [playerId, setPlayerId] = useState<string>();

  const lastTick = useRef(0);

  useEffect(() => {
    Rune.initClient({
      onChange: ({
        game,
        players,
        yourPlayerId,
        event,
        action,
        previousGame,
      }) => {
        if (
          game.tick !== undefined &&
          game.tick < lastTick.current &&
          game.tick !== 0
        ) {
          // should not happen, but just in case
          return;
        }

        lastTick.current = game.tick ?? 0;

        setRunePlayers(players);
        setPlayerId(yourPlayerId);

        const actionName = action?.name;
        const eventName = event?.name;

        if (
          eventName === "update" ||
          (actionName && actionNames.has(actionName))
        ) {
          setGame(game);
          setPreviousGame(previousGame);
        }
      },
    });
  }, []);

  const isSpectator = !playerId;

  const playerCharacter = game?.entities.find((entity) => {
    return entity.id === playerId;
  });

  const { swipeProps } = useControls({
    character: playerCharacter as ICharacter,
    disabled: game?.isEnded || !game?.isRunning || isSpectator,
  });

  useSound({
    game,
    previousGame,
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

  const displayLayers = [
    "space",
    "wall",
    "crate",
    "explosive",
    "character",
    "ghost",
    "damage",
  ];

  const displayEntities = displayLayers
    .map((layer) => layers[layer])
    .flat()
    .filter(Boolean);

  const { lights } = getLights({ entities: displayEntities, maxDistance: 3 });

  const shouldZoom = !game.isRunning || game.isEnded;
  const zoomCharacter = game.isEnded
    ? characters.find((character) => character.id === game.winnerId)
    : characters.find((character) => character.id === playerId);
  const zoomPosition = shouldZoom ? zoomCharacter?.position : undefined;

  return (
    <>
      <Level zoomPosition={zoomPosition} shouldZoom={shouldZoom}>
        <Decoration position={[0, -2.25]} skin="bricks" />
        <Decoration
          position={[Math.floor(MAZE_WIDTH / 2) + 1, -2.25]}
          skin="bricks"
        />
        <Decoration position={[MAZE_WIDTH / 2 - 1.75, -2]} skin="spider" />
        <Decoration position={[MAZE_WIDTH - 1, -2]} skin="web" />
        <Decoration
          position={[Math.floor(MAZE_WIDTH / 2) - 2.5, -2]}
          skin="torch"
        />
        <Decoration
          position={[Math.floor(MAZE_WIDTH / 2) + 2.5, -2]}
          skin="torch"
        />
        <Decoration position={[Math.floor(MAZE_WIDTH / 2), -2]} skin="door" />
        <Decoration position={[1, MAZE_HEIGHT]} skin="hintSwipe" />
        <Decoration position={[3, MAZE_HEIGHT]} skin="hintTap" />
        <Decoration position={[MAZE_WIDTH - 1, MAZE_HEIGHT]} skin="signature" />

        {displayEntities.map((entity) => {
          const [x, y] = entity.position;

          const lightness = isSpace(entity) ? lights[entity.id] : 0;
          const backgroundColor = isSpace(entity)
            ? `hsl(180, 50%, ${Math.max(0, 8 + lightness * 3)}%)`
            : undefined;

          return (
            <div
              key={entity.id}
              id="entities"
              style={{
                transform: `translate(${x * TILE_SIZE_VW}vw, ${
                  y * TILE_SIZE_VW
                }vw)`,
                width: `${TILE_SIZE_VW}vw`,
                height: `${TILE_SIZE_VW}vw`,
                backgroundColor,
                transition:
                  isMovable(entity) || isSpace(entity)
                    ? `all ${UPDATE_DURATION}ms linear`
                    : undefined,
                zIndex: isCharacter(entity)
                  ? y * MAZE_WIDTH + x
                  : isDamage(entity) || isExplosive(entity)
                  ? y * MAZE_WIDTH + x + 1
                  : isWall(entity) || isCrate(entity)
                  ? Math.max(0, (y - 1) * MAZE_WIDTH + x + 3)
                  : isGhost(entity)
                  ? y * MAZE_WIDTH + x + 1
                  : 0,
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
              {isWall(entity) && <Wall />}
              {isCrate(entity) && <Crate health={entity.health} />}
              {isGhost(entity) && <Ghost isVisible={entity.isVisible} />}
            </div>
          );
        })}
      </Level>
      <div id="touch" {...swipeProps} />
      {runePlayers && playerId && characters && (
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
