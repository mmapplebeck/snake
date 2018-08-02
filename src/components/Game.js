import Snake from './Snake';
import Board from './Board';
import Food from './Food';
import Input from './Input';

export default class Game {
  constructor() {
    this.el = document.getElementsByClassName('game')[0];
    this.board = new Board(this);
    this.input = new Input();
    this.snake;
    this.food;

    this.FPS = 8;
    this.TIMESTEP = 1000 / this.FPS;
    this.deltaTime;
    this.prevTick;
    this.frame;

    this.scoreEl = this.el.getElementsByClassName('game__score')[0];
    this.score;

    this.GAME_OVER_CLASS = 'game--is-over';
    this.restartEl = this.el.getElementsByClassName('game__restart')[0];
    this.restartEl.addEventListener('click', () => {
      if (!this.isRunning) this.start();
    });

    this.isRunning;
  }

  start() {
    this.el.classList.remove(this.GAME_OVER_CLASS);
    this.isRunning = true;
    this.input.reset();
    this.snake = new Snake(this);
    this.food = new Food();
    this.board.placeAroundSnake(this.food);
    this.prevTick = null;
    this.deltaTime = 0;
    this.score = 0;
    this.frame = window.requestAnimationFrame(() => this.tick());
  }

  end() {
    this.isRunning = false;
    this.el.classList.add(this.GAME_OVER_CLASS);
  }

  update() {
    this.snake.update();
  }

  draw() {
    this.board.clear();
    this.board.draw(this.food);
    this.snake.draw();
    this.scoreEl.innerHTML = this.score;
  }

  incrementScore() {
    this.score++;
  }

  tick() {
    const now = window.performance.now();
    if (!this.prevTick) this.prevTick = now;

    this.deltaTime += now - this.prevTick;
    this.prevTick = now;

    while (this.deltaTime >= this.TIMESTEP) {
      this.update();
      this.deltaTime -= this.TIMESTEP;
    }

    if (this.isRunning) {
      this.draw();
      this.frame = window.requestAnimationFrame(() => this.tick());
    }
  }
}
