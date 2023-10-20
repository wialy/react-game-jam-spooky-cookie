import { useEffect, useState } from "react";
import "./App.css";

import { Collectibles } from "./components/collectibles";
import { Level } from "./components/level";
import { Maze } from "./components/maze";
import { Player } from "./components/player";
import { useControls } from "./engine/hooks/use-controls";
import { GameState } from "./engine/types";

function App() {
  const [game, setGame] = useState<GameState>();

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game }) => {
        setGame(game);
      },
    });
  }, []);

  const { swipeProps } = useControls();

  if (!game) {
    return <div>Loading...</div>;
  }

  const { maze, collectibles, players } = game;

  return (
    <>
      <Level>
        <Maze maze={maze} />
        <Collectibles collectibles={collectibles} />
        {Object.entries(players).map(([id, player]) => (
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
        {...swipeProps}
      />
    </>
  );
}

export default App;
