import { useRef } from "react";
import styles from "./damage.styles.module.css";
import { DAMAGE_TIMER, UPDATE_DURATION } from "../../engine";

export const Damage = () => {
  const size = "120%";

  const delays = useRef(
    Array.from({ length: 4 }, () => Math.random() * UPDATE_DURATION)
  );

  const durations = useRef(
    Array.from({ length: 4 }, () => (DAMAGE_TIMER + 1) * UPDATE_DURATION).map(
      (duration, index) => duration - delays.current[index] * 2
    )
  );

  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <g>
          <circle
            cx="32"
            cy="32.8053"
            r="24"
            fill="#EFDFDF"
            className={styles.smoke}
            style={{
              animationDuration: `${DAMAGE_TIMER * UPDATE_DURATION}ms`,
            }}
          />
          <circle
            cx="19.2313"
            cy="19.2313"
            r="19.2313"
            fill="#D9D9D9"
            className={styles.smoke}
            style={{
              animationDuration: `${durations.current[0]}ms`,
              animationDelay: `${delays.current[0]}ms`,
              transformOrigin: "25% 25%",
            }}
          />
          <circle
            cx="44.7687"
            cy="19.2313"
            r="19.2313"
            fill="#D9D9D9"
            className={styles.smoke}
            style={{
              animationDuration: `${durations.current[1]}ms`,
              animationDelay: `${delays.current[1]}ms`,
              transformOrigin: "75% 25%",
            }}
          />
          <circle
            cx="44.7687"
            cy="44.7687"
            r="19.2313"
            fill="#D9D9D9"
            className={styles.smoke}
            style={{
              transformOrigin: "75% 75%",
              animationDuration: `${durations.current[2]}ms`,
              animationDelay: `${delays.current[2]}ms`,
            }}
          />
          <circle
            cx="19.2313"
            cy="44.7687"
            r="19.2313"
            fill="#D9D9D9"
            className={styles.smoke}
            style={{
              animationDuration: `${durations.current[3]}ms`,
              animationDelay: `${delays.current[3]}ms`,
              transformOrigin: "25% 75%",
            }}
          />
        </g>
      </svg>
    </div>
  );
};
