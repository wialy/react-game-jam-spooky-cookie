import { GameState } from "../..";

export const updateIsEnded = ({
  collectibles,
}: Pick<GameState, "collectibles">): boolean => {
  if (!collectibles) {
    return true;
  }

  return collectibles.every((collectible) => collectible.isCollected);
};
