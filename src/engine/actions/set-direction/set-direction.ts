import { ActionContext } from "rune-games-sdk";
import { GameActions, GameState, VELOCITIES } from "../..";
import { isMovable } from "../../types/entities";
import { addExplosive } from "../add-explosive";

export const setDirection = (
  { velocity }: Parameters<GameActions["setDirection"]>[0],
  { game, playerId, allPlayerIds }: ActionContext<GameState>
) => {
  const character = game.entities
    .filter(isMovable)
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
