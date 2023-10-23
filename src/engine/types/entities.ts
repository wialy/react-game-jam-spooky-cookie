import { Coordinates } from "./physics";

export type Entity = {
  id: string;
  type: string;
  position: Coordinates;
};

export type Space = Entity & {
  type: "space";
  playerId?: string;
};

export const isSpace = (entity: Entity): entity is Space =>
  entity.type === "space";

export type Wall = Entity & {
  type: "wall";
};

export const isWall = (entity: Entity): entity is Wall =>
  entity.type === "wall";

export type Movable = Entity & {
  type: "movable";
  velocity: Coordinates;
  previousPosition?: Coordinates;
};

export const isMovable = (entity: Entity): entity is Movable =>
  "velocity" in entity;

export type Character = Omit<Movable, "type"> & {
  type: "character";
};

export const isCharacter = (entity: Entity): entity is Character =>
  entity.type === "character";

export type Explosive = Omit<Movable, "type"> & {
  type: "explosive";
  timer: number;
};

export const isExplosive = (entity: Entity): entity is Explosive =>
  entity.type === "explosive";
