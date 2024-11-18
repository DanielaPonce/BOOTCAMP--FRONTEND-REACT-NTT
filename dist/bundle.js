/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root { 
    --white: #fff;
    --background: #f4f4f4;
    --primary-color: #802c6e;
    --secondary-color: #f7aa35;

    --text-color: #3a3134;
    --hover-link: #5d134d;
    --border-color: #cccccc;
    --hover-button-color: #e59315;
    --alert-color: rgb(239, 28, 28);
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background);
    position: relative;
}

/* Header */
.header-container {
    background-color: var(--primary-color);
    position: relative;
    height: 12vh;
}

.header-container header {
    position: absolute;
    top: 5vh;
    width: 90vw;
    left: 50%;

    transform: translate(-50%, 7%);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 22%);
    background-color: var(--white);
    border-radius: 25px;
    color: var(--text-color);
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

}

header .search-container { 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo img {
    width: 40px;
}

.cart-icon {
    position: relative;
    width: 30px;
    height: 30px;
}

.cart-icon .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--alert-color);
    color: var(--secondary-color);
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
}

/* Barra de búsqueda */
.search-bar {
    display: flex;
    gap: 1rem;
    margin: 2rem;
    justify-content: center;
}

.search-bar input,
.search-bar select {
    padding: 0.7rem;
    font-size: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 5px;
}

.search-bar input:focus {
    outline: none;
    border-color: var(--text-color);
}

/* Sección de productos */
.body-content{
    margin: 7rem 7rem 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
}
.product-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    gap: 3rem 1.5rem;
}

.product-card {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    transition: transform 0.3s;

    position: relative;
}

.product-card:hover {
    transform: translateY(-16px);
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: contain;
}

.product-details {
    padding: 1rem;
    text-align: center;
}


.product-details h3 {
    margin: 0.5rem 0;
}

.product-details p {
    font-size: 0.9rem;
    color: var(--text-color);
}

.product-details .category {
    font-weight: bold;
    color: var(--secondary-color);
    background-color: var(--white);
    padding: 4px 7px;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 0.5rem;

    position: absolute;
    z-index: 1;
    top: 2%;
    left: 2%;
}

.product-details .price {
    font-size: 1.2rem;
    color: var(--text-color);
    margin: 0.5rem 0;
}

