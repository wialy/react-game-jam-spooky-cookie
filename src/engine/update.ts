import { InitLogicUpdate } from "rune-games-sdk";
import { type GameState } from ".";
import { isSpace } from "./types/entities";
import { processDamage } from "./utils/process-damage/process-damage";
import { processExplosives } from "./utils/process-explosives";
import { processMove } from "./utils/process-move";

export const update: InitLogicUpdate<GameState> = (state) => {
  if (!state.game.isRunning || state.game.isEnded) {
    return;
  }

  const { entities, entitiesCounter, scores } = state.game;

  const { entities: processedExplosives, entitiesAdded } = processExplosives({
    entities,
    entitiesCounter,
  });

  const { entities: processedMove } = processMove({
    entities: processedExplosives,
  });

  const { entities: processedDamage } = processDamage({
    entities: processedMove,
  });

  const processedEntities = processedDamage;

  state.game.scores = processedEntities.reduce((acc, entity) => {
    if (!isSpace(entity)) {
      return acc;
    }

    const { playerId } = entity;

    if (!playerId) {
      return acc;
    }

    if (!acc[playerId]) {
      acc[playerId] = 0;
    }

    acc[playerId]++;

    return acc;
  }, Object.fromEntries(Object.entries(scores).map(([key]) => [key, 0])));

  const isEnded = processedEntities.every((entity) => {
    if (!isSpace(entity)) {
      return true;
    }

    const { playerId } = entity;

    if (playerId) {
      return true;
    }

    return false;
  });

  state.game.entities = processedEntities;
  state.game.entitiesCounter += entitiesAdded;

  if (isEnded && !state.game.isEnded) {
    state.game.isEnded = true;
    state.game.winnerId = Object.entries(state.game.scores).reduce(
      (acc, [key, value]) => (value > acc[1] ? [key, value] : acc),
      ["", 0]
    )[0];

    Rune.gameOver({
      players: scores,
      delayPopUp: true,
    });
  }
};
