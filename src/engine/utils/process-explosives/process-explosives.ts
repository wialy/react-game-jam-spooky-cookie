import { DAMAGE_DISTANCE, DAMAGE_TIMER, VELOCITIES } from "../..";
import { Entity, isDamage, isExplosive, isSpace } from "../../types/entities";
import { Coordinates } from "../../types/physics";
import { createEntity } from "../create-entity";
import { isEqualPosition } from "../is-equal-position";

export const processExplosives = ({
  entities,
  entitiesCounter,
}: {
  entities: Entity[];
  entitiesCounter: number;
}): { entities: Entity[]; entitiesAdded: number } => {
  const newEntities = [];
  let entitiesAdded = 0;

  for (const entity of entities) {
    if (isExplosive(entity)) {
      entity.timer--;
      if (entity.timer >= 0) {
        newEntities.push(entity);
      } else {
        for (const direction of Object.values(VELOCITIES)) {
          for (let distance = 0; distance < DAMAGE_DISTANCE; distance++) {
            const nextPosition: Coordinates = [
              entity.position[0] + direction[0] * distance,
              entity.position[1] + direction[1] * distance,
            ];

            const nextEntity = entities.find((e) =>
              isEqualPosition(e.position, nextPosition)
            );

            if (!nextEntity || !isSpace(nextEntity)) {
              break;
            }

            newEntities.push(
              createEntity({
                type: "damage",
                position: nextPosition,
                direction: direction,
                timer: DAMAGE_TIMER,
                id: `damage-${nextPosition[0]}-${nextPosition[1]}-${
                  entitiesCounter + entitiesAdded + 1
                }`,
              })
            );
            entitiesAdded++;
          }
        }
      }

      continue;
    } else if (isDamage(entity)) {
      entity.timer--;

      if (entity.timer >= 0) {
        newEntities.push(entity);
      }

      continue;
    }

    newEntities.push(entity);
  }

  for (const entity of newEntities) {
    if (isDamage(entity)) {
      for (const otherEntity of newEntities) {
        if (
          isExplosive(otherEntity) &&
          isEqualPosition(entity.position, otherEntity.position)
        ) {
          otherEntity.timer = 0;
        }
      }
    }
  }

  return { entities: newEntities, entitiesAdded };
};
