import { ActionContext } from "rune-games-sdk";
import { GameActions, GameState, VELOCITIES } from "../..";
import { isCharacter } from "../../types/entities";

export const setDirection = (
  { velocity }: Parameters<GameActions["setDirection"]>[0],
  { game, playerId }: ActionContext<GameState>
) => {
  const character = game.entities
    .filter(isCharacter)
    .find(({ id }) => id === playerId);

  if (!character || character.timer > 0) {
    throw Rune.invalidAction();
  }

  character.velocity = VELOCITIES[velocity];
};
