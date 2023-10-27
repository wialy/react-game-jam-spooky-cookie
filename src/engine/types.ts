import { Entity } from "./types/entities";
import { Coordinates, Direction } from "./types/physics";

export type GameState = {
  entitiesCounter: number;
  isRunning?: boolean;
  isEnded?: boolean;
  winnerId?: string;
  scores: Record<string, number>;
  entities: Entity[];
  tick?: number;
};

export type GameActions = {
  setDirection: (params: { velocity: Direction }) => void;
  addExplosive: (params: { position: Coordinates }) => void;
};
