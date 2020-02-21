webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/portfolio/portfolio.tsx":
/*!************************************************!*\
  !*** ./src/components/portfolio/portfolio.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section */ "./src/components/portfolio/section.tsx");

var _jsxFileName = "C:\\Users\\sarioglu\\Desktop\\Projeler\\resume\\src\\components\\portfolio\\portfolio.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Card = function Card(_ref) {
  var name = _ref.name,
      background = _ref.background,
      logo = _ref.logo,
      description = _ref.description,
      keywords = _ref.keywords;
  return __jsx("div", {
    className: "flex items-center sm:block rounded shadow overflow-hidden transition duration-200 ease-in-out hover:shadow-xl hover:scale-105 mb-8 sm:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "w-8 h-8 rounded-full mx-4 lg:w-full lg:h-64 lg:rounded-none lg:mx-0 flex justify-center items-center",
    style: {
      background: background
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: logo,
    alt: "project-logo",
    className: "hidden lg:block mx-auto w-3/6 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("div", {
    className: "px-6 pt-4 pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "font-bold text-gray-900 text-base mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, name), __jsx("div", {
    className: "hidden lg:block text-gray-700 text-base mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, description), keywords && keywords.length ? __jsx("div", {
    className: "flex flex-wrap justify-start -mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, keywords.map(function (keyword) {
    return __jsx("div", {
      key: keyword,
      className: "inline-block lg:bg-gray-200 rounded-full lg:px-3 lg:py-1 text-xs font-medium text-gray-800 m-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, keyword);
  })) : null));
};

var Portfolio = function Portfolio(_ref2) {
  var data = _ref2.data;
  return __jsx(_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "My Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "sm:grid sm:grid-cols-2 xl:grid-cols-3 col-gap-4 row-gap-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, data.map(function (project) {
    return __jsx(Card, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: project.name
    }, project, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=index.js.4a23d5eb71c7a697a510.hot-update.js.map