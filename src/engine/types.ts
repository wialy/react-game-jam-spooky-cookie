import { DIRECTIONS } from ".";

export type Coordinates = { x: number; y: number };

export type Direction = keyof typeof DIRECTIONS;

export type Collectible = Coordinates & {
  isCollected?: boolean;
  score: number;
  collectedBy?: string;
};

export type PlayerState = {
  direction: Direction;
  deferredDirection?: Direction | undefined;
  deferredPosition?: Coordinates | undefined;
  position: Coordinates;
  speed: number;
};

export type GameState = {
  isRunning?: boolean;
  isEnded?: boolean;
  scores: Record<string, number>;
  players: Record<string, PlayerState>;
  maze: number[][];
  collectibles?: Collectible[];
};

export type GameActions = {
  setDirection: (params: { direction: Direction }) => void;
};
