import Keys from '../utils/Keys';

export default class Input {
  constructor() {
    this.left = false;
    this.up = false;
    this.right = false;
    this.down = false;

    window.addEventListener('keydown', ({keyCode}) => this.handleInput(keyCode));
  }

  reset() {
    this.left = this.up = this.right = this.down = false;
  }
  
  handleInput(keyCode) {
    this.reset();

    if (keyCode === Keys.LEFT) {
      this.left = true;
    } else if (keyCode === Keys.UP) {
      this.up = true;
    } else if (keyCode === Keys.RIGHT) {
      this.right = true;
    } else if (keyCode === Keys.DOWN) {
      this.down = true;
    }
  }
}
