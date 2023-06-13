(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["elp-cascader"] = factory(require("vue"));
	else
		root["elp-cascader"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0e15":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undefined */

var throttle = __webpack_require__("597f");

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
module.exports = function ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "14e9":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
/******/ })
/************************************************************************/
/******/ ({

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(16);

// EXTERNAL MODULE: external "element-ui/lib/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(39);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// EXTERNAL MODULE: external "element-ui/lib/utils/dom"
var dom_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/scrollbar/src/util.js
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};
// CONCATENATED MODULE: ./packages/scrollbar/src/bar.js



/* istanbul ignore next */
/* harmony default export */ var src_bar = ({
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['el-scrollbar__bar', 'is-' + bar.key],
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h('div', {
        ref: 'thumb',
        'class': 'el-scrollbar__thumb',
        on: {
          'mousedown': this.clickThumbHandler
        },

        style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/src/main.js
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js






/* istanbul ignore next */
/* harmony default export */ var main = ({
  name: 'ElScrollbar',

  components: { Bar: src_bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = scrollbar_width_default()();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = Object(util_["toObject"])(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['el-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(src_bar, {
        attrs: {
          move: this.moveX,
          size: this.sizeWidth }
      }), h(src_bar, {
        attrs: {
          vertical: true,
          move: this.moveY,
          size: this.sizeHeight }
      })];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'el-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'el-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },
    update: function update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && Object(resize_event_["addResizeListener"])(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && Object(resize_event_["removeResizeListener"])(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (main);

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = __webpack_require__("4010");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __webpack_require__("5924");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __webpack_require__("8122");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = __webpack_require__("e62d");

/***/ })

/******/ });

/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "252c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeObserver; });
function getInternetExplorerVersion() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return -1;
}

var isIE = void 0;

function initCompat() {
	if (!initCompat.init) {
		initCompat.init = true;
		isIE = getInternetExplorerVersion() !== -1;
	}
}

var ResizeObserver = { render: function render() {
		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "resize-observer", attrs: { "tabindex": "-1" } });
	}, staticRenderFns: [], _scopeId: 'data-v-b329ee4c',
	name: 'resize-observer',

	methods: {
		compareAndNotify: function compareAndNotify() {
			if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
				this._w = this.$el.offsetWidth;
				this._h = this.$el.offsetHeight;
				this.$emit('notify');
			}
		},
		addResizeHandlers: function addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);
			this.compareAndNotify();
		},
		removeResizeHandlers: function removeResizeHandlers() {
			if (this._resizeObject && this._resizeObject.onload) {
				if (!isIE && this._resizeObject.contentDocument) {
					this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
				}
				delete this._resizeObject.onload;
			}
		}
	},

	mounted: function mounted() {
		var _this = this;

		initCompat();
		this.$nextTick(function () {
			_this._w = _this.$el.offsetWidth;
			_this._h = _this.$el.offsetHeight;
		});
		var object = document.createElement('object');
		this._resizeObject = object;
		object.setAttribute('aria-hidden', 'true');
		object.setAttribute('tabindex', -1);
		object.onload = this.addResizeHandlers;
		object.type = 'text/html';
		if (isIE) {
			this.$el.appendChild(object);
		}
		object.data = 'about:blank';
		if (!isIE) {
			this.$el.appendChild(object);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeResizeHandlers();
	}
};

// Install the components
function install(Vue) {
	Vue.component('resize-observer', ResizeObserver);
	Vue.component('ResizeObserver', ResizeObserver);
}

// Plugin
var plugin = {
	// eslint-disable-next-line no-undef
	version: "0.4.5",
	install: install
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}


/* unused harmony default export */ var _unused_webpack_default_export = (plugin);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2638":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "2986":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4010":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeResizeListener = exports.addResizeListener = undefined;

var _resizeObserverPolyfill = __webpack_require__("6dd8");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = typeof window === 'undefined';

/* istanbul ignore next */
var resizeHandler = function resizeHandler(entries) {
  for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var entry = _ref;

    var listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(function (fn) {
        fn();
      });
    }
  }
};

/* istanbul ignore next */
var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new _resizeObserverPolyfill2.default(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};

/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "450d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "45fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $some = __webpack_require__("b727").some;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4d32":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4ff4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

//
// Cross module loader
// Supported: Node, AMD, Browser globals
//
;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {

    'use strict';

    var root = window;

    // default options
    var DEFAULTS = {
        // placement of the popper
        placement: 'bottom',

        gpuAcceleration: true,

        // shift popper from its origin by the given amount of pixels (can be negative)
        offset: 0,

        // the element which will act as boundary of the popper
        boundariesElement: 'viewport',

        // amount of pixel used to define a minimum distance between the boundaries and the popper
        boundariesPadding: 5,

        // popper will try to prevent overflow following this order,
        // by default, then, it could overflow on the left and on top of the boundariesElement
        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

        // the behavior used by flip to change the placement of the popper
        flipBehavior: 'flip',

        arrowElement: '[x-arrow]',

        arrowOffset: 0,

        // list of functions used to modify the offsets before they are applied to the popper
        modifiers: [ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

        modifiersIgnored: [],

        forceAbsolute: false
    };

    /**
     * Create a new Popper.js instance
     * @constructor Popper
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement|Object} popper
     *      The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
     * @param {Object} options
     * @param {String} [options.placement=bottom]
     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
     *      left(-start, -end)`
     *
     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
     *      reference element.
     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
     *
     * @param {Boolean} [options.gpuAcceleration=true]
     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
     *      browser to use the GPU to accelerate the rendering.
     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
     *
     * @param {Number} [options.offset=0]
     *      Amount of pixels the popper will be shifted (can be negative).
     *
     * @param {String|Element} [options.boundariesElement='viewport']
     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
     *      of the defined boundaries (except if `keepTogether` is enabled)
     *
     * @param {Number} [options.boundariesPadding=5]
     *      Additional padding for the boundaries
     *
     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
     *      this means that the last ones will never overflow
     *
     * @param {String|Array} [options.flipBehavior='flip']
     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
     *      its axis (`right - left`, `top - bottom`).
     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
     *
     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
     *      to this array to edit the offsets and placement.
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Array} [options.modifiersIgnored=[]]
     *      Put here any built-in modifier name you want to exclude from the modifiers list
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Boolean} [options.removeOnDestroy=false]
     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
     */
    function Popper(reference, popper, options) {
        this._reference = reference.jquery ? reference[0] : reference;
        this.state = {};

        // if the popper variable is a configuration object, parse it to generate an HTMLElement
        // generate a default popper if is not defined
        var isNotDefined = typeof popper === 'undefined' || popper === null;
        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
        if (isNotDefined || isConfig) {
            this._popper = this.parse(isConfig ? popper : {});
        }
        // otherwise, use the given HTMLElement as popper
        else {
            this._popper = popper.jquery ? popper[0] : popper;
        }

        // with {} we create a new object with the options inside it
        this._options = Object.assign({}, DEFAULTS, options);

        // refactoring modifiers' list
        this._options.modifiers = this._options.modifiers.map(function(modifier){
            // remove ignored modifiers
            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

            // set the x-placement attribute before everything else because it could be used to add margins to the popper
            // margins needs to be calculated to get the correct popper offsets
            if (modifier === 'applyStyle') {
                this._popper.setAttribute('x-placement', this._options.placement);
            }

            // return predefined modifier identified by string or keep the custom one
            return this.modifiers[modifier] || modifier;
        }.bind(this));

        // make sure to apply the popper position before any computation
        this.state.position = this._getPosition(this._popper, this._reference);
        setStyle(this._popper, { position: this.state.position, top: 0 });

        // fire the first update to position the popper in the right place
        this.update();

        // setup event listeners, they will take care of update the position in specific situations
        this._setupEventListeners();
        return this;
    }


    //
    // Methods
    //
    /**
     * Destroy the popper
     * @method
     * @memberof Popper
     */
    Popper.prototype.destroy = function() {
        this._popper.removeAttribute('x-placement');
        this._popper.style.left = '';
        this._popper.style.position = '';
        this._popper.style.top = '';
        this._popper.style[getSupportedPropertyName('transform')] = '';
        this._removeEventListeners();

        // remove the popper if user explicity asked for the deletion on destroy
        if (this._options.removeOnDestroy) {
            this._popper.remove();
        }
        return this;
    };

    /**
     * Updates the position of the popper, computing the new offsets and applying the new style
     * @method
     * @memberof Popper
     */
    Popper.prototype.update = function() {
        var data = { instance: this, styles: {} };

        // store placement inside the data object, modifiers will be able to edit `placement` if needed
        // and refer to _originalPlacement to know the original value
        data.placement = this._options.placement;
        data._originalPlacement = this._options.placement;

        // compute the popper and reference offsets and put them inside data.offsets
        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

        // get boundaries
        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

        data = this.runModifiers(data, this._options.modifiers);

        if (typeof this.state.updateCallback === 'function') {
            this.state.updateCallback(data);
        }
    };

    /**
     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onCreate = function(callback) {
        // the createCallbacks return as first argument the popper instance
        callback(this);
        return this;
    };

    /**
     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
     * used to style popper and its arrow.
     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onUpdate = function(callback) {
        this.state.updateCallback = callback;
        return this;
    };

    /**
     * Helper used to generate poppers from a configuration file
     * @method
     * @memberof Popper
     * @param config {Object} configuration
     * @returns {HTMLElement} popper
     */
    Popper.prototype.parse = function(config) {
        var defaultConfig = {
            tagName: 'div',
            classNames: [ 'popper' ],
            attributes: [],
            parent: root.document.body,
            content: '',
            contentType: 'text',
            arrowTagName: 'div',
            arrowClassNames: [ 'popper__arrow' ],
            arrowAttributes: [ 'x-arrow']
        };
        config = Object.assign({}, defaultConfig, config);

        var d = root.document;

        var popper = d.createElement(config.tagName);
        addClassNames(popper, config.classNames);
        addAttributes(popper, config.attributes);
        if (config.contentType === 'node') {
            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
        }else if (config.contentType === 'html') {
            popper.innerHTML = config.content;
        } else {
            popper.textContent = config.content;
        }

        if (config.arrowTagName) {
            var arrow = d.createElement(config.arrowTagName);
            addClassNames(arrow, config.arrowClassNames);
            addAttributes(arrow, config.arrowAttributes);
            popper.appendChild(arrow);
        }

        var parent = config.parent.jquery ? config.parent[0] : config.parent;

        // if the given parent is a string, use it to match an element
        // if more than one element is matched, the first one will be used as parent
        // if no elements are matched, the script will throw an error
        if (typeof parent === 'string') {
            parent = d.querySelectorAll(config.parent);
            if (parent.length > 1) {
                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
            }
            if (parent.length === 0) {
                throw 'ERROR: the given `parent` doesn\'t exists!';
            }
            parent = parent[0];
        }
        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
        // the first one will be used as parent
        if (parent.length > 1 && parent instanceof Element === false) {
            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
            parent = parent[0];
        }

        // append the generated popper to its parent
        parent.appendChild(popper);

        return popper;

        /**
         * Adds class names to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} classes
         */
        function addClassNames(element, classNames) {
            classNames.forEach(function(className) {
                element.classList.add(className);
            });
        }

        /**
         * Adds attributes to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} attributes
         * @example
         * addAttributes(element, [ 'data-info:foobar' ]);
         */
        function addAttributes(element, attributes) {
            attributes.forEach(function(attribute) {
                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
            });
        }

    };

    /**
     * Helper used to get the position which will be applied to the popper
     * @method
     * @memberof Popper
     * @param config {HTMLElement} popper element
     * @param reference {HTMLElement} reference element
     * @returns {String} position
     */
    Popper.prototype._getPosition = function(popper, reference) {
        var container = getOffsetParent(reference);

        if (this._options.forceAbsolute) {
            return 'absolute';
        }

        // Decide if the popper will be fixed
        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
        var isParentFixed = isFixed(reference, container);
        return isParentFixed ? 'fixed' : 'absolute';
    };

    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper
     * @access private
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    Popper.prototype._getOffsets = function(popper, reference, placement) {
        placement = placement.split('-')[0];
        var popperOffsets = {};

        popperOffsets.position = this.state.position;
        var isParentFixed = popperOffsets.position === 'fixed';

        //
        // Get reference element position
        //
        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

        //
        // Get popper sizes
        //
        var popperRect = getOuterSizes(popper);

        //
        // Compute offsets of popper
        //

        // depending by the popper placement we have to compute its offsets slightly differently
        if (['right', 'left'].indexOf(placement) !== -1) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
            if (placement === 'left') {
                popperOffsets.left = referenceOffsets.left - popperRect.width;
            } else {
                popperOffsets.left = referenceOffsets.right;
            }
        } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
            if (placement === 'top') {
                popperOffsets.top = referenceOffsets.top - popperRect.height;
            } else {
                popperOffsets.top = referenceOffsets.bottom;
            }
        }

        // Add width and height to our offsets object
        popperOffsets.width   = popperRect.width;
        popperOffsets.height  = popperRect.height;

        return {
            popper: popperOffsets,
            reference: referenceOffsets
        };
    };


    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._setupEventListeners = function() {
        // NOTE: 1 DOM access here
        this.state.updateBound = this.update.bind(this);
        root.addEventListener('resize', this.state.updateBound);
        // if the boundariesElement is window we don't need to listen for the scroll event
        if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference);
            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
            if (target === root.document.body || target === root.document.documentElement) {
                target = root;
            }
            target.addEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = target;
        }
    };

    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._removeEventListeners = function() {
        // NOTE: 1 DOM access here
        root.removeEventListener('resize', this.state.updateBound);
        if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
            this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = null;
        }
        this.state.updateBound = null;
    };

    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper
     * @access private
     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
     * @param {Number} padding - Boundaries padding
     * @param {Element} boundariesElement - Element used to define the boundaries
     * @returns {Object} Coordinates of the boundaries
     */
    Popper.prototype._getBoundaries = function(data, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = {};
        var width, height;
        if (boundariesElement === 'window') {
            var body = root.document.body,
                html = root.document.documentElement;

            height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
            width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

            boundaries = {
                top: 0,
                right: width,
                bottom: height,
                left: 0
            };
        } else if (boundariesElement === 'viewport') {
            var offsetParent = getOffsetParent(this._popper);
            var scrollParent = getScrollParent(this._popper);
            var offsetParentRect = getOffsetRect(offsetParent);

            // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
            var getScrollTopValue = function (element) {
                return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
            }
            var getScrollLeftValue = function (element) {
                return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
            }

            // if the popper is fixed we don't have to substract scrolling from the boundaries
            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);

            boundaries = {
                top: 0 - (offsetParentRect.top - scrollTop),
                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
                left: 0 - (offsetParentRect.left - scrollLeft)
            };
        } else {
            if (getOffsetParent(this._popper) === boundariesElement) {
                boundaries = {
                    top: 0,
                    left: 0,
                    right: boundariesElement.clientWidth,
                    bottom: boundariesElement.clientHeight
                };
            } else {
                boundaries = getOffsetRect(boundariesElement);
            }
        }
        boundaries.left += padding;
        boundaries.right -= padding;
        boundaries.top = boundaries.top + padding;
        boundaries.bottom = boundaries.bottom - padding;
        return boundaries;
    };


    /**
     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
     * @method
     * @memberof Popper
     * @access public
     * @param {Object} data
     * @param {Array} modifiers
     * @param {Function} ends
     */
    Popper.prototype.runModifiers = function(data, modifiers, ends) {
        var modifiersToRun = modifiers.slice();
        if (ends !== undefined) {
            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
        }

        modifiersToRun.forEach(function(modifier) {
            if (isFunction(modifier)) {
                data = modifier.call(this, data);
            }
        }.bind(this));

        return data;
    };

    /**
     * Helper used to know if the given modifier depends from another one.
     * @method
     * @memberof Popper
     * @param {String} requesting - name of requesting modifier
     * @param {String} requested - name of requested modifier
     * @returns {Boolean}
     */
    Popper.prototype.isModifierRequired = function(requesting, requested) {
        var index = getArrayKeyIndex(this._options.modifiers, requesting);
        return !!this._options.modifiers.slice(0, index).filter(function(modifier) {
            return modifier === requested;
        }).length;
    };

    //
    // Modifiers
    //

    /**
     * Modifiers list
     * @namespace Popper.modifiers
     * @memberof Popper
     * @type {Object}
     */
    Popper.prototype.modifiers = {};

    /**
     * Apply the computed styles to the popper element
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The same data object
     */
    Popper.prototype.modifiers.applyStyle = function(data) {
        // apply the final offsets to the popper
        // NOTE: 1 DOM access here
        var styles = {
            position: data.offsets.popper.position
        };

        // round top and left to avoid blurry text
        var left = Math.round(data.offsets.popper.left);
        var top = Math.round(data.offsets.popper.top);

        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
        // we automatically use the supported prefixed version if needed
        var prefixedProperty;
        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles.top = 0;
            styles.left = 0;
        }
        // othwerise, we use the standard `left` and `top` properties
        else {
            styles.left =left;
            styles.top = top;
        }

        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        Object.assign(styles, data.styles);

        setStyle(this._popper, styles);

        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
        // NOTE: 1 DOM access here
        this._popper.setAttribute('x-placement', data.placement);

        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
            setStyle(data.arrowElement, data.offsets.arrow);
        }

        return data;
    };

    /**
     * Modifier used to shift the popper on the start or end of its reference element side
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.shift = function(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftVariation = placement.split('-')[1];

        // if shift shiftVariation is specified, run the modifier
        if (shiftVariation) {
            var reference = data.offsets.reference;
            var popper = getPopperClientRect(data.offsets.popper);

            var shiftOffsets = {
                y: {
                    start:  { top: reference.top },
                    end:    { top: reference.top + reference.height - popper.height }
                },
                x: {
                    start:  { left: reference.left },
                    end:    { left: reference.left + reference.width - popper.width }
                }
            };

            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
        }

        return data;
    };


    /**
     * Modifier used to make sure the popper does not overflows from it's boundaries
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.preventOverflow = function(data) {
        var order = this._options.preventOverflowOrder;
        var popper = getPopperClientRect(data.offsets.popper);

        var check = {
            left: function() {
                var left = popper.left;
                if (popper.left < data.boundaries.left) {
                    left = Math.max(popper.left, data.boundaries.left);
                }
                return { left: left };
            },
            right: function() {
                var left = popper.left;
                if (popper.right > data.boundaries.right) {
                    left = Math.min(popper.left, data.boundaries.right - popper.width);
                }
                return { left: left };
            },
            top: function() {
                var top = popper.top;
                if (popper.top < data.boundaries.top) {
                    top = Math.max(popper.top, data.boundaries.top);
                }
                return { top: top };
            },
            bottom: function() {
                var top = popper.top;
                if (popper.bottom > data.boundaries.bottom) {
                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
                }
                return { top: top };
            }
        };

        order.forEach(function(direction) {
            data.offsets.popper = Object.assign(popper, check[direction]());
        });

        return data;
    };

    /**
     * Modifier used to make sure the popper is always near its reference
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.keepTogether = function(data) {
        var popper  = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var f = Math.floor;

        if (popper.right < f(reference.left)) {
            data.offsets.popper.left = f(reference.left) - popper.width;
        }
        if (popper.left > f(reference.right)) {
            data.offsets.popper.left = f(reference.right);
        }
        if (popper.bottom < f(reference.top)) {
            data.offsets.popper.top = f(reference.top) - popper.height;
        }
        if (popper.top > f(reference.bottom)) {
            data.offsets.popper.top = f(reference.bottom);
        }

        return data;
    };

    /**
     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
     * Requires the `preventOverflow` modifier before it in order to work.
     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.flip = function(data) {
        // check if preventOverflow is in the list of modifiers before the flip modifier.
        // otherwise flip would not work as expected.
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
            return data;
        }

        if (data.flipped && data.placement === data._originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data;
        }

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];
        if(this._options.flipBehavior === 'flip') {
            flipOrder = [
                placement,
                placementOpposite
            ];
        } else {
            flipOrder = this._options.flipBehavior;
        }

        flipOrder.forEach(function(step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return;
            }

            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);

            var popperOffsets = getPopperClientRect(data.offsets.popper);

            // this boolean is used to distinguish right and bottom from top and left
            // they need different computations to get flipped
            var a = ['right', 'bottom'].indexOf(placement) !== -1;

            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
            if (
                a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) ||
                !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])
            ) {
                // we'll use this boolean to detect any flip loop
                data.flipped = true;
                data.placement = flipOrder[index + 1];
                if (variation) {
                    data.placement += '-' + variation;
                }
                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

                data = this.runModifiers(data, this._options.modifiers, this._flip);
            }
        }.bind(this));
        return data;
    };

    /**
     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
     * The offsets will shift the popper on the side of its reference element.
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.offset = function(data) {
        var offset = this._options.offset;
        var popper  = data.offsets.popper;

        if (data.placement.indexOf('left') !== -1) {
            popper.top -= offset;
        }
        else if (data.placement.indexOf('right') !== -1) {
            popper.top += offset;
        }
        else if (data.placement.indexOf('top') !== -1) {
            popper.left -= offset;
        }
        else if (data.placement.indexOf('bottom') !== -1) {
            popper.left += offset;
        }
        return data;
    };

    /**
     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.arrow = function(data) {
        var arrow  = this._options.arrowElement;
        var arrowOffset = this._options.arrowOffset;

        // if the arrowElement is a string, suppose it's a CSS selector
        if (typeof arrow === 'string') {
            arrow = this._popper.querySelector(arrow);
        }

        // if arrow element is not found, don't run the modifier
        if (!arrow) {
            return data;
        }

        // the arrow element must be child of its popper
        if (!this._popper.contains(arrow)) {
            console.warn('WARNING: `arrowElement` must be child of its popper element!');
            return data;
        }

        // arrow depends on keepTogether in order to work
        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
            return data;
        }

        var arrowStyle  = {};
        var placement   = data.placement.split('-')[0];
        var popper      = getPopperClientRect(data.offsets.popper);
        var reference   = data.offsets.reference;
        var isVertical  = ['left', 'right'].indexOf(placement) !== -1;

        var len         = isVertical ? 'height' : 'width';
        var side        = isVertical ? 'top' : 'left';
        var translate   = isVertical ? 'translateY' : 'translateX';
        var altSide     = isVertical ? 'left' : 'top';
        var opSide      = isVertical ? 'bottom' : 'right';
        var arrowSize   = getOuterSizes(arrow)[len];

        //
        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
        }
        // bottom/right side
        if (reference[side] + arrowSize > popper[opSide]) {
            data.offsets.popper[side] += (reference[side] + arrowSize) - popper[opSide];
        }

        // compute center of the popper
        var center = reference[side] + (arrowOffset || (reference[len] / 2) - (arrowSize / 2));

        var sideValue = center - popper[side];

        // prevent arrow from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
        arrowStyle[side] = sideValue;
        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

        data.offsets.arrow = arrowStyle;
        data.arrowElement = arrow;

        return data;
    };


    //
    // Helpers
    //

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes(element) {
        // NOTE: 1 DOM access here
        var _display = element.style.display, _visibility = element.style.visibility;
        element.style.display = 'block'; element.style.visibility = 'hidden';
        var calcWidthToForceRepaint = element.offsetWidth;

        // original method
        var styles = root.getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

        // reset element styles
        element.style.display = _display; element.style.visibility = _visibility;
        return result;
    }

    /**
     * Get the opposite placement of the given one/
     * @function
     * @ignore
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement(placement) {
        var hash = {left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function(matched){
            return hash[matched];
        });
    }

    /**
     * Given the popper offsets, generate an output similar to getBoundingClientRect
     * @function
     * @ignore
     * @argument {Object} popperOffsets
     * @returns {Object} ClientRect like output
     */
    function getPopperClientRect(popperOffsets) {
        var offsets = Object.assign({}, popperOffsets);
        offsets.right = offsets.left + offsets.width;
        offsets.bottom = offsets.top + offsets.height;
        return offsets;
    }

    /**
     * Given an array and the key to find, returns its index
     * @function
     * @ignore
     * @argument {Array} arr
     * @argument keyToFind
     * @returns index or null
     */
    function getArrayKeyIndex(arr, keyToFind) {
        var i = 0, key;
        for (key in arr) {
            if (arr[key] === keyToFind) {
                return i;
            }
            i++;
        }
        return null;
    }

    /**
     * Get CSS computed property of the given element
     * @function
     * @ignore
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty(element, property) {
        // NOTE: 1 DOM access here
        var css = root.getComputedStyle(element, null);
        return css[property];
    }

    /**
     * Returns the offset parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent(element) {
        // NOTE: 1 DOM access here
        var offsetParent = element.offsetParent;
        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
    }

    /**
     * Returns the scrolling parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getScrollParent(element) {
        var parent = element.parentNode;

        if (!parent) {
            return element;
        }

        if (parent === root.document) {
            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
            // greater than 0 and return the proper element
            if (root.document.body.scrollTop || root.document.body.scrollLeft) {
                return root.document.body;
            } else {
                return root.document.documentElement;
            }
        }

        // Firefox want us to check `-x` and `-y` variations as well
        if (
            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 ||
            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 ||
            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1
        ) {
            // If the detected scrollParent is body, we perform an additional check on its parentNode
            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
            // fixes issue #65
            return parent;
        }
        return getScrollParent(element.parentNode);
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @function
     * @ignore
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed(element) {
        if (element === root.document.body) {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return element.parentNode ? isFixed(element.parentNode) : element;
    }

    /**
     * Set the style to the given popper
     * @function
     * @ignore
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
     */
    function setStyle(element, styles) {
        function is_numeric(n) {
            return (n !== '' && !isNaN(parseFloat(n)) && isFinite(n));
        }
        Object.keys(styles).forEach(function(prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
                unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
        });
    }

    /**
     * Check if the given variable is a function
     * @function
     * @ignore
     * @argument {*} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    /**
     * Get the position of the given element, relative to its offset parent
     * @function
     * @ignore
     * @param {Element} element
     * @return {Object} position - Coordinates of the element and its `scrollTop`
     */
    function getOffsetRect(element) {
        var elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop
        };

        elementRect.right = elementRect.left + elementRect.width;
        elementRect.bottom = elementRect.top + elementRect.height;

        // position
        return elementRect;
    }

    /**
     * Get bounding client rect of given element
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();

        // whether the IE version is lower than 11
        var isIE = navigator.userAgent.indexOf("MSIE") != -1;

        // fix ie document bounding top always 0 bug
        var rectTop = isIE && element.tagName === 'HTML'
            ? -element.scrollTop
            : rect.top;

        return {
            left: rect.left,
            top: rectTop,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.right - rect.left,
            height: rect.bottom - rectTop
        };
    }

    /**
     * Given an element and one of its parents, return the offset
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @param {HTMLElement} parent
     * @return {Object} rect
     */
    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
        var elementRect = getBoundingClientRect(element);
        var parentRect = getBoundingClientRect(parent);

        if (fixed) {
            var scrollParent = getScrollParent(parent);
            parentRect.top += scrollParent.scrollTop;
            parentRect.bottom += scrollParent.scrollTop;
            parentRect.left += scrollParent.scrollLeft;
            parentRect.right += scrollParent.scrollLeft;
        }

        var rect = {
            top: elementRect.top - parentRect.top ,
            left: elementRect.left - parentRect.left ,
            bottom: (elementRect.top - parentRect.top) + elementRect.height,
            right: (elementRect.left - parentRect.left) + elementRect.width,
            width: elementRect.width,
            height: elementRect.height
        };
        return rect;
    }

    /**
     * Get the prefixed supported property name
     * @function
     * @ignore
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase)
     */
    function getSupportedPropertyName(property) {
        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
            if (typeof root.document.body.style[toCheck] !== 'undefined') {
                return toCheck;
            }
        }
        return null;
    }

    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
     * objects to a target object. It will return the target object.
     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     * @function
     * @ignore
     */
    if (!Object.assign) {
        Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function(target) {
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert first argument to object');
                }

                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i];
                    if (nextSource === undefined || nextSource === null) {
                        continue;
                    }
                    nextSource = Object(nextSource);

                    var keysArray = Object.keys(nextSource);
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
                return to;
            }
        });
    }

    return Popper;
}));


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5924":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isInContainer = exports.getScrollContainer = exports.isScroll = exports.getStyle = exports.once = exports.off = exports.on = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* istanbul ignore next */

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = exports.on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = exports.off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = exports.once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

