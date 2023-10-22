import { describe, expect, it } from "vitest";
import { handleAddExplosive } from "./handle-add-explosive";

describe("handleAddExplosive", () => {
  it("should return the explosives with the new explosive added", () => {
    expect(
      handleAddExplosive({
        explosives: [],
        position: { x: 0, y: 0 },
        timer: 3000,
      })
    ).toEqual([
      {
        x: 0,
        y: 0,
        timer: 3000,
      },
    ]);
  });

  it("should return the explosives with the new explosive added and the old explosives", () => {
    expect(
      handleAddExplosive({
        explosives: [
          {
            x: 0,
            y: 0,
            timer: 1000,
          },
        ],
        position: { x: 1, y: 0 },
        timer: 3000,
      })
    ).toEqual([
      {
        x: 0,
        y: 0,
        timer: 1000,
      },
      {
        x: 1,
        y: 0,
        timer: 3000,
      },
    ]);
  });
});
