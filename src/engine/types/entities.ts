import { Coordinates } from "./physics";

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

export type Character = Omit<Movable, "type"> & {
  type: "character";
};

export const isCharacter = (entity: Entity): entity is Character => {
  return entity.type === "character";
};
