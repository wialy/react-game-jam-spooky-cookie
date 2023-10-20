import { describe, expect, it } from "vitest";
import { getNextPosition } from ".";
import { Direction, PLAYER_SPEED } from "../..";

describe("getNextPosition", () => {
  it.each([
    ["RIGHT", { x: PLAYER_SPEED, y: 0 }],
    ["DOWN", { x: 0, y: PLAYER_SPEED }],
    ["LEFT", { x: -PLAYER_SPEED, y: 0 }],
    ["UP", { x: 0, y: -PLAYER_SPEED }],
  ])(
    'for "%s" should return the next position in the direction "%o"',
    (direction, result) => {
      expect(
        getNextPosition({
          position: { x: 0, y: 0 },
          direction: direction as Direction,
          speed: PLAYER_SPEED,
        })
      ).toMatchObject(result);
    }
  );
});
