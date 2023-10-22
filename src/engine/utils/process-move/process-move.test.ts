import { describe, expect, it } from "vitest";
import { Coordinates, VELOCITIES } from "../../types/physics";
import { createEntity } from "../create-entity/create-entity";
import { createSpaces } from "../create-spaces";
import { processMove } from "./process-move";
import { isMovable, isSpace } from "../../types/entities";

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

  it("should not move two entities in the same direction when there is no space", () => {
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
        velocity: [0, 0],
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

    expect(entities).toHaveLength(5);
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
        position: [2, 0],
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

  it("should move two entities in the same direction when there is space between them", () => {
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
          position: [2, 0],
          velocity: [1, 0],
        }),
        ...createSpaces(5),
      ],
    });

    expect(entities).toHaveLength(7);
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
        position: [3, 0],
        velocity: [1, 0],
      })
    );
  });

  it("should pass velocity to the next two entities", () => {
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
        createEntity({
          id: "c",
          type: "movable",
          position: [2, 0],
          velocity: [0, 0],
        }),
        ...createSpaces(5),
      ],
    });
    expect(entities).toHaveLength(8);
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
    expect(entities).toContainEqual(
      createEntity({
        id: "c",
        type: "movable",
        position: [3, 0],
        velocity: [1, 0],
      })
    );
  });

  it("should not pass velocity to the next two entities separated with empty space", () => {
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
          position: [2, 0],
          velocity: [0, 0],
        }),
        createEntity({
          id: "c",
          type: "movable",
          position: [3, 0],
          velocity: [0, 0],
        }),
        ...createSpaces(5),
      ],
    });
    expect(entities).toHaveLength(8);
    const movables = entities.filter(isMovable);
    expect(movables).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [1, 0],
        velocity: [1, 0],
      })
    );
    expect(movables).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [2, 0],
        velocity: [0, 0],
      })
    );
    expect(movables).toContainEqual(
      createEntity({
        id: "c",
        type: "movable",
        position: [3, 0],
        velocity: [0, 0],
      })
    );
  });

  it("should prevent moving both to the single space between them", () => {
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
          position: [2, 0],
          velocity: [-1, 0],
        }),
        ...createSpaces(3),
      ],
    });
    expect(entities).toHaveLength(5);
    const movables = entities.filter(isMovable);
    expect(movables).toContainEqual(
      createEntity({
        id: "a",
        type: "movable",
        position: [1, 0],
        velocity: [0, 0],
      })
    );
    expect(movables).toContainEqual(
      createEntity({
        id: "b",
        type: "movable",
        position: [2, 0],
        velocity: [0, 0],
      })
    );
  });
});
