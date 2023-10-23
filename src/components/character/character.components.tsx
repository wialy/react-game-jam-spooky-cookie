import { useEffect, useState } from "react";
import { Coordinates } from "../../engine/types/physics";
import { CharacterBlue } from "./character-blue";
import { CharacterRed } from "./character-red";
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
      style={{
        position: "absolute",
        transform: `scaleX(${scale}) rotate(${y === 0 ? 0 : y * 20}deg)`,
        width: `${1.5 * TILE_SIZE_VW}vw`,
        height: `${1.5 * TILE_SIZE_VW}vw`,
        bottom: 0,
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
