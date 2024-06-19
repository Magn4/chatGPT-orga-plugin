/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\ndocument.addEventListener('DOMContentLoaded', function () {\n  var options = ['hideHomeFeed', 'hideVideoSidebar', 'hideRecommended', 'hideLiveChat', 'hidePlaylist', 'hideFundraiser', 'hideEndScreenFeed', 'hideEndScreenCards', 'hideShorts', 'hideComments', 'hideMixes', 'hideMerchTicketsOffers', 'hideVideoInfo'];\n  chrome.storage.sync.get(options, function (result) {\n    options.forEach(function (option) {\n      var checkbox = document.querySelector(\"input[name=\\\"\".concat(option, \"\\\"]\"));\n      if (checkbox) {\n        checkbox.checked = result[option] || false;\n        checkbox.addEventListener('change', function (event) {\n          chrome.storage.sync.set(_defineProperty({}, option, event.target.checked));\n        });\n      }\n    });\n  });\n\n  // Add event listeners for footer buttons (if needed)\n  document.querySelector('button:contains(\"Donate\")').addEventListener('click', function () {\n    // Handle donate action\n  });\n  document.querySelector('button:contains(\"Request Feature\")').addEventListener('click', function () {\n    // Handle request feature action\n  });\n  document.querySelector('button:contains(\"Support\")').addEventListener('click', function () {\n    // Handle support action\n  });\n});\n\n//# sourceURL=webpack://chat-organizer/./src/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/popup.js"]();
/******/ 	
/******/ })()
;