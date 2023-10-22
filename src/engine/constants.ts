export const UPDATES_PER_SECOND = 10;
export const UPDATE_DURATION = 1000 / UPDATES_PER_SECOND;

export const SCALE = 32;

export const DIRECTIONS = {
  RIGHT: 0,
  UP: -Math.PI / 2,
  LEFT: Math.PI,
  DOWN: Math.PI / 2,
};

// 0 - empty
// 1 - wall
// 2 - player spawn

const HALF_MAZE = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
];
export const MAZE = [...HALF_MAZE];

for (let i = HALF_MAZE.length - 1; i >= 0; i--) {
  MAZE.push([...HALF_MAZE[i]].reverse());
}

// PLAYER_SIZE and CELL_SIZE are set to 1
// since the idea of making player size lower than cell size proved to be bad
export const PLAYER_SIZE = 1;
export const CELL_SIZE = 1;
export const COLLECTIBLE_SIZE = 0.5;

export const PLAYER_SPEED = 1;

export const EXPLOSIVE_DELAY = 3000;
