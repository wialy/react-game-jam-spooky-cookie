import { Character, Coordinates, Movable, Space, Wall } from "./types";

export function createEntity(params: {
  id: string;
  position: Coordinates;
  type: "movable";
  velocity?: Coordinates;
}): Movable;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  type: "wall";
}): Wall;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  type: "space";
}): Space;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  velocity?: Coordinates;
  type: "character";
}): Character;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createEntity(entity: any) {
  switch (entity.type) {
    case "movable": {
      return {
        velocity: [0, 0],
        ...entity,
      } as Movable;
    }

    case "character": {
      return {
        position: [0, 0],
        velocity: [0, 0],
        ...entity,
      } as Character;
    }

    default: {
      return entity;
    }
  }
}
