import { useEffect, useState } from "react";
import "./App.css";

import { Players } from "rune-games-sdk";
import { Character } from "./components/character";
import { Level } from "./components/level";
import { ScoreUi } from "./components/score-ui";
import {
  MAZE_WIDTH,
  TILE_SIZE_VW,
  UPDATES_PER_SECOND,
  UPDATE_DURATION,
} from "./engine";
import { useControls } from "./engine/hooks/use-controls";
import { GameState } from "./engine/types";
import {
  Entity,
  isCharacter,
  isExplosive,
  isSpace,
} from "./engine/types/entities";

const TYPE_TO_COLOR = {
  space: "#eee",
  character: ["blue", "red"],
  explosive: "orange",
};

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

  const { swipeProps } = useControls();

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

  const displayLayers = ["space", "explosive", "character"];
  const displayEntities = displayLayers
    .map((layer) => layers[layer])
    .flat()
    .filter(Boolean);

  let charactersCount = 0;

  return (
    <>
      <Level>
        {displayEntities.map((entity) => {
          const size = isExplosive(entity)
            ? 0.8
            : isCharacter(entity)
            ? 0.9
            : 1;

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
                transform: `translate(${entity.position[0] * TILE_SIZE_VW}vw, ${
                  entity.position[1] * TILE_SIZE_VW
                }vw)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: `${TILE_SIZE_VW}vw`,
                height: `${TILE_SIZE_VW}vw`,
                color: "white",
                transition: `all ${UPDATE_DURATION}ms linear`,
                zIndex: isCharacter(entity)
                  ? entity.position[1] * MAZE_WIDTH + entity.position[0]
                  : 0,
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: isCharacter(entity)
                    ? "transparent"
                    : isSpace(entity)
                    ? "white"
                    : (TYPE_TO_COLOR[
                        entity.type as keyof typeof TYPE_TO_COLOR
                      ] as string),
                  width: `${100 * size}%`,
                  height: `${100 * size}%`,
                  transition: `all ${UPDATE_DURATION}ms linear`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: isExplosive(entity)
                    ? "50%"
                    : isCharacter(entity)
                    ? "25%"
                    : "0",
                  fontSize: `${TILE_SIZE_VW * 0.5}vw`,
                  position: "relative",
                }}
              >
                {/* {isMovable(entity) ? (entity.velocity.join(":") as string) : null} */}
                {isExplosive(entity)
                  ? Math.ceil(entity.timer / UPDATES_PER_SECOND)
                  : isSpace(entity) && entity.playerId === undefined
                  ? "🍪"
                  : isCharacter(entity)
                  ? entity.velocity.join(":")
                  : null}
                {isCharacter(entity) && (
                  <Character
                    velocity={entity.velocity}
                    isCurrent={charactersCount === 1}
                  />
                )}
              </div>
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
