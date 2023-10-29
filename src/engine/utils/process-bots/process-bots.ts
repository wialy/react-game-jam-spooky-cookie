import { BOT_ID, VELOCITIES } from "../..";
import {
  Character,
  Entity,
  isCharacter,
  isCrate,
  isDamage,
  isExplosive,
  isMovable,
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

  const explosives: Entity[] = [];

  const updatedBots = bots.map((bot) => {
    const { position, timer, previousPosition } = bot;

    if (timer > 0) {
      return bot;
    }

    const isAtSamePosition = previousPosition
      ? isEqualPosition(position, previousPosition)
      : true;

    const isExplosiveAllowed = !entities.some(
      (entity) =>
        isExplosive(entity) && isEqualPosition(entity.position, position)
    );

    const neighbors = Object.entries(VELOCITIES).reduce<
      Partial<Record<Direction, Entity[]>>
    >((acc, [direction, velocity]) => {
      const newPosition: Coordinates = [
        position[0] + velocity[0],
        position[1] + velocity[1],
      ];

      const entitiesAtNewPosition = entities.filter((entity) =>
        isEqualPosition(entity.position, newPosition)
      );

      if (!entitiesAtNewPosition) {
        return acc;
      }

      if (
        entitiesAtNewPosition.some(
          (entity) => isWall(entity) || isDamage(entity)
        )
      ) {
        return acc;
      }

      return {
        ...acc,
        [direction]: [
          ...(acc[direction as Direction] ?? []),
          ...entitiesAtNewPosition,
        ],
      };
    }, {});

    const cookieAndMovableDirections = isAtSamePosition
      ? []
      : Object.entries(neighbors)
          .filter(([, entities]) => {
            return (
              entities.some(
                (entity) => isSpace(entity) && entity.playerId === undefined
              ) &&
              entities.some((entity) => isCrate(entity) || isExplosive(entity))
            );
          })
          .map(([direction]) => direction as Direction);

    if (cookieAndMovableDirections.length) {
      return {
        ...bot,
        velocity:
          VELOCITIES[
            cookieAndMovableDirections[tick % cookieAndMovableDirections.length]
          ],
      };
    }

    const cookieFreeDirections = Object.entries(neighbors)
      .filter(([, entities]) => {
        return (
          entities.some(
            (entity) => isSpace(entity) && entity.playerId === undefined
          ) && !entities.some((entity) => isMovable(entity))
        );
      })
      .map(([direction]) => direction as Direction);

    if (cookieFreeDirections.length) {
      return {
        ...bot,
        velocity:
          VELOCITIES[cookieFreeDirections[tick % cookieFreeDirections.length]],
      };
    }

    const isNearCrateOrPlayer = Object.values(neighbors).some((entities) =>
      entities.some((entity) => isCrate(entity) || isCharacter(entity))
    );

    const freeDirections = Object.entries(neighbors)
      .filter(([, entities]) => {
        return entities.some((entity) => isSpace(entity) && !isWall(entity));
      })
      .map(([direction]) => direction as Direction);

    if (freeDirections.length) {
      if (isNearCrateOrPlayer && isExplosiveAllowed) {
        explosives.push(
          createEntity({
            type: "explosive",
            position: [...bot.position],
            id: `explosive-${bot.id}-${tick}`,
          })
        );
      }

      const notPreviousDirections = previousPosition
        ? freeDirections.filter(
            (direction) =>
              !isEqualPosition(
                [
                  position[0] + VELOCITIES[direction][0],
                  position[1] + VELOCITIES[direction][1],
                ],
                previousPosition
              )
          )
        : freeDirections;

      if (notPreviousDirections.length) {
        return {
          ...bot,
          velocity:
            VELOCITIES[
              tick % 3
                ? notPreviousDirections[tick % notPreviousDirections.length]
                : notPreviousDirections[0]
            ],
        };
      }

      return {
        ...bot,
        velocity: VELOCITIES[freeDirections[tick % freeDirections.length]],
      };
    }

    const isNextPositionDamage = entities.some(
      (entity) =>
        isDamage(entity) &&
        isEqualPosition(
          [position[0] + bot.velocity[0], position[1] + bot.velocity[1]],
          entity.position
        )
    );

    if (isNextPositionDamage) {
      return {
        ...bot,
        velocity: [-bot.velocity[0], -bot.velocity[1]],
      };
    }

    return {
      ...bot,
      velocity: bot.velocity,
    };
  });

  return {
    entities: [...other, ...characters, ...explosives, ...updatedBots],
  };
};
