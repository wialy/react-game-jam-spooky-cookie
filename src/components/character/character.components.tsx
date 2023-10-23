import { useEffect, useState } from "react";
import { Coordinates } from "../../engine/types/physics";
import { CharacterBlue } from "./character-blue";
import { CharacterRed } from "./character-red";

import styles from "./styles.module.css";
import { TILE_SIZE_VW } from "../../engine";

export type CharacterState = "run" | "stand";
export const Character = ({
  velocity,
  isCurrent,
}: { velocity: Coordinates } & { isCurrent?: boolean }) => {
  const [x, y] = velocity;

  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (x < 0) {
      setScale(-1);
    } else if (x > 0) {
      setScale(1);
    }
  }, [x, y]);

  const state: CharacterState = x !== 0 || y !== 0 ? "run" : "stand";

  return (
    <div
      className={styles.container}
      style={{
        width: `${1.25 * TILE_SIZE_VW}vw`,
        height: `${1.25 * TILE_SIZE_VW}vw`,
        bottom: `${TILE_SIZE_VW / 8}vw`,
        transform: `scaleX(${scale}) rotate(${y === 0 ? 0 : y * 20}deg)`,
      }}
    >
      {isCurrent ? (
        <CharacterBlue state={state} />
      ) : (
        <CharacterRed state={state} />
      )}
    </div>
  );
};
