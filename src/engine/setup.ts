import { GameState, MAZE } from ".";
import { Character, Entity } from "./types/entities";
import { createEntity } from "./utils/create-entity";

const SKINS: Character["skin"][] = ["red", "blue"];
export const setup = (allPlayerIds: string[]): GameState => {
  const entities: Entity[] = [];

  let playersCounter = 0;

  MAZE.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      switch (cell) {
        case ".": {
          entities.push(
            createEntity({
              type: "space",
              position: [x, y],
              id: `space-${x}-${y}`,
            })
          );
          break;
        }
        case "#": {
          entities.push(
            createEntity({
              type: "wall",
              position: [x, y],
              id: `wall-${x}-${y}`,
            })
          );
          break;
        }
        case "$": {
          entities.push(
            createEntity({
              type: "crate",
              position: [x, y],
              id: `crate-${x}-${y}`,
            })
          );
          entities.push(
            createEntity({
              type: "space",
              position: [x, y],
              id: `space-${x}-${y}`,
            })
          );
          break;
        }
        case "@": {
          if (allPlayerIds.length > playersCounter) {
            entities.push(
              createEntity({
                type: "character",
                position: [x, y],
                id: allPlayerIds[playersCounter],
                skin: SKINS[playersCounter],
              })
            );
            entities.push(
              createEntity({
                type: "space",
                position: [x, y],
                id: `space-${x}-${y}`,
              })
            );
            playersCounter++;
          }
          break;
        }
      }
    });
  });

  return {
    entitiesCounter: 0,
    isEnded: false,
    isRunning: true,
    scores: Object.fromEntries(allPlayerIds.map((id) => [id, 0])),
    entities,
  };
};
