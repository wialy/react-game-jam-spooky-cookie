import { useEffect, useRef } from "react";
import { TILE_SIZE_VW } from "../../engine";

import styles from "./ghost.styles.module.css";

export const Ghost = ({ isVisible }: { isVisible?: boolean }) => {
  const direction = useRef(1);

  const wasVisible = useRef(isVisible);

  useEffect(() => {
    // reverse direction just before is visible
    if (isVisible) {
      if (!wasVisible.current) {
        direction.current = -1;
        wasVisible.current = true;
      }
    } else {
      wasVisible.current = false;
    }
  }, [isVisible]);

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
        width: `${TILE_SIZE_VW * 1}vw`,
        height: `${TILE_SIZE_VW * 1.5}vw`,
        transition: "opacity 1s ease-in",
        transform: `scale(${direction.current}, 1)`,
        opacity: isVisible ? 0.5 : 0,
      }}
    >
      <path
        d="M7.99988 32.5481C7.99988 19.2932 18.7451 8.54797 32 8.54797V8.54797C45.2548 8.54797 56 19.2931 56 32.548V80.5481H7.99988V32.5481Z"
        fill="#9ABABA"
        className={styles.pulse}
      />
      <g className={styles.pulse}>
        <circle cx="18" cy="78.5479" r="10" fill="#9ABABA" />
        <circle cx="32" cy="80.5479" r="12" fill="#9ABABA" />
        <circle cx="46" cy="78.5479" r="10" fill="#9ABABA" />
      </g>
      <g className={styles.pulse}>
        <path
          d="M16 48.5479C16 44.1296 19.5817 40.5479 24.0001 40.5479H48V48.5479C48 52.9662 44.4183 56.548 39.9999 56.548H24.0001C19.5817 56.548 16 52.9662 16 48.5479V48.5479Z"
          fill="#51807D"
          className={styles.chew}
        />
        <ellipse cx="28" cy="32.5479" rx="4" ry="3.99994" fill="#51807D" />
        <ellipse cx="44" cy="32.5479" rx="4" ry="3.99994" fill="#51807D" />
      </g>
    </svg>
  );
};
