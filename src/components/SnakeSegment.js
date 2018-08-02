import Entity from './Entity';

export default class SnakeSegment extends Entity {
  constructor(x = 0, y = 0) {
    super(
      x,
      y,
      '#000000'
    );
  }
}
