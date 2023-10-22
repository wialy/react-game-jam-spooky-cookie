import { DIRECTIONS } from ".";
import { Entity } from "./types/entities";
import { Velocity } from "./types/physics";

export type Direction = keyof typeof DIRECTIONS;

export type GameState = {
  isRunning?: boolean;
  isEnded?: boolean;
  scores: Record<string, number>;
  entities: Entity[];
};

export type GameActions = {
  setDirection: (params: { velocity: Velocity }) => void;
  addExplosive: () => void;
};
