import { describe, expect, it } from "vitest";
import { movePlayer } from ".";
import { DIRECTIONS, Direction, PLAYER_SIZE } from "../..";
import { createPlayer } from "../create-player";
import { getNextPosition } from "../get-next-position";

describe("movePlayer", () => {
  it.each(Object.keys(DIRECTIONS))(
    'should move the player in the direction "%s"',
    (direction) => {
      const player1 = createPlayer({
        position: { x: 1, y: 1 },
        direction: direction as Direction,
      });

      expect(
        movePlayer({
          allPlayerIds: ["player1"],
          playerId: "player1",
          game: {
            maze: [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ],
            players: {
              player1,
            },
            scores: {},
          },
        })
      ).toMatchObject({
        player1: {
          position: getNextPosition({ ...player1 }),
        },
      });
    }
  );

  it.each(Object.keys(DIRECTIONS))(
    'should not move the player in the direction "%s" when on the edge',
    (direction) => {
      const player1 = createPlayer({
        direction: direction as Direction,
      });

      expect(
        movePlayer({
          allPlayerIds: ["player1"],
          playerId: "player1",
          game: {
            maze: [[0]],
            players: {
              player1,
            },
            scores: {},
          },
        })
      ).toMatchObject({
        player1: {
          position: { x: 0, y: 0 },
        },
      });
    }
  );

  it.each(Object.keys(DIRECTIONS))(
    'should not move the player in the direction "%s" when there is a wall',
    (direction) => {
      const player1 = createPlayer({
        position: { x: 1, y: 1 },
        direction: direction as Direction,
      });

      expect(
        movePlayer({
          allPlayerIds: ["player1"],
          playerId: "player1",
          game: {
            maze: [
              [0, 1, 0],
              [1, 0, 1],
              [0, 1, 0],
            ],
            players: {
              player1,
            },
            scores: {},
          },
        })
      ).toMatchObject({
        player1,
      });
    }
  );

  it.each(Object.keys(DIRECTIONS))(
    'should not move player in the direction "%s" when there is a another player in the way',
    (direction) => {
      const player1 = createPlayer({
        position: { x: 1, y: 1 },
        direction: direction as Direction,
      });
      const player2 = createPlayer({
        position: getNextPosition({
          position: player1.position,
          speed: PLAYER_SIZE,
          direction: direction as Direction,
        }),
        direction: direction as Direction,
      });

      expect(
        movePlayer({
          allPlayerIds: ["player1", "player2"],
          playerId: "player1",
          game: {
            maze: [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ],
            players: {
              player1,
              player2,
            },
            scores: {},
          },
        })
      ).toMatchObject({
        player1,
        player2,
      });
    }
  );

  it.each(Object.keys(DIRECTIONS))(
    'should move player in the direction "%s" when there is a another player in the way but there is a space to move',
    (direction) => {
      const player1 = createPlayer({
        position: { x: 2, y: 2 },
        direction: direction as Direction,
      });
      const player2 = createPlayer({
        position: getNextPosition({
          position: player1.position,
          speed: 2 * PLAYER_SIZE,
          direction: direction as Direction,
        }),
        direction: direction as Direction,
      });

      expect(
        movePlayer({
          allPlayerIds: ["player1", "player2"],
          playerId: "player1",
          game: {
            maze: [
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
            ],
            players: {
              player1,
              player2,
            },
            scores: {},
          },
        })
      ).toMatchObject({
        player1: {
          position: getNextPosition({
            position: player1.position,
            speed: player1.speed,
            direction: direction as Direction,
          }),
        },
        player2,
      });
    }
  );
});
