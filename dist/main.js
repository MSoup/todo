/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleAddCategory\": () => (/* binding */ handleAddCategory),\n/* harmony export */   \"handleHelp\": () => (/* binding */ handleHelp),\n/* harmony export */   \"handleComplete\": () => (/* binding */ handleComplete),\n/* harmony export */   \"handleAddTodo\": () => (/* binding */ handleAddTodo)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nfunction handleAddTodo() {\r\n  const todoTitle = document.querySelector(\".input-todo\");\r\n  const todoObject = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeTodo)(new _index_js__WEBPACK_IMPORTED_MODULE_0__.Todo(todoTitle.value));\r\n\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.appendToDOM)(todoObject);\r\n}\r\nfunction handleAddCategory() {\r\n  const category = document.querySelector(\".input-category\");\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeCategory)(category.textContent);\r\n}\r\n\r\nfunction handleComplete() {\r\n  return;\r\n}\r\nfunction handleHelp() {\r\n  return;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/buttons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeTodo\": () => (/* binding */ makeTodo),\n/* harmony export */   \"makeCategory\": () => (/* binding */ makeCategory),\n/* harmony export */   \"appendToDOM\": () => (/* binding */ appendToDOM),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n\r\n\r\n// add event listeners\r\nconst addTodo = document.querySelector(\".add-todo\");\r\naddTodo.addEventListener(\"click\", _buttons_js__WEBPACK_IMPORTED_MODULE_0__.handleAddTodo);\r\n\r\nclass Todo {\r\n  constructor(title, dueDate = \"unknown\", priority = 0, description = \"\") {\r\n    // main display\r\n    this.title = title;\r\n    // max char limitation?\r\n    this.description = description;\r\n    // dateTime object?\r\n    this.dueDate = dueDate;\r\n    // low: 0, medium: 1, high: 2\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nfunction Test() {\r\n  let tests = [\r\n    \"clean my room\",\r\n    \"clean your room\",\r\n    \"clean my kitchen\",\r\n    \"clean my bathroom\",\r\n    \"clean my sink\",\r\n  ];\r\n\r\n  const rightWindow = document.querySelector(\".right-window\");\r\n\r\n  tests.forEach((test) => {\r\n    let newTodo = new Todo(test);\r\n    // pass todo object into factory function to make them\r\n    rightWindow.appendChild(makeTodo(newTodo));\r\n  });\r\n\r\n  const categoryWindow = document.querySelector(\".categories-container\");\r\n  categoryWindow.appendChild(makeCategory(\"Test 6\"));\r\n}\r\n\r\n// accepts todo object and returns DOM todo element\r\nfunction makeTodo(todo) {\r\n  const container = document.createElement(\"div\");\r\n  const title = document.createElement(\"h3\");\r\n  const description = document.createElement(\"p\");\r\n  const due = document.createElement(\"div\");\r\n  const remove = document.createElement(\"button\");\r\n  const priority = document.createElement(\"div\");\r\n  const complete = document.createElement(\"button\");\r\n\r\n  console.log(todo);\r\n  title.className = \"todo-title\";\r\n  container.className = \"todo-object\";\r\n  description.className = \"todo-description\";\r\n  due.className = \"due\";\r\n  remove.className = \"remove\";\r\n  priority.className = \"priority\";\r\n  complete.className = \"complete\";\r\n\r\n  title.textContent = todo.title;\r\n  description.textContent = todo.description;\r\n  due.textContent = todo.due;\r\n  remove.textContent = \"X\";\r\n  complete.textContent = \"Complete\";\r\n\r\n  container.appendChild(complete);\r\n  container.appendChild(title);\r\n  container.appendChild(description);\r\n  container.appendChild(due);\r\n  container.appendChild(remove);\r\n\r\n  return container;\r\n}\r\n\r\nfunction makeCategory(title) {\r\n  const container = document.createElement(\"button\");\r\n  container.className = \"tag-\" + title;\r\n  container.textContent = title;\r\n  return container;\r\n}\r\nTest();\r\n\r\nfunction appendToDOM(item) {\r\n  // item either goes into categories or into the right window\r\n  const rightWindow = document.querySelector(\".right-window\");\r\n  const categoryWindow = document.querySelector(\".categories-container\");\r\n\r\n  // if its a todo object move it into the right window\r\n  if (item.className === \"todo-object\") {\r\n    rightWindow.appendChild(item);\r\n  } else if (item.className === \"todo-object\") {\r\n    categoryWindow.appendChild(item);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;