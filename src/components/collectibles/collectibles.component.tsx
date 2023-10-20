import { GameState } from "../../engine";
import { Dot } from "./dot.component";

export const Collectibles = ({
  collectibles,
}: Pick<GameState, "collectibles">) => {
  if (!collectibles) {
    return null;
  }

  return collectibles.map((collectible, i) => (
    <Dot key={i} config={collectible} />
  ));
};
