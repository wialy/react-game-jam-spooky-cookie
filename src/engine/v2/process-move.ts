import { Entity, Movable, isMovable, isSpace } from "./types";

export const processMove = ({
  entities,
}: {
  entities: Entity[];
}): { entities: Entity[] } => {
  const staticEntities = entities.filter((entity) => !isMovable(entity));
  const movableEntities = entities.filter(isMovable);

  const toResolve = [...movableEntities];
  const resolved: Movable[] = [];
  // move what can be moved

  while (toResolve.length > 0) {
    const entity = { ...toResolve.pop() } as Movable;

    const isResolved = resolved.some((e) => e.id === entity.id);

    // if already resolved, skip
    if (isResolved) {
      console.log(`[${entity.id}] already resolved`);
      continue;
    }

    const [x, y] = entity.position;
    const [vx, vy] = entity.velocity;

    // if no velocity, resolve
    if (vx === 0 && vy === 0) {
      console.log(`[${entity.id}] no velocity`);
      resolved.push(entity);
      continue;
    }

    const [nextX, nextY] = [x + vx, y + vy];

    const nextEntities = [...resolved, ...toResolve, ...staticEntities].filter(
      (e) => e.position[0] === nextX && e.position[1] === nextY
    );

    const nextSpace = nextEntities.find(isSpace);

    // if no space, resolve
    if (!nextSpace) {
      console.log(`[${entity.id}] no space`);
      entity.velocity = [0, 0];
      resolved.push(entity);
      continue;
    }

    const nextMovable = nextEntities.find(isMovable);

    // if no movable, resolve
    if (!nextMovable) {
      console.log(`[${entity.id}] no next movable`);
      entity.position = [nextX, nextY];
      resolved.push(entity);
      continue;
    }

    const isNextMovableResolved = resolved.some((e) => e.id === nextMovable.id);

    if (isNextMovableResolved) {
      console.log(`[${entity.id}] next movable already resolved`);
      nextMovable.velocity = entity.velocity;
      entity.velocity = [0, 0];
      resolved.push(entity);
      continue;
    }

    const [nextMovableVx, nextMovableVy] = nextMovable.velocity;

    // stop both when moving into opposite directions

    if (nextMovableVx === -vx && nextMovableVy === -vy) {
      console.log(`[${entity.id}] opposite direction`);
      entity.velocity = [0, 0];
      nextMovable.velocity = [0, 0];

      resolved.push(entity);
      resolved.push(nextMovable);
      continue;
    }

    // if next movable is not resolved, queue current entity
    console.log(`[${entity.id}] queueing`);
    toResolve.push(entity);
  }

  const result = [...staticEntities, ...resolved];

  return { entities: result };
};
