import { DAMAGE_TIMER, EXPLOSIVE_TIMER, UPDATES_PER_SECOND } from "../..";
import {
  Character,
  Crate,
  Damage,
  Explosive,
  Ghost,
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
  playerId?: string;
}): Space;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  velocity?: Coordinates;
  type: "character";
  skin?: Character["skin"];
}): Character;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  velocity?: Coordinates;
  timer?: number;
  type: "explosive";
}): Explosive;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  direction?: Coordinates;
  timer?: number;
  type: "damage";
}): Damage;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  velocity?: Coordinates;
  type: "crate";
}): Crate;

export function createEntity(params: {
  id: string;
  position: Coordinates;
  type: "ghost";
  frequency?: number;
}): Ghost;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createEntity(entity: any) {
  switch (entity.type) {
    case "crate": {
      return {
        velocity: [0, 0],
        health: 1,
        ...entity,
      } as Crate;
    }
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
        timer: 0,
        isPlacementLocked: false,
        ...entity,
      } as Character;
    }

    case "explosive": {
      return {
        position: [0, 0],
        velocity: [0, 0],
        timer: EXPLOSIVE_TIMER,
        ...entity,
      } as Explosive;
    }

    case "damage": {
      return {
        position: [0, 0],
        direction: [0, 0],
        timer: DAMAGE_TIMER,
        ...entity,
      } as Damage;
    }

    case "ghost": {
      return {
        position: [0, 0],
        frequency: 5 * UPDATES_PER_SECOND,
        isVisible: false,
        timer: 4,
        ...entity,
      } as Ghost;
    }

    default: {
      return entity;
    }
  }
}
