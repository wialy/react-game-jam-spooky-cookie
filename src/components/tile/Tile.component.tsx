import { PropsWithChildren } from "react";
import { CELL_SIZE, SCALE } from "../../engine";
import { Coordinates } from "../../engine/types/physics";

export const Tile = ({
  children,
  coordinates,
}: PropsWithChildren<{ coordinates: Coordinates }>) => (
  <div
    style={{
      pointerEvents: "none",
      position: "absolute",
      top: `${coordinates[0] * SCALE * CELL_SIZE}px`,
      left: `${coordinates[1] * SCALE * CELL_SIZE}px`,
      width: `${CELL_SIZE * SCALE}px`,
      height: `${CELL_SIZE * SCALE}px`,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);
