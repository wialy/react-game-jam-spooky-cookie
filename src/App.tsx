import { useEffect, useState } from "react";
import "./App.css";

import { Level } from "./components/level";
import { Maze } from "./components/maze";
import { Player } from "./components/player";
import { Direction, GameState } from "./engine/types";
import { useSwipeable } from "react-swipeable";

function App() {
  const [game, setGame] = useState<GameState>();

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game }) => {
        setGame(game);
      },
    });
  }, []);

  const controls = useSwipeable({
    onSwiped: ({ dir }) => {
      const direction = dir.toUpperCase() as Direction;

      Rune.actions.setDirection({ direction });
    },
    onTap: () => {
      //
    },
    trackMouse: true,
    trackTouch: true,
  });

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Level>
        <Maze maze={game.maze} />
        {Object.entries(game.players).map(([id, player]) => (
          <Player key={id} player={player} />
        ))}
      </Level>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        {...controls}
      />
    </>
  );
}

export default App;
