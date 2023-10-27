import { TILE_SIZE_VW } from "../../engine";

const RADIUS = TILE_SIZE_VW / 4;
export const Crate = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: 0,
        width: `${TILE_SIZE_VW * 1.01}vw`,
        height: `${TILE_SIZE_VW * 1.55}vw`,
      }}
    >
      <rect
        x="0.5"
        y="1.04797"
        width="63"
        height="63"
        rx="1.5"
        fill="#862289"
        stroke="#611164"
      />
      <rect
        x="56"
        y="8.54797"
        width="48"
        height="16"
        rx="2"
        transform="rotate(90 56 8.54797)"
        stroke="#611164"
      />
      <rect
        x="40"
        y="8.54797"
        width="48"
        height="16"
        rx="2"
        transform="rotate(90 40 8.54797)"
        stroke="#611164"
      />
      <rect
        x="24"
        y="8.54797"
        width="48"
        height="16"
        rx="2"
        transform="rotate(90 24 8.54797)"
        stroke="#611164"
      />
      <rect
        x="63.5"
        y="80.048"
        width="63"
        height="15"
        rx="1.5"
        transform="rotate(-180 63.5 80.048)"
        fill="#611164"
        stroke="#862289"
      />
      <rect
        x="63.5"
        y="96.048"
        width="63"
        height="15"
        rx="1.5"
        transform="rotate(-180 63.5 96.048)"
        fill="#611164"
        stroke="#862289"
      />
    </svg>
  );
};
