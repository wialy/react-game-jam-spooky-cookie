import { ActionContext } from "rune-games-sdk";
import { GameState, ZERO_COORDINATES } from "../..";
import { isExplosive, isSpace } from "../../types/entities";
import { Coordinates } from "../../types/physics";
import { createEntity } from "../../utils/create-entity";
import { isEqualPosition } from "../../utils/is-equal-position";

export const addExplosive = (
  { position }: { position: Coordinates },
  { game }: ActionContext<GameState>
) => {
  const space = game.entities.find(
    (entity) => isSpace(entity) && isEqualPosition(entity.position, position)
  );

  if (!space) {
    return;
  }

  const explosive = game.entities.find(
    (entity) =>
      isExplosive(entity) && isEqualPosition(entity.position, position)
  );

  if (explosive) {
    return;
  }

  game.entities.push(
    createEntity({
      type: "explosive",
      position: [...position],
      id: `explosive-${game.entitiesCounter++}`,
      velocity: [...ZERO_COORDINATES],
    })
  );
};
