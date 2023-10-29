import { useEffect } from "react";
import { sound } from ".";
import {
  DAMAGE_TIMER,
  EXPLOSIVE_TIMER,
  FREEZE_TIMER,
  GameState,
} from "../engine";
import {
  isCharacter,
  isCrate,
  isDamage,
  isExplosive,
  isGhost,
  isSpace,
} from "../engine/types/entities";
import { isEqualPosition } from "../engine/utils/is-equal-position";

export const useSound = ({
  game,
  previousGame,
}: {
  game?: GameState | undefined;
  previousGame?: GameState | undefined;
}) => {
  const { entities } = game ?? {};
  const { entities: previousEntities } = previousGame ?? {};

  useEffect(() => {
    if (!entities) {
      return;
    }

    if (!sound.gameLoop.playing()) {
      sound.gameLoop.play();
    }

    const isNewDamage = entities.some(
      (entity) => isDamage(entity) && entity.timer === DAMAGE_TIMER
    );

    if (isNewDamage) {
      sound.squish.play();
    }

    const isCharacterMoved = entities
      .filter(isCharacter)
      .some(
        ({ position, previousPosition }) =>
          position &&
          previousPosition &&
          !isEqualPosition(position, previousPosition)
      );

    if (isCharacterMoved) {
      sound.step.play();
    }

    const isGhostAppeared =
      entities.some((entity) => isGhost(entity) && entity.isVisible) &&
      previousEntities?.some((entity) => isGhost(entity) && !entity.isVisible);

    if (isGhostAppeared) {
      sound.ghost.play();
    }

    const isCloseToGhost = entities.some(
      (entity) =>
        isGhost(entity) &&
        entity.position &&
        entity.isVisible &&
        entities.some(
          (otherEntity) =>
            isCharacter(otherEntity) &&
            otherEntity.position &&
            Math.abs(entity.position[0] - otherEntity.position[0]) <= 1 &&
            Math.abs(entity.position[1] - otherEntity.position[1]) <= 1
        )
    );

    if (isCloseToGhost && !sound.ghostMessage1.playing()) {
      sound.ghostMessage1.play();
    }

    const isNewExplosivePlaced = entities.some(
      (entity) => isExplosive(entity) && entity.timer === EXPLOSIVE_TIMER
    );

    if (isNewExplosivePlaced) {
      sound.ignite.play();
    }

    const isExplosivePumped = entities.some(
      (entity) => isExplosive(entity) && entity.timer === 1
    );

    if (isExplosivePumped) {
      sound.explosivePump.play();
    }

    const isPlayerHit = entities.some(
      (entity) => isCharacter(entity) && entity.timer === FREEZE_TIMER
    );

    if (isPlayerHit) {
      sound.punch.play();
      sound.laugh.play();
    }

    const isCollectibleCollected = entities.some(
      (entity) =>
        isSpace(entity) &&
        entity.playerId !== undefined &&
        previousEntities?.find(
          (previousEntity) =>
            isSpace(previousEntity) &&
            previousEntity.id === entity.id &&
            previousEntity.playerId === undefined
        ) !== undefined
    );

    if (isCollectibleCollected) {
      sound.crunch.play();
    }

    const isCharacterTurned = entities.some(
      (entity) =>
        isCharacter(entity) &&
        (entity.velocity[0] || entity.velocity[1]) &&
        previousEntities?.find(
          (previousEntity) =>
            isCharacter(previousEntity) &&
            previousEntity.id === entity.id &&
            previousEntity.velocity[0] === -entity.velocity[0] &&
            previousEntity.velocity[1] === -entity.velocity[1]
        ) !== undefined
    );

    if (isCharacterTurned) {
      sound.turn.play();
    }

    const isCrateStopped = entities.some(
      (entity) =>
        isCrate(entity) &&
        entity.velocity[0] === 0 &&
        entity.velocity[1] === 0 &&
        previousEntities?.find(
          (previousEntity) =>
            previousEntity.id === entity.id &&
            isCrate(previousEntity) &&
            (previousEntity.velocity[0] !== 0 ||
              previousEntity.velocity[1] !== 0)
        ) !== undefined
    );

    if (isCrateStopped) {
      sound.crateStop.play();
    }

    const isCrateCrushed = entities.some(
      (entity) => isCrate(entity) && entity.health === 0
    );

    if (isCrateCrushed) {
      sound.crateCrush.play();
    }

    const isCrateMoving = entities.some(
      (entity) =>
        isCrate(entity) &&
        (entity.velocity[0] !== 0 || entity.velocity[1] !== 0)
    );

    if (isCrateMoving) {
      sound.crateMove.play();
    }

    const isExplosivePushed = entities.some(
      (entity) =>
        isExplosive(entity) &&
        (entity.velocity[0] !== 0 || entity.velocity[1] !== 0) &&
        previousEntities?.find(
          (previousEntity) =>
            previousEntity.id === entity.id &&
            isExplosive(previousEntity) &&
            previousEntity.velocity[0] === 0 &&
            previousEntity.velocity[1] === 0
        ) !== undefined
    );

    if (isExplosivePushed) {
      sound.explosivePush.play();
    }
  });
};
