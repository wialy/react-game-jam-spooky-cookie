import { Coordinates, Explosive, GameState } from "../..";

export const handleAddExplosive = ({
  explosives,
  timer,
  position,
}: {
  position: Coordinates;
  explosives: Explosive[];
  timer: number;
}): GameState["explosives"] => {
  const newExplosive: Explosive = {
    ...position,
    timer,
  };

  return [...(explosives ?? []), newExplosive];
};
