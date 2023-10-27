import type { RuneClient } from "rune-games-sdk/multiplayer";

import {
  UPDATES_PER_SECOND,
  actions,
  setup,
  update,
  type GameActions,
  type GameState,
} from "./engine";

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

const DEFAULT_GAME_STATE: GameState = {
  entities: [],
  entitiesCounter: 0,
  scores: {},
  isRunning: false,
  isEnded: false,
  winnerId: undefined,
  tick: 0,
};

const reset = ({
  game,
  allPlayerIds,
}: {
  game: GameState;
  allPlayerIds: string[];
}) => {
  const newSetup = setup(allPlayerIds);

  game.entities = newSetup.entities ?? DEFAULT_GAME_STATE.entities;
  game.entitiesCounter =
    newSetup.entitiesCounter ?? DEFAULT_GAME_STATE.entitiesCounter;
  game.scores = newSetup.scores ?? DEFAULT_GAME_STATE.scores;
  game.isRunning = newSetup.isRunning ?? DEFAULT_GAME_STATE.isRunning;
  game.isEnded = newSetup.isEnded ?? DEFAULT_GAME_STATE.isEnded;
  game.winnerId = newSetup.winnerId ?? DEFAULT_GAME_STATE.winnerId;
  game.tick = newSetup.tick ?? DEFAULT_GAME_STATE.tick;
};

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 2,
  setup,
  update,
  actions,
  updatesPerSecond: UPDATES_PER_SECOND,
  events: {
    playerJoined(_playerId, { game, allPlayerIds }) {
      reset({ game, allPlayerIds });
    },
    playerLeft(playerId, { game, allPlayerIds }) {
      reset({ game, allPlayerIds });
    },
  },
});
