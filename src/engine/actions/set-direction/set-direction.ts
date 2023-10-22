import { ActionContext } from "rune-games-sdk";
import { GameActions, GameState, VELOCITIES } from "../..";
import { isMovable } from "../../types/entities";

export const setDirection = (
  { velocity }: Parameters<GameActions["setDirection"]>[0],
  { game, playerId }: ActionContext<GameState>
) => {
  const character = game.entities
    .filter(isMovable)
    .find(({ id }) => id === playerId);

  if (!character) {
    return;
  }

  character.velocity = VELOCITIES[velocity];
};
