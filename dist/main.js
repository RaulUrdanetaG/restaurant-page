/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/about.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/about.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500&family=Montserrat:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hero-about {
    display: flex;
    position: relative;
    min-height: 855px;
    max-width: 1905px;
    z-index: -2;
    top: -15px;
}

.about-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 155px;
    padding-right: 31vw;
    margin: 0 auto;
}

.black-bar-about {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    padding: 11px;
    width: min(100%,420px);
    letter-spacing: 5px;
    text-align: center;
    font-size: 14px;
    color: white;
    margin-bottom: 14px;
}

.black-bar-about::after {
    content: '';
    background: var(--blackbar-after) center center no-repeat;
    width: 200px;
    height: 153px;
    position: absolute;
    top: 55px;
    z-index: -1;
    background-size: cover;
}

.black-bar-footer {
    letter-spacing: 6px;
    width: 350px;
    font-family: 'Bitter', serif;
    font-size: 12px;
    line-height: 1.6;
    text-align: center;
    color: white;
    font-weight: 700;
    margin: 0;
}

.history-section {
    margin: 0 auto;
}

.history-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.history-container::after {
    content: '';
    background: var(--history-after);
    position: absolute;
    width: 270px;
    height: 350px;
    z-index: -1;
    right: 270px;
}

.history-title {
    display: flex;
    align-items: end;
    font-family: 'merriweather', serif;
    font-size: 16px;
    color: #494949;
    margin: 0 15vw 30px;
    max-width: 670px;
    font-weight: 300;
}

.history-title-text {
    margin: 0;
    text-overflow: ellipsis;
    font-weight: 300;
    line-height: 1.8;
}

.history-title p:first-child {
    font-size: 6rem;
    margin: 0;
    max-height: 100px;
    color: #333333;
    margin-right: 5px;
}

.history-quote {
    letter-spacing: 1.5px;
    word-spacing: 2.5px;
    margin: 0 7vw 36px;
    font-size: 43px;
    color: #333333;
}

.history-text {
    margin: 0 15vw 50px;
    font-family: 'merriweather', serif;
    font-size: 16px;
    color: #494949;
    line-height: 1.8;
    font-weight: 300;
}

.memories-hero {
    background-size: cover;
    position: relative;
    padding: 70px 0;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.6;
    background: #333333;
}

.container-memories-text {
    position: relative;
    z-index: 3;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.container-memories-text p {
    color: white;
    letter-spacing: 4px;
    max-width: 700px;
    font-size: 110px;
    line-height: .9;
}

@media (max-width:700px){
    .about-title{
        padding-right: 0;
    }
    .black-bar-about::after {
        width: 200px;
        height: 153px;
        position: absolute;
        top: 55px;
        left: 0;
        z-index: -1;
        background-size: cover;
    }
    .container-memories-text p{
        font-size: 50px;
    }
}

@media (max-width:561px) {
    .history-title p:first-child {
        font-size: 30px;
    }

    .history-title{
        align-items: start;
    }
    .history-quote{
        margin: 0 8vw 36px;
        font-size: 33px;
        text-align: center;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/about.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,yDAAyD;IACzD,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;IAC5B,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,gCAAgC;IAChC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,kCAAkC;IAClC,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,YAAY;QACZ,aAAa;QACb,kBAAkB;QAClB,SAAS;QACT,OAAO;QACP,WAAW;QACX,sBAAsB;IAC1B;IACA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;QAClB,eAAe;QACf,kBAAkB;IACtB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500&family=Montserrat:wght@300&display=swap');\n\n.hero-about {\n    display: flex;\n    position: relative;\n    min-height: 855px;\n    max-width: 1905px;\n    z-index: -2;\n    top: -15px;\n}\n\n.about-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 155px;\n    padding-right: 31vw;\n    margin: 0 auto;\n}\n\n.black-bar-about {\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n    padding: 11px;\n    width: min(100%,420px);\n    letter-spacing: 5px;\n    text-align: center;\n    font-size: 14px;\n    color: white;\n    margin-bottom: 14px;\n}\n\n.black-bar-about::after {\n    content: '';\n    background: var(--blackbar-after) center center no-repeat;\n    width: 200px;\n    height: 153px;\n    position: absolute;\n    top: 55px;\n    z-index: -1;\n    background-size: cover;\n}\n\n.black-bar-footer {\n    letter-spacing: 6px;\n    width: 350px;\n    font-family: 'Bitter', serif;\n    font-size: 12px;\n    line-height: 1.6;\n    text-align: center;\n    color: white;\n    font-weight: 700;\n    margin: 0;\n}\n\n.history-section {\n    margin: 0 auto;\n}\n\n.history-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.history-container::after {\n    content: '';\n    background: var(--history-after);\n    position: absolute;\n    width: 270px;\n    height: 350px;\n    z-index: -1;\n    right: 270px;\n}\n\n.history-title {\n    display: flex;\n    align-items: end;\n    font-family: 'merriweather', serif;\n    font-size: 16px;\n    color: #494949;\n    margin: 0 15vw 30px;\n    max-width: 670px;\n    font-weight: 300;\n}\n\n.history-title-text {\n    margin: 0;\n    text-overflow: ellipsis;\n    font-weight: 300;\n    line-height: 1.8;\n}\n\n.history-title p:first-child {\n    font-size: 6rem;\n    margin: 0;\n    max-height: 100px;\n    color: #333333;\n    margin-right: 5px;\n}\n\n.history-quote {\n    letter-spacing: 1.5px;\n    word-spacing: 2.5px;\n    margin: 0 7vw 36px;\n    font-size: 43px;\n    color: #333333;\n}\n\n.history-text {\n    margin: 0 15vw 50px;\n    font-family: 'merriweather', serif;\n    font-size: 16px;\n    color: #494949;\n    line-height: 1.8;\n    font-weight: 300;\n}\n\n.memories-hero {\n    background-size: cover;\n    position: relative;\n    padding: 70px 0;\n}\n\n.overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0.6;\n    background: #333333;\n}\n\n.container-memories-text {\n    position: relative;\n    z-index: 3;\n    width: 90%;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.container-memories-text p {\n    color: white;\n    letter-spacing: 4px;\n    max-width: 700px;\n    font-size: 110px;\n    line-height: .9;\n}\n\n@media (max-width:700px){\n    .about-title{\n        padding-right: 0;\n    }\n    .black-bar-about::after {\n        width: 200px;\n        height: 153px;\n        position: absolute;\n        top: 55px;\n        left: 0;\n        z-index: -1;\n        background-size: cover;\n    }\n    .container-memories-text p{\n        font-size: 50px;\n    }\n}\n\n@media (max-width:561px) {\n    .history-title p:first-child {\n        font-size: 30px;\n    }\n\n    .history-title{\n        align-items: start;\n    }\n    .history-quote{\n        margin: 0 8vw 36px;\n        font-size: 33px;\n        text-align: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#footer-background {
    position: absolute;
    object-fit: cover;
    height: 720px;
    width: 100%;
    left: 0;
}

video {
    object-fit: contain;
    overflow: clip;
}

footer {
    overflow: hidden;
    background: black;
    width: 100%;
}

footer .info-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    color: white;
    height: 100%;
    margin: 0 18vw;
}

.column {
    width: 490px;
    margin-right: 35vw;
    margin-top: 5vh;
}

#logo-footer {
    display: flex;
    align-items: end;
    gap: 15px;
}

footer h4 {
    color: #DDB78E;
    padding-bottom: 18px;
    margin: 0 0 16px 0;
    border-bottom: 1px solid #4d4d4d;
}

footer h4::before {
    content: '';
    width: 105px;
    height: 73px;
    margin-left: 10px;
    background: var(--b16Footer) center center no-repeat;
}

.store-hours {
    padding-bottom: 18px;
    border-bottom: 1px solid #4d4d4d;
    margin-bottom: 16px;
}

.store-hours p {
    margin: 0px;
    font-size: 20px
}

.store-location {
    margin-bottom: 16px;
    padding-bottom: 18px;
    color: #4d4d4d;
    font-size: 26px;
    border-bottom: 1px solid #4d4d4d;
}

.store-location p {
    margin: 0;
}

.payment-info {
    font-size: 20px;
    padding-bottom: 16px;
    margin-bottom: 18px;
    color: #4d4d4d;
    border-bottom: 1px solid #4d4d4d;
}

.disclaimer {
    font-size: 15px;
    color: #7d7d7d;
}

.disclaimer a {
    color: white;
}

.creator-info {
    display: flex;
    align-items: center;
    align-self: center;
    gap: 10px;
    font-size: 20px;
}

.creator-info h3 {
    margin: 0;
}

.creator-info a {
    text-decoration: none;
    color: white;
}

.creator-info img {
    width: 30px;
    filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(9deg) brightness(90%) contrast(116%);
}

@media (max-width:1200px){
    .creator-info{
        align-self: flex-start;
        margin-left: 30%;
    }
}

@media (max-width:700px) {
    #footer-background{
        height: calc(100% + 30%);
    }
    .column {
        display: flex;
        flex-direction: column;
        width: auto;
        max-width: 490px;
        margin: 0;
        margin-top: 5vh;
    }

    footer h4::before {
        content: '';
        min-width: 105px;
        min-height: 73px;
    }

    #logo-footer {
        justify-content: center;
    }

    .store-hours {
        text-align: center;
    }

    .store-location {
        text-align: center;
    }

    .payment-info {
        text-align: center;
    }
    .creator-info{
        align-self: center;
        margin: 10px 0;
    }
}
`, "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,WAAW;IACX,OAAO;AACX;;AAEA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,8BAA8B;IAC9B,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,oDAAoD;AACxD;;AAEA;IACI,oBAAoB;IACpB,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX;AACJ;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,cAAc;IACd,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,8FAA8F;AAClG;;AAEA;IACI;QACI,sBAAsB;QACtB,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;QACX,gBAAgB;QAChB,SAAS;QACT,eAAe;IACnB;;IAEA;QACI,WAAW;QACX,gBAAgB;QAChB,gBAAgB;IACpB;;IAEA;QACI,uBAAuB;IAC3B;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;QAClB,cAAc;IAClB;AACJ","sourcesContent":["#footer-background {\n    position: absolute;\n    object-fit: cover;\n    height: 720px;\n    width: 100%;\n    left: 0;\n}\n\nvideo {\n    object-fit: contain;\n    overflow: clip;\n}\n\nfooter {\n    overflow: hidden;\n    background: black;\n    width: 100%;\n}\n\nfooter .info-container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    position: relative;\n    z-index: 2;\n    color: white;\n    height: 100%;\n    margin: 0 18vw;\n}\n\n.column {\n    width: 490px;\n    margin-right: 35vw;\n    margin-top: 5vh;\n}\n\n#logo-footer {\n    display: flex;\n    align-items: end;\n    gap: 15px;\n}\n\nfooter h4 {\n    color: #DDB78E;\n    padding-bottom: 18px;\n    margin: 0 0 16px 0;\n    border-bottom: 1px solid #4d4d4d;\n}\n\nfooter h4::before {\n    content: '';\n    width: 105px;\n    height: 73px;\n    margin-left: 10px;\n    background: var(--b16Footer) center center no-repeat;\n}\n\n.store-hours {\n    padding-bottom: 18px;\n    border-bottom: 1px solid #4d4d4d;\n    margin-bottom: 16px;\n}\n\n.store-hours p {\n    margin: 0px;\n    font-size: 20px\n}\n\n.store-location {\n    margin-bottom: 16px;\n    padding-bottom: 18px;\n    color: #4d4d4d;\n    font-size: 26px;\n    border-bottom: 1px solid #4d4d4d;\n}\n\n.store-location p {\n    margin: 0;\n}\n\n.payment-info {\n    font-size: 20px;\n    padding-bottom: 16px;\n    margin-bottom: 18px;\n    color: #4d4d4d;\n    border-bottom: 1px solid #4d4d4d;\n}\n\n.disclaimer {\n    font-size: 15px;\n    color: #7d7d7d;\n}\n\n.disclaimer a {\n    color: white;\n}\n\n.creator-info {\n    display: flex;\n    align-items: center;\n    align-self: center;\n    gap: 10px;\n    font-size: 20px;\n}\n\n.creator-info h3 {\n    margin: 0;\n}\n\n.creator-info a {\n    text-decoration: none;\n    color: white;\n}\n\n.creator-info img {\n    width: 30px;\n    filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(9deg) brightness(90%) contrast(116%);\n}\n\n@media (max-width:1200px){\n    .creator-info{\n        align-self: flex-start;\n        margin-left: 30%;\n    }\n}\n\n@media (max-width:700px) {\n    #footer-background{\n        height: calc(100% + 30%);\n    }\n    .column {\n        display: flex;\n        flex-direction: column;\n        width: auto;\n        max-width: 490px;\n        margin: 0;\n        margin-top: 5vh;\n    }\n\n    footer h4::before {\n        content: '';\n        min-width: 105px;\n        min-height: 73px;\n    }\n\n    #logo-footer {\n        justify-content: center;\n    }\n\n    .store-hours {\n        text-align: center;\n    }\n\n    .store-location {\n        text-align: center;\n    }\n\n    .payment-info {\n        text-align: center;\n    }\n    .creator-info{\n        align-self: center;\n        margin: 10px 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main {
    width: 100%;
}

.hero {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 62px - 17px);
    justify-content: center;
    align-items: center;
}

#home-background {
    position: absolute;
    object-fit: cover;
    top: 62px;
    left: 0;
    width: 100%;
    height: calc(100vh - 62px);
}

video {
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
}

.container {
    display: flex;
    height: 100%;
    align-items: center;
    z-index: 1;
    margin: 0 352.5px;
}

.street-food {
    display: block;
    width: 75%;
    width: 259px;
    margin: 0 auto;
    margin-right: 15px;
    margin-bottom: 18px;
}

.home-callouts {
    padding: 80px 0;
    background-color: white;
    background: var(--home-frills);
}

.daily-special {
    display: flex;
    max-width: 1200px;
    margin: 0 auto 20px;
}

.left-info {
    border: 2px solid #E2E2E2;
}

.left-info img {
    width: 100%;
    height: 100%;
}

.right-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    background-color: white;
    border: 2px solid #E2E2E2;
    border-left: none;
}

.description,
.fb-callout {
    padding: 16px;
}

.description {
    border-bottom: 2px solid #E2E2E2;
}

.description h4 {
    margin: 0 0 10px 0;
    font-size: 34px;
    font-weight: 200;
}

.description p {
    margin: 0 0 40px 0;
    font-family: 'Merriweather', serif;
    font-size: 16px;
}

.fb-callout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;
    font-family: 'Merriweather', serif;
    font-size: 16px;
    font-weight: 700;
}

.fb-callout img {
    width: 30px;
    margin-right: 30px;
}

.one-third {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.column-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border: 2px solid #E2E2E2;
    max-width: 320px;
    text-align: center;
    margin: 0;
}

.column-home p{
    font-size: 16px;
    font-family: 'Merriweather', serif;
    font-weight: 300;
    line-height: 30px;
    margin: 0 0 72px 0;
    color: #2b2b2b;
}

.column-home a{
    color: #DDB78E;
    font-size: 28px;
    letter-spacing: 4px;
    padding: 8px;
    text-decoration: none;
}

.column-home a:hover{
    cursor: pointer;
    border-bottom: 2px solid #DDB78E;
    transition: all 0.07s;
}

.first-img {
    margin: 0 0 36px;
}

.second-img {
    margin: 0 0 30px;
}

.third-img{
    margin: 0 0 48px;
}

.home-callouts .column-home:first-child {
    background: white var(--onionBg) center center no-repeat;
    padding: 84px 30px 46px;
}

.home-callouts .column-home:nth-child(2) {
    background: white var(--chickenBg) center center no-repeat;
    padding: 72px 30px 46px;
}

.home-callouts .column-home:last-child {
    background: white var(--beetBg) center center no-repeat;
    padding: 94px 30px 46px;
}

@media (max-width:1220px){
    .one-third,
    .daily-special{
        margin: 0 20px 20px;
    }
    .column-home{
        width: max(50%,290px);
        padding: 60px 30px;
    }
    .one-third{
        justify-content: center;
    }

}

@media (max-width:700px){
    .daily-special{
        flex-direction: column;
    }
    .right-info{
        border-left: 2px solid #E2E2E2;
    }

    .left-info{
        border: none;
    }


}`, "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,iCAAiC;IACjC,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,OAAO;IACP,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,iCAAiC;IACjC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,6BAA6B;IAC7B,uBAAuB;IACvB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,kCAAkC;IAClC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,SAAS;IACT,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wDAAwD;IACxD,uBAAuB;AAC3B;;AAEA;IACI,0DAA0D;IAC1D,uBAAuB;AAC3B;;AAEA;IACI,uDAAuD;IACvD,uBAAuB;AAC3B;;AAEA;IACI;;QAEI,mBAAmB;IACvB;IACA;QACI,qBAAqB;QACrB,kBAAkB;IACtB;IACA;QACI,uBAAuB;IAC3B;;AAEJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;;IAEA;QACI,YAAY;IAChB;;;AAGJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');\n\n.main {\n    width: 100%;\n}\n\n.hero {\n    display: flex;\n    overflow: hidden;\n    width: 100%;\n    height: calc(100vh - 62px - 17px);\n    justify-content: center;\n    align-items: center;\n}\n\n#home-background {\n    position: absolute;\n    object-fit: cover;\n    top: 62px;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 62px);\n}\n\nvideo {\n    object-fit: contain;\n    overflow-clip-margin: content-box;\n    overflow: clip;\n}\n\n.container {\n    display: flex;\n    height: 100%;\n    align-items: center;\n    z-index: 1;\n    margin: 0 352.5px;\n}\n\n.street-food {\n    display: block;\n    width: 75%;\n    width: 259px;\n    margin: 0 auto;\n    margin-right: 15px;\n    margin-bottom: 18px;\n}\n\n.home-callouts {\n    padding: 80px 0;\n    background-color: white;\n    background: var(--home-frills);\n}\n\n.daily-special {\n    display: flex;\n    max-width: 1200px;\n    margin: 0 auto 20px;\n}\n\n.left-info {\n    border: 2px solid #E2E2E2;\n}\n\n.left-info img {\n    width: 100%;\n    height: 100%;\n}\n\n.right-info {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: space-around;\n    background-color: white;\n    border: 2px solid #E2E2E2;\n    border-left: none;\n}\n\n.description,\n.fb-callout {\n    padding: 16px;\n}\n\n.description {\n    border-bottom: 2px solid #E2E2E2;\n}\n\n.description h4 {\n    margin: 0 0 10px 0;\n    font-size: 34px;\n    font-weight: 200;\n}\n\n.description p {\n    margin: 0 0 40px 0;\n    font-family: 'Merriweather', serif;\n    font-size: 16px;\n}\n\n.fb-callout {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-decoration: none;\n    color: black;\n    font-family: 'Merriweather', serif;\n    font-size: 16px;\n    font-weight: 700;\n}\n\n.fb-callout img {\n    width: 30px;\n    margin-right: 30px;\n}\n\n.one-third {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    gap: 20px;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.column-home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    border: 2px solid #E2E2E2;\n    max-width: 320px;\n    text-align: center;\n    margin: 0;\n}\n\n.column-home p{\n    font-size: 16px;\n    font-family: 'Merriweather', serif;\n    font-weight: 300;\n    line-height: 30px;\n    margin: 0 0 72px 0;\n    color: #2b2b2b;\n}\n\n.column-home a{\n    color: #DDB78E;\n    font-size: 28px;\n    letter-spacing: 4px;\n    padding: 8px;\n    text-decoration: none;\n}\n\n.column-home a:hover{\n    cursor: pointer;\n    border-bottom: 2px solid #DDB78E;\n    transition: all 0.07s;\n}\n\n.first-img {\n    margin: 0 0 36px;\n}\n\n.second-img {\n    margin: 0 0 30px;\n}\n\n.third-img{\n    margin: 0 0 48px;\n}\n\n.home-callouts .column-home:first-child {\n    background: white var(--onionBg) center center no-repeat;\n    padding: 84px 30px 46px;\n}\n\n.home-callouts .column-home:nth-child(2) {\n    background: white var(--chickenBg) center center no-repeat;\n    padding: 72px 30px 46px;\n}\n\n.home-callouts .column-home:last-child {\n    background: white var(--beetBg) center center no-repeat;\n    padding: 94px 30px 46px;\n}\n\n@media (max-width:1220px){\n    .one-third,\n    .daily-special{\n        margin: 0 20px 20px;\n    }\n    .column-home{\n        width: max(50%,290px);\n        padding: 60px 30px;\n    }\n    .one-third{\n        justify-content: center;\n    }\n\n}\n\n@media (max-width:700px){\n    .daily-special{\n        flex-direction: column;\n    }\n    .right-info{\n        border-left: 2px solid #E2E2E2;\n    }\n\n    .left-info{\n        border: none;\n    }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500&family=Montserrat:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu-container {
    margin: 0 18vw 0 17.5vw;
}

.main-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 1200px;
    margin: 0 auto;
}

.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-bottom: 30px;
}

.item-img {
    display: flex;
    width: clamp(220px,100%,520px);
    margin: 0 10px;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0;
}

.name {
    font-size: 30px;
    color: #333333;
    font-weight: 300;
    margin: 0;
}

.attribute-img-s {
    width: 28px;
}

.attribute-img-v {
    width: 18px;
}

.attribute-img-sv {
    width: 50px;
}


.separator {
    width: 60px;
    height: 2px;
    background-color: #494949;
    margin: 8px auto;
}

.item-description {
    font-family: 'Merriweather', serif;
    font-size: 14px;
    margin: 0 1.5vw 19.6px;
    margin-top: 0;
    color: #494949;
    text-align: center;
    line-height: 25px;
    font-weight: 300;
}

.menu-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding-top: 43px;
}

.black-bar{
    margin: 0;
    font-family: 'Montserrat',sans-serif;
    padding: 13px;
    width: min(100%,437px);
    letter-spacing: 5px;
    text-align: center;
    font-size: 15px;
    color: white;
    margin-bottom: 14px;
}

.gold-spaced{
    color: #DDB78E;
    font-size: 15px;
    font-family: 'Bitter',serif;
    letter-spacing: 5px;
    margin: 0;
    margin-bottom: 25px ;
    padding-bottom: 18px;
}

.option p{
    font-family: 'Montserrat',sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    margin: 0;
}

.options-container{
    display: flex;
    gap: 20px;
    align-self: end;
    align-content: center;
    margin: 0;
    margin-bottom: 16px;
    margin-right: 25px;
}

.option{
    display: flex;
    gap: 5px;
}

.options-img-s{
    width: 20px;
}

.options-img-v {
    width: 16px;
}

.usa-today-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.usa-img {
    margin: 0 auto 20px;
}

.usa-title {
    font-size: 34px;
    margin: 0 10% 24px;
}

.usa-subtitle {
    font-size: 17px;
    margin: 0 10% 40px;
    font-family: 'merriweather', serif;
    color: #494949;
    line-height: 30px;
}

.usa-separator {
    height: 7px;
    width: 80%;
    margin: 0 0 30px;
    content: '';
    border-bottom: 1px solid #CCCCCC;
    border-top: 1px solid #CCCCCC;
}

.usa-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin: 0 25% 17px;
}

.usa-article-title {
    margin: 0;
    font-size: 15px;
    font-family: 'Bitter', serif;
    color: black;
    letter-spacing: 1px;
    font-weight: 500;
}

.usa-article-date {
    color: #666666;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    font-size: 12px;
    margin: 0;
}


.daily-special-menu {
    display: flex;
    margin: 0 0 60px;
}

.secondary-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    column-gap: 50px;
    margin-bottom: 70px;
}

.sides-drinks-menu-title {
    display: flex;
    gap: 50px;
}

.sides-title::before,
.drinks-title::before   {
    position: absolute;
    top: 51%;
    right: 70%;
    width: 50%;
    height: 1px;
    content: '';
    background-color: #CCCCCC;
}

.sides-title::after,
.drinks-title::after  {
    position: absolute;
    top: 51%;
    left: 70%;
    width: 50%;
    height: 1px;
    content: '';
    background-color: #CCCCCC;
}

