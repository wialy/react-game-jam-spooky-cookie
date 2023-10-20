import { CELL_SIZE, GameState, PlayerState } from "../..";
import { getNextPosition } from "../get-next-position";

export const updateDirection = ({
  game,
  player,
}: {
  game: GameState;
  player: PlayerState;
}): PlayerState => {
  if (!player.deferredDirection) {
    return player;
  }

  // If the player is moving in the same direction, don't change direction
  // and clear the deferred direction
  if (player.direction === player.deferredDirection) {
    return { ...player, deferredDirection: undefined };
  }

  // If the player is moving in the opposite direction, change direction immediately
  if (
    (player.deferredDirection === "LEFT" && player.direction === "RIGHT") ||
    (player.deferredDirection === "RIGHT" && player.direction === "LEFT") ||
    (player.deferredDirection === "UP" && player.direction === "DOWN") ||
    (player.deferredDirection === "DOWN" && player.direction === "UP")
  ) {
    return {
      ...player,
      direction: player.deferredDirection,
      deferredDirection: undefined,
    };
  }

  // If the player is not in a cell, don't change direction
  if (
    player.position.x - Math.floor(player.position.x) !== 0 ||
    player.position.y - Math.floor(player.position.y) !== 0
  ) {
    return player;
  }

  const nextPosition = getNextPosition({
    position: player.position,
    direction: player.deferredDirection,
    speed: CELL_SIZE,
  });

  // If the player is not going to hit a wall, change direction
  if (game.maze[nextPosition.y]?.[nextPosition.x] !== 1) {
    return {
      ...player,
      direction: player.deferredDirection,
      deferredDirection: undefined,
    };
  }

  return player;
};
