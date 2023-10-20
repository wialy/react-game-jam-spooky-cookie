export const UPDATES_PER_SECOND = 10;
export const UPDATE_DURATION = 1000 / UPDATES_PER_SECOND;

export const SCALE = 16;

export const DIRECTIONS = {
  RIGHT: 0,
  UP: -Math.PI / 2,
  LEFT: Math.PI,
  DOWN: Math.PI / 2,
};

export const MAZE = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 2, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

export const PLAYER_SIZE = 1;

export const CELL_SIZE = 1;

export const PLAYER_SPEED = 0.2;
