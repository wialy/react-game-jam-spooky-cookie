import { Players } from "rune-games-sdk";
import { GameState, SKIN_COLORS } from "../../engine";
import { Character } from "../../engine/types/entities";

export const ScoreUi = ({
  players,
  scores,
  playerId,
  playerSkins: skins,
}: {
  players: Players;
  playerId: string;
  playerSkins: Array<Pick<Character, "id" | "skin">>;
} & Pick<GameState, "scores">) => {
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
        overflow: "hidden",
      }}
    >
      {sortedPlayers.map(([id, player], index) => {
        const skin = skins.find((skin) => skin.id === id)?.skin;
        const score = scores[id] ?? 0;

        return (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: index === 0 ? "row" : "row-reverse",
              padding: 8,
              flex: 200 + score,
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: skin ? SKIN_COLORS[skin][0] : "black",
              color: "white",
              overflow: "hidden",
              gap: 8,
              transition: "flex 0.5s ease-in-out",
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
                fontSize: 24,
                fontWeight: "bold",
                display: "flex",
                padding: "0 8px",
              }}
            >
              {score}
            </div>
          </div>
        );
      })}
    </div>
  );
};
