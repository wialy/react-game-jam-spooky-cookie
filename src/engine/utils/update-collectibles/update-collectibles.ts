import { COLLECTIBLE_SIZE, Collectible, PlayerState } from "../..";

export const updateCollectibles = ({
  allPlayerIds,
  players,
  collectibles,
}: {
  collectibles?: Collectible[] | undefined;
  allPlayerIds: string[];
  players: Record<string, PlayerState>;
}): Collectible[] | undefined => {
  if (!collectibles) {
    return undefined;
  }

  const result: Collectible[] = [];

  for (const collectible of collectibles) {
    if (collectible.isCollected) {
      result.push(collectible);
      continue;
    }

    const playerAtCollectible = allPlayerIds.find(
      (id) =>
        Math.abs(players[id].position.x - collectible.x) < COLLECTIBLE_SIZE &&
        Math.abs(players[id].position.y - collectible.y) < COLLECTIBLE_SIZE
    );

    if (playerAtCollectible) {
      result.push({
        ...collectible,
        isCollected: true,
        collectedBy: playerAtCollectible,
      });
    } else {
      result.push(collectible);
    }
  }

  return result;
};