.sides-title,
.drinks-title {
    display: flex;
    align-content: center;
    flex: 1;
    justify-content: center;
    position: relative;
    font-family: "Bitter", serif;
    font-size: 15px;
    color: #DDB78E;
    text-transform: uppercase;
    letter-spacing: 6px;
    z-index: 1;
    overflow: hidden;
    margin: 0;
    ;
    margin-bottom: 20px;
    width: min(100%,450px);
}

.sides {
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    color: #333333;
}

.combo-container {
    display: flex;
    flex-direction: column;
    padding: 16px 20px 0;
    height: 105px;
    border: 2px solid #CCCCCC;
    align-items: center;
    justify-content: center;
    grid-row: 3/5;
}

.combo-container p {
    text-align: center;
}

.combo-title {
    color: #333333;
    font-size: 30px;
    margin: 0 0 6px;
}

.combo-text {
    font-family: 'Merriweather', serif;
    color: #494949;
    font-size: 16px;
    margin: 0 0 22px;
}

@media (max-width:1220px){
    .daily-specia-menul{
        margin: 0 20px 20px;
    }

}

@media (max-width:1170px){

    .options-container{
        display: flex;
        gap: 20px;
        align-self: center;
        align-content: center;
        margin: 0;
    }
    
    .usa-img {
        margin: 0 auto 20px;
    }
    
    .usa-title {
        font-size: 25px;
        margin: 0 10% 10px;
    }
    
    .usa-subtitle {
        font-size: 15px;
        margin: 0 10% 10px;
        font-family: 'merriweather', serif;
        color: #494949;
        line-height: 20px;
    }
    
    .usa-separator {
        height: 7px;
        width: 80%;
        margin: 0 0 10px;
        content: '';
        border-bottom: 1px solid #CCCCCC;
        border-top: 1px solid #CCCCCC;
    }
    
    .usa-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        margin: 0 25% 10px;
    }
    
    .usa-article-title {
        margin: 0;
        font-size: 15px;
        font-family: 'Bitter', serif;
        color: black;
        letter-spacing: 1px;
        font-weight: 500;
    }
    
    .usa-article-date {
        color: #666666;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 1px;
        font-size: 12px;
        margin: 0;
    }
}

@media (max-width:900px){
    .daily-special-menu{
        flex-direction: column;
    }
    .right-info{
        border-left: 2px solid #E2E2E2;
    }

    .left-info{
        border: none;
    }
}

@media (max-width:700px){

    .menu-container{
        margin: 0 20px;
        
    }

    .main-menu{
        grid-template-columns: 1fr;
    }

    .secondary-menu{
        grid-template-columns: 1fr;
    }

    .usa-today-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    
    .usa-img {
        margin: 0 auto 20px;
    }
    
    .usa-title {
        font-size: 34px;
        margin: 0 10% 24px;
    }
    
    .usa-subtitle {
        font-size: 17px;
        margin: 0 10% 40px;
        font-family: 'merriweather', serif;
        color: #494949;
        line-height: 30px;
    }
    
    .usa-separator {
        height: 7px;
        width: 80%;
        margin: 0 0 30px;
        content: '';
        border-bottom: 1px solid #CCCCCC;
        border-top: 1px solid #CCCCCC;
    }
    
    .usa-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        margin: 0 25% 17px;
    }
    
    .usa-article-title {
        margin: 0;
        font-size: 15px;
        font-family: 'Bitter', serif;
        color: black;
        letter-spacing: 1px;
        font-weight: 500;
    }
    
    .usa-article-date {
        color: #666666;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 1px;
        font-size: 12px;
        margin: 0;
    }

    .sides-title{
        grid-row: 1/2;
    }
    
    .sides{
        grid-row: 2/3;
        margin-bottom: 30px;
    }

    .combo-container{
        margin-bottom: 30px;
    }

    .name{
        text-align: center;
    }


}`, "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500&family=Montserrat:wght@300&display=swap');\n\n.menu-container {\n    margin: 0 18vw 0 17.5vw;\n}\n\n.main-menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    margin-bottom: 30px;\n}\n\n.item-img {\n    display: flex;\n    width: clamp(220px,100%,520px);\n    margin: 0 10px;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    margin: 0;\n}\n\n.name {\n    font-size: 30px;\n    color: #333333;\n    font-weight: 300;\n    margin: 0;\n}\n\n.attribute-img-s {\n    width: 28px;\n}\n\n.attribute-img-v {\n    width: 18px;\n}\n\n.attribute-img-sv {\n    width: 50px;\n}\n\n\n.separator {\n    width: 60px;\n    height: 2px;\n    background-color: #494949;\n    margin: 8px auto;\n}\n\n.item-description {\n    font-family: 'Merriweather', serif;\n    font-size: 14px;\n    margin: 0 1.5vw 19.6px;\n    margin-top: 0;\n    color: #494949;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 300;\n}\n\n.menu-header{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1200px;\n    margin: auto;\n    padding-top: 43px;\n}\n\n.black-bar{\n    margin: 0;\n    font-family: 'Montserrat',sans-serif;\n    padding: 13px;\n    width: min(100%,437px);\n    letter-spacing: 5px;\n    text-align: center;\n    font-size: 15px;\n    color: white;\n    margin-bottom: 14px;\n}\n\n.gold-spaced{\n    color: #DDB78E;\n    font-size: 15px;\n    font-family: 'Bitter',serif;\n    letter-spacing: 5px;\n    margin: 0;\n    margin-bottom: 25px ;\n    padding-bottom: 18px;\n}\n\n.option p{\n    font-family: 'Montserrat',sans-serif;\n    font-size: 12px;\n    letter-spacing: 1px;\n    margin: 0;\n}\n\n.options-container{\n    display: flex;\n    gap: 20px;\n    align-self: end;\n    align-content: center;\n    margin: 0;\n    margin-bottom: 16px;\n    margin-right: 25px;\n}\n\n.option{\n    display: flex;\n    gap: 5px;\n}\n\n.options-img-s{\n    width: 20px;\n}\n\n.options-img-v {\n    width: 16px;\n}\n\n.usa-today-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.usa-img {\n    margin: 0 auto 20px;\n}\n\n.usa-title {\n    font-size: 34px;\n    margin: 0 10% 24px;\n}\n\n.usa-subtitle {\n    font-size: 17px;\n    margin: 0 10% 40px;\n    font-family: 'merriweather', serif;\n    color: #494949;\n    line-height: 30px;\n}\n\n.usa-separator {\n    height: 7px;\n    width: 80%;\n    margin: 0 0 30px;\n    content: '';\n    border-bottom: 1px solid #CCCCCC;\n    border-top: 1px solid #CCCCCC;\n}\n\n.usa-link {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-decoration: none;\n    margin: 0 25% 17px;\n}\n\n.usa-article-title {\n    margin: 0;\n    font-size: 15px;\n    font-family: 'Bitter', serif;\n    color: black;\n    letter-spacing: 1px;\n    font-weight: 500;\n}\n\n.usa-article-date {\n    color: #666666;\n    font-family: 'Montserrat', sans-serif;\n    letter-spacing: 1px;\n    font-size: 12px;\n    margin: 0;\n}\n\n\n.daily-special-menu {\n    display: flex;\n    margin: 0 0 60px;\n}\n\n.secondary-menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    column-gap: 50px;\n    margin-bottom: 70px;\n}\n\n.sides-drinks-menu-title {\n    display: flex;\n    gap: 50px;\n}\n\n.sides-title::before,\n.drinks-title::before   {\n    position: absolute;\n    top: 51%;\n    right: 70%;\n    width: 50%;\n    height: 1px;\n    content: '';\n    background-color: #CCCCCC;\n}\n\n.sides-title::after,\n.drinks-title::after  {\n    position: absolute;\n    top: 51%;\n    left: 70%;\n    width: 50%;\n    height: 1px;\n    content: '';\n    background-color: #CCCCCC;\n}\n\n.sides-title,\n.drinks-title {\n    display: flex;\n    align-content: center;\n    flex: 1;\n    justify-content: center;\n    position: relative;\n    font-family: \"Bitter\", serif;\n    font-size: 15px;\n    color: #DDB78E;\n    text-transform: uppercase;\n    letter-spacing: 6px;\n    z-index: 1;\n    overflow: hidden;\n    margin: 0;\n    ;\n    margin-bottom: 20px;\n    width: min(100%,450px);\n}\n\n.sides {\n    text-align: center;\n    font-size: 30px;\n    font-weight: 300;\n    color: #333333;\n}\n\n.combo-container {\n    display: flex;\n    flex-direction: column;\n    padding: 16px 20px 0;\n    height: 105px;\n    border: 2px solid #CCCCCC;\n    align-items: center;\n    justify-content: center;\n    grid-row: 3/5;\n}\n\n.combo-container p {\n    text-align: center;\n}\n\n.combo-title {\n    color: #333333;\n    font-size: 30px;\n    margin: 0 0 6px;\n}\n\n.combo-text {\n    font-family: 'Merriweather', serif;\n    color: #494949;\n    font-size: 16px;\n    margin: 0 0 22px;\n}\n\n@media (max-width:1220px){\n    .daily-specia-menul{\n        margin: 0 20px 20px;\n    }\n\n}\n\n@media (max-width:1170px){\n\n    .options-container{\n        display: flex;\n        gap: 20px;\n        align-self: center;\n        align-content: center;\n        margin: 0;\n    }\n    \n    .usa-img {\n        margin: 0 auto 20px;\n    }\n    \n    .usa-title {\n        font-size: 25px;\n        margin: 0 10% 10px;\n    }\n    \n    .usa-subtitle {\n        font-size: 15px;\n        margin: 0 10% 10px;\n        font-family: 'merriweather', serif;\n        color: #494949;\n        line-height: 20px;\n    }\n    \n    .usa-separator {\n        height: 7px;\n        width: 80%;\n        margin: 0 0 10px;\n        content: '';\n        border-bottom: 1px solid #CCCCCC;\n        border-top: 1px solid #CCCCCC;\n    }\n    \n    .usa-link {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-decoration: none;\n        margin: 0 25% 10px;\n    }\n    \n    .usa-article-title {\n        margin: 0;\n        font-size: 15px;\n        font-family: 'Bitter', serif;\n        color: black;\n        letter-spacing: 1px;\n        font-weight: 500;\n    }\n    \n    .usa-article-date {\n        color: #666666;\n        font-family: 'Montserrat', sans-serif;\n        letter-spacing: 1px;\n        font-size: 12px;\n        margin: 0;\n    }\n}\n\n@media (max-width:900px){\n    .daily-special-menu{\n        flex-direction: column;\n    }\n    .right-info{\n        border-left: 2px solid #E2E2E2;\n    }\n\n    .left-info{\n        border: none;\n    }\n}\n\n@media (max-width:700px){\n\n    .menu-container{\n        margin: 0 20px;\n        \n    }\n\n    .main-menu{\n        grid-template-columns: 1fr;\n    }\n\n    .secondary-menu{\n        grid-template-columns: 1fr;\n    }\n\n    .usa-today-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n    }\n    \n    .usa-img {\n        margin: 0 auto 20px;\n    }\n    \n    .usa-title {\n        font-size: 34px;\n        margin: 0 10% 24px;\n    }\n    \n    .usa-subtitle {\n        font-size: 17px;\n        margin: 0 10% 40px;\n        font-family: 'merriweather', serif;\n        color: #494949;\n        line-height: 30px;\n    }\n    \n    .usa-separator {\n        height: 7px;\n        width: 80%;\n        margin: 0 0 30px;\n        content: '';\n        border-bottom: 1px solid #CCCCCC;\n        border-top: 1px solid #CCCCCC;\n    }\n    \n    .usa-link {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-decoration: none;\n        margin: 0 25% 17px;\n    }\n    \n    .usa-article-title {\n        margin: 0;\n        font-size: 15px;\n        font-family: 'Bitter', serif;\n        color: black;\n        letter-spacing: 1px;\n        font-weight: 500;\n    }\n    \n    .usa-article-date {\n        color: #666666;\n        font-family: 'Montserrat', sans-serif;\n        letter-spacing: 1px;\n        font-size: 12px;\n        margin: 0;\n    }\n\n    .sides-title{\n        grid-row: 1/2;\n    }\n    \n    .sides{\n        grid-row: 2/3;\n        margin-bottom: 30px;\n    }\n\n    .combo-container{\n        margin-bottom: 30px;\n    }\n\n    .name{\n        text-align: center;\n    }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav-bar.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav-bar.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
    position: relative;
    z-index: 10;
}

.section-header {
    height: 62px;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.section-logo {
    display: flex;
    border: 1px solid white;
    position: absolute;
    background-color: black;
    top: 5px;
    left: 0px;
    max-width: 130px;
    align-items: center;
    justify-content: center;
}

.header-logo {
    width: 7vw;
    max-width: 128px;
    height: auto;
}

.header-menu {
    display: flex;
    color: black;
    gap: 10vw;
}

.header-menu a {
    font-size: 21px;
    font-weight: 400;
    color: black;
}

.header-menu a:hover {
    cursor: pointer;
}


.header-frills {
    width: 100%;
    height: 15px;
    background: var(--frills) center center repeat-x;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
}

@media (max-width:700px) {
    .section-header {
        justify-content: space-between;
        margin: 0 20px;
    }
    
    .section-logo{
        position: unset;
        align-content: center;
    }

}`, "",{"version":3,"sources":["webpack://./src/css/nav-bar.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,gDAAgD;IAChD,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI;QACI,8BAA8B;QAC9B,cAAc;IAClB;;IAEA;QACI,eAAe;QACf,qBAAqB;IACzB;;AAEJ","sourcesContent":["header {\n    position: relative;\n    z-index: 10;\n}\n\n.section-header {\n    height: 62px;\n}\n\n.section-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n}\n\n.section-logo {\n    display: flex;\n    border: 1px solid white;\n    position: absolute;\n    background-color: black;\n    top: 5px;\n    left: 0px;\n    max-width: 130px;\n    align-items: center;\n    justify-content: center;\n}\n\n.header-logo {\n    width: 7vw;\n    max-width: 128px;\n    height: auto;\n}\n\n.header-menu {\n    display: flex;\n    color: black;\n    gap: 10vw;\n}\n\n.header-menu a {\n    font-size: 21px;\n    font-weight: 400;\n    color: black;\n}\n\n.header-menu a:hover {\n    cursor: pointer;\n}\n\n\n.header-frills {\n    width: 100%;\n    height: 15px;\n    background: var(--frills) center center repeat-x;\n    border-top: 1px solid #E5E5E5;\n    border-bottom: 1px solid #E5E5E5;\n}\n\n@media (max-width:700px) {\n    .section-header {\n        justify-content: space-between;\n        margin: 0 20px;\n    }\n    \n    .section-logo{\n        position: unset;\n        align-content: center;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    font-family: 'Pathway Gothic One', sans-serif;
    padding: 0;
    width: 100vw;
    height: 100vh;
}

body {
    margin: 0;
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

#content {
    margin: 0;
    width: 100%;
    height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;IACI,6CAA6C;IAC7C,UAAU;IACV,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\nhtml {\n    font-family: 'Pathway Gothic One', sans-serif;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\nbody {\n    margin: 0;\n    font-size: 1.6rem;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n}\n\n#content {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/images/about-images/about-us-hero_large.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/about-images/about-us-hero_large.jpg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/about-us-hero_large.bceb6b9eaabc7df0ce96cf9a17875d00.jpg");

/***/ }),

/***/ "./src/assets/images/about-images/illustration-beet.png":
/*!**************************************************************!*\
  !*** ./src/assets/images/about-images/illustration-beet.png ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/illustration-beet.4197468c19863d875e55eb504f63cd4e.png");

/***/ }),

/***/ "./src/assets/images/about-images/illustration-wheat.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/about-images/illustration-wheat.png ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/illustration-wheat.602d3402eede1223827cae985e1d5d22.png");

/***/ }),

/***/ "./src/assets/images/about-images/our-memories_medium.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/about-images/our-memories_medium.jpg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/our-memories_medium.e57fcea38d544c9fe8c64eef47c1a009.jpg");

/***/ }),

/***/ "./src/assets/images/header-frills.png":
/*!*********************************************!*\
  !*** ./src/assets/images/header-frills.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/header-frills.f3593a05f14de7301ad4a8c09ec03e87.png");

/***/ }),

/***/ "./src/assets/images/home-media/footerVideo.mp4":
/*!******************************************************!*\
  !*** ./src/assets/images/home-media/footerVideo.mp4 ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/footerVideo.abb412a2fe2a2d9b21c8eadb2107ddaf.mp4");

/***/ }),

/***/ "./src/assets/images/home-media/home-buguer.png":
/*!******************************************************!*\
  !*** ./src/assets/images/home-media/home-buguer.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/home-buguer.f4954fce9a25ca0a6d74fdf73e171299.png");

/***/ }),

/***/ "./src/assets/images/home-media/homeVideo.mp4":
/*!****************************************************!*\
  !*** ./src/assets/images/home-media/homeVideo.mp4 ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/homeVideo.f7e45b563dd423a4961972ad3de97ab7.mp4");

/***/ }),

/***/ "./src/assets/images/home-media/icons/farm-to-table.svg":
/*!**************************************************************!*\
  !*** ./src/assets/images/home-media/icons/farm-to-table.svg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/farm-to-table.a164ccdf8904de0823c1a02f835f41a7.svg");

/***/ }),

/***/ "./src/assets/images/home-media/icons/free-high-fives.svg":
/*!****************************************************************!*\
  !*** ./src/assets/images/home-media/icons/free-high-fives.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/free-high-fives.a59cd2216cd18a3901dbf483cc94ce38.svg");

/***/ }),

/***/ "./src/assets/images/home-media/icons/logo-facebook.svg":
/*!**************************************************************!*\
  !*** ./src/assets/images/home-media/icons/logo-facebook.svg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo-facebook.6555562764c3d103f26762c808f8a357.svg");

/***/ }),

/***/ "./src/assets/images/home-media/icons/logo-github.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/home-media/icons/logo-github.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo-github.f0843d48b095543a71d4e4f6809ca9d6.svg");

/***/ }),

/***/ "./src/assets/images/home-media/icons/real-local-food.svg":
/*!****************************************************************!*\
  !*** ./src/assets/images/home-media/icons/real-local-food.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/real-local-food.5b717352c93b6b7759fff7d13e8691b5.svg");

/***/ }),

/***/ "./src/assets/images/home-media/icons/roll-up-your-sleeves.svg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/home-media/icons/roll-up-your-sleeves.svg ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/roll-up-your-sleeves.68bd1b131b3e96fc6b93ef274ce32ae3.svg");

/***/ }),

/***/ "./src/assets/images/home-media/illustration-chicken.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/home-media/illustration-chicken.png ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/illustration-chicken.9a30aa9abe4d9c325cab3cb0cfac23bc.png");

/***/ }),

/***/ "./src/assets/images/home-media/illustration-onion.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/home-media/illustration-onion.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/illustration-onion.0c8075ad11943f63af9030ed5d581f74.png");

/***/ }),

/***/ "./src/assets/images/home-media/illustration-plant.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/home-media/illustration-plant.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/illustration-plant.e8a42aae63adc6ff22d6bb5b348c7011.png");

/***/ }),

/***/ "./src/assets/images/home-media/logo-footer.png":
/*!******************************************************!*\
  !*** ./src/assets/images/home-media/logo-footer.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo-footer.bfe90c28c3c7e904031a28ae5797b07e.png");

/***/ }),

/***/ "./src/assets/images/home-media/logo@2x.png":
/*!**************************************************!*\
  !*** ./src/assets/images/home-media/logo@2x.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo@2x.40f5b0991ea9e33f28413e9a9d6061a0.png");

/***/ }),

/***/ "./src/assets/images/latice.png":
/*!**************************************!*\
  !*** ./src/assets/images/latice.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/latice.f614ce55be586033ee0cafb4de90ab22.png");

/***/ }),

/***/ "./src/assets/images/menu-images/bacon-and-bert.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/menu-images/bacon-and-bert.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/bacon-and-bert.e94948da7bd91210f5fe2330401c0a38.jpg");

/***/ }),

/***/ "./src/assets/images/menu-images/block-burger.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/menu-images/block-burger.jpg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/block-burger.4de4c23540ee7c4eba888cc1a69146af.jpg");

/***/ }),

/***/ "./src/assets/images/menu-images/croque-garcon-burger.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/menu-images/croque-garcon-burger.jpg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/croque-garcon-burger.942d347c2a30543b565d40dc3b277d6e.jpg");

/***/ }),

/***/ "./src/assets/images/menu-images/duck-duck-goose-fries.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/menu-images/duck-duck-goose-fries.jpg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/duck-duck-goose-fries.6af82e732b6ee59f91d30b2f44eb4667.jpg");

/***/ }),

/***/ "./src/assets/images/menu-images/fried-chicken.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/menu-images/fried-chicken.jpg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/fried-chicken.4b6ee7ab368fb6c5ad26b0f3344cd670.jpg");

/***/ }),

/***/ "./src/assets/images/menu-images/icons/black-bar_bg.svg":
/*!**************************************************************!*\
  !*** ./src/assets/images/menu-images/icons/black-bar_bg.svg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/black-bar_bg.84915ab7a9027efb68394b91317620cd.svg");

/***/ }),

/***/ "./src/assets/images/menu-images/icons/spicy-and-vegan-icon.svg":
/*!**********************************************************************!*\
  !*** ./src/assets/images/menu-images/icons/spicy-and-vegan-icon.svg ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/spicy-and-vegan-icon.d8646ea0903e11c9ac9bdf01e16c2ecc.svg");

/***/ }),

/***/ "./src/assets/images/menu-images/icons/spicy-icon.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/menu-images/icons/spicy-icon.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/spicy-icon.d6f938a9dc33370630836250745e40b4.svg");

/***/ }),

/***/ "./src/assets/images/menu-images/icons/vegan-icon.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/menu-images/icons/vegan-icon.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/vegan-icon.d28de69a142d6931d30e8125d839094b.svg");

/***/ }),

/***/ "./src/assets/images/menu-images/illustration_alton-brown.png":
/*!********************************************************************!*\
  !*** ./src/assets/images/menu-images/illustration_alton-brown.png ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/illustration_alton-brown.8700aa2e59c92f54ad65224908be2b8c.png");

/***/ }),

/***/ "./src/assets/images/menu-images/poutine.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/menu-images/poutine.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/poutine.a994efb549c5ff45accc3c1ad104dd77.jpg");

/***/ }),

/***/ "./src/assets/images/menu-images/pulled-pork-roll.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/menu-images/pulled-pork-roll.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/pulled-pork-roll.d65e0ad2b30643c08d56c1fcccd847e2.jpg");

/***/ }),

/***/ "./src/assets/images/menu-images/usa-today.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/menu-images/usa-today.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/usa-today.fe31be419dbaee61a30665e1b1ea1a65.png");

/***/ }),

/***/ "./src/css/about.css":
/*!***************************!*\
  !*** ./src/css/about.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/nav-bar.css":
/*!*****************************!*\
  !*** ./src/css/nav-bar.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nav-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sections_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/nav-bar */ "./src/sections/nav-bar.js");
/* harmony import */ var _sections_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/footer */ "./src/sections/footer.js");
/* harmony import */ var _assets_images_about_images_about_us_hero_large_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/about-images/about-us-hero_large.jpg */ "./src/assets/images/about-images/about-us-hero_large.jpg");
/* harmony import */ var _assets_images_menu_images_icons_black_bar_bg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/menu-images/icons/black-bar_bg.svg */ "./src/assets/images/menu-images/icons/black-bar_bg.svg");
/* harmony import */ var _assets_images_about_images_illustration_wheat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/about-images/illustration-wheat.png */ "./src/assets/images/about-images/illustration-wheat.png");
/* harmony import */ var _assets_images_about_images_illustration_beet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/about-images/illustration-beet.png */ "./src/assets/images/about-images/illustration-beet.png");
/* harmony import */ var _assets_images_about_images_our_memories_medium_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/about-images/our-memories_medium.jpg */ "./src/assets/images/about-images/our-memories_medium.jpg");









