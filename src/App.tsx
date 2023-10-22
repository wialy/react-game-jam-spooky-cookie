import { useEffect, useState } from "react";
import "./App.css";

import { Players } from "rune-games-sdk";
import { Level } from "./components/level";
import { ScoreUi } from "./components/score-ui";
import { SCALE, UPDATE_DURATION } from "./engine";
import { useControls } from "./engine/hooks/use-controls";
import { GameState } from "./engine/types";
import { Entity, isCharacter, isMovable } from "./engine/types/entities";

const TYPE_TO_COLOR = {
  space: "#eee",
  character: ["blue", "red"],
  movable: "orange",
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

  const displayLayers = ["space", "character", "movable"];
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
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: `translate(${entity.position[0] * SCALE}px, ${
                  entity.position[1] * SCALE
                }px)`,
                width: SCALE,
                height: SCALE,
                borderRadius: isMovable(entity)
                  ? isCharacter(entity)
                    ? "12%"
                    : "50%"
                  : 0,
                transition: `all ${UPDATE_DURATION}ms linear`,
                textAlign: "center",
                backgroundColor: isCharacter(entity)
                  ? TYPE_TO_COLOR["character"][entity.id === playerId ? 0 : 1]
                  : (TYPE_TO_COLOR[
                      entity.type as keyof typeof TYPE_TO_COLOR
                    ] as string),
              }}
            >
              {isMovable(entity) ? (entity.velocity.join(":") as string) : null}
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
