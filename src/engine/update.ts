import { InitLogicUpdate } from "rune-games-sdk";
import { type GameState } from ".";
import { processExplosives } from "./utils/process-explosives";
import { processMove } from "./utils/process-move";

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

  const { entities: updatedEntities, entitiesAdded } = processExplosives({
    entities: movedEntities,
    entitiesCounter: state.game.entitiesCounter,
  });

  state.game.entities = updatedEntities;
  state.game.entitiesCounter += entitiesAdded;
};
