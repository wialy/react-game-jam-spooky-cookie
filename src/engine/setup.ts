import { al } from "vitest/dist/reporters-5f784f42.js";
import { GameState, MAZE } from ".";
import { Space } from "./types/entities";
import { createEntity } from "./utils/create-entity";
import { createSpaces } from "./utils/create-spaces";
import { getMazeSize } from "./utils/get-maze-size";

export const setup = (allPlayerIds: string[]): GameState => {
  const spaces: Space[] = [];

  const { width, height } = getMazeSize({ maze: MAZE });

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (MAZE[y][x] === 0) {
        spaces.push(
          createEntity({
            type: "space",
            position: [x, y],
            id: `space-${x}-${y}`,
          })
        );
      }
    }
  }

  return {
    isEnded: false,
    isRunning: true,
    scores: {},
    entities: [
      ...createSpaces(11, 1),
      createEntity({
        type: "character",
        position: [5, 0],
        id: allPlayerIds[0],
      }),
      createEntity({
        type: "movable",
        position: [1, 0],
        id: "a",
        velocity: [1, 0],
      }),
      createEntity({
        type: "movable",
        position: [7, 0],
        id: "c",
        velocity: [0, 0],
      }),
      createEntity({
        type: "movable",
        position: [10, 0],
        id: "b",
        velocity: [-1, 0],
      }),
    ],
  };
};
