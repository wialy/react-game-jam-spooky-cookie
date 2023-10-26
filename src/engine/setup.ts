import { GameState, MAZE } from ".";
import { Character, Entity } from "./types/entities";
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
          entities.push(
            createEntity({
              type: "character",
              position: [x, y],
              id: allPlayerIds[playersCounter],
              skin: ["red", "blue"][playersCounter] as Character["skin"],
            })
          );
          entities.push(
            createEntity({
              type: "space",
              position: [x, y],
              id: `space-${x}-${y}`,
            })
          );
          playersCounter++;
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
