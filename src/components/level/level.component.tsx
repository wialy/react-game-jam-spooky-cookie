import { ReactNode, useEffect, useState } from "react";
import {
  FREEZE_TIMER,
  MAZE_HEIGHT,
  MAZE_WIDTH,
  TILE_SIZE_VW,
  UPDATE_DURATION,
} from "../../engine";
import { Coordinates } from "../../engine/types/physics";

export const Level = ({
  children,
  shouldZoom,
  zoomPosition,
}: {
  shouldZoom?: boolean;
  zoomPosition?: Coordinates;
  children: ReactNode;
}) => {
  const translatePosition = zoomPosition
    ? [-zoomPosition[0] - 0.5, -zoomPosition[1] - 0.5]
    : [-MAZE_WIDTH / 2, -MAZE_HEIGHT / 2];

  const translatePositionVw = translatePosition.map(
    (position) => position * TILE_SIZE_VW
  );

  const translateTransform = `translate(${translatePositionVw[0]}vw, ${translatePositionVw[1]}vw)`;
  const transition = `all ${UPDATE_DURATION * FREEZE_TIMER}ms ease-in-out`;

  const [minZoom, setMinZoom] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const deviceRatio = window.innerWidth / window.innerHeight;

      const levelRatio = MAZE_WIDTH / MAZE_HEIGHT;

      setMinZoom(deviceRatio > levelRatio ? 1 - 4 / MAZE_HEIGHT : 1);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `scale(${shouldZoom ? 2 : minZoom})`,
        transition,
      }}
    >
      <div
        style={{
          transition,
          position: "absolute",
          transform: translateTransform,
        }}
      >
        {children}
      </div>
    </div>
  );
};
