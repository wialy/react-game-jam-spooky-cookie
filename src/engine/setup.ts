import { GameState, MAZE } from ".";
import { Entity } from "./types/entities";
import { createEntity } from "./utils/create-entity";

export const setup = (allPlayerIds: string[]): GameState => {
  const entities: Entity[] = [];

  let playersCounter = 0;
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
        case "@": {
          entities.push(
            createEntity({
              type: "character",
              position: [x, y],
              id: allPlayerIds[playersCounter++],
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
      }
    });
  });

  return {
    entitiesCounter: 0,
    isEnded: false,
    isRunning: true,
    scores: {},
    entities: [...entities],
  };
};
