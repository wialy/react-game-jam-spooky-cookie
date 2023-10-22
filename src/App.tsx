import { useEffect, useState } from "react";
import "./App.css";

import { Players } from "rune-games-sdk";
import { Collectibles } from "./components/collectibles";
import { Explosives } from "./components/explosives/explosives.component";
import { Level } from "./components/level";
import { Maze } from "./components/maze";
import { Player } from "./components/player";
import { ScoreUi } from "./components/score-ui";
import { useControls } from "./engine/hooks/use-controls";
import { GameState } from "./engine/types";

function App() {
  const [game, setGame] = useState<GameState>();
  const [runePlayers, setRunePlayers] = useState<Players>();
  const [playerId, setPlayerId] = useState<string>();

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game, players, yourPlayerId }) => {
        setGame(game);
        setRunePlayers(players);
        setPlayerId(yourPlayerId);
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
        <Explosives explosives={game.explosives} />
        {Object.entries(players).map(([id, player]) => (
          <Player key={id} player={player} isCurrent={id === playerId} />
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
      {runePlayers && playerId && (
        <ScoreUi
          players={runePlayers}
          scores={game.scores}
          playerId={playerId}
        />
      )}
    </>
  );
}

export default App;
