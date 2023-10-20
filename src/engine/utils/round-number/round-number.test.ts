import { describe, expect, it } from "vitest";
import { roundNumber } from ".";

describe("roundNumber with 0 precision", () => {
  it.each([
    [0, Math.round(0)],
    [0.1, Math.round(0.1)],
    [0.5, Math.round(0.5)],
    [0.9, Math.round(0.9)],
    [1, Math.round(1)],
    [-0.1, Math.round(-0.1)],
    [-0.5, Math.round(-0.5)],
    [-0.9, Math.round(-0.9)],
    [-1, Math.round(-1)],
  ])("should round %s to %s", (number, expected) => {
    expect(roundNumber(number)).toEqual(expected);
  });
});

describe("roundNumber with 1 precision", () => {
  it.each([
    [0, 0],
    [0.1534523, 0.2],
    [0.5123213, 0.5],
    [0.934314, 0.9],
    [1, 1.0],
    [-0.123232, -0.1],
    [-0.52323, -0.5],
    [-0.92323, -0.9],
    [-1, -1.0],
  ])("should round %s to %s", (number, expected) => {
    expect(roundNumber(number, 1)).toEqual(expected);
  });
});
