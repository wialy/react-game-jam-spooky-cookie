import { GameState, SCALE } from "../../engine";
import styles from "./maze.module.css";

export const Maze = ({ maze }: Pick<GameState, "maze">) => {
  return (
    <div className={styles.maze}>
      {maze.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <div
              key={j}
              className={styles.cell}
              style={{ left: `${j * SCALE}px`, top: `${i * SCALE}px` }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
