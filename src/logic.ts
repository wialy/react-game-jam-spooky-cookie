import type { RuneClient } from "rune-games-sdk/multiplayer";

import {
  type GameActions,
  type GameState,
  UPDATES_PER_SECOND,
  setDirection,
  setup,
  update,
} from "./engine";

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 2,
  setup,
  update,
  actions: {
    setDirection: setDirection,
  },
  updatesPerSecond: UPDATES_PER_SECOND,
});
