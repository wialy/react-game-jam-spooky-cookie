import { InitLogicUpdate } from "rune-games-sdk";
import { type GameState } from ".";
import { isSpace } from "./types/entities";
import { processDamage } from "./utils/process-damage/process-damage";
import { processExplosives } from "./utils/process-explosives";
import { processHealth } from "./utils/process-health/process-health";
import { processMove } from "./utils/process-move";
import { processGhosts } from "./utils/process-ghosts";

export const update: InitLogicUpdate<GameState> = (state) => {
  if (!state.game.isRunning || state.game.isEnded) {
    return;
  }

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
    tick: state.game.tick,
  });

  const processedEntities = processedGhosts;

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

  state.game.tick = (state.game.tick ?? 0) + 1;

  if (isEnded && !state.game.isEnded) {
    const maxScore = Object.values(state.game.scores).reduce(
      (acc, value) => (value > acc ? value : acc),
      0
    );

    state.game.winnerId = Object.keys(state.game.scores).find(
      (id) => state.game.scores[id] === maxScore
    );

    state.game.isEnded = true;

    const scoresAmount = Object.keys(state.game.scores).length;

    // Determine WIN or LOST
    Rune.gameOver(
      scoresAmount > 1
        ? {
            players: Object.fromEntries(
              Object.entries(state.game.scores).map(([key, value]) => [
                key,
                value === maxScore ? "WON" : "LOST",
              ])
            ),
          }
        : undefined
    );
  }
};
