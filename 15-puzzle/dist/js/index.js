/*! @2017 vivaxy */
webpackJsonp([0],{"./node_modules/bezier-easing/src/index.js":function(t,e,n){"use strict";function i(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function o(t){return 3*t}function s(t,e,n){return((i(e,n)*t+r(e,n))*t+o(e))*t}function a(t,e,n){return 3*i(e,n)*t*t+2*r(e,n)*t+o(e)}function u(t,e,n,i,r){var o,a,u=0;do a=e+(n-e)/2,o=s(a,i,r)-t,o>0?n=a:e=a;while(Math.abs(o)>h&&++u<d);return a}function l(t,e,n,i){for(var r=0;r<c;++r){var o=a(e,n,i);if(0===o)return e;var u=s(e,n,i)-t;e-=u/o}return e}var c=4,f=.001,h=1e-7,d=10,p=11,v=1/(p-1),y="function"==typeof Float32Array;t.exports=function(t,e,n,i){function r(e){for(var i=0,r=1,s=p-1;r!==s&&o[r]<=e;++r)i+=v;--r;var c=(e-o[r])/(o[r+1]-o[r]),h=i+c*v,d=a(h,t,n);return d>=f?l(e,h,t,n):0===d?h:u(e,i,i+v,t,n)}if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");var o=y?new Float32Array(p):new Array(p);if(t!==e||n!==i)for(var c=0;c<p;++c)o[c]=s(c*v,t,n);return function(o){return t===e&&n===i?o:0===o?0:1===o?1:s(r(o),e,i)}}},"./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js?{}!./src/styles/index.pcss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(),e.push([t.i,"/**\n * @since 2017-02-20 10:27\n * @author vivaxy\n */\n\n:root {\n}\n\n* {\n    -webkit-tap-highlight-color: transparent;\n}\n\nhtml {\n    height: 100%;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    height: 100%;\n    position: relative;\n    // background-color: rgb(90, 90, 90);\n}\n\ncanvas {\n    display: block;\n    background-color: #ffffff;\n    position: absolute;\n}\n",""])},"./node_modules/css-loader/lib/css-base.js":function(t,e,n){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},"./node_modules/eventemitter3/index.js":function(t,e,n){"use strict";function i(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(t,e,n,i,o){if("function"!=typeof n)throw new TypeError("The listener must be a function");var s=new r(n,i||t,o),a=l?l+e:e;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],s]:t._events[a].push(s):(t._events[a]=s,t._eventsCount++),t}function s(t,e){0===--t._eventsCount?t._events=new i:delete t._events[e]}function a(){this._events=new i,this._eventsCount=0}var u=Object.prototype.hasOwnProperty,l="~";Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(l=!1)),a.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)u.call(t,e)&&n.push(l?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},a.prototype.listeners=function(t){var e=l?l+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,o=new Array(r);i<r;i++)o[i]=n[i].fn;return o},a.prototype.listenerCount=function(t){var e=l?l+t:t,n=this._events[e];return n?n.fn?1:n.length:0},a.prototype.emit=function(t,e,n,i,r,o){var s=l?l+t:t;if(!this._events[s])return!1;var a,u,c=this._events[s],f=arguments.length;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),f){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,i),!0;case 5:return c.fn.call(c.context,e,n,i,r),!0;case 6:return c.fn.call(c.context,e,n,i,r,o),!0}for(u=1,a=new Array(f-1);u<f;u++)a[u-1]=arguments[u];c.fn.apply(c.context,a)}else{var h,d=c.length;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),f){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,i);break;default:if(!a)for(h=1,a=new Array(f-1);h<f;h++)a[h-1]=arguments[h];c[u].fn.apply(c[u].context,a)}}return!0},a.prototype.on=function(t,e,n){return o(this,t,e,n,!1)},a.prototype.once=function(t,e,n){return o(this,t,e,n,!0)},a.prototype.removeListener=function(t,e,n,i){var r=l?l+t:t;if(!this._events[r])return this;if(!e)return s(this,r),this;var o=this._events[r];if(o.fn)o.fn!==e||i&&!o.once||n&&o.context!==n||s(this,r);else{for(var a=0,u=[],c=o.length;a<c;a++)(o[a].fn!==e||i&&!o[a].once||n&&o[a].context!==n)&&u.push(o[a]);u.length?this._events[r]=1===u.length?u[0]:u:s(this,r)}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=l?l+t:t,this._events[e]&&s(this,e)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=l,a.EventEmitter=a,t.exports=a},"./node_modules/style-loader/addStyles.js":function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=h[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(u(i.parts[o],e))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(u(i.parts[o],e));h[i.id]={id:i.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],s=r[1],a=r[2],u=r[3],l={css:s,media:a,sourceMap:u};n[o]?n[o].parts.push(l):e.push(n[o]={id:o,parts:[l]})}return e}function r(t,e){var n=v(),i=b[b.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function u(t,e){var n,i,r;if(e.singleton){var u=m++;n=y||(y=s(e)),i=l.bind(null,n,u,!1),r=l.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(e),i=f.bind(null,n),r=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=c.bind(null,n),r=function(){o(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function l(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function c(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var h={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,b=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=i(t);return n(r,e),function(t){for(var o=[],s=0;s<r.length;s++){var a=r[s],u=h[a.id];u.refs--,o.push(u)}if(t){var l=i(t);n(l,e)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},"./src/entries/index.js":function(t,e,n){"use strict";n("./src/main/index.js")},"./src/main/canvas.js":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n("./src/main/configs.js"),s=function(){function t(){i(this,t);var e=document.querySelector(".js-canvas");this.canvas=e,this.ctx=e.getContext("2d"),this.width=o.canvasWidth,this.height=o.canvasHeight,e.width=o.canvasWidth,e.height=o.canvasHeight,this.styles={width:window.innerWidth,height:window.innerHeight,top:0,left:0},this.updatePosition()}return r(t,[{key:"updatePosition",value:function(){var t=this.canvas,e=this.width,n=this.height,i=this.styles;e/n>window.innerWidth/window.innerHeight?(i.width=window.innerWidth,i.height=window.innerWidth*n/e):(i.height=window.innerHeight,i.width=window.innerHeight*e/n),i.top=(window.innerHeight-i.height)/2,i.left=(window.innerWidth-i.width)/2,Object.keys(i).forEach(function(e){t.style[e]=i[e]+"px"})}},{key:"getCtx",value:function(){return this.ctx}},{key:"getCanvas",value:function(){return this.canvas}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}}]),t}();e.default=s},"./src/main/configs.js":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=e.canvasWidth=800,r=(e.canvasHeight=1200,e.size=4),o=e.gridSize=720,s=e.gridBorderWidth=0,a=e.gridX=(i-o-2*s)/2,u=e.gridY=200,l=(e.gridBorderColor="#1e2e45",e.gridBackgroundColor="#1e2e45",e.tileSpacing=10),c=(e.tileBorderWidth=0,e.tileSize=(o-l*(r+1)-2*s)/r),f=(e.tileBorderColor="rgb(255, 0, 0)",e.tileTextColor="#1e2e45",e.tileColors=["#ff778d","#ffce54","#54c0ff","#e7e2ea"],e.getTilePosition=function(t){var e=t.rowIndex,n=t.colIndex,i=a+(n+1)*l+c*n+s,r=u+(e+1)*l+c*e+s;return{x:i,y:r}},e.buttonAreaWidth=720);e.buttonAreaHeight=60,e.buttonAreaTop=120,e.buttonAreaLeft=(i-f)/2,e.buttonSpacing=10,e.buttonBackgroundColor="#1e2e45",e.buttonDisabledBackgroundColor="#e7e2ea",e.buttonTextColor="#fff",e.buttonTypes={SCRAMBLE:"SCRAMBLE"},e.timerTop=40,e.timerLeft=a,e.timerWidth=o/2,e.timerHeight=60,e.timerFontSize=60,e.timerFontColor="#1e2e45",e.stepperTop=40,e.stepperLeft=a+o/2,e.stepperWidth=o/2,e.stepperHeight=60,e.stepperFontSize=60,e.stepperFontColor="#1e2e45",e.tileTypes={SPACE:"SPACE",NORMAL:"NORMAL"},e.mapCanvasToPoint=function(t){return window.innerWidth/i*t},e.mapPointToCanvas=function(t){return i/window.innerWidth*t},e.movementThreshold=(c+l)/2,e.directions={LEFT:"LEFT",UP:"UP",RIGHT:"RIGHT",DOWN:"DOWN"},e.events={MOVE:"MOVE",TRY_MOVE:"TRY_MOVE",RESET_SPACE_TILE:"RESET_SPACE_TILE",CLICK:"CLICK",RESIZE_CANVAS:"RESIZE_CANVAS"},e.browserEvents={TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel",CLICK:"click",RESIZE:"resize",ORIENTATION_CHANGE:"orientationchange"},e.getNow=function(){return(new Date).getTime()},e.puzzleStatusCodes={SCRAMBLING:"SCRAMBLING",READY:"READY",STARTED:"STARTED",WINNING:"WINNING"}},"./src/main/index.js":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n("./src/styles/index.pcss");var s=n("./src/main/configs.js"),a=n("./src/main/canvas.js"),u=i(a),l=n("./src/main/puzzle.js"),c=i(l),f=n("./src/main/input.js"),h=i(f),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.row,i=void 0===n?4:n,o=e.col,a=void 0===o?4:o;r(this,t);var l=new u.default,f=new h.default({canvas:l.getCanvas()}),d=new c.default({ctx:l.getCtx(),row:i,col:a,input:f});this.canvas=l,this.puzzle=d,document.body.addEventListener(s.browserEvents.TOUCH_MOVE,function(t){t.preventDefault()},{passive:!1}),f.on(s.events.RESIZE_CANVAS,function(){l.updatePosition()})}return o(t,[{key:"render",value:function(){var t=this.puzzle,e=this.canvas;e.clear(),t.render()}},{key:"update",value:function(){var t=this.puzzle;t.update()}},{key:"loop",value:function(){var t=this;this.update(),this.render(),requestAnimationFrame(function(){t.loop()})}},{key:"start",value:function(){this.loop(),this.puzzle.scramble(),this.puzzle.puzzleStatus=s.puzzleStatusCodes.READY}}]),t}();(new d).start()},"./src/main/input.js":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n("./node_modules/eventemitter3/index.js"),u=n("./src/main/configs.js"),l=function(t){return t.changedTouches?{x:(0,u.mapPointToCanvas)(t.changedTouches[0].clientX-t.target.offsetLeft),y:(0,u.mapPointToCanvas)(t.changedTouches[0].clientY-t.target.offsetTop)}:{x:(0,u.mapPointToCanvas)(t.clientX-t.target.offsetLeft),y:(0,u.mapPointToCanvas)(t.clientY-t.target.offsetTop)}},c=function(t){function e(t){var n=t.canvas;i(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.start=function(t){var e=l(t);o.resetPoint(e)},o.move=function(t){var e=l(t);o.pointX=e.x,o.pointY=e.y,o.tryMove()},o.end=function(){o.resetPoint(o.invalidPoint),o.emit(u.events.RESET_SPACE_TILE)},o.click=function(t){o.emit(u.events.CLICK,l(t))},o.resize=function(){o.emit(u.events.RESIZE_CANVAS)},o.orientationChange=function(){o.emit(u.events.RESIZE_CANVAS)},o.canvas=n,o.invalidPoint={x:null,y:null},o.resetPoint(o.invalidPoint),o.initialize(),o}return o(e,t),s(e,[{key:"initialize",value:function(){var t=this.canvas,e=document.body;e.addEventListener(u.browserEvents.TOUCH_START,this.start,{passive:!0}),e.addEventListener(u.browserEvents.TOUCH_MOVE,this.move,{passive:!0}),e.addEventListener(u.browserEvents.TOUCH_END,this.end,{passive:!0}),e.addEventListener(u.browserEvents.TOUCH_CANCEL,this.end,{passive:!0}),t.addEventListener(u.browserEvents.CLICK,this.click,{passive:!0}),window.addEventListener(u.browserEvents.RESIZE,this.resize,{passive:!0}),window.addEventListener(u.browserEvents.ORIENTATION_CHANGE,this.orientationChange,{passive:!0})}},{key:"getDirection",value:function(){var t=Math.abs(this.startPointX-this.pointX),e=Math.abs(this.startPointY-this.pointY);return t>e?this.pointX-this.startPointX>0?u.directions.RIGHT:u.directions.LEFT:this.pointY-this.startPointY>0?u.directions.DOWN:u.directions.UP}},{key:"tryMove",value:function(){var t=this.pointX-this.startPointX,e=this.pointY-this.startPointY,n={deltaX:t,deltaY:e,x:this.pointX,y:this.pointY},i=this.getDirection();this.emit(u.events.TRY_MOVE,i,n)}},{key:"setStartPoint",value:function(t){var e=t.x,n=void 0===e?this.startPointX:e,i=t.y,r=void 0===i?this.startPointY:i;this.startPointX=n,this.startPointY=r}},{key:"moveStartPoint",value:function(t){var e=t.x,n=t.y;this.startPointX+=e,this.startPointY+=n}},{key:"resetPoint",value:function(t){var e=t.x,n=t.y;this.startPointX=e,this.startPointY=n,this.pointX=e,this.pointY=n}}]),e}(a.EventEmitter);e.default=c},"./src/main/puzzle.js":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n("./src/main/configs.js"),u=n("./src/main/puzzle/grid.js"),l=i(u),c=n("./src/main/puzzle/tile.js"),f=i(c),h=n("./src/main/puzzle/buttons.js"),d=i(h),p=n("./src/main/puzzle/timer.js"),v=i(p),y=n("./src/main/puzzle/stepper.js"),m=i(y),b=function(t){return function(e){return Object.keys(e).map(function(n){if(n.toUpperCase()===t)return e[n]()})}},g=function(){function t(e){var n=e.ctx,i=e.row,r=e.col,s=e.input;o(this,t),this.ctx=n,this.row=i,this.col=r,this.input=s,this.grid=new l.default({ctx:n}),this.buttons=new d.default({ctx:n}),this.timer=new v.default({ctx:n}),this.stepper=new m.default({ctx:n}),this.tileList=this.initializeTileList(),this.initializeInput(),this.buttons.enable([a.buttonTypes.SCRAMBLE]),this.puzzleStatus=a.puzzleStatusCodes.SCRAMBLING}return s(t,[{key:"initializeInput",value:function(){var t=this;this.input.on(a.events.TRY_MOVE,function(e,n){[a.puzzleStatusCodes.SCRAMBLING,a.puzzleStatusCodes.WINNING].includes(t.puzzleStatus)||(t.tryMove(e,n),b(e)({left:function(){n.deltaX<-a.movementThreshold&&t.move(e,n)},up:function(){n.deltaY<-a.movementThreshold&&t.move(e,n)},right:function(){n.deltaX>a.movementThreshold&&t.move(e,n)},down:function(){n.deltaY>a.movementThreshold&&t.move(e,n)}}))}),this.input.on(a.events.RESET_SPACE_TILE,function(){var e=t.findSpaceTile();e.animateToResetPosition()}),this.input.on(a.events.CLICK,function(e){var n=t.buttons.hitButton(e);switch(n){case a.buttonTypes.SCRAMBLE:t.puzzleStatus=a.puzzleStatusCodes.SCRAMBLING,t.timer.reset(),t.stepper.reset(),t.scramble(),t.puzzleStatus=a.puzzleStatusCodes.READY,t.buttons.enable([a.buttonTypes.SCRAMBLE])}})}},{key:"initializeTileList",value:function(){var t=this.ctx,e=this.col,n=this.row,i=a.tileSize,r=a.tileSize;return Array.from({length:n},function(o,s){return Array.from({length:e},function(o,u){return new f.default({ctx:t,width:i,height:r,colIndex:u,rowIndex:s,text:String(s*n+u+1),type:u===e-1&&s===n-1?a.tileTypes.SPACE:a.tileTypes.NORMAL})})})}},{key:"tryMove",value:function(t,e){var n=this.findSpaceTile();n.colIndex>=a.size-1&&e.deltaX>0&&(this.input.setStartPoint({x:n.x}),e.deltaX=0),n.colIndex<=0&&e.deltaX<0&&(this.input.setStartPoint({x:n.x}),e.deltaX=0),n.rowIndex<=0&&e.deltaY<0&&(this.input.setStartPoint({y:n.y}),e.deltaY=0),n.rowIndex>=a.size-1&&e.deltaY>0&&(this.input.setStartPoint({y:n.y}),e.deltaY=0),n.deltaX=e.deltaX,n.deltaY=e.deltaY}},{key:"swapTiles",value:function(t,e){var n=t.rowIndex,i=t.colIndex,r=e.rowIndex,o=e.colIndex,s=this.tileList[n][i],u=this.tileList[r][o];this.tileList[n][i]=u,this.tileList[r][o]=s,s.rowIndex=r,s.colIndex=o,u.rowIndex=n,u.colIndex=i;var l=s.deltaX,c=s.deltaY;s.deltaX=(i-o)*(a.tileSize+a.tileSpacing)+l,s.deltaY=(n-r)*(a.tileSize+a.tileSpacing)+c,u.deltaX=(o-i)*(a.tileSize+a.tileSpacing),u.deltaY=(r-n)*(a.tileSize+a.tileSpacing),u.animateToResetPosition(),this.input.moveStartPoint({x:(o-i)*(a.tileSize+a.tileSpacing),y:(r-n)*(a.tileSize+a.tileSpacing)}),this.puzzleStatus===a.puzzleStatusCodes.READY&&(this.timer.start(),this.puzzleStatus=a.puzzleStatusCodes.STARTED),this.puzzleStatus===a.puzzleStatusCodes.STARTED&&(this.checkWinning(),this.stepper.update())}},{key:"move",value:function(t,e){var n=this,i=this.findSpaceTile(),r=i.rowIndex,o=i.colIndex;b(t)({left:function(){return o<=0?void n.input.resetPoint(e):void n.swapTiles({rowIndex:r,colIndex:o},{rowIndex:r,colIndex:o-1})},up:function(){return r<=0?void n.input.resetPoint(e):void n.swapTiles({rowIndex:r,colIndex:o},{rowIndex:r-1,colIndex:o})},right:function(){return o>=n.col-1?void n.input.resetPoint(e):void n.swapTiles({rowIndex:r,colIndex:o},{rowIndex:r,colIndex:o+1})},down:function(){return r>=n.row-1?void n.input.resetPoint(e):void n.swapTiles({rowIndex:r,colIndex:o},{rowIndex:r+1,colIndex:o})}})}},{key:"findSpaceTile",value:function(){var t=this.tileList;return t.reduce(function(t,e){return t||e.reduce(function(t,e){return e.type===a.tileTypes.SPACE?e:t},null)},null)}},{key:"render",value:function(){var t=this.grid,e=this.tileList,n=this.buttons,i=this.timer,o=this.stepper,s=e.reduce(function(t,e){var n=t.list,i=t.spaceTile,o=e.reduce(function(t,e){var n=t.list,i=t.spaceTile;return e.type!==a.tileTypes.SPACE?{list:[].concat(r(n),[e]),spaceTile:i}:{list:n,spaceTile:e}},{list:[],spaceTile:null}),s=o.list,u=o.spaceTile;return{list:[].concat(r(n),r(s)),spaceTile:i||u}},{list:[],spaceTile:null});t.render(),s.spaceTile.render(),s.list.map(function(t){t.render()}),n.render(),i.render(),o.render()}},{key:"update",value:function(){this.tileList.forEach(function(t){t.forEach(function(t){t.update()})}),this.timer.update()}},{key:"scramble",value:function(){var t=this,e=Object.keys(a.directions);Array.from({length:1e3},function(){return a.directions[e[Math.floor(Math.random()*e.length)]]}).map(function(e){return t.move(e,{x:0,y:0})});var n=this.findSpaceTile();n.animateToResetPosition()}},{key:"checkWinning",value:function(){var t=this.row,e=this.tileList.every(function(e,n){return e.every(function(e,i){return Number(e.text)===n*t+i+1})});e&&(this.puzzleStatus=a.puzzleStatusCodes.WINNING,this.timer.stop())}}]),t}();e.default=g},"./src/main/puzzle/buttons.js":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n("./src/main/configs.js"),s=function(){function t(e){var n=e.ctx;i(this,t),this.ctx=n,this.buttons=[{text:"Scramble",disabled:!0,type:o.buttonTypes.SCRAMBLE}]}return r(t,[{key:"enable",value:function(t){return this.buttons.map(function(e){return!!t.includes(e.type)&&(e.disabled=!1,!0)})}},{key:"hitButton",value:function(t){var e=t.x,n=t.y,i=(o.buttonAreaWidth+o.buttonSpacing)/this.buttons.length-o.buttonSpacing,r=this.buttons.find(function(t,r){var s=o.buttonAreaLeft+r*(i+o.buttonSpacing);return e>s&&e<s+i&&n>o.buttonAreaTop&&n<o.buttonAreaTop+o.buttonAreaHeight&&!t.disabled&&(t.disabled=!0,!0)});return r?r.type:null}},{key:"render",value:function(){var t=this.ctx,e=(o.buttonAreaWidth+o.buttonSpacing)/this.buttons.length-o.buttonSpacing;this.buttons.forEach(function(n,i){var r=o.buttonAreaLeft+i*(e+o.buttonSpacing);t.fillStyle=n.disabled?o.buttonDisabledBackgroundColor:o.buttonBackgroundColor,t.fillRect(r,o.buttonAreaTop,e,o.buttonAreaHeight),t.font="48px serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=o.buttonTextColor,t.fillText(n.text,r+e/2,o.buttonAreaTop+o.buttonAreaHeight/2)})}}]),t}();e.default=s},"./src/main/puzzle/grid.js":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n("./src/main/configs.js"),s=function(){function t(e){var n=e.ctx;i(this,t),this.ctx=n,this.x=o.gridX,this.y=o.gridY,this.width=this.height=o.gridSize,this.borderWidth=o.gridBorderWidth,this.strokeStyle=o.gridBorderColor,this.fillStyle=o.gridBackgroundColor}return r(t,[{key:"render",value:function(){var t=this.ctx,e=this.strokeStyle,n=this.fillStyle,i=this.borderWidth,r=this.x,o=this.y,s=this.width,a=this.height;i&&(t.strokeStyle=e,t.lineWidth=i,t.strokeRect(r,o,s,a)),t.fillStyle=n,t.fillRect(r,o,s,a)}}]),t}();e.default=s},"./src/main/puzzle/stepper.js":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n("./src/main/configs.js"),s=function(){function t(e){var n=e.ctx;i(this,t),this.ctx=n,this.steps=0}return r(t,[{key:"render",value:function(){var t=this.ctx;t.font=o.stepperFontSize+"px/"+o.stepperHeight+"px serif",t.textAlign="right",t.textBaseline="middle",t.fillStyle=o.stepperFontColor,t.fillText(String(this.steps),o.stepperLeft+o.stepperWidth,o.stepperTop+o.stepperHeight/2)}},{key:"reset",value:function(){this.steps=0}},{key:"update",value:function(){this.steps+=1}}]),t}();e.default=s},"./src/main/puzzle/tile.js":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n("./node_modules/bezier-easing/src/index.js"),a=i(s),u=n("./src/main/configs.js"),l=function(){function t(e){var n=e.ctx,i=e.width,o=e.height,s=e.text,l=e.type,c=e.rowIndex,f=e.colIndex,h=e.deltaX,d=void 0===h?0:h,p=e.deltaY,v=void 0===p?0:p;r(this,t),this.ctx=n,this.width=i,this.height=o,this.borderWidth=u.tileBorderWidth,this.strokeStyle=u.tileBorderColor,this.text=s,this.type=l,this.rowIndex=c,this.colIndex=f,this.deltaX=d,this.deltaY=v,this.fillStyle=u.tileColors[Math.min(c,f)],this.easing=(0,a.default)(.2,0,0,1),this.animationDuration=100}return o(t,[{key:"renderSpaceTile",value:function(){var t=this.ctx,e=this.fillStyle,n=this.borderWidth,i=this.width,r=this.height,o=this.rowIndex,s=this.colIndex,a=this.deltaX,l=this.deltaY,c=(0,u.getTilePosition)({colIndex:s,rowIndex:o}),f=c.x,h=c.y;t.fillStyle=e,t.fillRect(f+a,h+l,i,r),n&&(t.lineWidth=n,t.strokeStyle=strokeStyle,t.strokeRect(f,h,i,r))}},{key:"renderNormalTile",value:function(){var t=this.ctx,e=this.strokeStyle,n=this.fillStyle,i=this.borderWidth,r=this.width,o=this.height,s=this.text,a=this.rowIndex,l=this.colIndex,c=this.deltaX,f=this.deltaY,h=(0,u.getTilePosition)({colIndex:l,rowIndex:a}),d=h.x,p=h.y;t.fillStyle=n,t.fillRect(d+c,p+f,r,o),i&&(t.lineWidth=i,t.strokeStyle=e,t.strokeRect(d,p,r,o)),t.font="48px serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=u.tileTextColor,t.fillText(s,d+c+r/2,p+f+o/2)}},{key:"render",value:function(){var t=this.type;return t===u.tileTypes.SPACE?this.renderSpaceTile():this.renderNormalTile()}},{key:"update",value:function(){this.updateDeltaAnimation()}},{key:"animateToResetPosition",value:function(){this.animationStartTime=(0,u.getNow)(),this.animationStartDeltaX=this.deltaX,this.animationStartDeltaY=this.deltaY,this.animationStartWidth=this.width,this.animationStartHeight=this.height}},{key:"updateDeltaAnimation",value:function(){if(this.animationStartTime){var t=((0,u.getNow)()-this.animationStartTime)/this.animationDuration;this.deltaX=this.animationStartDeltaX*(1-this.easing(t)),this.deltaY=this.animationStartDeltaY*(1-this.easing(t)),t>=1&&(this.deltaX=0,this.deltaY=0,this.animationStartTime=null,this.animationStartDeltaX=null,this.animationStartDeltaY=null,this.animationStartWidth=null,this.animationStartHeight=null)}}}]),t}();e.default=l},"./src/main/puzzle/timer.js":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n("./src/main/configs.js"),s=function(){function t(e){var n=e.ctx;i(this,t),this.ctx=n,this.time=0,this.startingTime=null}return r(t,[{key:"formatTime",value:function(){var t=this.time%1e3,e=(this.time-t)/1e3%60,n=((this.time-t)/1e3-e)/60;return n+":"+(e<10?"0"+e:e)+"."+t}},{key:"render",value:function(){var t=this.ctx;t.font=o.timerFontSize+"px/"+o.timerHeight+"px serif",t.textAlign="left",t.textBaseline="middle",t.fillStyle=o.timerFontColor,t.fillText(this.formatTime(this.time),o.timerLeft,o.timerTop+o.timerHeight/2)}},{key:"start",value:function(){this.startingTime||(this.time=0,this.startingTime=(0,o.getNow)())}},{key:"stop",value:function(){this.startingTime=null}},{key:"reset",value:function(){this.time=0,this.startingTime=null}},{key:"update",value:function(){this.startingTime&&(this.time=(0,o.getNow)()-this.startingTime)}}]),t}();e.default=s},"./src/styles/index.pcss":function(t,e,n){var i=n("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js?{}!./src/styles/index.pcss");"string"==typeof i&&(i=[[t.i,i,""]]);n("./node_modules/style-loader/addStyles.js")(i,{});i.locals&&(t.exports=i.locals)},0:function(t,e,n){t.exports=n("./src/entries/index.js")}},[0]);
//# sourceMappingURL=index.js.map