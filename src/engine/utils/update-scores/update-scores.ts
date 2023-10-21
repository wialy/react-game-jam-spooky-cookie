import { GameState } from "../..";

export const updateScores = ({
  scores,
  collectibles,
}: Pick<GameState, "scores" | "collectibles">): GameState["scores"] => {
  if (!collectibles) {
    return scores;
  }

  const clearedScores = Object.fromEntries(
    Object.entries(scores).map(([id]) => [id, 0])
  );

  return collectibles.reduce<GameState["scores"]>((scores, collectible) => {
    if (collectible.isCollected && collectible.collectedBy) {
      return {
        ...scores,
        [collectible.collectedBy]: (scores[collectible.collectedBy] ?? 0) + 1,
      };
    }

    return scores;
  }, clearedScores);
};
