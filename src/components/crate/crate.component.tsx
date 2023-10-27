import { TILE_SIZE_VW } from "../../engine";
import { Destroyable } from "../../engine/types/entities";
import { woodenPurple } from "./crate.skins";

import styles from "./crate.styles.module.css";

export const Crate = ({ health }: Pick<Destroyable, "health">) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: 0,
          width: `${TILE_SIZE_VW * 1.01}vw`,
          height: `${TILE_SIZE_VW * 1.25}vw`,
        }}
        className={health <= 0 ? styles.blink : undefined}
      >
        {woodenPurple}
      </svg>
    </>
  );
};
