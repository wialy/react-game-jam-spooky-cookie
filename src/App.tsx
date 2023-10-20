import { useEffect, useState } from "react";
import "./App.css";
import { GameState } from "./logic.ts";

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
        <button onClick={() => Rune.actions.increment({ amount: 1 })}>
          Increment
        </button>
        <pre>
          <code>{JSON.stringify(game, null, 2)}</code>
        </pre>
      </div>
    </>
  );
}

export default App;
