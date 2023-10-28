import { BOT_ID, VELOCITIES } from "../..";
import {
  Character,
  Entity,
  isCharacter,
  isCrate,
  isDamage,
  isExplosive,
  isSpace,
  isWall,
} from "../../types/entities";
import { Coordinates, Direction } from "../../types/physics";
import { createEntity } from "../create-entity";
import { isEqualPosition } from "../is-equal-position";

export const processBots = ({
  entities,
  tick,
}: {
  entities: Entity[];
  tick: number;
}) => {
  const { bots, other, characters } = entities.reduce<{
    bots: Character[];
    other: Entity[];
    characters: Character[];
  }>(
    (acc, entity) => {
      if (isCharacter(entity)) {
        if (entity.id === BOT_ID) {
          return {
            ...acc,
            bots: [...acc.bots, entity],
          };
        }

        return {
          ...acc,
          characters: [...acc.characters, entity],
        };
      }

      return { ...acc, other: [...acc.other, entity] };
    },
    { bots: [], other: [], characters: [] }
  );

  if (!bots.length) {
    return { entities };
  }

  const updatedBots = bots.map((bot) => {
    const { position, velocity, previousPosition, timer } = bot;

    if (timer > 0) {
      return bot;
    }

    const neighbors = other.filter((entity) => {
      const { position: entityPosition } = entity;

      return (
        Math.abs(position[0] - entityPosition[0]) +
          Math.abs(position[1] - entityPosition[1]) ===
        1
      );
    });

    const rate: Record<Direction, number> = {
      UP: 0,
      DOWN: 0,
      LEFT: 0,
      RIGHT: 0,
    };

    const potentialDirections = Object.entries(VELOCITIES);

    const currentDistanceToCharacter = characters.length
      ? Math.abs(position[0] - characters[0].position[0]) +
        Math.abs(position[1] - characters[0].position[1])
      : 0;

    potentialDirections.forEach(([direction, velocity]) => {
      const newPosition = [
        position[0] + velocity[0],
        position[1] + velocity[1],
      ] as Coordinates;

      const newDistanceToCharacter = characters.length
        ? Math.abs(
            newPosition[0] -
              characters[0].position[0] +
              newPosition[1] -
              characters[0].position[1]
          )
        : 0;

      rate[direction as Direction] = neighbors
        .filter((entity) => isEqualPosition(entity.position, newPosition))
        .reduce((acc, entity) => {
          if (isSpace(entity)) {
            if (entity.playerId === undefined) {
              return acc + 50;
            } else {
              return acc + 25;
            }
          }

          if (isCharacter(entity)) {
            return acc - 100;
          }

          if (isCrate(entity)) {
            return acc - 100;
          }

          if (isWall(entity)) {
            return acc - 100;
          }

          if (isExplosive(entity) || isDamage(entity)) {
            return acc - 200;
          }

          return acc;
        }, 0);

      if (newDistanceToCharacter > currentDistanceToCharacter) {
        rate[direction as Direction] += 1;
      }
    });

    const maxRatedDirection = Object.entries(rate).reduce(
      (acc, [direction, rate]) => {
        if (rate > acc.rate) {
          return { direction: direction as Direction, rate };
        }

        return acc;
      },
      { direction: Object.keys(potentialDirections)[0] ?? "DOWN", rate: 0 }
    ).direction as Direction;

    return {
      ...bot,
      velocity: VELOCITIES[maxRatedDirection] ?? VELOCITIES.DOWN,
    };
  });

  const explosives: Entity[] = [];

  if (tick > 0 && (tick % 17 === 0 || tick % 13 === 0)) {
    updatedBots.forEach((bot) => {
      if (bot.timer > 0) {
        return;
      }

      explosives.push(
        createEntity({
          type: "explosive",
          position: [...bot.position],
          id: `explosive-${bot.id}-${tick}`,
        })
      );
    });
  }

  return {
    entities: [...other, ...characters, ...explosives, ...updatedBots],
  };
};
