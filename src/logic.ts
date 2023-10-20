import type { RuneClient } from "rune-games-sdk/multiplayer";

import { UPDATES_PER_SECOND, setup, update } from "./engine";
import { GameActions, GameState } from "./engine/types";

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 2,
  setup,
  update,
  actions: {
    increment: ({ amount }, { game, playerId }) => {
      game.scores[playerId] = (game.scores[playerId] ?? 0) + amount;
    },
  },
  updatesPerSecond: UPDATES_PER_SECOND,
});
