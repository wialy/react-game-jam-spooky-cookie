import { InitLogicUpdate } from "rune-games-sdk";
import { GameState } from ".";
import { movePlayer } from "./utils/move-player";

export const update: InitLogicUpdate<GameState> = (state) => {
  state.game.players = state.allPlayerIds.reduce<GameState["players"]>(
    (players, playerId) => {
      return movePlayer({
        game: { ...state.game, players: players },
        allPlayerIds: state.allPlayerIds,
        playerId,
      });
    },
    state.game.players
  );
};