function createAbout() {
    const content = document.getElementById('content');

    const hero = document.createElement('section');
    hero.classList.add('hero-about');
    hero.style.background = `url(${_assets_images_about_images_about_us_hero_large_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]}) center center no-repeat`;
    hero.style.backgroundSize = 'cover';
    content.appendChild(hero);

    const titleContent = document.createElement('div');
    titleContent.classList.add('about-title');
    hero.appendChild(titleContent);

    const blackbar = document.createElement('h2');
    blackbar.classList.add('black-bar-about');
    blackbar.style.background = `url(${_assets_images_menu_images_icons_black_bar_bg_svg__WEBPACK_IMPORTED_MODULE_3__["default"]})center center no-repeat`;
    blackbar.style.setProperty('--blackbar-after',`url('${_assets_images_about_images_illustration_wheat_png__WEBPACK_IMPORTED_MODULE_4__["default"]}')`);
    blackbar.innerText = 'PAUL & JESSICA';
    titleContent.appendChild(blackbar);

    const blackBarFooter = document.createElement('p');
    blackBarFooter.classList.add('black-bar-footer');
    blackBarFooter.innerText = `WE'RE PEOPLE WHO CARE ABOUT FOOD`;
    titleContent.appendChild(blackBarFooter);

    const ourHistorySection = document.createElement('section');
    ourHistorySection.classList.add('history-section');
    content.appendChild(ourHistorySection);

    const historyContainer = document.createElement('div');
    historyContainer.innerHTML = `<div class = 'history-title'><p>W</p>
                                  <p class = 'history-title-text'>e’ve been cooking together long enough that we know how to balance each other–comfort meets freshness.</p></div>
                                  <p class = 'history-quote'>ONE OF US SAYS, “JUICY BURGER?” THE OTHER RESPONDS, “YEAH! AND SOME ROASTED BEETS AND GOAT CHEESE!”</p>
                                  <p class = 'history-text'>We met in Metropolitan Community College’s Culinary program, which was a great place to earn our credentials 
                                  and broaden our network of friends, chefs, and fellow foodies. But we both agree our ongoing education has been 
                                  and will always be through travel. We travel whenever we have the chance, and sometimes we’ll plan a trip around 
                                  reservations at a specific restaurant. We’ve had some amazing meals and some great adventures, and it all shows 
                                  up in the food we serve.</p>`,
    historyContainer.classList.add('history-container');
    historyContainer.style.setProperty('--history-after',`url('${_assets_images_about_images_illustration_beet_png__WEBPACK_IMPORTED_MODULE_5__["default"]}')`);
    ourHistorySection.appendChild(historyContainer);

    const overlayHero = document.createElement('section');
    overlayHero.classList.add('memories-hero');
    overlayHero.style.background = `url('${_assets_images_about_images_our_memories_medium_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]}') center center no-repeat`;
    overlayHero.style.backgroundSize = 'cover';
    content.appendChild(overlayHero);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlayHero.appendChild(overlay);

    const overlayText = document.createElement('div');
    overlayText.classList.add('container-memories-text');
    overlayText.innerHTML = '<p>WE SERVE FOOD BASED ON OUR BEST MEMORIES.</p>';
    overlayHero.appendChild(overlayText);

    
}

function loadAbout() {

    const main = document.getElementById('content');
    main.innerHTML = '';

    (0,_sections_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"])();
    createAbout();
    (0,_sections_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sections_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/nav-bar */ "./src/sections/nav-bar.js");
/* harmony import */ var _sections_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/footer */ "./src/sections/footer.js");
/* harmony import */ var _assets_images_home_media_homeVideo_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/home-media/homeVideo.mp4 */ "./src/assets/images/home-media/homeVideo.mp4");
/* harmony import */ var _assets_images_home_media_icons_farm_to_table_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/home-media/icons/farm-to-table.svg */ "./src/assets/images/home-media/icons/farm-to-table.svg");
/* harmony import */ var _assets_images_home_media_home_buguer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/home-media/home-buguer.png */ "./src/assets/images/home-media/home-buguer.png");
/* harmony import */ var _assets_images_home_media_icons_logo_facebook_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/home-media/icons/logo-facebook.svg */ "./src/assets/images/home-media/icons/logo-facebook.svg");
/* harmony import */ var _assets_images_home_media_icons_free_high_fives_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/home-media/icons/free-high-fives.svg */ "./src/assets/images/home-media/icons/free-high-fives.svg");
/* harmony import */ var _assets_images_home_media_icons_roll_up_your_sleeves_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/home-media/icons/roll-up-your-sleeves.svg */ "./src/assets/images/home-media/icons/roll-up-your-sleeves.svg");
/* harmony import */ var _assets_images_home_media_icons_real_local_food_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/home-media/icons/real-local-food.svg */ "./src/assets/images/home-media/icons/real-local-food.svg");
/* harmony import */ var _assets_images_latice_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/latice.png */ "./src/assets/images/latice.png");
/* harmony import */ var _assets_images_home_media_illustration_onion_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/home-media/illustration-onion.png */ "./src/assets/images/home-media/illustration-onion.png");
/* harmony import */ var _assets_images_home_media_illustration_chicken_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/home-media/illustration-chicken.png */ "./src/assets/images/home-media/illustration-chicken.png");
/* harmony import */ var _assets_images_home_media_illustration_plant_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/home-media/illustration-plant.png */ "./src/assets/images/home-media/illustration-plant.png");

















function createHome() {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('main');
    content.appendChild(main);

    const hero = document.createElement('section');
    hero.classList.add('hero');
    main.appendChild(hero);

    const homeVideo = document.createElement('video');
    homeVideo.id = 'home-background';
    homeVideo.preload = 'auto';
    homeVideo.muted = true;
    homeVideo.loop = true;
    homeVideo.autoplay = true;
    hero.appendChild(homeVideo);

    const homeBackgroundVideo = document.createElement('source');
    homeBackgroundVideo.src = _assets_images_home_media_homeVideo_mp4__WEBPACK_IMPORTED_MODULE_2__["default"];
    homeBackgroundVideo.type = 'video/mp4';
    homeVideo.appendChild(homeBackgroundVideo);

    const homeTitleLogoContainer = document.createElement('div');
    homeTitleLogoContainer.classList.add('container');
    hero.appendChild(homeTitleLogoContainer);

    const homeTitleLogo = document.createElement('img');
    homeTitleLogo.src = _assets_images_home_media_icons_farm_to_table_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
    homeTitleLogo.classList.add('street-food');
    homeTitleLogoContainer.appendChild(homeTitleLogo);

    const homeCallout = document.createElement('section');
    homeCallout.classList.add('home-callouts');
    homeCallout.style.setProperty('--home-frills',`url('${_assets_images_latice_png__WEBPACK_IMPORTED_MODULE_9__["default"]}')`);
    main.appendChild(homeCallout);

    const dailySpecialContainer = document.createElement('div');
    dailySpecialContainer.classList.add('daily-special');
    homeCallout.appendChild(dailySpecialContainer);

    const burguerLink = document.createElement('a');
    burguerLink.classList.add('left-info');
    burguerLink.href = "https://www.facebook.com/Block-16-274838819236148";
    burguerLink.target = '_blank';
    burguerLink.innerHTML = `<img src='${_assets_images_home_media_home_buguer_png__WEBPACK_IMPORTED_MODULE_4__["default"]}'>`;
    dailySpecialContainer.appendChild(burguerLink);

    const rightInfoContainer = document.createElement('div');
    rightInfoContainer.classList.add('right-info');
    dailySpecialContainer.appendChild(rightInfoContainer);

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = `<h4>DAILY SPECIAL</h4>
                             <p>We serve a new special every day. Head over to Facebook and 
                             see what we’re serving today.</p>`;
    rightInfoContainer.appendChild(description);


    const fbCallout = document.createElement('a');
    fbCallout.classList.add('fb-callout');
    fbCallout.href = 'https://www.facebook.com/Block-16-274838819236148';
    fbCallout.target = '_blank';
    fbCallout.innerHTML = `FOLLOW US ON FACEBOOK TO SEE DAILY SPECIALS IN YOUR "FEED"! <img src = "${_assets_images_home_media_icons_logo_facebook_svg__WEBPACK_IMPORTED_MODULE_5__["default"]}">`;
    rightInfoContainer.appendChild(fbCallout);

    const oneThird = document.createElement('div');
    oneThird.classList.add('one-third');
    homeCallout.appendChild(oneThird);

    const column1 = document.createElement('div');
    column1.classList.add('column-home');
    column1.style.setProperty('--onionBg',`url('${_assets_images_home_media_illustration_onion_png__WEBPACK_IMPORTED_MODULE_10__["default"]}')`);
    oneThird.appendChild(column1);

    const titleImg1 = document.createElement('img');
    titleImg1.src = _assets_images_home_media_icons_free_high_fives_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
    titleImg1.classList.add('first-img');
    column1.appendChild(titleImg1);

    const columnP1 = document.createElement('p');
    columnP1.innerText = `Things get hoppin' around lunchtime. We suggest checking out our menu before you come in.`;
    column1.append(columnP1);

    const columnA1 = document.createElement('a');
    columnA1.classList.add('menu-link');
    columnA1.innerText = 'SEE MENU';
    column1.appendChild(columnA1);

    const column2 = document.createElement('div');
    column2.classList.add('column-home');
    oneThird.appendChild(column2);

    const titleImg2 = document.createElement('img');
    titleImg2.src = _assets_images_home_media_icons_roll_up_your_sleeves_svg__WEBPACK_IMPORTED_MODULE_7__["default"];
    titleImg2.classList.add('second-img');
    column2.appendChild(titleImg2);

    const columnP2 = document.createElement('p');
    columnP2.innerText = `Our street-style food is bold, imaginative, and deliciously messy. Grab some napkins and eat up.`;
    column2.style.setProperty('--chickenBg',`url('${_assets_images_home_media_illustration_chicken_png__WEBPACK_IMPORTED_MODULE_11__["default"]}')`);
    column2.append(columnP2);

    const columnA2 = document.createElement('a');
    columnA2.innerText = 'SEE LOCATION';
    columnA2.href = 'https://www.google.com/maps/place/Block+16/@41.2574411,-95.9377708,17z/data=!3m1!4b1!4m6!3m5!1s0x87938fad9a1ac4c7:0x2255528dd3e9b8fd!8m2!3d41.2574411!4d-95.9377708!16s%2Fg%2F11gzlymkl?entry=ttu';
    columnA2.target = '_blank';
    column2.appendChild(columnA2);

    const column3 = document.createElement('div');
    column3.classList.add('column-home');
    column3.style.setProperty('--beetBg',`url('${_assets_images_home_media_illustration_plant_png__WEBPACK_IMPORTED_MODULE_12__["default"]}')`);
    oneThird.appendChild(column3);

    const titleImg3 = document.createElement('img');
    titleImg3.src = _assets_images_home_media_icons_real_local_food_svg__WEBPACK_IMPORTED_MODULE_8__["default"];
    titleImg3.classList.add('third-img');
    column3.appendChild(titleImg3);

    const columnP3 = document.createElement('p');
    columnP3.innerText = `We use locally sourced ingredients, avoid preservatives whenever possible, and offer vegan-friendly dishes.`;
    column3.append(columnP3);

    const columnA3 = document.createElement('a');
    columnA3.classList.add('about-link');
    columnA3.innerText = 'ABOUT US';
    column3.appendChild(columnA3);

}

function loadHome() {
    
    const main = document.getElementById('content');
    main.innerHTML = '';

    (0,_sections_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"])();
    createHome();
    (0,_sections_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sections_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/nav-bar */ "./src/sections/nav-bar.js");
/* harmony import */ var _sections_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/footer */ "./src/sections/footer.js");
/* harmony import */ var _assets_images_menu_images_icons_black_bar_bg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/menu-images/icons/black-bar_bg.svg */ "./src/assets/images/menu-images/icons/black-bar_bg.svg");
/* harmony import */ var _assets_images_menu_images_illustration_alton_brown_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/menu-images/illustration_alton-brown.png */ "./src/assets/images/menu-images/illustration_alton-brown.png");
/* harmony import */ var _assets_images_menu_images_icons_spicy_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/menu-images/icons/spicy-icon.svg */ "./src/assets/images/menu-images/icons/spicy-icon.svg");
/* harmony import */ var _assets_images_menu_images_icons_vegan_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/menu-images/icons/vegan-icon.svg */ "./src/assets/images/menu-images/icons/vegan-icon.svg");
/* harmony import */ var _assets_images_menu_images_icons_spicy_and_vegan_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/menu-images/icons/spicy-and-vegan-icon.svg */ "./src/assets/images/menu-images/icons/spicy-and-vegan-icon.svg");
/* harmony import */ var _assets_images_menu_images_usa_today_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/menu-images/usa-today.png */ "./src/assets/images/menu-images/usa-today.png");
/* harmony import */ var _assets_images_home_media_home_buguer_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/home-media/home-buguer.png */ "./src/assets/images/home-media/home-buguer.png");
/* harmony import */ var _assets_images_home_media_icons_logo_facebook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/home-media/icons/logo-facebook.svg */ "./src/assets/images/home-media/icons/logo-facebook.svg");
/* harmony import */ var _assets_images_menu_images_pulled_pork_roll_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/menu-images/pulled-pork-roll.jpg */ "./src/assets/images/menu-images/pulled-pork-roll.jpg");
/* harmony import */ var _assets_images_menu_images_fried_chicken_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/menu-images/fried-chicken.jpg */ "./src/assets/images/menu-images/fried-chicken.jpg");
/* harmony import */ var _assets_images_menu_images_croque_garcon_burger_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/menu-images/croque-garcon-burger.jpg */ "./src/assets/images/menu-images/croque-garcon-burger.jpg");
/* harmony import */ var _assets_images_menu_images_block_burger_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/images/menu-images/block-burger.jpg */ "./src/assets/images/menu-images/block-burger.jpg");
/* harmony import */ var _assets_images_menu_images_bacon_and_bert_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/images/menu-images/bacon-and-bert.jpg */ "./src/assets/images/menu-images/bacon-and-bert.jpg");
/* harmony import */ var _assets_images_menu_images_poutine_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/images/menu-images/poutine.jpg */ "./src/assets/images/menu-images/poutine.jpg");
/* harmony import */ var _assets_images_menu_images_duck_duck_goose_fries_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/images/menu-images/duck-duck-goose-fries.jpg */ "./src/assets/images/menu-images/duck-duck-goose-fries.jpg");



















function createMenuItem(img, title, attribute, description) {

    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let itemImg = document.createElement('img');
    itemImg.src = img;
    itemImg.classList.add('item-img');
    menuItem.appendChild(itemImg);

    let itemTitle = document.createElement('div');
    itemTitle.classList.add('title');
    menuItem.appendChild(itemTitle);

    let itemName = document.createElement('h4');
    itemName.classList.add('name');
    itemName.innerText = title;
    itemTitle.appendChild(itemName);

    if (attribute === 'spicy') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-s');
        attribute.src = _assets_images_menu_images_icons_spicy_icon_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
        itemTitle.appendChild(attribute);
    } else if (attribute === 'vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-v');
        attribute.src = _assets_images_menu_images_icons_vegan_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
        itemTitle.appendChild(attribute);
    } else if (attribute === 'spicy-vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-sv');
        attribute.src = _assets_images_menu_images_icons_spicy_and_vegan_icon_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
        itemTitle.appendChild(attribute);
    } else {

    }

    let separator = document.createElement('hr');
    separator.classList.add('separator');
    menuItem.appendChild(separator);

    let itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.innerText = description;
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function createMenuItemNoImg(title, attribute, description) {

    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let itemTitle = document.createElement('div');
    itemTitle.classList.add('title');
    menuItem.appendChild(itemTitle);

    let itemName = document.createElement('h4');
    itemName.classList.add('name');
    itemName.innerHTML = title;
    itemTitle.appendChild(itemName);

    if (attribute === 'spicy') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-s');
        attribute.src = _assets_images_menu_images_icons_spicy_icon_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
        itemTitle.appendChild(attribute);
    } else if (attribute === 'vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-v');
        attribute.src = _assets_images_menu_images_icons_vegan_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
        itemTitle.appendChild(attribute);
    } else if (attribute === 'spicy-vegan') {
        let attribute = document.createElement('img');
        attribute.classList.add('attribute-img-sv');
        attribute.src = _assets_images_menu_images_icons_spicy_and_vegan_icon_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
        itemTitle.appendChild(attribute);
    } else {

    }

    let separator = document.createElement('hr');
    separator.classList.add('separator');
    menuItem.appendChild(separator);

    let itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.innerText = description;
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function createMenu() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuContainer.appendChild(menuHeader);

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('black-bar');
    menuTitle.style.background = `url('${_assets_images_menu_images_icons_black_bar_bg_svg__WEBPACK_IMPORTED_MODULE_2__["default"]}') center center no-repeat`;
    menuTitle.innerText = 'MENU';
    menuHeader.appendChild(menuTitle);

    const featuredItems = document.createElement('h4');
    featuredItems.classList.add('gold-spaced');
    featuredItems.innerText = 'FEATURED ITEMS';
    menuHeader.appendChild(featuredItems);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');
    menuHeader.appendChild(optionsContainer);

    const veganOption = document.createElement('div');
    veganOption.classList.add('option');
    veganOption.innerHTML = `<img class = 'options-img-v' src='${_assets_images_menu_images_icons_vegan_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"]}'><p class = 'vegan-text'>Vegan Option</p>`;
    optionsContainer.appendChild(veganOption);

    const spicyOption = document.createElement('div');
    spicyOption.classList.add('option');
    spicyOption.innerHTML = `<img class = 'options-img-s' src='${_assets_images_menu_images_icons_spicy_icon_svg__WEBPACK_IMPORTED_MODULE_4__["default"]}'><p class = 'vegan-text'>Available Spicy</p>`;
    optionsContainer.appendChild(spicyOption);

    const mainMenuContainer = document.createElement('div');
    mainMenuContainer.classList.add('main-menu');
    menuContainer.appendChild(mainMenuContainer);

    mainMenuContainer.appendChild(createMenuItem(_assets_images_menu_images_pulled_pork_roll_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
        'PULLED PORK ROLL',
        'spicy',
        'Slow-braised Truebridge Farm pork served on a sourdough hoagie with Swiss cheese, mayo, caramelized onion, mustard, and pickles.'));
    mainMenuContainer.appendChild(createMenuItem(_assets_images_menu_images_fried_chicken_jpg__WEBPACK_IMPORTED_MODULE_11__["default"],
        'PC FARM FRIED CHICKEN THIGHS',
        'spicy',
        'Order yourself 2, 3, or 4 pieces of super-juicy PCF buttermilk soaked, crispy chicken. So tasty! Not to be missed. Try it "Nashville hot"!'));
    mainMenuContainer.appendChild(createMenuItem(_assets_images_menu_images_croque_garcon_burger_jpg__WEBPACK_IMPORTED_MODULE_12__["default"],
        'CROQUE GARCON BURGER',
        '', `It rhymes with "smoke cars on," and it's a 1/3 pound Jon's Naturals burger with cheese, ham, a sunny-side-up Evetta Farms egg, green onion, mustard, and truffle mayo on a Ciabatta roll.`));

    const usaTodayContainer = document.createElement('div');
    usaTodayContainer.classList.add('usa-today-container');
    usaTodayContainer.style.background = `url('${_assets_images_menu_images_illustration_alton_brown_png__WEBPACK_IMPORTED_MODULE_3__["default"]}') center center no-repeat`;
    mainMenuContainer.appendChild(usaTodayContainer);

    const usaTodayImg = document.createElement('img');
    usaTodayImg.classList.add('usa-img');
    usaTodayImg.src = _assets_images_menu_images_usa_today_png__WEBPACK_IMPORTED_MODULE_7__["default"];
    usaTodayContainer.appendChild(usaTodayImg);

    const usaTodayTitle = document.createElement('p');
    usaTodayTitle.classList.add('usa-title');
    usaTodayTitle.innerText = 'BROWN CALLS THE CROQUE GARCON HIS FAVORITE HAMBURGER IN THE COUNTRY.';
    usaTodayContainer.appendChild(usaTodayTitle);

    const usaTodaySubTitle = document.createElement('p');
    usaTodaySubTitle.classList.add('usa-subtitle');
    usaTodaySubTitle.innerText = `He says it has the perfect meat-to-bun ratio. "They've turned the hamburger into high art."`;
    usaTodayContainer.appendChild(usaTodaySubTitle);

    const usaTodaySeparator = document.createElement('div');
    usaTodaySeparator.classList.add('usa-separator');
    usaTodayContainer.appendChild(usaTodaySeparator);

    const usaTodayLink = document.createElement('a');
    usaTodayLink.classList.add('usa-link');
    usaTodayLink.href = 'https://www.usatoday.com/story/travel/destinations/10greatplaces/2015/06/26/alton-brown-restaurant-recommendations/29277793/';
    usaTodayLink.target = '_blank';
    usaTodayLink.innerHTML = `<p class = 'usa-article-title'>Alton Brown's favorite restaurants from a cross-country trip</p><br><p class = 'usa-article-date'>June 26, 2015</p>`
    usaTodayContainer.appendChild(usaTodayLink);

    mainMenuContainer.appendChild(createMenuItem(_assets_images_menu_images_block_burger_jpg__WEBPACK_IMPORTED_MODULE_13__["default"],
        'BLOCK BURGER',
        'vegan', `Earn your street cred by diving into this 1/3 pound Jon's Naturals burger served with gouda cheese, mayo, mustard, ketchup, lettuce, tomato, onion, and pickle.`));
    mainMenuContainer.appendChild(createMenuItem(_assets_images_menu_images_bacon_and_bert_jpg__WEBPACK_IMPORTED_MODULE_14__["default"],
        'BACON & BRIE',
        '', `Thick-cut bacon, Brie, seasonal fruit butter, and arugula served on Le Quartier bread.`));
    mainMenuContainer.appendChild(createMenuItem(_assets_images_menu_images_poutine_jpg__WEBPACK_IMPORTED_MODULE_15__["default"],
        'POUTINE',
        '', `A gift from north of the border. French fries topped with cheese curds and smothered in beef gravy.`));
    mainMenuContainer.appendChild(createMenuItem(_assets_images_menu_images_duck_duck_goose_fries_jpg__WEBPACK_IMPORTED_MODULE_16__["default"],
        'DUCK DUCK GOOSE FRIES',
        '', `Duck confit, crispy skin, cheese curds, mayo, gravy, and gooseberry gastrique — yeah, you read that right — over a basket of fries.`));


    const dailySpecialContainer = document.createElement('div');
    dailySpecialContainer.classList.add('daily-special-menu');
    menuContainer.appendChild(dailySpecialContainer);

    const burguerLink = document.createElement('a');
    burguerLink.classList.add('left-info');
    burguerLink.href = "https://www.facebook.com/Block-16-274838819236148";
    burguerLink.target = '_blank';
    burguerLink.innerHTML = `<img src= '${_assets_images_home_media_home_buguer_png__WEBPACK_IMPORTED_MODULE_8__["default"]}'>`;
    dailySpecialContainer.appendChild(burguerLink);

    const rightInfoContainer = document.createElement('div');
    rightInfoContainer.classList.add('right-info');
    dailySpecialContainer.appendChild(rightInfoContainer);

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = `<h4>DAILY SPECIAL</h4>
    <p>We serve a new special every day. Head over to Facebook and 
    see what we’re serving today.</p>`;
    rightInfoContainer.appendChild(description);

    const fbCallout = document.createElement('a');
    fbCallout.classList.add('fb-callout');
    fbCallout.href = 'https://www.facebook.com/Block-16-274838819236148';
    fbCallout.target = '_blank';
    fbCallout.innerHTML = `FOLLOW US ON FACEBOOK TO SEE DAILY SPECIALS IN YOUR "FEED"! <img src = "${_assets_images_home_media_icons_logo_facebook_svg__WEBPACK_IMPORTED_MODULE_9__["default"]}">`;
    rightInfoContainer.appendChild(fbCallout);

    const secondaryMenu = document.createElement('div');
    secondaryMenu.classList.add('secondary-menu');
    menuContainer.appendChild(secondaryMenu);


    secondaryMenu.appendChild(createMenuItemNoImg('DUCK DUCK GOOSE FRIES',
        'spicy-vegan', `Duck confit, crispy skin, cheese curds, mayo, gravy, and gooseberry gastrique — yeah, you read that right — over a basket of fries.`));
    secondaryMenu.appendChild(createMenuItemNoImg('POUTINE BURRITO',
        'vegan', `Roasted brisket, regional curds, tots, B16 gravy, malt vinegar aioli all wrapped up in a flour tortilla.`));
    secondaryMenu.appendChild(createMenuItemNoImg('BELGIAN SMASH<sup>2</sup> BURGER',
        '', `Double smashed wagyu patties, brown butter compound melt, raisin jam, Swiss, onions, bacon, and mayo on a potato bun.`));
    secondaryMenu.appendChild(createMenuItemNoImg('B16 HOUSE SALAD',
        'vegan', `Choose grilled chicken, tempeh, seitan, or wild sockeye salmon (+3.00). We'll mix it up with Spring mix, pickled red onion, kalamatas, queso fresco, and local veggies.`));
    secondaryMenu.appendChild(createMenuItemNoImg('3 HAPPINESS BURGER',
        '', `1/3 lb. patty, crab rangoon cream cheese, stir fry slaw, green onion, mayo, sweet and spicy chili on a sesame bun.`));
    secondaryMenu.appendChild(createMenuItemNoImg('DRAGON WRAP',
        'vegan', `Grilled naan wrapped around pickled veggie slaw, hummus, arugula, fries, and dragon sauce. Available with PCF chicken, seitan, tempeh, or wild sockeye salmon (+3.00).`));
    secondaryMenu.appendChild(createMenuItemNoImg('FEATURED GRILLED CHEESE SANDWICH',
        '', `Check out our fully loaded, super-tasty, daily grilled cheese creation.`));
    secondaryMenu.appendChild(createMenuItemNoImg('RENEGADE CHICKENWICH',
        'spicy', `Fried PCF chicken, 7 pepper Nashville extra hot, buttermilk dill slaw, habanero pickles, mayo on a sesame seed bun. (Available not spicy)`));
    secondaryMenu.appendChild(createMenuItemNoImg('MACKRIBEO',
        '', `House baby back rib and beef patty, agrodolce bbq, onion rings, pickle, and mayo. (Available vegan)`));
    secondaryMenu.appendChild(createMenuItemNoImg('DRAGON FRIES',
        'vegan', `Spicy dragon sauce, cheese curds, scallion, and a crushed fortune cookie.`));
    secondaryMenu.appendChild(createMenuItemNoImg(`POP'S FRIES`,
        '', `Fries topped with griddled cheese curds, macerated raisin, brown sugar, brown butter pork, bacon, gooseberry gastrique, mayo, and crushed Luken wafer.`));
    secondaryMenu.appendChild(createMenuItemNoImg(`OMAHA FRIES`,
        '', `Topped with wagyu sloppy joe, griddled cheese curds, house ranch, Dorothy Lynch, scallion, and Doritos.`));


    const sidesDrinksMenu = document.createElement('div');
    sidesDrinksMenu.classList.add('secondary-menu');
    menuContainer.appendChild(sidesDrinksMenu);

    const sidesTitle = document.createElement('h4');
    sidesTitle.classList.add('sides-title');
    sidesTitle.innerHTML = 'SIDES';
    sidesDrinksMenu.appendChild(sidesTitle);

    const drinksTitle = document.createElement('h4');
    drinksTitle.classList.add('drinks-title');
    drinksTitle.innerHTML = 'DRINKS';
    sidesDrinksMenu.appendChild(drinksTitle);

    const sides = document.createElement('div');
    sides.innerHTML = `SEASONED FRIES<br>SWEET POTATO FRIES<br>SIDE SALAD`;
    sides.classList.add('sides');
    sidesDrinksMenu.appendChild(sides);

    const makeCombo = document.createElement('div');
    makeCombo.classList.add('combo-container');
    sidesDrinksMenu.appendChild(makeCombo);

    const comboTitle = document.createElement('p');
    comboTitle.classList.add('combo-title');
    comboTitle.innerText = 'MAKE IT A COMBO';
    makeCombo.appendChild(comboTitle);

    const comboText = document.createElement('p');
    comboText.classList.add('combo-text');
    comboText.innerText = '+ Add a soda and seasoned French fries to any entrée.';
    makeCombo.appendChild(comboText);

    sidesDrinksMenu.appendChild(createMenuItemNoImg(`SODA`,
        '', `We serve Coke, Diet Coke, Cherry Coke, Ginger Ale, blue Powerade, and iced tea.`));
    sidesDrinksMenu.appendChild(createMenuItemNoImg(`BEER`,
        '', `Be sure to check our beer list when you visit. We are proud to feature local breweries, including Lucky Bucket, Zipline, Thunderhead, Empyrean, Peace Tree, Nebraska Brewing, Kinkaider, and Brickway Breweries.`));
    sidesDrinksMenu.appendChild(createMenuItemNoImg(`WINE`,
        '', `Be sure to check our wine list when you visit. We serve a variety of wines, including cabernet sauvignon, merlot, pinot noir, chardonnay, sauvignon blanc, and riesling.`));

}

