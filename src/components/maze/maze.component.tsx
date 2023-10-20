import { CELL_SIZE, GameState, SCALE } from "../../engine";
import styles from "./maze.module.css";

export const Maze = ({ maze }: Pick<GameState, "maze">) => {
  return (
    <>
      {maze.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <div
              key={j}
              className={styles.cell}
              style={{
                left: `${j * CELL_SIZE * SCALE}px`,
                top: `${i * CELL_SIZE * SCALE}px`,
                width: CELL_SIZE * SCALE,
                height: CELL_SIZE * SCALE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: cell === 1 ? "black" : "white",
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};
