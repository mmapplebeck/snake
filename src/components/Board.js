import {ENTITY_SIZE} from './Entity';

export default class Board {
  constructor(game) {
    this.game = game;
    this.canvas = this.game.el.getElementsByClassName('game__canvas')[0];
    this.ctx = this.canvas.getContext('2d');
    this.w = this.canvas.width / ENTITY_SIZE;
    this.h = this.canvas.height / ENTITY_SIZE;
  }

  placeAroundSnake(entity) {
    while (this.game.snake.isTouching(entity)) {
      const {x, y} = this.getRandomPos();
      entity.x = x;
      entity.y = y;
    }
  }

  getRandomPos() {
    return {
      x: Math.floor(Math.random() * this.w),
      y: Math.floor(Math.random() * this.h)
    };
  }

  draw({x, y, color}) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.toPixels(x), this.toPixels(y), ENTITY_SIZE, ENTITY_SIZE);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.toPixels(this.w), this.toPixels(this.h));
  }

  toPixels(dist) {
    return dist * ENTITY_SIZE;
  }

  isInBounds({x, y}) {
    return x >= 0 && x < this.w && y >= 0 && y < this.h;
  }
}
