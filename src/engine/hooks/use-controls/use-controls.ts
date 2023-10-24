import { useCallback, useEffect, useRef } from "react";
import { SwipeDirections, useSwipeable } from "react-swipeable";
import { MIN_UPDATE_DELAY } from "../..";
import { Character } from "../../types/entities";
import { Coordinates, Direction } from "../../types/physics";

const KEY_TO_DIRECTION: Record<string, Direction> = {
  ArrowUp: "UP",
  ArrowRight: "RIGHT",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
};

const SWIPE_TO_DIRECTION: Record<SwipeDirections, Direction> = {
  Up: "UP",
  Right: "RIGHT",
  Down: "DOWN",
  Left: "LEFT",
};

type Action = () => boolean;

const performSetDirection =
  (velocity?: Direction): Action =>
  () => {
    if (!velocity) {
      return false;
    }

    Rune.actions.setDirection({ velocity });

    return true;
  };

const performAddExplosive =
  ({ position }: { position: Coordinates }): Action =>
  () => {
    Rune.actions.addExplosive({ position });

    return true;
  };

export const useControls = ({ character }: { character?: Character }) => {
  const lastActionTime = useRef<number>();

  const dispatchAction = useCallback((action: Action) => {
    const now = Date.now();

    if (
      lastActionTime.current &&
      now - lastActionTime.current < MIN_UPDATE_DELAY
    ) {
      return;
    }

    const wasExecuted = action();

    if (wasExecuted) {
      lastActionTime.current = now;
    }
  }, []);

  const position = character?.position;
  const previousPosition = character?.previousPosition;

  const velocity = character?.velocity;
  const isMoving = velocity && (velocity[0] !== 0 || velocity[1] !== 0);

  const nextPosition = isMoving ? position : previousPosition;

  const swipeProps = useSwipeable({
    onSwiped: ({ dir }) => {
      dispatchAction(performSetDirection(SWIPE_TO_DIRECTION[dir]));
    },
    onTap: () => {
      if (!nextPosition) {
        return;
      }
      dispatchAction(performAddExplosive({ position: nextPosition }));
    },
    trackMouse: true,
    trackTouch: true,
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      dispatchAction(performSetDirection(KEY_TO_DIRECTION[event.key]));

      if (!position) {
        return;
      }

      if (event.key === " ") {
        dispatchAction(performAddExplosive({ position: position }));
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dispatchAction, position]);

  return { swipeProps };
};
