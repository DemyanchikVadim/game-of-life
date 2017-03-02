export function makeRandomGrid() {
  return {
    type: 'MAKE_RANDOM'
  };
}

export function startPlaying() {
  return {
    type: 'PLAY'
  };
}

export function tick() {
  return {
    type: 'TICK'
  };
}