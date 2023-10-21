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
        transform: `translate(${-SIZE / 2}px, ${-SIZE / 2}px) scale(${
          isCollected ? 5 : 1
        })`,
        width: SIZE,
        height: SIZE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: isCollected ? "transparent" : "orange",
        transition: "all 0.2s ease-in",
      }}
    />
  );
};
