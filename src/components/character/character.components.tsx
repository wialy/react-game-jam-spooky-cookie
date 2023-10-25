import { useEffect, useState } from "react";
import { Coordinates } from "../../engine/types/physics";
import { CharacterBlue } from "./character-blue";
import { CharacterRed } from "./character-red";

import { TILE_SIZE_VW } from "../../engine";
import styles from "./styles.module.css";

export type CharacterState = "run" | "idle" | "freeze" | "win";
export const Character = ({
  velocity,
  timer,
  skin,
  isWinner,
}: {
  velocity: Coordinates;
  timer?: number;
  skin?: string;
  isWinner?: boolean;
}) => {
  const [x, y] = velocity;

  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale((scale) => (x < 0 ? -1 : x > 0 ? 1 : scale));
  }, [x]);

  const state: CharacterState = timer
    ? "freeze"
    : isWinner
    ? "win"
    : x !== 0 || y !== 0
    ? "run"
    : "idle";

  return (
    <div
      className={styles.container}
      style={{
        width: `${1.4 * TILE_SIZE_VW}vw`,
        height: `${1.4 * TILE_SIZE_VW}vw`,
        bottom: `${TILE_SIZE_VW / 8}vw`,
        transform: `translateX(${
          -TILE_SIZE_VW / 12
        }vw) scaleX(${scale}) rotate(${y === 0 ? 0 : y * 20}deg)`,
      }}
    >
      {skin === "blue" ? (
        <CharacterBlue state={state} />
      ) : (
        <CharacterRed state={state} />
      )}
    </div>
  );
};
