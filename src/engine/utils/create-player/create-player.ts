import { PLAYER_SPEED, PlayerState } from "../..";

export const createPlayer = ({
  direction = "RIGHT",
  position = { x: 0, y: 0 },
  ...config
}: Partial<PlayerState>): PlayerState => ({
  direction,
  position,
  speed: PLAYER_SPEED,
  ...config,
});
