import {
  CELL_SIZE,
  DIRECTIONS,
  PlayerState,
  SCALE,
  UPDATE_DURATION,
} from "../../engine";

export const Player = ({
  player: { position, direction },
  isCurrent,
}: {
  player: PlayerState;
} & { isCurrent?: boolean }) => {
  const size = CELL_SIZE * SCALE;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size,
        height: size,
        transform: `translate(${position.x * SCALE}px, ${
          position.y * SCALE
        }px) rotate(${(180 * DIRECTIONS[direction]) / Math.PI}deg)`,
        transition: `transform ${UPDATE_DURATION}ms linear`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isCurrent ? "blue" : "red",
        borderRadius: 4,
        color: "white",
      }}
    >
      &rarr;
    </div>
  );
};
