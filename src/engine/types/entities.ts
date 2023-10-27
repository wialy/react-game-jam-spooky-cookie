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
  // prevent character from moving for a short time after damage
  timer: number;
  skin?: "red" | "blue" | "green" | "yellow";
  isPlacementLocked?: boolean;
};

export const isCharacter = (entity: Entity): entity is Character =>
  entity.type === "character";

export type Explosive = Omit<Movable, "type"> & {
  type: "explosive";
  timer: number;
};

export const isExplosive = (entity: Entity): entity is Explosive =>
  entity.type === "explosive";

export type Damage = Entity & {
  type: "damage";
  timer: number;
  direction: Coordinates | null;
};

export const isDamage = (entity: Entity): entity is Damage =>
  entity.type === "damage";

export type Destroyable = Entity & {
  health: number;
};

export const isDestroyable = (entity: Entity): entity is Destroyable =>
  "health" in entity;

export type Crate = Omit<Movable, "type"> &
  Destroyable & {
    type: "crate";
  };

export const isCrate = (entity: Entity): entity is Crate =>
  entity.type === "crate";

export type Ghost = Entity & {
  type: "ghost";
  frequency: number;
  timer: number;
  isVisible: boolean;
};

export const isGhost = (entity: Entity): entity is Ghost =>
  entity.type === "ghost";
