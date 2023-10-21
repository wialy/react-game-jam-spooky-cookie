import { Players } from "rune-games-sdk";
import { GameState } from "../../engine";

export const ScoreUi = ({
  players,
  scores,
  playerId,
}: { players: Players; playerId: string } & Pick<GameState, "scores">) => {
  // Sort players to show playerId first
  const sortedPlayers = Object.entries(players).sort(
    ([id1], [id2]) => (id1 === playerId ? -1 : 1) - (id2 === playerId ? -1 : 1)
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {sortedPlayers.map(([id, player]) => (
        <div
          key={id}
          style={{
            display: "flex",
            flexDirection: id === playerId ? "row" : "row-reverse",
            padding: 8,
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: id === playerId ? "blue" : "red",
            color: "white",
            overflow: "hidden",
            gap: 8,
          }}
        >
          <img
            src={player.avatarUrl}
            alt=""
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
            }}
          />
          <div
            style={{
              fontSize: 13,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
              display: "flex",
              justifyContent: id === playerId ? "flex-start" : "flex-end",
            }}
          >
            {player.displayName}
          </div>

          <div
            style={{
              fontSize: 16,
              fontWeight: "bold",
              display: "flex",
              padding: "0 8px",
            }}
          >
            {scores[id] ?? 0}
          </div>
        </div>
      ))}
    </div>
  );
};
