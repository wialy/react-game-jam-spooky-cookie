import {
  Entity,
  isCharacter,
  isDamage,
  isExplosive,
  isSpace,
  isWall,
} from "../../types/entities";

export const getLights = ({
  entities,
  maxDistance = 3,
}: {
  entities: Entity[];
  maxDistance?: number;
}): { lights: Record<string, number> } => {
  const lights: Record<string, number> = entities.reduce((acc, entity) => {
    if (!isSpace(entity) && !isWall(entity)) {
      return acc;
    }

    const lightness = entities.reduce((acc, neighbor) => {
      const distance = Math.sqrt(
        Math.pow(entity.position[0] - neighbor.position[0], 2) +
          Math.pow(entity.position[1] - neighbor.position[1], 2)
      );

      const isNeighbor = distance < maxDistance;

      if (!isNeighbor) {
        return acc;
      }

      const ratio = (maxDistance - distance) / maxDistance;

      if (isCharacter(neighbor) || isDamage(neighbor)) {
        return acc + 1 * ratio;
      }

      if (isExplosive(neighbor)) {
        return acc + 2 * ratio;
      }

      if (isWall(neighbor)) {
        return acc / (1.5 * ratio);
      }

      return acc;
    }, 0);

    return {
      ...acc,
      [entity.id]: lightness,
    };
  }, {} as Record<string, number>);

  return { lights };
};
