import { UPDATES_PER_SECOND } from "../..";
import {
  Character,
  Explosive,
  Movable,
  Space,
  Wall,
} from "../../types/entities";
import { Coordinates } from "../../types/physics";

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

export function createEntity(params: {
  id: string;
  position: Coordinates;
  velocity?: Coordinates;
  timer?: number;
  type: "explosive";
}): Explosive;

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

    case "explosive": {
      return {
        position: [0, 0],
        velocity: [0, 0],
        timer: UPDATES_PER_SECOND * 3,
        ...entity,
      } as Explosive;
    }

    default: {
      return entity;
    }
  }
}
