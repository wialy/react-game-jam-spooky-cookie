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

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 2,
  setup,
  update,
  actions,
  updatesPerSecond: UPDATES_PER_SECOND,
});
