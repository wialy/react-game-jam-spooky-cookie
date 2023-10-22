import { ReactNode } from "react";
import { SCALE } from "../../engine";

const SIZE = 11;

export const Level = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${(-SIZE * SCALE) / 2}px, ${
          (-SIZE * SCALE) / 2
        }px)`,
      }}
    >
      {children}
    </div>
  );
};
