import { ActionContext } from "rune-games-sdk";
import { GameActions, GameState } from ".";

export const setDirection = (
  { direction }: Parameters<GameActions["setDirection"]>[0],
  { game, playerId }: ActionContext<GameState>
) => {
  const player = game.players[playerId];
  if (!player) return;

  player.deferredDirection = direction;
  player.deferredPosition = player.position;
};
