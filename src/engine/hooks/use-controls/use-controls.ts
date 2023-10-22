import { useCallback, useEffect, useRef } from "react";
import { SwipeDirections, useSwipeable } from "react-swipeable";
import { MIN_UPDATE_DELAY } from "../..";
import { Velocity } from "../../types/physics";

const KEY_TO_DIRECTION: Record<string, Velocity> = {
  ArrowUp: "UP",
  ArrowRight: "RIGHT",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
};

const SWIPE_TO_DIRECTION: Record<SwipeDirections, Velocity> = {
  Up: "UP",
  Right: "RIGHT",
  Down: "DOWN",
  Left: "LEFT",
};

type Action = () => boolean;

const performSetDirection =
  (velocity?: Velocity): Action =>
  () => {
    if (!velocity) {
      return false;
    }

    Rune.actions.setDirection({ velocity });

    return true;
  };

const performAddExplosive = (): Action => () => {
  Rune.actions.addExplosive();

  return true;
};

export const useControls = () => {
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

  const swipeProps = useSwipeable({
    onSwiped: ({ dir }) => {
      dispatchAction(performSetDirection(SWIPE_TO_DIRECTION[dir]));
    },
    onTap: () => {
      dispatchAction(performAddExplosive());
    },
    trackMouse: true,
    trackTouch: true,
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.key === " ") {
        console.log("boom");
        dispatchAction(performAddExplosive());
        return;
      }

      dispatchAction(performSetDirection(KEY_TO_DIRECTION[event.key]));
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dispatchAction]);

  return { swipeProps };
};
