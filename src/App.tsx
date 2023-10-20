import { useEffect, useState } from "react";
import "./App.css";

import { Level } from "./components/level";
import { Maze } from "./components/maze";
import { Player } from "./components/player";
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

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card">
        <Level>
          <Maze maze={game.maze} />
          {Object.entries(game.players).map(([id, player]) => (
            <Player key={id} player={player} />
          ))}
        </Level>
        <pre>{/* <code>{JSON.stringify(game.players, null, 2)}</code> */}</pre>
      </div>
    </>
  );
}

export default App;
