webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./src/components/resume/education.tsx":
/*!*********************************************!*\
  !*** ./src/components/resume/education.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectionTitle */ "./src/components/resume/sectionTitle.tsx");
var _jsxFileName = "/Users/sarioglu/Desktop/DevEnv/resume/src/components/resume/education.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Education = function Education(_ref) {
  var data = _ref.data;
  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_sectionTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Education"), data.map(function (_ref2) {
    var title = _ref2.title,
        school = _ref2.school,
        date = _ref2.date,
        description = _ref2.description;
    return __jsx("div", {
      key: title,
      className: "mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "font-medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), __jsx("div", {
      className: "flex justify-between font-medium mb-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, school), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, date)), __jsx("p", {
      className: "text-justify",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, description));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ })

})
//# sourceMappingURL=resume.js.9c3bc2c0f0ffaa47b50b.hot-update.js.map