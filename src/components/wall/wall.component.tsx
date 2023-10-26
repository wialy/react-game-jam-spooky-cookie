import { TILE_SIZE_VW } from "../../engine";

const RADIUS = TILE_SIZE_VW / 8;
export const Wall = () => {
  return (
    <div
      style={{
        width: `${TILE_SIZE_VW}vw`,
        height: `${TILE_SIZE_VW * 1.25}vw`,
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#1B212A",
        borderRadius: `${RADIUS}vw`,
      }}
    >
      <div
        style={{
          borderRadius: `${RADIUS}vw`,
          width: `${TILE_SIZE_VW}vw`,
          height: `${TILE_SIZE_VW}vw`,
          backgroundColor: "#1E2632",
          position: "absolute",
          top: 0,
          left: 0,
          boxShadow: `inset 0 0 0 ${TILE_SIZE_VW / 32}vw #1B212A`,
        }}
      />
    </div>
  );
};