var isScroll = exports.isScroll = function isScroll(el, vertical) {
  if (isServer) return;

  var determinedDirection = vertical !== null || vertical !== undefined;
  var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

var getScrollContainer = exports.getScrollContainer = function getScrollContainer(el, vertical) {
  if (isServer) return;

  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};

var isInContainer = exports.isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;

  var elRect = el.getBoundingClientRect();
  var containerRect = void 0;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};

/***/ }),

/***/ "597f":
/***/ (function(module, exports) {

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
module.exports = function ( delay, noTrailing, callback, debounceMode ) {

	// After wrapper has stopped being called, this timeout ensures that
	// `callback` is executed at the proper times in `throttle` and `end`
	// debounce modes.
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	// The `wrapper` function encapsulates all of the throttling / debouncing
	// functionality and when executed will limit the rate at which `callback`
	// is executed.
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		// If `debounceMode` is true (at begin) this is used to clear the flag
		// to allow future `callback` executions.
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			// Since `wrapper` is being called for the first time and
			// `debounceMode` is true (at begin), execute `callback`.
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			// In throttle mode, if `delay` time has been exceeded, execute
			// `callback`.
			exec();

		} else if ( noTrailing !== true ) {
			// In trailing throttle mode, since `delay` time has not been
			// exceeded, schedule `callback` to execute `delay` ms after most
			// recent execution.
			//
			// If `debounceMode` is true (at begin), schedule `clear` to execute
			// after `delay` ms.
			//
			// If `debounceMode` is false (at end), schedule `callback` to
			// execute after `delay` ms.
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6dd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "75ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "8122":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isEmpty = exports.isEqual = exports.arrayEquals = exports.looseEqual = exports.capitalize = exports.kebabCase = exports.autoprefixer = exports.isFirefox = exports.isEdge = exports.isIE = exports.coerceTruthyValueToArray = exports.arrayFind = exports.arrayFindIndex = exports.escapeRegexpString = exports.valueEquals = exports.generateId = exports.getValueByPath = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.noop = noop;
exports.hasOwn = hasOwn;
exports.toObject = toObject;
exports.getPropByPath = getPropByPath;
exports.rafThrottle = rafThrottle;
exports.objToArray = objToArray;

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

var _types = __webpack_require__("a742");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {};

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
};

function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
};

var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;
  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  var keyArr = path.split('.');
  var i = 0;
  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
};

var generateId = exports.generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};

var valueEquals = exports.valueEquals = function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

var escapeRegexpString = exports.escapeRegexpString = function escapeRegexpString() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

// TODO: use native Array.find, Array.findIndex when IE support is dropped
var arrayFindIndex = exports.arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

var arrayFind = exports.arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
var coerceTruthyValueToArray = exports.coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

var isIE = exports.isIE = function isIE() {
  return !_vue2.default.prototype.$isServer && !isNaN(Number(document.documentMode));
};

