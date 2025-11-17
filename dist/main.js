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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second */ \"./src/modules/second.js\");\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_second__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n\n//# sourceURL=webpack://db/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//import postData from \"./postdata\"\n\nconst cart = () => {\n    const cartBtn = document.getElementById('cart')\n    const cartModal = document.querySelector('.cart')\n    const cartCloseBtn = cartModal.querySelector('.cart-close')\n    //const cartConfirmBtn = cartModal.querySelector('.cart-confirm')\n\n    const openCart = () => {\n        cartModal.style.display = 'flex'\n    }\n\n    const closeCart = () => {\n        cartModal.style.display = 'none'\n    }\n\n    /*\n    const cartConfirm = () => {\n        //console.log('postData');\n        postData();\n    }\n    */\n\n    // cartBtn.onclick = openCart\n    // cartCloseBtn.onclick = closeCart\n\n    cartCloseBtn.addEventListener('click', () => {\n        closeCart()\n    })\n\n    cartBtn.addEventListener('click', () => {\n        openCart()\n    })\n\n    /*\n    cartConfirmBtn.addEventListener('click', ()=> {\n        cartConfirm();\n    })\n    */\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://db/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/getdata.js":
/*!********************************!*\
  !*** ./src/modules/getdata.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n    //console.log(str);\n\n    //    const sendObj = {\n    //         name: text.value,\n    //         phone: tel.value,\n    //         email: email.value\n    //     }\n\n    return fetch('https://test-f2b51-default-rtdb.firebaseio.com/goods.json') \n        .then((responce) => {\n            return responce.json()\n        })\n        // .then((data) => {\n        //     console.log(data);\n            \n        // })\n     \n        //https://jsonplaceholder.typicode.com/todos/1'\n        //https://dummyjson.com/test\n    //https://test-f2b51-default-rtdb.firebaseio.com/goods.json\n    //http://localhost:3000/goods\n \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://db/./src/modules/getdata.js?\n}");

/***/ }),

/***/ "./src/modules/postdata.js":
/*!*********************************!*\
  !*** ./src/modules/postdata.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = () => {\n    //console.log(str);\n\n    const sendObj = {\n        title: \"Игра Kill Em ALl Final\",\n        price: 1794,\n        sale: true,\n        img: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\n        category: \"Игры и софт\"\n    }\n\n    //https://jsonplaceholder.typicode.com/todos/1'\n    //https://dummyjson.com/test\n\n   return fetch('http://localhost:3000/goods', {\n        method: 'POST',\n        body: JSON.stringify(sendObj),\n        headers: {\n            'Content-type': 'application/json; charset=UTF-8',\n        },\n    })\n    .then (res => res.json())\n   \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://db/./src/modules/postdata.js?\n}");

/***/ }),

/***/ "./src/modules/second.js":
/*!*******************************!*\
  !*** ./src/modules/second.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata.js */ \"./src/modules/getdata.js\");\n/* harmony import */ var _postdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postdata */ \"./src/modules/postdata.js\");\n\n\n\n\nconst second = () => {\n    const cartBtn = document.getElementById('cart')\n    const cartModal = document.querySelector('.cart')\n    const cartConfirmBtn = cartModal.querySelector('.cart-confirm')\n\n\n\n    cartConfirmBtn.addEventListener('click', () => {\n\n        ;(0,_getdata_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            console.log(data);\n        })\n\n        /* postData().then((data) => {\n             console.log(data);\n \n             getData().then((data) => {\n                 console.log(data);\n             })\n         })*/\n    })\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\n\n//# sourceURL=webpack://db/./src/modules/second.js?\n}");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;