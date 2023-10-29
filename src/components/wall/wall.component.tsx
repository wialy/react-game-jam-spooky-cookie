import { TILE_SIZE_VW } from "../../engine";
import { bricks } from "./wall.skins";

export const Wall = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      style={{
        position: "absolute",
        bottom: 0,
        width: `calc(${TILE_SIZE_VW * 1.0}vw + 1px)`,
        height: `calc(${TILE_SIZE_VW * 1.55}vw + 1px)`,
      }}
      viewBox="0 0 64 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bricks}
    </svg>
  );
};
