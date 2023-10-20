import { InitLogicUpdate } from "rune-games-sdk";
import { type GameState } from ".";
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
};
