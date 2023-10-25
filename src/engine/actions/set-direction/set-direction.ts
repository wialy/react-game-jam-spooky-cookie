import { ActionContext } from "rune-games-sdk";
import { DEBUG, GameActions, GameState, VELOCITIES } from "../..";
import { isCharacter } from "../../types/entities";
import { addExplosive } from "../add-explosive";

export const setDirection = (
  { velocity }: Parameters<GameActions["setDirection"]>[0],
  { game, playerId, allPlayerIds }: ActionContext<GameState>
) => {
  if (DEBUG) {
    const otherCharacter = game.entities
      .filter(isCharacter)
      .find(({ id }) => id !== playerId);

    if (otherCharacter) {
      if (
        otherCharacter.velocity[0] === 0 &&
        otherCharacter.velocity[1] === 0
      ) {
        addExplosive(
          {
            position: otherCharacter.position,
          },
          {
            allPlayerIds,
            game,
            playerId,
          }
        );
      }

      otherCharacter.velocity = [...VELOCITIES[velocity]];
    }
  }

  const character = game.entities
    .filter(isCharacter)
    .find(({ id }) => id === playerId);

  if (!character || character.timer > 0) {
    return;
  }

  character.velocity = VELOCITIES[velocity];
};
