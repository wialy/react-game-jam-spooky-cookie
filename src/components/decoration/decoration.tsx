import { TILE_SIZE_VW } from "../../engine";
import { Coordinates } from "../../engine/types/physics";
import * as SKINS from "./decoration.skins";

export const Decoration = ({
  position: [x, y],
  skin,
}: {
  position: Coordinates;
  skin: keyof typeof SKINS;
}) => (
  <div
    style={{
      width: `${TILE_SIZE_VW}vw`,
      height: `${TILE_SIZE_VW * 2}vw`,
      transform: `translate(${x * TILE_SIZE_VW}vw, ${
        (y + 0.25) * TILE_SIZE_VW
      }vw)`,
      position: "absolute",
      top: 0,
      left: 0,
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {SKINS[skin]}
    </svg>
  </div>
);
