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
        width: `${TILE_SIZE_VW * 1.01}vw`,
        height: `${TILE_SIZE_VW * 1.55}vw`,
      }}
      viewBox="0 0 64 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bricks}
    </svg>
  );
};

// const RADIUS = TILE_SIZE_VW / 4;
// <div
// style={{
//   width: `${TILE_SIZE_VW}vw`,
//   height: `${TILE_SIZE_VW * 1.25}vw`,
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   backgroundColor: "#1B212A",
//   borderRadius: `${RADIUS}vw`,
//   borderBottomLeftRadius: `${RADIUS / 2}vw`,
//   borderBottomRightRadius: `${RADIUS / 2}vw`,
// }}
// >
// <div
//   style={{
//     borderRadius: `${RADIUS}vw`,
//     width: `${TILE_SIZE_VW}vw`,
//     height: `${TILE_SIZE_VW}vw`,
//     backgroundColor: "#1E2632",
//     position: "absolute",
//     boxShadow: `inset 0 0 0 ${TILE_SIZE_VW / 32}vw #1B212A`,
//   }}
// />
// </div>
