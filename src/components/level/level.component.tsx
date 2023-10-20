import { ReactNode } from "react";
import { getMazeSize } from "../../engine/utils/get-maze-size";
import { MAZE, SCALE } from "../../engine";

export const Level = ({ children }: { children: ReactNode }) => {
  const { width, height } = getMazeSize({ maze: MAZE });

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${(-width * SCALE) / 2}px, ${
          (-height * SCALE) / 2
        }px)`,
      }}
    >
      {children}
    </div>
  );
};
