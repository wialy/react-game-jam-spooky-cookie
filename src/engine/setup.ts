import { BOT_ID, GameState, MAZE } from ".";
import { Character, Entity } from "./types/entities";
import { createEntity } from "./utils/create-entity";

const SKINS: Character["skin"][] =
  Math.random() > 0.5 ? ["blue", "red"] : ["red", "blue"];
export const setup = (allPlayerIds: string[]): GameState => {
  const entities: Entity[] = [];

  let playersCounter = 0;
  const spawns: Entity[] = [];

  MAZE.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      switch (cell) {
        case ".": {
          entities.push(
            createEntity({
              type: "space",
              position: [x, y],
              id: `space-${x}-${y}`,
            })
          );
          break;
        }
        case "#": {
          entities.push(
            createEntity({
              type: "wall",
              position: [x, y],
              id: `wall-${x}-${y}`,
            })
          );
          break;
        }
        case "$": {
          entities.push(
            createEntity({
              type: "crate",
              position: [x, y],
              id: `crate-${x}-${y}`,
            })
          );
          entities.push(
            createEntity({
              type: "space",
              position: [x, y],
              id: `space-${x}-${y}`,
            })
          );
          break;
        }
        case "@": {
          if (allPlayerIds.length > playersCounter) {
            entities.push(
              createEntity({
                type: "character",
                position: [x, y],
                id: allPlayerIds[playersCounter],
                skin: SKINS[playersCounter],
              })
            );
            playersCounter++;
          }
          const spawn = createEntity({
            type: "space",
            position: [x, y],
            id: `space-${x}-${y}`,
          });
          entities.push(spawn);
          spawns.push(spawn);
          break;
        }
      }
    });
  });

  entities.push(
    createEntity({
      type: "ghost",
      id: "ghost",
      position: [0, 0],
    })
  );

  if (playersCounter === 1) {
    entities.push(
      createEntity({
        type: "character",
        position: spawns[1]?.position ?? [0, 0],
        id: BOT_ID,
        skin: SKINS[1],
      })
    );
  }

  return {
    entitiesCounter: 0,
    isEnded: false,
    isRunning: false,
    scores: Object.fromEntries(allPlayerIds.map((id) => [id, 0])),
    entities,
    tick: 0,
  };
};
