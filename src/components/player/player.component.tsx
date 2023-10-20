import { DIRECTIONS, PlayerState, SCALE, UPDATE_DURATION } from "../../engine";

export const Player = ({
  player: { position, direction },
}: {
  player: PlayerState;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transform: `translate(${position.x * SCALE}px, ${
          position.y * SCALE
        }px) rotate(${(180 * DIRECTIONS[direction]) / Math.PI}deg)`,
        transition: `transform ${UPDATE_DURATION}ms linear`,
      }}
    >
      {position.x}
    </div>
  );
};