function loadMenu() {

    const main = document.getElementById('content');
    main.innerHTML = '';

    (0,_sections_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"])();
    createMenu();
    (0,_sections_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/sections/footer.js":
/*!********************************!*\
  !*** ./src/sections/footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_home_media_footerVideo_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/home-media/footerVideo.mp4 */ "./src/assets/images/home-media/footerVideo.mp4");
/* harmony import */ var _assets_images_home_media_icons_logo_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/home-media/icons/logo-github.svg */ "./src/assets/images/home-media/icons/logo-github.svg");
/* harmony import */ var _assets_images_home_media_logo_footer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/home-media/logo-footer.png */ "./src/assets/images/home-media/logo-footer.png");




function createFooter() {
    const content = document.getElementById('content');

    const footer = document.createElement('footer');
    content.appendChild(footer);

    const footerBackground = document.createElement('video');
    footerBackground.id = 'footer-background';
    footerBackground.preload = 'auto';
    footerBackground.autoplay = true;
    footerBackground.muted = true;
    footerBackground.loop = true;
    footer.appendChild(footerBackground);

    const footerVideo = document.createElement('source');
    footerVideo.src = _assets_images_home_media_footerVideo_mp4__WEBPACK_IMPORTED_MODULE_0__["default"];
    footerVideo.type = 'video/mp4';
    footerBackground.appendChild(footerVideo);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('info-container');
    footer.appendChild(footerContainer);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('column');
    footerContainer.appendChild(infoContainer);

    const infoTitle = document.createElement('h4');
    infoTitle.id = 'logo-footer';
    infoTitle.style.setProperty('--b16Footer',`url('${_assets_images_home_media_logo_footer_png__WEBPACK_IMPORTED_MODULE_2__["default"]}')`);
    infoTitle.innerText = 'HOURS OF OPERATION';
    infoContainer.appendChild(infoTitle);

    const storeHours = document.createElement('div');
    storeHours.classList.add('store-hours');
    infoContainer.appendChild(storeHours);

    const hoursP1 = document.createElement('p');
    hoursP1.innerHTML = '<b>MONDAY - SATURDAY</b>: 11 A.M. to 2 P.M.';
    storeHours.appendChild(hoursP1);

    const hoursP2 = document.createElement('p');
    hoursP2.innerHTML = '<b>THURSDAY - SATURDAY</b>: 5 P.M. to 8 P.M.';
    storeHours.appendChild(hoursP2);

    const storeLocation = document.createElement('div');
    storeLocation.classList.add('store-location');
    infoContainer.appendChild(storeLocation);

    const locationP = document.createElement('p');
    locationP.innerHTML = '1611 Farnam Street<br>Omaha, Nebraska 68106<br>block16info@gmail.com';
    storeLocation.appendChild(locationP);

    const paymentInfo = document.createElement('div');
    paymentInfo.innerHTML = 'Eat in or take out. We accept credit cards, personal checks, and cold-hard cash.';
    paymentInfo.classList.add('payment-info');
    infoContainer.appendChild(paymentInfo);

    const disclaimer = document.createElement('div');
    disclaimer.classList.add('disclaimer');
    disclaimer.innerHTML=`Disclaimer: This mock-up web page has been created for educational and portfolio 
                          demonstration purposes only. It is an imitation of a real restaurant page, and 
                          all the content and imagery used are placeholders or taken from the original 
                          website purely for design and presentation reasons.
                          Please note that this mock-up web page is not affiliated with, endorsed by, 
                          or associated with the actual restaurant in any way. The use of the restaurant's 
                          name, logo, or any other branding elements is purely for visual representation and 
                          does not indicate any official connection.
                          <br>
                          <br>
                          I respect the intellectual property of the original restaurant, and any use of their 
                          content on this mock-up web page is not intended to infringe upon their rights. If 
                          you are the owner of the original restaurant and have any concerns about the usage 
                          of your content, please feel free to <a href = 'https://github.com/RaulUrdanetaG' 
                          target = '_blank'>contact me</a>, and i will promptly address your 
                          concerns.
                          <br>
                          <br>
                          You can see the original page <a href = 'https://block16omaha.com/' target='_blank'>Here</a>`;
    infoContainer.appendChild(disclaimer);

    const websiteInfo = document.createElement('div');
    websiteInfo.classList.add('creator-info');
    websiteInfo.innerHTML=`<h3>Made by </h3><a href="https://github.com/RaulUrdanetaG" target="_blank"><img src="${_assets_images_home_media_icons_logo_github_svg__WEBPACK_IMPORTED_MODULE_1__["default"]}" alt="Github logo"></a><h3><a href="https://github.com/RaulUrdanetaG" target="_blank">Raul Urdaneta</a></h3>`;
    footerContainer.appendChild(websiteInfo);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/sections/nav-bar.js":
/*!*********************************!*\
  !*** ./src/sections/nav-bar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_home_media_logo_2x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/home-media/logo@2x.png */ "./src/assets/images/home-media/logo@2x.png");
/* harmony import */ var _assets_images_header_frills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/header-frills.png */ "./src/assets/images/header-frills.png");



function createNavBar() {
    const content = document.getElementById('content');

    const header = document.createElement('header');
    content.appendChild(header);

    const navBar = document.createElement('div');
    navBar.classList.add('section-header');
    header.appendChild(navBar);

    const sectionHeaderLogo = document.createElement('div');
    sectionHeaderLogo.classList.add('section-logo');
    navBar.appendChild(sectionHeaderLogo);
    
    const headerLogo = document.createElement('img');
    headerLogo.classList.add('header-logo');
    headerLogo.src = _assets_images_home_media_logo_2x_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    sectionHeaderLogo.appendChild(headerLogo);

    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    navBar.appendChild(headerMenu);

    const homeTitle = document.createElement('a');
    homeTitle.classList.add('home-link');
    homeTitle.innerText = 'HOME';
    headerMenu.appendChild(homeTitle);

    const menutTitle = document.createElement('a');
    menutTitle.classList.add('menu-link')
    menutTitle.innerText = 'MENU';
    headerMenu.appendChild(menutTitle);

    const aboutTitle = document.createElement('a');
    aboutTitle.classList.add('about-link');
    aboutTitle.innerText = 'ABOUT';
    headerMenu.appendChild(aboutTitle);

    const frills = document.createElement('div');
    frills.classList.add('header-frills');
    frills.style.setProperty('--frills',`url(${_assets_images_header_frills_png__WEBPACK_IMPORTED_MODULE_1__["default"]})`);
    header.appendChild(frills);

    sectionHeaderLogo.appendChild(headerLogo);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavBar);

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/style.css */ "./src/css/style.css");
/* harmony import */ var _src_css_nav_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/css/nav-bar.css */ "./src/css/nav-bar.css");
/* harmony import */ var _src_css_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _src_css_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/css/home.css */ "./src/css/home.css");
/* harmony import */ var _src_css_menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _src_css_about_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/css/about.css */ "./src/css/about.css");
/* harmony import */ var _src_pages_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");











(0,_src_pages_home__WEBPACK_IMPORTED_MODULE_6__["default"])();

function checkButtons(){
    
    const links = Array.from(document.querySelectorAll('a'));
    
    links.forEach((button) =>{
        button.addEventListener('click',()=>{
            if (button.classList.contains('menu-link')) {
                (0,_pages_menu__WEBPACK_IMPORTED_MODULE_7__["default"])();
                window.scroll(0, 0);
                checkButtons();
            }else if (button.classList.contains('home-link')) {
                (0,_src_pages_home__WEBPACK_IMPORTED_MODULE_6__["default"])();
                window.scroll(0, 0);
                checkButtons();
            }else if (button.classList.contains('about-link')) {
                (0,_pages_about__WEBPACK_IMPORTED_MODULE_8__["default"])();
                window.scroll(0, 0);
                checkButtons();
            }
        })
    })
}


