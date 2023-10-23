import { useCallback, useEffect, useRef } from "react";
import { SwipeDirections, useSwipeable } from "react-swipeable";
import { MIN_UPDATE_DELAY } from "../..";
import { Direction } from "../../types/physics";

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

// not used since explosive in put when player makes a move
// const performAddExplosive =
//   ({ position }: { position: Coordinates }): Action =>
//   () => {
//     Rune.actions.addExplosive({ position });

//     return true;
//   };

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
      //
    },
    trackMouse: true,
    trackTouch: true,
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      dispatchAction(performSetDirection(KEY_TO_DIRECTION[event.key]));
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dispatchAction]);

  return { swipeProps };
};
