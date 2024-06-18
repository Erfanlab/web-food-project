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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("(function (w) {\n  w.addEventListener(\"load\", function () {\n    var btn_left = document.getElementById(\"btn-left\"),\n        btn_right = document.getElementById(\"btn-right\"),\n        content = document.getElementById(\"con\");\n    var content_scroll_width = content.scrollWidth;\n    var content_scoll_left = content.scrollLeft;\n    btn_right.addEventListener(\"click\", function () {\n      content_scoll_left -= 300;\n\n      if (content_scoll_left >= content_scroll_width) {\n        content_scoll_left = content_scroll_width;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n    btn_left.addEventListener(\"click\", function () {\n      content_scoll_left += 1;\n\n      if (content_scoll_left <= 0) {\n        content_scoll_left = 0;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n  });\n})(window);\n\n(function (w) {\n  w.addEventListener(\"load\", function () {\n    var btn_left1 = document.getElementById(\"btn-left1\"),\n        btn_right1 = document.getElementById(\"btn-right1\"),\n        content = document.getElementById(\"con1\");\n    var content_scroll_width = content.scrollWidth;\n    var content_scoll_left = content.scrollLeft;\n    btn_right1.addEventListener(\"click\", function () {\n      content_scoll_left -= 300;\n\n      if (content_scoll_left >= content_scroll_width) {\n        content_scoll_left = content_scroll_width;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n    btn_left1.addEventListener(\"click\", function () {\n      content_scoll_left += 1;\n\n      if (content_scoll_left <= 0) {\n        content_scoll_left = 0;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n  });\n})(window);\n\n(function (w) {\n  w.addEventListener(\"load\", function () {\n    var btn_left2 = document.getElementById(\"btn-left2\"),\n        btn_right2 = document.getElementById(\"btn-right2\"),\n        content = document.getElementById(\"con2\");\n    var content_scroll_width = content.scrollWidth;\n    var content_scoll_left = content.scrollLeft;\n    btn_right2.addEventListener(\"click\", function () {\n      content_scoll_left -= 300;\n\n      if (content_scoll_left >= content_scroll_width) {\n        content_scoll_left = content_scroll_width;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n    btn_left2.addEventListener(\"click\", function () {\n      content_scoll_left += 1;\n\n      if (content_scoll_left <= 0) {\n        content_scoll_left = 0;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n  });\n})(window);\n\n(function (w) {\n  w.addEventListener(\"load\", function () {\n    var btn_left3 = document.getElementById(\"btn-left3\"),\n        btn_right3 = document.getElementById(\"btn-right3\"),\n        content = document.getElementById(\"con3\");\n    var content_scroll_width = content.scrollWidth;\n    var content_scoll_left = content.scrollLeft;\n    btn_right3.addEventListener(\"click\", function () {\n      content_scoll_left -= 300;\n\n      if (content_scoll_left >= content_scroll_width) {\n        content_scoll_left = content_scroll_width;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n    btn_left3.addEventListener(\"click\", function () {\n      content_scoll_left += 1;\n\n      if (content_scoll_left <= 0) {\n        content_scoll_left = 0;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n  });\n})(window);\n\n(function (w) {\n  w.addEventListener(\"load\", function () {\n    var btn_left4 = document.getElementById(\"btn-left4\"),\n        btn_right4 = document.getElementById(\"btn-right4\"),\n        content = document.getElementById(\"con4\");\n    var content_scroll_width = content.scrollWidth;\n    var content_scoll_left = content.scrollLeft;\n    btn_right4.addEventListener(\"click\", function () {\n      content_scoll_left -= 300;\n\n      if (content_scoll_left >= content_scroll_width) {\n        content_scoll_left = content_scroll_width;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n    btn_left4.addEventListener(\"click\", function () {\n      content_scoll_left += 1;\n\n      if (content_scoll_left <= 0) {\n        content_scoll_left = 0;\n      }\n\n      content.scrollLeft = content_scoll_left;\n    });\n  });\n})(window);\n\nvar today = new Date().toLocaleDateString();\nvar jalalitoday = new Date().toLocaleDateString('fa-IR');\ndocument.getElementById(\"today\").innerHTML = jalalitoday;\ndocument.getElementById(\"today2\").innerHTML = jalalitoday;\n\nfunction modalshow() {\n  var element = document.getElementById(\"modal-user\");\n  element.classList.toggle(\"display:flex\");\n}\n\n//# sourceURL=webpack://package/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;