import { Entity, isExplosive } from "../../types/entities";

export const processExplosives = ({
  entities,
}: {
  entities: Entity[];
}): { entities: Entity[] } => {
  const newEntities = [];

  for (const entity of entities) {
    if (isExplosive(entity)) {
      entity.timer--;
      if (entity.timer >= 0) {
        newEntities.push(entity);
      }
      continue;
    }

    newEntities.push(entity);
  }

  return { entities: newEntities };
};
