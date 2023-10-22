import { InitLogicUpdate } from "rune-games-sdk";
import { type GameState } from ".";
import { processMove } from "./utils/process-move";

/**
 * @todo: refactor players' directions and positions updates code
 **/
export const update: InitLogicUpdate<GameState> = (state) => {
  if (!state.game.isRunning || state.game.isEnded) {
    return;
  }

  const { entities } = processMove({ entities: state.game.entities });

  state.game.entities = entities;
};
