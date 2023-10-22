import { GameState, PlayerState } from "../..";

export const updateDirection = ({
  game,
  player,
}: {
  game: GameState;
  player: PlayerState;
}): PlayerState => {
  // Return current player state
  return player;
};
