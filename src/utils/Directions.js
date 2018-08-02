class Direction {
  constructor(xVel, yVel) {
    this.xVel = xVel;
    this.yVel = yVel;
  }
}

export default {
  LEFT: new Direction(-1, 0),
  UP: new Direction(0, -1),
  RIGHT: new Direction(1, 0),
  DOWN: new Direction(0, 1),
  STILL: new Direction(0, 0)
};
