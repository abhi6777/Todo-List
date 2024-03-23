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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   left_side: () => (/* binding */ left_side),\n/* harmony export */   right_side: () => (/* binding */ right_side),\n/* harmony export */   showProject: () => (/* binding */ showProject)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\nlet body = document.querySelector(\"body\");\r\nlet left = document.querySelector(\"#left\");\r\nlet right = document.querySelector(\"#Right\");\r\n\r\nlet left_side = () => {\r\n  let addButton = document.createElement(\"h4\");\r\n  addButton.innerHTML = \"Add Projects\";\r\n\r\n  let link = document.createElement(\"a\");\r\n  link.href = \"#\";\r\n\r\n  let linkImg = document.createElement(\"img\");\r\n  linkImg.src = __webpack_require__(/*! ./add-button.png */ \"./src/add-button.png\");\r\n  linkImg.classList.add(\"image\");\r\n\r\n  let createDiv = document.createElement(\"div\");\r\n  createDiv.classList.add(\"leftDiv\");\r\n  left.appendChild(createDiv);\r\n\r\n  link.appendChild(addButton);\r\n  link.appendChild(linkImg);\r\n  createDiv.appendChild(link);\r\n};\r\n\r\nlet showProject = () => {\r\n  let projectDiv = document.createElement(\"div\");\r\n  projectDiv.classList.add(\"projects\");\r\n\r\n  let myProject = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"My Project\");\r\n  projectDiv.innerHTML = _task_js__WEBPACK_IMPORTED_MODULE_0__.Project.todo[0].title;\r\n\r\n  left.appendChild(projectDiv);\r\n};\r\n\r\nlet right_side = () => {\r\n  let heading = document.createElement(\"h3\");\r\n  heading.textContent = \"ToDo List\";\r\n\r\n  right.appendChild(heading);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\nlet body = document.querySelector(\"body\");\r\n// Creating a new project and adding todo items to it\r\nlet myProject = new _task__WEBPACK_IMPORTED_MODULE_1__.Project(\"My Project\");\r\n\r\n// Creating new todo items\r\nlet todo1 = new _task__WEBPACK_IMPORTED_MODULE_1__.todo(\r\n  \"Complete project\",\r\n  \"Finish coding tasks\",\r\n  \"2024-03-20\",\r\n  \"High\"\r\n);\r\nlet todo2 = new _task__WEBPACK_IMPORTED_MODULE_1__.todo(\r\n  \"Study for exam\",\r\n  \"Review study materials\",\r\n  \"2024-03-25\",\r\n  \"Medium\"\r\n);\r\nmyProject.todo.push(todo1);\r\nmyProject.todo.push(todo2);\r\n\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.left_side)();\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.right_side)();\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.showProject)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\r\n  constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nfunction Project(name) {\r\n  this.name = name;\r\n  this.todo = [];\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/add-button.png":
/*!****************************!*\
  !*** ./src/add-button.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"934534531148889023e5.png\";\n\n//# sourceURL=webpack://todo-list/./src/add-button.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;