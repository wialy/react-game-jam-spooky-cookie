import { DIRECTIONS, PlayerState } from "../..";
import { roundNumber } from "../round-number";

export const getNextPosition = ({
  position,
  direction,
  speed,
}: Pick<PlayerState, "position" | "direction" | "speed">) => ({
  x: roundNumber(position.x + Math.cos(DIRECTIONS[direction]) * speed, 2),
  y: roundNumber(position.y + Math.sin(DIRECTIONS[direction]) * speed, 2),
});
