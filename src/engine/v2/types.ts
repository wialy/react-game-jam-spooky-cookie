export type Coordinates = [number, number];

export const VELOCITIES = {
  UP: [0, -1],
  DOWN: [0, 1],
  LEFT: [-1, 0],
  RIGHT: [1, 0],
} as const;

export type Velocity = (typeof VELOCITIES)[keyof typeof VELOCITIES];

export type Entity = {
  id: string;
  type: string;
  position: Coordinates;
};

export type Space = Entity & {
  type: "space";
};

export const isSpace = (entity: Entity): entity is Space => {
  return entity.type === "space";
};

export type Wall = Entity & {
  type: "wall";
};

export const isWall = (entity: Entity): entity is Wall => {
  return entity.type === "wall";
};

export type Movable = Entity & {
  type: "movable";
  velocity: Coordinates;
};

export const isMovable = (entity: Entity): entity is Movable => {
  return "velocity" in entity;
};

export type Character = Movable & {
  type: "character";
};
