import { CELL_SIZE, GameState, MAZE } from ".";
import { createPlayer } from "./utils/create-player";
import { getMazeSize } from "./utils/get-maze-size";

export const setup = (allPlayerIds: string[]): GameState => {
  const maze = MAZE;

  const { width, height } = getMazeSize({ maze });

  const collectibles: GameState["collectibles"] = [];

  // place dots where maze cell value is 0
  for (let y = 1; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (maze[y][x] === 0) {
        collectibles.push({
          x: x + CELL_SIZE / 2,
          y: y + CELL_SIZE / 2,
          score: 1,
        });
      }
    }
    y = height;
  }

  // store spawn points where maze equals 2
  const spawns = maze.reduce<{ x: number; y: number }[]>((acc, row, y) => {
    row.forEach((cell, x) => {
      if (cell === 2) {
        acc.push({ x, y });
      }
    });

    return acc;
  }, []);

  return {
    isEnded: false,
    isRunning: true,
    scores: {},
    maze,
    players: {
      [allPlayerIds[0]]: createPlayer({
        position: spawns[0],
        direction: "UP",
      }),
      [allPlayerIds[1]]: createPlayer({
        position: spawns[1],
        direction: "DOWN",
      }),
    },
    collectibles,
  };
};