checkButtons();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLDZDQUE2QztBQUNoSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZ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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsT0FBTyxtRkFBbUYsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsT0FBTyxtRkFBbUYsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLCtGQUErRixJQUFJLDhDQUE4QyxxQkFBcUIsOEJBQThCLEdBQUcsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLHdCQUF3QixxQkFBcUIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsNEJBQTRCLDBCQUEwQixHQUFHLGVBQWUsb0JBQW9CLHFDQUFxQyxxQkFBcUIsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQixnQkFBZ0IsR0FBRyxXQUFXLHNCQUFzQixxQkFBcUIsdUJBQXVCLGdCQUFnQixHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLGtCQUFrQixrQkFBa0Isa0JBQWtCLGdDQUFnQyx1QkFBdUIsR0FBRyx1QkFBdUIseUNBQXlDLHNCQUFzQiw2QkFBNkIsb0JBQW9CLHFCQUFxQix5QkFBeUIsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0IsNkJBQTZCLDBCQUEwQix3QkFBd0IsbUJBQW1CLHdCQUF3QixHQUFHLGVBQWUsZ0JBQWdCLDJDQUEyQyxvQkFBb0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsc0JBQXNCLG1CQUFtQiwwQkFBMEIsR0FBRyxpQkFBaUIscUJBQXFCLHNCQUFzQixrQ0FBa0MsMEJBQTBCLGdCQUFnQiwyQkFBMkIsMkJBQTJCLEdBQUcsY0FBYywyQ0FBMkMsc0JBQXNCLDBCQUEwQixnQkFBZ0IsR0FBRyx1QkFBdUIsb0JBQW9CLGdCQUFnQixzQkFBc0IsNEJBQTRCLGdCQUFnQiwwQkFBMEIseUJBQXlCLEdBQUcsWUFBWSxvQkFBb0IsZUFBZSxHQUFHLG1CQUFtQixrQkFBa0IsR0FBRyxvQkFBb0Isa0JBQWtCLEdBQUcsMEJBQTBCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsR0FBRyxjQUFjLDBCQUEwQixHQUFHLGdCQUFnQixzQkFBc0IseUJBQXlCLEdBQUcsbUJBQW1CLHNCQUFzQix5QkFBeUIseUNBQXlDLHFCQUFxQix3QkFBd0IsR0FBRyxvQkFBb0Isa0JBQWtCLGlCQUFpQix1QkFBdUIsa0JBQWtCLHVDQUF1QyxvQ0FBb0MsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDRCQUE0Qix5QkFBeUIsR0FBRyx3QkFBd0IsZ0JBQWdCLHNCQUFzQixtQ0FBbUMsbUJBQW1CLDBCQUEwQix1QkFBdUIsR0FBRyx1QkFBdUIscUJBQXFCLDRDQUE0QywwQkFBMEIsc0JBQXNCLGdCQUFnQixHQUFHLDJCQUEyQixvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLHVCQUF1QiwwQkFBMEIsR0FBRyw4QkFBOEIsb0JBQW9CLGdCQUFnQixHQUFHLG9EQUFvRCx5QkFBeUIsZUFBZSxpQkFBaUIsaUJBQWlCLGtCQUFrQixrQkFBa0IsZ0NBQWdDLEdBQUcsaURBQWlELHlCQUF5QixlQUFlLGdCQUFnQixpQkFBaUIsa0JBQWtCLGtCQUFrQixnQ0FBZ0MsR0FBRyxrQ0FBa0Msb0JBQW9CLDRCQUE0QixjQUFjLDhCQUE4Qix5QkFBeUIscUNBQXFDLHNCQUFzQixxQkFBcUIsZ0NBQWdDLDBCQUEwQixpQkFBaUIsdUJBQXVCLGdCQUFnQixPQUFPLDBCQUEwQiw2QkFBNkIsR0FBRyxZQUFZLHlCQUF5QixzQkFBc0IsdUJBQXVCLHFCQUFxQixHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLDJCQUEyQixvQkFBb0IsZ0NBQWdDLDBCQUEwQiw4QkFBOEIsb0JBQW9CLEdBQUcsd0JBQXdCLHlCQUF5QixHQUFHLGtCQUFrQixxQkFBcUIsc0JBQXNCLHNCQUFzQixHQUFHLGlCQUFpQix5Q0FBeUMscUJBQXFCLHNCQUFzQix1QkFBdUIsR0FBRyw4QkFBOEIsMEJBQTBCLDhCQUE4QixPQUFPLEtBQUssOEJBQThCLDJCQUEyQix3QkFBd0Isb0JBQW9CLDZCQUE2QixnQ0FBZ0Msb0JBQW9CLE9BQU8sc0JBQXNCLDhCQUE4QixPQUFPLHdCQUF3QiwwQkFBMEIsNkJBQTZCLE9BQU8sMkJBQTJCLDBCQUEwQiw2QkFBNkIsNkNBQTZDLHlCQUF5Qiw0QkFBNEIsT0FBTyw0QkFBNEIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsc0JBQXNCLDJDQUEyQyx3Q0FBd0MsT0FBTyx1QkFBdUIsd0JBQXdCLGlDQUFpQyw4QkFBOEIsZ0NBQWdDLDZCQUE2QixPQUFPLGdDQUFnQyxvQkFBb0IsMEJBQTBCLHVDQUF1Qyx1QkFBdUIsOEJBQThCLDJCQUEyQixPQUFPLCtCQUErQix5QkFBeUIsZ0RBQWdELDhCQUE4QiwwQkFBMEIsb0JBQW9CLE9BQU8sR0FBRyw2QkFBNkIsMEJBQTBCLGlDQUFpQyxPQUFPLGtCQUFrQix5Q0FBeUMsT0FBTyxtQkFBbUIsdUJBQXVCLE9BQU8sR0FBRyw2QkFBNkIsd0JBQXdCLHlCQUF5QixpQkFBaUIsbUJBQW1CLHFDQUFxQyxPQUFPLHdCQUF3QixxQ0FBcUMsT0FBTyw4QkFBOEIsd0JBQXdCLGlDQUFpQyw4QkFBOEIsa0NBQWtDLDZCQUE2QixPQUFPLHNCQUFzQiw4QkFBOEIsT0FBTyx3QkFBd0IsMEJBQTBCLDZCQUE2QixPQUFPLDJCQUEyQiwwQkFBMEIsNkJBQTZCLDZDQUE2Qyx5QkFBeUIsNEJBQTRCLE9BQU8sNEJBQTRCLHNCQUFzQixxQkFBcUIsMkJBQTJCLHNCQUFzQiwyQ0FBMkMsd0NBQXdDLE9BQU8sdUJBQXVCLHdCQUF3QixpQ0FBaUMsOEJBQThCLGdDQUFnQyw2QkFBNkIsT0FBTyxnQ0FBZ0Msb0JBQW9CLDBCQUEwQix1Q0FBdUMsdUJBQXVCLDhCQUE4QiwyQkFBMkIsT0FBTywrQkFBK0IseUJBQXlCLGdEQUFnRCw4QkFBOEIsMEJBQTBCLG9CQUFvQixPQUFPLHFCQUFxQix3QkFBd0IsT0FBTyxtQkFBbUIsd0JBQXdCLDhCQUE4QixPQUFPLHlCQUF5Qiw4QkFBOEIsT0FBTyxjQUFjLDZCQUE2QixPQUFPLE9BQU8sbUJBQW1CO0FBQ3g4WDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGR2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxpQ0FBaUMseUJBQXlCLGtCQUFrQixHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsOEJBQThCLEdBQUcsbUJBQW1CLG9CQUFvQiw4QkFBOEIseUJBQXlCLDhCQUE4QixlQUFlLGdCQUFnQix1QkFBdUIsMEJBQTBCLDhCQUE4QixHQUFHLGtCQUFrQixpQkFBaUIsdUJBQXVCLG1CQUFtQixHQUFHLGtCQUFrQixvQkFBb0IsbUJBQW1CLGdCQUFnQixHQUFHLG9CQUFvQixzQkFBc0IsdUJBQXVCLG1CQUFtQixHQUFHLDBCQUEwQixzQkFBc0IsR0FBRyxzQkFBc0Isa0JBQWtCLG1CQUFtQix1REFBdUQsb0NBQW9DLHVDQUF1QyxHQUFHLDhCQUE4Qix1QkFBdUIseUNBQXlDLHlCQUF5QixPQUFPLDBCQUEwQiwwQkFBMEIsZ0NBQWdDLE9BQU8sS0FBSyxtQkFBbUI7QUFDOXlEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0lBQWdJO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGtIQUFrSCxVQUFVLG9EQUFvRCxpQkFBaUIsbUJBQW1CLG9CQUFvQixHQUFHLFVBQVUsZ0JBQWdCLHdCQUF3QixrQkFBa0IsbUJBQW1CLHlCQUF5QixHQUFHLGNBQWMsZ0JBQWdCLGtCQUFrQixtQkFBbUIsR0FBRyxtQkFBbUI7QUFDM3FCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDM0IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBLGlFQUFlLHFCQUF1QixvRUFBb0U7Ozs7Ozs7Ozs7Ozs7O0FDQTFHLGlFQUFlLHFCQUF1QixrRUFBa0U7Ozs7Ozs7Ozs7Ozs7O0FDQXhHLGlFQUFlLHFCQUF1QixtRUFBbUU7Ozs7Ozs7Ozs7Ozs7O0FDQXpHLGlFQUFlLHFCQUF1QixvRUFBb0U7Ozs7Ozs7Ozs7Ozs7O0FDQTFHLGlFQUFlLHFCQUF1Qiw4REFBOEQ7Ozs7Ozs7Ozs7Ozs7O0FDQXBHLGlFQUFlLHFCQUF1Qiw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7O0FDQWxHLGlFQUFlLHFCQUF1Qiw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7O0FDQWxHLGlFQUFlLHFCQUF1QiwwREFBMEQ7Ozs7Ozs7Ozs7Ozs7O0FDQWhHLGlFQUFlLHFCQUF1Qiw4REFBOEQ7Ozs7Ozs7Ozs7Ozs7O0FDQXBHLGlFQUFlLHFCQUF1QixnRUFBZ0U7Ozs7Ozs7Ozs7Ozs7O0FDQXRHLGlFQUFlLHFCQUF1Qiw4REFBOEQ7Ozs7Ozs7Ozs7Ozs7O0FDQXBHLGlFQUFlLHFCQUF1Qiw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7O0FDQWxHLGlFQUFlLHFCQUF1QixnRUFBZ0U7Ozs7Ozs7Ozs7Ozs7O0FDQXRHLGlFQUFlLHFCQUF1QixxRUFBcUU7Ozs7Ozs7Ozs7Ozs7O0FDQTNHLGlFQUFlLHFCQUF1QixxRUFBcUU7Ozs7Ozs7Ozs7Ozs7O0FDQTNHLGlFQUFlLHFCQUF1QixtRUFBbUU7Ozs7Ozs7Ozs7Ozs7O0FDQXpHLGlFQUFlLHFCQUF1QixtRUFBbUU7Ozs7Ozs7Ozs7Ozs7O0FDQXpHLGlFQUFlLHFCQUF1Qiw0REFBNEQ7Ozs7Ozs7Ozs7Ozs7O0FDQWxHLGlFQUFlLHFCQUF1Qix3REFBd0Q7Ozs7Ozs7Ozs7Ozs7O0FDQTlGLGlFQUFlLHFCQUF1Qix1REFBdUQ7Ozs7Ozs7Ozs7Ozs7O0FDQTdGLGlFQUFlLHFCQUF1QiwrREFBK0Q7Ozs7Ozs7Ozs7Ozs7O0FDQXJHLGlFQUFlLHFCQUF1Qiw2REFBNkQ7Ozs7Ozs7Ozs7Ozs7O0FDQW5HLGlFQUFlLHFCQUF1QixxRUFBcUU7Ozs7Ozs7Ozs7Ozs7O0FDQTNHLGlFQUFlLHFCQUF1QixzRUFBc0U7Ozs7Ozs7Ozs7Ozs7O0FDQTVHLGlFQUFlLHFCQUF1Qiw4REFBOEQ7Ozs7Ozs7Ozs7Ozs7O0FDQXBHLGlFQUFlLHFCQUF1Qiw2REFBNkQ7Ozs7Ozs7Ozs7Ozs7O0FDQW5HLGlFQUFlLHFCQUF1QixxRUFBcUU7Ozs7Ozs7Ozs7Ozs7O0FDQTNHLGlFQUFlLHFCQUF1QiwyREFBMkQ7Ozs7Ozs7Ozs7Ozs7O0FDQWpHLGlFQUFlLHFCQUF1QiwyREFBMkQ7Ozs7Ozs7Ozs7Ozs7O0FDQWpHLGlFQUFlLHFCQUF1Qix5RUFBeUU7Ozs7Ozs7Ozs7Ozs7O0FDQS9HLGlFQUFlLHFCQUF1Qix3REFBd0Q7Ozs7Ozs7Ozs7Ozs7O0FDQTlGLGlFQUFlLHFCQUF1QixpRUFBaUU7Ozs7Ozs7Ozs7Ozs7O0FDQXZHLGlFQUFlLHFCQUF1QiwwREFBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDaEcsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiK0M7QUFDRDs7QUFFcUM7QUFDSDtBQUNDO0FBQ0Y7QUFDQzs7QUFFaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDJGQUFjLENBQUM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1Qyx5RkFBYSxDQUFDO0FBQ3JELDBEQUEwRCwwRkFBYSxDQUFDO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHlGQUFZLENBQUM7QUFDOUU7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQywyRkFBVyxDQUFDO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLDZEQUFZO0FBQ2hCO0FBQ0EsSUFBSSw0REFBWTtBQUNoQjs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRXVCO0FBQ0Q7O0FBRW9COztBQUVZO0FBQ1I7QUFDUztBQUNHO0FBQ0s7QUFDVjtBQUN4Qjs7QUFFa0I7QUFDSTtBQUNMOztBQUV0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsK0VBQVM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IseUZBQVc7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELGlFQUFVLENBQUM7QUFDckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlGQUFXLENBQUM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUcseUZBQVksQ0FBQztBQUNsSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCx5RkFBSyxDQUFDO0FBQ3hEOztBQUVBO0FBQ0Esb0JBQW9CLDJGQUFhO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnR0FBYTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsMkZBQU8sQ0FBQztBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQseUZBQUksQ0FBQztBQUN0RDs7QUFFQTtBQUNBLG9CQUFvQiwyRkFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDZEQUFZO0FBQ2hCO0FBQ0EsSUFBSSw0REFBWTtBQUNoQjs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0p1QjtBQUNEOztBQUU2QjtBQUNVO0FBQ1g7QUFDQTtBQUNrQjtBQUN0QjtBQUNEO0FBQ1U7QUFDSjtBQUNGO0FBQ1E7QUFDVDtBQUNHO0FBQ1o7QUFDZTs7QUFFOUU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVGQUFTO0FBQ2pDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx3QkFBd0IsdUZBQVM7QUFDakM7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHdCQUF3QixpR0FBaUI7QUFDekM7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RkFBUztBQUNqQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esd0JBQXdCLHVGQUFTO0FBQ2pDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx3QkFBd0IsaUdBQWlCO0FBQ3pDO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5Qyx5RkFBUSxDQUFDO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpRUFBaUUsdUZBQVMsQ0FBQztBQUMzRTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFLHVGQUFTLENBQUM7QUFDM0U7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCx3RkFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQscUZBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDRGQUFZO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCwrRkFBWSxDQUFDO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsZ0ZBQVk7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsb0ZBQVc7QUFDNUQ7QUFDQTtBQUNBLGlEQUFpRCxzRkFBWTtBQUM3RDtBQUNBO0FBQ0EsaURBQWlELCtFQUFPO0FBQ3hEO0FBQ0E7QUFDQSxpREFBaUQsNkZBQVE7QUFDekQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGlGQUFVLENBQUM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFHQUFxRyx5RkFBWSxDQUFDO0FBQ2xIOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUksNkRBQVk7QUFDaEI7QUFDQSxJQUFJLDREQUFZO0FBQ2hCOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblVtRDtBQUNBO0FBQ047O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixpRkFBZTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxpRkFBUyxDQUFDO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUhBQW1ILHVGQUFVLENBQUM7QUFDOUg7O0FBRUE7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQzVGbUM7QUFDQTs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkVBQU87QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0Msd0VBQVksQ0FBQztBQUM1RDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7OztVQ2pEM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNFO0FBQ0Q7QUFDRjtBQUNBO0FBQ0M7O0FBRVc7QUFDTDtBQUNFOztBQUV0QywyREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBUTtBQUN4QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQiwyREFBUTtBQUN4QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQix3REFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvYWJvdXQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9uYXYtYmFyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Fib3V0LWltYWdlcy9hYm91dC11cy1oZXJvX2xhcmdlLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC1pbWFnZXMvaWxsdXN0cmF0aW9uLWJlZXQucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Fib3V0LWltYWdlcy9pbGx1c3RyYXRpb24td2hlYXQucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2Fib3V0LWltYWdlcy9vdXItbWVtb3JpZXNfbWVkaXVtLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9oZWFkZXItZnJpbGxzLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2Zvb3RlclZpZGVvLm1wNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2hvbWUtYnVndWVyLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2hvbWVWaWRlby5tcDQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9mYXJtLXRvLXRhYmxlLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL2ZyZWUtaGlnaC1maXZlcy5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9sb2dvLWZhY2Vib29rLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL2xvZ28tZ2l0aHViLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL3JlYWwtbG9jYWwtZm9vZC5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9yb2xsLXVwLXlvdXItc2xlZXZlcy5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pbGx1c3RyYXRpb24tY2hpY2tlbi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pbGx1c3RyYXRpb24tb25pb24ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWxsdXN0cmF0aW9uLXBsYW50LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2xvZ28tZm9vdGVyLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2xvZ29AMngucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2xhdGljZS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvYmFjb24tYW5kLWJlcnQuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2Jsb2NrLWJ1cmdlci5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvY3JvcXVlLWdhcmNvbi1idXJnZXIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2R1Y2stZHVjay1nb29zZS1mcmllcy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvZnJpZWQtY2hpY2tlbi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvYmxhY2stYmFyX2JnLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9pY29ucy9zcGljeS1hbmQtdmVnYW4taWNvbi5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvc3BpY3ktaWNvbi5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvdmVnYW4taWNvbi5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWxsdXN0cmF0aW9uX2FsdG9uLWJyb3duLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9wb3V0aW5lLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9wdWxsZWQtcG9yay1yb2xsLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy91c2EtdG9kYXkucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvYWJvdXQuY3NzPzM4N2YiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcz8wODQ1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3M/ZGRlYyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL25hdi1iYXIuY3NzPzY1YzQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2VjdGlvbnMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zZWN0aW9ucy9uYXYtYmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaXR0ZXI6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZXJvLWFib3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA4NTVweDtcbiAgICBtYXgtd2lkdGg6IDE5MDVweDtcbiAgICB6LWluZGV4OiAtMjtcbiAgICB0b3A6IC0xNXB4O1xufVxuXG4uYWJvdXQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMXZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmxhY2stYmFyLWFib3V0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAxMXB4O1xuICAgIHdpZHRoOiBtaW4oMTAwJSw0MjBweCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uYmxhY2stYmFyLWFib3V0OjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2tiYXItYWZ0ZXIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDE1M3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJsYWNrLWJhci1mb290ZXIge1xuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmhpc3Rvcnktc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oaXN0b3J5LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oaXN0b3J5LWNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhpc3RvcnktYWZ0ZXIpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICByaWdodDogMjcwcHg7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgZm9udC1mYW1pbHk6ICdtZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgbWFyZ2luOiAwIDE1dncgMzBweDtcbiAgICBtYXgtd2lkdGg6IDY3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5oaXN0b3J5LXRpdGxlLXRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5oaXN0b3J5LXF1b3RlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgd29yZC1zcGFjaW5nOiAyLjVweDtcbiAgICBtYXJnaW46IDAgN3Z3IDM2cHg7XG4gICAgZm9udC1zaXplOiA0M3B4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uaGlzdG9yeS10ZXh0IHtcbiAgICBtYXJnaW46IDAgMTV2dyA1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLm1lbW9yaWVzLWhlcm8ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5jb250YWluZXItbWVtb3JpZXMtdGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci1tZW1vcmllcy10ZXh0IHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgZm9udC1zaXplOiAxMTBweDtcbiAgICBsaW5lLWhlaWdodDogLjk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcbiAgICAuYWJvdXQtdGl0bGV7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5ibGFjay1iYXItYWJvdXQ6OmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDE1M3B4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXItbWVtb3JpZXMtdGV4dCBwe1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo1NjFweCkge1xuICAgIC5oaXN0b3J5LXRpdGxlIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLmhpc3RvcnktdGl0bGV7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICB9XG4gICAgLmhpc3RvcnktcXVvdGV7XG4gICAgICAgIG1hcmdpbjogMCA4dncgMzZweDtcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlEQUF5RDtJQUN6RCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsV0FBVztRQUNYLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJpdHRlcjp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5oZXJvLWFib3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiA4NTVweDtcXG4gICAgbWF4LXdpZHRoOiAxOTA1cHg7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICB0b3A6IC0xNXB4O1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTU1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMxdnc7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uYmxhY2stYmFyLWFib3V0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxMXB4O1xcbiAgICB3aWR0aDogbWluKDEwMCUsNDIwcHgpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbn1cXG5cXG4uYmxhY2stYmFyLWFib3V0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFja2Jhci1hZnRlcikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxNTNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDU1cHg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uYmxhY2stYmFyLWZvb3RlciB7XFxuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlzdG9yeS1zZWN0aW9uIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oaXN0b3J5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oaXN0b3J5LWNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlzdG9yeS1hZnRlcik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcmlnaHQ6IDI3MHB4O1xcbn1cXG5cXG4uaGlzdG9yeS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICM0OTQ5NDk7XFxuICAgIG1hcmdpbjogMCAxNXZ3IDMwcHg7XFxuICAgIG1heC13aWR0aDogNjcwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5oaXN0b3J5LXRpdGxlLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMS44O1xcbn1cXG5cXG4uaGlzdG9yeS10aXRsZSBwOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5oaXN0b3J5LXF1b3RlIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICB3b3JkLXNwYWNpbmc6IDIuNXB4O1xcbiAgICBtYXJnaW46IDAgN3Z3IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogNDNweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5oaXN0b3J5LXRleHQge1xcbiAgICBtYXJnaW46IDAgMTV2dyA1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ21lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjNDk0OTQ5O1xcbiAgICBsaW5lLWhlaWdodDogMS44O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubWVtb3JpZXMtaGVybyB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNzBweCAwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XFxufVxcblxcbi5jb250YWluZXItbWVtb3JpZXMtdGV4dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyLW1lbW9yaWVzLXRleHQgcCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgZm9udC1zaXplOiAxMTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IC45O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCl7XFxuICAgIC5hYm91dC10aXRsZXtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIH1cXG4gICAgLmJsYWNrLWJhci1hYm91dDo6YWZ0ZXIge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNTNweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTVweDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lci1tZW1vcmllcy10ZXh0IHB7XFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NTYxcHgpIHtcXG4gICAgLmhpc3RvcnktdGl0bGUgcDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmhpc3RvcnktdGl0bGV7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIH1cXG4gICAgLmhpc3RvcnktcXVvdGV7XFxuICAgICAgICBtYXJnaW46IDAgOHZ3IDM2cHg7XFxuICAgICAgICBmb250LXNpemU6IDMzcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjZm9vdGVyLWJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDcyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG59XG5cbnZpZGVvIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG92ZXJmbG93OiBjbGlwO1xufVxuXG5mb290ZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmZvb3RlciAuaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDE4dnc7XG59XG5cbi5jb2x1bW4ge1xuICAgIHdpZHRoOiA0OTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDM1dnc7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xufVxuXG4jbG9nby1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBnYXA6IDE1cHg7XG59XG5cbmZvb3RlciBoNCB7XG4gICAgY29sb3I6ICNEREI3OEU7XG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGQ0ZDRkO1xufVxuXG5mb290ZXIgaDQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGhlaWdodDogNzNweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iMTZGb290ZXIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xufVxuXG4uc3RvcmUtaG91cnMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGQ0ZDRkO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5zdG9yZS1ob3VycyBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDIwcHhcbn1cblxuLnN0b3JlLWxvY2F0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkNGQ0ZDtcbn1cblxuLnN0b3JlLWxvY2F0aW9uIHAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnBheW1lbnQtaW5mbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDRkNGQ7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM3ZDdkN2Q7XG59XG5cbi5kaXNjbGFpbWVyIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNyZWF0b3ItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3JlYXRvci1pbmZvIGgzIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jcmVhdG9yLWluZm8gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNyZWF0b3ItaW5mbyBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDk0JSkgaHVlLXJvdGF0ZSg5ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoMTE2JSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCl7XG4gICAgLmNyZWF0b3ItaW5mb3tcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XG4gICAgI2Zvb3Rlci1iYWNrZ3JvdW5ke1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDMwJSk7XG4gICAgfVxuICAgIC5jb2x1bW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA0OTBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgfVxuXG4gICAgZm9vdGVyIGg0OjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgbWluLXdpZHRoOiAxMDVweDtcbiAgICAgICAgbWluLWhlaWdodDogNzNweDtcbiAgICB9XG5cbiAgICAjbG9nby1mb290ZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc3RvcmUtaG91cnMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnN0b3JlLWxvY2F0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wYXltZW50LWluZm8ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jcmVhdG9yLWluZm97XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEZBQThGO0FBQ2xHOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2Zvb3Rlci1iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiA3MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbnZpZGVvIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9vdGVyIC5pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMTh2dztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICAgIHdpZHRoOiA0OTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzNXZ3O1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxufVxcblxcbiNsb2dvLWZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuZm9vdGVyIGg0IHtcXG4gICAgY29sb3I6ICNEREI3OEU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGQ0ZDRkO1xcbn1cXG5cXG5mb290ZXIgaDQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTA1cHg7XFxuICAgIGhlaWdodDogNzNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWIxNkZvb3RlcikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxufVxcblxcbi5zdG9yZS1ob3VycyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkNGQ0ZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnN0b3JlLWhvdXJzIHAge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4XFxufVxcblxcbi5zdG9yZS1sb2NhdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkNGQ0ZDtcXG59XFxuXFxuLnN0b3JlLWxvY2F0aW9uIHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wYXltZW50LWluZm8ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDRkNGQ7XFxufVxcblxcbi5kaXNjbGFpbWVyIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG59XFxuXFxuLmRpc2NsYWltZXIgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0b3ItaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jcmVhdG9yLWluZm8gaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5jcmVhdG9yLWluZm8gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY3JlYXRvci1pbmZvIGltZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ5NCUpIGh1ZS1yb3RhdGUoOWRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDExNiUpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpe1xcbiAgICAuY3JlYXRvci1pbmZve1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NzAwcHgpIHtcXG4gICAgI2Zvb3Rlci1iYWNrZ3JvdW5ke1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAzMCUpO1xcbiAgICB9XFxuICAgIC5jb2x1bW4ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG1heC13aWR0aDogNDkwcHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIGg0OjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBtaW4td2lkdGg6IDEwNXB4O1xcbiAgICAgICAgbWluLWhlaWdodDogNzNweDtcXG4gICAgfVxcblxcbiAgICAjbG9nby1mb290ZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnN0b3JlLWhvdXJzIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc3RvcmUtbG9jYXRpb24ge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wYXltZW50LWluZm8ge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5jcmVhdG9yLWluZm97XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVybyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYycHggLSAxN3B4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jaG9tZS1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdG9wOiA2MnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XG59XG5cbnZpZGVvIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG92ZXJmbG93LWNsaXAtbWFyZ2luOiBjb250ZW50LWJveDtcbiAgICBvdmVyZmxvdzogY2xpcDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMCAzNTIuNXB4O1xufVxuXG4uc3RyZWV0LWZvb2Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgd2lkdGg6IDI1OXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uaG9tZS1jYWxsb3V0cyB7XG4gICAgcGFkZGluZzogODBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvbWUtZnJpbGxzKTtcbn1cblxuLmRhaWx5LXNwZWNpYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbn1cblxuLmxlZnQtaW5mbyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcbn1cblxuLmxlZnQtaW5mbyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5kZXNjcmlwdGlvbixcbi5mYi1jYWxsb3V0IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRTJFMkUyO1xufVxuXG4uZGVzY3JpcHRpb24gaDQge1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmRlc2NyaXB0aW9uIHAge1xuICAgIG1hcmdpbjogMCAwIDQwcHggMDtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZiLWNhbGxvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZmItY2FsbG91dCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLm9uZS10aGlyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb2x1bW4taG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29sdW1uLWhvbWUgcHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMCAwIDcycHggMDtcbiAgICBjb2xvcjogIzJiMmIyYjtcbn1cblxuLmNvbHVtbi1ob21lIGF7XG4gICAgY29sb3I6ICNEREI3OEU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbHVtbi1ob21lIGE6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRERCNzhFO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjA3cztcbn1cblxuLmZpcnN0LWltZyB7XG4gICAgbWFyZ2luOiAwIDAgMzZweDtcbn1cblxuLnNlY29uZC1pbWcge1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG59XG5cbi50aGlyZC1pbWd7XG4gICAgbWFyZ2luOiAwIDAgNDhweDtcbn1cblxuLmhvbWUtY2FsbG91dHMgLmNvbHVtbi1ob21lOmZpcnN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB2YXIoLS1vbmlvbkJnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiA4NHB4IDMwcHggNDZweDtcbn1cblxuLmhvbWUtY2FsbG91dHMgLmNvbHVtbi1ob21lOm50aC1jaGlsZCgyKSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgdmFyKC0tY2hpY2tlbkJnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiA3MnB4IDMwcHggNDZweDtcbn1cblxuLmhvbWUtY2FsbG91dHMgLmNvbHVtbi1ob21lOmxhc3QtY2hpbGQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlIHZhcigtLWJlZXRCZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDQ2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjEyMjBweCl7XG4gICAgLm9uZS10aGlyZCxcbiAgICAuZGFpbHktc3BlY2lhbHtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweDtcbiAgICB9XG4gICAgLmNvbHVtbi1ob21le1xuICAgICAgICB3aWR0aDogbWF4KDUwJSwyOTBweCk7XG4gICAgICAgIHBhZGRpbmc6IDYwcHggMzBweDtcbiAgICB9XG4gICAgLm9uZS10aGlyZHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcbiAgICAuZGFpbHktc3BlY2lhbHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLnJpZ2h0LWluZm97XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0UyRTJFMjtcbiAgICB9XG5cbiAgICAubGVmdC1pbmZve1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0RBQXdEO0lBQ3hELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBEQUEwRDtJQUMxRCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1REFBdUQ7SUFDdkQsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7O1FBRUksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7O0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MnB4IC0gMTdweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS1iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgdG9wOiA2MnB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XFxufVxcblxcbnZpZGVvIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgb3ZlcmZsb3ctY2xpcC1tYXJnaW46IGNvbnRlbnQtYm94O1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbWFyZ2luOiAwIDM1Mi41cHg7XFxufVxcblxcbi5zdHJlZXQtZm9vZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICB3aWR0aDogMjU5cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbi5ob21lLWNhbGxvdXRzIHtcXG4gICAgcGFkZGluZzogODBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taG9tZS1mcmlsbHMpO1xcbn1cXG5cXG4uZGFpbHktc3BlY2lhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xcbn1cXG5cXG4ubGVmdC1pbmZvIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcXG59XFxuXFxuLmxlZnQtaW5mbyBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucmlnaHQtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbixcXG4uZmItY2FsbG91dCB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRTJFMkUyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gaDQge1xcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHAge1xcbiAgICBtYXJnaW46IDAgMCA0MHB4IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmZiLWNhbGxvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5mYi1jYWxsb3V0IGltZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5vbmUtdGhpcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNvbHVtbi1ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5jb2x1bW4taG9tZSBwe1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDAgMCA3MnB4IDA7XFxuICAgIGNvbG9yOiAjMmIyYjJiO1xcbn1cXG5cXG4uY29sdW1uLWhvbWUgYXtcXG4gICAgY29sb3I6ICNEREI3OEU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb2x1bW4taG9tZSBhOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRERCNzhFO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wN3M7XFxufVxcblxcbi5maXJzdC1pbWcge1xcbiAgICBtYXJnaW46IDAgMCAzNnB4O1xcbn1cXG5cXG4uc2Vjb25kLWltZyB7XFxuICAgIG1hcmdpbjogMCAwIDMwcHg7XFxufVxcblxcbi50aGlyZC1pbWd7XFxuICAgIG1hcmdpbjogMCAwIDQ4cHg7XFxufVxcblxcbi5ob21lLWNhbGxvdXRzIC5jb2x1bW4taG9tZTpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlIHZhcigtLW9uaW9uQmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiA4NHB4IDMwcHggNDZweDtcXG59XFxuXFxuLmhvbWUtY2FsbG91dHMgLmNvbHVtbi1ob21lOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlIHZhcigtLWNoaWNrZW5CZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmc6IDcycHggMzBweCA0NnB4O1xcbn1cXG5cXG4uaG9tZS1jYWxsb3V0cyAuY29sdW1uLWhvbWU6bGFzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlIHZhcigtLWJlZXRCZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmc6IDk0cHggMzBweCA0NnB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDoxMjIwcHgpe1xcbiAgICAub25lLXRoaXJkLFxcbiAgICAuZGFpbHktc3BlY2lhbHtcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHg7XFxuICAgIH1cXG4gICAgLmNvbHVtbi1ob21le1xcbiAgICAgICAgd2lkdGg6IG1heCg1MCUsMjkwcHgpO1xcbiAgICAgICAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgICB9XFxuICAgIC5vbmUtdGhpcmR7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCl7XFxuICAgIC5kYWlseS1zcGVjaWFse1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAucmlnaHQtaW5mb3tcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0UyRTJFMjtcXG4gICAgfVxcblxcbiAgICAubGVmdC1pbmZve1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJpdHRlcjp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1lbnUtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgMTh2dyAwIDE3LjV2dztcbn1cblxuLm1haW4tbWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLml0ZW0taW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBjbGFtcCgyMjBweCwxMDAlLDUyMHB4KTtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmF0dHJpYnV0ZS1pbWctcyB7XG4gICAgd2lkdGg6IDI4cHg7XG59XG5cbi5hdHRyaWJ1dGUtaW1nLXYge1xuICAgIHdpZHRoOiAxOHB4O1xufVxuXG4uYXR0cmlidXRlLWltZy1zdiB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cblxuLnNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcbiAgICBtYXJnaW46IDhweCBhdXRvO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwIDEuNXZ3IDE5LjZweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubWVudS1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA0M3B4O1xufVxuXG4uYmxhY2stYmFye1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICB3aWR0aDogbWluKDEwMCUsNDM3cHgpO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmdvbGQtc3BhY2Vke1xuICAgIGNvbG9yOiAjRERCNzhFO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogJ0JpdHRlcicsc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweCA7XG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5vcHRpb24gcHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ub3B0aW9ucy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5vcHRpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbn1cblxuLm9wdGlvbnMtaW1nLXN7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5vcHRpb25zLWltZy12IHtcbiAgICB3aWR0aDogMTZweDtcbn1cblxuLnVzYS10b2RheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzYS1pbWcge1xuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG59XG5cbi51c2EtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBtYXJnaW46IDAgMTAlIDI0cHg7XG59XG5cbi51c2Etc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW46IDAgMTAlIDQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdtZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnVzYS1zZXBhcmF0b3Ige1xuICAgIGhlaWdodDogN3B4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQ0NDQztcbn1cblxuLnVzYS1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAwIDI1JSAxN3B4O1xufVxuXG4udXNhLWFydGljbGUtdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udXNhLWFydGljbGUtZGF0ZSB7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDA7XG59XG5cblxuLmRhaWx5LXNwZWNpYWwtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMCA2MHB4O1xufVxuXG4uc2Vjb25kYXJ5LW1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5zaWRlcy1kcmlua3MtbWVudS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5zaWRlcy10aXRsZTo6YmVmb3JlLFxuLmRyaW5rcy10aXRsZTo6YmVmb3JlICAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUxJTtcbiAgICByaWdodDogNzAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcbn1cblxuLnNpZGVzLXRpdGxlOjphZnRlcixcbi5kcmlua3MtdGl0bGU6OmFmdGVyICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTElO1xuICAgIGxlZnQ6IDcwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XG59XG5cbi5zaWRlcy10aXRsZSxcbi5kcmlua3MtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJpdHRlclwiLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICNEREI3OEU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDA7XG4gICAgO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IG1pbigxMDAlLDQ1MHB4KTtcbn1cblxuLnNpZGVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5jb21iby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHggMDtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMy81O1xufVxuXG4uY29tYm8tY29udGFpbmVyIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbWJvLXRpdGxlIHtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwIDAgNnB4O1xufVxuXG4uY29tYm8tdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwIDAgMjJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MTIyMHB4KXtcbiAgICAuZGFpbHktc3BlY2lhLW1lbnVse1xuICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4O1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMTcwcHgpe1xuXG4gICAgLm9wdGlvbnMtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIFxuICAgIC51c2EtaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzYS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luOiAwIDEwJSAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAudXNhLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDAgMTAlIDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzYS1zZXBhcmF0b3Ige1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICB9XG4gICAgXG4gICAgLnVzYS1saW5rIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW46IDAgMjUlIDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC51c2EtYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0JpdHRlcicsIHNlcmlmO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIFxuICAgIC51c2EtYXJ0aWNsZS1kYXRlIHtcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpe1xuICAgIC5kYWlseS1zcGVjaWFsLW1lbnV7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5yaWdodC1pbmZve1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgfVxuXG4gICAgLmxlZnQtaW5mb3tcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NzAwcHgpe1xuXG4gICAgLm1lbnUtY29udGFpbmVye1xuICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLm1haW4tbWVudXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLnNlY29uZGFyeS1tZW51e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAudXNhLXRvZGF5LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC51c2EtaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzYS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgbWFyZ2luOiAwIDEwJSAyNHB4O1xuICAgIH1cbiAgICBcbiAgICAudXNhLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBtYXJnaW46IDAgMTAlIDQwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzYS1zZXBhcmF0b3Ige1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICB9XG4gICAgXG4gICAgLnVzYS1saW5rIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW46IDAgMjUlIDE3cHg7XG4gICAgfVxuICAgIFxuICAgIC51c2EtYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0JpdHRlcicsIHNlcmlmO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIFxuICAgIC51c2EtYXJ0aWNsZS1kYXRlIHtcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5zaWRlcy10aXRsZXtcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcbiAgICB9XG4gICAgXG4gICAgLnNpZGVze1xuICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5jb21iby1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgLm5hbWV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixz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QUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsZ0NBQWdDO1FBQ2hDLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsZUFBZTtRQUNmLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxxQ0FBcUM7UUFDckMsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7O0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Qml0dGVyOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwIDE4dncgMCAxNy41dnc7XFxufVxcblxcbi5tYWluLW1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uaXRlbS1pbWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogY2xhbXAoMjIwcHgsMTAwJSw1MjBweCk7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYXR0cmlidXRlLWltZy1zIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxufVxcblxcbi5hdHRyaWJ1dGUtaW1nLXYge1xcbiAgICB3aWR0aDogMThweDtcXG59XFxuXFxuLmF0dHJpYnV0ZS1pbWctc3Yge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcXG4gICAgbWFyZ2luOiA4cHggYXV0bztcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjogMCAxLjV2dyAxOS42cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGNvbG9yOiAjNDk0OTQ5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubWVudS1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA0M3B4O1xcbn1cXG5cXG4uYmxhY2stYmFye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTNweDtcXG4gICAgd2lkdGg6IG1pbigxMDAlLDQzN3B4KTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLmdvbGQtc3BhY2Vke1xcbiAgICBjb2xvcjogI0REQjc4RTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0JpdHRlcicsc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweCA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4ub3B0aW9uIHB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5vcHRpb25zLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5vcHRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ub3B0aW9ucy1pbWctc3tcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5vcHRpb25zLWltZy12IHtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi51c2EtdG9kYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVzYS1pbWcge1xcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xcbn1cXG5cXG4udXNhLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICBtYXJnaW46IDAgMTAlIDI0cHg7XFxufVxcblxcbi51c2Etc3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIG1hcmdpbjogMCAxMCUgNDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdtZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gICAgY29sb3I6ICM0OTQ5NDk7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udXNhLXNlcGFyYXRvciB7XFxuICAgIGhlaWdodDogN3B4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcbn1cXG5cXG4udXNhLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG1hcmdpbjogMCAyNSUgMTdweDtcXG59XFxuXFxuLnVzYS1hcnRpY2xlLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnVzYS1hcnRpY2xlLWRhdGUge1xcbiAgICBjb2xvcjogIzY2NjY2NjtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5kYWlseS1zcGVjaWFsLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDAgMCA2MHB4O1xcbn1cXG5cXG4uc2Vjb25kYXJ5LW1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG59XFxuXFxuLnNpZGVzLWRyaW5rcy1tZW51LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uc2lkZXMtdGl0bGU6OmJlZm9yZSxcXG4uZHJpbmtzLXRpdGxlOjpiZWZvcmUgICB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MSU7XFxuICAgIHJpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcXG59XFxuXFxuLnNpZGVzLXRpdGxlOjphZnRlcixcXG4uZHJpbmtzLXRpdGxlOjphZnRlciAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTElO1xcbiAgICBsZWZ0OiA3MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcXG59XFxuXFxuLnNpZGVzLXRpdGxlLFxcbi5kcmlua3MtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQml0dGVyXFxcIiwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICNEREI3OEU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogbWluKDEwMCUsNDUwcHgpO1xcbn1cXG5cXG4uc2lkZXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5jb21iby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHggMDtcXG4gICAgaGVpZ2h0OiAxMDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0NDQ0NDQztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAzLzU7XFxufVxcblxcbi5jb21iby1jb250YWluZXIgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbWJvLXRpdGxlIHtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIDAgNnB4O1xcbn1cXG5cXG4uY29tYm8tdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICAgIGNvbG9yOiAjNDk0OTQ5O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMCAwIDIycHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjEyMjBweCl7XFxuICAgIC5kYWlseS1zcGVjaWEtbWVudWx7XFxuICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4O1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjExNzBweCl7XFxuXFxuICAgIC5vcHRpb25zLWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2EtaW1nIHtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2EtdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDEwJSAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLXN1YnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogMCAxMCUgMTBweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICAgICAgICBjb2xvcjogIzQ5NDk0OTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLXNlcGFyYXRvciB7XFxuICAgICAgICBoZWlnaHQ6IDdweDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLWxpbmsge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwIDI1JSAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLWFydGljbGUtdGl0bGUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLWFydGljbGUtZGF0ZSB7XFxuICAgICAgICBjb2xvcjogIzY2NjY2NjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KXtcXG4gICAgLmRhaWx5LXNwZWNpYWwtbWVudXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnJpZ2h0LWluZm97XFxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNFMkUyRTI7XFxuICAgIH1cXG5cXG4gICAgLmxlZnQtaW5mb3tcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCl7XFxuXFxuICAgIC5tZW51LWNvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm1haW4tbWVudXtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5zZWNvbmRhcnktbWVudXtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgIC51c2EtdG9kYXktY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLWltZyB7XFxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgICAgIG1hcmdpbjogMCAxMCUgMjRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1zdWJ0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICBtYXJnaW46IDAgMTAlIDQwcHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ21lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICAgICAgY29sb3I6ICM0OTQ5NDk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1zZXBhcmF0b3Ige1xcbiAgICAgICAgaGVpZ2h0OiA3cHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMzBweDtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQ0NDQztcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1saW5rIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMCAyNSUgMTdweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1hcnRpY2xlLXRpdGxlIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1hcnRpY2xlLWRhdGUge1xcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XFxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAuc2lkZXMtdGl0bGV7XFxuICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2lkZXN7XFxuICAgICAgICBncmlkLXJvdzogMi8zO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgfVxcblxcbiAgICAuY29tYm8tY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgfVxcblxcbiAgICAubmFtZXtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICAgIGhlaWdodDogNjJweDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zZWN0aW9uLWxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gICAgd2lkdGg6IDd2dztcbiAgICBtYXgtd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlci1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBnYXA6IDEwdnc7XG59XG5cbi5oZWFkZXItbWVudSBhIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXItbWVudSBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmhlYWRlci1mcmlsbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mcmlsbHMpIGNlbnRlciBjZW50ZXIgcmVwZWF0LXg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb24tbG9nb3tcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdi1iYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7UUFDOUIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA2MnB4O1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWN0aW9uLWxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiA1cHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICAgIHdpZHRoOiA3dnc7XFxuICAgIG1heC13aWR0aDogMTI4cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlYWRlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBnYXA6IDEwdnc7XFxufVxcblxcbi5oZWFkZXItbWVudSBhIHtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZWFkZXItbWVudSBhOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uaGVhZGVyLWZyaWxscyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZyaWxscykgY2VudGVyIGNlbnRlciByZXBlYXQteDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTVFNUU1O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCkge1xcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zZWN0aW9uLWxvZ297XFxuICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hYm91dC11cy1oZXJvX2xhcmdlLmJjZWI2YjllYWFiYzdkZjBjZTk2Y2Y5YTE3ODc1ZDAwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaWxsdXN0cmF0aW9uLWJlZXQuNDE5NzQ2OGMxOTg2M2Q4NzVlNTVlYjUwNGY2M2NkNGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbGx1c3RyYXRpb24td2hlYXQuNjAyZDM0MDJlZWRlMTIyMzgyN2NhZTk4NWUxZDVkMjIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9vdXItbWVtb3JpZXNfbWVkaXVtLmU1N2ZjZWEzOGQ1NDRjOWZlOGM2NGVlZjQ3YzFhMDA5LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaGVhZGVyLWZyaWxscy5mMzU5M2EwNWYxNGRlNzMwMWFkNGE4YzA5ZWMwM2U4Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Zvb3RlclZpZGVvLmFiYjQxMmEyZmUyYTJkOWIyMWM4ZWFkYjIxMDdkZGFmLm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaG9tZS1idWd1ZXIuZjQ5NTRmY2U5YTI1Y2EwYTZkNzRmZGY3M2UxNzEyOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9ob21lVmlkZW8uZjdlNDViNTYzZGQ0MjNhNDk2MTk3MmFkM2RlOTdhYjcubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mYXJtLXRvLXRhYmxlLmExNjRjY2RmODkwNGRlMDgyM2MxYTAyZjgzNWY0MWE3LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZnJlZS1oaWdoLWZpdmVzLmE1OWNkMjIxNmNkMThhMzkwMWRiZjQ4M2NjOTRjZTM4LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby1mYWNlYm9vay42NTU1NTYyNzY0YzNkMTAzZjI2NzYyYzgwOGY4YTM1Ny5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28tZ2l0aHViLmYwODQzZDQ4YjA5NTU0M2E3MWQ0ZTRmNjgwOWNhOWQ2LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcmVhbC1sb2NhbC1mb29kLjViNzE3MzUyYzkzYjZiNzc1OWZmZjdkMTNlODY5MWI1LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcm9sbC11cC15b3VyLXNsZWV2ZXMuNjhiZDFiMTMxYjNlOTZmYzZiOTNlZjI3NGNlMzJhZTMuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbGx1c3RyYXRpb24tY2hpY2tlbi45YTMwYWE5YWJlNGQ5YzMyNWNhYjNjYjBjZmFjMjNiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2lsbHVzdHJhdGlvbi1vbmlvbi4wYzgwNzVhZDExOTQzZjYzYWY5MDMwZWQ1ZDU4MWY3NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2lsbHVzdHJhdGlvbi1wbGFudC5lOGE0MmFhZTYzYWRjNmZmMjJkNmJiNWIzNDhjNzAxMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28tZm9vdGVyLmJmZTkwYzI4YzNjN2U5MDQwMzFhMjhhZTU3OTdiMDdlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nb0AyeC40MGY1YjA5OTFlYTllMzNmMjg0MTNlOWE5ZDYwNjFhMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xhdGljZS5mNjE0Y2U1NWJlNTg2MDMzZWUwY2FmYjRkZTkwYWIyMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2JhY29uLWFuZC1iZXJ0LmU5NDk0OGRhN2JkOTEyMTBmNWZlMjMzMDQwMWMwYTM4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYmxvY2stYnVyZ2VyLjRkZTRjMjM1NDBlZTdjNGViYTg4OGNjMWE2OTE0NmFmLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY3JvcXVlLWdhcmNvbi1idXJnZXIuOTQyZDM0N2MyYTMwNTQzYjU2NWQ0MGRjM2IyNzdkNmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9kdWNrLWR1Y2stZ29vc2UtZnJpZXMuNmFmODJlNzMyYjZlZTU5ZjkxZDMwYjJmNDRlYjQ2NjcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mcmllZC1jaGlja2VuLjRiNmVlN2FiMzY4ZmI2YzVhZDI2YjBmMzM0NGNkNjcwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYmxhY2stYmFyX2JnLjg0OTE1YWI3YTkwMjdlZmI2ODM5NGI5MTMxNzYyMGNkLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvc3BpY3ktYW5kLXZlZ2FuLWljb24uZDg2NDZlYTA5MDNlMTFjOWFjOWJkZjAxZTE2YzJlY2Muc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9zcGljeS1pY29uLmQ2ZjkzOGE5ZGMzMzM3MDYzMDgzNjI1MDc0NWU0MGI0LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdmVnYW4taWNvbi5kMjhkZTY5YTE0MmQ2OTMxZDMwZTgxMjVkODM5MDk0Yi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2lsbHVzdHJhdGlvbl9hbHRvbi1icm93bi44NzAwYWEyZTU5YzkyZjU0YWQ2NTIyNDkwOGJlMmI4Yy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3BvdXRpbmUuYTk5NGVmYjU0OWM1ZmY0NWFjY2MzYzFhZDEwNGRkNzcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9wdWxsZWQtcG9yay1yb2xsLmQ2NWUwYWQyYjMwNjQzYzA4ZDU2YzFmY2NjZDg0N2UyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdXNhLXRvZGF5LmZlMzFiZTQxOWRiYWVlNjFhMzA2NjVlMWIxZWExYTY1LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlTmF2QmFyIGZyb20gJy4uL3NlY3Rpb25zL25hdi1iYXInO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuLi9zZWN0aW9ucy9mb290ZXInO1xuXG5pbXBvcnQgbWFpbkFib3V0SW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pbWFnZXMvYWJvdXQtdXMtaGVyb19sYXJnZS5qcGcnO1xuaW1wb3J0IGJsYWNrYmFyQWJvdXQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9pY29ucy9ibGFjay1iYXJfYmcuc3ZnJztcbmltcG9ydCBibGFja2JhckFmdGVyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaW1hZ2VzL2lsbHVzdHJhdGlvbi13aGVhdC5wbmcnO1xuaW1wb3J0IGhpc3RvcnlBZnRlciBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWltYWdlcy9pbGx1c3RyYXRpb24tYmVldC5wbmcnO1xuaW1wb3J0IG1lbW9yaWVzSW1nIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaW1hZ2VzL291ci1tZW1vcmllc19tZWRpdW0uanBnJztcblxuZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVyby1hYm91dCcpO1xuICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHttYWluQWJvdXRJbWFnZX0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0YDtcbiAgICBoZXJvLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gICAgY29uc3QgdGl0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXRpdGxlJyk7XG4gICAgaGVyby5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuXG4gICAgY29uc3QgYmxhY2tiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJsYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ2JsYWNrLWJhci1hYm91dCcpO1xuICAgIGJsYWNrYmFyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7YmxhY2tiYXJBYm91dH0pY2VudGVyIGNlbnRlciBuby1yZXBlYXRgO1xuICAgIGJsYWNrYmFyLnN0eWxlLnNldFByb3BlcnR5KCctLWJsYWNrYmFyLWFmdGVyJyxgdXJsKCcke2JsYWNrYmFyQWZ0ZXJ9JylgKTtcbiAgICBibGFja2Jhci5pbm5lclRleHQgPSAnUEFVTCAmIEpFU1NJQ0EnO1xuICAgIHRpdGxlQ29udGVudC5hcHBlbmRDaGlsZChibGFja2Jhcik7XG5cbiAgICBjb25zdCBibGFja0JhckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBibGFja0JhckZvb3Rlci5jbGFzc0xpc3QuYWRkKCdibGFjay1iYXItZm9vdGVyJyk7XG4gICAgYmxhY2tCYXJGb290ZXIuaW5uZXJUZXh0ID0gYFdFJ1JFIFBFT1BMRSBXSE8gQ0FSRSBBQk9VVCBGT09EYDtcbiAgICB0aXRsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxhY2tCYXJGb290ZXIpO1xuXG4gICAgY29uc3Qgb3VySGlzdG9yeVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgb3VySGlzdG9yeVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlzdG9yeS1zZWN0aW9uJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdXJIaXN0b3J5U2VjdGlvbik7XG5cbiAgICBjb25zdCBoaXN0b3J5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGlzdG9yeUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcyA9ICdoaXN0b3J5LXRpdGxlJz48cD5XPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gJ2hpc3RvcnktdGl0bGUtdGV4dCc+ZeKAmXZlIGJlZW4gY29va2luZyB0b2dldGhlciBsb25nIGVub3VnaCB0aGF0IHdlIGtub3cgaG93IHRvIGJhbGFuY2UgZWFjaCBvdGhlcuKAk2NvbWZvcnQgbWVldHMgZnJlc2huZXNzLjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9ICdoaXN0b3J5LXF1b3RlJz5PTkUgT0YgVVMgU0FZUywg4oCcSlVJQ1kgQlVSR0VSP+KAnSBUSEUgT1RIRVIgUkVTUE9ORFMsIOKAnFlFQUghIEFORCBTT01FIFJPQVNURUQgQkVFVFMgQU5EIEdPQVQgQ0hFRVNFIeKAnTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9ICdoaXN0b3J5LXRleHQnPldlIG1ldCBpbiBNZXRyb3BvbGl0YW4gQ29tbXVuaXR5IENvbGxlZ2XigJlzIEN1bGluYXJ5IHByb2dyYW0sIHdoaWNoIHdhcyBhIGdyZWF0IHBsYWNlIHRvIGVhcm4gb3VyIGNyZWRlbnRpYWxzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBicm9hZGVuIG91ciBuZXR3b3JrIG9mIGZyaWVuZHMsIGNoZWZzLCBhbmQgZmVsbG93IGZvb2RpZXMuIEJ1dCB3ZSBib3RoIGFncmVlIG91ciBvbmdvaW5nIGVkdWNhdGlvbiBoYXMgYmVlbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgd2lsbCBhbHdheXMgYmUgdGhyb3VnaCB0cmF2ZWwuIFdlIHRyYXZlbCB3aGVuZXZlciB3ZSBoYXZlIHRoZSBjaGFuY2UsIGFuZCBzb21ldGltZXMgd2XigJlsbCBwbGFuIGEgdHJpcCBhcm91bmQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25zIGF0IGEgc3BlY2lmaWMgcmVzdGF1cmFudC4gV2XigJl2ZSBoYWQgc29tZSBhbWF6aW5nIG1lYWxzIGFuZCBzb21lIGdyZWF0IGFkdmVudHVyZXMsIGFuZCBpdCBhbGwgc2hvd3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXAgaW4gdGhlIGZvb2Qgd2Ugc2VydmUuPC9wPmAsXG4gICAgaGlzdG9yeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaXN0b3J5LWNvbnRhaW5lcicpO1xuICAgIGhpc3RvcnlDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0taGlzdG9yeS1hZnRlcicsYHVybCgnJHtoaXN0b3J5QWZ0ZXJ9JylgKTtcbiAgICBvdXJIaXN0b3J5U2VjdGlvbi5hcHBlbmRDaGlsZChoaXN0b3J5Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IG92ZXJsYXlIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG92ZXJsYXlIZXJvLmNsYXNzTGlzdC5hZGQoJ21lbW9yaWVzLWhlcm8nKTtcbiAgICBvdmVybGF5SGVyby5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHttZW1vcmllc0ltZ30nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdGA7XG4gICAgb3ZlcmxheUhlcm8uc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheUhlcm8pO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuICAgIG92ZXJsYXlIZXJvLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgY29uc3Qgb3ZlcmxheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5VGV4dC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItbWVtb3JpZXMtdGV4dCcpO1xuICAgIG92ZXJsYXlUZXh0LmlubmVySFRNTCA9ICc8cD5XRSBTRVJWRSBGT09EIEJBU0VEIE9OIE9VUiBCRVNUIE1FTU9SSUVTLjwvcD4nO1xuICAgIG92ZXJsYXlIZXJvLmFwcGVuZENoaWxkKG92ZXJsYXlUZXh0KTtcblxuICAgIFxufVxuXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY3JlYXRlTmF2QmFyKCk7XG4gICAgY3JlYXRlQWJvdXQoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0OyIsImltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSAnLi4vc2VjdGlvbnMvbmF2LWJhcic7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4uL3NlY3Rpb25zL2Zvb3Rlcic7XG5cbmltcG9ydCBtYWluVmlkZW8gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2hvbWVWaWRlby5tcDQnO1xuXG5pbXBvcnQgZmFybVRvVGFibGUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL2Zhcm0tdG8tdGFibGUuc3ZnJztcbmltcG9ydCBob21lQnVyZ3VlciBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaG9tZS1idWd1ZXIucG5nJztcbmltcG9ydCBmYWNlYm9va0xvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL2xvZ28tZmFjZWJvb2suc3ZnJztcbmltcG9ydCBmcmVlSGlnaEZpdmVzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9mcmVlLWhpZ2gtZml2ZXMuc3ZnJztcbmltcG9ydCByb2xsVXBTbGVldmVzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9yb2xsLXVwLXlvdXItc2xlZXZlcy5zdmcnO1xuaW1wb3J0IHJlYWxGb29kIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9yZWFsLWxvY2FsLWZvb2Quc3ZnJztcbmltcG9ydCBob21lRnJpbGxzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbGF0aWNlLnBuZyc7XG5cbmltcG9ydCBvbmlvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWxsdXN0cmF0aW9uLW9uaW9uLnBuZyc7XG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWxsdXN0cmF0aW9uLWNoaWNrZW4ucG5nJztcbmltcG9ydCBiZWV0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pbGx1c3RyYXRpb24tcGxhbnQucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIGNvbnN0IGhvbWVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgaG9tZVZpZGVvLmlkID0gJ2hvbWUtYmFja2dyb3VuZCc7XG4gICAgaG9tZVZpZGVvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgaG9tZVZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICBob21lVmlkZW8ubG9vcCA9IHRydWU7XG4gICAgaG9tZVZpZGVvLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhvbWVWaWRlbyk7XG5cbiAgICBjb25zdCBob21lQmFja2dyb3VuZFZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgaG9tZUJhY2tncm91bmRWaWRlby5zcmMgPSBtYWluVmlkZW87XG4gICAgaG9tZUJhY2tncm91bmRWaWRlby50eXBlID0gJ3ZpZGVvL21wNCc7XG4gICAgaG9tZVZpZGVvLmFwcGVuZENoaWxkKGhvbWVCYWNrZ3JvdW5kVmlkZW8pO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUaXRsZUxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChob21lVGl0bGVMb2dvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhvbWVUaXRsZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lVGl0bGVMb2dvLnNyYyA9IGZhcm1Ub1RhYmxlO1xuICAgIGhvbWVUaXRsZUxvZ28uY2xhc3NMaXN0LmFkZCgnc3RyZWV0LWZvb2QnKTtcbiAgICBob21lVGl0bGVMb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUaXRsZUxvZ28pO1xuXG4gICAgY29uc3QgaG9tZUNhbGxvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZUNhbGxvdXQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jYWxsb3V0cycpO1xuICAgIGhvbWVDYWxsb3V0LnN0eWxlLnNldFByb3BlcnR5KCctLWhvbWUtZnJpbGxzJyxgdXJsKCcke2hvbWVGcmlsbHN9JylgKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVDYWxsb3V0KTtcblxuICAgIGNvbnN0IGRhaWx5U3BlY2lhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhaWx5U3BlY2lhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1zcGVjaWFsJyk7XG4gICAgaG9tZUNhbGxvdXQuYXBwZW5kQ2hpbGQoZGFpbHlTcGVjaWFsQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ1cmd1ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGJ1cmd1ZXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2xlZnQtaW5mbycpO1xuICAgIGJ1cmd1ZXJMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9CbG9jay0xNi0yNzQ4Mzg4MTkyMzYxNDhcIjtcbiAgICBidXJndWVyTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBidXJndWVyTGluay5pbm5lckhUTUwgPSBgPGltZyBzcmM9JyR7aG9tZUJ1cmd1ZXJ9Jz5gO1xuICAgIGRhaWx5U3BlY2lhbENvbnRhaW5lci5hcHBlbmRDaGlsZChidXJndWVyTGluayk7XG5cbiAgICBjb25zdCByaWdodEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodEluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtaW5mbycpO1xuICAgIGRhaWx5U3BlY2lhbENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEluZm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGA8aDQ+REFJTFkgU1BFQ0lBTDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIHNlcnZlIGEgbmV3IHNwZWNpYWwgZXZlcnkgZGF5LiBIZWFkIG92ZXIgdG8gRmFjZWJvb2sgYW5kIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWUgd2hhdCB3ZeKAmXJlIHNlcnZpbmcgdG9kYXkuPC9wPmA7XG4gICAgcmlnaHRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuXG4gICAgY29uc3QgZmJDYWxsb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZiQ2FsbG91dC5jbGFzc0xpc3QuYWRkKCdmYi1jYWxsb3V0Jyk7XG4gICAgZmJDYWxsb3V0LmhyZWYgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0Jsb2NrLTE2LTI3NDgzODgxOTIzNjE0OCc7XG4gICAgZmJDYWxsb3V0LnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGZiQ2FsbG91dC5pbm5lckhUTUwgPSBgRk9MTE9XIFVTIE9OIEZBQ0VCT09LIFRPIFNFRSBEQUlMWSBTUEVDSUFMUyBJTiBZT1VSIFwiRkVFRFwiISA8aW1nIHNyYyA9IFwiJHtmYWNlYm9va0xvZ299XCI+YDtcbiAgICByaWdodEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZmJDYWxsb3V0KTtcblxuICAgIGNvbnN0IG9uZVRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb25lVGhpcmQuY2xhc3NMaXN0LmFkZCgnb25lLXRoaXJkJyk7XG4gICAgaG9tZUNhbGxvdXQuYXBwZW5kQ2hpbGQob25lVGhpcmQpO1xuXG4gICAgY29uc3QgY29sdW1uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhvbWUnKTtcbiAgICBjb2x1bW4xLnN0eWxlLnNldFByb3BlcnR5KCctLW9uaW9uQmcnLGB1cmwoJyR7b25pb259JylgKTtcbiAgICBvbmVUaGlyZC5hcHBlbmRDaGlsZChjb2x1bW4xKTtcblxuICAgIGNvbnN0IHRpdGxlSW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRpdGxlSW1nMS5zcmMgPSBmcmVlSGlnaEZpdmVzO1xuICAgIHRpdGxlSW1nMS5jbGFzc0xpc3QuYWRkKCdmaXJzdC1pbWcnKTtcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKHRpdGxlSW1nMSk7XG5cbiAgICBjb25zdCBjb2x1bW5QMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb2x1bW5QMS5pbm5lclRleHQgPSBgVGhpbmdzIGdldCBob3BwaW4nIGFyb3VuZCBsdW5jaHRpbWUuIFdlIHN1Z2dlc3QgY2hlY2tpbmcgb3V0IG91ciBtZW51IGJlZm9yZSB5b3UgY29tZSBpbi5gO1xuICAgIGNvbHVtbjEuYXBwZW5kKGNvbHVtblAxKTtcblxuICAgIGNvbnN0IGNvbHVtbkExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbHVtbkExLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGluaycpO1xuICAgIGNvbHVtbkExLmlubmVyVGV4dCA9ICdTRUUgTUVOVSc7XG4gICAgY29sdW1uMS5hcHBlbmRDaGlsZChjb2x1bW5BMSk7XG5cbiAgICBjb25zdCBjb2x1bW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taG9tZScpO1xuICAgIG9uZVRoaXJkLmFwcGVuZENoaWxkKGNvbHVtbjIpO1xuXG4gICAgY29uc3QgdGl0bGVJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGl0bGVJbWcyLnNyYyA9IHJvbGxVcFNsZWV2ZXM7XG4gICAgdGl0bGVJbWcyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1pbWcnKTtcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKHRpdGxlSW1nMik7XG5cbiAgICBjb25zdCBjb2x1bW5QMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb2x1bW5QMi5pbm5lclRleHQgPSBgT3VyIHN0cmVldC1zdHlsZSBmb29kIGlzIGJvbGQsIGltYWdpbmF0aXZlLCBhbmQgZGVsaWNpb3VzbHkgbWVzc3kuIEdyYWIgc29tZSBuYXBraW5zIGFuZCBlYXQgdXAuYDtcbiAgICBjb2x1bW4yLnN0eWxlLnNldFByb3BlcnR5KCctLWNoaWNrZW5CZycsYHVybCgnJHtjaGlja2VufScpYCk7XG4gICAgY29sdW1uMi5hcHBlbmQoY29sdW1uUDIpO1xuXG4gICAgY29uc3QgY29sdW1uQTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29sdW1uQTIuaW5uZXJUZXh0ID0gJ1NFRSBMT0NBVElPTic7XG4gICAgY29sdW1uQTIuaHJlZiA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvQmxvY2srMTYvQDQxLjI1NzQ0MTEsLTk1LjkzNzc3MDgsMTd6L2RhdGE9ITNtMSE0YjEhNG02ITNtNSExczB4ODc5MzhmYWQ5YTFhYzRjNzoweDIyNTU1MjhkZDNlOWI4ZmQhOG0yITNkNDEuMjU3NDQxMSE0ZC05NS45Mzc3NzA4ITE2cyUyRmclMkYxMWd6bHlta2w/ZW50cnk9dHR1JztcbiAgICBjb2x1bW5BMi50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGNvbHVtbkEyKTtcblxuICAgIGNvbnN0IGNvbHVtbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2x1bW4zLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1ob21lJyk7XG4gICAgY29sdW1uMy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iZWV0QmcnLGB1cmwoJyR7YmVldH0nKWApO1xuICAgIG9uZVRoaXJkLmFwcGVuZENoaWxkKGNvbHVtbjMpO1xuXG4gICAgY29uc3QgdGl0bGVJbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGl0bGVJbWczLnNyYyA9IHJlYWxGb29kO1xuICAgIHRpdGxlSW1nMy5jbGFzc0xpc3QuYWRkKCd0aGlyZC1pbWcnKTtcbiAgICBjb2x1bW4zLmFwcGVuZENoaWxkKHRpdGxlSW1nMyk7XG5cbiAgICBjb25zdCBjb2x1bW5QMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb2x1bW5QMy5pbm5lclRleHQgPSBgV2UgdXNlIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cywgYXZvaWQgcHJlc2VydmF0aXZlcyB3aGVuZXZlciBwb3NzaWJsZSwgYW5kIG9mZmVyIHZlZ2FuLWZyaWVuZGx5IGRpc2hlcy5gO1xuICAgIGNvbHVtbjMuYXBwZW5kKGNvbHVtblAzKTtcblxuICAgIGNvbnN0IGNvbHVtbkEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbHVtbkEzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWxpbmsnKTtcbiAgICBjb2x1bW5BMy5pbm5lclRleHQgPSAnQUJPVVQgVVMnO1xuICAgIGNvbHVtbjMuYXBwZW5kQ2hpbGQoY29sdW1uQTMpO1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjcmVhdGVOYXZCYXIoKTtcbiAgICBjcmVhdGVIb21lKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuIiwiaW1wb3J0IGNyZWF0ZU5hdkJhciBmcm9tICcuLi9zZWN0aW9ucy9uYXYtYmFyJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi4vc2VjdGlvbnMvZm9vdGVyJztcblxuaW1wb3J0IGJsYWNrQmFyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvYmxhY2stYmFyX2JnLnN2Zyc7XG5pbXBvcnQgdXNhVG9kYXlCYWNrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWxsdXN0cmF0aW9uX2FsdG9uLWJyb3duLnBuZyc7XG5pbXBvcnQgc3BpY3lJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvc3BpY3ktaWNvbi5zdmcnO1xuaW1wb3J0IHZlZ2FuSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2ljb25zL3ZlZ2FuLWljb24uc3ZnJztcbmltcG9ydCBzcGljeUFuZFZlZ2FuSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2ljb25zL3NwaWN5LWFuZC12ZWdhbi1pY29uLnN2Zyc7XG5pbXBvcnQgdXNhVG9kYXlMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvdXNhLXRvZGF5LnBuZyc7XG5pbXBvcnQgaG9tZUJ1cmdlciBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaG9tZS1idWd1ZXIucG5nJztcbmltcG9ydCBmYWNlYm9va0xvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL2xvZ28tZmFjZWJvb2suc3ZnJztcbmltcG9ydCBwdWxsZWRQb3JrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvcHVsbGVkLXBvcmstcm9sbC5qcGcnO1xuaW1wb3J0IGZyaWVkQ2hpa2VuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvZnJpZWQtY2hpY2tlbi5qcGcnO1xuaW1wb3J0IGNyb3F1ZUJ1cmdlciBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2Nyb3F1ZS1nYXJjb24tYnVyZ2VyLmpwZyc7XG5pbXBvcnQgYmxvY2tCdXJnZXIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9ibG9jay1idXJnZXIuanBnJztcbmltcG9ydCBiYWNvbkFuZEJlcnQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9iYWNvbi1hbmQtYmVydC5qcGcnO1xuaW1wb3J0IHBvdXRpbmUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9wb3V0aW5lLmpwZyc7XG5pbXBvcnQgZHVja0R1Y2sgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9kdWNrLWR1Y2stZ29vc2UtZnJpZXMuanBnJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaW1nLCB0aXRsZSwgYXR0cmlidXRlLCBkZXNjcmlwdGlvbikge1xuXG4gICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBsZXQgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGl0ZW1JbWcuc3JjID0gaW1nO1xuICAgIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbWcnKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcblxuICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuXG4gICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICdzcGljeScpIHtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhdHRyaWJ1dGUuY2xhc3NMaXN0LmFkZCgnYXR0cmlidXRlLWltZy1zJyk7XG4gICAgICAgIGF0dHJpYnV0ZS5zcmMgPSBzcGljeUljb247XG4gICAgICAgIGl0ZW1UaXRsZS5hcHBlbmRDaGlsZChhdHRyaWJ1dGUpO1xuICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAndmVnYW4nKSB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXR0cmlidXRlLmNsYXNzTGlzdC5hZGQoJ2F0dHJpYnV0ZS1pbWctdicpO1xuICAgICAgICBhdHRyaWJ1dGUuc3JjID0gdmVnYW5JY29uO1xuICAgICAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQoYXR0cmlidXRlKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZSA9PT0gJ3NwaWN5LXZlZ2FuJykge1xuICAgICAgICBsZXQgYXR0cmlidXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGF0dHJpYnV0ZS5jbGFzc0xpc3QuYWRkKCdhdHRyaWJ1dGUtaW1nLXN2Jyk7XG4gICAgICAgIGF0dHJpYnV0ZS5zcmMgPSBzcGljeUFuZFZlZ2FuSWNvbjtcbiAgICAgICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGF0dHJpYnV0ZSk7XG4gICAgfSBlbHNlIHtcblxuICAgIH1cblxuICAgIGxldCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIHNlcGFyYXRvci5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3InKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuXG4gICAgbGV0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbU5vSW1nKHRpdGxlLCBhdHRyaWJ1dGUsIGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuXG4gICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICdzcGljeScpIHtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhdHRyaWJ1dGUuY2xhc3NMaXN0LmFkZCgnYXR0cmlidXRlLWltZy1zJyk7XG4gICAgICAgIGF0dHJpYnV0ZS5zcmMgPSBzcGljeUljb247XG4gICAgICAgIGl0ZW1UaXRsZS5hcHBlbmRDaGlsZChhdHRyaWJ1dGUpO1xuICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAndmVnYW4nKSB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXR0cmlidXRlLmNsYXNzTGlzdC5hZGQoJ2F0dHJpYnV0ZS1pbWctdicpO1xuICAgICAgICBhdHRyaWJ1dGUuc3JjID0gdmVnYW5JY29uO1xuICAgICAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQoYXR0cmlidXRlKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZSA9PT0gJ3NwaWN5LXZlZ2FuJykge1xuICAgICAgICBsZXQgYXR0cmlidXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGF0dHJpYnV0ZS5jbGFzc0xpc3QuYWRkKCdhdHRyaWJ1dGUtaW1nLXN2Jyk7XG4gICAgICAgIGF0dHJpYnV0ZS5zcmMgPSBzcGljeUFuZFZlZ2FuSWNvbjtcbiAgICAgICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGF0dHJpYnV0ZSk7XG4gICAgfSBlbHNlIHtcblxuICAgIH1cblxuICAgIGxldCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIHNlcGFyYXRvci5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3InKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuXG4gICAgbGV0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxhY2stYmFyJyk7XG4gICAgbWVudVRpdGxlLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2JsYWNrQmFyfScpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0YDtcbiAgICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gJ01FTlUnO1xuICAgIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIGNvbnN0IGZlYXR1cmVkSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZlYXR1cmVkSXRlbXMuY2xhc3NMaXN0LmFkZCgnZ29sZC1zcGFjZWQnKTtcbiAgICBmZWF0dXJlZEl0ZW1zLmlubmVyVGV4dCA9ICdGRUFUVVJFRCBJVEVNUyc7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChmZWF0dXJlZEl0ZW1zKTtcblxuICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtY29udGFpbmVyJyk7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChvcHRpb25zQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHZlZ2FuT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmVnYW5PcHRpb24uY2xhc3NMaXN0LmFkZCgnb3B0aW9uJyk7XG4gICAgdmVnYW5PcHRpb24uaW5uZXJIVE1MID0gYDxpbWcgY2xhc3MgPSAnb3B0aW9ucy1pbWctdicgc3JjPScke3ZlZ2FuSWNvbn0nPjxwIGNsYXNzID0gJ3ZlZ2FuLXRleHQnPlZlZ2FuIE9wdGlvbjwvcD5gO1xuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodmVnYW5PcHRpb24pO1xuXG4gICAgY29uc3Qgc3BpY3lPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGljeU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcbiAgICBzcGljeU9wdGlvbi5pbm5lckhUTUwgPSBgPGltZyBjbGFzcyA9ICdvcHRpb25zLWltZy1zJyBzcmM9JyR7c3BpY3lJY29ufSc+PHAgY2xhc3MgPSAndmVnYW4tdGV4dCc+QXZhaWxhYmxlIFNwaWN5PC9wPmA7XG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGljeU9wdGlvbik7XG5cbiAgICBjb25zdCBtYWluTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudScpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk1lbnVDb250YWluZXIpO1xuXG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0ocHVsbGVkUG9yayxcbiAgICAgICAgJ1BVTExFRCBQT1JLIFJPTEwnLFxuICAgICAgICAnc3BpY3knLFxuICAgICAgICAnU2xvdy1icmFpc2VkIFRydWVicmlkZ2UgRmFybSBwb3JrIHNlcnZlZCBvbiBhIHNvdXJkb3VnaCBob2FnaWUgd2l0aCBTd2lzcyBjaGVlc2UsIG1heW8sIGNhcmFtZWxpemVkIG9uaW9uLCBtdXN0YXJkLCBhbmQgcGlja2xlcy4nKSk7XG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oZnJpZWRDaGlrZW4sXG4gICAgICAgICdQQyBGQVJNIEZSSUVEIENISUNLRU4gVEhJR0hTJyxcbiAgICAgICAgJ3NwaWN5JyxcbiAgICAgICAgJ09yZGVyIHlvdXJzZWxmIDIsIDMsIG9yIDQgcGllY2VzIG9mIHN1cGVyLWp1aWN5IFBDRiBidXR0ZXJtaWxrIHNvYWtlZCwgY3Jpc3B5IGNoaWNrZW4uIFNvIHRhc3R5ISBOb3QgdG8gYmUgbWlzc2VkLiBUcnkgaXQgXCJOYXNodmlsbGUgaG90XCIhJykpO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGNyb3F1ZUJ1cmdlcixcbiAgICAgICAgJ0NST1FVRSBHQVJDT04gQlVSR0VSJyxcbiAgICAgICAgJycsIGBJdCByaHltZXMgd2l0aCBcInNtb2tlIGNhcnMgb24sXCIgYW5kIGl0J3MgYSAxLzMgcG91bmQgSm9uJ3MgTmF0dXJhbHMgYnVyZ2VyIHdpdGggY2hlZXNlLCBoYW0sIGEgc3Vubnktc2lkZS11cCBFdmV0dGEgRmFybXMgZWdnLCBncmVlbiBvbmlvbiwgbXVzdGFyZCwgYW5kIHRydWZmbGUgbWF5byBvbiBhIENpYWJhdHRhIHJvbGwuYCkpO1xuXG4gICAgY29uc3QgdXNhVG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2FUb2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd1c2EtdG9kYXktY29udGFpbmVyJyk7XG4gICAgdXNhVG9kYXlDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7dXNhVG9kYXlCYWNrfScpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0YDtcbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2FUb2RheUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB1c2FUb2RheUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHVzYVRvZGF5SW1nLmNsYXNzTGlzdC5hZGQoJ3VzYS1pbWcnKTtcbiAgICB1c2FUb2RheUltZy5zcmMgPSB1c2FUb2RheUxvZ287XG4gICAgdXNhVG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodXNhVG9kYXlJbWcpO1xuXG4gICAgY29uc3QgdXNhVG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB1c2FUb2RheVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3VzYS10aXRsZScpO1xuICAgIHVzYVRvZGF5VGl0bGUuaW5uZXJUZXh0ID0gJ0JST1dOIENBTExTIFRIRSBDUk9RVUUgR0FSQ09OIEhJUyBGQVZPUklURSBIQU1CVVJHRVIgSU4gVEhFIENPVU5UUlkuJztcbiAgICB1c2FUb2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2FUb2RheVRpdGxlKTtcblxuICAgIGNvbnN0IHVzYVRvZGF5U3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdXNhVG9kYXlTdWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd1c2Etc3VidGl0bGUnKTtcbiAgICB1c2FUb2RheVN1YlRpdGxlLmlubmVyVGV4dCA9IGBIZSBzYXlzIGl0IGhhcyB0aGUgcGVyZmVjdCBtZWF0LXRvLWJ1biByYXRpby4gXCJUaGV5J3ZlIHR1cm5lZCB0aGUgaGFtYnVyZ2VyIGludG8gaGlnaCBhcnQuXCJgO1xuICAgIHVzYVRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHVzYVRvZGF5U3ViVGl0bGUpO1xuXG4gICAgY29uc3QgdXNhVG9kYXlTZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2FUb2RheVNlcGFyYXRvci5jbGFzc0xpc3QuYWRkKCd1c2Etc2VwYXJhdG9yJyk7XG4gICAgdXNhVG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodXNhVG9kYXlTZXBhcmF0b3IpO1xuXG4gICAgY29uc3QgdXNhVG9kYXlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHVzYVRvZGF5TGluay5jbGFzc0xpc3QuYWRkKCd1c2EtbGluaycpO1xuICAgIHVzYVRvZGF5TGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS90cmF2ZWwvZGVzdGluYXRpb25zLzEwZ3JlYXRwbGFjZXMvMjAxNS8wNi8yNi9hbHRvbi1icm93bi1yZXN0YXVyYW50LXJlY29tbWVuZGF0aW9ucy8yOTI3Nzc5My8nO1xuICAgIHVzYVRvZGF5TGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICB1c2FUb2RheUxpbmsuaW5uZXJIVE1MID0gYDxwIGNsYXNzID0gJ3VzYS1hcnRpY2xlLXRpdGxlJz5BbHRvbiBCcm93bidzIGZhdm9yaXRlIHJlc3RhdXJhbnRzIGZyb20gYSBjcm9zcy1jb3VudHJ5IHRyaXA8L3A+PGJyPjxwIGNsYXNzID0gJ3VzYS1hcnRpY2xlLWRhdGUnPkp1bmUgMjYsIDIwMTU8L3A+YFxuICAgIHVzYVRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHVzYVRvZGF5TGluayk7XG5cbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShibG9ja0J1cmdlcixcbiAgICAgICAgJ0JMT0NLIEJVUkdFUicsXG4gICAgICAgICd2ZWdhbicsIGBFYXJuIHlvdXIgc3RyZWV0IGNyZWQgYnkgZGl2aW5nIGludG8gdGhpcyAxLzMgcG91bmQgSm9uJ3MgTmF0dXJhbHMgYnVyZ2VyIHNlcnZlZCB3aXRoIGdvdWRhIGNoZWVzZSwgbWF5bywgbXVzdGFyZCwga2V0Y2h1cCwgbGV0dHVjZSwgdG9tYXRvLCBvbmlvbiwgYW5kIHBpY2tsZS5gKSk7XG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oYmFjb25BbmRCZXJ0LFxuICAgICAgICAnQkFDT04gJiBCUklFJyxcbiAgICAgICAgJycsIGBUaGljay1jdXQgYmFjb24sIEJyaWUsIHNlYXNvbmFsIGZydWl0IGJ1dHRlciwgYW5kIGFydWd1bGEgc2VydmVkIG9uIExlIFF1YXJ0aWVyIGJyZWFkLmApKTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShwb3V0aW5lLFxuICAgICAgICAnUE9VVElORScsXG4gICAgICAgICcnLCBgQSBnaWZ0IGZyb20gbm9ydGggb2YgdGhlIGJvcmRlci4gRnJlbmNoIGZyaWVzIHRvcHBlZCB3aXRoIGNoZWVzZSBjdXJkcyBhbmQgc21vdGhlcmVkIGluIGJlZWYgZ3JhdnkuYCkpO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGR1Y2tEdWNrLFxuICAgICAgICAnRFVDSyBEVUNLIEdPT1NFIEZSSUVTJyxcbiAgICAgICAgJycsIGBEdWNrIGNvbmZpdCwgY3Jpc3B5IHNraW4sIGNoZWVzZSBjdXJkcywgbWF5bywgZ3JhdnksIGFuZCBnb29zZWJlcnJ5IGdhc3RyaXF1ZSDigJQgeWVhaCwgeW91IHJlYWQgdGhhdCByaWdodCDigJQgb3ZlciBhIGJhc2tldCBvZiBmcmllcy5gKSk7XG5cblxuICAgIGNvbnN0IGRhaWx5U3BlY2lhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhaWx5U3BlY2lhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1zcGVjaWFsLW1lbnUnKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhaWx5U3BlY2lhbENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidXJndWVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBidXJndWVyTGluay5jbGFzc0xpc3QuYWRkKCdsZWZ0LWluZm8nKTtcbiAgICBidXJndWVyTGluay5ocmVmID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQmxvY2stMTYtMjc0ODM4ODE5MjM2MTQ4XCI7XG4gICAgYnVyZ3VlckxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgYnVyZ3VlckxpbmsuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSAnJHtob21lQnVyZ2VyfSc+YDtcbiAgICBkYWlseVNwZWNpYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ3VlckxpbmspO1xuXG4gICAgY29uc3QgcmlnaHRJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWluZm8nKTtcbiAgICBkYWlseVNwZWNpYWxDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRJbmZvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgPGg0PkRBSUxZIFNQRUNJQUw8L2g0PlxuICAgIDxwPldlIHNlcnZlIGEgbmV3IHNwZWNpYWwgZXZlcnkgZGF5LiBIZWFkIG92ZXIgdG8gRmFjZWJvb2sgYW5kIFxuICAgIHNlZSB3aGF0IHdl4oCZcmUgc2VydmluZyB0b2RheS48L3A+YDtcbiAgICByaWdodEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZmJDYWxsb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZiQ2FsbG91dC5jbGFzc0xpc3QuYWRkKCdmYi1jYWxsb3V0Jyk7XG4gICAgZmJDYWxsb3V0LmhyZWYgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0Jsb2NrLTE2LTI3NDgzODgxOTIzNjE0OCc7XG4gICAgZmJDYWxsb3V0LnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGZiQ2FsbG91dC5pbm5lckhUTUwgPSBgRk9MTE9XIFVTIE9OIEZBQ0VCT09LIFRPIFNFRSBEQUlMWSBTUEVDSUFMUyBJTiBZT1VSIFwiRkVFRFwiISA8aW1nIHNyYyA9IFwiJHtmYWNlYm9va0xvZ299XCI+YDtcbiAgICByaWdodEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZmJDYWxsb3V0KTtcblxuICAgIGNvbnN0IHNlY29uZGFyeU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRhcnlNZW51LmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeS1tZW51Jyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRhcnlNZW51KTtcblxuXG4gICAgc2Vjb25kYXJ5TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKCdEVUNLIERVQ0sgR09PU0UgRlJJRVMnLFxuICAgICAgICAnc3BpY3ktdmVnYW4nLCBgRHVjayBjb25maXQsIGNyaXNweSBza2luLCBjaGVlc2UgY3VyZHMsIG1heW8sIGdyYXZ5LCBhbmQgZ29vc2ViZXJyeSBnYXN0cmlxdWUg4oCUIHllYWgsIHlvdSByZWFkIHRoYXQgcmlnaHQg4oCUIG92ZXIgYSBiYXNrZXQgb2YgZnJpZXMuYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnUE9VVElORSBCVVJSSVRPJyxcbiAgICAgICAgJ3ZlZ2FuJywgYFJvYXN0ZWQgYnJpc2tldCwgcmVnaW9uYWwgY3VyZHMsIHRvdHMsIEIxNiBncmF2eSwgbWFsdCB2aW5lZ2FyIGFpb2xpIGFsbCB3cmFwcGVkIHVwIGluIGEgZmxvdXIgdG9ydGlsbGEuYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnQkVMR0lBTiBTTUFTSDxzdXA+Mjwvc3VwPiBCVVJHRVInLFxuICAgICAgICAnJywgYERvdWJsZSBzbWFzaGVkIHdhZ3l1IHBhdHRpZXMsIGJyb3duIGJ1dHRlciBjb21wb3VuZCBtZWx0LCByYWlzaW4gamFtLCBTd2lzcywgb25pb25zLCBiYWNvbiwgYW5kIG1heW8gb24gYSBwb3RhdG8gYnVuLmApKTtcbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoJ0IxNiBIT1VTRSBTQUxBRCcsXG4gICAgICAgICd2ZWdhbicsIGBDaG9vc2UgZ3JpbGxlZCBjaGlja2VuLCB0ZW1wZWgsIHNlaXRhbiwgb3Igd2lsZCBzb2NrZXllIHNhbG1vbiAoKzMuMDApLiBXZSdsbCBtaXggaXQgdXAgd2l0aCBTcHJpbmcgbWl4LCBwaWNrbGVkIHJlZCBvbmlvbiwga2FsYW1hdGFzLCBxdWVzbyBmcmVzY28sIGFuZCBsb2NhbCB2ZWdnaWVzLmApKTtcbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoJzMgSEFQUElORVNTIEJVUkdFUicsXG4gICAgICAgICcnLCBgMS8zIGxiLiBwYXR0eSwgY3JhYiByYW5nb29uIGNyZWFtIGNoZWVzZSwgc3RpciBmcnkgc2xhdywgZ3JlZW4gb25pb24sIG1heW8sIHN3ZWV0IGFuZCBzcGljeSBjaGlsaSBvbiBhIHNlc2FtZSBidW4uYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnRFJBR09OIFdSQVAnLFxuICAgICAgICAndmVnYW4nLCBgR3JpbGxlZCBuYWFuIHdyYXBwZWQgYXJvdW5kIHBpY2tsZWQgdmVnZ2llIHNsYXcsIGh1bW11cywgYXJ1Z3VsYSwgZnJpZXMsIGFuZCBkcmFnb24gc2F1Y2UuIEF2YWlsYWJsZSB3aXRoIFBDRiBjaGlja2VuLCBzZWl0YW4sIHRlbXBlaCwgb3Igd2lsZCBzb2NrZXllIHNhbG1vbiAoKzMuMDApLmApKTtcbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoJ0ZFQVRVUkVEIEdSSUxMRUQgQ0hFRVNFIFNBTkRXSUNIJyxcbiAgICAgICAgJycsIGBDaGVjayBvdXQgb3VyIGZ1bGx5IGxvYWRlZCwgc3VwZXItdGFzdHksIGRhaWx5IGdyaWxsZWQgY2hlZXNlIGNyZWF0aW9uLmApKTtcbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoJ1JFTkVHQURFIENISUNLRU5XSUNIJyxcbiAgICAgICAgJ3NwaWN5JywgYEZyaWVkIFBDRiBjaGlja2VuLCA3IHBlcHBlciBOYXNodmlsbGUgZXh0cmEgaG90LCBidXR0ZXJtaWxrIGRpbGwgc2xhdywgaGFiYW5lcm8gcGlja2xlcywgbWF5byBvbiBhIHNlc2FtZSBzZWVkIGJ1bi4gKEF2YWlsYWJsZSBub3Qgc3BpY3kpYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnTUFDS1JJQkVPJyxcbiAgICAgICAgJycsIGBIb3VzZSBiYWJ5IGJhY2sgcmliIGFuZCBiZWVmIHBhdHR5LCBhZ3JvZG9sY2UgYmJxLCBvbmlvbiByaW5ncywgcGlja2xlLCBhbmQgbWF5by4gKEF2YWlsYWJsZSB2ZWdhbilgKSk7XG4gICAgc2Vjb25kYXJ5TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKCdEUkFHT04gRlJJRVMnLFxuICAgICAgICAndmVnYW4nLCBgU3BpY3kgZHJhZ29uIHNhdWNlLCBjaGVlc2UgY3VyZHMsIHNjYWxsaW9uLCBhbmQgYSBjcnVzaGVkIGZvcnR1bmUgY29va2llLmApKTtcbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoYFBPUCdTIEZSSUVTYCxcbiAgICAgICAgJycsIGBGcmllcyB0b3BwZWQgd2l0aCBncmlkZGxlZCBjaGVlc2UgY3VyZHMsIG1hY2VyYXRlZCByYWlzaW4sIGJyb3duIHN1Z2FyLCBicm93biBidXR0ZXIgcG9yaywgYmFjb24sIGdvb3NlYmVycnkgZ2FzdHJpcXVlLCBtYXlvLCBhbmQgY3J1c2hlZCBMdWtlbiB3YWZlci5gKSk7XG4gICAgc2Vjb25kYXJ5TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKGBPTUFIQSBGUklFU2AsXG4gICAgICAgICcnLCBgVG9wcGVkIHdpdGggd2FneXUgc2xvcHB5IGpvZSwgZ3JpZGRsZWQgY2hlZXNlIGN1cmRzLCBob3VzZSByYW5jaCwgRG9yb3RoeSBMeW5jaCwgc2NhbGxpb24sIGFuZCBEb3JpdG9zLmApKTtcblxuXG4gICAgY29uc3Qgc2lkZXNEcmlua3NNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZXNEcmlua3NNZW51LmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeS1tZW51Jyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlc0RyaW5rc01lbnUpO1xuXG4gICAgY29uc3Qgc2lkZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgc2lkZXNUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlcy10aXRsZScpO1xuICAgIHNpZGVzVGl0bGUuaW5uZXJIVE1MID0gJ1NJREVTJztcbiAgICBzaWRlc0RyaW5rc01lbnUuYXBwZW5kQ2hpbGQoc2lkZXNUaXRsZSk7XG5cbiAgICBjb25zdCBkcmlua3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZHJpbmtzVGl0bGUuY2xhc3NMaXN0LmFkZCgnZHJpbmtzLXRpdGxlJyk7XG4gICAgZHJpbmtzVGl0bGUuaW5uZXJIVE1MID0gJ0RSSU5LUyc7XG4gICAgc2lkZXNEcmlua3NNZW51LmFwcGVuZENoaWxkKGRyaW5rc1RpdGxlKTtcblxuICAgIGNvbnN0IHNpZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZXMuaW5uZXJIVE1MID0gYFNFQVNPTkVEIEZSSUVTPGJyPlNXRUVUIFBPVEFUTyBGUklFUzxicj5TSURFIFNBTEFEYDtcbiAgICBzaWRlcy5jbGFzc0xpc3QuYWRkKCdzaWRlcycpO1xuICAgIHNpZGVzRHJpbmtzTWVudS5hcHBlbmRDaGlsZChzaWRlcyk7XG5cbiAgICBjb25zdCBtYWtlQ29tYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWtlQ29tYm8uY2xhc3NMaXN0LmFkZCgnY29tYm8tY29udGFpbmVyJyk7XG4gICAgc2lkZXNEcmlua3NNZW51LmFwcGVuZENoaWxkKG1ha2VDb21ibyk7XG5cbiAgICBjb25zdCBjb21ib1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbWJvVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tYm8tdGl0bGUnKTtcbiAgICBjb21ib1RpdGxlLmlubmVyVGV4dCA9ICdNQUtFIElUIEEgQ09NQk8nO1xuICAgIG1ha2VDb21iby5hcHBlbmRDaGlsZChjb21ib1RpdGxlKTtcblxuICAgIGNvbnN0IGNvbWJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb21ib1RleHQuY2xhc3NMaXN0LmFkZCgnY29tYm8tdGV4dCcpO1xuICAgIGNvbWJvVGV4dC5pbm5lclRleHQgPSAnKyBBZGQgYSBzb2RhIGFuZCBzZWFzb25lZCBGcmVuY2ggZnJpZXMgdG8gYW55IGVudHLDqWUuJztcbiAgICBtYWtlQ29tYm8uYXBwZW5kQ2hpbGQoY29tYm9UZXh0KTtcblxuICAgIHNpZGVzRHJpbmtzTWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKGBTT0RBYCxcbiAgICAgICAgJycsIGBXZSBzZXJ2ZSBDb2tlLCBEaWV0IENva2UsIENoZXJyeSBDb2tlLCBHaW5nZXIgQWxlLCBibHVlIFBvd2VyYWRlLCBhbmQgaWNlZCB0ZWEuYCkpO1xuICAgIHNpZGVzRHJpbmtzTWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKGBCRUVSYCxcbiAgICAgICAgJycsIGBCZSBzdXJlIHRvIGNoZWNrIG91ciBiZWVyIGxpc3Qgd2hlbiB5b3UgdmlzaXQuIFdlIGFyZSBwcm91ZCB0byBmZWF0dXJlIGxvY2FsIGJyZXdlcmllcywgaW5jbHVkaW5nIEx1Y2t5IEJ1Y2tldCwgWmlwbGluZSwgVGh1bmRlcmhlYWQsIEVtcHlyZWFuLCBQZWFjZSBUcmVlLCBOZWJyYXNrYSBCcmV3aW5nLCBLaW5rYWlkZXIsIGFuZCBCcmlja3dheSBCcmV3ZXJpZXMuYCkpO1xuICAgIHNpZGVzRHJpbmtzTWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKGBXSU5FYCxcbiAgICAgICAgJycsIGBCZSBzdXJlIHRvIGNoZWNrIG91ciB3aW5lIGxpc3Qgd2hlbiB5b3UgdmlzaXQuIFdlIHNlcnZlIGEgdmFyaWV0eSBvZiB3aW5lcywgaW5jbHVkaW5nIGNhYmVybmV0IHNhdXZpZ25vbiwgbWVybG90LCBwaW5vdCBub2lyLCBjaGFyZG9ubmF5LCBzYXV2aWdub24gYmxhbmMsIGFuZCByaWVzbGluZy5gKSk7XG5cbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY3JlYXRlTmF2QmFyKCk7XG4gICAgY3JlYXRlTWVudSgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgZm9vdGVyVmlkZW9CYWNrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9mb290ZXJWaWRlby5tcDQnO1xuaW1wb3J0IGdpdEh1YkxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL2xvZ28tZ2l0aHViLnN2ZydcbmltcG9ydCBmb290ZXJCMTYgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2xvZ28tZm9vdGVyLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGNvbnN0IGZvb3RlckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIGZvb3RlckJhY2tncm91bmQuaWQgPSAnZm9vdGVyLWJhY2tncm91bmQnO1xuICAgIGZvb3RlckJhY2tncm91bmQucHJlbG9hZCA9ICdhdXRvJztcbiAgICBmb290ZXJCYWNrZ3JvdW5kLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICBmb290ZXJCYWNrZ3JvdW5kLm11dGVkID0gdHJ1ZTtcbiAgICBmb290ZXJCYWNrZ3JvdW5kLmxvb3AgPSB0cnVlO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJCYWNrZ3JvdW5kKTtcblxuICAgIGNvbnN0IGZvb3RlclZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgZm9vdGVyVmlkZW8uc3JjID0gZm9vdGVyVmlkZW9CYWNrO1xuICAgIGZvb3RlclZpZGVvLnR5cGUgPSAndmlkZW8vbXA0JztcbiAgICBmb290ZXJCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGZvb3RlclZpZGVvKTtcblxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpbmZvVGl0bGUuaWQgPSAnbG9nby1mb290ZXInO1xuICAgIGluZm9UaXRsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iMTZGb290ZXInLGB1cmwoJyR7Zm9vdGVyQjE2fScpYCk7XG4gICAgaW5mb1RpdGxlLmlubmVyVGV4dCA9ICdIT1VSUyBPRiBPUEVSQVRJT04nO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlKTtcblxuICAgIGNvbnN0IHN0b3JlSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9yZUhvdXJzLmNsYXNzTGlzdC5hZGQoJ3N0b3JlLWhvdXJzJyk7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZUhvdXJzKTtcblxuICAgIGNvbnN0IGhvdXJzUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNQMS5pbm5lckhUTUwgPSAnPGI+TU9OREFZIC0gU0FUVVJEQVk8L2I+OiAxMSBBLk0uIHRvIDIgUC5NLic7XG4gICAgc3RvcmVIb3Vycy5hcHBlbmRDaGlsZChob3Vyc1AxKTtcblxuICAgIGNvbnN0IGhvdXJzUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNQMi5pbm5lckhUTUwgPSAnPGI+VEhVUlNEQVkgLSBTQVRVUkRBWTwvYj46IDUgUC5NLiB0byA4IFAuTS4nO1xuICAgIHN0b3JlSG91cnMuYXBwZW5kQ2hpbGQoaG91cnNQMik7XG5cbiAgICBjb25zdCBzdG9yZUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcmVMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdzdG9yZS1sb2NhdGlvbicpO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcmVMb2NhdGlvbik7XG5cbiAgICBjb25zdCBsb2NhdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25QLmlubmVySFRNTCA9ICcxNjExIEZhcm5hbSBTdHJlZXQ8YnI+T21haGEsIE5lYnJhc2thIDY4MTA2PGJyPmJsb2NrMTZpbmZvQGdtYWlsLmNvbSc7XG4gICAgc3RvcmVMb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblApO1xuXG4gICAgY29uc3QgcGF5bWVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXltZW50SW5mby5pbm5lckhUTUwgPSAnRWF0IGluIG9yIHRha2Ugb3V0LiBXZSBhY2NlcHQgY3JlZGl0IGNhcmRzLCBwZXJzb25hbCBjaGVja3MsIGFuZCBjb2xkLWhhcmQgY2FzaC4nO1xuICAgIHBheW1lbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ3BheW1lbnQtaW5mbycpO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocGF5bWVudEluZm8pO1xuXG4gICAgY29uc3QgZGlzY2xhaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc2NsYWltZXIuY2xhc3NMaXN0LmFkZCgnZGlzY2xhaW1lcicpO1xuICAgIGRpc2NsYWltZXIuaW5uZXJIVE1MPWBEaXNjbGFpbWVyOiBUaGlzIG1vY2stdXAgd2ViIHBhZ2UgaGFzIGJlZW4gY3JlYXRlZCBmb3IgZWR1Y2F0aW9uYWwgYW5kIHBvcnRmb2xpbyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LiBJdCBpcyBhbiBpbWl0YXRpb24gb2YgYSByZWFsIHJlc3RhdXJhbnQgcGFnZSwgYW5kIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgdGhlIGNvbnRlbnQgYW5kIGltYWdlcnkgdXNlZCBhcmUgcGxhY2Vob2xkZXJzIG9yIHRha2VuIGZyb20gdGhlIG9yaWdpbmFsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlIHB1cmVseSBmb3IgZGVzaWduIGFuZCBwcmVzZW50YXRpb24gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIG5vdGUgdGhhdCB0aGlzIG1vY2stdXAgd2ViIHBhZ2UgaXMgbm90IGFmZmlsaWF0ZWQgd2l0aCwgZW5kb3JzZWQgYnksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvciBhc3NvY2lhdGVkIHdpdGggdGhlIGFjdHVhbCByZXN0YXVyYW50IGluIGFueSB3YXkuIFRoZSB1c2Ugb2YgdGhlIHJlc3RhdXJhbnQncyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgbG9nbywgb3IgYW55IG90aGVyIGJyYW5kaW5nIGVsZW1lbnRzIGlzIHB1cmVseSBmb3IgdmlzdWFsIHJlcHJlc2VudGF0aW9uIGFuZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9lcyBub3QgaW5kaWNhdGUgYW55IG9mZmljaWFsIGNvbm5lY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJIHJlc3BlY3QgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgcmVzdGF1cmFudCwgYW5kIGFueSB1c2Ugb2YgdGhlaXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgb24gdGhpcyBtb2NrLXVwIHdlYiBwYWdlIGlzIG5vdCBpbnRlbmRlZCB0byBpbmZyaW5nZSB1cG9uIHRoZWlyIHJpZ2h0cy4gSWYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBhcmUgdGhlIG93bmVyIG9mIHRoZSBvcmlnaW5hbCByZXN0YXVyYW50IGFuZCBoYXZlIGFueSBjb25jZXJucyBhYm91dCB0aGUgdXNhZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHlvdXIgY29udGVudCwgcGxlYXNlIGZlZWwgZnJlZSB0byA8YSBocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9SYXVsVXJkYW5ldGFHJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gJ19ibGFuayc+Y29udGFjdCBtZTwvYT4sIGFuZCBpIHdpbGwgcHJvbXB0bHkgYWRkcmVzcyB5b3VyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jZXJucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gc2VlIHRoZSBvcmlnaW5hbCBwYWdlIDxhIGhyZWYgPSAnaHR0cHM6Ly9ibG9jazE2b21haGEuY29tLycgdGFyZ2V0PSdfYmxhbmsnPkhlcmU8L2E+YDtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2NsYWltZXIpO1xuXG4gICAgY29uc3Qgd2Vic2l0ZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWJzaXRlSW5mby5jbGFzc0xpc3QuYWRkKCdjcmVhdG9yLWluZm8nKTtcbiAgICB3ZWJzaXRlSW5mby5pbm5lckhUTUw9YDxoMz5NYWRlIGJ5IDwvaDM+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9SYXVsVXJkYW5ldGFHXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIke2dpdEh1YkxvZ299XCIgYWx0PVwiR2l0aHViIGxvZ29cIj48L2E+PGgzPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmF1bFVyZGFuZXRhR1wiIHRhcmdldD1cIl9ibGFua1wiPlJhdWwgVXJkYW5ldGE8L2E+PC9oMz5gO1xuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWJzaXRlSW5mbyk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyOyIsImltcG9ydCBCMTZMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9sb2dvQDJ4LnBuZyc7XG5pbXBvcnQgaGVhZGVyRnJpbGxzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLWZyaWxscy5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIGNvbnN0IHNlY3Rpb25IZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbkhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1sb2dvJyk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXJMb2dvKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuICAgIGhlYWRlckxvZ28uc3JjID0gQjE2TG9nbztcbiAgICBzZWN0aW9uSGVhZGVyTG9nby5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcblxuICAgIGNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51Jyk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhlYWRlck1lbnUpO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdob21lLWxpbmsnKTtcbiAgICBob21lVGl0bGUuaW5uZXJUZXh0ID0gJ0hPTUUnO1xuICAgIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcblxuICAgIGNvbnN0IG1lbnV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWVudXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWxpbmsnKVxuICAgIG1lbnV0VGl0bGUuaW5uZXJUZXh0ID0gJ01FTlUnO1xuICAgIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQobWVudXRUaXRsZSk7XG5cbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFib3V0VGl0bGUuY2xhc3NMaXN0LmFkZCgnYWJvdXQtbGluaycpO1xuICAgIGFib3V0VGl0bGUuaW5uZXJUZXh0ID0gJ0FCT1VUJztcbiAgICBoZWFkZXJNZW51LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xuXG4gICAgY29uc3QgZnJpbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJpbGxzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1mcmlsbHMnKTtcbiAgICBmcmlsbHMuc3R5bGUuc2V0UHJvcGVydHkoJy0tZnJpbGxzJyxgdXJsKCR7aGVhZGVyRnJpbGxzfSlgKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZnJpbGxzKTtcblxuICAgIHNlY3Rpb25IZWFkZXJMb2dvLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZCYXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3NyYy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3JjL2Nzcy9uYXYtYmFyLmNzcyc7XG5pbXBvcnQgJy4uL3NyYy9jc3MvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4uL3NyYy9jc3MvaG9tZS5jc3MnO1xuaW1wb3J0ICcuLi9zcmMvY3NzL21lbnUuY3NzJztcbmltcG9ydCAnLi4vc3JjL2Nzcy9hYm91dC5jc3MnO1xuXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi4vc3JjL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vcGFnZXMvbWVudSc7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gJy4vcGFnZXMvYWJvdXQnO1xuXG5sb2FkSG9tZSgpO1xuXG5mdW5jdGlvbiBjaGVja0J1dHRvbnMoKXtcbiAgICBcbiAgICBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpKTtcbiAgICBcbiAgICBsaW5rcy5mb3JFYWNoKChidXR0b24pID0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1saW5rJykpIHtcbiAgICAgICAgICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b25zKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaG9tZS1saW5rJykpIHtcbiAgICAgICAgICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b25zKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWJvdXQtbGluaycpKSB7XG4gICAgICAgICAgICAgICAgbG9hZEFib3V0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmNoZWNrQnV0dG9ucygpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==