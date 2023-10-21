import { PropsWithChildren } from "react";
import { CELL_SIZE, SCALE, type Collectible } from "../../engine";

const SIZE = CELL_SIZE * 0.33 * SCALE;

export const Dot = ({
  config: { x, y, isCollected },
}: { config: Collectible } & PropsWithChildren) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x * SCALE}px`,
        top: `${y * SCALE}px`,
        width: `${CELL_SIZE * SCALE}px`,
        height: `${CELL_SIZE * SCALE}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          borderRadius: "50%",
          backgroundColor: isCollected ? "transparent" : "orange",
          transition: "all 0.2s ease-in",
        }}
      />
    </div>
  );
};
