import { describe, expect, it } from "vitest";
import { getMazeSize } from ".";

describe("getMazeSize", () => {
  it("should return the maze size", () => {
    expect(getMazeSize({ maze: [[0, 0, 0]] })).toMatchObject({
      width: 3,
      height: 1,
    });

    expect(getMazeSize({ maze: [[0], [0], [0]] })).toMatchObject({
      width: 1,
      height: 3,
    });
  });
});
