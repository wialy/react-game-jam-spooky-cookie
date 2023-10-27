import {
  DAMAGE_DISTANCE,
  DAMAGE_TIMER,
  VELOCITIES,
  ZERO_COORDINATES,
} from "../..";
import {
  Entity,
  isCrate,
  isDamage,
  isExplosive,
  isSpace,
} from "../../types/entities";
import { Coordinates } from "../../types/physics";
import { createEntity } from "../create-entity";
import { isEqualPosition } from "../is-equal-position";

const DIRECTIONS = [ZERO_COORDINATES, ...Object.values(VELOCITIES)];

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
        continue;
      }

      for (const direction of DIRECTIONS) {
        for (
          let radiusMultiplier = 1;
          radiusMultiplier < DAMAGE_DISTANCE;
          radiusMultiplier++
        ) {
          const nextPosition: Coordinates = [
            entity.position[0] + direction[0] * radiusMultiplier,
            entity.position[1] + direction[1] * radiusMultiplier,
          ];

          const nextEntities = entities.filter((nextEntity) =>
            isEqualPosition(nextEntity.position, nextPosition)
          );

          const space = nextEntities.find(isSpace);

          if (!space) {
            break;
          }

          const crate = nextEntities.find(isCrate);

          if (crate) {
            crate.health--;
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

      continue;
    }

    if (isDamage(entity)) {
      entity.timer--;

      if (entity.timer >= 0) {
        newEntities.push(entity);
      }

      continue;
    }

    newEntities.push(entity);
  }

  return { entities: newEntities, entitiesAdded };
};
