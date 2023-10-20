import { describe, expect, it } from "vitest";
import { updateDirection } from ".";
import { Direction } from "../..";
import { createPlayer } from "../create-player";

describe("updateDirection", () => {
  it.each([["LEFT", "LEFT", "RIGHT", "RIGHT", "UP", "UP", "DOWN", "DOWN"]])(
    `should clear %s deferredDirection when equals to direction %s`,
    (direction, deferredDirection) => {
      const player1 = createPlayer({
        direction: direction as Direction,
        deferredDirection: deferredDirection as Direction,
      });

      expect(
        updateDirection({
          player: player1,
          game: {
            players: {
              ["player1"]: player1,
            },
            maze: [
              [1, 1, 1],
              [1, 0, 1],
              [1, 1, 1],
            ],
            scores: {},
          },
        })
      ).toEqual({
        ...player1,
        deferredDirection: undefined,
      });
    }
  );

  it.each([
    ["LEFT", "UP"],
    ["LEFT", "DOWN"],
    ["RIGHT", "UP"],
    ["RIGHT", "DOWN"],
    ["UP", "LEFT"],
    ["UP", "RIGHT"],
    ["DOWN", "LEFT"],
    ["DOWN", "RIGHT"],
  ])(
    "should not change %s direction towards the %s wall",
    (direction, deferredDirection) => {
      const player1 = createPlayer({
        direction: direction as Direction,
        deferredDirection: deferredDirection as Direction,
        position: { x: 1, y: 1 },
      });

      expect(
        updateDirection({
          player: player1,
          game: {
            players: {
              ["player1"]: player1,
            },
            maze: [
              [1, 1, 1],
              [1, 0, 1],
              [1, 1, 1],
            ],
            scores: {},
          },
        })
      ).toEqual(player1);
    }
  );

  it.each([
    ["LEFT", "RIGHT"],
    ["RIGHT", "LEFT"],
    ["UP", "DOWN"],
    ["DOWN", "UP"],
  ])(
    "should change %s direction to opposite %s",
    (direction, deferredDirection) => {
      const player1 = createPlayer({
        direction: direction as Direction,
        deferredDirection: deferredDirection as Direction,
      });

      expect(
        updateDirection({
          player: player1,
          game: {
            players: {
              ["player1"]: player1,
            },
            maze: [
              [1, 1, 1],
              [1, 0, 1],
              [1, 1, 1],
            ],
            scores: {},
          },
        })
      ).toEqual({
        ...player1,
        direction: deferredDirection as Direction,
        deferredDirection: undefined,
      });
    }
  );
});
