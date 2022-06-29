"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getRandomPlay";
exports.ids = ["pages/api/getRandomPlay"];
exports.modules = {

/***/ "(api)/./pages/api/getRandomPlay.ts":
/*!************************************!*\
  !*** ./pages/api/getRandomPlay.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var utility_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utility/constants */ \"(api)/./utility/constants.ts\");\n\n\nconst getRandomPlay = () => {\n  return utility_constants__WEBPACK_IMPORTED_MODULE_0__.GamePlays[Math.floor(Math.random() * utility_constants__WEBPACK_IMPORTED_MODULE_0__.GamePlays.length)];\n};\n\nconst getRandomPlayAPICall = async (_request, response) => {\n  const play = getRandomPlay();\n  setTimeout(() => {\n    response.status(200).json({\n      status: utility_constants__WEBPACK_IMPORTED_MODULE_0__.APIConstants.SUCCESS,\n      data: play\n    });\n  }, 3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomPlayAPICall);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UmFuZG9tUGxheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBOztBQUVBLE1BQU1FLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLFNBQU9ELHdEQUFTLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLCtEQUEzQixDQUFELENBQWhCO0FBQ0gsQ0FGRDs7QUFJQSxNQUFNTSxvQkFBb0IsR0FBRyxPQUN6QkMsUUFEeUIsRUFFekJDLFFBRnlCLEtBR3hCO0FBQ0QsUUFBTUMsSUFBWSxHQUFHUixhQUFhLEVBQWxDO0FBQ0FTLEVBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2JGLElBQUFBLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEI7QUFDdEJELE1BQUFBLE1BQU0sRUFBRVosbUVBRGM7QUFFdEJlLE1BQUFBLElBQUksRUFBRUw7QUFGZ0IsS0FBMUI7QUFJSCxHQUxTLEVBS1AsSUFMTyxDQUFWO0FBTUgsQ0FYRDs7QUFhQSxpRUFBZUgsb0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vcGFnZXMvYXBpL2dldFJhbmRvbVBsYXkudHM/MGY2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBSZXNwb25zZVR5cGUgZnJvbSAndHlwZXMvb3RoZXJzL1Jlc3BvbnNlVHlwZSc7XG5pbXBvcnQgeyBBUElDb25zdGFudHMsIEdhbWVQbGF5cyB9IGZyb20gJ3V0aWxpdHkvY29uc3RhbnRzJztcblxuY29uc3QgZ2V0UmFuZG9tUGxheSA9ICgpID0+IHtcbiAgICByZXR1cm4gR2FtZVBsYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEdhbWVQbGF5cy5sZW5ndGgpXTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbVBsYXlBUElDYWxsID0gYXN5bmMgKFxuICAgIF9yZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlVHlwZT5cbikgPT4ge1xuICAgIGNvbnN0IHBsYXk6IHN0cmluZyA9IGdldFJhbmRvbVBsYXkoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICBzdGF0dXM6IEFQSUNvbnN0YW50cy5TVUNDRVNTLFxuICAgICAgICAgICAgZGF0YTogcGxheSxcbiAgICAgICAgfSk7XG4gICAgfSwgMzAwMCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRSYW5kb21QbGF5QVBJQ2FsbDtcbiJdLCJuYW1lcyI6WyJBUElDb25zdGFudHMiLCJHYW1lUGxheXMiLCJnZXRSYW5kb21QbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2V0UmFuZG9tUGxheUFQSUNhbGwiLCJfcmVxdWVzdCIsInJlc3BvbnNlIiwicGxheSIsInNldFRpbWVvdXQiLCJzdGF0dXMiLCJqc29uIiwiU1VDQ0VTUyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getRandomPlay.ts\n");

/***/ }),

