webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bitcoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bitcoin */ "./src/Bitcoin.js");
/* harmony import */ var _Ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ethereum */ "./src/Ethereum.js");
/* harmony import */ var _BitcoinRecommendation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BitcoinRecommendation */ "./src/BitcoinRecommendation.js");
/* harmony import */ var _EthereumRecommendation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EthereumRecommendation */ "./src/EthereumRecommendation.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mohammedbhuiyan/Desktop/chainalysis_assessment/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();








const bitcoinBinanceFeeds = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
const ethereumBinanceFeeds = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
const coinbaseFeeds = new WebSocket('wss://ws-feed.exchange.coinbase.com');

function App() {
  _s();

  const [coinbaseBTCData, setCoinbaseBTCData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [coinbaseETHData, setCoinbaseETHData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [binanceBTCData, setBinanceBTCData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [binanceETHData, setBinanceETHData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  coinbaseFeeds.onopen = subscribe_message => {
    subscribe_message = {
      "type": "subscribe",
      "product_ids": ["BTC-USD", "ETH-USD"],
      "channels": ["ticker"]
    };
    coinbaseFeeds.send(JSON.stringify(subscribe_message));
  };

  coinbaseFeeds.onmessage = message => {
    let wsData = JSON.parse(message.data);

    if (wsData.product_id === 'BTC-USD') {
      setCoinbaseBTCData(wsData);
    } else if (wsData.product_id === 'ETH-USD') {
      setCoinbaseETHData(wsData);
    }
  };

  bitcoinBinanceFeeds.onmessage = message => {
    let wsData = JSON.parse(message.data);
    setBinanceBTCData(wsData);
  };

  ethereumBinanceFeeds.onmessage = message => {
    let wsData = JSON.parse(message.data);
    setBinanceETHData(wsData);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
      children: "Cryptocurrency Tracker"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
      className: "cards",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("article", {
        className: "card",
        style: {
          width: "40em",
          height: "20rem"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          className: "card-title",
          children: "Bitcoin BTC USD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Bitcoin__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: binanceBTCData,
          data2: coinbaseBTCData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_BitcoinRecommendation__WEBPACK_IMPORTED_MODULE_3__["default"], {
          binanceBTCData: binanceBTCData,
          coinbaseBTCData: coinbaseBTCData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("article", {
        className: "card",
        style: {
          width: "40em",
          height: "20rem"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          className: "card-title",
          children: "Ethereum ETH USD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Ethereum__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: binanceETHData,
          data2: coinbaseETHData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_EthereumRecommendation__WEBPACK_IMPORTED_MODULE_4__["default"], {
          binanceETHData: binanceETHData,
          coinbaseETHData: coinbaseETHData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(App, "LtyL83BREy4aUfDG76Ylnj16s58=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.d43d6e5801a2726d2696.hot-update.js.map