var isEdge = exports.isEdge = function isEdge() {
  return !_vue2.default.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

var isFirefox = exports.isFirefox = function isFirefox() {
  return !_vue2.default.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

var autoprefixer = exports.autoprefixer = function autoprefixer(style) {
  if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') return style;
  var rules = ['transform', 'transition', 'animation'];
  var prefixes = ['ms-', 'webkit-'];
  rules.forEach(function (rule) {
    var value = style[rule];
    if (rule && value) {
      prefixes.forEach(function (prefix) {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

var kebabCase = exports.kebabCase = function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

var capitalize = exports.capitalize = function capitalize(str) {
  if (!(0, _types.isString)(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var looseEqual = exports.looseEqual = function looseEqual(a, b) {
  var isObjectA = (0, _types.isObject)(a);
  var isObjectB = (0, _types.isObject)(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

var arrayEquals = exports.arrayEquals = function arrayEquals(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

var isEqual = exports.isEqual = function isEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

var isEmpty = exports.isEmpty = function isEmpty(val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]':
      {
        return !val.size;
      }
    // Plain Object
    case '[object Object]':
      {
        return !Object.keys(val).length;
      }
  }

  return false;
};

function rafThrottle(fn) {
  var locked = false;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (locked) return;
    locked = true;
    window.requestAnimationFrame(function (_) {
      fn.apply(_this, args);
      locked = false;
    });
  };
}

function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}

/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "85fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserveVisibility; });
/* unused harmony export install */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function processOptions(value) {
  var options;

  if (typeof value === 'function') {
    // Simple options (callback-only)
    options = {
      callback: value
    };
  } else {
    // Options object
    options = value;
  }

  return options;
}
function throttle(callback, delay) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var lastState;
  var currentArgs;

  var throttled = function throttled(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    currentArgs = args;
    if (timeout && state === lastState) return;
    var leading = options.leading;

    if (typeof leading === 'function') {
      leading = leading(state, lastState);
    }

    if ((!timeout || state !== lastState) && leading) {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
    }

    lastState = state;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
      timeout = 0;
    }, delay);
  };

  throttled._clear = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return throttled;
}
function deepEqual(val1, val2) {
  if (val1 === val2) return true;

  if (_typeof(val1) === 'object') {
    for (var key in val1) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

var VisibilityState =
/*#__PURE__*/
function () {
  function VisibilityState(el, options, vnode) {
    _classCallCheck(this, VisibilityState);

    this.el = el;
    this.observer = null;
    this.frozen = false;
    this.createObserver(options, vnode);
  }

  _createClass(VisibilityState, [{
    key: "createObserver",
    value: function createObserver(options, vnode) {
      var _this = this;

      if (this.observer) {
        this.destroyObserver();
      }

      if (this.frozen) return;
      this.options = processOptions(options);

      this.callback = function (result, entry) {
        _this.options.callback(result, entry);

        if (result && _this.options.once) {
          _this.frozen = true;

          _this.destroyObserver();
        }
      }; // Throttle


      if (this.callback && this.options.throttle) {
        var _ref = this.options.throttleOptions || {},
            _leading = _ref.leading;

        this.callback = throttle(this.callback, this.options.throttle, {
          leading: function leading(state) {
            return _leading === 'both' || _leading === 'visible' && state || _leading === 'hidden' && !state;
          }
        });
      }

      this.oldResult = undefined;
      this.observer = new IntersectionObserver(function (entries) {
        var entry = entries[0];

        if (entries.length > 1) {
          var intersectingEntry = entries.find(function (e) {
            return e.isIntersecting;
          });

          if (intersectingEntry) {
            entry = intersectingEntry;
          }
        }

        if (_this.callback) {
          // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
          var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
          if (result === _this.oldResult) return;
          _this.oldResult = result;

          _this.callback(result, entry);
        }
      }, this.options.intersection); // Wait for the element to be in document

      vnode.context.$nextTick(function () {
        if (_this.observer) {
          _this.observer.observe(_this.el);
        }
      });
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      } // Cancel throttled call


      if (this.callback && this.callback._clear) {
        this.callback._clear();

        this.callback = null;
      }
    }
  }, {
    key: "threshold",
    get: function get() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]);

  return VisibilityState;
}();

function bind(el, _ref2, vnode) {
  var value = _ref2.value;
  if (!value) return;

  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
  } else {
    var state = new VisibilityState(el, value, vnode);
    el._vue_visibilityState = state;
  }
}

function update(el, _ref3, vnode) {
  var value = _ref3.value,
      oldValue = _ref3.oldValue;
  if (deepEqual(value, oldValue)) return;
  var state = el._vue_visibilityState;

  if (!value) {
    unbind(el);
    return;
  }

  if (state) {
    state.createObserver(value, vnode);
  } else {
    bind(el, {
      value: value
    }, vnode);
  }
}

function unbind(el) {
  var state = el._vue_visibilityState;

  if (state) {
    state.destroyObserver();
    delete el._vue_visibilityState;
  }
}

var ObserveVisibility = {
  bind: bind,
  update: update,
  unbind: unbind
};

function install(Vue) {
  Vue.directive('observe-visibility', ObserveVisibility);
  /* -- Add more components here -- */
}
/* -- Plugin definition & Auto-install -- */

/* You shouldn't have to modify the code below */
// Plugin

var plugin = {
  // eslint-disable-next-line no-undef
  version: "0.4.6",
  install: install
};

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* unused harmony default export */ var _unused_webpack_default_export = (plugin);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a623":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $every = __webpack_require__("b727").every;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a742":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isString = isString;
exports.isObject = isObject;
exports.isHtmlElement = isHtmlElement;
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

var isFunction = exports.isFunction = function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

var isUndefined = exports.isUndefined = function isUndefined(val) {
  return val === void 0;
};

var isDefined = exports.isDefined = function isDefined(val) {
  return val !== undefined && val !== null;
};

/***/ }),

/***/ "a899":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dca8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var FREEZING = __webpack_require__("bb2f");
var fails = __webpack_require__("d039");
var isObject = __webpack_require__("861d");
var onFreeze = __webpack_require__("f183").onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e508":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export DynamicScroller */
/* unused harmony export DynamicScrollerItem */
/* unused harmony export IdState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __vue_component__; });
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("252c");
/* harmony import */ var vue_observe_visibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("85fe");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ed83");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scrollparent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);





var config = {
  itemsLimit: 1000
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var props = {
  items: {
    type: Array,
    required: true
  },
  keyField: {
    type: String,
    default: 'id'
  },
  direction: {
    type: String,
    default: 'vertical',
    validator: function validator(value) {
      return ['vertical', 'horizontal'].includes(value);
    }
  }
};
function simpleArray() {
  return this.items.length && _typeof(this.items[0]) !== 'object';
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var uid = 0;
var script = {
  name: 'RecycleScroller',
  components: {
    ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_0__[/* ResizeObserver */ "a"]
  },
  directives: {
    ObserveVisibility: vue_observe_visibility__WEBPACK_IMPORTED_MODULE_1__[/* ObserveVisibility */ "a"]
  },
  props: _objectSpread2({}, props, {
    itemSize: {
      type: Number,
      default: null
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: 'size'
    },
    typeField: {
      type: String,
      default: 'type'
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: false
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: false
    }
  }),
  data: function data() {
    return {
      pool: [],
      totalSize: 0,
      ready: false,
      hoverKey: null
    };
  },
  computed: {
    sizes: function sizes() {
      if (this.itemSize === null) {
        var sizes = {
          '-1': {
            accumulator: 0
          }
        };
        var items = this.items;
        var field = this.sizeField;
        var minItemSize = this.minItemSize;
        var computedMinSize = 10000;
        var accumulator = 0;
        var current;

        for (var i = 0, l = items.length; i < l; i++) {
          current = items[i][field] || minItemSize;

          if (current < computedMinSize) {
            computedMinSize = current;
          }

          accumulator += current;
          sizes[i] = {
            accumulator: accumulator,
            size: current
          };
        } // eslint-disable-next-line


        this.$_computedMinItemSize = computedMinSize;
        return sizes;
      }

      return [];
    },
    simpleArray: simpleArray
  },
  watch: {
    items: function items() {
      this.updateVisibleItems(true);
    },
    pageMode: function pageMode() {
      this.applyPageMode();
      this.updateVisibleItems(false);
    },
    sizes: {
      handler: function handler() {
        this.updateVisibleItems(false);
      },
      deep: true
    }
  },
  created: function created() {
    this.$_startIndex = 0;
    this.$_endIndex = 0;
    this.$_views = new Map();
    this.$_unusedViews = new Map();
    this.$_scrollDirty = false;
    this.$_lastUpdateScrollPosition = 0; // In SSR mode, we also prerender the same number of item for the first render
    // to avoir mismatch between server and client templates

    if (this.prerender) {
      this.$_prerender = true;
      this.updateVisibleItems(false);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.applyPageMode();
    this.$nextTick(function () {
      // In SSR mode, render the real number of visible items
      _this.$_prerender = false;

      _this.updateVisibleItems(true);

      _this.ready = true;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.removeListeners();
  },
  methods: {
    addView: function addView(pool, index, item, key, type) {
      var view = {
        item: item,
        position: 0
      };
      var nonReactive = {
        id: uid++,
        index: index,
        used: true,
        key: key,
        type: type
      };
      Object.defineProperty(view, 'nr', {
        configurable: false,
        value: nonReactive
      });
      pool.push(view);
      return view;
    },
    unuseView: function unuseView(view) {
      var fake = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var unusedViews = this.$_unusedViews;
      var type = view.nr.type;
      var unusedPool = unusedViews.get(type);

      if (!unusedPool) {
        unusedPool = [];
        unusedViews.set(type, unusedPool);
      }

      unusedPool.push(view);

      if (!fake) {
        view.nr.used = false;
        view.position = -9999;
        this.$_views.delete(view.nr.key);
      }
    },
    handleResize: function handleResize() {
      this.$emit('resize');
      if (this.ready) this.updateVisibleItems(false);
    },
    handleScroll: function handleScroll(event) {
      var _this2 = this;

      if (!this.$_scrollDirty) {
        this.$_scrollDirty = true;
        requestAnimationFrame(function () {
          _this2.$_scrollDirty = false;

          var _this2$updateVisibleI = _this2.updateVisibleItems(false, true),
              continuous = _this2$updateVisibleI.continuous; // It seems sometimes chrome doesn't fire scroll event :/
          // When non continous scrolling is ending, we force a refresh


          if (!continuous) {
            clearTimeout(_this2.$_refreshTimout);
            _this2.$_refreshTimout = setTimeout(_this2.handleScroll, 100);
          }
        });
      }
    },
    handleVisibilityChange: function handleVisibilityChange(isVisible, entry) {
      var _this3 = this;

      if (this.ready) {
        if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
          this.$emit('visible');
          requestAnimationFrame(function () {
            _this3.updateVisibleItems(false);
          });
        } else {
          this.$emit('hidden');
        }
      }
    },
    updateVisibleItems: function updateVisibleItems(checkItem) {
      var checkPositionDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var itemSize = this.itemSize;
      var minItemSize = this.$_computedMinItemSize;
      var typeField = this.typeField;
      var keyField = this.simpleArray ? null : this.keyField;
      var items = this.items;
      var count = items.length;
      var sizes = this.sizes;
      var views = this.$_views;
      var unusedViews = this.$_unusedViews;
      var pool = this.pool;
      var startIndex, endIndex;
      var totalSize;

      if (!count) {
        startIndex = endIndex = totalSize = 0;
      } else if (this.$_prerender) {
        startIndex = 0;
        endIndex = this.prerender;
        totalSize = null;
      } else {
        var scroll = this.getScroll(); // Skip update if use hasn't scrolled enough

        if (checkPositionDiff) {
          var positionDiff = scroll.start - this.$_lastUpdateScrollPosition;
          if (positionDiff < 0) positionDiff = -positionDiff;

          if (itemSize === null && positionDiff < minItemSize || positionDiff < itemSize) {
            return {
              continuous: true
            };
          }
        }

        this.$_lastUpdateScrollPosition = scroll.start;
        var buffer = this.buffer;
        scroll.start -= buffer;
        scroll.end += buffer; // Variable size mode

        if (itemSize === null) {
          var h;
          var a = 0;
          var b = count - 1;
          var i = ~~(count / 2);
          var oldI; // Searching for startIndex

          do {
            oldI = i;
            h = sizes[i].accumulator;

            if (h < scroll.start) {
              a = i;
            } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
              b = i;
            }

            i = ~~((a + b) / 2);
          } while (i !== oldI);

          i < 0 && (i = 0);
          startIndex = i; // For container style

          totalSize = sizes[count - 1].accumulator; // Searching for endIndex

          for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++) {
          }

          if (endIndex === -1) {
            endIndex = items.length - 1;
          } else {
            endIndex++; // Bounds

            endIndex > count && (endIndex = count);
          }
        } else {
          // Fixed size mode
          startIndex = ~~(scroll.start / itemSize);
          endIndex = Math.ceil(scroll.end / itemSize); // Bounds

          startIndex < 0 && (startIndex = 0);
          endIndex > count && (endIndex = count);
          totalSize = count * itemSize;
        }
      }

      if (endIndex - startIndex > config.itemsLimit) {
        this.itemsLimitError();
      }

      this.totalSize = totalSize;
      var view;
      var continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;

      if (this.$_continuous !== continuous) {
        if (continuous) {
          views.clear();
          unusedViews.clear();

          for (var _i = 0, l = pool.length; _i < l; _i++) {
            view = pool[_i];
            this.unuseView(view);
          }
        }

        this.$_continuous = continuous;
      } else if (continuous) {
        for (var _i2 = 0, _l = pool.length; _i2 < _l; _i2++) {
          view = pool[_i2];

          if (view.nr.used) {
            // Update view item index
            if (checkItem) {
              view.nr.index = items.findIndex(function (item) {
                return keyField ? item[keyField] === view.item[keyField] : item === view.item;
              });
            } // Check if index is still in visible range


            if (view.nr.index === -1 || view.nr.index < startIndex || view.nr.index >= endIndex) {
              this.unuseView(view);
            }
          }
        }
      }

      var unusedIndex = continuous ? null : new Map();
      var item, type, unusedPool;
      var v;

      for (var _i3 = startIndex; _i3 < endIndex; _i3++) {
        item = items[_i3];
        var key = keyField ? item[keyField] : item;

        if (key == null) {
          throw new Error("Key is ".concat(key, " on item (keyField is '").concat(keyField, "')"));
        }

        view = views.get(key);

        if (!itemSize && !sizes[_i3].size) {
          if (view) this.unuseView(view);
          continue;
        } // No view assigned to item


        if (!view) {
          type = item[typeField];
          unusedPool = unusedViews.get(type);

          if (continuous) {
            // Reuse existing view
            if (unusedPool && unusedPool.length) {
              view = unusedPool.pop();
              view.item = item;
              view.nr.used = true;
              view.nr.index = _i3;
              view.nr.key = key;
              view.nr.type = type;
            } else {
              view = this.addView(pool, _i3, item, key, type);
            }
          } else {
            // Use existing view
            // We don't care if they are already used
            // because we are not in continous scrolling
            v = unusedIndex.get(type) || 0;

            if (!unusedPool || v >= unusedPool.length) {
              view = this.addView(pool, _i3, item, key, type);
              this.unuseView(view, true);
              unusedPool = unusedViews.get(type);
            }

            view = unusedPool[v];
            view.item = item;
            view.nr.used = true;
            view.nr.index = _i3;
            view.nr.key = key;
            view.nr.type = type;
            unusedIndex.set(type, v + 1);
            v++;
          }

          views.set(key, view);
        } else {
          view.nr.used = true;
          view.item = item;
        } // Update position


        if (itemSize === null) {
          view.position = sizes[_i3 - 1].accumulator;
        } else {
          view.position = _i3 * itemSize;
        }
      }

      this.$_startIndex = startIndex;
      this.$_endIndex = endIndex;
      if (this.emitUpdate) this.$emit('update', startIndex, endIndex); // After the user has finished scrolling
      // Sort views so text selection is correct

      clearTimeout(this.$_sortTimer);
      this.$_sortTimer = setTimeout(this.sortViews, 300);
      return {
        continuous: continuous
      };
    },
    getListenerTarget: function getListenerTarget() {
      var target = scrollparent__WEBPACK_IMPORTED_MODULE_2___default()(this.$el); // Fix global scroll target for Chrome and Safari

      if (window.document && (target === window.document.documentElement || target === window.document.body)) {
        target = window;
      }

      return target;
    },
    getScroll: function getScroll() {
      var el = this.$el,
          direction = this.direction;
      var isVertical = direction === 'vertical';
      var scrollState;

      if (this.pageMode) {
        var bounds = el.getBoundingClientRect();
        var boundsSize = isVertical ? bounds.height : bounds.width;
        var start = -(isVertical ? bounds.top : bounds.left);
        var size = isVertical ? window.innerHeight : window.innerWidth;

        if (start < 0) {
          size += start;
          start = 0;
        }

        if (start + size > boundsSize) {
          size = boundsSize - start;
        }

        scrollState = {
          start: start,
          end: start + size
        };
      } else if (isVertical) {
        scrollState = {
          start: el.scrollTop,
          end: el.scrollTop + el.clientHeight
        };
      } else {
        scrollState = {
          start: el.scrollLeft,
          end: el.scrollLeft + el.clientWidth
        };
      }

      return scrollState;
    },
    applyPageMode: function applyPageMode() {
      if (this.pageMode) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    },
    addListeners: function addListeners() {
      this.listenerTarget = this.getListenerTarget();
      this.listenerTarget.addEventListener('scroll', this.handleScroll, supportsPassive ? {
        passive: true
      } : false);
      this.listenerTarget.addEventListener('resize', this.handleResize);
    },
    removeListeners: function removeListeners() {
      if (!this.listenerTarget) {
        return;
      }

      this.listenerTarget.removeEventListener('scroll', this.handleScroll);
      this.listenerTarget.removeEventListener('resize', this.handleResize);
      this.listenerTarget = null;
    },
    scrollToItem: function scrollToItem(index) {
      var scroll;

      if (this.itemSize === null) {
        scroll = index > 0 ? this.sizes[index - 1].accumulator : 0;
      } else {
        scroll = index * this.itemSize;
      }

      this.scrollToPosition(scroll);
    },
    scrollToPosition: function scrollToPosition(position) {
      if (this.direction === 'vertical') {
        this.$el.scrollTop = position;
      } else {
        this.$el.scrollLeft = position;
      }
    },
    itemsLimitError: function itemsLimitError() {
      var _this4 = this;

      setTimeout(function () {
        console.log('It seems the scroller element isn\'t scrolling, so it tries to render all the items at once.', 'Scroller:', _this4.$el);
        console.log('Make sure the scroller has a fixed height (or width) and \'overflow-y\' (or \'overflow-x\') set to \'auto\' so it can scroll correctly and only render the items visible in the scroll viewport.');
      });
      throw new Error('Rendered items limit reached');
    },
    sortViews: function sortViews() {
      this.pool.sort(function (viewA, viewB) {
        return viewA.nr.index - viewB.nr.index;
      });
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _obj, _obj$1;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "observe-visibility",
          rawName: "v-observe-visibility",
          value: _vm.handleVisibilityChange,
          expression: "handleVisibilityChange"
        }
      ],
      staticClass: "vue-recycle-scroller",
      class:
        ((_obj = {
          ready: _vm.ready,
          "page-mode": _vm.pageMode
        }),
        (_obj["direction-" + _vm.direction] = true),
        _obj),
      on: {
        "&scroll": function($event) {
          return _vm.handleScroll($event)
        }
      }
    },
    [
      _vm.$slots.before
        ? _c(
            "div",
            { staticClass: "vue-recycle-scroller__slot" },
            [_vm._t("before")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "wrapper",
          staticClass: "vue-recycle-scroller__item-wrapper",
          style:
            ((_obj$1 = {}),
            (_obj$1[_vm.direction === "vertical" ? "minHeight" : "minWidth"] =
              _vm.totalSize + "px"),
            _obj$1)
        },
        _vm._l(_vm.pool, function(view) {
          return _c(
            "div",
            {
              key: view.nr.id,
              staticClass: "vue-recycle-scroller__item-view",
              class: { hover: _vm.hoverKey === view.nr.key },
              style: _vm.ready
                ? {
                    transform:
                      "translate" +
                      (_vm.direction === "vertical" ? "Y" : "X") +
                      "(" +
                      view.position +
                      "px)"
                  }
                : null,
              on: {
                mouseenter: function($event) {
                  _vm.hoverKey = view.nr.key;
                },
                mouseleave: function($event) {
                  _vm.hoverKey = null;
                }
              }
            },
            [
              _vm._t("default", null, {
                item: view.item,
                index: view.nr.index,
                active: view.nr.used
              })
            ],
            2
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.$slots.after
        ? _c(
            "div",
            { staticClass: "vue-recycle-scroller__slot" },
            [_vm._t("after")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("ResizeObserver", { on: { notify: _vm.handleResize } })
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var script$1 = {
  name: 'DynamicScroller',
  components: {
    RecycleScroller: __vue_component__
  },
  inheritAttrs: false,
  provide: function provide() {
    if (typeof ResizeObserver !== 'undefined') {
      this.$_resizeObserver = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            if (entry.target) {
              var event = new CustomEvent('resize', {
                detail: {
                  contentRect: entry.contentRect
                }
              });
              entry.target.dispatchEvent(event);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }

    return {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  props: _objectSpread2({}, props, {
    minItemSize: {
      type: [Number, String],
      required: true
    }
  }),
  data: function data() {
    return {
      vscrollData: {
        active: true,
        sizes: {},
        validSizes: {},
        keyField: this.keyField,
        simpleArray: false
      }
    };
  },
  computed: {
    simpleArray: simpleArray,
    itemsWithSize: function itemsWithSize() {
      var result = [];
      var items = this.items,
          keyField = this.keyField,
          simpleArray = this.simpleArray;
      var sizes = this.vscrollData.sizes;

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var id = simpleArray ? i : item[keyField];
        var size = sizes[id];

        if (typeof size === 'undefined' && !this.$_undefinedMap[id]) {
          size = 0;
        }

        result.push({
          item: item,
          id: id,
          size: size
        });
      }

      return result;
    },
    listeners: function listeners() {
      var listeners = {};

      for (var key in this.$listeners) {
        if (key !== 'resize' && key !== 'visible') {
          listeners[key] = this.$listeners[key];
        }
      }

      return listeners;
    }
  },
  watch: {
    items: function items() {
      this.forceUpdate(false);
    },
    simpleArray: {
      handler: function handler(value) {
        this.vscrollData.simpleArray = value;
      },
      immediate: true
    },
    direction: function direction(value) {
      this.forceUpdate(true);
    }
  },
  created: function created() {
    this.$_updates = [];
    this.$_undefinedSizes = 0;
    this.$_undefinedMap = {};
  },
  activated: function activated() {
    this.vscrollData.active = true;
  },
  deactivated: function deactivated() {
    this.vscrollData.active = false;
  },
  methods: {
    onScrollerResize: function onScrollerResize() {
      var scroller = this.$refs.scroller;

      if (scroller) {
        this.forceUpdate();
      }

      this.$emit('resize');
    },
    onScrollerVisible: function onScrollerVisible() {
      this.$emit('vscroll:update', {
        force: false
      });
      this.$emit('visible');
    },
    forceUpdate: function forceUpdate() {
      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (clear || this.simpleArray) {
        this.vscrollData.validSizes = {};
      }

      this.$emit('vscroll:update', {
        force: true
      });
    },
    scrollToItem: function scrollToItem(index) {
      var scroller = this.$refs.scroller;
      if (scroller) scroller.scrollToItem(index);
    },
    getItemSize: function getItemSize(item) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var id = this.simpleArray ? index != null ? index : this.items.indexOf(item) : item[this.keyField];
      return this.vscrollData.sizes[id] || 0;
    },
    scrollToBottom: function scrollToBottom() {
      var _this = this;

      if (this.$_scrollingToBottom) return;
      this.$_scrollingToBottom = true;
      var el = this.$el; // Item is inserted to the DOM

      this.$nextTick(function () {
        el.scrollTop = el.scrollHeight + 5000; // Item sizes are computed

        var cb = function cb() {
          el.scrollTop = el.scrollHeight + 5000;
          requestAnimationFrame(function () {
            el.scrollTop = el.scrollHeight + 5000;

            if (_this.$_undefinedSizes === 0) {
              _this.$_scrollingToBottom = false;
            } else {
              requestAnimationFrame(cb);
            }
          });
        };

        requestAnimationFrame(cb);
      });
    }
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "RecycleScroller",
    _vm._g(
      _vm._b(
        {
          ref: "scroller",
          attrs: {
            items: _vm.itemsWithSize,
            "min-item-size": _vm.minItemSize,
            direction: _vm.direction,
            "key-field": "id"
          },
          on: { resize: _vm.onScrollerResize, visible: _vm.onScrollerVisible },
          scopedSlots: _vm._u(
            [
              {
                key: "default",
                fn: function(ref) {
                  var itemWithSize = ref.item;
                  var index = ref.index;
                  var active = ref.active;
                  return [
                    _vm._t("default", null, null, {
                      item: itemWithSize.item,
                      index: index,
                      active: active,
                      itemWithSize: itemWithSize
                    })
                  ]
                }
              }
            ],
            null,
            true
          )
        },
        "RecycleScroller",
        _vm.$attrs,
        false
      ),
      _vm.listeners
    ),
    [
      _vm._v(" "),
      _c("template", { slot: "before" }, [_vm._t("before")], 2),
      _vm._v(" "),
      _c("template", { slot: "after" }, [_vm._t("after")], 2)
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var script$2 = {
  name: 'DynamicScrollerItem',
  inject: ['vscrollData', 'vscrollParent', 'vscrollResizeObserver'],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: true
    },
    watchData: {
      type: Boolean,
      default: false
    },

    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      default: undefined
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    id: function id() {
      return this.vscrollData.simpleArray ? this.index : this.item[this.vscrollData.keyField];
    },
    size: function size() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    },
    finalActive: function finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: 'updateWatchData',
    id: function id() {
      if (!this.size) {
        this.onDataUpdate();
      }
    },
    finalActive: function finalActive(value) {
      if (!this.size) {
        if (value) {
          if (!this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes++;
            this.vscrollParent.$_undefinedMap[this.id] = true;
          }
        } else {
          if (this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes--;
            this.vscrollParent.$_undefinedMap[this.id] = false;
          }
        }
      }

      if (this.vscrollResizeObserver) {
        if (value) {
          this.observeSize();
        } else {
          this.unobserveSize();
        }
      } else if (value && this.$_pendingVScrollUpdate === this.id) {
        this.updateSize();
      }
    }
  },
  created: function created() {
    var _this = this;

    if (this.$isServer) return;
    this.$_forceNextVScrollUpdate = null;
    this.updateWatchData();

    if (!this.vscrollResizeObserver) {
      var _loop = function _loop(k) {
        _this.$watch(function () {
          return _this.sizeDependencies[k];
        }, _this.onDataUpdate);
      };

      for (var k in this.sizeDependencies) {
        _loop(k);
      }

      this.vscrollParent.$on('vscroll:update', this.onVscrollUpdate);
      this.vscrollParent.$on('vscroll:update-size', this.onVscrollUpdateSize);
    }
  },
  mounted: function mounted() {
    if (this.vscrollData.active) {
      this.updateSize();
      this.observeSize();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.vscrollParent.$off('vscroll:update', this.onVscrollUpdate);
    this.vscrollParent.$off('vscroll:update-size', this.onVscrollUpdateSize);
    this.unobserveSize();
  },
  methods: {
    updateSize: function updateSize() {
      if (this.finalActive) {
        if (this.$_pendingSizeUpdate !== this.id) {
          this.$_pendingSizeUpdate = this.id;
          this.$_forceNextVScrollUpdate = null;
          this.$_pendingVScrollUpdate = null;
          this.computeSize(this.id);
        }
      } else {
        this.$_forceNextVScrollUpdate = this.id;
      }
    },
    updateWatchData: function updateWatchData() {
      var _this2 = this;

      if (this.watchData) {
        this.$_watchData = this.$watch('data', function () {
          _this2.onDataUpdate();
        }, {
          deep: true
        });
      } else if (this.$_watchData) {
        this.$_watchData();
        this.$_watchData = null;
      }
    },
    onVscrollUpdate: function onVscrollUpdate(_ref) {
      var force = _ref.force;

      // If not active, sechedule a size update when it becomes active
      if (!this.finalActive && force) {
        this.$_pendingVScrollUpdate = this.id;
      }

      if (this.$_forceNextVScrollUpdate === this.id || force || !this.size) {
        this.updateSize();
      }
    },
    onDataUpdate: function onDataUpdate() {
      this.updateSize();
    },
    computeSize: function computeSize(id) {
      var _this3 = this;

      this.$nextTick(function () {
        if (_this3.id === id) {
          var width = _this3.$el.offsetWidth;
          var height = _this3.$el.offsetHeight;

          _this3.applySize(width, height);
        }

        _this3.$_pendingSizeUpdate = null;
      });
    },
    applySize: function applySize(width, height) {
      var size = Math.round(this.vscrollParent.direction === 'vertical' ? height : width);

      if (size && this.size !== size) {
        if (this.vscrollParent.$_undefinedMap[this.id]) {
          this.vscrollParent.$_undefinedSizes--;
          this.vscrollParent.$_undefinedMap[this.id] = undefined;
        }

        this.$set(this.vscrollData.sizes, this.id, size);
        this.$set(this.vscrollData.validSizes, this.id, true);
        if (this.emitResize) this.$emit('resize', this.id);
      }
    },
    observeSize: function observeSize() {
      if (!this.vscrollResizeObserver) return;
      this.vscrollResizeObserver.observe(this.$el.parentNode);
      this.$el.parentNode.addEventListener('resize', this.onResize);
    },
    unobserveSize: function unobserveSize() {
      if (!this.vscrollResizeObserver) return;
      this.vscrollResizeObserver.unobserve(this.$el.parentNode);
      this.$el.parentNode.removeEventListener('resize', this.onResize);
    },
    onResize: function onResize(event) {
      var _event$detail$content = event.detail.contentRect,
          width = _event$detail$content.width,
          height = _event$detail$content.height;
      this.applySize(width, height);
    }
  },
  render: function render(h) {
    return h(this.tag, this.$slots.default);
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = normalizeComponent(
    {},
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

function IdState () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$idProp = _ref.idProp,
      idProp = _ref$idProp === void 0 ? function (vm) {
    return vm.item.id;
  } : _ref$idProp;

  var store = {};
  var vm = new vue__WEBPACK_IMPORTED_MODULE_3___default.a({
    data: function data() {
      return {
        store: store
      };
    }
  }); // @vue/component

  return {
    data: function data() {
      return {
        idState: null
      };
    },
    created: function created() {
      var _this = this;

      this.$_id = null;

      if (typeof idProp === 'function') {
        this.$_getId = function () {
          return idProp.call(_this, _this);
        };
      } else {
        this.$_getId = function () {
          return _this[idProp];
        };
      }

      this.$watch(this.$_getId, {
        handler: function handler(value) {
          var _this2 = this;

          this.$nextTick(function () {
            _this2.$_id = value;
          });
        },
        immediate: true
      });
      this.$_updateIdState();
    },
    beforeUpdate: function beforeUpdate() {
      this.$_updateIdState();
    },
    methods: {
      /**
       * Initialize an idState
       * @param {number|string} id Unique id for the data
       */
      $_idStateInit: function $_idStateInit(id) {
        var factory = this.$options.idState;

        if (typeof factory === 'function') {
          var data = factory.call(this, this);
          vm.$set(store, id, data);
          this.$_id = id;
          return data;
        } else {
          throw new Error('[mixin IdState] Missing `idState` function on component definition.');
        }
      },

      /**
       * Ensure idState is created and up-to-date
       */
      $_updateIdState: function $_updateIdState() {
        var id = this.$_getId();

        if (id == null) {
          console.warn("No id found for IdState with idProp: '".concat(idProp, "'."));
        }

        if (id !== this.$_id) {
          if (!store[id]) {
            this.$_idStateInit(id);
          }

          this.idState = store[id];
        }
      }
    }
  };
}

function registerComponents(Vue, prefix) {
  Vue.component("".concat(prefix, "recycle-scroller"), __vue_component__);
  Vue.component("".concat(prefix, "RecycleScroller"), __vue_component__);
  Vue.component("".concat(prefix, "dynamic-scroller"), __vue_component__$1);
  Vue.component("".concat(prefix, "DynamicScroller"), __vue_component__$1);
  Vue.component("".concat(prefix, "dynamic-scroller-item"), __vue_component__$2);
  Vue.component("".concat(prefix, "DynamicScrollerItem"), __vue_component__$2);
}

var plugin = {
  // eslint-disable-next-line no-undef
  version: "1.0.10",
  install: function install(Vue, options) {
    var finalOptions = Object.assign({}, {
      installComponents: true,
      componentsPrefix: ''
    }, options);

    for (var key in finalOptions) {
      if (typeof finalOptions[key] !== 'undefined') {
        config[key] = finalOptions[key];
      }
    }

    if (finalOptions.installComponents) {
      registerComponents(Vue, finalOptions.componentsPrefix);
    }
  }
};

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* unused harmony default export */ var _unused_webpack_default_export = (plugin);

//# sourceMappingURL=vue-virtual-scroller.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e62d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function () {
  if (_vue2.default.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  var outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
};

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollBarWidth = void 0;

;

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "ed83":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660e9bf0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=template&id=4d7f0252&
var cascadervue_type_template_id_4d7f0252_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(function () { return _vm.toggleDropDownVisible(false); }),expression:"() => toggleDropDownVisible(false)"}],ref:"reference",class:[
        'elp-cascader',
        { 'is-disabled': _vm.isDisabled },
        _vm.realSize && ("elp-cascader--" + _vm.realSize)
    ],on:{"keydown":_vm.handleKeyDown,"mouseenter":function($event){_vm.inputHover = true},"mouseleave":function($event){_vm.inputHover = false},"click":function () { return _vm.toggleDropDownVisible(_vm.readonly ? undefined : true); }}},[_c('el-input',{ref:"input",class:{ 'is-focus': _vm.dropDownVisible },attrs:{"size":_vm.realSize,"readonly":_vm.readonly,"disabled":_vm.isDisabled,"validate-event":false,"placeholder":_vm.placeholder},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"input":_vm.handleInput},model:{value:(_vm.multiple ? _vm.presentText : _vm.inputValue),callback:function ($$v) {_vm.multiple ? _vm.presentText : _vm.inputValue=$$v},expression:"multiple ? presentText : inputValue"}},[_c('template',{slot:"suffix"},[(_vm.clearBtnVisible)?_c('i',{key:"clear",staticClass:"el-input__icon el-icon-circle-close",on:{"click":function($event){$event.stopPropagation();return _vm.handleClear($event)}}}):_c('i',{key:"arrow-down",class:[
              'el-input__icon',
              'el-icon-arrow-down',
              _vm.dropDownVisible && 'is-reverse'
          ],on:{"click":function($event){$event.stopPropagation();return _vm.toggleDropDownVisible()}}})])],2),(_vm.multiple)?_c('div',{staticClass:"elp-cascader__tags"},[_vm._l((_vm.presentTags),function(tag,index){return _c('el-tag',{key:tag.key,attrs:{"type":"info","size":_vm.tagSize,"hit":tag.hitState,"closable":tag.closable,"disable-transitions":""},on:{"close":function($event){return _vm.deleteTag(index)}}},[_c('span',[_vm._v(_vm._s(tag.text))])])}),(_vm.filterable && !_vm.isDisabled)?_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.inputValue),expression:"inputValue",modifiers:{"trim":true}}],staticClass:"elp-cascader__search-input",attrs:{"type":"text","placeholder":_vm.presentTags.length ? '' : _vm.placeholder},domProps:{"value":(_vm.inputValue)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.inputValue=$event.target.value.trim()},function (e) { return _vm.handleInput(_vm.inputValue, e); }],"click":function($event){$event.stopPropagation();return _vm.toggleDropDownVisible(true)},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }return _vm.handleDelete($event)},"blur":function($event){return _vm.$forceUpdate()}}}):_vm._e()],2):_vm._e(),_c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":_vm.handleDropdownLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropDownVisible),expression:"dropDownVisible"}],ref:"popper",class:[
          'elp-cascader__dropdown',
          'el-popper',
          _vm.popperClass
        ]},[_c('elp-cascader-panel',{directives:[{name:"show",rawName:"v-show",value:(!_vm.filtering),expression:"!filtering"}],ref:"panel",attrs:{"visible":_vm.dropDownVisible,"options":_vm.options,"props":_vm.config,"border":false,"empty-text":_vm.emptyText,"render-label":_vm.$scopedSlots.default,"remoteInitMethods":_vm.remoteInitMethods},on:{"expand-change":_vm.handleExpandChange,"lazy-loaded":_vm.handleLazyLoaded,"close":function($event){return _vm.toggleDropDownVisible(false)}},model:{value:(_vm.checkedValue),callback:function ($$v) {_vm.checkedValue=$$v},expression:"checkedValue"}}),(_vm.filterable)?_c('scrollbar',{directives:[{name:"show",rawName:"v-show",value:(_vm.filtering),expression:"filtering"}],ref:"suggestionPanel",staticClass:"elp-cascader__suggestion-panel",attrs:{"tag":"ul","view-class":"elp-cascader__suggestion-list"},nativeOn:{"keydown":function($event){return _vm.handleSuggestionKeyDown($event)}}},[(_vm.suggestions.length)?_vm._l((_vm.suggestions),function(item,index){return _c('li',{key:item.uid,class:[
                  'elp-cascader__suggestion-item',
                  item.checked && 'is-checked'
              ],attrs:{"tabindex":-1},on:{"click":function($event){return _vm.handleSuggestionClick(index)}}},[_c('span',[_vm._v(_vm._s(item.text))]),(item.checked)?_c('i',{staticClass:"el-icon-check"}):_vm._e()])}):_vm._t("empty",[_c('li',{staticClass:"elp-cascader__empty-text"},[_vm._v(_vm._s(_vm.emptyText))])])],2):_vm._e()],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=template&id=4d7f0252&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/scrollbar.css
var scrollbar = __webpack_require__("2986");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__("450d");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/scrollbar.js
var lib_scrollbar = __webpack_require__("14e9");
var lib_scrollbar_default = /*#__PURE__*/__webpack_require__.n(lib_scrollbar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/tag/src/tag.vue?vue&type=script&lang=js&

/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  name: 'ElTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator: function validator(val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    handleClose: function handleClose(event) {
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick: function handleClick(event) {
      this.$emit('click', event);
    }
  },
  computed: {
    tagSize: function tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  render: function render(h) {
    var type = this.type,
        tagSize = this.tagSize,
        hit = this.hit,
        effect = this.effect;
    var classes = ['el-tag', type ? "el-tag--".concat(type) : '', tagSize ? "el-tag--".concat(tagSize) : '', effect ? "el-tag--".concat(effect) : '', hit && 'is-hit'];
    var tagEl = h("span", {
      "class": classes,
      "style": {
        backgroundColor: this.color
      },
      "on": {
        "click": this.handleClick
      }
    }, [this.$slots.default, this.closable && h("i", {
      "class": "el-tag__close el-icon-close",
      "on": {
        "click": this.handleClose
      }
    })]);
    return this.disableTransitions ? tagEl : h("transition", {
      "attrs": {
        "name": "el-zoom-in-center"
      }
    }, [tagEl]);
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tag/src/tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/element-ui/packages/tag/src/tag.vue
var tag_render, tag_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  src_tagvue_type_script_lang_js_,
  tag_render,
  tag_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tag = (component.exports);
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tag/index.js


/* istanbul ignore next */
tag.install = function(Vue) {
  Vue.component(tag.name, tag);
};

/* harmony default export */ var packages_tag = (tag);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660e9bf0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/input/src/input.vue?vue&type=template&id=3747570d&
var inputvue_type_template_id_3747570d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
  _vm.type === 'textarea' ? 'el-textarea' : 'el-input',
  _vm.inputSize ? 'el-input--' + _vm.inputSize : '',
  {
    'is-disabled': _vm.inputDisabled,
    'is-exceed': _vm.inputExceed,
    'el-input-group': _vm.$slots.prepend || _vm.$slots.append,
    'el-input-group--append': _vm.$slots.append,
    'el-input-group--prepend': _vm.$slots.prepend,
    'el-input--prefix': _vm.$slots.prefix || _vm.prefixIcon,
    'el-input--suffix': _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable || _vm.showPassword
  }
  ],on:{"mouseenter":function($event){_vm.hovering = true},"mouseleave":function($event){_vm.hovering = false}}},[(_vm.type !== 'textarea')?[(_vm.$slots.prepend)?_c('div',{staticClass:"el-input-group__prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.type !== 'textarea')?_c('input',_vm._b({ref:"input",staticClass:"el-input__inner",attrs:{"tabindex":_vm.tabindex,"type":_vm.showPassword ? (_vm.passwordVisible ? 'text': 'password') : _vm.type,"disabled":_vm.inputDisabled,"readonly":_vm.readonly,"autocomplete":_vm.autoComplete || _vm.autocomplete,"aria-label":_vm.label},on:{"compositionstart":_vm.handleCompositionStart,"compositionupdate":_vm.handleCompositionUpdate,"compositionend":_vm.handleCompositionEnd,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'input',_vm.$attrs,false)):_vm._e(),(_vm.$slots.prefix || _vm.prefixIcon)?_c('span',{staticClass:"el-input__prefix"},[_vm._t("prefix"),(_vm.prefixIcon)?_c('i',{staticClass:"el-input__icon",class:_vm.prefixIcon}):_vm._e()],2):_vm._e(),(_vm.getSuffixVisible())?_c('span',{staticClass:"el-input__suffix"},[_c('span',{staticClass:"el-input__suffix-inner"},[(!_vm.showClear || !_vm.showPwdVisible || !_vm.isWordLimitVisible)?[_vm._t("suffix"),(_vm.suffixIcon)?_c('i',{staticClass:"el-input__icon",class:_vm.suffixIcon}):_vm._e()]:_vm._e(),(_vm.showClear)?_c('i',{staticClass:"el-input__icon el-icon-circle-close el-input__clear",on:{"mousedown":function($event){$event.preventDefault();},"click":_vm.clear}}):_vm._e(),(_vm.showPwdVisible)?_c('i',{staticClass:"el-input__icon el-icon-view el-input__clear",on:{"click":_vm.handlePasswordVisible}}):_vm._e(),(_vm.isWordLimitVisible)?_c('span',{staticClass:"el-input__count"},[_c('span',{staticClass:"el-input__count-inner"},[_vm._v(" "+_vm._s(_vm.textLength)+"/"+_vm._s(_vm.upperLimit)+" ")])]):_vm._e()],2),(_vm.validateState)?_c('i',{staticClass:"el-input__icon",class:['el-input__validateIcon', _vm.validateIcon]}):_vm._e()]):_vm._e(),(_vm.$slots.append)?_c('div',{staticClass:"el-input-group__append"},[_vm._t("append")],2):_vm._e()]:_c('textarea',_vm._b({ref:"textarea",staticClass:"el-textarea__inner",style:(_vm.textareaStyle),attrs:{"tabindex":_vm.tabindex,"disabled":_vm.inputDisabled,"readonly":_vm.readonly,"autocomplete":_vm.autoComplete || _vm.autocomplete,"aria-label":_vm.label},on:{"compositionstart":_vm.handleCompositionStart,"compositionupdate":_vm.handleCompositionUpdate,"compositionend":_vm.handleCompositionEnd,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'textarea',_vm.$attrs,false)),(_vm.isWordLimitVisible && _vm.type === 'textarea')?_c('span',{staticClass:"el-input__count"},[_vm._v(_vm._s(_vm.textLength)+"/"+_vm._s(_vm.upperLimit))]):_vm._e()],2)}
var inputvue_type_template_id_3747570d_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/element-ui/packages/input/src/input.vue?vue&type=template&id=3747570d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./node_modules/element-ui/src/mixins/emitter.js
function emitter_broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      emitter_broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
/* harmony default export */ var emitter = ({
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      emitter_broadcast.call(this, componentName, eventName, params);
    }
  }
});

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/types.js
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

const isFunction = (functionToCheck) => {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

const isUndefined = (val)=> {
  return val === void 0;
};

const isDefined = (val) => {
  return val !== undefined && val !== null;
};

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/util.js



const util_hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {};

function hasOwn(obj, key) {
  return util_hasOwnProperty.call(obj, key);
};

function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
};

function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
};

const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
};

const generateId = function() {
  return Math.floor(Math.random() * 10000);
};

const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// TODO: use native Array.find, Array.findIndex when IE support is dropped
const arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

const arrayFind = function(arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
const coerceTruthyValueToArray = function(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

const isIE = function() {
  return !external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && !isNaN(Number(document.documentMode));
};

const isEdge = function() {
  return !external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

const isFirefox = function() {
  return !external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

const autoprefixer = function(style) {
  if (typeof style !== 'object') return style;
  const rules = ['transform', 'transition', 'animation'];
  const prefixes = ['ms-', 'webkit-'];
  rules.forEach(rule => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

const kebabCase = function(str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
};

const capitalize = function(str) {
  if (!isString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const looseEqual = function(a, b) {
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

const arrayEquals = function(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

const isEqual = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

const isEmpty = function(val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
};

function rafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(_ => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}

// CONCATENATED MODULE: ./node_modules/element-ui/src/mixins/migrating.js

/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
/* harmony default export */ var migrating = ({
  mounted() {
    if (true) return;
    if (!this.$vnode) return;
    const { props = {}, events = {} } = this.getMigratingConfig();
    const { data, componentOptions } = this.$vnode;
    const definedProps = data.attrs || {};
    const definedEvents = componentOptions.listeners || {};

    for (let propName in definedProps) {
      propName = kebabCase(propName); // compatible with camel case
      if (props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`);
      }
    }

    for (let eventName in definedEvents) {
      eventName = kebabCase(eventName); // compatible with camel case
      if (events[eventName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`);
      }
    }
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
});

// CONCATENATED MODULE: ./node_modules/element-ui/packages/input/src/calcTextareaHeight.js
let hiddenTextarea;

const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);

  const boxSizing = style.getPropertyValue('box-sizing');

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  );

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  );

  const contextStyle = CONTEXT_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';');

  return { contextStyle, paddingSize, borderSize, boxSizing };
}

function calcTextareaHeight(
  targetElement,
  minRows = 1,
  maxRows = null
) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  let {
    paddingSize,
    borderSize,
    boxSizing,
    contextStyle
  } = calculateNodeStyling(targetElement);

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  let height = hiddenTextarea.scrollHeight;
  const result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${ minHeight }px`;
  }
  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${ height }px`;
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
};

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/merge.js
/* harmony default export */ var merge = (function(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
});;

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/shared.js
function isDef(val) {
  return val !== undefined && val !== null;
}
function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/input/src/input.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'ElInput',
  componentName: 'ElInput',
  mixins: [emitter, migrating],
  inheritAttrs: false,
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data: function data() {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    };
  },
  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },

    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator: function validator(val) {
         false && false;
        return true;
      }
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },
  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    validateState: function validateState() {
      return this.elFormItem ? this.elFormItem.validateState : '';
    },
    needStatusIcon: function needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon: function validateIcon() {
      return {
        validating: 'el-icon-loading',
        success: 'el-icon-circle-check',
        error: 'el-icon-circle-close'
      }[this.validateState];
    },
    textareaStyle: function textareaStyle() {
      return merge({}, this.textareaCalcStyle, {
        resize: this.resize
      });
    },
    inputSize: function inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputDisabled: function inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    nativeInputValue: function nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    showClear: function showClear() {
      return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
    },
    showPwdVisible: function showPwdVisible() {
      return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
    },
    isWordLimitVisible: function isWordLimitVisible() {
      return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
    },
    upperLimit: function upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength: function textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length;
      }

      return (this.value || '').length;
    },
    inputExceed: function inputExceed() {
      // show exceed style if length of initial value greater then maxlength
      return this.isWordLimitVisible && this.textLength > this.upperLimit;
    }
  },
  watch: {
    value: function value(val) {
      this.$nextTick(this.resizeTextarea);

      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      }
    },
    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue: function nativeInputValue() {
      this.setNativeInputValue();
    },
    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type: function type() {
      var _this = this;

      this.$nextTick(function () {
        _this.setNativeInputValue();

        _this.resizeTextarea();

        _this.updateIconOffset();
      });
    }
  },
  methods: {
    focus: function focus() {
      this.getInput().focus();
    },
    blur: function blur() {
      this.getInput().blur();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      };
    },
    handleBlur: function handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);

      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
      }
    },
    select: function select() {
      this.getInput().select();
    },
    resizeTextarea: function resizeTextarea() {
      if (this.$isServer) return;
      var autosize = this.autosize,
          type = this.type;
      if (type !== 'textarea') return;

      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }

      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;
      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    setNativeInputValue: function setNativeInputValue() {
      var input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleFocus: function handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleCompositionStart: function handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionUpdate: function handleCompositionUpdate(event) {
      var text = event.target.value;
      var lastCharacter = text[text.length - 1] || '';
      this.isComposing = !isKorean(lastCharacter);
    },
    handleCompositionEnd: function handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    },
    handleInput: function handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return; // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE

      if (event.target.value === this.nativeInputValue) return;
      this.$emit('input', event.target.value); // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850

      this.$nextTick(this.setNativeInputValue);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    calcIconOffset: function calcIconOffset(place) {
      var elList = [].slice.call(this.$el.querySelectorAll(".el-input__".concat(place)) || []);
      if (!elList.length) return;
      var el = null;

      for (var i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i];
          break;
        }
      }

      if (!el) return;
      var pendantMap = {
        suffix: 'append',
        prefix: 'prepend'
      };
      var pendant = pendantMap[place];

      if (this.$slots[pendant]) {
        el.style.transform = "translateX(".concat(place === 'suffix' ? '-' : '').concat(this.$el.querySelector(".el-input-group__".concat(pendant)).offsetWidth, "px)");
      } else {
        el.removeAttribute('style');
      }
    },
    updateIconOffset: function updateIconOffset() {
      this.calcIconOffset('prefix');
      this.calcIconOffset('suffix');
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible: function handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    getInput: function getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    getSuffixVisible: function getSuffixVisible() {
      return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
    }
  },
  created: function created() {
    this.$on('inputSelect', this.select);
  },
  mounted: function mounted() {
    this.setNativeInputValue();
    this.resizeTextarea();
    this.updateIconOffset();
  },
  updated: function updated() {
    this.$nextTick(this.updateIconOffset);
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/input/src/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/element-ui/packages/input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_js_,
  inputvue_type_template_id_3747570d_render,
  inputvue_type_template_id_3747570d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_input = (input_component.exports);
// CONCATENATED MODULE: ./node_modules/element-ui/packages/input/index.js


/* istanbul ignore next */
src_input.install = function(Vue) {
  Vue.component(src_input.name, src_input);
};

/* harmony default export */ var packages_input = (src_input);

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/aria-utils.js
var aria = aria || {};

aria.Utils = aria.Utils || {};

/**
 * @desc Set focus on descendant nodes until the first focusable element is
 *       found.
 * @param element
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */
aria.Utils.focusFirstDescendant = function(element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Find the last descendant node that is focusable.
 * @param element
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */

aria.Utils.focusLastDescendant = function(element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */
aria.Utils.attemptFocus = function(element) {
  if (!aria.Utils.isFocusable(element)) {
    return false;
  }
  aria.Utils.IgnoreUtilFocusChanges = true;
  try {
    element.focus();
  } catch (e) {
  }
  aria.Utils.IgnoreUtilFocusChanges = false;
  return (document.activeElement === element);
};

aria.Utils.isFocusable = function(element) {
  if (element.tabIndex > 0 || (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)) {
    return true;
  }

  if (element.disabled) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return !!element.href && element.rel !== 'ignore';
    case 'INPUT':
      return element.type !== 'hidden' && element.type !== 'file';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
aria.Utils.triggerEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
};

aria.Utils.keys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27
};

/* harmony default export */ var aria_utils = (aria.Utils);

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/dom.js
/* istanbul ignore next */



const isServer = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer;
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
const getStyle = ieVersion < 9 ? function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

const isScroll = (el, vertical) => {
  if (isServer) return;

  const determinedDirection = vertical !== null || vertical !== undefined;
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

const getScrollContainer = (el, vertical) => {
  if (isServer) return;

  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};

const isInContainer = (el, container) => {
  if (isServer || !el || !container) return false;

  const elRect = el.getBoundingClientRect();
  let containerRect;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right;
};

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/clickoutside.js



const nodeList = [];
const ctx = '@@clickoutsideContext';

let startClick;
let seed = 0;

!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && on(document, 'mousedown', e => (startClick = e));

!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
      (vnode.context.popperElm.contains(mouseup.target) ||
      vnode.context.popperElm.contains(mousedown.target)))) return;

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
/* harmony default export */ var clickoutside = ({
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
});

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("6dd8");

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/resize-event.js


const resize_event_isServer = typeof window === 'undefined';

/* istanbul ignore next */
const resizeHandler = function(entries) {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(fn => {
        fn();
      });
    }
  }
};

