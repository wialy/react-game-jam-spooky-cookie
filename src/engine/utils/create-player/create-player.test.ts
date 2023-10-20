import { describe, expect, it } from "vitest";
import { createPlayer } from ".";
import { PLAYER_SPEED } from "../..";

describe("createPlayer", () => {
  it("should create a player with default params", () => {
    expect(createPlayer({})).toMatchObject({
      direction: "RIGHT",
      position: { x: 0, y: 0 },
      speed: PLAYER_SPEED,
    });
  });

  it("should create a player", () => {
    expect(
      createPlayer({
        direction: "LEFT",
        position: { x: 1, y: 2 },
      })
    ).toMatchObject({
      direction: "LEFT",
      position: { x: 1, y: 2 },
      speed: PLAYER_SPEED,
    });
  });
});
