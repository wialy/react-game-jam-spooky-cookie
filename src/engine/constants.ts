import { Coordinates, Velocity } from "./types/physics";

// @todo: remove
export const DEBUG = false;

export const UPDATES_PER_SECOND = 8;
export const UPDATE_DURATION = 1000 / UPDATES_PER_SECOND;

export const SCALE = 32;

// array of strings
// '.' - empty
// '#  - wall
// '@' - player spawn

export const HALF_MAZE = [
  ".........",
  "....@....",
  ".#.#.#..#",
  ".#.#.#.#.",
  ".###.#.#.",
  ".........",
  "##.##.##.",
  "...#...#.",
];

export const MAZE = [...HALF_MAZE];

for (let i = HALF_MAZE.length - 1; i >= 0; i--) {
  MAZE.push(HALF_MAZE[i].split("").reverse().join(""));
}

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
