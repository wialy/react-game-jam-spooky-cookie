import { FREEZE_TIMER } from "../..";
import {
  Entity,
  isCharacter,
  isDamage,
  isExplosive,
  isSpace,
} from "../../types/entities";
import { isEqualPosition } from "../is-equal-position";

export const processDamage = ({
  entities,
}: {
  entities: Entity[];
}): { entities: Entity[] } => {
  const characters = entities.filter(isCharacter);
  const damages = entities.filter(isDamage);
  const explosives = entities.filter(isExplosive);
  const otherEntities = entities.filter(
    (entity) =>
      !isCharacter(entity) && !isDamage(entity) && !isExplosive(entity)
  );

  const newCharacters = characters.map((character) => {
    if (character.timer > 0) {
      return {
        ...character,
        timer: character.timer - 1,
      };
    }

    const isDamaged = damages.some((damage) =>
      isEqualPosition(character.position, damage.position)
    );

    if (isDamaged) {
      return {
        ...character,
        velocity: [0, 0],
        timer: FREEZE_TIMER,
      };
    }

    return character;
  });

  const newExplosives = explosives.map((explosive) => {
    const isDamaged = damages.some((damage) =>
      isEqualPosition(explosive.position, damage.position)
    );

    if (isDamaged) {
      return {
        ...explosive,
        timer: 0,
      };
    }

    return explosive;
  });

  const damagedCharacterIds = newCharacters
    .filter((character) => character.timer === FREEZE_TIMER)
    .map((character) => character.id);

  if (damagedCharacterIds) {
    const spaces = otherEntities.filter(isSpace);

    spaces.forEach((space) => {
      if (!space.playerId) {
        return;
      }

      if (damagedCharacterIds.includes(space.playerId)) {
        space.playerId = undefined;
      }
    });
  }

  return {
    entities: [
      ...otherEntities,
      ...newCharacters,
      ...newExplosives,
      ...damages,
    ],
  };
};
