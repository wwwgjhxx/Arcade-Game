!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,i=n(1);((r=i)&&r.__esModule?r:{default:r}).default.startGame()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(2)),o=l(n(3)),a=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(){u(this,e)}return r(e,null,[{key:"initConfig",value:function(e){var t=function(e){var t={row:6,col:5,scale:1};if(window.innerHeight<450||window.innerWidth<450)t.scale=.5,t.row=Math.floor((window.innerHeight-50-88*t.scale)/(83*t.scale)),t.col=Math.floor((window.innerWidth-50)/(101*t.scale)),t.col%2==0&&(t.col-=1),e&&t.row>6&&(t.row=6);else if(!e){var n=(window.innerHeight-100)/1084;t.scale=n>1?1:n.toFixed(2),t.row=12,t.col=window.innerHeight>window.innerWidth?Math.floor((window.innerWidth-100)/(83*t.scale)):11,t.col>11&&(t.col=11)}return t}(e);CONFIG.NUM_ROWS=t.row,CONFIG.NUM_COLS=t.col,CONFIG.SCALE=t.scale,CONFIG.CELL_WIDTH=101*t.scale,CONFIG.CELL_HEIGHT=83*t.scale,CONFIG.PLAYER_POS_Y_OFFSET=-40*t.scale,CONFIG.ENEMY_POS_Y_OFFSET=60*t.scale,CONFIG.CANVAS_WIDTH=Math.floor(101*t.col*t.scale),CONFIG.CANVAS_HEIGHT=Math.floor((83*t.row+88)*t.scale),CONFIG.MAX_SPEED=e?500*t.scale:800*t.scale}},{key:"initEnemies",value:function(e){for(var t=[0,-100,-200,-300,-400,-500,-600,-700,-800,-900,-1e3],n=0;n<e;n++)allEnemies.push(new i.default("images/enemy-bug.png",n,t[Math.floor(10*Math.random())]))}}]),e}(),c=function(){function e(){u(this,e)}return r(e,null,[{key:"startGame",value:function(){s.initConfig(!0),s.initEnemies(CONFIG.NUM_ROWS-3);var e=new a.default;e.showWinModal(!1),player=new o.default("images/char-boy.png",CONFIG.NUM_ROWS-1,Math.floor(CONFIG.NUM_COLS/2),function(){e.showWinModal(!0)}),document.addEventListener("keyup",function(t){e.isShown()||player.handleInput({37:"left",38:"up",39:"right",40:"down"}[t.keyCode])}),document.querySelector(".control-btn-left").addEventListener("click",function(t){e.isShown()||player.handleInput("left")}),document.querySelector(".control-btn-right").addEventListener("click",function(t){e.isShown()||player.handleInput("right")}),document.querySelector(".control-btn-up").addEventListener("click",function(t){e.isShown()||player.handleInput("up")}),document.querySelector(".control-btn-down").addEventListener("click",function(t){e.isShown()||player.handleInput("down")}),document.querySelector(".start-game").addEventListener("click",function(t){e.closeWinModal()}),document.querySelector(".control-menu-players").addEventListener("click",function(t){"IMG"===t.target.tagName&&(e.unSelectAllPlayers(),player.changeSprite("images"+t.target.src.substring(t.target.src.lastIndexOf("/"))),e.setSelected(t.target.parentElement.parentElement))}),document.querySelector(".control-menu-level").addEventListener("click",function(e){"LABEL"===e.target.tagName&&(allEnemies=[],s.initConfig("EASY"===e.target.textContent.toUpperCase()),player.setNewPosition(CONFIG.NUM_ROWS-1,Math.floor(CONFIG.NUM_COLS/2)),s.initEnemies(CONFIG.NUM_ROWS-3))})}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sprite=t,this.x=r,this.y=CONFIG.ENEMY_POS_Y_OFFSET+CONFIG.CELL_HEIGHT*n}return r(e,[{key:"reset",value:function(e){this.x=-100,this.y=CONFIG.ENEMY_POS_Y_OFFSET+CONFIG.CELL_HEIGHT*e}},{key:"isCollided",value:function(){return player.x<this.x+60*CONFIG.SCALE&&player.x>this.x-60*CONFIG.SCALE&&player.y<this.y+50*CONFIG.SCALE&&player.y>this.y-50*CONFIG.SCALE}},{key:"update",value:function(e){var t=Math.floor(Math.random()*CONFIG.MAX_SPEED)+Math.floor(100*Math.random());this.x+=t*e,this.x>CONFIG.CANVAS_WIDTH&&(this.x=-100,this.reset(Math.floor(Math.random()*(CONFIG.NUM_ROWS-3)))),this.isCollided()&&player.reset()}},{key:"render",value:function(){var e=Resources.get(this.sprite);ctx.drawImage(e,this.x,this.y,e.width*CONFIG.SCALE,e.height*CONFIG.SCALE)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sprite=t,this.setNewPosition(n,r),this.controllerWinningFunc=i,this.reset()}return r(e,[{key:"setNewPosition",value:function(e,t){this.startRow=e,this.startCol=t,this.reset()}},{key:"reset",value:function(){this.x=this.startCol*CONFIG.CELL_WIDTH,this.y=this.startRow*CONFIG.CELL_HEIGHT+CONFIG.PLAYER_POS_Y_OFFSET}},{key:"update",value:function(){}},{key:"changeSprite",value:function(e){this.sprite=e}},{key:"render",value:function(){var e=Resources.get(this.sprite);ctx.drawImage(e,this.x,this.y,e.width*CONFIG.SCALE,e.height*CONFIG.SCALE),this.isWinning()&&(this.reset(),this.controllerWinningFunc())}},{key:"isWinning",value:function(){return this.y<0}},{key:"handleInput",value:function(e){"left"==e&&Math.floor(this.x)>0&&(this.x-=CONFIG.CELL_WIDTH),"up"==e&&Math.floor(this.y)>0&&(this.y-=CONFIG.CELL_HEIGHT),"right"==e&&this.x+CONFIG.CELL_WIDTH<CONFIG.CANVAS_WIDTH&&(this.x+=CONFIG.CELL_WIDTH);var t=this.startRow*CONFIG.CELL_HEIGHT+CONFIG.PLAYER_POS_Y_OFFSET;"down"==e&&this.y<t&&(this.y+=CONFIG.CELL_HEIGHT)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.querySelector(".modal-window"),this.winElement=document.querySelector(".win-panel")}return r(e,[{key:"showWinModal",value:function(e){e&&(this.winElement.style.display="block"),this.modal.style.display="flex",window.innerHeight<500||window.innerWidth<500?this.modal.style.transform="scale(0.6)":this.modal.style.transform="none"}},{key:"closeWinModal",value:function(){this.modal.style.display="none"}},{key:"isShown",value:function(){return"none"!=this.modal.style.display}},{key:"unSelectAllPlayers",value:function(){document.querySelector(".player[data-selected]").removeAttribute("data-selected")}},{key:"setSelected",value:function(e){e.setAttribute("data-selected","")}}]),e}();t.default=i}]);