import { describe, expect, it } from "vitest";
import { updateIsEnded } from ".";

describe("updateIsEnded", () => {
  it("should return true if collectibles are undefined", () => {
    expect(updateIsEnded({ collectibles: undefined })).toBe(true);
  });

  it("should return true if all collectibles are collected", () => {
    expect(
      updateIsEnded({
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
    ).toBe(true);
  });

  it("should return false if not all collectibles are collected", () => {
    expect(
      updateIsEnded({
        collectibles: [
          {
            x: 1,
            y: 1,
            isCollected: false,
            score: 1,
            collectedBy: "playerId",
          },
        ],
      })
    ).toBe(false);
  });
});
