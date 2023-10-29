import { Howl } from "howler";

export const sound = {
  squish: new Howl({ src: "sounds/squish.m4a", volume: 0.75 }),
  step: new Howl({ src: "sounds/step.m4a", volume: 2, rate: 2 }),
  ghost: new Howl({ src: "sounds/ghost.m4a", volume: 0.75, rate: 0.75 }),
  ignite: new Howl({ src: "sounds/ignite.m4a", volume: 0.75, rate: 0.9 }),
  gameLoop: new Howl({
    src: "sounds/game-loop.m4a",
    volume: 0.5,
    rate: 0.5,
    loop: true,
  }),
  punch: new Howl({ src: "sounds/punch.m4a", volume: 1 }),
  crunch: new Howl({ src: "sounds/crush-short.m4a", volume: 1, rate: 1.25 }),
  turn: new Howl({ src: "sounds/turn.m4a", volume: 0.25 }),
  crateStop: new Howl({ src: "sounds/crate-stop.m4a", volume: 0.25 }),
  crateCrush: new Howl({ src: "sounds/crate-crush.m4a", volume: 1 }),
  crateMove: new Howl({ src: "sounds/crate-move.m4a", volume: 0.5 }),
  ghostMessage1: new Howl({ src: "sounds/ghost-message-1.m4a", volume: 1.5 }),
  explosivePush: new Howl({
    src: "sounds/explosive-push.m4a",
    volume: 1,
    rate: 0.25,
  }),
  explosivePump: new Howl({
    src: "sounds/explosive-pump.m4a",
    volume: 0.5,
    rate: 1.8,
  }),
  laugh: new Howl({ src: "sounds/laugh.m4a", rate: 0.9 }),
  ready: new Howl({ src: "sounds/ready.m4a", volume: 0.5, rate: 1.5 }),
  gameOver: new Howl({ src: "sounds/game-over.m4a", volume: 0.75 }),
};
