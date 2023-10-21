import { describe, expect, it } from "vitest";
import { updateCollectibles } from ".";
import { Collectible } from "../..";
import { createPlayer } from "../create-player";

describe("updateCollectibles", () => {
  it('should return "undefined" if collectibles are "undefined"', () => {
    expect(
      updateCollectibles({
        allPlayerIds: [],
        players: {},
        collectibles: undefined,
      })
    ).toBe(undefined);
  });

  it('should return "collectibles" if no player is at collectible', () => {
    const collectibles: Collectible[] = [
      {
        x: 1,
        y: 1,
        isCollected: false,
        score: 1,
      },
    ];

    expect(
      updateCollectibles({
        allPlayerIds: [],
        players: {},
        collectibles,
      })
    ).toEqual(collectibles);
  });

  it('should return "collectibles" if player is at collectible but collectible is already collected', () => {
    const collectibles: Collectible[] = [
      {
        x: 1,
        y: 1,
        isCollected: true,
        score: 1,
      },
    ];

    expect(
      updateCollectibles({
        allPlayerIds: ["playerId"],
        players: {
          playerId: createPlayer({
            position: { x: 1, y: 1 },
          }),
        },
        collectibles,
      })
    ).toEqual(collectibles);
  });

  it('should return "collectibles" if player is not at collectible', () => {
    const collectibles: Collectible[] = [
      {
        x: 1,
        y: 1,
        isCollected: false,
        score: 1,
      },
    ];

    expect(
      updateCollectibles({
        allPlayerIds: ["playerId"],
        players: {
          playerId: createPlayer({
            position: { x: 2, y: 2 },
          }),
        },
        collectibles,
      })
    ).toEqual(collectibles);
  });

  it("shout set collectible as `collected` if player is at collectible", () => {
    const collectibles: Collectible[] = [
      {
        x: 1,
        y: 1,
        isCollected: false,
        score: 1,
      },
    ];

    expect(
      updateCollectibles({
        allPlayerIds: ["playerId"],
        players: {
          playerId: createPlayer({
            position: { x: 1, y: 1 },
          }),
        },
        collectibles,
      })
    ).toEqual([
      {
        x: 1,
        y: 1,
        isCollected: true,
        score: 1,
        collectedBy: "playerId",
      },
    ]);
  });
});