.product-details button {
    background-color: var(--secondary-color);
    color: var(--white);
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.product-details button:hover {
    background-color: var(--hover-button-color);
}

.ver-mas {
    color: var(--primary-color);
    font-size: 22px;
    font-weight: bolder;
    
    transition: background-color 0.3s ease;
  }
  
  .ver-mas:hover {
    color: var(--hover-link);
  }
  

/* Footer */
footer {
    background-color: var(--white);
    color: var(--text-color);
    padding: 1.5rem;
    text-align: center;
}

footer .social-icons {
    margin: 1rem 0;

}

.social-icons img {
    cursor: pointer;
}

.social-icons img:hover {
    filter: invert(50%) sepia(90%) saturate(1000%) hue-rotate(350deg) brightness(95%) contrast(90%);
}


footer .social-icons a:hover {
    color: var(--secondary-color);
}

#loader {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw; 
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.spinner {
    border: 4px solid var(--border-color); 
    border-top: 4px solid var(--hover-button-color); 
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  /* Animación del spinner */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  

@media only screen and (min-width: 992px) and (max-width: 1439px) {
    .product-container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media only screen and (min-width: 740px) and (max-width: 991px){

    .logo h1 {
        font-size: 24px;
    }
    .product-container {
        grid-template-columns: 1fr 1fr;
    }
}

@media only screen and (max-width: 739px) {
    .header-container header {
        flex-direction: column;
        top: 1vh;
        padding: 16px;
        gap: 16px;
        width: 85vw;
    }

    .logo h1 { 
        margin: 0;
        font-size: 24px;
    }


    .header-container header .search-bar, .search-container {
        width: 100%;
        margin: 0;
    }

    .cart-icon {
        position: absolute;
        top: 1.5rem;
        right: 2rem;
    }


    .search-bar { 
        flex-direction: column;
    }
    
    .body-content{
        margin: 10rem 7rem 4rem;
        gap: 2rem;
    }

    .body-content a { 
        font-size: 18px;
        font-weight: 400;
        min-width: 10rem;
    }

    .product-container {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root { \n    --white: #fff;\n    --background: #f4f4f4;\n    --primary-color: #802c6e;\n    --secondary-color: #f7aa35;\n\n    --text-color: #3a3134;\n    --hover-link: #5d134d;\n    --border-color: #cccccc;\n    --hover-button-color: #e59315;\n    --alert-color: rgb(239, 28, 28);\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: var(--background);\n    position: relative;\n}\n\n/* Header */\n.header-container {\n    background-color: var(--primary-color);\n    position: relative;\n    height: 12vh;\n}\n\n.header-container header {\n    position: absolute;\n    top: 5vh;\n    width: 90vw;\n    left: 50%;\n\n    transform: translate(-50%, 7%);\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 22%);\n    background-color: var(--white);\n    border-radius: 25px;\n    color: var(--text-color);\n    padding: 0 24px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\nheader .search-container { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.logo img {\n    width: 40px;\n}\n\n.cart-icon {\n    position: relative;\n    width: 30px;\n    height: 30px;\n}\n\n.cart-icon .cart-count {\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    background-color: var(--alert-color);\n    color: var(--secondary-color);\n    border-radius: 50%;\n    padding: 0.2rem 0.5rem;\n    font-size: 0.8rem;\n}\n\n/* Barra de búsqueda */\n.search-bar {\n    display: flex;\n    gap: 1rem;\n    margin: 2rem;\n    justify-content: center;\n}\n\n.search-bar input,\n.search-bar select {\n    padding: 0.7rem;\n    font-size: 1rem;\n    border: 1px solid var(--border-color);\n    border-radius: 5px;\n}\n\n.search-bar input:focus {\n    outline: none;\n    border-color: var(--text-color);\n}\n\n/* Sección de productos */\n.body-content{\n    margin: 7rem 7rem 4rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 4rem;\n}\n.product-container {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    justify-content: center;\n    gap: 3rem 1.5rem;\n}\n\n.product-card {\n    background-color: var(--white);\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n    width: 300px;\n    transition: transform 0.3s;\n\n    position: relative;\n}\n\n.product-card:hover {\n    transform: translateY(-16px);\n}\n\n.product-card img {\n    width: 100%;\n    height: 200px;\n    object-fit: contain;\n}\n\n.product-details {\n    padding: 1rem;\n    text-align: center;\n}\n\n\n.product-details h3 {\n    margin: 0.5rem 0;\n}\n\n.product-details p {\n    font-size: 0.9rem;\n    color: var(--text-color);\n}\n\n.product-details .category {\n    font-weight: bold;\n    color: var(--secondary-color);\n    background-color: var(--white);\n    padding: 4px 7px;\n    border-radius: 4px;\n    display: inline-block;\n    margin-bottom: 0.5rem;\n\n    position: absolute;\n    z-index: 1;\n    top: 2%;\n    left: 2%;\n}\n\n.product-details .price {\n    font-size: 1.2rem;\n    color: var(--text-color);\n    margin: 0.5rem 0;\n}\n\n.product-details button {\n    background-color: var(--secondary-color);\n    color: var(--white);\n    padding: 0.7rem 1.5rem;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n.product-details button:hover {\n    background-color: var(--hover-button-color);\n}\n\n.ver-mas {\n    color: var(--primary-color);\n    font-size: 22px;\n    font-weight: bolder;\n    \n    transition: background-color 0.3s ease;\n  }\n  \n  .ver-mas:hover {\n    color: var(--hover-link);\n  }\n  \n\n/* Footer */\nfooter {\n    background-color: var(--white);\n    color: var(--text-color);\n    padding: 1.5rem;\n    text-align: center;\n}\n\nfooter .social-icons {\n    margin: 1rem 0;\n\n}\n\n.social-icons img {\n    cursor: pointer;\n}\n\n.social-icons img:hover {\n    filter: invert(50%) sepia(90%) saturate(1000%) hue-rotate(350deg) brightness(95%) contrast(90%);\n}\n\n\nfooter .social-icons a:hover {\n    color: var(--secondary-color);\n}\n\n#loader {\n    position: fixed; \n    top: 0;\n    left: 0;\n    width: 100vw; \n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 9999;\n    \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.spinner {\n    border: 4px solid var(--border-color); \n    border-top: 4px solid var(--hover-button-color); \n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    animation: spin 1s linear infinite;\n  }\n  \n  /* Animación del spinner */\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n\n@media only screen and (min-width: 992px) and (max-width: 1439px) {\n    .product-container {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n}\n\n@media only screen and (min-width: 740px) and (max-width: 991px){\n\n    .logo h1 {\n        font-size: 24px;\n    }\n    .product-container {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n@media only screen and (max-width: 739px) {\n    .header-container header {\n        flex-direction: column;\n        top: 1vh;\n        padding: 16px;\n        gap: 16px;\n        width: 85vw;\n    }\n\n    .logo h1 { \n        margin: 0;\n        font-size: 24px;\n    }\n\n\n    .header-container header .search-bar, .search-container {\n        width: 100%;\n        margin: 0;\n    }\n\n    .cart-icon {\n        position: absolute;\n        top: 1.5rem;\n        right: 2rem;\n    }\n\n\n    .search-bar { \n        flex-direction: column;\n    }\n    \n    .body-content{\n        margin: 10rem 7rem 4rem;\n        gap: 2rem;\n    }\n\n    .body-content a { \n        font-size: 18px;\n        font-weight: 400;\n        min-width: 10rem;\n    }\n\n    .product-container {\n        grid-template-columns: 1fr;\n        gap: 16px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


let products = [];
let currentProducts = [];
let currentPage = 0;
let cartCounter = 0;

const productsPerPage = 8;

const searchBarElement = document.getElementById('searchBar');
const categorySelectElement = document.getElementById('categoriesSelect');

async function loadAllProductsCategories() {
	const response = await fetch('https://dummyjson.com/products/categories');
	const fetchedCategories = await response.json();
	return fetchedCategories;
}

async function loadAllProducts() {
	const response = await fetch(`https://dummyjson.com/products`);
	const { products: fetchedProducts } = await response.json();
	return fetchedProducts;
}

async function loadProductsByCategory(category) {
	const response = await fetch(
		`https://dummyjson.com/products/category/${category}`
	);
	const { products: fetchedProducts } = await response.json();
	return fetchedProducts;
}

/********* Inicio de Páginacion ********/
function getProductsByPage(page) {
	const startIndex = page * productsPerPage;
	const endIndex = startIndex + productsPerPage;
	currentProducts = products.slice(startIndex, endIndex);

	if (currentProducts.length > 0) {
		populateProductsContainerElement(currentProducts);
	}
}

function goToNextPage() {
	currentPage++;
	getProductsByPage(currentPage);
	setPagination();
}

function goToPreviousPage() {
	if (currentPage <= 0) return;
	currentPage--;
	getProductsByPage(currentPage);
	setPagination();
}

document.getElementById('next-btn').addEventListener('click', goToNextPage);
document.getElementById('prev-btn').addEventListener('click', goToPreviousPage);

/********* Fin de Páginacion ********/

function createCategoriesOptionElement(category) {
	const categoryOption = document.createElement('option');
	categoryOption.value = category.slug;
	categoryOption.text = category.name;
	return categoryOption;
}

function createProductCardElement(product) {
	const productCardElement = document.createElement('div');
	productCardElement.className = 'product-card';

	const imgElement = document.createElement('img');
	imgElement.setAttribute('src', product.thumbnail);
	imgElement.setAttribute('alt', product.tags[1]);

	const detailsElement = document.createElement('div');
	detailsElement.className = 'product-details';

	const titleElement = document.createElement('h3');
	titleElement.textContent = product.title;

	const descriptionElement = document.createElement('p');
	descriptionElement.textContent = product.description;

	const categoryElement = document.createElement('span');
	categoryElement.className = 'category';
	categoryElement.textContent = product.category;

	const priceElement = document.createElement('div');
	priceElement.className = 'price';
	priceElement.textContent = product.price;

	const addToCarButton = document.createElement('button');
	addToCarButton.textContent = 'Agregar al carrito';

	addToCarButton.addEventListener('click', () => addProductToCart());

	productCardElement.appendChild(imgElement);
	productCardElement.appendChild(detailsElement);

	detailsElement.appendChild(titleElement);
	detailsElement.appendChild(descriptionElement);
	detailsElement.appendChild(categoryElement);
	detailsElement.appendChild(priceElement);
	detailsElement.appendChild(addToCarButton);

	return productCardElement;
}

function populateProductsContainerElement(products) {
	const productContainerElement = document.getElementById('productContainer');

	while (productContainerElement.firstChild) {
		productContainerElement.removeChild(productContainerElement.firstChild);
	}

	products.forEach((product) =>
		productContainerElement.appendChild(createProductCardElement(product))
	);
}

function populateProductsCategoriesSelect(categories) {
	const categoriesSelectElement = document.getElementById('categoriesSelect');

	while (categoriesSelectElement.firstChild) {
		categoriesSelectElement.removeChild(categoriesSelectElement.firstChild);
	}

	const defaultSelectedOption = document.createElement('option');
	defaultSelectedOption.value = 'all';
	defaultSelectedOption.text = 'Todas las categorías';
	defaultSelectedOption.selected = true;

	categoriesSelectElement.appendChild(defaultSelectedOption);

	categories.forEach((category) => {
		categoriesSelectElement.appendChild(
			createCategoriesOptionElement(category)
		);
	});
}

function updateCartCounterElement() {
	const cartCounterElement = document.getElementById('cardCounter');
	cartCounterElement.textContent = cartCounter;
}

function addProductToCart() {
	cartCounter++;
	updateCartCounterElement();
}

async function init() {
	showLoader();

	const [allProducts, allProductsCategories] = await Promise.all([
		loadAllProducts(),
		loadAllProductsCategories()
	]);

	products = allProducts;

	setPagination();
	getProductsByPage(currentPage);
	populateProductsCategoriesSelect(allProductsCategories);
	populateProductsContainerElement(currentProducts);
	updateCartCounterElement();
	hideLoader();
}

document.addEventListener('DOMContentLoaded', async () => {
	init();
	searchProduct();
	handleCategorySelect();
});

function setPagination() {
	const paginationNumberContainer = document.getElementById(
		'paginator-content__number'
	);

	const paginationNumberEl = document.createElement('p');
	paginationNumberEl.id = 'numeber-page';
	paginationNumberEl.textContent = currentPage + 1;

	while (paginationNumberContainer.firstChild) {
		paginationNumberContainer.removeChild(
			paginationNumberContainer.firstChild
		);
	}

	paginationNumberContainer.appendChild(paginationNumberEl);
}

function searchProduct() {
	searchBarElement.addEventListener('input', (event) => {
		const { value } = event.target;

		if (value.length == 0) {
			populateProductsContainerElement(currentProducts);
			return;
		}

		let formattedSearchString = value.trim().toLowerCase();

		let filteredProducts = products.filter((product) =>
			product.title.toLowerCase().includes(formattedSearchString)
		);

		populateProductsContainerElement(filteredProducts);
	});
}

function handleCategorySelect() {
	categorySelectElement.addEventListener('change', async (event) => {
		const { value: selectedCategory } = event.target;

		showLoader();

		if (selectedCategory == 'all') {
			products = await loadAllProducts('');
		} else {
			products = await loadProductsByCategory(selectedCategory);
		}

		currentPage = 0;

		getProductsByPage(currentPage);
		setPagination();

		hideLoader();
	});
}

//  Funcionalidad para el loader
const loader = document.getElementById('loader');

function showLoader() {
	loader.style.display = 'flex';
}

function hideLoader() {
	loader.style.display = 'none';
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFX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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxRQUFROztBQUVsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLFVBQVUsMEJBQTBCOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib290Y2FtcC1maXJzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtZmlyc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtZmlyc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Jvb3RjYW1wLWZpcnN0LXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2Jvb3RjYW1wLWZpcnN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtZmlyc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtZmlyc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib290Y2FtcC1maXJzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jvb3RjYW1wLWZpcnN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib290Y2FtcC1maXJzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtZmlyc3QtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib290Y2FtcC1maXJzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jvb3RjYW1wLWZpcnN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jvb3RjYW1wLWZpcnN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib290Y2FtcC1maXJzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtZmlyc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYm9vdGNhbXAtZmlyc3QtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3QgeyBcbiAgICAtLXdoaXRlOiAjZmZmO1xuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAtLXByaW1hcnktY29sb3I6ICM4MDJjNmU7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNmN2FhMzU7XG5cbiAgICAtLXRleHQtY29sb3I6ICMzYTMxMzQ7XG4gICAgLS1ob3Zlci1saW5rOiAjNWQxMzRkO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xuICAgIC0taG92ZXItYnV0dG9uLWNvbG9yOiAjZTU5MzE1O1xuICAgIC0tYWxlcnQtY29sb3I6IHJnYigyMzksIDI4LCAyOCk7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEhlYWRlciAqL1xuLmhlYWRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEydmg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIGhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXZoO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGxlZnQ6IDUwJTtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDclKTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAyMiUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbmhlYWRlciAuc2VhcmNoLWNvbnRhaW5lciB7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmNhcnQtaWNvbiAuY2FydC1jb3VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLThweDtcbiAgICByaWdodDogLThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi8qIEJhcnJhIGRlIGLDunNxdWVkYSAqL1xuLnNlYXJjaC1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXIgaW5wdXQsXG4uc2VhcmNoLWJhciBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDAuN3JlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi8qIFNlY2Npw7NuIGRlIHByb2R1Y3RvcyAqL1xuLmJvZHktY29udGVudHtcbiAgICBtYXJnaW46IDdyZW0gN3JlbSA0cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHJlbTtcbn1cbi5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbSAxLjVyZW07XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XG59XG5cbi5wcm9kdWN0LWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5wcm9kdWN0LWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5wcm9kdWN0LWRldGFpbHMgaDMge1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgcCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5jYXRlZ29yeSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDIlO1xuICAgIGxlZnQ6IDIlO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5wcmljZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1idXR0b24tY29sb3IpO1xufVxuXG4udmVyLW1hcyB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAudmVyLW1hczpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWhvdmVyLWxpbmspO1xuICB9XG4gIFxuXG4vKiBGb290ZXIgKi9cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG5cbn1cblxuLnNvY2lhbC1pY29ucyBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNvY2lhbC1pY29ucyBpbWc6aG92ZXIge1xuICAgIGZpbHRlcjogaW52ZXJ0KDUwJSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSgxMDAwJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MCUpO1xufVxuXG5cbmZvb3RlciAuc29jaWFsLWljb25zIGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4jbG9hZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dzsgXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7IFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1ob3Zlci1idXR0b24tY29sb3IpOyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIEFuaW1hY2nDs24gZGVsIHNwaW5uZXIgKi9cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xuXG4gICAgLmxvZ28gaDEge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM5cHgpIHtcbiAgICAuaGVhZGVyLWNvbnRhaW5lciBoZWFkZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0b3A6IDF2aDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICB3aWR0aDogODV2dztcbiAgICB9XG5cbiAgICAubG9nbyBoMSB7IFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cblxuICAgIC5oZWFkZXItY29udGFpbmVyIGhlYWRlciAuc2VhcmNoLWJhciwgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5jYXJ0LWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICByaWdodDogMnJlbTtcbiAgICB9XG5cblxuICAgIC5zZWFyY2gtYmFyIHsgXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIFxuICAgIC5ib2R5LWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbjogMTByZW0gN3JlbSA0cmVtO1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgfVxuXG4gICAgLmJvZHktY29udGVudCBhIHsgXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1jb250YWluZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix3QkFBd0I7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QUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxhQUFhOztJQUViLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLHFDQUFxQztJQUNyQywrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDOztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjs7O0FBR0Y7SUFDSTtRQUNJLGtDQUFrQztJQUN0QztBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1IsYUFBYTtRQUNiLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsZUFBZTtJQUNuQjs7O0lBR0E7UUFDSSxXQUFXO1FBQ1gsU0FBUztJQUNiOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7OztJQUdBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHsgXFxuICAgIC0td2hpdGU6ICNmZmY7XFxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjODAyYzZlO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2Y3YWEzNTtcXG5cXG4gICAgLS10ZXh0LWNvbG9yOiAjM2EzMTM0O1xcbiAgICAtLWhvdmVyLWxpbms6ICM1ZDEzNGQ7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcbiAgICAtLWhvdmVyLWJ1dHRvbi1jb2xvcjogI2U1OTMxNTtcXG4gICAgLS1hbGVydC1jb2xvcjogcmdiKDIzOSwgMjgsIDI4KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTJ2aDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIgaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDV2aDtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGxlZnQ6IDUwJTtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNyUpO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAyMiUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbmhlYWRlciAuc2VhcmNoLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uY2FydC1pY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uY2FydC1pY29uIC5jYXJ0LWNvdW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC04cHg7XFxuICAgIHJpZ2h0OiAtOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4vKiBCYXJyYSBkZSBiw7pzcXVlZGEgKi9cXG4uc2VhcmNoLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQsXFxuLnNlYXJjaC1iYXIgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4vKiBTZWNjacOzbiBkZSBwcm9kdWN0b3MgKi9cXG4uYm9keS1jb250ZW50e1xcbiAgICBtYXJnaW46IDdyZW0gN3JlbSA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRyZW07XFxufVxcbi5wcm9kdWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW0gMS41cmVtO1xcbn1cXG5cXG4ucHJvZHVjdC1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE2cHgpO1xcbn1cXG5cXG4ucHJvZHVjdC1jYXJkIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ucHJvZHVjdC1kZXRhaWxzIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ucHJvZHVjdC1kZXRhaWxzIGgzIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLnByb2R1Y3QtZGV0YWlscyBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnByb2R1Y3QtZGV0YWlscyAuY2F0ZWdvcnkge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNHB4IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDIlO1xcbiAgICBsZWZ0OiAyJTtcXG59XFxuXFxuLnByb2R1Y3QtZGV0YWlscyAucHJpY2Uge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4ucHJvZHVjdC1kZXRhaWxzIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLnByb2R1Y3QtZGV0YWlscyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1idXR0b24tY29sb3IpO1xcbn1cXG5cXG4udmVyLW1hcyB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICB9XFxuICBcXG4gIC52ZXItbWFzOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLWxpbmspO1xcbiAgfVxcbiAgXFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgLnNvY2lhbC1pY29ucyB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcblxcbn1cXG5cXG4uc29jaWFsLWljb25zIGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMTAwMCUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTAlKTtcXG59XFxuXFxuXFxuZm9vdGVyIC5zb2NpYWwtaWNvbnMgYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4jbG9hZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7IFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNwaW5uZXIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyBcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLWhvdmVyLWJ1dHRvbi1jb2xvcik7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIC8qIEFuaW1hY2nDs24gZGVsIHNwaW5uZXIgKi9cXG4gIEBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxuICB9XFxuICBcXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XFxuICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XFxuXFxuICAgIC5sb2dvIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcbiAgICAucHJvZHVjdC1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM5cHgpIHtcXG4gICAgLmhlYWRlci1jb250YWluZXIgaGVhZGVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB0b3A6IDF2aDtcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgfVxcblxcbiAgICAubG9nbyBoMSB7IFxcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB9XFxuXFxuXFxuICAgIC5oZWFkZXItY29udGFpbmVyIGhlYWRlciAuc2VhcmNoLWJhciwgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgLmNhcnQtaWNvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEuNXJlbTtcXG4gICAgICAgIHJpZ2h0OiAycmVtO1xcbiAgICB9XFxuXFxuXFxuICAgIC5zZWFyY2gtYmFyIHsgXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYm9keS1jb250ZW50e1xcbiAgICAgICAgbWFyZ2luOiAxMHJlbSA3cmVtIDRyZW07XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmJvZHktY29udGVudCBhIHsgXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxubGV0IHByb2R1Y3RzID0gW107XG5sZXQgY3VycmVudFByb2R1Y3RzID0gW107XG5sZXQgY3VycmVudFBhZ2UgPSAwO1xubGV0IGNhcnRDb3VudGVyID0gMDtcblxuY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gODtcblxuY29uc3Qgc2VhcmNoQmFyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCYXInKTtcbmNvbnN0IGNhdGVnb3J5U2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWVzU2VsZWN0Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBbGxQcm9kdWN0c0NhdGVnb3JpZXMoKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cy9jYXRlZ29yaWVzJyk7XG5cdGNvbnN0IGZldGNoZWRDYXRlZ29yaWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gZmV0Y2hlZENhdGVnb3JpZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBbGxQcm9kdWN0cygpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzYCk7XG5cdGNvbnN0IHsgcHJvZHVjdHM6IGZldGNoZWRQcm9kdWN0cyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gZmV0Y2hlZFByb2R1Y3RzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkUHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5KSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0YGh0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cy9jYXRlZ29yeS8ke2NhdGVnb3J5fWBcblx0KTtcblx0Y29uc3QgeyBwcm9kdWN0czogZmV0Y2hlZFByb2R1Y3RzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdHJldHVybiBmZXRjaGVkUHJvZHVjdHM7XG59XG5cbi8qKioqKioqKiogSW5pY2lvIGRlIFDDoWdpbmFjaW9uICoqKioqKioqL1xuZnVuY3Rpb24gZ2V0UHJvZHVjdHNCeVBhZ2UocGFnZSkge1xuXHRjb25zdCBzdGFydEluZGV4ID0gcGFnZSAqIHByb2R1Y3RzUGVyUGFnZTtcblx0Y29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgcHJvZHVjdHNQZXJQYWdlO1xuXHRjdXJyZW50UHJvZHVjdHMgPSBwcm9kdWN0cy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG5cblx0aWYgKGN1cnJlbnRQcm9kdWN0cy5sZW5ndGggPiAwKSB7XG5cdFx0cG9wdWxhdGVQcm9kdWN0c0NvbnRhaW5lckVsZW1lbnQoY3VycmVudFByb2R1Y3RzKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnb1RvTmV4dFBhZ2UoKSB7XG5cdGN1cnJlbnRQYWdlKys7XG5cdGdldFByb2R1Y3RzQnlQYWdlKGN1cnJlbnRQYWdlKTtcblx0c2V0UGFnaW5hdGlvbigpO1xufVxuXG5mdW5jdGlvbiBnb1RvUHJldmlvdXNQYWdlKCkge1xuXHRpZiAoY3VycmVudFBhZ2UgPD0gMCkgcmV0dXJuO1xuXHRjdXJyZW50UGFnZS0tO1xuXHRnZXRQcm9kdWN0c0J5UGFnZShjdXJyZW50UGFnZSk7XG5cdHNldFBhZ2luYXRpb24oKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvTmV4dFBhZ2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvUHJldmlvdXNQYWdlKTtcblxuLyoqKioqKioqKiBGaW4gZGUgUMOhZ2luYWNpb24gKioqKioqKiovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3JpZXNPcHRpb25FbGVtZW50KGNhdGVnb3J5KSB7XG5cdGNvbnN0IGNhdGVnb3J5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdGNhdGVnb3J5T3B0aW9uLnZhbHVlID0gY2F0ZWdvcnkuc2x1Zztcblx0Y2F0ZWdvcnlPcHRpb24udGV4dCA9IGNhdGVnb3J5Lm5hbWU7XG5cdHJldHVybiBjYXRlZ29yeU9wdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdENhcmRFbGVtZW50KHByb2R1Y3QpIHtcblx0Y29uc3QgcHJvZHVjdENhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHByb2R1Y3RDYXJkRWxlbWVudC5jbGFzc05hbWUgPSAncHJvZHVjdC1jYXJkJztcblxuXHRjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGltZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBwcm9kdWN0LnRodW1ibmFpbCk7XG5cdGltZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdhbHQnLCBwcm9kdWN0LnRhZ3NbMV0pO1xuXG5cdGNvbnN0IGRldGFpbHNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRldGFpbHNFbGVtZW50LmNsYXNzTmFtZSA9ICdwcm9kdWN0LWRldGFpbHMnO1xuXG5cdGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2R1Y3QudGl0bGU7XG5cblx0Y29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9kdWN0LmRlc2NyaXB0aW9uO1xuXG5cdGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0Y2F0ZWdvcnlFbGVtZW50LmNsYXNzTmFtZSA9ICdjYXRlZ29yeSc7XG5cdGNhdGVnb3J5RWxlbWVudC50ZXh0Q29udGVudCA9IHByb2R1Y3QuY2F0ZWdvcnk7XG5cblx0Y29uc3QgcHJpY2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHByaWNlRWxlbWVudC5jbGFzc05hbWUgPSAncHJpY2UnO1xuXHRwcmljZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9kdWN0LnByaWNlO1xuXG5cdGNvbnN0IGFkZFRvQ2FyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGFkZFRvQ2FyQnV0dG9uLnRleHRDb250ZW50ID0gJ0FncmVnYXIgYWwgY2Fycml0byc7XG5cblx0YWRkVG9DYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRQcm9kdWN0VG9DYXJ0KCkpO1xuXG5cdHByb2R1Y3RDYXJkRWxlbWVudC5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcblx0cHJvZHVjdENhcmRFbGVtZW50LmFwcGVuZENoaWxkKGRldGFpbHNFbGVtZW50KTtcblxuXHRkZXRhaWxzRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXHRkZXRhaWxzRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuXHRkZXRhaWxzRWxlbWVudC5hcHBlbmRDaGlsZChjYXRlZ29yeUVsZW1lbnQpO1xuXHRkZXRhaWxzRWxlbWVudC5hcHBlbmRDaGlsZChwcmljZUVsZW1lbnQpO1xuXHRkZXRhaWxzRWxlbWVudC5hcHBlbmRDaGlsZChhZGRUb0NhckJ1dHRvbik7XG5cblx0cmV0dXJuIHByb2R1Y3RDYXJkRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9kdWN0c0NvbnRhaW5lckVsZW1lbnQocHJvZHVjdHMpIHtcblx0Y29uc3QgcHJvZHVjdENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvbnRhaW5lcicpO1xuXG5cdHdoaWxlIChwcm9kdWN0Q29udGFpbmVyRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0cHJvZHVjdENvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQocHJvZHVjdENvbnRhaW5lckVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdH1cblxuXHRwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PlxuXHRcdHByb2R1Y3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RDYXJkRWxlbWVudChwcm9kdWN0KSlcblx0KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9kdWN0c0NhdGVnb3JpZXNTZWxlY3QoY2F0ZWdvcmllcykge1xuXHRjb25zdCBjYXRlZ29yaWVzU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWVzU2VsZWN0Jyk7XG5cblx0d2hpbGUgKGNhdGVnb3JpZXNTZWxlY3RFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRjYXRlZ29yaWVzU2VsZWN0RWxlbWVudC5yZW1vdmVDaGlsZChjYXRlZ29yaWVzU2VsZWN0RWxlbWVudC5maXJzdENoaWxkKTtcblx0fVxuXG5cdGNvbnN0IGRlZmF1bHRTZWxlY3RlZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRkZWZhdWx0U2VsZWN0ZWRPcHRpb24udmFsdWUgPSAnYWxsJztcblx0ZGVmYXVsdFNlbGVjdGVkT3B0aW9uLnRleHQgPSAnVG9kYXMgbGFzIGNhdGVnb3LDrWFzJztcblx0ZGVmYXVsdFNlbGVjdGVkT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuXHRjYXRlZ29yaWVzU2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChkZWZhdWx0U2VsZWN0ZWRPcHRpb24pO1xuXG5cdGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcblx0XHRjYXRlZ29yaWVzU2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChcblx0XHRcdGNyZWF0ZUNhdGVnb3JpZXNPcHRpb25FbGVtZW50KGNhdGVnb3J5KVxuXHRcdCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDYXJ0Q291bnRlckVsZW1lbnQoKSB7XG5cdGNvbnN0IGNhcnRDb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQ291bnRlcicpO1xuXHRjYXJ0Q291bnRlckVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXJ0Q291bnRlcjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvZHVjdFRvQ2FydCgpIHtcblx0Y2FydENvdW50ZXIrKztcblx0dXBkYXRlQ2FydENvdW50ZXJFbGVtZW50KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG5cdHNob3dMb2FkZXIoKTtcblxuXHRjb25zdCBbYWxsUHJvZHVjdHMsIGFsbFByb2R1Y3RzQ2F0ZWdvcmllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0bG9hZEFsbFByb2R1Y3RzKCksXG5cdFx0bG9hZEFsbFByb2R1Y3RzQ2F0ZWdvcmllcygpXG5cdF0pO1xuXG5cdHByb2R1Y3RzID0gYWxsUHJvZHVjdHM7XG5cblx0c2V0UGFnaW5hdGlvbigpO1xuXHRnZXRQcm9kdWN0c0J5UGFnZShjdXJyZW50UGFnZSk7XG5cdHBvcHVsYXRlUHJvZHVjdHNDYXRlZ29yaWVzU2VsZWN0KGFsbFByb2R1Y3RzQ2F0ZWdvcmllcyk7XG5cdHBvcHVsYXRlUHJvZHVjdHNDb250YWluZXJFbGVtZW50KGN1cnJlbnRQcm9kdWN0cyk7XG5cdHVwZGF0ZUNhcnRDb3VudGVyRWxlbWVudCgpO1xuXHRoaWRlTG9hZGVyKCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG5cdGluaXQoKTtcblx0c2VhcmNoUHJvZHVjdCgpO1xuXHRoYW5kbGVDYXRlZ29yeVNlbGVjdCgpO1xufSk7XG5cbmZ1bmN0aW9uIHNldFBhZ2luYXRpb24oKSB7XG5cdGNvbnN0IHBhZ2luYXRpb25OdW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHQncGFnaW5hdG9yLWNvbnRlbnRfX251bWJlcidcblx0KTtcblxuXHRjb25zdCBwYWdpbmF0aW9uTnVtYmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHBhZ2luYXRpb25OdW1iZXJFbC5pZCA9ICdudW1lYmVyLXBhZ2UnO1xuXHRwYWdpbmF0aW9uTnVtYmVyRWwudGV4dENvbnRlbnQgPSBjdXJyZW50UGFnZSArIDE7XG5cblx0d2hpbGUgKHBhZ2luYXRpb25OdW1iZXJDb250YWluZXIuZmlyc3RDaGlsZCkge1xuXHRcdHBhZ2luYXRpb25OdW1iZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoXG5cdFx0XHRwYWdpbmF0aW9uTnVtYmVyQ29udGFpbmVyLmZpcnN0Q2hpbGRcblx0XHQpO1xuXHR9XG5cblx0cGFnaW5hdGlvbk51bWJlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdpbmF0aW9uTnVtYmVyRWwpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hQcm9kdWN0KCkge1xuXHRzZWFyY2hCYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRwb3B1bGF0ZVByb2R1Y3RzQ29udGFpbmVyRWxlbWVudChjdXJyZW50UHJvZHVjdHMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBmb3JtYXR0ZWRTZWFyY2hTdHJpbmcgPSB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuXHRcdGxldCBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PlxuXHRcdFx0cHJvZHVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZvcm1hdHRlZFNlYXJjaFN0cmluZylcblx0XHQpO1xuXG5cdFx0cG9wdWxhdGVQcm9kdWN0c0NvbnRhaW5lckVsZW1lbnQoZmlsdGVyZWRQcm9kdWN0cyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDYXRlZ29yeVNlbGVjdCgpIHtcblx0Y2F0ZWdvcnlTZWxlY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGNvbnN0IHsgdmFsdWU6IHNlbGVjdGVkQ2F0ZWdvcnkgfSA9IGV2ZW50LnRhcmdldDtcblxuXHRcdHNob3dMb2FkZXIoKTtcblxuXHRcdGlmIChzZWxlY3RlZENhdGVnb3J5ID09ICdhbGwnKSB7XG5cdFx0XHRwcm9kdWN0cyA9IGF3YWl0IGxvYWRBbGxQcm9kdWN0cygnJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb2R1Y3RzID0gYXdhaXQgbG9hZFByb2R1Y3RzQnlDYXRlZ29yeShzZWxlY3RlZENhdGVnb3J5KTtcblx0XHR9XG5cblx0XHRjdXJyZW50UGFnZSA9IDA7XG5cblx0XHRnZXRQcm9kdWN0c0J5UGFnZShjdXJyZW50UGFnZSk7XG5cdFx0c2V0UGFnaW5hdGlvbigpO1xuXG5cdFx0aGlkZUxvYWRlcigpO1xuXHR9KTtcbn1cblxuLy8gIEZ1bmNpb25hbGlkYWQgcGFyYSBlbCBsb2FkZXJcbmNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcblxuZnVuY3Rpb24gc2hvd0xvYWRlcigpIHtcblx0bG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59XG5cbmZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XG5cdGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9