/* istanbul ignore next */
const addResizeListener = function(element, fn) {
  if (resize_event_isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver_es["default"](resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
const removeResizeListener = function(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};

// EXTERNAL MODULE: ./packages/theme/cascader.less
var cascader = __webpack_require__("75ec");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660e9bf0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-panel.vue?vue&type=template&id=142c1488&
var cascader_panelvue_type_template_id_142c1488_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c('div',{class:[
        'elp-cascader-panel',
        _vm.border && 'is-bordered'
     ],on:{"keydown":_vm.handleKeyDown}},_vm._l((_vm.menus),function(menu,index){return _c('cascader-menu',{key:index,ref:"menu",refInFor:true,attrs:{"nodes":menu,"index":index,"empty-text":_vm.emptyText}})}),1):_vm._e()}
var cascader_panelvue_type_template_id_142c1488_staticRenderFns = []


// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-panel.vue?vue&type=template&id=142c1488&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/scroll-into-view.js


function scroll_into_view_scrollIntoView(container, selected) {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return;

  if (!selected) {
    container.scrollTop = 0;
    return;
  }

  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => (prev + curr.offsetTop), 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;

  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__("dca8");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__("a623");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// CONCATENATED MODULE: ./packages/cascader-panel/src/node.js













var uid = 0;

var node_Node = /*#__PURE__*/function () {
  function Node(data, config, parentNode) {
    _classCallCheck(this, Node);

    this.data = data;
    this.config = config;
    this.parent = parentNode || null;
    this.level = !this.parent ? 1 : this.parent.level + 1;
    this.uid = uid++;
    this.initState();
    this.initChildren();
  }

  _createClass(Node, [{
    key: "initState",
    value: function initState() {
      var _this$config = this.config,
          valueKey = _this$config.value,
          labelKey = _this$config.label;
      this.value = this.data[valueKey];
      this.label = this.data[labelKey];
      this.pathNodes = this.calculatePathNodes();
      this.path = this.pathNodes.map(function (node) {
        return node.value;
      });
      this.pathLabels = this.pathNodes.map(function (node) {
        return node.label;
      }); // lazy load

      this.loading = false;
      this.loaded = false;
    }
  }, {
    key: "initChildren",
    value: function initChildren() {
      var _this = this;

      var config = this.config;
      var childrenKey = config.children;
      var childrenData = this.data[childrenKey];
      this.hasChildren = Array.isArray(childrenData);
      this.children = (childrenData || []).map(function (child) {
        return new Node(child, config, _this);
      });
    }
  }, {
    key: "calculatePathNodes",
    value: function calculatePathNodes() {
      var nodes = [this];
      var parent = this.parent;

      while (parent) {
        nodes.unshift(parent);
        parent = parent.parent;
      }

      return nodes;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.path;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "getValueByOption",
    value: function getValueByOption() {
      return this.config.emitPath ? this.getPath() : this.getValue();
    }
  }, {
    key: "getText",
    value: function getText(allLevels, separator) {
      return allLevels ? this.pathLabels.join(separator) : this.label;
    }
  }, {
    key: "isSameNode",
    value: function isSameNode(checkedValue) {
      var value = this.getValueByOption();
      return this.config.multiple && Array.isArray(checkedValue) ? checkedValue.some(function (val) {
        return isEqual(val, value);
      }) : isEqual(checkedValue, value);
    }
  }, {
    key: "broadcast",
    value: function broadcast(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var handlerName = "onParent".concat(capitalize(event));
      this.children.forEach(function (child) {
        if (child) {
          // bottom up
          child.broadcast.apply(child, [event].concat(args));
          child[handlerName] && child[handlerName].apply(child, args);
        }
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var parent = this.parent;
      var handlerName = "onChild".concat(capitalize(event));

      if (parent) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        parent[handlerName] && parent[handlerName].apply(parent, args);
        parent.emit.apply(parent, [event].concat(args));
      }
    }
  }, {
    key: "onParentCheck",
    value: function onParentCheck(checked) {
      if (!this.isDisabled) {
        this.setCheckState(checked);
      }
    }
  }, {
    key: "onChildCheck",
    value: function onChildCheck() {
      var children = this.children;
      var validChildren = children.filter(function (child) {
        return !child.isDisabled;
      });
      var checked = validChildren.length ? validChildren.every(function (child) {
        return child.checked;
      }) : false;
      this.setCheckState(checked);
    }
  }, {
    key: "setCheckState",
    value: function setCheckState(checked) {
      var totalNum = this.children.length;
      var checkedNum = this.children.reduce(function (c, p) {
        var num = p.checked ? 1 : p.indeterminate ? 0.5 : 0;
        return c + num;
      }, 0);
      this.checked = checked;
      this.indeterminate = checkedNum !== totalNum && checkedNum > 0;
    }
  }, {
    key: "syncCheckState",
    value: function syncCheckState(checkedValue) {
      var value = this.getValueByOption();
      var checked = this.isSameNode(checkedValue, value);
      this.doCheck(checked);
    }
  }, {
    key: "doCheck",
    value: function doCheck(checked) {
      if (this.checked !== checked) {
        if (this.config.checkStrictly) {
          this.checked = checked;
        } else {
          // bottom up to unify the calculation of the indeterminate state
          this.broadcast('check', checked);
          this.setCheckState(checked);
          this.emit('check');
        }
      }
    }
  }, {
    key: "isDisabled",
    get: function get() {
      var data = this.data,
          parent = this.parent,
          config = this.config;
      var disabledKey = config.disabled;
      var checkStrictly = config.checkStrictly;
      return data[disabledKey] || !checkStrictly && parent && parent.isDisabled;
    }
  }, {
    key: "isLeaf",
    get: function get() {
      var data = this.data,
          loaded = this.loaded,
          hasChildren = this.hasChildren,
          children = this.children;
      var _this$config2 = this.config,
          lazy = _this$config2.lazy,
          leafKey = _this$config2.leaf;

      if (lazy) {
        var isLeaf = isDef(data[leafKey]) ? data[leafKey] : loaded ? !children.length : false;
        this.hasChildren = !isLeaf;
        return isLeaf;
      }

      return !hasChildren;
    }
  }]);

  return Node;
}();


// CONCATENATED MODULE: ./packages/cascader-panel/src/store.js












var flatNodes = function flatNodes(data, leafOnly, lazyMultiCheck) {
  return data.reduce(function (res, node) {
    if (node.isLeaf) {
      res.push(node);
    } else {
      (!leafOnly || lazyMultiCheck) && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly, lazyMultiCheck));
    }

    return res;
  }, []);
};

var store_Store = /*#__PURE__*/function () {
  function Store(data, config) {
    _classCallCheck(this, Store);

    this.config = config;
    this.initNodes(data);
  }

  _createClass(Store, [{
    key: "initNodes",
    value: function initNodes(data) {
      var _this = this;

      data = coerceTruthyValueToArray(data);
      this.nodes = data.map(function (nodeData) {
        return new node_Node(nodeData, _this.config);
      });
      this.flattedNodes = this.getFlattedNodes(false, false);
      this.leafNodes = this.getFlattedNodes(true, false);
    }
  }, {
    key: "createNodes",
    value: function createNodes(data, config) {
      var _this2 = this;

      data = coerceTruthyValueToArray(data);
      var valueKey = config.value;
      return data.map(function (node) {
        var _cur = _this2.nodes.find(function (it) {
          return it.value === node[valueKey];
        });

        return _cur || new node_Node(node, config);
      });
    }
  }, {
    key: "appendNodes",
    value: function appendNodes(nodeDataList, parentNode) {
      var _this3 = this;

      nodeDataList = coerceTruthyValueToArray(nodeDataList);
      var children = parentNode ? parentNode.children : this.nodes;
      var nodes = [];

      var _loop = function _loop(i, length) {
        var node = new node_Node(nodeDataList[i], _this3.config, parentNode); // Skip if the node already exists

        var _idx = children.findIndex(function (item) {
          return item.value === node.value;
        });

        if (_idx > -1) {
          // replace the old node when the value repeats
          // children.splice(_idx, 1, node)
          return "break";
        }

        nodes.push(node);
      };

      for (var i = 0, length = nodeDataList.length; i < length; i++) {
        var _ret = _loop(i, length);

        if (_ret === "break") break;
      }

      if (parentNode) {
        parentNode.children = Object.freeze(nodes);
      } else {
        this.nodes = Object.freeze(nodes);
      }
    }
  }, {
    key: "unshiftNodes",
    value: function unshiftNodes(nodeIntance) {
      nodeIntance = coerceTruthyValueToArray(nodeIntance);
      var nodes = this.nodes;

      var _loop2 = function _loop2(i, length) {
        var node = nodeIntance[i]; // Skip if the node already exists

        var _idx = nodes.findIndex(function (item) {
          return item.value === node.value;
        });

        if (_idx > -1) {
          return "break";
        }

        nodes.unshift(node);
      };

      for (var i = 0, length = nodeIntance.length; i < length; i++) {
        var _ret2 = _loop2(i, length);

        if (_ret2 === "break") break;
      }

      this.nodes = nodes;
      this.flattedNodes = this.getFlattedNodes(false, false);
      this.leafNodes = this.getFlattedNodes(true, false);
    }
  }, {
    key: "getNodes",
    value: function getNodes() {
      return this.nodes;
    }
  }, {
    key: "getFlattedNodes",
    value: function getFlattedNodes(leafOnly) {
      var cached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var cachedNodes = leafOnly ? this.leafNodes : this.flattedNodes;
      return cached ? cachedNodes : flatNodes(this.nodes, leafOnly, this.config.lazyMultiCheck);
    }
  }, {
    key: "getNodeByValue",
    value: function getNodeByValue(value) {
      if (value) {
        var nodes = this.getFlattedNodes(false, !this.config.lazy).filter(function (node) {
          return valueEquals(node.path, value) || node.value === value;
        });
        return nodes && nodes.length ? nodes[0] : null;
      }

      return null;
    }
  }]);

  return Store;
}();


// CONCATENATED MODULE: ./packages/cascader-panel/src/constant.js

var DefaultProps = {
  value: 'value',
  label: 'label',
  leaf: 'leaf',
  children: 'children',
  disabled: 'disabled',
  lazy: false,
  lazyLoad: noop,
  emitPath: true,
  multiple: false,
  checkStrictly: false,
  expandTrigger: 'click',
  // click / hover
  hoverThreshold: 500,
  selectWithExpand: true,
  // when node is selectable, click event trigger expand event
  lazyMultiCheck: false,
  // effective when lazy===true&checkStrictly===false
  expandPanels: 1,
  emptyText: '暂无数据'
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660e9bf0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-menu.vue?vue&type=template&id=3131aaee&
var cascader_menuvue_type_template_id_3131aaee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"elp-cascader-menu"},[_c('div',{staticClass:"elp-cascader-menu__wrap elp-cascader-menu__list"},[_c('div',{staticClass:"elp-search-check"},[(_vm.labelAndCheckAllVisible)?_c('div',{staticClass:"elp-search-check__check"},[(_vm.menuLabel)?_c('div',[_vm._v(_vm._s(_vm.menuLabel))]):_vm._e(),(_vm.checkAllVisible)?_c('el-checkbox',{attrs:{"value":_vm.menuCheckState.checked,"indeterminate":_vm.menuCheckState.indeterminate},on:{"change":_vm.onMenuCheck}},[_vm._v("全选")]):_vm._e()],1):_vm._e(),(_vm.searchVisible)?_c('div',{staticStyle:{"padding":"5px 20px"}},[_c('el-input',{attrs:{"clearable":"","placeholder":_vm.menuPlaceholder,"size":"small","suffix-icon":"el-icon-search"},on:{"input":_vm.handleSearchInput},model:{value:(_vm.keyWordsTemp),callback:function ($$v) {_vm.keyWordsTemp=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"keyWordsTemp"}})],1):_vm._e()]),(_vm.searchLoading)?_c('div',{staticClass:"elp-cascader-menu__empty-text"},[_vm._v("加载中")]):(_vm.isEmpty)?_c('div',{staticClass:"elp-cascader-menu__empty-text"},[_vm._v(" "+_vm._s(_vm.emptyText)+" ")]):_c('recycle-scroller',{style:({ height: _vm.scrollHeight }),attrs:{"buffer":100,"items":_vm.filterNodes,"item-size":34,"key-field":"value"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var item = ref.item;
var index = ref.index;
return [_c('cascader-node',{key:item.uid,attrs:{"node":item,"node-id":(_vm.menuId + "-" + index),"insertMode":_vm.searching,"aria-haspopup":item.hasChildren,"aria-owns":item.hasChildren ? _vm.menuId : null},on:{"expand":function($event){_vm.isHover && _vm.handleExpand}}})]}}])}),(_vm.isHover)?_c('svg',{ref:"hoverZone",staticClass:"elp-cascader-menu__hover-zone"}):_vm._e()],1)])}
var cascader_menuvue_type_template_id_3131aaee_staticRenderFns = []


// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-menu.vue?vue&type=template&id=3131aaee&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css
var vue_virtual_scroller = __webpack_require__("a899");

// EXTERNAL MODULE: ./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js
var vue_virtual_scroller_esm = __webpack_require__("e508");

// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("2638");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660e9bf0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/radio/src/radio.vue?vue&type=template&id=3c0b791c&
var radiovue_type_template_id_3c0b791c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"el-radio",class:[
    _vm.border && _vm.radioSize ? 'el-radio--' + _vm.radioSize : '',
    { 'is-disabled': _vm.isDisabled },
    { 'is-focus': _vm.focus },
    { 'is-bordered': _vm.border },
    { 'is-checked': _vm.model === _vm.label }
  ],attrs:{"role":"radio","aria-checked":_vm.model === _vm.label,"aria-disabled":_vm.isDisabled,"tabindex":_vm.tabIndex},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.stopPropagation();$event.preventDefault();_vm.model = _vm.isDisabled ? _vm.model : _vm.label}}},[_c('span',{staticClass:"el-radio__input",class:{
      'is-disabled': _vm.isDisabled,
      'is-checked': _vm.model === _vm.label
    }},[_c('span',{staticClass:"el-radio__inner"}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],ref:"radio",staticClass:"el-radio__original",attrs:{"type":"radio","aria-hidden":"true","name":_vm.name,"disabled":_vm.isDisabled,"tabindex":"-1"},domProps:{"value":_vm.label,"checked":_vm._q(_vm.model,_vm.label)},on:{"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false},"change":[function($event){_vm.model=_vm.label},_vm.handleChange]}})]),_c('span',{staticClass:"el-radio__label",on:{"keydown":function($event){$event.stopPropagation();}}},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2)])}
var radiovue_type_template_id_3c0b791c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/element-ui/packages/radio/src/radio.vue?vue&type=template&id=3c0b791c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/radio/src/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'ElRadio',
  mixins: [emitter],
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  componentName: 'ElRadio',
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  data: function data() {
    return {
      focus: false
    };
  },
  computed: {
    isGroup: function isGroup() {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }

      return false;
    },
    model: {
      get: function get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.dispatch('ElRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }

        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    radioSize: function radioSize() {
      var temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
    },
    isDisabled: function isDisabled() {
      return this.isGroup ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled : this.disabled || (this.elForm || {}).disabled;
    },
    tabIndex: function tabIndex() {
      return this.isDisabled || this.isGroup && this.model !== this.label ? -1 : 0;
    }
  },
  methods: {
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.$emit('change', _this.model);

        _this.isGroup && _this.dispatch('ElRadioGroup', 'handleChange', _this.model);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/radio/src/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/element-ui/packages/radio/src/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  src_radiovue_type_script_lang_js_,
  radiovue_type_template_id_3c0b791c_render,
  radiovue_type_template_id_3c0b791c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_radio = (radio_component.exports);
// CONCATENATED MODULE: ./node_modules/element-ui/packages/radio/index.js


/* istanbul ignore next */
src_radio.install = function(Vue) {
  Vue.component(src_radio.name, src_radio);
};

/* harmony default export */ var packages_radio = (src_radio);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660e9bf0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/checkbox/src/checkbox.vue?vue&type=template&id=2f16cb9e&
var checkboxvue_type_template_id_2f16cb9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"el-checkbox",class:[
    _vm.border && _vm.checkboxSize ? 'el-checkbox--' + _vm.checkboxSize : '',
    { 'is-disabled': _vm.isDisabled },
    { 'is-bordered': _vm.border },
    { 'is-checked': _vm.isChecked }
  ],attrs:{"id":_vm.id}},[_c('span',{staticClass:"el-checkbox__input",class:{
      'is-disabled': _vm.isDisabled,
      'is-checked': _vm.isChecked,
      'is-indeterminate': _vm.indeterminate,
      'is-focus': _vm.focus
    },attrs:{"tabindex":_vm.indeterminate ? 0 : false,"role":_vm.indeterminate ? 'checkbox' : false,"aria-checked":_vm.indeterminate ? 'mixed' : false}},[_c('span',{staticClass:"el-checkbox__inner"}),(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","aria-hidden":_vm.indeterminate ? 'true' : 'false',"name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","aria-hidden":_vm.indeterminate ? 'true' : 'false',"disabled":_vm.isDisabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}})]),(_vm.$slots.default || _vm.label)?_c('span',{staticClass:"el-checkbox__label"},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2):_vm._e()])}
var checkboxvue_type_template_id_2f16cb9e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/element-ui/packages/checkbox/src/checkbox.vue?vue&type=template&id=2f16cb9e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'ElCheckbox',
  mixins: [emitter],
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  componentName: 'ElCheckbox',
  data: function data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);
          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);
          this.isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },
    isChecked: function isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    isGroup: function isGroup() {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }

      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },

    /* used to make the isDisabled judgment under max/min props */
    isLimitDisabled: function isLimitDisabled() {
      var _this$_checkboxGroup = this._checkboxGroup,
          max = _this$_checkboxGroup.max,
          min = _this$_checkboxGroup.min;
      return !!(max || min) && this.model.length >= max && !this.isChecked || this.model.length <= min && this.isChecked;
    },
    isDisabled: function isDisabled() {
      return this.isGroup ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled : this.disabled || (this.elForm || {}).disabled;
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxSize: function checkboxSize() {
      var temCheckboxSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize : temCheckboxSize;
    }
  },
  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String,

    /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    controls: String,

    /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    border: Boolean,
    size: String
  },
  methods: {
    addToStore: function addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange: function handleChange(ev) {
      var _this = this;

      if (this.isLimitExceeded) return;
      var value;

      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }

      this.$emit('change', value, ev);
      this.$nextTick(function () {
        if (_this.isGroup) {
          _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
        }
      });
    }
  },
  created: function created() {
    this.checked && this.addToStore();
  },
  mounted: function mounted() {
    // 为indeterminate元素 添加aria-controls 属性
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls);
    }
  },
  watch: {
    value: function value(_value) {
      this.dispatch('ElFormItem', 'el.form.change', _value);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/element-ui/packages/checkbox/src/checkbox.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  src_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_2f16cb9e_render,
  checkboxvue_type_template_id_2f16cb9e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/element-ui/packages/checkbox/index.js


/* istanbul ignore next */
src_checkbox.install = function(Vue) {
  Vue.component(src_checkbox.name, src_checkbox);
};

/* harmony default export */ var packages_checkbox = (src_checkbox);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-node.vue?vue&type=script&lang=js&







var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

/* harmony default export */ var cascader_nodevue_type_script_lang_js_ = ({
  name: 'ElpCascaderNode',
  inject: ['panel'],
  components: {
    ElRadio: packages_radio,
    ElCheckbox: packages_checkbox
  },
  props: {
    node: {
      required: true
    },
    insertMode: Boolean,
    nodeId: String
  },
  computed: {
    config: function config() {
      return this.panel.config;
    },
    isLeaf: function isLeaf() {
      return this.node.isLeaf;
    },
    isDisabled: function isDisabled() {
      return this.node.isDisabled;
    },
    checkedValue: function checkedValue() {
      return this.panel.checkedValue;
    },
    isChecked: function isChecked() {
      return this.node.isSameNode(this.checkedValue);
    },
    inActivePath: function inActivePath() {
      return this.isInPath(this.panel.activePath);
    },
    inCheckedPath: function inCheckedPath() {
      var _this = this;

      if (!this.config.checkStrictly) return false;
      return this.panel.checkedNodePaths.some(function (checkedPath) {
        return _this.isInPath(checkedPath);
      });
    },
    value: function value() {
      return this.node.getValueByOption();
    }
  },
  methods: {
    insertSearchNode: function insertSearchNode() {
      if (!this.insertMode) return;
      this.panel.store.unshiftNodes(this.node);
    },
    handleExpand: function handleExpand() {
      var _this2 = this;

      var panel = this.panel,
          node = this.node,
          isDisabled = this.isDisabled,
          config = this.config;
      if (this.insertMode) this.insertSearchNode();
      var multiple = config.multiple,
          checkStrictly = config.checkStrictly; // 如果拓展，则加入之前的引用

      if (!checkStrictly && isDisabled || node.loading) return;

      if (config.lazy && !node.loaded) {
        panel.lazyLoad(node, function () {
          // do not use cached leaf value here, invoke this.isLeaf to get new value.
          var isLeaf = _this2.isLeaf;
          if (!isLeaf) _this2.handleExpand();

          if (multiple) {
            // if leaf sync checked state, else clear checked state
            var checked = isLeaf ? node.checked : false;

            _this2.handleMultiCheckChange(checked);
          }
        });
      } else {
        panel.handleExpand(node);
      }
    },
    handleCheckChange: function handleCheckChange() {
      var panel = this.panel,
          value = this.value,
          node = this.node;
      this.insertSearchNode();
      panel.handleCheckChange(value);
      if (panel.config.selectWithExpand) panel.handleExpand(node);
    },
    handleMultiCheckChange: function handleMultiCheckChange(checked) {
      this.insertSearchNode();
      this.node.doCheck(checked);
      this.panel.calculateMultiCheckedValue();
    },
    isInPath: function isInPath(pathNodes) {
      var node = this.node;
      var selectedPathNode = pathNodes[node.level - 1] || {};
      return selectedPathNode.uid === node.uid;
    },
    renderPrefix: function renderPrefix(h) {
      var isLeaf = this.isLeaf,
          isChecked = this.isChecked,
          config = this.config;
      var checkStrictly = config.checkStrictly,
          multiple = config.multiple;

      if (multiple) {
        return this.renderCheckbox(h);
      } else if (checkStrictly) {
        return this.renderRadio(h);
      } else if (isLeaf && isChecked) {
        return this.renderCheckIcon(h);
      }

      return null;
    },
    renderPostfix: function renderPostfix(h) {
      var node = this.node,
          isLeaf = this.isLeaf;

      if (node.loading) {
        return this.renderLoadingIcon(h);
      } else if (!isLeaf) {
        return this.renderExpandIcon(h);
      }

      return null;
    },
    renderCheckbox: function renderCheckbox() {
      var h = this.$createElement;
      var node = this.node,
          config = this.config,
          isDisabled = this.isDisabled;
      var events = {
        on: {
          change: this.handleMultiCheckChange
        },
        nativeOn: {}
      }; // when every node is selectable, click event should not trigger expand event.

      if (config.checkStrictly || config.lazyMultiCheck) {
        events.nativeOn.click = stopPropagation;
      }

      return h("el-checkbox", helper_default()([{
        "attrs": {
          "value": node.checked,
          "indeterminate": node.indeterminate,
          "disabled": isDisabled
        }
      }, events]));
    },
    renderRadio: function renderRadio() {
      var h = this.$createElement;
      var checkedValue = this.checkedValue,
          value = this.value,
          isDisabled = this.isDisabled; // to keep same reference if value cause radio's checked state is calculated by reference comparision;

      if (isEqual(value, checkedValue)) {
        value = checkedValue;
      }

      return h("el-radio", {
        "attrs": {
          "value": checkedValue,
          "label": value,
          "disabled": isDisabled
        },
        "on": {
          "change": this.handleCheckChange
        },
        "nativeOn": {
          "click": stopPropagation
        }
      }, [h("span")]);
    },
    renderCheckIcon: function renderCheckIcon() {
      var h = this.$createElement;
      return h("i", {
        "class": "el-icon-check elp-cascader-node__prefix"
      });
    },
    renderLoadingIcon: function renderLoadingIcon() {
      var h = this.$createElement;
      return h("i", {
        "class": "el-icon-loading elp-cascader-node__postfix"
      });
    },
    renderExpandIcon: function renderExpandIcon() {
      var h = this.$createElement;
      return h("i", {
        "class": "el-icon-arrow-right elp-cascader-node__postfix"
      });
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var panel = this.panel,
          node = this.node;
      var render = panel.renderLabelFn;
      var vnode = render ? render({
        node: node,
        data: node.data
      }) : null;
      return h("span", {
        "class": "elp-cascader-node__label"
      }, [vnode || node.label]);
    }
  },
  render: function render(h) {
    var _this3 = this;

    var inActivePath = this.inActivePath,
        inCheckedPath = this.inCheckedPath,
        isChecked = this.isChecked,
        isLeaf = this.isLeaf,
        isDisabled = this.isDisabled,
        config = this.config,
        nodeId = this.nodeId;
    var expandTrigger = config.expandTrigger,
        checkStrictly = config.checkStrictly,
        multiple = config.multiple;
    var disabled = !checkStrictly && isDisabled;
    var events = {
      on: {}
    };

    if (expandTrigger === 'click') {
      events.on.click = this.handleExpand;
    } else {
      events.on.mouseenter = function (e) {
        _this3.handleExpand();

        _this3.$emit('expand', e);
      };

      events.on.focus = function (e) {
        _this3.handleExpand();

        _this3.$emit('expand', e);
      };
    }

    if (isLeaf && !isDisabled && !checkStrictly && !multiple) {
      events.on.click = this.handleCheckChange;
    }

    return h("li", helper_default()([{
      "attrs": {
        "role": "menuitem",
        "id": nodeId,
        "aria-expanded": inActivePath,
        "tabindex": disabled ? null : -1
      },
      "class": {
        'elp-cascader-node': true,
        'is-selectable': checkStrictly,
        'in-active-path': inActivePath,
        'in-checked-path': inCheckedPath,
        'is-active': isChecked,
        'is-disabled': disabled
      }
    }, events]), [this.renderPrefix(h), this.renderContent(h), this.renderPostfix(h)]);
  }
});
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-node.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_nodevue_type_script_lang_js_ = (cascader_nodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-node.vue
var cascader_node_render, cascader_node_staticRenderFns




/* normalize component */

var cascader_node_component = normalizeComponent(
  src_cascader_nodevue_type_script_lang_js_,
  cascader_node_render,
  cascader_node_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cascader_node = (cascader_node_component.exports);
// EXTERNAL MODULE: ./node_modules/throttle-debounce/debounce.js
var debounce = __webpack_require__("0e15");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-menu.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var cascader_menuvue_type_script_lang_js_ = ({
  name: 'ElpCascaderMenu',
  inject: ['panel'],
  components: {
    RecycleScroller: vue_virtual_scroller_esm["a" /* RecycleScroller */],
    CascaderNode: cascader_node,
    ElInput: packages_input,
    ElCheckbox: packages_checkbox
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: Number,
    emptyText: {
      type: String,
      default: '暂无数据'
    }
  },
  data: function data() {
    return {
      activeNode: null,
      hoverTimer: null,
      searchKey: '',
      keyWordsTemp: '',
      menuCheckState: {
        checked: false,
        indeterminate: false
      },
      searching: false,
      searchLoading: false,
      searchNodes: []
    };
  },
  computed: {
    config: function config() {
      return this.panel.config;
    },
    isEmpty: function isEmpty() {
      return !this.filterNodes.length;
    },
    menuId: function menuId() {
      return "cascader-menu-".concat(this.index);
    },
    isHover: function isHover() {
      return this.panel.isHoverMenu;
    },
    filterNodes: function filterNodes() {
      var _this = this;

      // 经搜索词过滤后的node节点
      if (this.hasRemote && this.searching) return this.searchNodes;
      if (!this.searchKey) return this.nodes;
      return this.nodes.filter(function (node) {
        return node.label.includes(_this.searchKey);
      });
    },
    menuLabel: function menuLabel() {
      var _labels = coerceTruthyValueToArray(this.config.panelLabels);

      return _labels[this.index];
    },
    menuPlaceholder: function menuPlaceholder() {
      var _placeholders = coerceTruthyValueToArray(this.config.panelPlaceholder);

      return _placeholders[this.index] || '请输入内容';
    },
    checkAllVisible: function checkAllVisible() {
      var _this$config = this.config,
          checkStrictly = _this$config.checkStrictly,
          multiple = _this$config.multiple,
          lazyMultiCheck = _this$config.lazyMultiCheck,
          checkAll = _this$config.checkAll;
      var validCheck = Array.isArray(checkAll) ? checkAll.includes(this.index) : checkAll;
      return checkStrictly && multiple && !lazyMultiCheck && validCheck && !this.hasRemote;
    },
    labelAndCheckAllVisible: function labelAndCheckAllVisible() {
      return this.menuLabel || this.checkAllVisible;
    },
    searchVisible: function searchVisible() {
      return this.config.panelSearch;
    },
    scrollHeight: function scrollHeight() {
      var labelAndCheckAllHeight = this.labelAndCheckAllVisible ? 30 : 0;
      var searchHeight = this.searchVisible ? 42 : 0;
      return "calc(100% - ".concat(labelAndCheckAllHeight + searchHeight, "px)");
    },
    hasRemote: function hasRemote() {
      return typeof this.config.remoteInitMethods === 'function' && this.index === 0;
    }
  },
  watch: {
    'panel.checkedValue': {
      handler: function handler() {
        this.setMenuCheckedVal();
      },
      deep: true
    },
    'panel.activePath': {
      handler: function handler() {
        this.setMenuCheckedVal();
      },
      deep: true,
      immediate: true
    },
    searching: {
      handler: function handler(val) {
        this.panel.isKeyWordSearching = val;
      },
      immediate: true
    }
  },
  methods: {
    handleExpand: function handleExpand(e) {
      this.activeNode = e.target;
    },
    handleMouseMove: function handleMouseMove(e) {
      var activeNode = this.activeNode,
          hoverTimer = this.hoverTimer;
      var hoverZone = this.$refs.hoverZone;
      if (!activeNode || !hoverZone) return;

      if (activeNode.contains(e.target)) {
        clearTimeout(hoverTimer);

        var _this$$el$getBounding = this.$el.getBoundingClientRect(),
            left = _this$$el$getBounding.left;

        var startX = e.clientX - left;
        var _this$$el = this.$el,
            offsetWidth = _this$$el.offsetWidth,
            offsetHeight = _this$$el.offsetHeight;
        var top = activeNode.offsetTop;
        var bottom = top + activeNode.offsetHeight;
        hoverZone.innerHTML = "\n          <path style=\"pointer-events: auto;\" fill=\"transparent\" d=\"M".concat(startX, " ").concat(top, " L").concat(offsetWidth, " 0 V").concat(top, " Z\" />\n          <path style=\"pointer-events: auto;\" fill=\"transparent\" d=\"M").concat(startX, " ").concat(bottom, " L").concat(offsetWidth, " ").concat(offsetHeight, " V").concat(bottom, " Z\" />\n        ");
      } else if (!hoverTimer) {
        this.hoverTimer = setTimeout(this.clearHoverZone, this.panel.config.hoverThreshold);
      }
    },
    clearHoverZone: function clearHoverZone() {
      var hoverZone = this.$refs.hoverZone;
      if (!hoverZone) return;
      hoverZone.innerHTML = '';
    },
    setMenuCheckedVal: function setMenuCheckedVal() {
      if (!this.checkAllVisible) return;
      var totalNum = this.filterNodes.filter(function (it) {
        return !it.isDisabled;
      }).length;
      var checkedNum = this.filterNodes.reduce(function (c, p) {
        var num = p.checked ? 1 : p.indeterminate ? 0.5 : 0;
        return c + num;
      }, 0);
      this.menuCheckState = {
        checked: checkedNum > 0 && checkedNum === totalNum,
        indeterminate: checkedNum > 0 && checkedNum !== totalNum
      };
    },
    onMenuCheck: function onMenuCheck(checked) {
      // 标识已选中的标签
      this.filterNodes.forEach(function (node) {
        !node.isDisabled && node.doCheck(checked);
      });
      this.panel.calculateMultiCheckedValue();
    },
    handleSearchInput: debounce_default()(300, function () {
      var searchWords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // 适应大数据量，首层可以进行懒加载
      if (this.hasRemote) {
        this.searching = !!searchWords;
        this.handlerRemoteSearch();
      }

      this.searchKey = searchWords.trim();
      this.setMenuCheckedVal();
    }),
    handlerRemoteSearch: function handlerRemoteSearch() {
      var _this2 = this;

      if (!this.hasRemote) return;
      var remoteInitMethods = this.config.remoteInitMethods;
      this.panel.initSearchStatus(!!this.keyWordsTemp);
      if (!this.keyWordsTemp) return;
      this.searchLoading = true;

      var fufiled = function fufiled(nodeLists) {
        _this2.searchLoading = false;
        _this2.searchNodes = _this2.panel.store.createNodes(nodeLists, _this2.config);
      };

      remoteInitMethods(this.keyWordsTemp, fufiled);
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_menuvue_type_script_lang_js_ = (cascader_menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-menu.vue





/* normalize component */

var cascader_menu_component = normalizeComponent(
  src_cascader_menuvue_type_script_lang_js_,
  cascader_menuvue_type_template_id_3131aaee_render,
  cascader_menuvue_type_template_id_3131aaee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cascader_menu = (cascader_menu_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./packages/cascader-panel/src/utils.js





var utils_isLeaf = function isLeaf(el) {
  return !el.getAttribute('aria-owns');
};

var focusNode = function focusNode(el) {
  if (!el) return;
  el.focus();
  !utils_isLeaf(el) && el.click();
};

var checkNode = function checkNode(el) {
  if (!el) return;
  var input = el.querySelector('input');

  if (input) {
    input.click();
  } else if (utils_isLeaf(el)) {
    el.click();
  }
};

var getSibling = function getSibling(el, distance) {
  var parentNode = el.parentNode;

  if (parentNode) {
    var siblings = parentNode.querySelectorAll('.elp-cascader-node[tabindex="-1"]');
    var index = Array.prototype.indexOf.call(siblings, el);
    return siblings[index + distance] || null;
  }

  return null;
};

var getMenuIndex = function getMenuIndex(el) {
  if (!el) return;
  var pieces = el.id.split('-');
  return Number(pieces[pieces.length - 2]);
};


// EXTERNAL MODULE: ./packages/theme/cascader-panel.less
var cascader_panel = __webpack_require__("4d32");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-panel.vue?vue&type=script&lang=js&












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// element-ui









var KeyCode = aria_utils.keys;
/* harmony default export */ var cascader_panelvue_type_script_lang_js_ = ({
  name: 'ElpCascaderPanel',
  components: {
    CascaderMenu: cascader_menu
  },
  props: {
    value: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function,
    visible: Boolean,
    emptyText: String,
    remoteInitMethods: Function
  },
  provide: function provide() {
    return {
      panel: this
    };
  },
  data: function data() {
    return {
      store: [],
      menus: [],
      loadCount: 0,
      activePath: [],
      checkedValue: null,
      checkedNodePaths: [],
      isKeyWordSearching: false // menu 正在接入远程搜索

    };
  },
  computed: {
    config: function config() {
      return merge(_objectSpread2({}, DefaultProps), this.props || {}, {
        remoteInitMethods: this.remoteInitMethods
      });
    },
    multiple: function multiple() {
      return this.config.multiple;
    },
    checkStrictly: function checkStrictly() {
      return this.config.checkStrictly;
    },
    leafOnly: function leafOnly() {
      return !this.checkStrictly;
    },
    isHoverMenu: function isHoverMenu() {
      return this.config.expandTrigger === 'hover';
    },
    renderLabelFn: function renderLabelFn() {
      return this.renderLabel || this.$scopedSlots.default;
    }
  },
  watch: {
    options: {
      handler: function handler() {
        if (this.isKeyWordSearching) return;
        this.initStore();
      },
      immediate: true,
      deep: true
    },
    value: function value() {
      this.syncCheckedValue();
      this.checkStrictly && this.calculateCheckedNodePaths();
    },
    checkedValue: function checkedValue(val) {
      if (!isEqual(val, this.value)) {
        this.checkStrictly && this.calculateCheckedNodePaths();
        this.$emit('input', val);
        this.$emit('change', val);
      }
    }
  },
  mounted: function mounted() {
    if (!isEmpty(this.value)) {
      this.syncCheckedValue();
    }
  },
  methods: {
    initSearchStatus: function initSearchStatus(hasSearchWord) {
      if (hasSearchWord) {
        this.menus = [this.store.getNodes()].concat(_toConsumableArray(this.generateExcessMenus(1)));
        this.activePath = [];
      } else {
        this.menus = [this.store.getNodes()].concat(_toConsumableArray(this.generateExcessMenus(1)));
        this.syncMenuState();
      }
    },
    initStore: function initStore() {
      var config = this.config,
          options = this.options;

      if (config.lazy && isEmpty(options)) {
        this.lazyLoad();
      } else {
        this.store = new store_Store(options, config);
        this.menus = [this.store.getNodes()].concat(_toConsumableArray(this.generateExcessMenus(1)));
        this.syncMenuState();
      }
    },
    syncCheckedValue: function syncCheckedValue() {
      var value = this.value,
          checkedValue = this.checkedValue;

      if (!isEqual(value, checkedValue)) {
        this.checkedValue = value;
        this.syncMenuState();
      }
    },
    syncMenuState: function syncMenuState() {
      var multiple = this.multiple,
          checkStrictly = this.checkStrictly;
      this.syncActivePath();
      multiple && this.syncMultiCheckState();
      checkStrictly && this.calculateCheckedNodePaths();
      this.$nextTick(this.scrollIntoView);
    },
    syncMultiCheckState: function syncMultiCheckState() {
      var _this = this;

      var nodes = this.getFlattedNodes(this.leafOnly);
      nodes.forEach(function (node) {
        node.syncCheckState(_this.checkedValue);
      });
    },
    syncActivePath: function syncActivePath() {
      var _this2 = this;

      var store = this.store,
          multiple = this.multiple,
          activePath = this.activePath,
          checkedValue = this.checkedValue;

      if (!isEmpty(activePath)) {
        var nodes = activePath.map(function (node) {
          return _this2.getNodeByValue(node.getValue());
        });
        this.expandNodes(nodes);
      } else if (!isEmpty(checkedValue)) {
        var value = multiple ? checkedValue[0] : checkedValue;
        var checkedNode = this.getNodeByValue(value) || {};

        var _nodes = (checkedNode.pathNodes || []).slice(0, -1);

        this.expandNodes(_nodes);
      } else {
        this.activePath = [];
        this.menus = [store.getNodes()].concat(_toConsumableArray(this.generateExcessMenus(1)));
      }
    },
    expandNodes: function expandNodes(nodes) {
      var _this3 = this;

      nodes.forEach(function (node) {
        return _this3.handleExpand(node, true
        /* silent */
        );
      });
    },
    calculateCheckedNodePaths: function calculateCheckedNodePaths() {
      var _this4 = this;

      var checkedValue = this.checkedValue,
          multiple = this.multiple;
      var checkedValues = multiple ? coerceTruthyValueToArray(checkedValue) : [checkedValue];
      this.checkedNodePaths = checkedValues.map(function (v) {
        var checkedNode = _this4.getNodeByValue(v);

        return checkedNode ? checkedNode.pathNodes : [];
      });
    },
    handleKeyDown: function handleKeyDown(e) {
      var target = e.target,
          keyCode = e.keyCode;

      switch (keyCode) {
        case KeyCode.up:
          {
            var prev = getSibling(target, -1);
            focusNode(prev);
            break;
          }

        case KeyCode.down:
          {
            var next = getSibling(target, 1);
            focusNode(next);
            break;
          }

        case KeyCode.left:
          {
            var preMenu = this.$refs.menu[getMenuIndex(target) - 1];

            if (preMenu) {
              var expandedNode = preMenu.$el.querySelector('.elp-cascader-node[aria-expanded="true"]');
              focusNode(expandedNode);
            }

            break;
          }

        case KeyCode.right:
          {
            var nextMenu = this.$refs.menu[getMenuIndex(target) + 1];

            if (nextMenu) {
              var firstNode = nextMenu.$el.querySelector('.elp-cascader-node[tabindex="-1"]');
              focusNode(firstNode);
            }

            break;
          }

        case KeyCode.enter:
          checkNode(target);
          break;

        case KeyCode.esc:
        case KeyCode.tab:
          this.$emit('close');
          break;

        default:
          return;
      }
    },
    handleExpand: function handleExpand(node, silent) {
      var activePath = this.activePath;
      var level = node.level;
      var path = activePath.slice(0, level - 1);
      var menus = this.menus.slice(0, level);

      if (!node.isLeaf) {
        path.push(node);
        menus.push(node.children);
      }

      this.activePath = path;
      this.menus = [].concat(_toConsumableArray(menus), _toConsumableArray(this.generateExcessMenus(menus.length)));

      if (!silent) {
        var pathValues = path.map(function (node) {
          return node.getValue();
        });
        var activePathValues = activePath.map(function (node) {
          return node.getValue();
        });

        if (!valueEquals(pathValues, activePathValues)) {
          this.$emit('active-item-change', pathValues); // Deprecated

          this.$emit('expand-change', pathValues);
        }
      }
    },
    handleCheckChange: function handleCheckChange(value) {
      this.checkedValue = value;
    },
    lazyLoad: function lazyLoad(node, onFullfiled) {
      var _this5 = this;

      var config = this.config;

      if (!node) {
        node = node || {
          root: true,
          level: 0
        };
        this.store = new store_Store([], config);
        this.menus = [this.store.getNodes()].concat(_toConsumableArray(this.generateExcessMenus(1)));
      }

      node.loading = true;

      var resolve = function resolve(dataList) {
        var parent = node.root ? null : node;
        dataList && dataList.length && _this5.store.appendNodes(dataList, parent);
        node.loading = false;
        node.loaded = true;

        if (_this5.loadCount === 0 && _this5.menus[0] && !_this5.menus[0].length) {
          _this5.menus = [_this5.store.getNodes()].concat(_toConsumableArray(_this5.generateExcessMenus(1)));
        } // dispose default value on lazy load mode


        if (Array.isArray(_this5.checkedValue)) {
          var nodeValue = _this5.checkedValue[_this5.loadCount++];
          var valueKey = _this5.config.value;
          var leafKey = _this5.config.leaf;

          if (Array.isArray(dataList) && dataList.filter(function (item) {
            return item[valueKey] === nodeValue;
          }).length > 0) {
            var checkedNode = _this5.store.getNodeByValue(nodeValue);

            if (!checkedNode.data[leafKey]) {
              _this5.lazyLoad(checkedNode, function () {
                _this5.handleExpand(checkedNode);
              });
            }

            if (checkedNode.data[leafKey] && _this5.config.lazy) {
              _this5.$emit('lazy-loaded', _this5.checkedValue);
            }

            if (_this5.loadCount === _this5.checkedValue.length) {
              _this5.$parent.computePresentText();
            }
          }
        }

        onFullfiled && onFullfiled(dataList);
      };

      config.lazyLoad(node, resolve);
    },

    /**
     * public methods
     */
    calculateMultiCheckedValue: function calculateMultiCheckedValue() {
      this.checkedValue = this.getCheckedNodes(this.leafOnly).map(function (node) {
        return node.getValueByOption();
      });
    },
    scrollIntoView: function scrollIntoView() {
      if (this.$isServer) return;
      var menus = this.$refs.menu || [];
      menus.forEach(function (menu) {
        var menuElement = menu.$el;

        if (menuElement) {
          var container = menuElement.querySelector('.elp-cascader-menu__wrap');
          var activeNode = menuElement.querySelector('.elp-cascader-node.is-active') || menuElement.querySelector('.elp-cascader-node.in-active-path');

          scroll_into_view_scrollIntoView(container, activeNode);
        }
      });
    },
    getNodeByValue: function getNodeByValue(val) {
      return this.store.getNodeByValue(val);
    },
    getFlattedNodes: function getFlattedNodes(leafOnly) {
      var cached = !this.config.lazy;
      return this.store.getFlattedNodes(leafOnly, cached);
    },
    getCheckedNodes: function getCheckedNodes(leafOnly) {
      var checkedValue = this.checkedValue,
          multiple = this.multiple;

      if (multiple) {
        var nodes = this.getFlattedNodes(leafOnly);
        return nodes.filter(function (node) {
          return node.checked;
        });
      } else {
        return isEmpty(checkedValue) ? [] : [this.getNodeByValue(checkedValue)];
      }
    },
    clearCheckedNodes: function clearCheckedNodes() {
      var config = this.config,
          leafOnly = this.leafOnly;
      var multiple = config.multiple,
          emitPath = config.emitPath;

      if (multiple) {
        this.getCheckedNodes(leafOnly).filter(function (node) {
          return !node.isDisabled;
        }).forEach(function (node) {
          return node.doCheck(false);
        });
        this.calculateMultiCheckedValue();
      } else {
        this.checkedValue = emitPath ? [] : null;
      }
    },
    generateExcessMenus: function generateExcessMenus() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var expandPanels = this.config.expandPanels || 1;
      return new Array(expandPanels - size > 0 ? expandPanels - size : 0).fill([]);
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_panelvue_type_script_lang_js_ = (cascader_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-panel.vue





/* normalize component */

var cascader_panel_component = normalizeComponent(
  src_cascader_panelvue_type_script_lang_js_,
  cascader_panelvue_type_template_id_142c1488_render,
  cascader_panelvue_type_template_id_142c1488_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_cascader_panel = (cascader_panel_component.exports);
// CONCATENATED MODULE: ./packages/cascader-panel/index.js



src_cascader_panel.install = function (Vue) {
  return Vue.component(src_cascader_panel.name, src_cascader_panel);
};

/* harmony default export */ var packages_cascader_panel = (src_cascader_panel);
// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/popup/popup-manager.js



let hasModal = false;
let hasInitZIndex = false;
let popup_manager_zIndex;

const getModal = function() {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return;
  let modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function(event) {
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function() {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }

  return modalDom;
};

const instances = {};

const PopupManager = {
  modalFade: true,

  getInstance: function(id) {
    return instances[id];
  },

  register: function(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },

  deregister: function(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },

  nextZIndex: function() {
    return PopupManager.zIndex++;
  },

  modalStack: [],

  doOnModalClick: function() {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem) return;

    const instance = PopupManager.getInstance(topItem.id);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },

  openModal: function(id, zIndex, dom, modalClass, modalFade) {
    if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;

    const modalStack = this.modalStack;

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    const modalDom = getModal();

    addClass(modalDom, 'v-modal');
    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter');
    }
    if (modalClass) {
      let classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(item => addClass(modalDom, item));
    }
    setTimeout(() => {
      removeClass(modalDom, 'v-modal-enter');
    }, 200);

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = '';

    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
  },

  closeModal: function(id) {
    const modalStack = this.modalStack;
    const modalDom = getModal();

    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          let classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach(item => removeClass(modalDom, item));
        }

        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, 'v-modal-leave');
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = 'none';
          PopupManager.modalDom = undefined;
        }
        removeClass(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get() {
    if (!hasInitZIndex) {
      popup_manager_zIndex = popup_manager_zIndex || (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$ELEMENT || {}).zIndex || 2000;
      hasInitZIndex = true;
    }
    return popup_manager_zIndex;
  },
  set(value) {
    popup_manager_zIndex = value;
  }
});

const getTopPopup = function() {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return;
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup) return;
    const instance = PopupManager.getInstance(topPopup.id);

    return instance;
  }
};

if (!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      const topPopup = getTopPopup();

      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose
          ? topPopup.handleClose()
          : (topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close());
      }
    }
  });
}

/* harmony default export */ var popup_manager = (PopupManager);

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/scrollbar-width.js


let scrollBarWidth;

/* harmony default export */ var scrollbar_width = (function() {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  const outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
});;

// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/popup/index.js






let idSeed = 1;

let popup_scrollBarWidth;

/* harmony default export */ var popup = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },

  beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    popup_manager.register(this._popupId, this);
  },

  beforeDestroy() {
    popup_manager.deregister(this._popupId);
    popup_manager.closeModal(this._popupId);

    this.restoreBodyStyle();
  },

  data() {
    return {
      opened: false,
      bodyPaddingRight: null,
      computedBodyPaddingRight: 0,
      withoutHiddenClass: true,
      rendered: false
    };
  },

  watch: {
    visible(val) {
      if (val) {
        if (this._opening) return;
        if (!this.rendered) {
          this.rendered = true;
          external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
            this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },

  methods: {
    open(options) {
      if (!this.rendered) {
        this.rendered = true;
      }

      const props = merge({}, this.$props || this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);

      const openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(() => {
          this._openTimer = null;
          this.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },

    doOpen(props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;

      this._opening = true;

      const dom = this.$el;

      const modal = props.modal;

      const zIndex = props.zIndex;
      if (zIndex) {
        popup_manager.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          popup_manager.closeModal(this._popupId);
          this._closing = false;
        }
        popup_manager.openModal(this._popupId, popup_manager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
        if (props.lockScroll) {
          this.withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden');
          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10);
          }
          popup_scrollBarWidth = scrollbar_width();
          let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          let bodyOverflowY = getStyle(document.body, 'overflowY');
          if (popup_scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + popup_scrollBarWidth + 'px';
          }
          addClass(document.body, 'el-popup-parent--hidden');
        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute';
      }

      dom.style.zIndex = popup_manager.nextZIndex();
      this.opened = true;

      this.onOpen && this.onOpen();

      this.doAfterOpen();
    },

    doAfterOpen() {
      this._opening = false;
    },

    close() {
      if (this.willClose && !this.willClose()) return;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);

      const closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(() => {
          this._closeTimer = null;
          this.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },

    doClose() {
      this._closing = true;

      this.onClose && this.onClose();

      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }

      this.opened = false;

      this.doAfterClose();
    },

    doAfterClose() {
      popup_manager.closeModal(this._popupId);
      this._closing = false;
    },

    restoreBodyStyle() {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight;
        removeClass(document.body, 'el-popup-parent--hidden');
      }
      this.withoutHiddenClass = true;
    }
  }
});



// CONCATENATED MODULE: ./node_modules/element-ui/src/utils/vue-popper.js



const PopperJS = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer ? function() {} : __webpack_require__("4ff4");
const stop = e => e.stopPropagation();

/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
/* harmony default export */ var vue_popper = ({
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: {},
    popper: {},
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    arrowOffset: {
      type: Number,
      default: 35
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default() {
        return {
          gpuAcceleration: false
        };
      }
    }
  },

  data() {
    return {
      showPopper: false,
      currentPlacement: ''
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.showPopper = val;
        this.$emit('input', val);
      }
    },

    showPopper(val) {
      if (this.disabled) return;
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },

  methods: {
    createPopper() {
      if (this.$isServer) return;
      this.currentPlacement = this.currentPlacement || this.placement;
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }

      const options = this.popperOptions;
      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!reference &&
        this.$slots.reference &&
        this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!popper || !reference) return;
      if (this.visibleArrow) this.appendArrow(popper);
      if (this.appendToBody) document.body.appendChild(this.popperElm);
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      options.placement = this.currentPlacement;
      options.offset = this.offset;
      options.arrowOffset = this.arrowOffset;
      this.popperJS = new PopperJS(reference, popper, options);
      this.popperJS.onCreate(_ => {
        this.$emit('created', this);
        this.resetTransformOrigin();
        this.$nextTick(this.updatePopper);
      });
      if (typeof options.onUpdate === 'function') {
        this.popperJS.onUpdate(options.onUpdate);
      }
      this.popperJS._popper.style.zIndex = popup_manager.nextZIndex();
      this.popperElm.addEventListener('click', stop);
    },

    updatePopper() {
      const popperJS = this.popperJS;
      if (popperJS) {
        popperJS.update();
        if (popperJS._popper) {
          popperJS._popper.style.zIndex = popup_manager.nextZIndex();
        }
      } else {
        this.createPopper();
      }
    },

    doDestroy(forceDestroy) {
      /* istanbul ignore if */
      if (!this.popperJS || (this.showPopper && !forceDestroy)) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },

    destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },

    resetTransformOrigin() {
      if (!this.transformOrigin) return;
      let placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
      let origin = placementMap[placement];
      this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string'
        ? this.transformOrigin
        : ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
    },

    appendArrow(element) {
      let hash;
      if (this.appended) {
        return;
      }

      this.appended = true;

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      const arrow = document.createElement('div');

      if (hash) {
        arrow.setAttribute(hash, '');
      }
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    }
  },

  beforeDestroy() {
    this.doDestroy(true);
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop);
      document.body.removeChild(this.popperElm);
    }
  },

  // call destroy in keep-alive mode
  deactivated() {
    this.$options.beforeDestroy[0].call(this);
  }
});

// CONCATENATED MODULE: ./packages/cascader/src/constant.js


var MigratingProps = {
  expandTrigger: {
    type: String,
    newProp: 'expandTrigger'
  },
  changeOnSelect: {
    type: Boolean,
    newProp: 'checkStrictly'
  },
  hoverThreshold: {
    type: Number,
    newProp: 'hoverThreshold'
  }
};
var PopperMixin = {
  data: vue_popper.data,
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    offset: vue_popper.props.offset,
    arrowOffset: vue_popper.props.arrowOffset,
    appendToBody: vue_popper.props.appendToBody,
    popperOptions: vue_popper.props.popperOptions,
    boundariesPadding: vue_popper.props.boundariesPadding
  },
  methods: vue_popper.methods,
  beforeDestroy: vue_popper.beforeDestroy
};
var InputSizeMap = {
  medium: 36,
  small: 32,
  mini: 28
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// element-ui














var cascadervue_type_script_lang_js_KeyCode = aria_utils.keys;
/* harmony default export */ var cascadervue_type_script_lang_js_ = ({
  name: 'ElpCascader',
  directives: {
    Clickoutside: clickoutside
  },
  mixins: [PopperMixin, emitter, migrating],
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  components: {
    ElTag: packages_tag,
    ElInput: packages_input,
    Scrollbar: lib_scrollbar_default.a,
    ElpCascaderPanel: packages_cascader_panel
  },
  props: {
    value: {},
    options: Array,
    props: Object,
    size: String,
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    separator: {
      type: String,
      default: ' / '
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    popperClass: String,
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    remoteInitMethods: {
      type: Function
    }
  },
  data: function data() {
    return {
      suggestions: [],
      presentTags: [],
      checkedNodes: [],
      filtering: false,
      inputValue: null,
      presentText: null,
      inputHover: false,
      pressDeleteCount: 0,
      inputInitialHeight: 0,
      dropDownVisible: false,
      checkedValue: this.value || null
    };
  },
  computed: {
    realSize: function realSize() {
      var _elFormItemSize = (this.elFormItem || {}).elFormItemSize;
      return this.size || _elFormItemSize || (this.$ELEMENT || {}).size;
    },
    tagSize: function tagSize() {
      return ['small', 'mini'].indexOf(this.realSize) > -1 ? 'mini' : 'small';
    },
    isDisabled: function isDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    config: function config() {
      var config = this.props || {};
      var $attrs = this.$attrs;
      Object.keys(MigratingProps).forEach(function (oldProp) {
        var _MigratingProps$oldPr = MigratingProps[oldProp],
            newProp = _MigratingProps$oldPr.newProp,
            type = _MigratingProps$oldPr.type;
        var oldValue = $attrs[oldProp] || $attrs[kebabCase(oldProp)];

        if (isDef(oldProp) && !isDef(config[newProp])) {
          if (type === Boolean && oldValue === '') {
            oldValue = true;
          }

          config[newProp] = oldValue;
        }
      });
      return config;
    },
    multiple: function multiple() {
      return this.config.multiple;
    },
    leafOnly: function leafOnly() {
      return !this.config.checkStrictly;
    },
    readonly: function readonly() {
      return !this.filterable || this.multiple;
    },
    clearBtnVisible: function clearBtnVisible() {
      if (!this.clearable || this.isDisabled || this.filtering || !this.inputHover) {
        return false;
      }

      return this.multiple ? !!this.checkedNodes.filter(function (node) {
        return !node.isDisabled;
      }).length : !!this.presentText;
    },
    panel: function panel() {
      return this.$refs.panel;
    }
  },
  watch: {
    disabled: function disabled() {
      this.computePresentContent();
    },
    value: function value(val) {
      if (!isEqual(val, this.checkedValue)) {
        this.checkedValue = val;
        this.computePresentContent();
      }
    },
    checkedValue: function checkedValue(val) {
      var value = this.value,
          dropDownVisible = this.dropDownVisible;
      var _this$config = this.config,
          checkStrictly = _this$config.checkStrictly,
          multiple = _this$config.multiple;

      if (!isEqual(val, value) || isUndefined(value)) {
        this.computePresentContent(); // hide dropdown when single mode

        if (!multiple && !checkStrictly && dropDownVisible) {
          this.toggleDropDownVisible(false);
        }

        this.$emit('input', val);
        this.$emit('change', val);
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      }
    },
    options: {
      handler: function handler() {
        this.$nextTick(this.computePresentContent);
      },
      deep: true
    },
    presentText: function presentText(val) {
      // Fix: the first search term cannot be retained when 'multiple'
      if (!this.multiple) this.inputValue = val;
    },
    presentTags: function presentTags(val, oldVal) {
      if (this.multiple && (val.length || oldVal.length)) {
        this.$nextTick(this.updateStyle);
      }
    },
    filtering: function filtering() {
      this.$nextTick(this.updatePopper);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    if (input && input.$el) {
      this.inputInitialHeight = input.$el.offsetHeight || InputSizeMap[this.realSize] || 40;
    }

    if (!isEmpty(this.value)) {
      this.computePresentContent();
    }

    this.filterHandler = debounce_default()(this.debounce, function () {
      var inputValue = _this.inputValue;

      if (!inputValue) {
        _this.filtering = false;
        return;
      }

      var before = _this.beforeFilter(inputValue);

      if (before && before.then) {
        before.then(_this.getSuggestions);
      } else if (before !== false) {
        _this.getSuggestions();
      } else {
        _this.filtering = false;
      }
    });
    addResizeListener(this.$el, this.updateStyle);
  },
  beforeDestroy: function beforeDestroy() {
    removeResizeListener(this.$el, this.updateStyle);
  },
  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'expand-trigger': 'expand-trigger is removed, use `props.expandTrigger` instead.',
          'change-on-select': 'change-on-select is removed, use `props.checkStrictly` instead.',
          'hover-threshold': 'hover-threshold is removed, use `props.hoverThreshold` instead'
        },
        events: {
          'active-item-change': 'active-item-change is renamed to expand-change'
        }
      };
    },
    toggleDropDownVisible: function toggleDropDownVisible(visible) {
      var _this2 = this;

      if (this.isDisabled) return;
      var dropDownVisible = this.dropDownVisible;
      var input = this.$refs.input;
      visible = isDef(visible) ? visible : !dropDownVisible;

      if (visible !== dropDownVisible) {
        this.dropDownVisible = visible;

        if (visible) {
          this.$nextTick(function () {
            _this2.updatePopper();

            _this2.panel.scrollIntoView();
          });
        }

        input.$refs.input.setAttribute('aria-expanded', visible);
        this.$emit('visible-change', visible);
      }
    },
    handleDropdownLeave: function handleDropdownLeave() {
      this.filtering = false;
      this.inputValue = this.presentText;
    },
    handleKeyDown: function handleKeyDown(event) {
      switch (event.keyCode) {
        case cascadervue_type_script_lang_js_KeyCode.enter:
          this.toggleDropDownVisible();
          break;

        case cascadervue_type_script_lang_js_KeyCode.down:
          this.toggleDropDownVisible(true);
          this.focusFirstNode();
          event.preventDefault();
          break;

        case cascadervue_type_script_lang_js_KeyCode.esc:
        case cascadervue_type_script_lang_js_KeyCode.tab:
          this.toggleDropDownVisible(false);
          break;
      }
    },
    handleFocus: function handleFocus(e) {
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.$emit('blur', e);
    },
    handleInput: function handleInput(val, event) {
      !this.dropDownVisible && this.toggleDropDownVisible(true);
      if (event && event.isComposing) return;

      if (val) {
        this.filterHandler();
      } else {
        this.filtering = false;
      }
    },
    handleClear: function handleClear() {
      this.presentText = '';
      this.panel.clearCheckedNodes();
    },
    handleExpandChange: function handleExpandChange(value) {
      this.$nextTick(this.updatePopper.bind(this));
      this.$emit('expand-change', value);
      this.$emit('active-item-change', value); // Deprecated
    },
    handleLazyLoaded: function handleLazyLoaded(value) {
      this.$emit('lazy-loaded', value);
    },
    focusFirstNode: function focusFirstNode() {
      var _this3 = this;

      this.$nextTick(function () {
        var filtering = _this3.filtering;
        var _this3$$refs = _this3.$refs,
            popper = _this3$$refs.popper,
            suggestionPanel = _this3$$refs.suggestionPanel;
        var firstNode = null;

        if (filtering && suggestionPanel) {
          firstNode = suggestionPanel.$el.querySelector('.elp-cascader__suggestion-item');
        } else {
          var firstMenu = popper.querySelector('.elp-cascader-menu');
          firstNode = firstMenu.querySelector('.elp-cascader-node[tabindex="-1"]');
        }

        if (firstNode) {
          firstNode.focus();
          !filtering && firstNode.click();
        }
      });
    },
    computePresentContent: function computePresentContent() {
      var _this4 = this;

      // nextTick is required, because checked nodes may not change right now
      this.$nextTick(function () {
        if (_this4.config.multiple) {
          _this4.computePresentTags();

          _this4.presentText = _this4.presentTags.length ? ' ' : null;
        } else {
          _this4.computePresentText();
        }
      });
    },
    computePresentText: function computePresentText() {
      var checkedValue = this.checkedValue,
          config = this.config;

      if (!isEmpty(checkedValue)) {
        var node = this.panel.getNodeByValue(checkedValue);

        if (node && (config.checkStrictly || node.isLeaf)) {
          this.presentText = node.getText(this.showAllLevels, this.separator);
          return;
        }
      }

      this.presentText = null;
    },
    computePresentTags: function computePresentTags() {
      var isDisabled = this.isDisabled,
          leafOnly = this.leafOnly,
          showAllLevels = this.showAllLevels,
          separator = this.separator,
          collapseTags = this.collapseTags;
      var checkedNodes = this.getCheckedNodes(leafOnly);
      var tags = [];

      var genTag = function genTag(node) {
        return {
          node: node,
          key: node.uid,
          text: node.getText(showAllLevels, separator),
          hitState: false,
          closable: !isDisabled && !node.isDisabled
        };
      };

      if (checkedNodes.length) {
        var _checkedNodes = _toArray(checkedNodes),
            first = _checkedNodes[0],
            rest = _checkedNodes.slice(1);

        var restCount = rest.length;
        tags.push(genTag(first));

        if (restCount) {
          if (collapseTags) {
            tags.push({
              key: -1,
              text: "+ ".concat(restCount),
              closable: false
            });
          } else {
            rest.forEach(function (node) {
              return tags.push(genTag(node));
            });
          }
        }
      }

      this.checkedNodes = checkedNodes;
      this.presentTags = tags;
    },
    getSuggestions: function getSuggestions() {
      var _this5 = this;

      var filterMethod = this.filterMethod;

      if (!isFunction(filterMethod)) {
        filterMethod = function filterMethod(node, keyword) {
          return node.text.includes(keyword);
        };
      }

      var suggestions = this.panel.getFlattedNodes(this.leafOnly).filter(function (node) {
        if (node.isDisabled) return false;
        node.text = node.getText(_this5.showAllLevels, _this5.separator) || '';
        return filterMethod(node, _this5.inputValue);
      });

      if (this.multiple) {
        this.presentTags.forEach(function (tag) {
          tag.hitState = false;
        });
      } else {
        suggestions.forEach(function (node) {
          node.checked = isEqual(_this5.checkedValue, node.getValueByOption());
        });
      }

      this.filtering = true;
      this.suggestions = suggestions;
      this.$nextTick(this.updatePopper);
    },
    handleSuggestionKeyDown: function handleSuggestionKeyDown(event) {
      var keyCode = event.keyCode,
          target = event.target;

      switch (keyCode) {
        case cascadervue_type_script_lang_js_KeyCode.enter:
          target.click();
          break;

        case cascadervue_type_script_lang_js_KeyCode.up:
          {
            var prev = target.previousElementSibling;
            prev && prev.focus();
            break;
          }

        case cascadervue_type_script_lang_js_KeyCode.down:
          {
            var next = target.nextElementSibling;
            next && next.focus();
            break;
          }

        case cascadervue_type_script_lang_js_KeyCode.esc:
        case cascadervue_type_script_lang_js_KeyCode.tab:
          this.toggleDropDownVisible(false);
          break;
      }
    },
    handleDelete: function handleDelete() {
      var inputValue = this.inputValue,
          pressDeleteCount = this.pressDeleteCount,
          presentTags = this.presentTags;
      var lastIndex = presentTags.length - 1;
      var lastTag = presentTags[lastIndex];
      this.pressDeleteCount = inputValue ? 0 : pressDeleteCount + 1;
      if (!lastTag) return;

      if (this.pressDeleteCount) {
        if (lastTag.hitState) {
          this.deleteTag(lastIndex);
        } else {
          lastTag.hitState = true;
        }
      }
    },
    handleSuggestionClick: function handleSuggestionClick(index) {
      var multiple = this.multiple;
      var targetNode = this.suggestions[index];

      if (multiple) {
        var checked = targetNode.checked;
        targetNode.doCheck(!checked);
        this.panel.calculateMultiCheckedValue();
      } else {
        this.checkedValue = targetNode.getValueByOption();
        this.toggleDropDownVisible(false);
      }
    },
    deleteTag: function deleteTag(index) {
      var checkedValue = this.checkedValue;
      var val = checkedValue[index];
      this.checkedValue = checkedValue.filter(function (n, i) {
        return i !== index;
      });
      this.$emit('remove-tag', val);
    },
    updateStyle: function updateStyle() {
      var $el = this.$el,
          inputInitialHeight = this.inputInitialHeight;
      if (this.$isServer || !$el) return;
      var suggestionPanel = this.$refs.suggestionPanel;
      var inputInner = $el.querySelector('.el-input__inner');
      if (!inputInner) return;
      var tags = $el.querySelector('.elp-cascader__tags');
      var suggestionPanelEl = null;

      if (suggestionPanel && (suggestionPanelEl = suggestionPanel.$el)) {
        var suggestionList = suggestionPanelEl.querySelector('.elp-cascader__suggestion-list');
        suggestionList.style.minWidth = inputInner.offsetWidth + 'px';
      }

      if (tags) {
        var offsetHeight = tags.offsetHeight;
        var height = Math.max(offsetHeight + 4, inputInitialHeight) + 'px';
        inputInner.style.height = height;
        this.updatePopper();
      }
    },

    /**
     * public methods
     */
    getCheckedNodes: function getCheckedNodes(leafOnly) {
      return this.panel.getCheckedNodes(leafOnly);
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascadervue_type_script_lang_js_ = (cascadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue





/* normalize component */

var cascader_component = normalizeComponent(
  src_cascadervue_type_script_lang_js_,
  cascadervue_type_template_id_4d7f0252_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_cascader = (cascader_component.exports);
// CONCATENATED MODULE: ./packages/cascader/index.js



src_cascader.install = function (Vue) {
  return Vue.component(src_cascader.name, src_cascader);
};

/* harmony default export */ var packages_cascader = (src_cascader);
// CONCATENATED MODULE: ./packages/index.js



// 全量注册组件


var components = [packages_cascader, packages_cascader_panel];

var install = function install(Vue) {
  if (install.installed) return;
  components.forEach(function (Component) {
    Vue.component(Component.name, Component);
  });
}; //  如果浏览器环境且拥有全局Vue，则自动安装组件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  install: install,
  Cascader: packages_cascader,
  CascaderPanel: packages_cascader_panel
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=elp-cascader.umd.js.map