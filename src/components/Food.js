import Entity from './Entity';

export default class Food extends Entity {
  constructor(x = 0, y = 0) {
    super(
      x,
      y,
      '#FFFFFF'
    );
  }
}
