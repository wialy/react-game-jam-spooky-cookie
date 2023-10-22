import { ReactNode } from "react";
import { MAZE, SCALE } from "../../engine";

const WIDTH = MAZE[0].length * SCALE;
const HEIGHT = MAZE.length * SCALE;

export const Level = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${-WIDTH / 2}px, ${-HEIGHT / 2}px)`,
      }}
    >
      {children}
    </div>
  );
};
