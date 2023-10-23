import { ReactNode } from "react";
import { MAZE_HEIGHT, MAZE_WIDTH, TILE_SIZE_VW } from "../../engine";

export const Level = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${(-TILE_SIZE_VW * MAZE_WIDTH) / 2}vw, ${
          (-TILE_SIZE_VW * (MAZE_HEIGHT - 1)) / 2
        }vw)`,
      }}
    >
      {children}
    </div>
  );
};
