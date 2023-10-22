import { ActionContext } from "rune-games-sdk";
import { GameState } from "../..";
import { handleAddExplosive } from "./handle-add-explosive";

export const addExplosive = (
  _: undefined,
  { game, playerId }: ActionContext<GameState>
) => {
  const player = game.players[playerId];

  if (!player) {
    return;
  }

  game.explosives = handleAddExplosive({
    player,
    playerId,
    explosives: game.explosives,
    time: Rune.gameTime(),
  });
};
