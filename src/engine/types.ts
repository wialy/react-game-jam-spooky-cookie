import { Entity } from "./types/entities";
import { Coordinates, Direction } from "./types/physics";

export type GameState = {
  entitiesCounter: number;
  isRunning?: boolean;
  isEnded?: boolean;
  scores: Record<string, number>;
  entities: Entity[];
};

export type GameActions = {
  setDirection: (params: { velocity: Direction }) => void;
  addExplosive: (params: { position: Coordinates }) => void;
};
