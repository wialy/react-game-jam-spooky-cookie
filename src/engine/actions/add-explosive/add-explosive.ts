import { ActionContext } from "rune-games-sdk";
import { GameState } from "../..";
import { isSpace } from "../../types/entities";
import { Coordinates } from "../../types/physics";
import { createEntity } from "../../utils/create-entity";

const velocity: [number, number] = [0, 0];
export const addExplosive = (
  { position: [x, y] }: { position: Coordinates },
  { game }: ActionContext<GameState>
) => {
  const space = game.entities
    .filter(isSpace)
    .find((entity) => entity.position[0] === x && entity.position[1] === y);

  if (!space) {
    return;
  }

  const explosive = game.entities.find(
    (entity) =>
      entity.type === "explosive" &&
      entity.position[0] === x &&
      entity.position[1] === y
  );

  if (explosive) {
    return;
  }

  game.entities.push(
    createEntity({
      type: "explosive",
      position: [x, y],
      id: `explosive-${game.entitiesCounter++}`,
      velocity,
    })
  );
};
