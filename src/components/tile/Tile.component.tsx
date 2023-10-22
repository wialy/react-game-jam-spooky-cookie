import { PropsWithChildren } from "react";
import { CELL_SIZE, Coordinates, SCALE } from "../../engine";

export const Tile = ({
  children,
  coordinates,
}: PropsWithChildren<{ coordinates: Coordinates }>) => (
  <div
    style={{
      position: "absolute",
      top: `${coordinates.y * SCALE * CELL_SIZE}px`,
      left: `${coordinates.x * SCALE * CELL_SIZE}px`,
      width: `${CELL_SIZE * SCALE}px`,
      height: `${CELL_SIZE * SCALE}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);
