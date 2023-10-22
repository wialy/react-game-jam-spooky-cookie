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
          if (Math.random() > 0.999999) {
            entities.push(
              createEntity({
                type: "movable",
                position: [x, y],
                id: `movable-${x}-${y}`,
                velocity: [
                  Math.random() > 0.5 ? 1 : -1,
                  Math.random() > 0.5 ? 1 : -1,
                ],
              })
            );
          }
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
