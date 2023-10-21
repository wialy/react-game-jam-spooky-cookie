import { useCallback, useEffect, useRef } from "react";
import { SwipeDirections, useSwipeable } from "react-swipeable";
import { Direction, UPDATES_PER_SECOND } from "../..";

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

export const useControls = () => {
  const lastActionTime = useRef<number>();

  const dispatchAction = useCallback((direction?: Direction) => {
    if (!direction) {
      return;
    }

    const now = Date.now();

    if (
      lastActionTime.current &&
      now - lastActionTime.current < 1000 / UPDATES_PER_SECOND
    ) {
      return;
    }

    lastActionTime.current = now;

    Rune.actions.setDirection({ direction });
  }, []);

  const swipeProps = useSwipeable({
    onSwiped: ({ dir }) => {
      dispatchAction(SWIPE_TO_DIRECTION[dir]);
    },
    onTap: () => {
      //
    },
    trackMouse: true,
    trackTouch: true,
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      dispatchAction(KEY_TO_DIRECTION[event.key]);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dispatchAction]);

  return { swipeProps };
};
