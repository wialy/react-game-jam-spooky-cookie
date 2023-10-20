import { GameState, MAZE } from ".";
import { createPlayer } from "./utils/create-player";
import { getMazeSize } from "./utils/get-maze-size";

export const setup = (allPlayerIds: string[]): GameState => {
  const maze = MAZE;

  const { width, height } = getMazeSize({ maze });

  return {
    scores: {},
    maze: MAZE,
    players: {
      [allPlayerIds[0]]: createPlayer({
        position: { x: 0, y: 0 },
        direction: "RIGHT",
      }),
      [allPlayerIds[1]]: createPlayer({
        position: { x: width - 1, y: 0 },
        direction: "LEFT",
      }),
    },
  };
};
