import { InitLogicUpdate } from "rune-games-sdk";
import { type GameState } from ".";
import { movePlayer } from "./utils/move-player";
import { updateCollectibles } from "./utils/update-collectibles";
import { updateDirection } from "./utils/update-direction";
import { updateScores } from "./utils/update-scores";
import { updateIsEnded } from "./utils/update-is-ended";

/**
 * @todo: refactor players' directions and positions updates code
 **/
export const update: InitLogicUpdate<GameState> = (state) => {
  if (!state.game.isRunning || state.game.isEnded) {
    return;
  }

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

  state.game.collectibles = updateCollectibles({
    collectibles: state.game.collectibles,
    allPlayerIds: state.allPlayerIds,
    players: state.game.players,
  });

  state.game.scores = updateScores({
    scores: state.game.scores,
    collectibles: state.game.collectibles,
  });

  state.game.isEnded = updateIsEnded({
    collectibles: state.game.collectibles,
  });

  if (state.game.isEnded) {
    state.game.isRunning = false;
  }
};
