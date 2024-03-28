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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   left_side: () => (/* binding */ left_side),\n/* harmony export */   right_side: () => (/* binding */ right_side),\n/* harmony export */   showProject: () => (/* binding */ showProject),\n/* harmony export */   showTodo: () => (/* binding */ showTodo)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _fuctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuctions */ \"./src/fuctions.js\");\n\r\n\r\n\r\nlet body = document.querySelector(\"body\");\r\nlet left = document.querySelector(\"#left\");\r\nlet right = document.querySelector(\"#Right\");\r\n\r\nlet left_side = () => {\r\n  let addButton = document.createElement(\"h4\");\r\n  addButton.innerHTML = \"Add Projects\";\r\n\r\n  let link = document.createElement(\"a\");\r\n  link.href = \"#\";\r\n\r\n  let linkImg = document.createElement(\"img\");\r\n  linkImg.src = __webpack_require__(/*! ./add-button.png */ \"./src/add-button.png\");\r\n  linkImg.classList.add(\"image\");\r\n\r\n  let createDiv = document.createElement(\"div\");\r\n  createDiv.classList.add(\"leftDiv\");\r\n  left.appendChild(createDiv);\r\n\r\n  link.appendChild(addButton);\r\n  link.appendChild(linkImg);\r\n  createDiv.appendChild(link);\r\n};\r\n\r\nfunction showProject() {\r\n  let projectDiv = document.createElement(\"div\");\r\n  projectDiv.classList.add(\"projects\");\r\n\r\n  _fuctions__WEBPACK_IMPORTED_MODULE_1__.projectsList.forEach((project) => {\r\n    let projectElement = document.createElement(\"p\");\r\n    projectElement.textContent = project.name;\r\n    projectDiv.appendChild(projectElement);\r\n  });\r\n\r\n  left.appendChild(projectDiv);\r\n}\r\n\r\nlet right_side = () => {\r\n  let heading = document.createElement(\"h3\");\r\n  heading.textContent = \"ToDo List\";\r\n\r\n  right.appendChild(heading);\r\n};\r\n\r\nfunction showTodo(projectName) {\r\n  // Find the project instance based on the project name\r\n  let project = _fuctions__WEBPACK_IMPORTED_MODULE_1__.projectsList.find(project => project.name === projectName);\r\n\r\n  // If the project is found, display its todo items\r\n  if (project) {\r\n    project.todo.forEach(todoItem => {\r\n      // Dividing into different part for better looks\r\n      let todoContainer = document.createElement(\"div\");\r\n      todoContainer.classList.add(\"todoDiv\");\r\n      right.appendChild(todoContainer);\r\n\r\n      let firstLine = document.createElement(\"div\");\r\n      firstLine.classList.add(\"firstLine\");\r\n      todoContainer.appendChild(firstLine);\r\n\r\n      let secondLine = document.createElement(\"div\");\r\n      secondLine.classList.add(\"secondLine\");\r\n      todoContainer.appendChild(secondLine);\r\n\r\n      // Main part \r\n      let todoTitle = document.createElement(\"p\");\r\n      todoTitle.textContent = todoItem.title;\r\n      firstLine.appendChild(todoTitle);\r\n\r\n      let todoDescription = document.createElement(\"p\");\r\n      todoDescription.textContent = todoItem.description;\r\n      secondLine.appendChild(todoDescription);\r\n\r\n      let todoDueDate = document.createElement(\"p\");\r\n      todoDueDate.textContent = todoItem.dueDate;\r\n      firstLine.appendChild(todoDueDate);\r\n\r\n      let todoPriority = document.createElement(\"p\");\r\n      todoPriority.textContent = \"Priority: \" + todoItem.priority;\r\n      secondLine.appendChild(todoPriority);\r\n    });\r\n  } else {\r\n    todoContainer.textContent = \"Add one\";\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/fuctions.js":
/*!*************************!*\
  !*** ./src/fuctions.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   projectsList: () => (/* binding */ projectsList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n// Array to store the projects name \r\nlet projectsList = [];\r\n\r\n// Function to add a new project dynamically\r\nfunction addProject(projectName) {\r\n     // Create a new instance of the Project class with the provided name\r\n     let newProject = new _task__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);\r\n     \r\n     // Push the new project to the array of projects\r\n     projectsList.push(newProject);\r\n   };\r\n\r\nfunction addTodo(projectName, todoItem) {\r\n     // Find the project instance based on the project name\r\n     let project = projectsList.find(project => project.name === projectName);\r\n     \r\n     // If the project is found, push the todo item to its todo array\r\n     if (project) {\r\n       project.todo.push(todoItem);\r\n     } else {\r\n       console.log(`Project '${projectName}' not found.`);\r\n     }\r\n   }\r\n   \r\n\r\n   \r\n   \n\n//# sourceURL=webpack://todo-list/./src/fuctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _fuctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuctions */ \"./src/fuctions.js\");\n\r\n\r\n\r\n\r\n\r\nlet body = document.querySelector(\"body\");\r\n\r\n// Create a new project\r\n(0,_fuctions__WEBPACK_IMPORTED_MODULE_2__.addProject)(\"myProject\");\r\n(0,_fuctions__WEBPACK_IMPORTED_MODULE_2__.addProject)(\"Hello\");\r\n(0,_fuctions__WEBPACK_IMPORTED_MODULE_2__.addProject)(\"Hii\");\r\n\r\nconsole.log(_fuctions__WEBPACK_IMPORTED_MODULE_2__.projectsList);\r\n\r\n// Create a new todo item\r\nlet todo1 = new _task__WEBPACK_IMPORTED_MODULE_1__.todo(\r\n  \"Complete project\",\r\n  \"Finish coding tasks\",\r\n  \"2024-03-20\",\r\n  \"High\"\r\n);\r\n\r\nlet todo2 = new _task__WEBPACK_IMPORTED_MODULE_1__.todo(\r\n  \"10min Exercise\",\r\n  \"Morning Exercise Be on Track\",\r\n  \"2024-03-20\",\r\n  \"High\"\r\n);\r\n\r\n// Push the todo item to the project's todo array\r\n(0,_fuctions__WEBPACK_IMPORTED_MODULE_2__.addTodo)(\"myProject\", todo1);\r\n(0,_fuctions__WEBPACK_IMPORTED_MODULE_2__.addTodo)(\"myProject\", todo2);\r\n\r\n// Display project on dom\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.left_side)();\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.right_side)();\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.showProject)();\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.showTodo)(\"myProject\");\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\r\n  constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todo = [];\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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