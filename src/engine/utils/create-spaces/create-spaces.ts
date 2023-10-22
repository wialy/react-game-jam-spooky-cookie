import { createEntity } from "../create-entity";

export const createSpaces = (width = 1, height = 1) => {
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
