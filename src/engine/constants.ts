import { Coordinates, Velocity } from "./types/physics";

// @todo: remove
export const DEBUG = true;
export const LOG = false;

export const UPDATES_PER_SECOND = 8;
export const UPDATE_DURATION = 1000 / UPDATES_PER_SECOND;

export const MIN_UPDATE_DELAY = 300;

export const SCALE = 32;

// array of strings
// '.' - empty
// '#  - wall
// '@' - player spawn

// @ moves on dots and can't move on walls
// movement mechanics is dash-like: @ cant's stop in the middle of the cell
// @ can't move diagonally
// @ can't move through walls
// @ can't move through other players

export const HALF_MAZE = [
  "..#...#..",
  ".........",
  "#........",
  "....@....",
  "........#",
  ".#.......",
  "...#.#...",
];

export const MAZE = [...HALF_MAZE];

for (let i = HALF_MAZE.length - 2; i >= 0; i--) {
  MAZE.push(HALF_MAZE[i].split("").reverse().join(""));
}

export const MAZE_WIDTH = MAZE[0].length;
export const MAZE_HEIGHT = MAZE.length;

export const TILE_SIZE_VW = 100 / (MAZE_WIDTH + 1);

// PLAYER_SIZE and CELL_SIZE are set to 1
// since the idea of making player size lower than cell size proved to be bad
export const PLAYER_SIZE = 1;
export const CELL_SIZE = 1;
export const COLLECTIBLE_SIZE = 0.5;

export const PLAYER_SPEED = 1;

export const EXPLOSIVE_DELAY = 3000;

export const VELOCITIES: Record<Velocity, Coordinates> = {
  UP: [0, -1],
  DOWN: [0, 1],
  LEFT: [-1, 0],
  RIGHT: [1, 0],
};
