import { LOG } from "../..";
import {
  Entity,
  Movable,
  isCharacter,
  isMovable,
  isSpace,
} from "../../types/entities";
import { Coordinates } from "../../types/physics";
import { isEqualPosition } from "../is-equal-position";

const log = (...args: unknown[]) => {
  if (LOG) {
    console.log(...args);
  }
};

export const processMove = ({
  entities,
}: {
  entities: Entity[];
}): { entities: Entity[] } => {
  const staticEntities = entities.filter((entity) => !isMovable(entity));
  const movableEntities = entities.filter(isMovable);

  const toResolve = [...movableEntities];
  let resolved: Movable[] = [];
  // move what can be moved

  const operations = 0;

  while (toResolve.length > 0) {
    if (operations > 300) {
      log("break");
      break;
    }

    const entity = { ...toResolve.shift() } as Movable;

    const isResolved = resolved.some((e) => e.id === entity.id);

    // if already resolved, skip
    if (isResolved) {
      log(`[${entity.id}] already resolved / locked`);

      continue;
    }

    const [x, y] = entity.position;
    const [vx, vy] = entity.velocity;

    // if no velocity, resolve
    if (vx === 0 && vy === 0) {
      log(`[${entity.id}] no velocity`);

      resolved.push(entity);

      continue;
    }

    // resolve if other movable is on same position
    const movable = movableEntities.find(
      (e) => e.id !== entity.id && isEqualPosition(e.position, entity.position)
    );
    if (movable && !isCharacter(entity)) {
      log(`[${entity.id}] movable on same position`);

      resolved.push(entity);

      continue;
    }

    const nextPosition: Coordinates = [x + vx, y + vy];

    const nextEntities = [...resolved, ...toResolve, ...staticEntities].filter(
      (e) => isEqualPosition(e.position, nextPosition)
    );

    const nextSpace = nextEntities.find(isSpace);

    // if no space, resolve
    if (!nextSpace) {
      log(`[${entity.id}] no space`);

      entity.velocity = [0, 0];
      resolved.push(entity);

      continue;
    }

    const nextMovable = nextEntities.find(isMovable);

    // if no movable, resolve
    if (!nextMovable) {
      log(`[${entity.id}] no next movable`);

      entity.previousPosition = [...entity.position];
      entity.position = nextPosition;
      resolved.push(entity);

      continue;
    }

    const isNextMovableResolved = resolved.some((e) => e.id === nextMovable.id);
    const [nextMovableVx, nextMovableVy] = nextMovable.velocity;

    if (isNextMovableResolved) {
      log(`[${entity.id}] next movable already resolved`);

      // pass speed to next only if it is not moving into opposite direction

      if (vx !== 0 && nextMovableVx !== -vx) {
        nextMovable.velocity[0] = vx;
        nextMovable.velocity[1] = 0;
      } else if (vy !== 0 && nextMovableVy !== -vy) {
        nextMovable.velocity[0] = 0;
        nextMovable.velocity[1] = vy;
      }

      entity.velocity = [0, 0];

      toResolve.push(nextMovable);

      resolved = [...resolved.filter((e) => e.id !== nextMovable.id)];
      resolved.push(entity);

      continue;
    }

    // stop both when moving into opposite directions

    if (nextMovableVx === -vx && nextMovableVy === -vy) {
      log(`[${entity.id}] opposite direction`);

      entity.velocity = [0, 0];
      nextMovable.velocity = [0, 0];

      resolved.push(entity);
      resolved.push(nextMovable);

      continue;
    }

    // if next movable is not resolved, queue current entity
    log(`[${entity.id}] queueing`);

    toResolve.push(entity);
  }

  const result = [...staticEntities, ...resolved];

  const characters = result.filter(isCharacter);
  const spaces = result.filter(isSpace);

  for (const character of characters) {
    const space = spaces.find((space) =>
      isEqualPosition(space.position, character.position)
    );

    if (!space) {
      continue;
    }

    if (space.playerId === undefined) {
      space.playerId = character.id;
    }
  }

  return { entities: result };
};
