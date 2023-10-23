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

  if (!character) {
    return;
  }

  const [vx, vy] = character.velocity;

  if (vx === 0 && vy === 0) {
    // addExplosive(
    //   { position: character.position },
    //   { allPlayerIds, game, playerId }
    // );
  }
  character.velocity = VELOCITIES[velocity];
};
