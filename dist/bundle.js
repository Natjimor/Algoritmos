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

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card),\n/* harmony export */   \"episode_props\": () => (/* binding */ episode_props)\n/* harmony export */ });\nvar episode_props;\n(function (episode_props) {\n    episode_props[\"name\"] = \"name\";\n    episode_props[\"air_date\"] = \"air_date\";\n    episode_props[\"episode\"] = \"episode\";\n    episode_props[\"characters\"] = \"characters\";\n})(episode_props || (episode_props = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            air_date: null,\n            episode: null,\n            characters: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            case episode_props.name:\n                this.properties.name = newValue;\n                break;\n            case episode_props.air_date:\n                this.properties.air_date = newValue;\n                break;\n            case episode_props.episode:\n                this.properties.episode = newValue;\n                break;\n            case episode_props.characters:\n                this.properties.characters = newValue;\n                break;\n            default:\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.properties = {\n            name: '',\n            air_date: '',\n            episode: '',\n            characters: ''\n        };\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n\t\t\t<link rel=\"stylesheet\" href=\"/src/components/card/styles.css\">\n\t\t\t<section>\n\t\t\t<h2>${this.properties.name}</h2>\n\t\t\t<p>${this.properties.air_date}</p>\n\t\t\t<p>${this.properties.episode}</p>\n\t\t\t<p>${this.properties.characters}</p>\n\t\t\t</section>\n        `;\n    }\n}\ncustomElements.define('app-card', Card);\n\n\n//# sourceURL=webpack://dca_template/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/character/character.ts":
/*!***********************************************!*\
  !*** ./src/components/character/character.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"character_props\": () => (/* binding */ character_props),\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\nvar character_props;\n(function (character_props) {\n    character_props[\"name\"] = \"name\";\n    character_props[\"image\"] = \"image\";\n})(character_props || (character_props = {}));\nclass Character extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            image: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            case character_props.name:\n                this.name = newValue;\n                break;\n            case character_props.image:\n                this.image = newValue;\n                break;\n            default:\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n\t\t\t<link rel=\"stylesheet\" href=\"/src/components/character/styles.css\">\r\n\t\t\t<section>\r\n\t\t\t\t<h3>${this.name}</h3>\r\n\t\t\t\t<img src=\"${this.image}\" alt=\"${this.name}\">\r\n\t\t\t</section>\r\n        `;\n    }\n}\ncustomElements.define('app-character', Character);\n\n\n//# sourceURL=webpack://dca_template/./src/components/character/character.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Character\": () => (/* reexport safe */ _character_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _character_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character/character */ \"./src/components/character/character.ts\");\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_template/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const dashboard = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(dashboard);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_template/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getData */ \"./src/services/getData.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _components_character_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/character/character */ \"./src/components/character/character.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const episodeData = yield (0,_services_getData__WEBPACK_IMPORTED_MODULE_0__.EpisodeData)();\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.addEpisodes)(JSON.stringify(episodeData)));\n            this.render(episodeData.results);\n        });\n    }\n    render(episodeData) {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            const style = this.ownerDocument.createElement(\"link\");\n            style.setAttribute(\"rel\", \"stylesheet\");\n            style.setAttribute(\"href\", \"/src/screens/dashboard.css\");\n            this.shadowRoot.appendChild(style);\n            episodeData.forEach((e) => {\n                var _a;\n                const div = this.ownerDocument.createElement(\"div\");\n                const episode = this.ownerDocument.createElement('app-card');\n                episode.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.episode_props.name, e.name);\n                episode.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.episode_props.air_date, e.air_date);\n                episode.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.episode_props.episode, e.episode);\n                div.appendChild(episode);\n                const characterContainer = this.ownerDocument.createElement(\"section\");\n                div.appendChild(characterContainer);\n                e.characters.forEach((characters) => __awaiter(this, void 0, void 0, function* () {\n                    const characterData = yield (0,_services_getData__WEBPACK_IMPORTED_MODULE_0__.CharacterData)(characters);\n                    (0,_store_index__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.addCharacter)(JSON.stringify(characterData)));\n                    const character = this.ownerDocument.createElement('app-character');\n                    character.setAttribute(_components_character_character__WEBPACK_IMPORTED_MODULE_2__.character_props.name, characterData.name);\n                    character.setAttribute(_components_character_character__WEBPACK_IMPORTED_MODULE_2__.character_props.image, characterData.image);\n                    characterContainer.appendChild(character);\n                }));\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(div);\n            });\n        }\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_template/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getData.ts":
/*!*********************************!*\
  !*** ./src/services/getData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CharacterData\": () => (/* binding */ CharacterData),\n/* harmony export */   \"EpisodeData\": () => (/* binding */ EpisodeData)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst EpisodeData = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const Episode = yield fetch('https://rickandmortyapi.com/api/episode').then(res => res.json());\n        return Episode;\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nconst CharacterData = (src) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const character = yield fetch(`${src}`).then(res => res.json());\n        return character;\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\n\n\n//# sourceURL=webpack://dca_template/./src/services/getData.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCharacter\": () => (/* binding */ addCharacter),\n/* harmony export */   \"addEpisodes\": () => (/* binding */ addEpisodes)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst addCharacter = (payload) => {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionsList.ADD_CHARACTERS,\n        payload,\n    };\n};\nconst addEpisodes = (payload) => {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionsList.GET_EPISODES,\n        payload,\n    };\n};\n\n\n//# sourceURL=webpack://dca_template/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch),\n/* harmony export */   \"state\": () => (/* binding */ state)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\nconst observers = [];\nlet state = {\n    episodes: [],\n    characters: []\n};\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(state));\n    state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer)(action, clone);\n    observers.forEach((o) => o.render());\n    console.log(state);\n};\nconst addObserver = (observer) => {\n    observers.push(observer);\n};\n\n\n//# sourceURL=webpack://dca_template/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (action, currentState) => {\n    switch (action.type) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionsList.GET_EPISODES:\n            return Object.assign(Object.assign({}, currentState), { episodes: JSON.parse(action.payload) });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionsList.ADD_CHARACTERS:\n            const newCharactersList = currentState.characters;\n            if (!newCharactersList.includes(JSON.parse(action.payload))) {\n                newCharactersList.push(JSON.parse(action.payload));\n                return Object.assign(Object.assign({}, currentState), { characters: newCharactersList });\n            }\n            else {\n                return currentState;\n            }\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://dca_template/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActionsList\": () => (/* binding */ ActionsList)\n/* harmony export */ });\nvar ActionsList;\n(function (ActionsList) {\n    ActionsList[\"ADD_CHARACTERS\"] = \"ADD_CHARACTERS\";\n    ActionsList[\"GET_EPISODES\"] = \"GET_EPISODES\";\n})(ActionsList || (ActionsList = {}));\n\n\n//# sourceURL=webpack://dca_template/./src/types/store.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;