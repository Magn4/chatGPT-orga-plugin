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

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  console.log(\"Content script loaded\");\n\n  // Function to add pin button to each chat\n  function addPinButtons() {\n    var chats = document.querySelectorAll('.chat-item'); // Update this selector based on ChatGPT's chat item class\n\n    if (chats.length > 0) {\n      console.log(\"Chats found:\", chats.length);\n      chats.forEach(function (chat) {\n        var pinButton = document.createElement('button');\n        pinButton.textContent = 'Pin';\n        pinButton.style.marginLeft = '10px';\n        pinButton.onclick = function () {\n          var chatTitle = chat.textContent || 'Untitled Chat'; // Assuming chat title can be derived from the chat item text\n          chrome.storage.sync.get(['pinnedChats'], function (result) {\n            var pinnedChats = result.pinnedChats || [];\n            pinnedChats.push(chatTitle);\n            chrome.storage.sync.set({\n              pinnedChats: pinnedChats\n            }, function () {\n              console.log(\"Pinned chat: \".concat(chatTitle));\n            });\n          });\n        };\n        chat.appendChild(pinButton);\n      });\n    } else {\n      console.log(\"No chats found.\");\n    }\n  }\n\n  // Adding pin buttons when the chats container is found\n  var chatsContainer = document.querySelector('.chats-container'); // Update this selector based on ChatGPT's chat container class\n  if (chatsContainer) {\n    console.log(\"Chats container found\");\n    addPinButtons();\n  } else {\n    console.log(\"Chats container not found\");\n  }\n});\n\n//# sourceURL=webpack://chat-organizer/./src/content.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content.js"]();
/******/ 	
/******/ })()
;