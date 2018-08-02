export const ENTITY_SIZE = 20;

export default class Entity {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  isTouching(other) {
    return this.x === other.x && this.y === other.y;
  }
}
