import { InitLogicUpdate } from "rune-games-sdk";
import { START_DELAY, type GameState } from ".";
import { isSpace } from "./types/entities";
import { processBots } from "./utils/process-bots";
import { processDamage } from "./utils/process-damage/process-damage";
import { processExplosives } from "./utils/process-explosives";
import { processGhosts } from "./utils/process-ghosts";
import { processHealth } from "./utils/process-health/process-health";
import { processMove } from "./utils/process-move";

export const update: InitLogicUpdate<GameState> = (state) => {
  if (state.game.isEnded) {
    return;
  }

  const tick = state.game.tick ?? 0;

  state.game.tick = tick + 1;

  if (!state.game.isRunning && tick < START_DELAY) {
    return;
  }

  state.game.isRunning = true;

  const { entities, entitiesCounter, scores } = state.game;

  const { entities: processedHealth } = processHealth({
    entities,
  });

  const { entities: processedExplosives, entitiesAdded } = processExplosives({
    entities: processedHealth,
    entitiesCounter,
  });

  const { entities: processedMove } = processMove({
    entities: processedExplosives,
  });

  const { entities: processedDamage } = processDamage({
    entities: processedMove,
  });

  const { entities: processedGhosts } = processGhosts({
    entities: processedDamage,
    tick,
  });

  const { entities: processedBots } = processBots({
    entities: processedGhosts,
    tick,
  });

  const processedEntities = processedBots;

  state.game.scores = processedEntities.reduce((acc, entity) => {
    if (!isSpace(entity)) {
      return acc;
    }

    const { playerId } = entity;

    if (!playerId) {
      return acc;
    }

    acc[playerId] = (acc[playerId] ?? 0) + 1;

    return acc;
  }, Object.fromEntries(Object.entries(scores).map(([key]) => [key, 0])));

  const shouldContinue = processedEntities.some((entity) => {
    if (!isSpace(entity)) {
      return false;
    }

    const { playerId } = entity;

    if (playerId) {
      return false;
    }

    return true;
  });

  state.game.entities = processedEntities;
  state.game.entitiesCounter += entitiesAdded;

  if (!shouldContinue && !state.game.isEnded) {
    const maxScore = Object.values(state.game.scores).reduce(
      (acc, value) => (value > acc ? value : acc),
      0
    );

    state.game.winnerId = Object.keys(state.game.scores).find(
      (id) => state.game.scores[id] === maxScore
    );

    state.game.isEnded = true;

    const playerScores = Object.fromEntries(
      Object.entries(state.game.scores).filter(([key]) =>
        state.allPlayerIds.includes(key)
      )
    );

    Rune.gameOver({
      players: playerScores,
    });
  }
};
