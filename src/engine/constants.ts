import { Coordinates, Direction } from "./types/physics";

// @todo: remove
export const DEBUG = false;
export const LOG = false;

export const UPDATES_PER_SECOND = 2;
export const UPDATE_DURATION = 1000 / UPDATES_PER_SECOND;

// Max 10 updates per second
export const MIN_UPDATE_DELAY = 100;

export const SCALE = 32;

export const ZERO_COORDINATES: Coordinates = [0, 0];

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
  ".........",
  ".#..#..#.",
  ".$..@..$.",
  ".#.#.#.#.",
  ".........",
  "#$#.$.#$#",
  "...$$$...",
];
// export const HALF_MAZE = [
//   ".........",
//   ".#$#$#$#.",
//   ".$..@..$.",
//   "....#..#.",
//   "$#.......",
//   "$##$#$##$",
// ];

// ".$.$.$.",
// ".#$#$#$",
// ".$.@.$.",
// "$#$#$#$",
// ".$.$.$.",
// ".......",
// ".#$#$#.",
// ".$...$.",
// ".#.@.#.",
// ".$.$.$.",

// export const HALF_MAZE = [
//   ".........",
//   ".#..#....",
//   ".#..@..#.",
//   "...#.#.#.",
//   ".........",
//   "#.#...#.#",
// ];

export const MAZE = [...HALF_MAZE];

for (let i = HALF_MAZE.length - 2; i >= 0; i--) {
  MAZE.push(HALF_MAZE[i].split("").reverse().join(""));
}

export const MAZE_WIDTH = MAZE[0].length;
export const MAZE_HEIGHT = MAZE.length;

export const TILE_SIZE_VW = 100 / (MAZE_WIDTH + 1);

export const CELL_SIZE = 1;

export const EXPLOSIVE_TIMER = 6;
export const DAMAGE_TIMER = 1;

export const DAMAGE_DISTANCE = 3;

export const FREEZE_TIMER = 3;

export const VELOCITIES: Record<Direction, Coordinates> = {
  UP: [0, -1],
  DOWN: [0, 1],
  LEFT: [-1, 0],
  RIGHT: [1, 0],
};

export const SKIN_COLORS: Record<string, string[]> = {
  red: ["#DE3030"],
  blue: ["#2128BE"],
};
