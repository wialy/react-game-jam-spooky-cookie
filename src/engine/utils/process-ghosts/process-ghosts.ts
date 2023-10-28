import { GameState } from "../..";
import {
  Entity,
  Ghost,
  Space,
  isCharacter,
  isGhost,
  isMovable,
  isSpace,
} from "../../types/entities";
import { Coordinates } from "../../types/physics";
import { isEqualPosition } from "../is-equal-position";

export const processGhosts = ({
  entities,
  tick = 0,
}: Pick<GameState, "entities" | "tick">): { entities: Entity[] } => {
  const { characters, spaces, ghosts, other, movable } = entities.reduce<{
    characters: Entity[];
    spaces: Space[];
    ghosts: Ghost[];
    other: Entity[];
    movable: Entity[];
  }>(
    (acc, entity) => {
      if (isCharacter(entity)) {
        return {
          ...acc,
          characters: [...acc.characters, entity],
        };
      }

      if (isSpace(entity) && entity.playerId === undefined) {
        return {
          ...acc,
          spaces: [...acc.spaces, entity],
        };
      }

      if (isGhost(entity)) {
        return {
          ...acc,
          ghosts: [...acc.ghosts, entity],
        };
      }

      if (isMovable(entity)) {
        return {
          ...acc,
          movable: [...acc.movable, entity],
        };
      }

      return {
        ...acc,
        other: [...acc.other, entity],
      };
    },
    { characters: [], spaces: [], ghosts: [], other: [], movable: [] }
  );

  const centre = characters
    .reduce<Coordinates>(
      (acc, character) => [
        acc[0] + character.position[0],
        acc[1] + character.position[1],
      ],
      [0, 0]
    )
    .map((value) => value / characters.length);

  const { space } = spaces.reduce<{
    space: Space | undefined;
    distance: number;
  }>(
    (acc, space) => {
      if (
        movable.some((movable) =>
          isEqualPosition(movable.position, space.position)
        )
      ) {
        return acc;
      }

      const distance = Math.abs(
        centre[0] - space.position[0] + centre[1] - space.position[1]
      );

      if (acc.space === undefined) {
        return { space, distance };
      }

      if (distance < acc.distance) {
        return { space, distance };
      }

      return acc;
    },
    {
      space: undefined,
      distance: 0,
    } as { space: Space | undefined; distance: number }
  );

  const updatedGhosts = ghosts.map((ghost) => {
    const { frequency, timer } = ghost;
    const isVisible = tick > frequency && tick % frequency < timer;
    const willBeVisible = tick > frequency && tick % frequency < timer + 1;

    if (ghost.isVisible || !willBeVisible) {
      return { ...ghost, isVisible };
    }

    return {
      ...ghost,
      position:
        isVisible && space
          ? ([...space.position] as Coordinates)
          : ghost.position,
      isVisible: space ? isVisible : false,
    };
  });

  const updatedSpaces =
    tick < 3
      ? spaces
      : spaces.map((space) => {
          const ghost = updatedGhosts.find(
            (ghost) =>
              ghost.isVisible && isEqualPosition(ghost.position, space.position)
          );

          if (!ghost) {
            return space;
          }

          return {
            ...space,
            playerId: ghost.id,
          };
        });

  return {
    entities: [
      ...other,
      ...characters,
      ...movable,
      ...updatedSpaces,
      ...updatedGhosts,
    ],
  };
};
