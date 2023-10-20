import { PLAYER_SPEED, PlayerState } from "../..";

export const createPlayer = ({
  direction = "RIGHT",
  position = { x: 0, y: 0 },
  deferredDirection = undefined,
}: Partial<PlayerState>): PlayerState => ({
  direction,
  position,
  deferredDirection,
  speed: PLAYER_SPEED,
});