/***/ "(api)/./utility/constants.ts":
/*!******************************!*\
  !*** ./utility/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIConstants\": () => (/* binding */ APIConstants),\n/* harmony export */   \"GameConstants\": () => (/* binding */ GameConstants),\n/* harmony export */   \"GamePlays\": () => (/* binding */ GamePlays),\n/* harmony export */   \"Labels\": () => (/* binding */ Labels),\n/* harmony export */   \"Messages\": () => (/* binding */ Messages)\n/* harmony export */ });\nconst APIConstants = {\n  SUCCESS: 'success',\n  FAILED: 'failed'\n};\nconst GamePlays = ['rock', 'paper', 'scissors'];\nconst GameConstants = {\n  YOU_WIN: 'YOU WIN ',\n  DRAW: 'DRAW',\n  YOU_LOSE: 'YOU LOSE'\n};\nconst Labels = {\n  PLAY_GAME: 'Play game!',\n  PLAY_AGAIN: 'Play again',\n  WINNER: 'Winner',\n  ROCK_PAPER_SCISSORS: 'Rock-Paper-Scissors',\n  ENTER_YOUR_NAME: 'Enter your name',\n  PLAYER_NAME: 'Player name',\n  BOT: 'BOT',\n  SCORE: 'Score',\n  YOUR_PLAY: 'Your play',\n  COMPUTER_PLAY: 'Computer play',\n  CHOOSE: 'Choose...',\n  RESTART: 'Restart',\n  CONGRATULATIONS: 'Congratulations!!',\n  BETTER_LUCK_NEXT_TIME: 'Better luck next time ...'\n};\nconst Messages = {\n  PLEASE_ENTER_NAME: 'Please enter your name to continue...'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsaXR5L2NvbnN0YW50cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsRUFBQUEsT0FBTyxFQUFFLFNBRFE7QUFFakJDLEVBQUFBLE1BQU0sRUFBRTtBQUZTLENBQXJCO0FBS0EsTUFBTUMsU0FBUyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FBbEI7QUFFQSxNQUFNQyxhQUFhLEdBQUc7QUFDbEJDLEVBQUFBLE9BQU8sRUFBRSxVQURTO0FBRWxCQyxFQUFBQSxJQUFJLEVBQUUsTUFGWTtBQUdsQkMsRUFBQUEsUUFBUSxFQUFFO0FBSFEsQ0FBdEI7QUFNQSxNQUFNQyxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsU0FBUyxFQUFFLFlBREE7QUFFWEMsRUFBQUEsVUFBVSxFQUFFLFlBRkQ7QUFHWEMsRUFBQUEsTUFBTSxFQUFFLFFBSEc7QUFJWEMsRUFBQUEsbUJBQW1CLEVBQUUscUJBSlY7QUFLWEMsRUFBQUEsZUFBZSxFQUFFLGlCQUxOO0FBTVhDLEVBQUFBLFdBQVcsRUFBRSxhQU5GO0FBT1hDLEVBQUFBLEdBQUcsRUFBRSxLQVBNO0FBUVhDLEVBQUFBLEtBQUssRUFBRSxPQVJJO0FBU1hDLEVBQUFBLFNBQVMsRUFBRSxXQVRBO0FBVVhDLEVBQUFBLGFBQWEsRUFBRSxlQVZKO0FBV1hDLEVBQUFBLE1BQU0sRUFBRSxXQVhHO0FBWVhDLEVBQUFBLE9BQU8sRUFBRSxTQVpFO0FBYVhDLEVBQUFBLGVBQWUsRUFBRSxtQkFiTjtBQWNYQyxFQUFBQSxxQkFBcUIsRUFBRTtBQWRaLENBQWY7QUFpQkEsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLEVBQUFBLGlCQUFpQixFQUFFO0FBRE4sQ0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vdXRpbGl0eS9jb25zdGFudHMudHM/ZTA5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElDb25zdGFudHMgPSB7XG4gICAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxuICAgIEZBSUxFRDogJ2ZhaWxlZCcsXG59O1xuXG5jb25zdCBHYW1lUGxheXMgPSBbJ3JvY2snLCAncGFwZXInLCAnc2Npc3NvcnMnXTtcblxuY29uc3QgR2FtZUNvbnN0YW50cyA9IHtcbiAgICBZT1VfV0lOOiAnWU9VIFdJTiAnLFxuICAgIERSQVc6ICdEUkFXJyxcbiAgICBZT1VfTE9TRTogJ1lPVSBMT1NFJyxcbn07XG5cbmNvbnN0IExhYmVscyA9IHtcbiAgICBQTEFZX0dBTUU6ICdQbGF5IGdhbWUhJyxcbiAgICBQTEFZX0FHQUlOOiAnUGxheSBhZ2FpbicsXG4gICAgV0lOTkVSOiAnV2lubmVyJyxcbiAgICBST0NLX1BBUEVSX1NDSVNTT1JTOiAnUm9jay1QYXBlci1TY2lzc29ycycsXG4gICAgRU5URVJfWU9VUl9OQU1FOiAnRW50ZXIgeW91ciBuYW1lJyxcbiAgICBQTEFZRVJfTkFNRTogJ1BsYXllciBuYW1lJyxcbiAgICBCT1Q6ICdCT1QnLFxuICAgIFNDT1JFOiAnU2NvcmUnLFxuICAgIFlPVVJfUExBWTogJ1lvdXIgcGxheScsXG4gICAgQ09NUFVURVJfUExBWTogJ0NvbXB1dGVyIHBsYXknLFxuICAgIENIT09TRTogJ0Nob29zZS4uLicsXG4gICAgUkVTVEFSVDogJ1Jlc3RhcnQnLFxuICAgIENPTkdSQVRVTEFUSU9OUzogJ0NvbmdyYXR1bGF0aW9ucyEhJyxcbiAgICBCRVRURVJfTFVDS19ORVhUX1RJTUU6ICdCZXR0ZXIgbHVjayBuZXh0IHRpbWUgLi4uJyxcbn07XG5cbmNvbnN0IE1lc3NhZ2VzID0ge1xuICAgIFBMRUFTRV9FTlRFUl9OQU1FOiAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZSB0byBjb250aW51ZS4uLicsXG59O1xuXG5leHBvcnQgeyBBUElDb25zdGFudHMsIEdhbWVQbGF5cywgR2FtZUNvbnN0YW50cywgTGFiZWxzLCBNZXNzYWdlcyB9O1xuIl0sIm5hbWVzIjpbIkFQSUNvbnN0YW50cyIsIlNVQ0NFU1MiLCJGQUlMRUQiLCJHYW1lUGxheXMiLCJHYW1lQ29uc3RhbnRzIiwiWU9VX1dJTiIsIkRSQVciLCJZT1VfTE9TRSIsIkxhYmVscyIsIlBMQVlfR0FNRSIsIlBMQVlfQUdBSU4iLCJXSU5ORVIiLCJST0NLX1BBUEVSX1NDSVNTT1JTIiwiRU5URVJfWU9VUl9OQU1FIiwiUExBWUVSX05BTUUiLCJCT1QiLCJTQ09SRSIsIllPVVJfUExBWSIsIkNPTVBVVEVSX1BMQVkiLCJDSE9PU0UiLCJSRVNUQVJUIiwiQ09OR1JBVFVMQVRJT05TIiwiQkVUVEVSX0xVQ0tfTkVYVF9USU1FIiwiTWVzc2FnZXMiLCJQTEVBU0VfRU5URVJfTkFNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utility/constants.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getRandomPlay.ts"));
module.exports = __webpack_exports__;

})();