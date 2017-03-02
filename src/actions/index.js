export function toggleAlive(x,y) {
  return {
    type: 'TOGGLE_ALIVE',
    x,
    y
  };
}

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

export function clear() {
  return {
    type: 'CLEAR',
  };
}