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


}`, "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;IACT,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,qBAAqB;IACrB,SAAS;IACT,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kCAAkC;IAClC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,gBAAgB;IAChB,WAAW;IACX,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,4BAA4B;IAC5B,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,mBAAmB;IACnB,eAAe;IACf,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,UAAU;IACV,WAAW;IACX,WAAW;IACX,yBAAyB;AAC7B;;AAEA;;IAEI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,WAAW;IACX,WAAW;IACX,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,qBAAqB;IACrB,OAAO;IACP,uBAAuB;IACvB,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;IACV,gBAAgB;IAChB,SAAS;;IAET,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI;QACI,mBAAmB;IACvB;;AAEJ;;AAEA;;IAEI;QACI,aAAa;QACb,SAAS;QACT,kBAAkB;QAClB,qBAAqB;QACrB,SAAS;IACb;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;QAClB,kCAAkC;QAClC,cAAc;QACd,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,UAAU;QACV,gBAAgB;QAChB,WAAW;QACX,gCAAgC;QAChC,6BAA6B;IACjC;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;IACtB;;IAEA;QACI,SAAS;QACT,eAAe;QACf,4BAA4B;QAC5B,YAAY;QACZ,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,cAAc;QACd,qCAAqC;QACrC,mBAAmB;QACnB,eAAe;QACf,SAAS;IACb;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;;IAEA;QACI,YAAY;IAChB;AACJ;;AAEA;;IAEI;QACI,cAAc;;IAElB;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;QACvB,kBAAkB;IACtB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;QAClB,kCAAkC;QAClC,cAAc;QACd,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,UAAU;QACV,gBAAgB;QAChB,WAAW;QACX,gCAAgC;QAChC,6BAA6B;IACjC;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;IACtB;;IAEA;QACI,SAAS;QACT,eAAe;QACf,4BAA4B;QAC5B,YAAY;QACZ,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,cAAc;QACd,qCAAqC;QACrC,mBAAmB;QACnB,eAAe;QACf,SAAS;IACb;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;IACtB;;;AAGJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500&family=Montserrat:wght@300&display=swap');\n\n.menu-container {\n    margin: 0 18vw 0 17.5vw;\n}\n\n.main-menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    margin-bottom: 30px;\n}\n\n.item-img {\n    display: flex;\n    width: clamp(220px,100%,520px);\n    margin: 0 10px;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    margin: 0;\n}\n\n.name {\n    font-size: 30px;\n    color: #333333;\n    font-weight: 300;\n    margin: 0;\n}\n\n.attribute-img-s {\n    width: 28px;\n}\n\n.attribute-img-v {\n    width: 18px;\n}\n\n.attribute-img-sv {\n    width: 50px;\n}\n\n\n.separator {\n    width: 60px;\n    height: 2px;\n    background-color: #494949;\n    margin: 8px auto;\n}\n\n.item-description {\n    font-family: 'Merriweather', serif;\n    font-size: 14px;\n    margin: 0 1.5vw 19.6px;\n    margin-top: 0;\n    color: #494949;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 300;\n}\n\n.menu-header{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1200px;\n    margin: auto;\n    padding-top: 43px;\n}\n\n.black-bar{\n    margin: 0;\n    font-family: 'Montserrat',sans-serif;\n    padding: 13px;\n    width: min(100%,437px);\n    letter-spacing: 5px;\n    text-align: center;\n    font-size: 15px;\n    color: white;\n    margin-bottom: 14px;\n}\n\n.gold-spaced{\n    color: #DDB78E;\n    font-size: 15px;\n    font-family: 'Bitter',serif;\n    letter-spacing: 5px;\n    margin: 0;\n    margin-bottom: 25px ;\n    padding-bottom: 18px;\n}\n\n.option p{\n    font-family: 'Montserrat',sans-serif;\n    font-size: 12px;\n    letter-spacing: 1px;\n    margin: 0;\n}\n\n.options-container{\n    display: flex;\n    gap: 20px;\n    align-self: end;\n    align-content: center;\n    margin: 0;\n    margin-bottom: 16px;\n    margin-right: 25px;\n}\n\n.option{\n    display: flex;\n    gap: 5px;\n}\n\n.options-img-s{\n    width: 20px;\n}\n\n.options-img-v {\n    width: 16px;\n}\n\n.usa-today-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.usa-img {\n    margin: 0 auto 20px;\n}\n\n.usa-title {\n    font-size: 34px;\n    margin: 0 10% 24px;\n}\n\n.usa-subtitle {\n    font-size: 17px;\n    margin: 0 10% 40px;\n    font-family: 'merriweather', serif;\n    color: #494949;\n    line-height: 30px;\n}\n\n.usa-separator {\n    height: 7px;\n    width: 80%;\n    margin: 0 0 30px;\n    content: '';\n    border-bottom: 1px solid #CCCCCC;\n    border-top: 1px solid #CCCCCC;\n}\n\n.usa-link {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-decoration: none;\n    margin: 0 25% 17px;\n}\n\n.usa-article-title {\n    margin: 0;\n    font-size: 15px;\n    font-family: 'Bitter', serif;\n    color: black;\n    letter-spacing: 1px;\n    font-weight: 500;\n}\n\n.usa-article-date {\n    color: #666666;\n    font-family: 'Montserrat', sans-serif;\n    letter-spacing: 1px;\n    font-size: 12px;\n    margin: 0;\n}\n\n\n.daily-special-menu {\n    display: flex;\n    margin: 0 0 60px;\n}\n\n.secondary-menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    column-gap: 50px;\n    margin-bottom: 70px;\n}\n\n.sides-drinks-menu-title {\n    display: flex;\n    gap: 50px;\n}\n\n.sides-title::before,\n.drinks-title::before   {\n    position: absolute;\n    top: 51%;\n    right: 70%;\n    width: 50%;\n    height: 1px;\n    content: '';\n    background-color: #CCCCCC;\n}\n\n.sides-title::after,\n.drinks-title::after  {\n    position: absolute;\n    top: 51%;\n    left: 70%;\n    width: 50%;\n    height: 1px;\n    content: '';\n    background-color: #CCCCCC;\n}\n\n.sides-title,\n.drinks-title {\n    display: flex;\n    align-content: center;\n    flex: 1;\n    justify-content: center;\n    position: relative;\n    font-family: \"Bitter\", serif;\n    font-size: 15px;\n    color: #DDB78E;\n    text-transform: uppercase;\n    letter-spacing: 6px;\n    z-index: 1;\n    overflow: hidden;\n    margin: 0;\n    ;\n    margin-bottom: 20px;\n    width: min(100%,450px);\n}\n\n.sides {\n    text-align: center;\n    font-size: 30px;\n    font-weight: 300;\n    color: #333333;\n}\n\n.combo-container {\n    display: flex;\n    flex-direction: column;\n    padding: 16px 20px 0;\n    height: 105px;\n    border: 2px solid #CCCCCC;\n    align-items: center;\n    justify-content: center;\n    grid-row: 3/5;\n}\n\n.combo-container p {\n    text-align: center;\n}\n\n.combo-title {\n    color: #333333;\n    font-size: 30px;\n    margin: 0 0 6px;\n}\n\n.combo-text {\n    font-family: 'Merriweather', serif;\n    color: #494949;\n    font-size: 16px;\n    margin: 0 0 22px;\n}\n\n@media (max-width:1220px){\n    .daily-specia-menul{\n        margin: 0 20px 20px;\n    }\n\n}\n\n@media (max-width:1170px){\n\n    .options-container{\n        display: flex;\n        gap: 20px;\n        align-self: center;\n        align-content: center;\n        margin: 0;\n    }\n    \n    .usa-img {\n        margin: 0 auto 20px;\n    }\n    \n    .usa-title {\n        font-size: 25px;\n        margin: 0 10% 10px;\n    }\n    \n    .usa-subtitle {\n        font-size: 15px;\n        margin: 0 10% 10px;\n        font-family: 'merriweather', serif;\n        color: #494949;\n        line-height: 20px;\n    }\n    \n    .usa-separator {\n        height: 7px;\n        width: 80%;\n        margin: 0 0 10px;\n        content: '';\n        border-bottom: 1px solid #CCCCCC;\n        border-top: 1px solid #CCCCCC;\n    }\n    \n    .usa-link {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-decoration: none;\n        margin: 0 25% 10px;\n    }\n    \n    .usa-article-title {\n        margin: 0;\n        font-size: 15px;\n        font-family: 'Bitter', serif;\n        color: black;\n        letter-spacing: 1px;\n        font-weight: 500;\n    }\n    \n    .usa-article-date {\n        color: #666666;\n        font-family: 'Montserrat', sans-serif;\n        letter-spacing: 1px;\n        font-size: 12px;\n        margin: 0;\n    }\n}\n\n@media (max-width:900px){\n    .daily-special-menu{\n        flex-direction: column;\n    }\n    .right-info{\n        border-left: 2px solid #E2E2E2;\n    }\n\n    .left-info{\n        border: none;\n    }\n}\n\n@media (max-width:700px){\n\n    .menu-container{\n        margin: 0 20px;\n        \n    }\n\n    .main-menu{\n        grid-template-columns: 1fr;\n    }\n\n    .secondary-menu{\n        grid-template-columns: 1fr;\n    }\n\n    .usa-today-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n    }\n    \n    .usa-img {\n        margin: 0 auto 20px;\n    }\n    \n    .usa-title {\n        font-size: 34px;\n        margin: 0 10% 24px;\n    }\n    \n    .usa-subtitle {\n        font-size: 17px;\n        margin: 0 10% 40px;\n        font-family: 'merriweather', serif;\n        color: #494949;\n        line-height: 30px;\n    }\n    \n    .usa-separator {\n        height: 7px;\n        width: 80%;\n        margin: 0 0 30px;\n        content: '';\n        border-bottom: 1px solid #CCCCCC;\n        border-top: 1px solid #CCCCCC;\n    }\n    \n    .usa-link {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-decoration: none;\n        margin: 0 25% 17px;\n    }\n    \n    .usa-article-title {\n        margin: 0;\n        font-size: 15px;\n        font-family: 'Bitter', serif;\n        color: black;\n        letter-spacing: 1px;\n        font-weight: 500;\n    }\n    \n    .usa-article-date {\n        color: #666666;\n        font-family: 'Montserrat', sans-serif;\n        letter-spacing: 1px;\n        font-size: 12px;\n        margin: 0;\n    }\n\n    .sides-title{\n        grid-row: 1/2;\n    }\n    \n    .sides{\n        grid-row: 2/3;\n        margin-bottom: 30px;\n    }\n\n    .combo-container{\n        margin-bottom: 30px;\n    }\n\n    .name{\n        text-align: center;\n    }\n\n\n}"],"sourceRoot":""}]);
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

}`, "",{"version":3,"sources":["webpack://./src/css/nav-bar.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,gDAAgD;IAChD,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI;QACI,8BAA8B;QAC9B,cAAc;IAClB;;IAEA;QACI,eAAe;QACf,qBAAqB;IACzB;;AAEJ","sourcesContent":["header {\n    position: relative;\n    z-index: 10;\n}\n\n.section-header {\n    height: 62px;\n}\n\n.section-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n}\n\n.section-logo {\n    display: flex;\n    border: 1px solid white;\n    position: absolute;\n    background-color: black;\n    top: 5px;\n    left: 0px;\n    max-width: 130px;\n    align-items: center;\n    justify-content: center;\n}\n\n.header-logo {\n    width: 7vw;\n    max-width: 128px;\n    height: auto;\n}\n\n.header-menu {\n    display: flex;\n    color: black;\n    gap: 10vw;\n}\n\n.header-menu a {\n    font-size: 21px;\n    font-weight: 400;\n}\n\n.header-menu a:hover {\n    cursor: pointer;\n}\n\n\n.header-frills {\n    width: 100%;\n    height: 15px;\n    background: var(--frills) center center repeat-x;\n    border-top: 1px solid #E5E5E5;\n    border-bottom: 1px solid #E5E5E5;\n}\n\n@media (max-width:700px) {\n    .section-header {\n        justify-content: space-between;\n        margin: 0 20px;\n    }\n    \n    .section-logo{\n        position: unset;\n        align-content: center;\n    }\n\n}"],"sourceRoot":""}]);
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











