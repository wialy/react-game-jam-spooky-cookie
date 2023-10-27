import { Entity, isDestroyable } from "../../types/entities";

export const processHealth = ({
  entities,
}: {
  entities: Entity[];
}): { entities: Entity[] } => {
  return {
    entities: entities.filter((entity) => {
      if (isDestroyable(entity)) {
        return entity.health > 0;
      }

      return true;
    }),
  };
};
