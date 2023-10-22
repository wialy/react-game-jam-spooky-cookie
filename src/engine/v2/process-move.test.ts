import { describe, expect, it } from "vitest";
import { processMove } from "./process-move";
import { createEntity } from "./create-entity";
import { VELOCITIES, Coordinates } from "./types";

const createSpaces = (width = 1, height = 1) => {
  const spaces = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++)
      spaces.push(
        createEntity({
          id: `space-${x}:${y}`,
          type: "space",
          position: [x, y],
        })
      );
  }

  return spaces;
};

describe("processMove", () => {
  it("should not move entities with zero velocity", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
        }),
        ...createSpaces(),
      ],
    });

    expect(entities).toHaveLength(2);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [0, 0],
      })
    );
  });

  it.each([Object.values(VELOCITIES)])(
    "shold stop moving entity when there is no space",
    (velocity) => {
      const { entities } = processMove({
        entities: [
          createEntity({
            id: "a",
            type: "movable",
            position: [0, 0],
            velocity: velocity as Coordinates,
          }),
          ...createSpaces(),
        ],
      });

      expect(entities).toHaveLength(2);
      expect(entities).toContainEqual(
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [0, 0],
        })
      );
    }
  );

  it.each([Object.values(VELOCITIES)])("moves to %s space", (v) => {
    const velocity = v as Coordinates;

    const { entities } = processMove({
      entities: [
        createEntity({
          id: "movable",
          type: "movable",
          position: [0, 0],
          velocity,
        }),
        createEntity({
          id: "from",
          type: "space",
          position: [0, 0],
        }),
        createEntity({
          id: "to",
          type: "space",
          position: velocity,
        }),
      ],
    });

    expect(entities).toHaveLength(3);
    expect(entities).toContainEqual(
      createEntity({
        id: "movable",
        type: "movable",
        position: velocity,
        velocity,
      })
    );
  });

  it("should stop moving entity when collides with another", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [1, 0],
        }),
        createEntity({
          id: "b",
          type: "movable",
          position: [1, 0],
          velocity: [0, 0],
        }),
        ...createSpaces(2),
      ],
    });

    expect(entities).toHaveLength(4);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [0, 0],
        velocity: [0, 0],
      })
    );
  });

  it("should not not collide two perpendicularly moving", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [1, 0],
        }),
        createEntity({
          id: "b",
          type: "movable",
          position: [1, 0],
          velocity: [0, 1],
        }),
        ...createSpaces(2, 2),
      ],
    });

    expect(entities).toHaveLength(6);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [1, 0],
        velocity: [1, 0],
      })
    );
    expect(entities).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [1, 1],
        velocity: [0, 1],
      })
    );
  });

  it("should stop both when moving into opposite directions", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [1, 0],
        }),
        createEntity({
          id: "b",
          type: "movable",
          position: [1, 0],
          velocity: [-1, 0],
        }),
        ...createSpaces(2),
      ],
    });

    expect(entities).toHaveLength(4);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [0, 0],
        velocity: [0, 0],
      })
    );
    expect(entities).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [1, 0],
        velocity: [0, 0],
      })
    );
  });

  it("should move two entities in the same direction", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [1, 0],
        }),
        createEntity({
          id: "b",
          type: "movable",
          position: [1, 0],
          velocity: [1, 0],
        }),
        ...createSpaces(3),
      ],
    });

    expect(entities).toHaveLength(5);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [1, 0],
        velocity: [1, 0],
      })
    );
    expect(entities).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [2, 0],
        velocity: [1, 0],
      })
    );
  });

  it.only("should not move two entities in the same direction when there is no space", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [1, 0],
        }),
        createEntity({
          id: "b",
          type: "movable",
          position: [1, 0],
          velocity: [1, 0],
        }),
        ...createSpaces(2),
      ],
    });

    expect(entities).toHaveLength(4);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [0, 0],
        velocity: [0, 0],
      })
    );
    expect(entities).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [1, 0],
        velocity: [1, 0],
      })
    );
  });

  it("should pass velocity to the next entity", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [1, 0],
        }),
        createEntity({
          id: "b",
          type: "movable",
          position: [1, 0],
          velocity: [0, 0],
        }),
        ...createSpaces(3),
      ],
    });

    expect(entities).toHaveLength(4);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [0, 0],
        velocity: [0, 0],
      })
    );
    expect(entities).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [1, 0],
        velocity: [1, 0],
      })
    );
  });

  it("should move two entities in the same direction", () => {
    const { entities } = processMove({
      entities: [
        createEntity({
          id: "a",
          type: "movable",
          position: [0, 0],
          velocity: [1, 0],
        }),
        createEntity({
          id: "b",
          type: "movable",
          position: [1, 0],
          velocity: [1, 0],
        }),
        ...createSpaces(3),
      ],
    });

    expect(entities).toHaveLength(5);
    expect(entities).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [1, 0],
        velocity: [1, 0],
      })
    );
    expect(entities).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [2, 0],
        velocity: [1, 0],
      })
    );
  });
});
