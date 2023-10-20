import { DIRECTIONS } from ".";

export type Coordinates = { x: number; y: number };

export type Direction = keyof typeof DIRECTIONS;

export type PlayerState = {
  direction: Direction;
  deferredDirection?: Direction | undefined;
  position: Coordinates;
  speed: number;
};

export type GameState = {
  scores: Record<string, number>;
  players: Record<string, PlayerState>;
  maze: number[][];
};

export type GameActions = {
  setDirection: (params: { direction: Direction }) => void;
};
