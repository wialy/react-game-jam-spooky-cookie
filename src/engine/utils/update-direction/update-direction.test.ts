import { describe, expect, it } from "vitest";
import { updateDirection } from ".";
import { CELL_SIZE, Direction } from "../..";
import { createPlayer } from "../create-player";
import { getNextPosition } from "../get-next-position";

describe("updateDirection", () => {
  it.each([["LEFT", "LEFT", "RIGHT", "RIGHT", "UP", "UP", "DOWN", "DOWN"]])(
    `should clear %s deferredDirection when equals to direction %s`,
    (direction, deferredDirection) => {
      const player1 = createPlayer({
        direction: direction as Direction,
        deferredDirection: deferredDirection as Direction,
        deferredPosition: { x: 1, y: 1 },
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
      ).toEqual({
        ...player1,
        deferredDirection: undefined,
        deferredPosition: undefined,
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
        deferredPosition: { x: 1, y: 1 },
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
        deferredPosition: undefined,
      });
    }
  );

  it.each([
    ["LEFT", "TOP"],
    ["LEFT", "BOTTOM"],
    ["RIGHT", "TOP"],
    ["RIGHT", "BOTTOM"],
    ["UP", "LEFT"],
    ["UP", "RIGHT"],
    ["DOWN", "LEFT"],
    ["DOWN", "RIGHT"],
  ])(
    "should clear deferred values when went too far %s and deferred is %s",
    (direction, deferredDirection) => {
      const player1 = createPlayer({
        direction: direction as Direction,
        deferredDirection: deferredDirection as Direction,
        deferredPosition: getNextPosition({
          position: { x: 3, y: 3 },
          direction: direction as Direction,
          speed: CELL_SIZE * 3,
        }),
        position: { x: 3, y: 3 },
      });

      expect(
        updateDirection({
          player: player1,
          game: {
            players: {
              ["player1"]: player1,
            },
            maze: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            scores: {},
          },
        })
      ).toEqual({
        ...player1,
        deferredDirection: undefined,
        deferredPosition: undefined,
      });
    }
  );
});
