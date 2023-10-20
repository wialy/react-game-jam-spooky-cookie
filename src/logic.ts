import type { RuneClient } from "rune-games-sdk/multiplayer";

export type GameState = {
  scores: Record<string, number>;
};

type GameActions = {
  increment: (params: { amount: number }) => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 2,
  setup: (): GameState => {
    return { scores: {} };
  },
  actions: {
    increment: ({ amount }, { game, playerId }) => {
      game.scores[playerId] = (game.scores[playerId] ?? 0) + amount;
    },
  },
});
