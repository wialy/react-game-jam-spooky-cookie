import { GameState } from "../..";

export const getMazeSize = ({ maze }: Pick<GameState, "maze">) => ({
  width: maze[0].length,
  height: maze.length,
});
