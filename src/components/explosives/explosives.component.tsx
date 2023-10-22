import { GameState } from "../../engine";
import { Tile } from "../tile";

export const Explosives = ({ explosives }: Pick<GameState, "explosives">) => {
  if (!explosives) {
    return null;
  }

  return explosives.map(({ x, y, isExploded }, i) => {
    if (isExploded) {
      return null;
    }

    return <Tile coordinates={{ x, y }}>💣</Tile>;
  });
};
