import { InitLogicUpdate } from "rune-games-sdk";
import { COLLECTIBLE_SIZE, type GameState } from ".";
import { movePlayer } from "./utils/move-player";
import { updateDirection } from "./utils/update-direction";

export const update: InitLogicUpdate<GameState> = (state) => {
  const updatedPlayers: GameState["players"] = {};

  for (const playerId of state.allPlayerIds) {
    let player = state.game.players[playerId];

    if (!player) {
      continue;
    }

    player = updateDirection({
      game: state.game,
      player,
    });

    updatedPlayers[playerId] = player;
  }

  state.game.players = state.allPlayerIds.reduce<GameState["players"]>(
    (players, playerId) =>
      movePlayer({
        game: { ...state.game, players: players },
        allPlayerIds: state.allPlayerIds,
        playerId,
      }),
    updatedPlayers
  );

  state.game.collectibles = state.game.collectibles?.map((collectible) => {
    const playerAtCollectible = state.allPlayerIds.find(
      (id) =>
        Math.abs(
          state.game.players[id].position.x - collectible.x + COLLECTIBLE_SIZE
        ) < COLLECTIBLE_SIZE &&
        Math.abs(
          state.game.players[id].position.y - collectible.y + COLLECTIBLE_SIZE
        ) < COLLECTIBLE_SIZE
    );

    if (playerAtCollectible) {
      state.game.scores[playerAtCollectible] =
        (state.game.scores[playerAtCollectible] ?? 0) + collectible.score;

      return {
        ...collectible,
        isCollected: true,
      };
    }

    return collectible;
  });
};
