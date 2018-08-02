import SnakeSegment from './SnakeSegment';
import Directions from '../utils/Directions';

export default class Snake {
  constructor(game) {
    this.game = game;
    this.segments = [new SnakeSegment(0, 0)];
    this.direction = Directions.STILL;
  }

  update() {
    this.updateDirection();

    // Find next head position
    const head = this.head();
    let nextHead = new SnakeSegment(
      head.x + this.direction.xVel,
      head.y + this.direction.yVel
    );

    // Check if will be in bounds
    if (!this.game.board.isInBounds(nextHead)) {
      this.game.end();
      return;
    }

    // Check if will be touching food
    if (nextHead.isTouching(this.game.food)) {
      this.segments.unshift(nextHead);
      this.game.board.placeAroundSnake(this.game.food);
      this.game.incrementScore();
      return;
    }

    // Update all segment positions
    let prev = nextHead;
    this.segments = this.segments.map(segment => {
      const updated = new SnakeSegment(prev.x, prev.y);
      prev = segment;
      return updated;
    });

    // Check if head touching a body segment
    if (this.isTouching(this.head(), false)) this.game.end();
  }

  updateDirection() {
      if (this.game.input.left && this.direction !== Directions.RIGHT) {
        this.direction = Directions.LEFT;
      } else if (this.game.input.up && this.direction !== Directions.DOWN) {
        this.direction = Directions.UP;
      } else if (this.game.input.right && this.direction !== Directions.LEFT) {
        this.direction = Directions.RIGHT;
      } else if (this.game.input.down && this.direction !== Directions.UP) {
        this.direction = Directions.DOWN;
      }
  }

  head() {
    return this.segments[0];
  }

  isTouching(entity, includeHead = true) {
    for (let i = includeHead ? 0 : 1; i < this.segments.length; i++) {
      if (this.segments[i].isTouching(entity)) return true;
    }

    return false;
  }

  draw() {
    this.segments.forEach(segment => {
      this.game.board.draw(segment);
    })
  }
}