(0,_pages_about__WEBPACK_IMPORTED_MODULE_8__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLDZDQUE2QztBQUNoSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZ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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsT0FBTyxtRkFBbUYsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsT0FBTyxtRkFBbUYsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEs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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDRTtBQUNEO0FBQ0Y7QUFDQTtBQUNDOztBQUVXO0FBQ0w7QUFDRTs7QUFFdEMsd0RBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFRO0FBQ3hCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCLDJEQUFRO0FBQ3hCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCLHdEQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbmF2LWJhci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC1pbWFnZXMvYWJvdXQtdXMtaGVyb19sYXJnZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaW1hZ2VzL2lsbHVzdHJhdGlvbi1iZWV0LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC1pbWFnZXMvaWxsdXN0cmF0aW9uLXdoZWF0LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC1pbWFnZXMvb3VyLW1lbW9yaWVzX21lZGl1bS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLWZyaWxscy5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9mb290ZXJWaWRlby5tcDQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9ob21lLWJ1Z3Vlci5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9ob21lVmlkZW8ubXA0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWNvbnMvZmFybS10by10YWJsZS5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9mcmVlLWhpZ2gtZml2ZXMuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWNvbnMvbG9nby1mYWNlYm9vay5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9sb2dvLWdpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pY29ucy9yZWFsLWxvY2FsLWZvb2Quc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWNvbnMvcm9sbC11cC15b3VyLXNsZWV2ZXMuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWxsdXN0cmF0aW9uLWNoaWNrZW4ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWxsdXN0cmF0aW9uLW9uaW9uLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2lsbHVzdHJhdGlvbi1wbGFudC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9sb2dvLWZvb3Rlci5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9sb2dvQDJ4LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXRpY2UucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2JhY29uLWFuZC1iZXJ0LmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9ibG9jay1idXJnZXIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2Nyb3F1ZS1nYXJjb24tYnVyZ2VyLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9kdWNrLWR1Y2stZ29vc2UtZnJpZXMuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2ZyaWVkLWNoaWNrZW4uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2ljb25zL2JsYWNrLWJhcl9iZy5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvc3BpY3ktYW5kLXZlZ2FuLWljb24uc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2ljb25zL3NwaWN5LWljb24uc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2ljb25zL3ZlZ2FuLWljb24uc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2lsbHVzdHJhdGlvbl9hbHRvbi1icm93bi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvcG91dGluZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvcHVsbGVkLXBvcmstcm9sbC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvdXNhLXRvZGF5LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2Fib3V0LmNzcz8zODdmIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvZm9vdGVyLmNzcz9hYjhjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3M/MDg0NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzP2RkZWMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9uYXYtYmFyLmNzcz82NWM0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NlY3Rpb25zL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2VjdGlvbnMvbmF2LWJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Qml0dGVyOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVyby1hYm91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogODU1cHg7XG4gICAgbWF4LXdpZHRoOiAxOTA1cHg7XG4gICAgei1pbmRleDogLTI7XG4gICAgdG9wOiAtMTVweDtcbn1cblxuLmFib3V0LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTU1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzF2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJsYWNrLWJhci1hYm91dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICB3aWR0aDogbWluKDEwMCUsNDIwcHgpO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmJsYWNrLWJhci1hYm91dDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrYmFyLWFmdGVyKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxNTNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ibGFjay1iYXItZm9vdGVyIHtcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmb250LWZhbWlseTogJ0JpdHRlcicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5oaXN0b3J5LXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGlzdG9yeS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGlzdG9yeS1jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaXN0b3J5LWFmdGVyKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgcmlnaHQ6IDI3MHB4O1xufVxuXG4uaGlzdG9yeS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIG1hcmdpbjogMCAxNXZ3IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaGlzdG9yeS10aXRsZS10ZXh0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS44O1xufVxuXG4uaGlzdG9yeS10aXRsZSBwOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaGlzdG9yeS1xdW90ZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIHdvcmQtc3BhY2luZzogMi41cHg7XG4gICAgbWFyZ2luOiAwIDd2dyAzNnB4O1xuICAgIGZvbnQtc2l6ZTogNDNweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmhpc3RvcnktdGV4dCB7XG4gICAgbWFyZ2luOiAwIDE1dncgNTBweDtcbiAgICBmb250LWZhbWlseTogJ21lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5tZW1vcmllcy1oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4uY29udGFpbmVyLW1lbW9yaWVzLXRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250YWluZXItbWVtb3JpZXMtdGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IC45O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCl7XG4gICAgLmFib3V0LXRpdGxle1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuYmxhY2stYmFyLWFib3V0OjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTNweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyLW1lbW9yaWVzLXRleHQgcHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NTYxcHgpIHtcbiAgICAuaGlzdG9yeS10aXRsZSBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5oaXN0b3J5LXRpdGxle1xuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgfVxuICAgIC5oaXN0b3J5LXF1b3Rle1xuICAgICAgICBtYXJnaW46IDAgOHZ3IDM2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5REFBeUQ7SUFDekQsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsT0FBTztRQUNQLFdBQVc7UUFDWCxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaXR0ZXI6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4uaGVyby1hYm91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogODU1cHg7XFxuICAgIG1heC13aWR0aDogMTkwNXB4O1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgdG9wOiAtMTVweDtcXG59XFxuXFxuLmFib3V0LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDE1NXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMXZ3O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmJsYWNrLWJhci1hYm91dCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTFweDtcXG4gICAgd2lkdGg6IG1pbigxMDAlLDQyMHB4KTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLmJsYWNrLWJhci1hYm91dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2tiYXItYWZ0ZXIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTUzcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1NXB4O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJsYWNrLWJhci1mb290ZXIge1xcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpc3Rvcnktc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGlzdG9yeS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGlzdG9yeS1jb250YWluZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhpc3RvcnktYWZ0ZXIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHJpZ2h0OiAyNzBweDtcXG59XFxuXFxuLmhpc3RvcnktdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBmb250LWZhbWlseTogJ21lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjNDk0OTQ5O1xcbiAgICBtYXJnaW46IDAgMTV2dyAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDY3MHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uaGlzdG9yeS10aXRsZS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXG59XFxuXFxuLmhpc3RvcnktdGl0bGUgcDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uaGlzdG9yeS1xdW90ZSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgd29yZC1zcGFjaW5nOiAyLjVweDtcXG4gICAgbWFyZ2luOiAwIDd2dyAzNnB4O1xcbiAgICBmb250LXNpemU6IDQzcHg7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uaGlzdG9yeS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwIDE1dncgNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdtZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzQ5NDk0OTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLm1lbW9yaWVzLWhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDcwcHggMDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xcbn1cXG5cXG4uY29udGFpbmVyLW1lbW9yaWVzLXRleHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lci1tZW1vcmllcy10ZXh0IHAge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAuOTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NzAwcHgpe1xcbiAgICAuYWJvdXQtdGl0bGV7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICB9XFxuICAgIC5ibGFjay1iYXItYWJvdXQ6OmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGhlaWdodDogMTUzcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDU1cHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB9XFxuICAgIC5jb250YWluZXItbWVtb3JpZXMtdGV4dCBwe1xcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjU2MXB4KSB7XFxuICAgIC5oaXN0b3J5LXRpdGxlIHA6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5oaXN0b3J5LXRpdGxle1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICB9XFxuICAgIC5oaXN0b3J5LXF1b3Rle1xcbiAgICAgICAgbWFyZ2luOiAwIDh2dyAzNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2Zvb3Rlci1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgaGVpZ2h0OiA3MjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xufVxuXG52aWRlbyB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvdmVyZmxvdzogY2xpcDtcbn1cblxuZm9vdGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5mb290ZXIgLmluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAxOHZ3O1xufVxuXG4uY29sdW1uIHtcbiAgICB3aWR0aDogNDkwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzNXZ3O1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbn1cblxuI2xvZ28tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG5mb290ZXIgaDQge1xuICAgIGNvbG9yOiAjRERCNzhFO1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkNGQ0ZDtcbn1cblxuZm9vdGVyIGg0OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxMDVweDtcbiAgICBoZWlnaHQ6IDczcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYjE2Rm9vdGVyKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbn1cblxuLnN0b3JlLWhvdXJzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkNGQ0ZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uc3RvcmUtaG91cnMgcCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4XG59XG5cbi5zdG9yZS1sb2NhdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDRkNGQ7XG59XG5cbi5zdG9yZS1sb2NhdGlvbiBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wYXltZW50LWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGQ0ZDRkO1xufVxuXG4uZGlzY2xhaW1lciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjN2Q3ZDdkO1xufVxuXG4uZGlzY2xhaW1lciBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jcmVhdG9yLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNyZWF0b3ItaW5mbyBoMyB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY3JlYXRvci1pbmZvIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jcmVhdG9yLWluZm8gaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ5NCUpIGh1ZS1yb3RhdGUoOWRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDExNiUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpe1xuICAgIC5jcmVhdG9yLWluZm97XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCkge1xuICAgICNmb290ZXItYmFja2dyb3VuZHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAzMCUpO1xuICAgIH1cbiAgICAuY29sdW1uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNDkwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIH1cblxuICAgIGZvb3RlciBoNDo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIG1pbi13aWR0aDogMTA1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDczcHg7XG4gICAgfVxuXG4gICAgI2xvZ28tZm9vdGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnN0b3JlLWhvdXJzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zdG9yZS1sb2NhdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucGF5bWVudC1pbmZvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY3JlYXRvci1pbmZve1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDhGQUE4RjtBQUNsRzs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNmb290ZXItYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG52aWRlbyB7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlciAuaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDE4dnc7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICB3aWR0aDogNDkwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzV2dztcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbn1cXG5cXG4jbG9nby1mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmZvb3RlciBoNCB7XFxuICAgIGNvbG9yOiAjRERCNzhFO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcXG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkNGQ0ZDtcXG59XFxuXFxuZm9vdGVyIGg0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwNXB4O1xcbiAgICBoZWlnaHQ6IDczcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iMTZGb290ZXIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbn1cXG5cXG4uc3RvcmUtaG91cnMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDRkNGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5zdG9yZS1ob3VycyBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweFxcbn1cXG5cXG4uc3RvcmUtbG9jYXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDRkNGQ7XFxufVxcblxcbi5zdG9yZS1sb2NhdGlvbiBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGF5bWVudC1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGQ0ZDRkO1xcbn1cXG5cXG4uZGlzY2xhaW1lciB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxufVxcblxcbi5kaXNjbGFpbWVyIGEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jcmVhdG9yLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY3JlYXRvci1pbmZvIGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY3JlYXRvci1pbmZvIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0b3ItaW5mbyBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0OTQlKSBodWUtcm90YXRlKDlkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCgxMTYlKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6MTIwMHB4KXtcXG4gICAgLmNyZWF0b3ItaW5mb3tcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XFxuICAgICNmb290ZXItYmFja2dyb3VuZHtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMzAlKTtcXG4gICAgfVxcbiAgICAuY29sdW1uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBtYXgtd2lkdGg6IDQ5MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciBoNDo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDVweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDczcHg7XFxuICAgIH1cXG5cXG4gICAgI2xvZ28tZm9vdGVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5zdG9yZS1ob3VycyB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnN0b3JlLWxvY2F0aW9uIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucGF5bWVudC1pbmZvIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuY3JlYXRvci1pbmZve1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhlcm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MnB4IC0gMTdweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2hvbWUtYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRvcDogNjJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYycHgpO1xufVxuXG52aWRlbyB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvdmVyZmxvdy1jbGlwLW1hcmdpbjogY29udGVudC1ib3g7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDAgMzUyLjVweDtcbn1cblxuLnN0cmVldC1mb29kIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzUlO1xuICAgIHdpZHRoOiAyNTlweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmhvbWUtY2FsbG91dHMge1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob21lLWZyaWxscyk7XG59XG5cbi5kYWlseS1zcGVjaWFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG59XG5cbi5sZWZ0LWluZm8ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG59XG5cbi5sZWZ0LWluZm8gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yaWdodC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTJFMkUyO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uZGVzY3JpcHRpb24sXG4uZmItY2FsbG91dCB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0UyRTJFMjtcbn1cblxuLmRlc2NyaXB0aW9uIGg0IHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5kZXNjcmlwdGlvbiBwIHtcbiAgICBtYXJnaW46IDAgMCA0MHB4IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mYi1jYWxsb3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZiLWNhbGxvdXQgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5vbmUtdGhpcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29sdW1uLWhvbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTJFMkUyO1xuICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbHVtbi1ob21lIHB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDAgMCA3MnB4IDA7XG4gICAgY29sb3I6ICMyYjJiMmI7XG59XG5cbi5jb2x1bW4taG9tZSBhe1xuICAgIGNvbG9yOiAjRERCNzhFO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb2x1bW4taG9tZSBhOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0REQjc4RTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wN3M7XG59XG5cbi5maXJzdC1pbWcge1xuICAgIG1hcmdpbjogMCAwIDM2cHg7XG59XG5cbi5zZWNvbmQtaW1nIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xufVxuXG4udGhpcmQtaW1ne1xuICAgIG1hcmdpbjogMCAwIDQ4cHg7XG59XG5cbi5ob21lLWNhbGxvdXRzIC5jb2x1bW4taG9tZTpmaXJzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgdmFyKC0tb25pb25CZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgcGFkZGluZzogODRweCAzMHB4IDQ2cHg7XG59XG5cbi5ob21lLWNhbGxvdXRzIC5jb2x1bW4taG9tZTpudGgtY2hpbGQoMikge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlIHZhcigtLWNoaWNrZW5CZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgcGFkZGluZzogNzJweCAzMHB4IDQ2cHg7XG59XG5cbi5ob21lLWNhbGxvdXRzIC5jb2x1bW4taG9tZTpsYXN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB2YXIoLS1iZWV0QmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDk0cHggMzBweCA0NnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMjIwcHgpe1xuICAgIC5vbmUtdGhpcmQsXG4gICAgLmRhaWx5LXNwZWNpYWx7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHg7XG4gICAgfVxuICAgIC5jb2x1bW4taG9tZXtcbiAgICAgICAgd2lkdGg6IG1heCg1MCUsMjkwcHgpO1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDMwcHg7XG4gICAgfVxuICAgIC5vbmUtdGhpcmR7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCl7XG4gICAgLmRhaWx5LXNwZWNpYWx7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5yaWdodC1pbmZve1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgfVxuXG4gICAgLmxlZnQtaW5mb3tcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJOztRQUVJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCAtIDE3cHgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUtYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHRvcDogNjJweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYycHgpO1xcbn1cXG5cXG52aWRlbyB7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIG92ZXJmbG93LWNsaXAtbWFyZ2luOiBjb250ZW50LWJveDtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1hcmdpbjogMCAzNTIuNXB4O1xcbn1cXG5cXG4uc3RyZWV0LWZvb2Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgd2lkdGg6IDI1OXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4uaG9tZS1jYWxsb3V0cyB7XFxuICAgIHBhZGRpbmc6IDgwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvbWUtZnJpbGxzKTtcXG59XFxuXFxuLmRhaWx5LXNwZWNpYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcXG59XFxuXFxuLmxlZnQtaW5mbyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XFxufVxcblxcbi5sZWZ0LWluZm8gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnJpZ2h0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLmZiLWNhbGxvdXQge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0UyRTJFMjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIGg0IHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgICBmb250LXNpemU6IDM0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBwIHtcXG4gICAgbWFyZ2luOiAwIDAgNDBweCAwO1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mYi1jYWxsb3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZmItY2FsbG91dCBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ub25lLXRoaXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jb2x1bW4taG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XFxuICAgIG1heC13aWR0aDogMzIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29sdW1uLWhvbWUgcHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiAwIDAgNzJweCAwO1xcbiAgICBjb2xvcjogIzJiMmIyYjtcXG59XFxuXFxuLmNvbHVtbi1ob21lIGF7XFxuICAgIGNvbG9yOiAjRERCNzhFO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29sdW1uLWhvbWUgYTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0REQjc4RTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDdzO1xcbn1cXG5cXG4uZmlyc3QtaW1nIHtcXG4gICAgbWFyZ2luOiAwIDAgMzZweDtcXG59XFxuXFxuLnNlY29uZC1pbWcge1xcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xcbn1cXG5cXG4udGhpcmQtaW1ne1xcbiAgICBtYXJnaW46IDAgMCA0OHB4O1xcbn1cXG5cXG4uaG9tZS1jYWxsb3V0cyAuY29sdW1uLWhvbWU6Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB2YXIoLS1vbmlvbkJnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZzogODRweCAzMHB4IDQ2cHg7XFxufVxcblxcbi5ob21lLWNhbGxvdXRzIC5jb2x1bW4taG9tZTpudGgtY2hpbGQoMikge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB2YXIoLS1jaGlja2VuQmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiA3MnB4IDMwcHggNDZweDtcXG59XFxuXFxuLmhvbWUtY2FsbG91dHMgLmNvbHVtbi1ob21lOmxhc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB2YXIoLS1iZWV0QmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggNDZweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6MTIyMHB4KXtcXG4gICAgLm9uZS10aGlyZCxcXG4gICAgLmRhaWx5LXNwZWNpYWx7XFxuICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4O1xcbiAgICB9XFxuICAgIC5jb2x1bW4taG9tZXtcXG4gICAgICAgIHdpZHRoOiBtYXgoNTAlLDI5MHB4KTtcXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gICAgfVxcbiAgICAub25lLXRoaXJke1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NzAwcHgpe1xcbiAgICAuZGFpbHktc3BlY2lhbHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnJpZ2h0LWluZm97XFxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNFMkUyRTI7XFxuICAgIH1cXG5cXG4gICAgLmxlZnQtaW5mb3tcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaXR0ZXI6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIDE4dncgMCAxNy41dnc7XG59XG5cbi5tYWluLW1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pdGVtLWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogY2xhbXAoMjIwcHgsMTAwJSw1MjBweCk7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5uYW1lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hdHRyaWJ1dGUtaW1nLXMge1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4uYXR0cmlidXRlLWltZy12IHtcbiAgICB3aWR0aDogMThweDtcbn1cblxuLmF0dHJpYnV0ZS1pbWctc3Yge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG5cbi5zZXBhcmF0b3Ige1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMCAxLjV2dyAxOS42cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLm1lbnUtaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNDNweDtcbn1cblxuLmJsYWNrLWJhcntcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyxzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgd2lkdGg6IG1pbigxMDAlLDQzN3B4KTtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5nb2xkLXNwYWNlZHtcbiAgICBjb2xvcjogI0REQjc4RTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLHNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHggO1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4ub3B0aW9uIHB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm9wdGlvbnMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4ub3B0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5vcHRpb25zLWltZy1ze1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ub3B0aW9ucy1pbWctdiB7XG4gICAgd2lkdGg6IDE2cHg7XG59XG5cbi51c2EtdG9kYXktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2EtaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xufVxuXG4udXNhLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgbWFyZ2luOiAwIDEwJSAyNHB4O1xufVxuXG4udXNhLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luOiAwIDEwJSA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi51c2Etc2VwYXJhdG9yIHtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQ0NDQ0M7XG59XG5cbi51c2EtbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAyNSUgMTdweDtcbn1cblxuLnVzYS1hcnRpY2xlLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnVzYS1hcnRpY2xlLWRhdGUge1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5cbi5kYWlseS1zcGVjaWFsLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIDAgNjBweDtcbn1cblxuLnNlY29uZGFyeS1tZW51IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4uc2lkZXMtZHJpbmtzLW1lbnUtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1MHB4O1xufVxuXG4uc2lkZXMtdGl0bGU6OmJlZm9yZSxcbi5kcmlua3MtdGl0bGU6OmJlZm9yZSAgIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MSU7XG4gICAgcmlnaHQ6IDcwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XG59XG5cbi5zaWRlcy10aXRsZTo6YWZ0ZXIsXG4uZHJpbmtzLXRpdGxlOjphZnRlciAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUxJTtcbiAgICBsZWZ0OiA3MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xufVxuXG4uc2lkZXMtdGl0bGUsXG4uZHJpbmtzLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogXCJCaXR0ZXJcIiwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjRERCNzhFO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuICAgIDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiBtaW4oMTAwJSw0NTBweCk7XG59XG5cbi5zaWRlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uY29tYm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTZweCAyMHB4IDA7XG4gICAgaGVpZ2h0OiAxMDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQ0NDQ0NDO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC1yb3c6IDMvNTtcbn1cblxuLmNvbWJvLWNvbnRhaW5lciBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21iby10aXRsZSB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMCAwIDZweDtcbn1cblxuLmNvbWJvLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMCAwIDIycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjEyMjBweCl7XG4gICAgLmRhaWx5LXNwZWNpYS1tZW51bHtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MTE3MHB4KXtcblxuICAgIC5vcHRpb25zLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBcbiAgICAudXNhLWltZyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC51c2EtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIG1hcmdpbjogMCAxMCUgMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzYS1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwIDEwJSAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ21lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgICAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC51c2Etc2VwYXJhdG9yIHtcbiAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgfVxuICAgIFxuICAgIC51c2EtbGluayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwIDI1JSAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAudXNhLWFydGljbGUtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBcbiAgICAudXNhLWFydGljbGUtZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KXtcbiAgICAuZGFpbHktc3BlY2lhbC1tZW51e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAucmlnaHQtaW5mb3tcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRTJFMkUyO1xuICAgIH1cblxuICAgIC5sZWZ0LWluZm97XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcblxuICAgIC5tZW51LWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5tYWluLW1lbnV7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5zZWNvbmRhcnktbWVudXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLnVzYS10b2RheS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAudXNhLWltZyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC51c2EtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIG1hcmdpbjogMCAxMCUgMjRweDtcbiAgICB9XG4gICAgXG4gICAgLnVzYS1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbWFyZ2luOiAwIDEwJSA0MHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ21lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgICAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC51c2Etc2VwYXJhdG9yIHtcbiAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgfVxuICAgIFxuICAgIC51c2EtbGluayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwIDI1JSAxN3B4O1xuICAgIH1cbiAgICBcbiAgICAudXNhLWFydGljbGUtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBcbiAgICAudXNhLWFydGljbGUtZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuc2lkZXMtdGl0bGV7XG4gICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlc3tcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAuY29tYm8tY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5uYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixjQUFj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a0JBQWtCO1FBQ2xCLGtDQUFrQztRQUNsQyxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGdDQUFnQztRQUNoQyw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULGVBQWU7UUFDZiw0QkFBNEI7UUFDNUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QscUNBQXFDO1FBQ3JDLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsU0FBUztJQUNiOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJpdHRlcjp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMCAxOHZ3IDAgMTcuNXZ3O1xcbn1cXG5cXG4ubWFpbi1tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLml0ZW0taW1nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGNsYW1wKDIyMHB4LDEwMCUsNTIwcHgpO1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmF0dHJpYnV0ZS1pbWctcyB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlLWltZy12IHtcXG4gICAgd2lkdGg6IDE4cHg7XFxufVxcblxcbi5hdHRyaWJ1dGUtaW1nLXN2IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XFxuICAgIG1hcmdpbjogOHB4IGF1dG87XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDAgMS41dncgMTkuNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBjb2xvcjogIzQ5NDk0OTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogNDNweDtcXG59XFxuXFxuLmJsYWNrLWJhcntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDEzcHg7XFxuICAgIHdpZHRoOiBtaW4oMTAwJSw0MzdweCk7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbi5nb2xkLXNwYWNlZHtcXG4gICAgY29sb3I6ICNEREI3OEU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLHNlcmlmO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHggO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcXG59XFxuXFxuLm9wdGlvbiBwe1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ub3B0aW9ucy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ub3B0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm9wdGlvbnMtaW1nLXN7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ub3B0aW9ucy1pbWctdiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG4udXNhLXRvZGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51c2EtaW1nIHtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcXG59XFxuXFxuLnVzYS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgbWFyZ2luOiAwIDEwJSAyNHB4O1xcbn1cXG5cXG4udXNhLXN1YnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBtYXJnaW46IDAgMTAlIDQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICAgIGNvbG9yOiAjNDk0OTQ5O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnVzYS1zZXBhcmF0b3Ige1xcbiAgICBoZWlnaHQ6IDdweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDQ0NDO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQ0NDQztcXG59XFxuXFxuLnVzYS1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBtYXJnaW46IDAgMjUlIDE3cHg7XFxufVxcblxcbi51c2EtYXJ0aWNsZS10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0JpdHRlcicsIHNlcmlmO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi51c2EtYXJ0aWNsZS1kYXRlIHtcXG4gICAgY29sb3I6ICM2NjY2NjY7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4uZGFpbHktc3BlY2lhbC1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwIDAgNjBweDtcXG59XFxuXFxuLnNlY29uZGFyeS1tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XFxufVxcblxcbi5zaWRlcy1kcmlua3MtbWVudS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLnNpZGVzLXRpdGxlOjpiZWZvcmUsXFxuLmRyaW5rcy10aXRsZTo6YmVmb3JlICAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTElO1xcbiAgICByaWdodDogNzAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XFxufVxcblxcbi5zaWRlcy10aXRsZTo6YWZ0ZXIsXFxuLmRyaW5rcy10aXRsZTo6YWZ0ZXIgIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUxJTtcXG4gICAgbGVmdDogNzAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XFxufVxcblxcbi5zaWRlcy10aXRsZSxcXG4uZHJpbmtzLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkJpdHRlclxcXCIsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjRERCNzhFO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IG1pbigxMDAlLDQ1MHB4KTtcXG59XFxuXFxuLnNpZGVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uY29tYm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4IDA7XFxuICAgIGhlaWdodDogMTA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMy81O1xcbn1cXG5cXG4uY29tYm8tY29udGFpbmVyIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21iby10aXRsZSB7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMCAwIDZweDtcXG59XFxuXFxuLmNvbWJvLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBjb2xvcjogIzQ5NDk0OTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDAgMCAyMnB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDoxMjIwcHgpe1xcbiAgICAuZGFpbHktc3BlY2lhLW1lbnVse1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweDtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDoxMTcwcHgpe1xcblxcbiAgICAub3B0aW9ucy1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLWltZyB7XFxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudXNhLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIG1hcmdpbjogMCAxMCUgMTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1zdWJ0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDAgMTAlIDEwcHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ21lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICAgICAgY29sb3I6ICM0OTQ5NDk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1zZXBhcmF0b3Ige1xcbiAgICAgICAgaGVpZ2h0OiA3cHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQ0NDQztcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1saW5rIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMCAyNSUgMTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1hcnRpY2xlLXRpdGxlIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1hcnRpY2xlLWRhdGUge1xcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XFxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo5MDBweCl7XFxuICAgIC5kYWlseS1zcGVjaWFsLW1lbnV7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5yaWdodC1pbmZve1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRTJFMkUyO1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0LWluZm97XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NzAwcHgpe1xcblxcbiAgICAubWVudS1jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5tYWluLW1lbnV7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAuc2Vjb25kYXJ5LW1lbnV7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAudXNhLXRvZGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS1pbWcge1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnVzYS10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDM0cHg7XFxuICAgICAgICBtYXJnaW46IDAgMTAlIDI0cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2Etc3VidGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICAgICAgbWFyZ2luOiAwIDEwJSA0MHB4O1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gICAgICAgIGNvbG9yOiAjNDk0OTQ5O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2Etc2VwYXJhdG9yIHtcXG4gICAgICAgIGhlaWdodDogN3B4O1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbjogMCAwIDMwcHg7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDQ0NDO1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2EtbGluayB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDAgMjUlIDE3cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2EtYXJ0aWNsZS10aXRsZSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ0JpdHRlcicsIHNlcmlmO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2EtYXJ0aWNsZS1kYXRlIHtcXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgLnNpZGVzLXRpdGxle1xcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNpZGVze1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbWJvLWNvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLm5hbWV7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYycHg7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2VjdGlvbi1sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIHdpZHRoOiA3dnc7XG4gICAgbWF4LXdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5oZWFkZXItbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZ2FwOiAxMHZ3O1xufVxuXG4uaGVhZGVyLW1lbnUgYSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5oZWFkZXItbWVudSBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmhlYWRlci1mcmlsbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mcmlsbHMpIGNlbnRlciBjZW50ZXIgcmVwZWF0LXg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb24tbG9nb3tcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdi1iYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQsNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICAgIGhlaWdodDogNjJweDtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VjdGlvbi1sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogNXB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgICB3aWR0aDogN3Z3O1xcbiAgICBtYXgtd2lkdGg6IDEyOHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5oZWFkZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZ2FwOiAxMHZ3O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgYSB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRlci1tZW51IGE6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5oZWFkZXItZnJpbGxzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZnJpbGxzKSBjZW50ZXIgY2VudGVyIHJlcGVhdC14O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0U1RTVFNTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XFxuICAgIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNlY3Rpb24tbG9nb3tcXG4gICAgICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNjb250ZW50IHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Fib3V0LXVzLWhlcm9fbGFyZ2UuYmNlYjZiOWVhYWJjN2RmMGNlOTZjZjlhMTc4NzVkMDAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbGx1c3RyYXRpb24tYmVldC40MTk3NDY4YzE5ODYzZDg3NWU1NWViNTA0ZjYzY2Q0ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2lsbHVzdHJhdGlvbi13aGVhdC42MDJkMzQwMmVlZGUxMjIzODI3Y2FlOTg1ZTFkNWQyMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL291ci1tZW1vcmllc19tZWRpdW0uZTU3ZmNlYTM4ZDU0NGM5ZmU4YzY0ZWVmNDdjMWEwMDkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9oZWFkZXItZnJpbGxzLmYzNTkzYTA1ZjE0ZGU3MzAxYWQ0YThjMDllYzAzZTg3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZm9vdGVyVmlkZW8uYWJiNDEyYTJmZTJhMmQ5YjIxYzhlYWRiMjEwN2RkYWYubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9ob21lLWJ1Z3Vlci5mNDk1NGZjZTlhMjVjYTBhNmQ3NGZkZjczZTE3MTI5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2hvbWVWaWRlby5mN2U0NWI1NjNkZDQyM2E0OTYxOTcyYWQzZGU5N2FiNy5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Zhcm0tdG8tdGFibGUuYTE2NGNjZGY4OTA0ZGUwODIzYzFhMDJmODM1ZjQxYTcuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mcmVlLWhpZ2gtZml2ZXMuYTU5Y2QyMjE2Y2QxOGEzOTAxZGJmNDgzY2M5NGNlMzguc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2dvLWZhY2Vib29rLjY1NTU1NjI3NjRjM2QxMDNmMjY3NjJjODA4ZjhhMzU3LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby1naXRodWIuZjA4NDNkNDhiMDk1NTQzYTcxZDRlNGY2ODA5Y2E5ZDYuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9yZWFsLWxvY2FsLWZvb2QuNWI3MTczNTJjOTNiNmI3NzU5ZmZmN2QxM2U4NjkxYjUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9yb2xsLXVwLXlvdXItc2xlZXZlcy42OGJkMWIxMzFiM2U5NmZjNmI5M2VmMjc0Y2UzMmFlMy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2lsbHVzdHJhdGlvbi1jaGlja2VuLjlhMzBhYTlhYmU0ZDljMzI1Y2FiM2NiMGNmYWMyM2JjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaWxsdXN0cmF0aW9uLW9uaW9uLjBjODA3NWFkMTE5NDNmNjNhZjkwMzBlZDVkNTgxZjc0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaWxsdXN0cmF0aW9uLXBsYW50LmU4YTQyYWFlNjNhZGM2ZmYyMmQ2YmI1YjM0OGM3MDExLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby1mb290ZXIuYmZlOTBjMjhjM2M3ZTkwNDAzMWEyOGFlNTc5N2IwN2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2dvQDJ4LjQwZjViMDk5MWVhOWUzM2YyODQxM2U5YTlkNjA2MWEwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbGF0aWNlLmY2MTRjZTU1YmU1ODYwMzNlZTBjYWZiNGRlOTBhYjIyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYmFjb24tYW5kLWJlcnQuZTk0OTQ4ZGE3YmQ5MTIxMGY1ZmUyMzMwNDAxYzBhMzguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9ibG9jay1idXJnZXIuNGRlNGMyMzU0MGVlN2M0ZWJhODg4Y2MxYTY5MTQ2YWYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9jcm9xdWUtZ2FyY29uLWJ1cmdlci45NDJkMzQ3YzJhMzA1NDNiNTY1ZDQwZGMzYjI3N2Q2ZS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2R1Y2stZHVjay1nb29zZS1mcmllcy42YWY4MmU3MzJiNmVlNTlmOTFkMzBiMmY0NGViNDY2Ny5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ZyaWVkLWNoaWNrZW4uNGI2ZWU3YWIzNjhmYjZjNWFkMjZiMGYzMzQ0Y2Q2NzAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9ibGFjay1iYXJfYmcuODQ5MTVhYjdhOTAyN2VmYjY4Mzk0YjkxMzE3NjIwY2Quc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9zcGljeS1hbmQtdmVnYW4taWNvbi5kODY0NmVhMDkwM2UxMWM5YWM5YmRmMDFlMTZjMmVjYy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3NwaWN5LWljb24uZDZmOTM4YTlkYzMzMzcwNjMwODM2MjUwNzQ1ZTQwYjQuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy92ZWdhbi1pY29uLmQyOGRlNjlhMTQyZDY5MzFkMzBlODEyNWQ4MzkwOTRiLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaWxsdXN0cmF0aW9uX2FsdG9uLWJyb3duLjg3MDBhYTJlNTljOTJmNTRhZDY1MjI0OTA4YmUyYjhjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcG91dGluZS5hOTk0ZWZiNTQ5YzVmZjQ1YWNjYzNjMWFkMTA0ZGQ3Ny5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3B1bGxlZC1wb3JrLXJvbGwuZDY1ZTBhZDJiMzA2NDNjMDhkNTZjMWZjY2NkODQ3ZTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy91c2EtdG9kYXkuZmUzMWJlNDE5ZGJhZWU2MWEzMDY2NWUxYjFlYTFhNjUucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYtYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSAnLi4vc2VjdGlvbnMvbmF2LWJhcic7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4uL3NlY3Rpb25zL2Zvb3Rlcic7XG5cbmltcG9ydCBtYWluQWJvdXRJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWltYWdlcy9hYm91dC11cy1oZXJvX2xhcmdlLmpwZyc7XG5pbXBvcnQgYmxhY2tiYXJBYm91dCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2ljb25zL2JsYWNrLWJhcl9iZy5zdmcnO1xuaW1wb3J0IGJsYWNrYmFyQWZ0ZXIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pbWFnZXMvaWxsdXN0cmF0aW9uLXdoZWF0LnBuZyc7XG5pbXBvcnQgaGlzdG9yeUFmdGVyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaW1hZ2VzL2lsbHVzdHJhdGlvbi1iZWV0LnBuZyc7XG5pbXBvcnQgbWVtb3JpZXNJbWcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pbWFnZXMvb3VyLW1lbW9yaWVzX21lZGl1bS5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvLWFib3V0Jyk7XG4gICAgaGVyby5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke21haW5BYm91dEltYWdlfSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXRgO1xuICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGl0bGUnKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKHRpdGxlQ29udGVudCk7XG5cbiAgICBjb25zdCBibGFja2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYmxhY2tiYXIuY2xhc3NMaXN0LmFkZCgnYmxhY2stYmFyLWFib3V0Jyk7XG4gICAgYmxhY2tiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtibGFja2JhckFib3V0fSljZW50ZXIgY2VudGVyIG5vLXJlcGVhdGA7XG4gICAgYmxhY2tiYXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmxhY2tiYXItYWZ0ZXInLGB1cmwoJyR7YmxhY2tiYXJBZnRlcn0nKWApO1xuICAgIGJsYWNrYmFyLmlubmVyVGV4dCA9ICdQQVVMICYgSkVTU0lDQSc7XG4gICAgdGl0bGVDb250ZW50LmFwcGVuZENoaWxkKGJsYWNrYmFyKTtcblxuICAgIGNvbnN0IGJsYWNrQmFyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJsYWNrQmFyRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2JsYWNrLWJhci1mb290ZXInKTtcbiAgICBibGFja0JhckZvb3Rlci5pbm5lclRleHQgPSBgV0UnUkUgUEVPUExFIFdITyBDQVJFIEFCT1VUIEZPT0RgO1xuICAgIHRpdGxlQ29udGVudC5hcHBlbmRDaGlsZChibGFja0JhckZvb3Rlcik7XG5cbiAgICBjb25zdCBvdXJIaXN0b3J5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBvdXJIaXN0b3J5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaXN0b3J5LXNlY3Rpb24nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG91ckhpc3RvcnlTZWN0aW9uKTtcblxuICAgIGNvbnN0IGhpc3RvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoaXN0b3J5Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzID0gJ2hpc3RvcnktdGl0bGUnPjxwPlc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSAnaGlzdG9yeS10aXRsZS10ZXh0Jz5l4oCZdmUgYmVlbiBjb29raW5nIHRvZ2V0aGVyIGxvbmcgZW5vdWdoIHRoYXQgd2Uga25vdyBob3cgdG8gYmFsYW5jZSBlYWNoIG90aGVy4oCTY29tZm9ydCBtZWV0cyBmcmVzaG5lc3MuPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gJ2hpc3RvcnktcXVvdGUnPk9ORSBPRiBVUyBTQVlTLCDigJxKVUlDWSBCVVJHRVI/4oCdIFRIRSBPVEhFUiBSRVNQT05EUywg4oCcWUVBSCEgQU5EIFNPTUUgUk9BU1RFRCBCRUVUUyBBTkQgR09BVCBDSEVFU0Uh4oCdPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gJ2hpc3RvcnktdGV4dCc+V2UgbWV0IGluIE1ldHJvcG9saXRhbiBDb21tdW5pdHkgQ29sbGVnZeKAmXMgQ3VsaW5hcnkgcHJvZ3JhbSwgd2hpY2ggd2FzIGEgZ3JlYXQgcGxhY2UgdG8gZWFybiBvdXIgY3JlZGVudGlhbHMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGJyb2FkZW4gb3VyIG5ldHdvcmsgb2YgZnJpZW5kcywgY2hlZnMsIGFuZCBmZWxsb3cgZm9vZGllcy4gQnV0IHdlIGJvdGggYWdyZWUgb3VyIG9uZ29pbmcgZWR1Y2F0aW9uIGhhcyBiZWVuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB3aWxsIGFsd2F5cyBiZSB0aHJvdWdoIHRyYXZlbC4gV2UgdHJhdmVsIHdoZW5ldmVyIHdlIGhhdmUgdGhlIGNoYW5jZSwgYW5kIHNvbWV0aW1lcyB3ZeKAmWxsIHBsYW4gYSB0cmlwIGFyb3VuZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZhdGlvbnMgYXQgYSBzcGVjaWZpYyByZXN0YXVyYW50LiBXZeKAmXZlIGhhZCBzb21lIGFtYXppbmcgbWVhbHMgYW5kIHNvbWUgZ3JlYXQgYWR2ZW50dXJlcywgYW5kIGl0IGFsbCBzaG93cyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cCBpbiB0aGUgZm9vZCB3ZSBzZXJ2ZS48L3A+YCxcbiAgICBoaXN0b3J5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnktY29udGFpbmVyJyk7XG4gICAgaGlzdG9yeUNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oaXN0b3J5LWFmdGVyJyxgdXJsKCcke2hpc3RvcnlBZnRlcn0nKWApO1xuICAgIG91ckhpc3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKGhpc3RvcnlDb250YWluZXIpO1xuXG4gICAgY29uc3Qgb3ZlcmxheUhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgb3ZlcmxheUhlcm8uY2xhc3NMaXN0LmFkZCgnbWVtb3JpZXMtaGVybycpO1xuICAgIG92ZXJsYXlIZXJvLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke21lbW9yaWVzSW1nfScpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0YDtcbiAgICBvdmVybGF5SGVyby5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5SGVybyk7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgb3ZlcmxheUhlcm8uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICBjb25zdCBvdmVybGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXlUZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1tZW1vcmllcy10ZXh0Jyk7XG4gICAgb3ZlcmxheVRleHQuaW5uZXJIVE1MID0gJzxwPldFIFNFUlZFIEZPT0QgQkFTRUQgT04gT1VSIEJFU1QgTUVNT1JJRVMuPC9wPic7XG4gICAgb3ZlcmxheUhlcm8uYXBwZW5kQ2hpbGQob3ZlcmxheVRleHQpO1xuXG4gICAgXG59XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjcmVhdGVOYXZCYXIoKTtcbiAgICBjcmVhdGVBYm91dCgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7IiwiaW1wb3J0IGNyZWF0ZU5hdkJhciBmcm9tICcuLi9zZWN0aW9ucy9uYXYtYmFyJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi4vc2VjdGlvbnMvZm9vdGVyJztcblxuaW1wb3J0IG1haW5WaWRlbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaG9tZVZpZGVvLm1wNCc7XG5cbmltcG9ydCBmYXJtVG9UYWJsZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWNvbnMvZmFybS10by10YWJsZS5zdmcnO1xuaW1wb3J0IGhvbWVCdXJndWVyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9ob21lLWJ1Z3Vlci5wbmcnO1xuaW1wb3J0IGZhY2Vib29rTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWNvbnMvbG9nby1mYWNlYm9vay5zdmcnO1xuaW1wb3J0IGZyZWVIaWdoRml2ZXMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL2ZyZWUtaGlnaC1maXZlcy5zdmcnO1xuaW1wb3J0IHJvbGxVcFNsZWV2ZXMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL3JvbGwtdXAteW91ci1zbGVldmVzLnN2Zyc7XG5pbXBvcnQgcmVhbEZvb2QgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2ljb25zL3JlYWwtbG9jYWwtZm9vZC5zdmcnO1xuaW1wb3J0IGhvbWVGcmlsbHMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sYXRpY2UucG5nJztcblxuaW1wb3J0IG9uaW9uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pbGx1c3RyYXRpb24tb25pb24ucG5nJztcbmltcG9ydCBjaGlja2VuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9pbGx1c3RyYXRpb24tY2hpY2tlbi5wbmcnO1xuaW1wb3J0IGJlZXQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2lsbHVzdHJhdGlvbi1wbGFudC5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gICAgY29uc3QgaG9tZVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBob21lVmlkZW8uaWQgPSAnaG9tZS1iYWNrZ3JvdW5kJztcbiAgICBob21lVmlkZW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICBob21lVmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgIGhvbWVWaWRlby5sb29wID0gdHJ1ZTtcbiAgICBob21lVmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaG9tZVZpZGVvKTtcblxuICAgIGNvbnN0IGhvbWVCYWNrZ3JvdW5kVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBob21lQmFja2dyb3VuZFZpZGVvLnNyYyA9IG1haW5WaWRlbztcbiAgICBob21lQmFja2dyb3VuZFZpZGVvLnR5cGUgPSAndmlkZW8vbXA0JztcbiAgICBob21lVmlkZW8uYXBwZW5kQ2hpbGQoaG9tZUJhY2tncm91bmRWaWRlbyk7XG5cbiAgICBjb25zdCBob21lVGl0bGVMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVRpdGxlTG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhvbWVUaXRsZUxvZ29Db250YWluZXIpO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVUaXRsZUxvZ28uc3JjID0gZmFybVRvVGFibGU7XG4gICAgaG9tZVRpdGxlTG9nby5jbGFzc0xpc3QuYWRkKCdzdHJlZXQtZm9vZCcpO1xuICAgIGhvbWVUaXRsZUxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlTG9nbyk7XG5cbiAgICBjb25zdCBob21lQ2FsbG91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBob21lQ2FsbG91dC5jbGFzc0xpc3QuYWRkKCdob21lLWNhbGxvdXRzJyk7XG4gICAgaG9tZUNhbGxvdXQuc3R5bGUuc2V0UHJvcGVydHkoJy0taG9tZS1mcmlsbHMnLGB1cmwoJyR7aG9tZUZyaWxsc30nKWApO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZUNhbGxvdXQpO1xuXG4gICAgY29uc3QgZGFpbHlTcGVjaWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGFpbHlTcGVjaWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXNwZWNpYWwnKTtcbiAgICBob21lQ2FsbG91dC5hcHBlbmRDaGlsZChkYWlseVNwZWNpYWxDb250YWluZXIpO1xuXG4gICAgY29uc3QgYnVyZ3VlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYnVyZ3VlckxpbmsuY2xhc3NMaXN0LmFkZCgnbGVmdC1pbmZvJyk7XG4gICAgYnVyZ3VlckxpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0Jsb2NrLTE2LTI3NDgzODgxOTIzNjE0OFwiO1xuICAgIGJ1cmd1ZXJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGJ1cmd1ZXJMaW5rLmlubmVySFRNTCA9IGA8aW1nIHNyYz0nJHtob21lQnVyZ3Vlcn0nPmA7XG4gICAgZGFpbHlTcGVjaWFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmd1ZXJMaW5rKTtcblxuICAgIGNvbnN0IHJpZ2h0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0SW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWdodC1pbmZvJyk7XG4gICAgZGFpbHlTcGVjaWFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0SW5mb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYDxoND5EQUlMWSBTUEVDSUFMPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2Ugc2VydmUgYSBuZXcgc3BlY2lhbCBldmVyeSBkYXkuIEhlYWQgb3ZlciB0byBGYWNlYm9vayBhbmQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZSB3aGF0IHdl4oCZcmUgc2VydmluZyB0b2RheS48L3A+YDtcbiAgICByaWdodEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG5cbiAgICBjb25zdCBmYkNhbGxvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZmJDYWxsb3V0LmNsYXNzTGlzdC5hZGQoJ2ZiLWNhbGxvdXQnKTtcbiAgICBmYkNhbGxvdXQuaHJlZiA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQmxvY2stMTYtMjc0ODM4ODE5MjM2MTQ4JztcbiAgICBmYkNhbGxvdXQudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZmJDYWxsb3V0LmlubmVySFRNTCA9IGBGT0xMT1cgVVMgT04gRkFDRUJPT0sgVE8gU0VFIERBSUxZIFNQRUNJQUxTIElOIFlPVVIgXCJGRUVEXCIhIDxpbWcgc3JjID0gXCIke2ZhY2Vib29rTG9nb31cIj5gO1xuICAgIHJpZ2h0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmYkNhbGxvdXQpO1xuXG4gICAgY29uc3Qgb25lVGhpcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvbmVUaGlyZC5jbGFzc0xpc3QuYWRkKCdvbmUtdGhpcmQnKTtcbiAgICBob21lQ2FsbG91dC5hcHBlbmRDaGlsZChvbmVUaGlyZCk7XG5cbiAgICBjb25zdCBjb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taG9tZScpO1xuICAgIGNvbHVtbjEuc3R5bGUuc2V0UHJvcGVydHkoJy0tb25pb25CZycsYHVybCgnJHtvbmlvbn0nKWApO1xuICAgIG9uZVRoaXJkLmFwcGVuZENoaWxkKGNvbHVtbjEpO1xuXG4gICAgY29uc3QgdGl0bGVJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGl0bGVJbWcxLnNyYyA9IGZyZWVIaWdoRml2ZXM7XG4gICAgdGl0bGVJbWcxLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LWltZycpO1xuICAgIGNvbHVtbjEuYXBwZW5kQ2hpbGQodGl0bGVJbWcxKTtcblxuICAgIGNvbnN0IGNvbHVtblAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbHVtblAxLmlubmVyVGV4dCA9IGBUaGluZ3MgZ2V0IGhvcHBpbicgYXJvdW5kIGx1bmNodGltZS4gV2Ugc3VnZ2VzdCBjaGVja2luZyBvdXQgb3VyIG1lbnUgYmVmb3JlIHlvdSBjb21lIGluLmA7XG4gICAgY29sdW1uMS5hcHBlbmQoY29sdW1uUDEpO1xuXG4gICAgY29uc3QgY29sdW1uQTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29sdW1uQTEuY2xhc3NMaXN0LmFkZCgnbWVudS1saW5rJyk7XG4gICAgY29sdW1uQTEuaW5uZXJUZXh0ID0gJ1NFRSBNRU5VJztcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKGNvbHVtbkExKTtcblxuICAgIGNvbnN0IGNvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1ob21lJyk7XG4gICAgb25lVGhpcmQuYXBwZW5kQ2hpbGQoY29sdW1uMik7XG5cbiAgICBjb25zdCB0aXRsZUltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aXRsZUltZzIuc3JjID0gcm9sbFVwU2xlZXZlcztcbiAgICB0aXRsZUltZzIuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWltZycpO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQodGl0bGVJbWcyKTtcblxuICAgIGNvbnN0IGNvbHVtblAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbHVtblAyLmlubmVyVGV4dCA9IGBPdXIgc3RyZWV0LXN0eWxlIGZvb2QgaXMgYm9sZCwgaW1hZ2luYXRpdmUsIGFuZCBkZWxpY2lvdXNseSBtZXNzeS4gR3JhYiBzb21lIG5hcGtpbnMgYW5kIGVhdCB1cC5gO1xuICAgIGNvbHVtbjIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2hpY2tlbkJnJyxgdXJsKCcke2NoaWNrZW59JylgKTtcbiAgICBjb2x1bW4yLmFwcGVuZChjb2x1bW5QMik7XG5cbiAgICBjb25zdCBjb2x1bW5BMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb2x1bW5BMi5pbm5lclRleHQgPSAnU0VFIExPQ0FUSU9OJztcbiAgICBjb2x1bW5BMi5ocmVmID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9CbG9jaysxNi9ANDEuMjU3NDQxMSwtOTUuOTM3NzcwOCwxN3ovZGF0YT0hM20xITRiMSE0bTYhM201ITFzMHg4NzkzOGZhZDlhMWFjNGM3OjB4MjI1NTUyOGRkM2U5YjhmZCE4bTIhM2Q0MS4yNTc0NDExITRkLTk1LjkzNzc3MDghMTZzJTJGZyUyRjExZ3pseW1rbD9lbnRyeT10dHUnO1xuICAgIGNvbHVtbkEyLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQoY29sdW1uQTIpO1xuXG4gICAgY29uc3QgY29sdW1uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbjMuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhvbWUnKTtcbiAgICBjb2x1bW4zLnN0eWxlLnNldFByb3BlcnR5KCctLWJlZXRCZycsYHVybCgnJHtiZWV0fScpYCk7XG4gICAgb25lVGhpcmQuYXBwZW5kQ2hpbGQoY29sdW1uMyk7XG5cbiAgICBjb25zdCB0aXRsZUltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aXRsZUltZzMuc3JjID0gcmVhbEZvb2Q7XG4gICAgdGl0bGVJbWczLmNsYXNzTGlzdC5hZGQoJ3RoaXJkLWltZycpO1xuICAgIGNvbHVtbjMuYXBwZW5kQ2hpbGQodGl0bGVJbWczKTtcblxuICAgIGNvbnN0IGNvbHVtblAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbHVtblAzLmlubmVyVGV4dCA9IGBXZSB1c2UgbG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzLCBhdm9pZCBwcmVzZXJ2YXRpdmVzIHdoZW5ldmVyIHBvc3NpYmxlLCBhbmQgb2ZmZXIgdmVnYW4tZnJpZW5kbHkgZGlzaGVzLmA7XG4gICAgY29sdW1uMy5hcHBlbmQoY29sdW1uUDMpO1xuXG4gICAgY29uc3QgY29sdW1uQTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29sdW1uQTMuY2xhc3NMaXN0LmFkZCgnYWJvdXQtbGluaycpO1xuICAgIGNvbHVtbkEzLmlubmVyVGV4dCA9ICdBQk9VVCBVUyc7XG4gICAgY29sdW1uMy5hcHBlbmRDaGlsZChjb2x1bW5BMyk7XG5cbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGNyZWF0ZU5hdkJhcigpO1xuICAgIGNyZWF0ZUhvbWUoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgY3JlYXRlTmF2QmFyIGZyb20gJy4uL3NlY3Rpb25zL25hdi1iYXInO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuLi9zZWN0aW9ucy9mb290ZXInO1xuXG5pbXBvcnQgYmxhY2tCYXIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9pY29ucy9ibGFjay1iYXJfYmcuc3ZnJztcbmltcG9ydCB1c2FUb2RheUJhY2sgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9pbGx1c3RyYXRpb25fYWx0b24tYnJvd24ucG5nJztcbmltcG9ydCBzcGljeUljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9pY29ucy9zcGljeS1pY29uLnN2Zyc7XG5pbXBvcnQgdmVnYW5JY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvdmVnYW4taWNvbi5zdmcnO1xuaW1wb3J0IHNwaWN5QW5kVmVnYW5JY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvaWNvbnMvc3BpY3ktYW5kLXZlZ2FuLWljb24uc3ZnJztcbmltcG9ydCB1c2FUb2RheUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy91c2EtdG9kYXkucG5nJztcbmltcG9ydCBob21lQnVyZ2VyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1tZWRpYS9ob21lLWJ1Z3Vlci5wbmcnO1xuaW1wb3J0IGZhY2Vib29rTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWNvbnMvbG9nby1mYWNlYm9vay5zdmcnO1xuaW1wb3J0IHB1bGxlZFBvcmsgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9wdWxsZWQtcG9yay1yb2xsLmpwZyc7XG5pbXBvcnQgZnJpZWRDaGlrZW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy9mcmllZC1jaGlja2VuLmpwZyc7XG5pbXBvcnQgY3JvcXVlQnVyZ2VyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1pbWFnZXMvY3JvcXVlLWdhcmNvbi1idXJnZXIuanBnJztcbmltcG9ydCBibG9ja0J1cmdlciBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2Jsb2NrLWJ1cmdlci5qcGcnO1xuaW1wb3J0IGJhY29uQW5kQmVydCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2JhY29uLWFuZC1iZXJ0LmpwZyc7XG5pbXBvcnQgcG91dGluZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL3BvdXRpbmUuanBnJztcbmltcG9ydCBkdWNrRHVjayBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzL2R1Y2stZHVjay1nb29zZS1mcmllcy5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpbWcsIHRpdGxlLCBhdHRyaWJ1dGUsIGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGxldCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUltZy5zcmMgPSBpbWc7XG4gICAgaXRlbUltZy5jbGFzc0xpc3QuYWRkKCdpdGVtLWltZycpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuXG4gICAgbGV0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG5cbiAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBpdGVtTmFtZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3NwaWN5Jykge1xuICAgICAgICBsZXQgYXR0cmlidXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGF0dHJpYnV0ZS5jbGFzc0xpc3QuYWRkKCdhdHRyaWJ1dGUtaW1nLXMnKTtcbiAgICAgICAgYXR0cmlidXRlLnNyYyA9IHNwaWN5SWNvbjtcbiAgICAgICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGF0dHJpYnV0ZSk7XG4gICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICd2ZWdhbicpIHtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhdHRyaWJ1dGUuY2xhc3NMaXN0LmFkZCgnYXR0cmlidXRlLWltZy12Jyk7XG4gICAgICAgIGF0dHJpYnV0ZS5zcmMgPSB2ZWdhbkljb247XG4gICAgICAgIGl0ZW1UaXRsZS5hcHBlbmRDaGlsZChhdHRyaWJ1dGUpO1xuICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3BpY3ktdmVnYW4nKSB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXR0cmlidXRlLmNsYXNzTGlzdC5hZGQoJ2F0dHJpYnV0ZS1pbWctc3YnKTtcbiAgICAgICAgYXR0cmlidXRlLnNyYyA9IHNwaWN5QW5kVmVnYW5JY29uO1xuICAgICAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQoYXR0cmlidXRlKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuXG4gICAgbGV0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgc2VwYXJhdG9yLmNsYXNzTGlzdC5hZGQoJ3NlcGFyYXRvcicpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG5cbiAgICBsZXQgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtTm9JbWcodGl0bGUsIGF0dHJpYnV0ZSwgZGVzY3JpcHRpb24pIHtcblxuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgbGV0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG5cbiAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3NwaWN5Jykge1xuICAgICAgICBsZXQgYXR0cmlidXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGF0dHJpYnV0ZS5jbGFzc0xpc3QuYWRkKCdhdHRyaWJ1dGUtaW1nLXMnKTtcbiAgICAgICAgYXR0cmlidXRlLnNyYyA9IHNwaWN5SWNvbjtcbiAgICAgICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGF0dHJpYnV0ZSk7XG4gICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICd2ZWdhbicpIHtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhdHRyaWJ1dGUuY2xhc3NMaXN0LmFkZCgnYXR0cmlidXRlLWltZy12Jyk7XG4gICAgICAgIGF0dHJpYnV0ZS5zcmMgPSB2ZWdhbkljb247XG4gICAgICAgIGl0ZW1UaXRsZS5hcHBlbmRDaGlsZChhdHRyaWJ1dGUpO1xuICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3BpY3ktdmVnYW4nKSB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYXR0cmlidXRlLmNsYXNzTGlzdC5hZGQoJ2F0dHJpYnV0ZS1pbWctc3YnKTtcbiAgICAgICAgYXR0cmlidXRlLnNyYyA9IHNwaWN5QW5kVmVnYW5JY29uO1xuICAgICAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQoYXR0cmlidXRlKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuXG4gICAgbGV0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgc2VwYXJhdG9yLmNsYXNzTGlzdC5hZGQoJ3NlcGFyYXRvcicpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG5cbiAgICBsZXQgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdibGFjay1iYXInKTtcbiAgICBtZW51VGl0bGUuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7YmxhY2tCYXJ9JykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRgO1xuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSAnTUVOVSc7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4gICAgY29uc3QgZmVhdHVyZWRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmVhdHVyZWRJdGVtcy5jbGFzc0xpc3QuYWRkKCdnb2xkLXNwYWNlZCcpO1xuICAgIGZlYXR1cmVkSXRlbXMuaW5uZXJUZXh0ID0gJ0ZFQVRVUkVEIElURU1TJztcbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSXRlbXMpO1xuXG4gICAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1jb250YWluZXInKTtcbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpO1xuXG4gICAgY29uc3QgdmVnYW5PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2ZWdhbk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcbiAgICB2ZWdhbk9wdGlvbi5pbm5lckhUTUwgPSBgPGltZyBjbGFzcyA9ICdvcHRpb25zLWltZy12JyBzcmM9JyR7dmVnYW5JY29ufSc+PHAgY2xhc3MgPSAndmVnYW4tdGV4dCc+VmVnYW4gT3B0aW9uPC9wPmA7XG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZWdhbk9wdGlvbik7XG5cbiAgICBjb25zdCBzcGljeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwaWN5T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xuICAgIHNwaWN5T3B0aW9uLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzID0gJ29wdGlvbnMtaW1nLXMnIHNyYz0nJHtzcGljeUljb259Jz48cCBjbGFzcyA9ICd2ZWdhbi10ZXh0Jz5BdmFpbGFibGUgU3BpY3k8L3A+YDtcbiAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwaWN5T3B0aW9uKTtcblxuICAgIGNvbnN0IG1haW5NZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbk1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51Jyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTWVudUNvbnRhaW5lcik7XG5cbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShwdWxsZWRQb3JrLFxuICAgICAgICAnUFVMTEVEIFBPUksgUk9MTCcsXG4gICAgICAgICdzcGljeScsXG4gICAgICAgICdTbG93LWJyYWlzZWQgVHJ1ZWJyaWRnZSBGYXJtIHBvcmsgc2VydmVkIG9uIGEgc291cmRvdWdoIGhvYWdpZSB3aXRoIFN3aXNzIGNoZWVzZSwgbWF5bywgY2FyYW1lbGl6ZWQgb25pb24sIG11c3RhcmQsIGFuZCBwaWNrbGVzLicpKTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShmcmllZENoaWtlbixcbiAgICAgICAgJ1BDIEZBUk0gRlJJRUQgQ0hJQ0tFTiBUSElHSFMnLFxuICAgICAgICAnc3BpY3knLFxuICAgICAgICAnT3JkZXIgeW91cnNlbGYgMiwgMywgb3IgNCBwaWVjZXMgb2Ygc3VwZXItanVpY3kgUENGIGJ1dHRlcm1pbGsgc29ha2VkLCBjcmlzcHkgY2hpY2tlbi4gU28gdGFzdHkhIE5vdCB0byBiZSBtaXNzZWQuIFRyeSBpdCBcIk5hc2h2aWxsZSBob3RcIiEnKSk7XG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oY3JvcXVlQnVyZ2VyLFxuICAgICAgICAnQ1JPUVVFIEdBUkNPTiBCVVJHRVInLFxuICAgICAgICAnJywgYEl0IHJoeW1lcyB3aXRoIFwic21va2UgY2FycyBvbixcIiBhbmQgaXQncyBhIDEvMyBwb3VuZCBKb24ncyBOYXR1cmFscyBidXJnZXIgd2l0aCBjaGVlc2UsIGhhbSwgYSBzdW5ueS1zaWRlLXVwIEV2ZXR0YSBGYXJtcyBlZ2csIGdyZWVuIG9uaW9uLCBtdXN0YXJkLCBhbmQgdHJ1ZmZsZSBtYXlvIG9uIGEgQ2lhYmF0dGEgcm9sbC5gKSk7XG5cbiAgICBjb25zdCB1c2FUb2RheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzYVRvZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VzYS10b2RheS1jb250YWluZXInKTtcbiAgICB1c2FUb2RheUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHt1c2FUb2RheUJhY2t9JykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRgO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHVzYVRvZGF5Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHVzYVRvZGF5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdXNhVG9kYXlJbWcuY2xhc3NMaXN0LmFkZCgndXNhLWltZycpO1xuICAgIHVzYVRvZGF5SW1nLnNyYyA9IHVzYVRvZGF5TG9nbztcbiAgICB1c2FUb2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2FUb2RheUltZyk7XG5cbiAgICBjb25zdCB1c2FUb2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHVzYVRvZGF5VGl0bGUuY2xhc3NMaXN0LmFkZCgndXNhLXRpdGxlJyk7XG4gICAgdXNhVG9kYXlUaXRsZS5pbm5lclRleHQgPSAnQlJPV04gQ0FMTFMgVEhFIENST1FVRSBHQVJDT04gSElTIEZBVk9SSVRFIEhBTUJVUkdFUiBJTiBUSEUgQ09VTlRSWS4nO1xuICAgIHVzYVRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHVzYVRvZGF5VGl0bGUpO1xuXG4gICAgY29uc3QgdXNhVG9kYXlTdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB1c2FUb2RheVN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3VzYS1zdWJ0aXRsZScpO1xuICAgIHVzYVRvZGF5U3ViVGl0bGUuaW5uZXJUZXh0ID0gYEhlIHNheXMgaXQgaGFzIHRoZSBwZXJmZWN0IG1lYXQtdG8tYnVuIHJhdGlvLiBcIlRoZXkndmUgdHVybmVkIHRoZSBoYW1idXJnZXIgaW50byBoaWdoIGFydC5cImA7XG4gICAgdXNhVG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodXNhVG9kYXlTdWJUaXRsZSk7XG5cbiAgICBjb25zdCB1c2FUb2RheVNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzYVRvZGF5U2VwYXJhdG9yLmNsYXNzTGlzdC5hZGQoJ3VzYS1zZXBhcmF0b3InKTtcbiAgICB1c2FUb2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2FUb2RheVNlcGFyYXRvcik7XG5cbiAgICBjb25zdCB1c2FUb2RheUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdXNhVG9kYXlMaW5rLmNsYXNzTGlzdC5hZGQoJ3VzYS1saW5rJyk7XG4gICAgdXNhVG9kYXlMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cudXNhdG9kYXkuY29tL3N0b3J5L3RyYXZlbC9kZXN0aW5hdGlvbnMvMTBncmVhdHBsYWNlcy8yMDE1LzA2LzI2L2FsdG9uLWJyb3duLXJlc3RhdXJhbnQtcmVjb21tZW5kYXRpb25zLzI5Mjc3NzkzLyc7XG4gICAgdXNhVG9kYXlMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIHVzYVRvZGF5TGluay5pbm5lckhUTUwgPSBgPHAgY2xhc3MgPSAndXNhLWFydGljbGUtdGl0bGUnPkFsdG9uIEJyb3duJ3MgZmF2b3JpdGUgcmVzdGF1cmFudHMgZnJvbSBhIGNyb3NzLWNvdW50cnkgdHJpcDwvcD48YnI+PHAgY2xhc3MgPSAndXNhLWFydGljbGUtZGF0ZSc+SnVuZSAyNiwgMjAxNTwvcD5gXG4gICAgdXNhVG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodXNhVG9kYXlMaW5rKTtcblxuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGJsb2NrQnVyZ2VyLFxuICAgICAgICAnQkxPQ0sgQlVSR0VSJyxcbiAgICAgICAgJ3ZlZ2FuJywgYEVhcm4geW91ciBzdHJlZXQgY3JlZCBieSBkaXZpbmcgaW50byB0aGlzIDEvMyBwb3VuZCBKb24ncyBOYXR1cmFscyBidXJnZXIgc2VydmVkIHdpdGggZ291ZGEgY2hlZXNlLCBtYXlvLCBtdXN0YXJkLCBrZXRjaHVwLCBsZXR0dWNlLCB0b21hdG8sIG9uaW9uLCBhbmQgcGlja2xlLmApKTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShiYWNvbkFuZEJlcnQsXG4gICAgICAgICdCQUNPTiAmIEJSSUUnLFxuICAgICAgICAnJywgYFRoaWNrLWN1dCBiYWNvbiwgQnJpZSwgc2Vhc29uYWwgZnJ1aXQgYnV0dGVyLCBhbmQgYXJ1Z3VsYSBzZXJ2ZWQgb24gTGUgUXVhcnRpZXIgYnJlYWQuYCkpO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKHBvdXRpbmUsXG4gICAgICAgICdQT1VUSU5FJyxcbiAgICAgICAgJycsIGBBIGdpZnQgZnJvbSBub3J0aCBvZiB0aGUgYm9yZGVyLiBGcmVuY2ggZnJpZXMgdG9wcGVkIHdpdGggY2hlZXNlIGN1cmRzIGFuZCBzbW90aGVyZWQgaW4gYmVlZiBncmF2eS5gKSk7XG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oZHVja0R1Y2ssXG4gICAgICAgICdEVUNLIERVQ0sgR09PU0UgRlJJRVMnLFxuICAgICAgICAnJywgYER1Y2sgY29uZml0LCBjcmlzcHkgc2tpbiwgY2hlZXNlIGN1cmRzLCBtYXlvLCBncmF2eSwgYW5kIGdvb3NlYmVycnkgZ2FzdHJpcXVlIOKAlCB5ZWFoLCB5b3UgcmVhZCB0aGF0IHJpZ2h0IOKAlCBvdmVyIGEgYmFza2V0IG9mIGZyaWVzLmApKTtcblxuXG4gICAgY29uc3QgZGFpbHlTcGVjaWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGFpbHlTcGVjaWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXNwZWNpYWwtbWVudScpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlTcGVjaWFsQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ1cmd1ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGJ1cmd1ZXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2xlZnQtaW5mbycpO1xuICAgIGJ1cmd1ZXJMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9CbG9jay0xNi0yNzQ4Mzg4MTkyMzYxNDhcIjtcbiAgICBidXJndWVyTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBidXJndWVyTGluay5pbm5lckhUTUwgPSBgPGltZyBzcmM9ICcke2hvbWVCdXJnZXJ9Jz5gO1xuICAgIGRhaWx5U3BlY2lhbENvbnRhaW5lci5hcHBlbmRDaGlsZChidXJndWVyTGluayk7XG5cbiAgICBjb25zdCByaWdodEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodEluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtaW5mbycpO1xuICAgIGRhaWx5U3BlY2lhbENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEluZm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGA8aDQ+REFJTFkgU1BFQ0lBTDwvaDQ+XG4gICAgPHA+V2Ugc2VydmUgYSBuZXcgc3BlY2lhbCBldmVyeSBkYXkuIEhlYWQgb3ZlciB0byBGYWNlYm9vayBhbmQgXG4gICAgc2VlIHdoYXQgd2XigJlyZSBzZXJ2aW5nIHRvZGF5LjwvcD5gO1xuICAgIHJpZ2h0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBmYkNhbGxvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZmJDYWxsb3V0LmNsYXNzTGlzdC5hZGQoJ2ZiLWNhbGxvdXQnKTtcbiAgICBmYkNhbGxvdXQuaHJlZiA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQmxvY2stMTYtMjc0ODM4ODE5MjM2MTQ4JztcbiAgICBmYkNhbGxvdXQudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZmJDYWxsb3V0LmlubmVySFRNTCA9IGBGT0xMT1cgVVMgT04gRkFDRUJPT0sgVE8gU0VFIERBSUxZIFNQRUNJQUxTIElOIFlPVVIgXCJGRUVEXCIhIDxpbWcgc3JjID0gXCIke2ZhY2Vib29rTG9nb31cIj5gO1xuICAgIHJpZ2h0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmYkNhbGxvdXQpO1xuXG4gICAgY29uc3Qgc2Vjb25kYXJ5TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZGFyeU1lbnUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5LW1lbnUnKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZGFyeU1lbnUpO1xuXG5cbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoJ0RVQ0sgRFVDSyBHT09TRSBGUklFUycsXG4gICAgICAgICdzcGljeS12ZWdhbicsIGBEdWNrIGNvbmZpdCwgY3Jpc3B5IHNraW4sIGNoZWVzZSBjdXJkcywgbWF5bywgZ3JhdnksIGFuZCBnb29zZWJlcnJ5IGdhc3RyaXF1ZSDigJQgeWVhaCwgeW91IHJlYWQgdGhhdCByaWdodCDigJQgb3ZlciBhIGJhc2tldCBvZiBmcmllcy5gKSk7XG4gICAgc2Vjb25kYXJ5TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKCdQT1VUSU5FIEJVUlJJVE8nLFxuICAgICAgICAndmVnYW4nLCBgUm9hc3RlZCBicmlza2V0LCByZWdpb25hbCBjdXJkcywgdG90cywgQjE2IGdyYXZ5LCBtYWx0IHZpbmVnYXIgYWlvbGkgYWxsIHdyYXBwZWQgdXAgaW4gYSBmbG91ciB0b3J0aWxsYS5gKSk7XG4gICAgc2Vjb25kYXJ5TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKCdCRUxHSUFOIFNNQVNIPHN1cD4yPC9zdXA+IEJVUkdFUicsXG4gICAgICAgICcnLCBgRG91YmxlIHNtYXNoZWQgd2FneXUgcGF0dGllcywgYnJvd24gYnV0dGVyIGNvbXBvdW5kIG1lbHQsIHJhaXNpbiBqYW0sIFN3aXNzLCBvbmlvbnMsIGJhY29uLCBhbmQgbWF5byBvbiBhIHBvdGF0byBidW4uYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnQjE2IEhPVVNFIFNBTEFEJyxcbiAgICAgICAgJ3ZlZ2FuJywgYENob29zZSBncmlsbGVkIGNoaWNrZW4sIHRlbXBlaCwgc2VpdGFuLCBvciB3aWxkIHNvY2tleWUgc2FsbW9uICgrMy4wMCkuIFdlJ2xsIG1peCBpdCB1cCB3aXRoIFNwcmluZyBtaXgsIHBpY2tsZWQgcmVkIG9uaW9uLCBrYWxhbWF0YXMsIHF1ZXNvIGZyZXNjbywgYW5kIGxvY2FsIHZlZ2dpZXMuYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnMyBIQVBQSU5FU1MgQlVSR0VSJyxcbiAgICAgICAgJycsIGAxLzMgbGIuIHBhdHR5LCBjcmFiIHJhbmdvb24gY3JlYW0gY2hlZXNlLCBzdGlyIGZyeSBzbGF3LCBncmVlbiBvbmlvbiwgbWF5bywgc3dlZXQgYW5kIHNwaWN5IGNoaWxpIG9uIGEgc2VzYW1lIGJ1bi5gKSk7XG4gICAgc2Vjb25kYXJ5TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKCdEUkFHT04gV1JBUCcsXG4gICAgICAgICd2ZWdhbicsIGBHcmlsbGVkIG5hYW4gd3JhcHBlZCBhcm91bmQgcGlja2xlZCB2ZWdnaWUgc2xhdywgaHVtbXVzLCBhcnVndWxhLCBmcmllcywgYW5kIGRyYWdvbiBzYXVjZS4gQXZhaWxhYmxlIHdpdGggUENGIGNoaWNrZW4sIHNlaXRhbiwgdGVtcGVoLCBvciB3aWxkIHNvY2tleWUgc2FsbW9uICgrMy4wMCkuYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnRkVBVFVSRUQgR1JJTExFRCBDSEVFU0UgU0FORFdJQ0gnLFxuICAgICAgICAnJywgYENoZWNrIG91dCBvdXIgZnVsbHkgbG9hZGVkLCBzdXBlci10YXN0eSwgZGFpbHkgZ3JpbGxlZCBjaGVlc2UgY3JlYXRpb24uYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZygnUkVORUdBREUgQ0hJQ0tFTldJQ0gnLFxuICAgICAgICAnc3BpY3knLCBgRnJpZWQgUENGIGNoaWNrZW4sIDcgcGVwcGVyIE5hc2h2aWxsZSBleHRyYSBob3QsIGJ1dHRlcm1pbGsgZGlsbCBzbGF3LCBoYWJhbmVybyBwaWNrbGVzLCBtYXlvIG9uIGEgc2VzYW1lIHNlZWQgYnVuLiAoQXZhaWxhYmxlIG5vdCBzcGljeSlgKSk7XG4gICAgc2Vjb25kYXJ5TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbU5vSW1nKCdNQUNLUklCRU8nLFxuICAgICAgICAnJywgYEhvdXNlIGJhYnkgYmFjayByaWIgYW5kIGJlZWYgcGF0dHksIGFncm9kb2xjZSBiYnEsIG9uaW9uIHJpbmdzLCBwaWNrbGUsIGFuZCBtYXlvLiAoQXZhaWxhYmxlIHZlZ2FuKWApKTtcbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoJ0RSQUdPTiBGUklFUycsXG4gICAgICAgICd2ZWdhbicsIGBTcGljeSBkcmFnb24gc2F1Y2UsIGNoZWVzZSBjdXJkcywgc2NhbGxpb24sIGFuZCBhIGNydXNoZWQgZm9ydHVuZSBjb29raWUuYCkpO1xuICAgIHNlY29uZGFyeU1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1Ob0ltZyhgUE9QJ1MgRlJJRVNgLFxuICAgICAgICAnJywgYEZyaWVzIHRvcHBlZCB3aXRoIGdyaWRkbGVkIGNoZWVzZSBjdXJkcywgbWFjZXJhdGVkIHJhaXNpbiwgYnJvd24gc3VnYXIsIGJyb3duIGJ1dHRlciBwb3JrLCBiYWNvbiwgZ29vc2ViZXJyeSBnYXN0cmlxdWUsIG1heW8sIGFuZCBjcnVzaGVkIEx1a2VuIHdhZmVyLmApKTtcbiAgICBzZWNvbmRhcnlNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoYE9NQUhBIEZSSUVTYCxcbiAgICAgICAgJycsIGBUb3BwZWQgd2l0aCB3YWd5dSBzbG9wcHkgam9lLCBncmlkZGxlZCBjaGVlc2UgY3VyZHMsIGhvdXNlIHJhbmNoLCBEb3JvdGh5IEx5bmNoLCBzY2FsbGlvbiwgYW5kIERvcml0b3MuYCkpO1xuXG5cbiAgICBjb25zdCBzaWRlc0RyaW5rc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlc0RyaW5rc01lbnUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5LW1lbnUnKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVzRHJpbmtzTWVudSk7XG5cbiAgICBjb25zdCBzaWRlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBzaWRlc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVzLXRpdGxlJyk7XG4gICAgc2lkZXNUaXRsZS5pbm5lckhUTUwgPSAnU0lERVMnO1xuICAgIHNpZGVzRHJpbmtzTWVudS5hcHBlbmRDaGlsZChzaWRlc1RpdGxlKTtcblxuICAgIGNvbnN0IGRyaW5rc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBkcmlua3NUaXRsZS5jbGFzc0xpc3QuYWRkKCdkcmlua3MtdGl0bGUnKTtcbiAgICBkcmlua3NUaXRsZS5pbm5lckhUTUwgPSAnRFJJTktTJztcbiAgICBzaWRlc0RyaW5rc01lbnUuYXBwZW5kQ2hpbGQoZHJpbmtzVGl0bGUpO1xuXG4gICAgY29uc3Qgc2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlcy5pbm5lckhUTUwgPSBgU0VBU09ORUQgRlJJRVM8YnI+U1dFRVQgUE9UQVRPIEZSSUVTPGJyPlNJREUgU0FMQURgO1xuICAgIHNpZGVzLmNsYXNzTGlzdC5hZGQoJ3NpZGVzJyk7XG4gICAgc2lkZXNEcmlua3NNZW51LmFwcGVuZENoaWxkKHNpZGVzKTtcblxuICAgIGNvbnN0IG1ha2VDb21ibyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1ha2VDb21iby5jbGFzc0xpc3QuYWRkKCdjb21iby1jb250YWluZXInKTtcbiAgICBzaWRlc0RyaW5rc01lbnUuYXBwZW5kQ2hpbGQobWFrZUNvbWJvKTtcblxuICAgIGNvbnN0IGNvbWJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29tYm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdjb21iby10aXRsZScpO1xuICAgIGNvbWJvVGl0bGUuaW5uZXJUZXh0ID0gJ01BS0UgSVQgQSBDT01CTyc7XG4gICAgbWFrZUNvbWJvLmFwcGVuZENoaWxkKGNvbWJvVGl0bGUpO1xuXG4gICAgY29uc3QgY29tYm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbWJvVGV4dC5jbGFzc0xpc3QuYWRkKCdjb21iby10ZXh0Jyk7XG4gICAgY29tYm9UZXh0LmlubmVyVGV4dCA9ICcrIEFkZCBhIHNvZGEgYW5kIHNlYXNvbmVkIEZyZW5jaCBmcmllcyB0byBhbnkgZW50csOpZS4nO1xuICAgIG1ha2VDb21iby5hcHBlbmRDaGlsZChjb21ib1RleHQpO1xuXG4gICAgc2lkZXNEcmlua3NNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoYFNPREFgLFxuICAgICAgICAnJywgYFdlIHNlcnZlIENva2UsIERpZXQgQ29rZSwgQ2hlcnJ5IENva2UsIEdpbmdlciBBbGUsIGJsdWUgUG93ZXJhZGUsIGFuZCBpY2VkIHRlYS5gKSk7XG4gICAgc2lkZXNEcmlua3NNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoYEJFRVJgLFxuICAgICAgICAnJywgYEJlIHN1cmUgdG8gY2hlY2sgb3VyIGJlZXIgbGlzdCB3aGVuIHlvdSB2aXNpdC4gV2UgYXJlIHByb3VkIHRvIGZlYXR1cmUgbG9jYWwgYnJld2VyaWVzLCBpbmNsdWRpbmcgTHVja3kgQnVja2V0LCBaaXBsaW5lLCBUaHVuZGVyaGVhZCwgRW1weXJlYW4sIFBlYWNlIFRyZWUsIE5lYnJhc2thIEJyZXdpbmcsIEtpbmthaWRlciwgYW5kIEJyaWNrd2F5IEJyZXdlcmllcy5gKSk7XG4gICAgc2lkZXNEcmlua3NNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtTm9JbWcoYFdJTkVgLFxuICAgICAgICAnJywgYEJlIHN1cmUgdG8gY2hlY2sgb3VyIHdpbmUgbGlzdCB3aGVuIHlvdSB2aXNpdC4gV2Ugc2VydmUgYSB2YXJpZXR5IG9mIHdpbmVzLCBpbmNsdWRpbmcgY2FiZXJuZXQgc2F1dmlnbm9uLCBtZXJsb3QsIHBpbm90IG5vaXIsIGNoYXJkb25uYXksIHNhdXZpZ25vbiBibGFuYywgYW5kIHJpZXNsaW5nLmApKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjcmVhdGVOYXZCYXIoKTtcbiAgICBjcmVhdGVNZW51KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBmb290ZXJWaWRlb0JhY2sgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2Zvb3RlclZpZGVvLm1wNCc7XG5pbXBvcnQgZ2l0SHViTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvaWNvbnMvbG9nby1naXRodWIuc3ZnJ1xuaW1wb3J0IGZvb3RlckIxNiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hvbWUtbWVkaWEvbG9nby1mb290ZXIucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgZm9vdGVyQmFja2dyb3VuZC5pZCA9ICdmb290ZXItYmFja2dyb3VuZCc7XG4gICAgZm9vdGVyQmFja2dyb3VuZC5wcmVsb2FkID0gJ2F1dG8nO1xuICAgIGZvb3RlckJhY2tncm91bmQuYXV0b3BsYXkgPSB0cnVlO1xuICAgIGZvb3RlckJhY2tncm91bmQubXV0ZWQgPSB0cnVlO1xuICAgIGZvb3RlckJhY2tncm91bmQubG9vcCA9IHRydWU7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJhY2tncm91bmQpO1xuXG4gICAgY29uc3QgZm9vdGVyVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBmb290ZXJWaWRlby5zcmMgPSBmb290ZXJWaWRlb0JhY2s7XG4gICAgZm9vdGVyVmlkZW8udHlwZSA9ICd2aWRlby9tcDQnO1xuICAgIGZvb3RlckJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZm9vdGVyVmlkZW8pO1xuXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFpbmVyJyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGluZm9UaXRsZS5pZCA9ICdsb2dvLWZvb3Rlcic7XG4gICAgaW5mb1RpdGxlLnN0eWxlLnNldFByb3BlcnR5KCctLWIxNkZvb3RlcicsYHVybCgnJHtmb290ZXJCMTZ9JylgKTtcbiAgICBpbmZvVGl0bGUuaW5uZXJUZXh0ID0gJ0hPVVJTIE9GIE9QRVJBVElPTic7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvVGl0bGUpO1xuXG4gICAgY29uc3Qgc3RvcmVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3JlSG91cnMuY2xhc3NMaXN0LmFkZCgnc3RvcmUtaG91cnMnKTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0b3JlSG91cnMpO1xuXG4gICAgY29uc3QgaG91cnNQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc1AxLmlubmVySFRNTCA9ICc8Yj5NT05EQVkgLSBTQVRVUkRBWTwvYj46IDExIEEuTS4gdG8gMiBQLk0uJztcbiAgICBzdG9yZUhvdXJzLmFwcGVuZENoaWxkKGhvdXJzUDEpO1xuXG4gICAgY29uc3QgaG91cnNQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc1AyLmlubmVySFRNTCA9ICc8Yj5USFVSU0RBWSAtIFNBVFVSREFZPC9iPjogNSBQLk0uIHRvIDggUC5NLic7XG4gICAgc3RvcmVIb3Vycy5hcHBlbmRDaGlsZChob3Vyc1AyKTtcblxuICAgIGNvbnN0IHN0b3JlTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9yZUxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3N0b3JlLWxvY2F0aW9uJyk7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZUxvY2F0aW9uKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvblAuaW5uZXJIVE1MID0gJzE2MTEgRmFybmFtIFN0cmVldDxicj5PbWFoYSwgTmVicmFza2EgNjgxMDY8YnI+YmxvY2sxNmluZm9AZ21haWwuY29tJztcbiAgICBzdG9yZUxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uUCk7XG5cbiAgICBjb25zdCBwYXltZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBheW1lbnRJbmZvLmlubmVySFRNTCA9ICdFYXQgaW4gb3IgdGFrZSBvdXQuIFdlIGFjY2VwdCBjcmVkaXQgY2FyZHMsIHBlcnNvbmFsIGNoZWNrcywgYW5kIGNvbGQtaGFyZCBjYXNoLic7XG4gICAgcGF5bWVudEluZm8uY2xhc3NMaXN0LmFkZCgncGF5bWVudC1pbmZvJyk7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXltZW50SW5mbyk7XG5cbiAgICBjb25zdCBkaXNjbGFpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzY2xhaW1lci5jbGFzc0xpc3QuYWRkKCdkaXNjbGFpbWVyJyk7XG4gICAgZGlzY2xhaW1lci5pbm5lckhUTUw9YERpc2NsYWltZXI6IFRoaXMgbW9jay11cCB3ZWIgcGFnZSBoYXMgYmVlbiBjcmVhdGVkIGZvciBlZHVjYXRpb25hbCBhbmQgcG9ydGZvbGlvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuIEl0IGlzIGFuIGltaXRhdGlvbiBvZiBhIHJlYWwgcmVzdGF1cmFudCBwYWdlLCBhbmQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbCB0aGUgY29udGVudCBhbmQgaW1hZ2VyeSB1c2VkIGFyZSBwbGFjZWhvbGRlcnMgb3IgdGFrZW4gZnJvbSB0aGUgb3JpZ2luYWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdlYnNpdGUgcHVyZWx5IGZvciBkZXNpZ24gYW5kIHByZXNlbnRhdGlvbiByZWFzb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgbW9jay11cCB3ZWIgcGFnZSBpcyBub3QgYWZmaWxpYXRlZCB3aXRoLCBlbmRvcnNlZCBieSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGFzc29jaWF0ZWQgd2l0aCB0aGUgYWN0dWFsIHJlc3RhdXJhbnQgaW4gYW55IHdheS4gVGhlIHVzZSBvZiB0aGUgcmVzdGF1cmFudCdzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBsb2dvLCBvciBhbnkgb3RoZXIgYnJhbmRpbmcgZWxlbWVudHMgaXMgcHVyZWx5IGZvciB2aXN1YWwgcmVwcmVzZW50YXRpb24gYW5kIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2VzIG5vdCBpbmRpY2F0ZSBhbnkgb2ZmaWNpYWwgY29ubmVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEkgcmVzcGVjdCB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCByZXN0YXVyYW50LCBhbmQgYW55IHVzZSBvZiB0aGVpciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCBvbiB0aGlzIG1vY2stdXAgd2ViIHBhZ2UgaXMgbm90IGludGVuZGVkIHRvIGluZnJpbmdlIHVwb24gdGhlaXIgcmlnaHRzLiBJZiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91IGFyZSB0aGUgb3duZXIgb2YgdGhlIG9yaWdpbmFsIHJlc3RhdXJhbnQgYW5kIGhhdmUgYW55IGNvbmNlcm5zIGFib3V0IHRoZSB1c2FnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgeW91ciBjb250ZW50LCBwbGVhc2UgZmVlbCBmcmVlIHRvIDxhIGhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1JhdWxVcmRhbmV0YUcnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSAnX2JsYW5rJz5jb250YWN0IG1lPC9hPiwgYW5kIGkgd2lsbCBwcm9tcHRseSBhZGRyZXNzIHlvdXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNlcm5zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBzZWUgdGhlIG9yaWdpbmFsIHBhZ2UgPGEgaHJlZiA9ICdodHRwczovL2Jsb2NrMTZvbWFoYS5jb20vJyB0YXJnZXQ9J19ibGFuayc+SGVyZTwvYT5gO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGlzY2xhaW1lcik7XG5cbiAgICBjb25zdCB3ZWJzaXRlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlYnNpdGVJbmZvLmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItaW5mbycpO1xuICAgIHdlYnNpdGVJbmZvLmlubmVySFRNTD1gPGgzPk1hZGUgYnkgPC9oMz48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JhdWxVcmRhbmV0YUdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIiR7Z2l0SHViTG9nb31cIiBhbHQ9XCJHaXRodWIgbG9nb1wiPjwvYT48aDM+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9SYXVsVXJkYW5ldGFHXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmF1bCBVcmRhbmV0YTwvYT48L2gzPmA7XG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYnNpdGVJbmZvKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7IiwiaW1wb3J0IEIxNkxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ob21lLW1lZGlhL2xvZ29AMngucG5nJztcbmltcG9ydCBoZWFkZXJGcmlsbHMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItZnJpbGxzLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlcicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uSGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWxvZ28nKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlckxvZ28pO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG4gICAgaGVhZGVyTG9nby5zcmMgPSBCMTZMb2dvO1xuICAgIHNlY3Rpb25IZWFkZXJMb2dvLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuXG4gICAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnUnKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudSk7XG5cbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtbGluaycpO1xuICAgIGhvbWVUaXRsZS5pbm5lclRleHQgPSAnSE9NRSc7XG4gICAgaGVhZGVyTWVudS5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuXG4gICAgY29uc3QgbWVudXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtZW51dFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGluaycpXG4gICAgbWVudXRUaXRsZS5pbm5lclRleHQgPSAnTUVOVSc7XG4gICAgaGVhZGVyTWVudS5hcHBlbmRDaGlsZChtZW51dFRpdGxlKTtcblxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYWJvdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdhYm91dC1saW5rJyk7XG4gICAgYWJvdXRUaXRsZS5pbm5lclRleHQgPSAnQUJPVVQnO1xuICAgIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG5cbiAgICBjb25zdCBmcmlsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmcmlsbHMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWZyaWxscycpO1xuICAgIGZyaWxscy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mcmlsbHMnLGB1cmwoJHtoZWFkZXJGcmlsbHN9KWApO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChmcmlsbHMpO1xuXG4gICAgc2VjdGlvbkhlYWRlckxvZ28uYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdkJhcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3JjL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zcmMvY3NzL25hdi1iYXIuY3NzJztcbmltcG9ydCAnLi4vc3JjL2Nzcy9mb290ZXIuY3NzJztcbmltcG9ydCAnLi4vc3JjL2Nzcy9ob21lLmNzcyc7XG5pbXBvcnQgJy4uL3NyYy9jc3MvbWVudS5jc3MnO1xuaW1wb3J0ICcuLi9zcmMvY3NzL2Fib3V0LmNzcyc7XG5cbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuLi9zcmMvcGFnZXMvaG9tZSc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9wYWdlcy9tZW51JztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9wYWdlcy9hYm91dCc7XG5cbmxvYWRBYm91dCgpO1xuXG5mdW5jdGlvbiBjaGVja0J1dHRvbnMoKXtcblxuICAgIGNvbnN0IGxpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJykpO1xuXG4gICAgbGlua3MuZm9yRWFjaCgoYnV0dG9uKSA9PntcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtbGluaycpKSB7XG4gICAgICAgICAgICAgICAgbG9hZE1lbnUoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9ucygpO1xuICAgICAgICAgICAgfWVsc2UgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUtbGluaycpKSB7XG4gICAgICAgICAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9ucygpO1xuICAgICAgICAgICAgfWVsc2UgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Fib3V0LWxpbmsnKSkge1xuICAgICAgICAgICAgICAgIGxvYWRBYm91dCgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY2hlY2tCdXR0b25zKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9