/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food-app/food.ts":
/*!******************************!*\
  !*** ./src/food-app/food.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Food = void 0;
const score_1 = __webpack_require__(/*! ./score */ "./src/food-app/score.ts");
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle("food--active");
        const score = score_1.Score.getInstance();
        score.render();
    }
}
exports.Food = Food;


/***/ }),

/***/ "./src/food-app/foods.ts":
/*!*******************************!*\
  !*** ./src/food-app/foods.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Foods = void 0;
const food_1 = __webpack_require__(/*! ./food */ "./src/food-app/food.ts");
class Foods {
    constructor() {
        this.elements = document.querySelectorAll(".food");
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach((element) => {
            new food_1.Food(element);
        });
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach((element) => {
            if (element.classList.contains("food--active")) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach((element) => {
            const foodScore = element.querySelector(".food__score");
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
exports.Foods = Foods;


/***/ }),

/***/ "./src/food-app/score.ts":
/*!*******************************!*\
  !*** ./src/food-app/score.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Score = void 0;
const foods_1 = __webpack_require__(/*! ./foods */ "./src/food-app/foods.ts");
class Score {
    constructor() { }
    get totalScore() {
        const foods = foods_1.Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector(".score__number").textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
exports.Score = Score;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/food-app/main.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const foods_1 = __webpack_require__(/*! ./foods */ "./src/food-app/foods.ts");
foods_1.Foods.getInstance();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1osZ0JBQWdCLG1CQUFPLENBQUMsd0NBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7Ozs7O0FDZkM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiLGVBQWUsbUJBQU8sQ0FBQyxzQ0FBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiLGdCQUFnQixtQkFBTyxDQUFDLHdDQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7OztVQ3BCYjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLHdDQUFTO0FBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1yZXNzb24vLi9zcmMvZm9vZC1hcHAvZm9vZC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlc3Nvbi8uL3NyYy9mb29kLWFwcC9mb29kcy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlc3Nvbi8uL3NyYy9mb29kLWFwcC9zY29yZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlc3Nvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlc3Nvbi8uL3NyYy9mb29kLWFwcC9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb29kID0gdm9pZCAwO1xuY29uc3Qgc2NvcmVfMSA9IHJlcXVpcmUoXCIuL3Njb3JlXCIpO1xuY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjbGlja0V2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJmb29kLS1hY3RpdmVcIik7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gc2NvcmVfMS5TY29yZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBzY29yZS5yZW5kZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLkZvb2QgPSBGb29kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZvb2RzID0gdm9pZCAwO1xuY29uc3QgZm9vZF8xID0gcmVxdWlyZShcIi4vZm9vZFwiKTtcbmNsYXNzIEZvb2RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9vZFwiKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIG5ldyBmb29kXzEuRm9vZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBhY3RpdmVFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb29kLS1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlRWxlbWVudHNTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb2RTY29yZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb29kX19zY29yZVwiKTtcbiAgICAgICAgICAgIGlmIChmb29kU2NvcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlLnB1c2goTnVtYmVyKGZvb2RTY29yZS50ZXh0Q29udGVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFGb29kcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgRm9vZHMuaW5zdGFuY2UgPSBuZXcgRm9vZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRm9vZHMuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0cy5Gb29kcyA9IEZvb2RzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjb3JlID0gdm9pZCAwO1xuY29uc3QgZm9vZHNfMSA9IHJlcXVpcmUoXCIuL2Zvb2RzXCIpO1xuY2xhc3MgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7XG4gICAgICAgIGNvbnN0IGZvb2RzID0gZm9vZHNfMS5Gb29kcy5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gZm9vZHMuYWN0aXZlRWxlbWVudHNTY29yZS5yZWR1Y2UoKHRvdGFsLCBzY29yZSkgPT4gdG90YWwgKyBzY29yZSwgMCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZV9fbnVtYmVyXCIpLnRleHRDb250ZW50ID0gU3RyaW5nKHRoaXMudG90YWxTY29yZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFTY29yZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU2NvcmUuaW5zdGFuY2UgPSBuZXcgU2NvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmUuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0cy5TY29yZSA9IFNjb3JlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZm9vZHNfMSA9IHJlcXVpcmUoXCIuL2Zvb2RzXCIpO1xuZm9vZHNfMS5Gb29kcy5nZXRJbnN0YW5jZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9