import { ActionContext } from "rune-games-sdk";
import { GameState } from "../..";
import { isCharacter, isMovable, isSpace } from "../../types/entities";
import { createEntity } from "../../utils/create-entity";

export const addExplosive = (
  _: undefined,
  { game, playerId }: ActionContext<GameState>
) => {
  const player = game.entities
    .filter(isCharacter)
    .find((entity) => entity.id === playerId);

  if (!player) {
    return;
  }

  const { position, velocity, previousPosition } = player;
  const [x, y] = position;
  const [vx, vy] = velocity;
  const [prevX, prevY] = previousPosition || [x - vx, y - vy];

  const possiblePositions = [[x, y]];

  while (possiblePositions.length) {
    const position = possiblePositions.shift();

    if (!position) {
      continue;
    }

    const [px, py] = position;

    const space = game.entities
      .filter(isSpace)
      .find((entity) => entity.position[0] === px && entity.position[1] === py);

    if (!space) {
      continue;
    }

    const movable = game.entities
      .filter(isMovable)
      .find((entity) => entity.position[0] === px && entity.position[1] === py);

    if (movable) {
      // continue;
    }

    const velocity: [number, number] = [0, 0];

    game.entities.push(
      createEntity({
        type: "explosive",
        position: [px, py],
        id: `explosive-${game.entitiesCounter++}`,
        velocity,
      })
    );

    break;
  }
};
