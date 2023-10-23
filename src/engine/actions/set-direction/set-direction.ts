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
      otherCharacter.velocity = [
        -VELOCITIES[velocity][0],
        VELOCITIES[velocity][1],
      ];
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
    character.velocity = VELOCITIES[velocity];

    addExplosive(undefined, { allPlayerIds, game, playerId });
  }
};
