import { PLAYER_SPEED, PlayerState } from "../..";

export const createPlayer = ({
  direction = "RIGHT",
  position = { x: 0, y: 0 },
}: Partial<Pick<PlayerState, "direction" | "position">>): PlayerState => ({
  direction,
  position,
  speed: PLAYER_SPEED,
});
