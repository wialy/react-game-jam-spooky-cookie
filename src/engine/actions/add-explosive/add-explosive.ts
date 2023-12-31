import { ActionContext } from "rune-games-sdk";
import { GameState, ZERO_COORDINATES } from "../..";
import { Character, isExplosive, isSpace } from "../../types/entities";
import { Coordinates } from "../../types/physics";
import { createEntity } from "../../utils/create-entity";
import { isEqualPosition } from "../../utils/is-equal-position";

export const addExplosive = (
  { position }: { position: Coordinates },
  { game, playerId }: ActionContext<GameState>
) => {
  const character = game.entities.find(
    (entity) => entity.id === playerId
  ) as Character;

  if (character.isPlacementLocked) {
    throw Rune.invalidAction();
  }

  const space = game.entities.find(
    (entity) => isSpace(entity) && isEqualPosition(entity.position, position)
  );

  if (!space) {
    throw Rune.invalidAction();
  }

  const explosive = game.entities.find(
    (entity) =>
      isExplosive(entity) && isEqualPosition(entity.position, position)
  );

  if (explosive) {
    throw Rune.invalidAction();
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
