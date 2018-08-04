!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.ENTITY_SIZE=20;var r=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.color=i}return i(t,[{key:"isTouching",value:function(t){return this.x===t.x&&this.y===t.y}}]),t}();e.default=r},function(t,e,n){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}}(n(2));n(10),n(12),(new i.default).start()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(3)),o=u(n(6)),a=u(n(7)),s=u(n(8));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=document.getElementsByClassName("game")[0],this.board=new o.default(this),this.input=new s.default,this.snake,this.food,this.FPS=8,this.TIMESTEP=1e3/this.FPS,this.deltaTime,this.prevTick,this.frame,this.scoreEl=this.el.getElementsByClassName("game__score")[0],this.score,this.GAME_OVER_CLASS="game--is-over",this.restartEl=this.el.getElementsByClassName("game__restart")[0],this.restartEl.addEventListener("click",function(){e.isRunning||e.start()}),this.isRunning}return i(t,[{key:"start",value:function(){var t=this;this.el.classList.remove(this.GAME_OVER_CLASS),this.isRunning=!0,this.input.reset(),this.snake=new r.default(this),this.food=new a.default,this.board.placeAroundSnake(this.food),this.prevTick=null,this.deltaTime=0,this.score=0,this.frame=window.requestAnimationFrame(function(){return t.tick()})}},{key:"end",value:function(){this.isRunning=!1,this.el.classList.add(this.GAME_OVER_CLASS)}},{key:"update",value:function(){this.snake.update()}},{key:"draw",value:function(){this.board.clear(),this.board.draw(this.food),this.snake.draw(),this.scoreEl.innerHTML=this.score}},{key:"incrementScore",value:function(){this.score++}},{key:"tick",value:function(){var t=this,e=window.performance.now();for(this.prevTick||(this.prevTick=e),this.deltaTime+=e-this.prevTick,this.prevTick=e;this.deltaTime>=this.TIMESTEP;)this.update(),this.deltaTime-=this.TIMESTEP;this.isRunning&&(this.draw(),this.frame=window.requestAnimationFrame(function(){return t.tick()}))}}]),t}();e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=a(n(4)),o=a(n(5));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.segments=[new r.default(0,0)],this.direction=o.default.STILL}return i(t,[{key:"update",value:function(){this.updateDirection();var t=this.head(),e=new r.default(t.x+this.direction.xVel,t.y+this.direction.yVel);if(this.game.board.isInBounds(e)){if(e.isTouching(this.game.food))return this.segments.unshift(e),this.game.board.placeAroundSnake(this.game.food),void this.game.incrementScore();var n=e;this.segments=this.segments.map(function(t){var e=new r.default(n.x,n.y);return n=t,e}),this.isTouching(this.head(),!1)&&this.game.end()}else this.game.end()}},{key:"updateDirection",value:function(){this.game.input.left&&this.direction!==o.default.RIGHT?this.direction=o.default.LEFT:this.game.input.up&&this.direction!==o.default.DOWN?this.direction=o.default.UP:this.game.input.right&&this.direction!==o.default.LEFT?this.direction=o.default.RIGHT:this.game.input.down&&this.direction!==o.default.UP&&(this.direction=o.default.DOWN)}},{key:"head",value:function(){return this.segments[0]}},{key:"isTouching",value:function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?0:1;e<this.segments.length;e++)if(this.segments[e].isTouching(t))return!0;return!1}},{key:"draw",value:function(){var t=this;this.segments.forEach(function(e){t.game.board.draw(e)})}}]),t}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n(0));var r=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"#000000"))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default),e}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.xVel=e,this.yVel=n};e.default={LEFT:new i(-1,0),UP:new i(0,-1),RIGHT:new i(1,0),DOWN:new i(0,1),STILL:new i(0,0)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(0);var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.canvas=this.game.el.getElementsByClassName("game__canvas")[0],this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width/r.ENTITY_SIZE,this.h=this.canvas.height/r.ENTITY_SIZE}return i(t,[{key:"placeAroundSnake",value:function(t){for(;this.game.snake.isTouching(t);){var e=this.getRandomPos(),n=e.x,i=e.y;t.x=n,t.y=i}}},{key:"getRandomPos",value:function(){return{x:Math.floor(Math.random()*this.w),y:Math.floor(Math.random()*this.h)}}},{key:"draw",value:function(t){var e=t.x,n=t.y,i=t.color;this.ctx.fillStyle=i,this.ctx.fillRect(this.toPixels(e),this.toPixels(n),r.ENTITY_SIZE,r.ENTITY_SIZE)}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.toPixels(this.w),this.toPixels(this.h))}},{key:"toPixels",value:function(t){return t*r.ENTITY_SIZE}},{key:"isInBounds",value:function(t){var e=t.x,n=t.y;return e>=0&&e<this.w&&n>=0&&n<this.h}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n(0));var r=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,"#FFFFFF"))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default),e}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t){return t&&t.__esModule?t:{default:t}}(n(9));var o=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.left=!1,this.up=!1,this.right=!1,this.down=!1,window.addEventListener("keydown",function(t){var n=t.keyCode;return e.handleInput(n)})}return i(t,[{key:"reset",value:function(){this.left=this.up=this.right=this.down=!1}},{key:"handleInput",value:function(t){this.reset(),t===r.default.LEFT?this.left=!0:t===r.default.UP?this.up=!0:t===r.default.RIGHT?this.right=!0:t===r.default.DOWN&&(this.down=!0)}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={LEFT:37,UP:38,RIGHT:39,DOWN:40}},function(t,e,n){},,function(t,e,n){}]);