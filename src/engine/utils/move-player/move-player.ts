import { ActionContext } from "rune-games-sdk";
import { GameState, PLAYER_SIZE } from "../..";
import { getMazeSize } from "../get-maze-size";
import { getNextPosition } from "../get-next-position";

export const movePlayer = ({
  game,
  allPlayerIds,
  playerId,
}: ActionContext<GameState>): GameState["players"] => {
  const player = game.players[playerId];

  if (!player) {
    return game.players;
  }

  const nextPosition = getNextPosition({ ...player });

  const { maze } = game;
  const { width, height } = getMazeSize({ maze });

  if (
    nextPosition.x < 0 ||
    nextPosition.y < 0 ||
    Math.ceil(nextPosition.x) >= width ||
    Math.ceil(nextPosition.y) >= height ||
    maze[Math.floor(nextPosition.y)]?.[Math.floor(nextPosition.x)] === 1 ||
    maze[Math.ceil(nextPosition.y)]?.[Math.ceil(nextPosition.x)] === 1
  ) {
    return game.players;
  }

  const playersAtNextPosition = allPlayerIds.filter(
    (id) =>
      id !== playerId &&
      Math.abs(game.players[id].position.x - nextPosition.x) < PLAYER_SIZE &&
      Math.abs(game.players[id].position.y - nextPosition.y) < PLAYER_SIZE
  );

  if (playersAtNextPosition.length > 0) {
    return game.players;
  }

  return {
    ...game.players,
    [playerId]: {
      ...player,
      position: nextPosition,
    },
  };
};
