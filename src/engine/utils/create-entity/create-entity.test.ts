import { describe, expect, it } from "vitest";
import { createEntity } from "./create-entity";

describe("createEntity", () => {
  it("creates a wall entity", () => {
    expect(
      createEntity({
        id: "1",
        type: "wall",
        position: [0, 0],
      })
    ).toEqual({
      id: "1",
      type: "wall",
      position: [0, 0],
    });
  });

  it("creates a movable entity", () => {
    expect(
      createEntity({
        type: "movable",
        position: [0, 0],
        id: "1",
      })
    ).toEqual({
      type: "movable",
      id: "1",
      position: [0, 0],
      velocity: [0, 0],
    });

    expect(
      createEntity({
        type: "movable",
        id: "1",
        position: [0, 0],
        velocity: [1, 1],
      })
    ).toEqual({
      type: "movable",
      id: "1",
      position: [0, 0],
      velocity: [1, 1],
    });
  });
});
