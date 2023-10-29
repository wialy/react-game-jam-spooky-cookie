import { Player, Players } from "rune-games-sdk";
import { GameState, MAZE_HEIGHT, MAZE_WIDTH, SKIN_COLORS } from "../../engine";
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
  const mergedPlayers = {
    ...players,
    ...Object.fromEntries(
      Object.entries(scores)
        .filter(([id]) => id === "bot")
        .map(([id]) => [
          id,
          {
            avatarUrl: "bot-avatar.png",
            displayName: "Mensa",
            playerId: id,
          } as Player,
        ])
    ),
  };

  // Sort players to show playerId first
  const sortedPlayers = Object.entries(mergedPlayers).sort(
    ([id1], [id2]) => (id1 === playerId ? -1 : 1) - (id2 === playerId ? -1 : 1)
  );

  return (
    <div
      style={{
        position: "fixed",
        top: "0.5em",
        left: "0.5em",
        right: "0.5em",
        display: "flex",
        overflow: "hidden",
        borderRadius: 32,
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
              padding: 2,
              flex: MAZE_HEIGHT * MAZE_WIDTH + score,
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
                fontWeight: "bold",
                flex: 1,
                display: "flex",
                justifyContent: id === playerId ? "flex-start" : "flex-end",
                textAlign: id === playerId ? "left" : "right",
              }}
            >
              {player.displayName}
            </div>

            <div
              style={{
                fontSize: 24,
                lineHeight: "16px",
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
