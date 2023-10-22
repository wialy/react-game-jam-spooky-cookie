import { InitLogicUpdate } from "rune-games-sdk";
import { type GameState } from ".";
import { processMove } from "./utils/process-move";
import { processExplosives } from "./utils/process-explosives";

/**
 * @todo: refactor players' directions and positions updates code
 **/
export const update: InitLogicUpdate<GameState> = (state) => {
  if (!state.game.isRunning || state.game.isEnded) {
    return;
  }

  const { entities: movedEntities } = processMove({
    entities: state.game.entities,
  });

  const { entities: updatedEntities } = processExplosives({
    entities: movedEntities,
  });

  state.game.entities = updatedEntities;
};
