import { describe, expect, it } from "vitest";
import { updateScores } from ".";

describe("updateScores", () => {
  it('should return "undefined" if collectibles are "undefined"', () => {
    expect(updateScores({ scores: {}, collectibles: undefined })).toEqual({});
  });

  it('should return "scores" if no collectible is collected', () => {
    const scores = { playerId: 0 };

    expect(
      updateScores({
        scores,
        collectibles: [
          {
            x: 1,
            y: 1,
            isCollected: false,
            score: 1,
          },
        ],
      })
    ).toEqual(scores);
  });

  it('should return "scores" if collectible is collected but no player collected it', () => {
    const scores = { playerId: 0 };

    expect(
      updateScores({
        scores,
        collectibles: [
          {
            x: 1,
            y: 1,
            isCollected: true,
            score: 1,
          },
        ],
      })
    ).toEqual(scores);
  });

  it('should calculate "scores" if collectible is collected by player', () => {
    expect(
      updateScores({
        scores: { playerId: 0 },
        collectibles: [
          {
            x: 1,
            y: 1,
            isCollected: true,
            score: 1,
            collectedBy: "playerId",
          },
        ],
      })
    ).toEqual({ playerId: 1 });
  });
});
