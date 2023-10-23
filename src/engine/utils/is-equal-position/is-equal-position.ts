import { Coordinates } from "../../types/physics";

export const isEqualPosition = (a: Coordinates, b: Coordinates) =>
  a[0] === b[0] && a[1] === b[1];
