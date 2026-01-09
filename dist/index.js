'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0 = require('react');
var logging = require('@qwickapps/logging');
var reactRouterDom = require('react-router-dom');
var material = require('@mui/material');
var iconsMaterial = require('@mui/icons-material');
var reactFramework = require('@qwickapps/react-framework');
var supabaseJs = require('@supabase/supabase-js');
var auth = require('@qwickapps/auth');

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_development = {};

(function () {
  function getComponentNameFromType(type) {
    if (null == type) return null;
    if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
    if ("string" === typeof type) return type;
    switch (type) {
      case REACT_FRAGMENT_TYPE:
        return "Fragment";
      case REACT_PORTAL_TYPE:
        return "Portal";
      case REACT_PROFILER_TYPE:
        return "Profiler";
      case REACT_STRICT_MODE_TYPE:
        return "StrictMode";
      case REACT_SUSPENSE_TYPE:
        return "Suspense";
      case REACT_SUSPENSE_LIST_TYPE:
        return "SuspenseList";
    }
    if ("object" === _typeof(type)) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return (type.displayName || "Context") + ".Provider";
      case REACT_CONSUMER_TYPE:
        return (type._context.displayName || "Context") + ".Consumer";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
        return type;
      case REACT_MEMO_TYPE:
        return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {}
    }
    return null;
  }
  function testStringCoercion(value) {
    return "" + value;
  }
  function checkKeyStringCoercion(value) {
    try {
      testStringCoercion(value);
      var JSCompiler_inline_result = !1;
    } catch (e) {
      JSCompiler_inline_result = !0;
    }
    if (JSCompiler_inline_result) {
      JSCompiler_inline_result = console;
      var JSCompiler_temp_const = JSCompiler_inline_result.error;
      var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
      JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
      return testStringCoercion(value);
    }
  }
  function disabledLog() {}
  function disableLogs() {
    if (0 === disabledDepth) {
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd;
      var props = {
        configurable: !0,
        enumerable: !0,
        value: disabledLog,
        writable: !0
      };
      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
    }
    disabledDepth++;
  }
  function reenableLogs() {
    disabledDepth--;
    if (0 === disabledDepth) {
      var props = {
        configurable: !0,
        enumerable: !0,
        writable: !0
      };
      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
    }
    0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
  }
  function describeBuiltInComponentFrame(name) {
    if (void 0 === prefix) try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = match && match[1] || "";
      suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return "\n" + prefix + name + suffix;
  }
  function describeNativeComponentFrame(fn, construct) {
    if (!fn || reentry) return "";
    var frame = componentFrameCache.get(fn);
    if (void 0 !== frame) return frame;
    reentry = !0;
    frame = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var previousDispatcher = null;
    previousDispatcher = ReactSharedInternals.H;
    ReactSharedInternals.H = null;
    disableLogs();
    try {
      var RunInRootFrame = {
        DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
          try {
            if (construct) {
              var Fake = function Fake() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function set() {
                  throw Error();
                }
              });
              if ("object" === (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  var control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x$0) {
                  control = x$0;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x$1) {
                control = x$1;
              }
              (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function () {});
            }
          } catch (sample) {
            if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
          }
          return [null, null];
        }
      };
      RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
      namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
        sampleStack = _RunInRootFrame$Deter[0],
        controlStack = _RunInRootFrame$Deter[1];
      if (sampleStack && controlStack) {
        var sampleLines = sampleStack.split("\n"),
          controlLines = controlStack.split("\n");
        for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
        for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");) _RunInRootFrame$Deter++;
        if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];) _RunInRootFrame$Deter--;
        for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--) if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
          if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
            do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
              fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
              "function" === typeof fn && componentFrameCache.set(fn, _frame);
              return _frame;
            } while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
          }
          break;
        }
      }
    } finally {
      reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
    }
    sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
    "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
    return sampleLines;
  }
  function describeUnknownElementTypeFrameInDEV(type) {
    if (null == type) return "";
    if ("function" === typeof type) {
      var prototype = type.prototype;
      return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
    }
    if ("string" === typeof type) return describeBuiltInComponentFrame(type);
    switch (type) {
      case REACT_SUSPENSE_TYPE:
        return describeBuiltInComponentFrame("Suspense");
      case REACT_SUSPENSE_LIST_TYPE:
        return describeBuiltInComponentFrame("SuspenseList");
    }
    if ("object" === _typeof(type)) switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return type = describeNativeComponentFrame(type.render, !1), type;
      case REACT_MEMO_TYPE:
        return describeUnknownElementTypeFrameInDEV(type.type);
      case REACT_LAZY_TYPE:
        prototype = type._payload;
        type = type._init;
        try {
          return describeUnknownElementTypeFrameInDEV(type(prototype));
        } catch (x) {}
    }
    return "";
  }
  function getOwner() {
    var dispatcher = ReactSharedInternals.A;
    return null === dispatcher ? null : dispatcher.getOwner();
  }
  function hasValidKey(config) {
    if (hasOwnProperty.call(config, "key")) {
      var getter = Object.getOwnPropertyDescriptor(config, "key").get;
      if (getter && getter.isReactWarning) return !1;
    }
    return void 0 !== config.key;
  }
  function defineKeyPropWarningGetter(props, displayName) {
    function warnAboutAccessingKey() {
      specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
    }
    warnAboutAccessingKey.isReactWarning = !0;
    Object.defineProperty(props, "key", {
      get: warnAboutAccessingKey,
      configurable: !0
    });
  }
  function elementRefGetterWithDeprecationWarning() {
    var componentName = getComponentNameFromType(this.type);
    didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
    componentName = this.props.ref;
    return void 0 !== componentName ? componentName : null;
  }
  function ReactElement(type, key, self, source, owner, props) {
    self = props.ref;
    type = {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key,
      props: props,
      _owner: owner
    };
    null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
      enumerable: !1,
      get: elementRefGetterWithDeprecationWarning
    }) : Object.defineProperty(type, "ref", {
      enumerable: !1,
      value: null
    });
    type._store = {};
    Object.defineProperty(type._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: 0
    });
    Object.defineProperty(type, "_debugInfo", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: null
    });
    Object.freeze && (Object.freeze(type.props), Object.freeze(type));
    return type;
  }
  function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
    if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === _typeof(type) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
      var children = config.children;
      if (void 0 !== children) if (isStaticChildren) {
        if (isArrayImpl(children)) {
          for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren], type);
          Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
      } else validateChildKeys(children, type);
    } else {
      children = "";
      if (void 0 === type || "object" === _typeof(type) && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
      null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = _typeof(type);
      console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
    }
    if (hasOwnProperty.call(config, "key")) {
      children = getComponentNameFromType(type);
      var keys = Object.keys(config).filter(function (k) {
        return "key" !== k;
      });
      isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
      didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
    }
    children = null;
    void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
    hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
    if ("key" in config) {
      maybeKey = {};
      for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
    return ReactElement(type, children, self, source, getOwner(), maybeKey);
  }
  function validateChildKeys(node, parentType) {
    if ("object" === _typeof(node) && node && node.$$typeof !== REACT_CLIENT_REFERENCE) if (isArrayImpl(node)) for (var i = 0; i < node.length; i++) {
      var child = node[i];
      isValidElement(child) && validateExplicitKey(child, parentType);
    } else if (isValidElement(node)) node._store && (node._store.validated = 1);else if (null === node || "object" !== _typeof(node) ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for (; !(node = i.next()).done;) isValidElement(node.value) && validateExplicitKey(node.value, parentType);
  }
  function isValidElement(object) {
    return "object" === _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function validateExplicitKey(element, parentType) {
    if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
      ownerHasKeyUseWarning[parentType] = !0;
      var childOwner = "";
      element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
      var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
      ReactSharedInternals.getCurrentStack = function () {
        var stack = describeUnknownElementTypeFrameInDEV(element.type);
        prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
        return stack;
      };
      console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
      ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
    }
  }
  function getCurrentComponentErrorInfo(parentType) {
    var info = "",
      owner = getOwner();
    owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
    info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
    return info;
  }
  var React = require$$0,
    REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
    REACT_PORTAL_TYPE = Symbol.for("react.portal"),
    REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
    REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
    REACT_PROFILER_TYPE = Symbol.for("react.profiler");
  var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
    REACT_CONTEXT_TYPE = Symbol.for("react.context"),
    REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
    REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
    REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
    REACT_MEMO_TYPE = Symbol.for("react.memo"),
    REACT_LAZY_TYPE = Symbol.for("react.lazy"),
    REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
    MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
    REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
    ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    assign = Object.assign,
    REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
    isArrayImpl = Array.isArray,
    disabledDepth = 0,
    prevLog,
    prevInfo,
    prevWarn,
    prevError,
    prevGroup,
    prevGroupCollapsed,
    prevGroupEnd;
  disabledLog.__reactDisabledLog = !0;
  var prefix,
    suffix,
    reentry = !1;
  var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
  var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
    specialPropKeyWarningShown;
  var didWarnAboutElementRef = {};
  var didWarnAboutKeySpread = {},
    ownerHasKeyUseWarning = {};
  reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
    return jsxDEVImpl(type, config, maybeKey, !1, source, self);
  };
  reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
    return jsxDEVImpl(type, config, maybeKey, !0, source, self);
  };
})();

{
  jsxRuntime.exports = reactJsxRuntime_development;
}
var jsxRuntimeExports = jsxRuntime.exports;

var logger$2 = logging.getLogger('AuthProvider');
// Create auth context
var AuthContext = /*#__PURE__*/require$$0.createContext(null);
/**
 * AuthProvider component
 *
 * Provides authentication context and state management for child components.
 * Injects a custom auth service client and exposes authentication actions and state.
 *
 * @param {AuthProviderProps} props - Provider props including children, authServiceClient, and optional callbacks.
 * @returns {JSX.Element} React context provider for authentication.
 */
function AuthProvider(_a) {
  var _this = this;
  var children = _a.children,
    authServiceClient = _a.authServiceClient,
    onAuthStateChange = _a.onAuthStateChange,
    onError = _a.onError;
  var _b = require$$0.useState({
      user: null,
      session: null,
      loading: true,
      error: null,
      initialized: false
    }),
    state = _b[0],
    setState = _b[1];
  // Get auth service client - simple and clear
  var authService = require$$0.useState(function () {
    logger$2.debug('Using provided auth service client');
    return authServiceClient;
  })[0];
  // Update state helper
  var updateState = require$$0.useCallback(function (updates) {
    setState(function (prevState) {
      var newState = _assign(_assign({}, prevState), updates);
      // Notify parent component of auth state changes
      if (onAuthStateChange) {
        onAuthStateChange(newState);
      }
      return newState;
    });
  }, [onAuthStateChange]);
  // Handle errors
  var handleError = require$$0.useCallback(function (error) {
    logger$2.error('Auth error occurred', {
      error: error
    });
    updateState({
      error: error,
      loading: false
    });
    if (onError) {
      onError(error);
    }
  }, [updateState, onError]);
  // Clear error
  var clearError = require$$0.useCallback(function () {
    updateState({
      error: null
    });
  }, [updateState]);
  // Initialize auth provider and set up listeners
  require$$0.useEffect(function () {
    logger$2.debug('Initializing auth provider');
    var unsubscribe = null;
    var initialize = function initialize() {
      return __awaiter(_this, void 0, void 0, function () {
        var session, error_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2,, 3]);
              return [4 /*yield*/, authService.getCurrentSession()];
            case 1:
              session = _a.sent();
              logger$2.debug('Initial session retrieved', {
                hasSession: !!session
              });
              updateState({
                user: (session === null || session === void 0 ? void 0 : session.user) || null,
                session: session,
                loading: false,
                initialized: true,
                error: null
              });
              // Set up auth state change listener
              unsubscribe = authService.onAuthStateChange(function (session, error) {
                if (error) {
                  handleError(error);
                } else {
                  logger$2.debug('Auth state changed', {
                    hasSession: !!session
                  });
                  updateState({
                    user: (session === null || session === void 0 ? void 0 : session.user) || null,
                    session: session,
                    loading: false,
                    error: null
                  });
                }
              });
              return [3 /*break*/, 3];
            case 2:
              error_1 = _a.sent();
              logger$2.error('Failed to initialize auth provider', {
                error: error_1
              });
              handleError({
                type: 'UNKNOWN_ERROR',
                message: 'Failed to initialize authentication',
                details: error_1
              });
              return [3 /*break*/, 3];
            case 3:
              return [2 /*return*/];
          }
        });
      });
    };
    initialize();
    return function () {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [authService, updateState, handleError]);
  // Auth actions
  var signIn = require$$0.useCallback(function (credentials) {
    return __awaiter(_this, void 0, void 0, function () {
      var result, error_2, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$2.debug('Sign in requested', {
              email: credentials.email
            });
            updateState({
              loading: true,
              error: null
            });
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, authService.signIn(credentials)];
          case 2:
            result = _a.sent();
            if (result.error) {
              handleError(result.error);
            } else {
              logger$2.debug('Sign in successful');
              // State will be updated via auth state change listener
            }
            return [2 /*return*/, result];
          case 3:
            error_2 = _a.sent();
            authError = {
              type: 'UNKNOWN_ERROR',
              message: 'Sign in failed',
              details: error_2
            };
            handleError(authError);
            return [2 /*return*/, {
              data: null,
              error: authError
            }];
          case 4:
            updateState({
              loading: false
            });
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  }, [authService, updateState, handleError]);
  var signUp = require$$0.useCallback(function (credentials) {
    return __awaiter(_this, void 0, void 0, function () {
      var result, error_3, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$2.debug('Sign up requested', {
              email: credentials.email
            });
            updateState({
              loading: true,
              error: null
            });
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, authService.signUp(credentials)];
          case 2:
            result = _a.sent();
            if (result.error) {
              handleError(result.error);
            } else {
              logger$2.debug('Sign up successful');
            }
            return [2 /*return*/, result];
          case 3:
            error_3 = _a.sent();
            authError = {
              type: 'UNKNOWN_ERROR',
              message: 'Sign up failed',
              details: error_3
            };
            handleError(authError);
            return [2 /*return*/, {
              data: null,
              error: authError
            }];
          case 4:
            updateState({
              loading: false
            });
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  }, [authService, updateState, handleError]);
  var signOut = require$$0.useCallback(function () {
    return __awaiter(_this, void 0, void 0, function () {
      var result, error_4, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$2.debug('Sign out requested');
            updateState({
              loading: true,
              error: null
            });
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, authService.signOut()];
          case 2:
            result = _a.sent();
            if (result.error) {
              handleError(result.error);
            } else {
              logger$2.debug('Sign out successful');
              // State will be updated via auth state change listener
            }
            return [2 /*return*/, result];
          case 3:
            error_4 = _a.sent();
            authError = {
              type: 'UNKNOWN_ERROR',
              message: 'Sign out failed',
              details: error_4
            };
            handleError(authError);
            return [2 /*return*/, {
              data: null,
              error: authError
            }];
          case 4:
            updateState({
              loading: false
            });
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  }, [authService, updateState, handleError]);
  var resetPassword = require$$0.useCallback(function (request) {
    return __awaiter(_this, void 0, void 0, function () {
      var result, error_5, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$2.debug('Password reset requested', {
              email: request.email
            });
            updateState({
              loading: true,
              error: null
            });
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, authService.resetPassword(request)];
          case 2:
            result = _a.sent();
            if (result.error) {
              handleError(result.error);
            } else {
              logger$2.debug('Password reset email sent');
            }
            return [2 /*return*/, result];
          case 3:
            error_5 = _a.sent();
            authError = {
              type: 'UNKNOWN_ERROR',
              message: 'Password reset failed',
              details: error_5
            };
            handleError(authError);
            return [2 /*return*/, {
              data: null,
              error: authError
            }];
          case 4:
            updateState({
              loading: false
            });
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  }, [authService, updateState, handleError]);
  var updateProfile = require$$0.useCallback(function (update) {
    return __awaiter(_this, void 0, void 0, function () {
      var result, error_6, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$2.debug('Profile update requested');
            updateState({
              loading: true,
              error: null
            });
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, authService.updateProfile(update)];
          case 2:
            result = _a.sent();
            if (result.error) {
              handleError(result.error);
            } else {
              logger$2.debug('Profile update successful');
              // State will be updated via auth state change listener
            }
            return [2 /*return*/, result];
          case 3:
            error_6 = _a.sent();
            authError = {
              type: 'UNKNOWN_ERROR',
              message: 'Profile update failed',
              details: error_6
            };
            handleError(authError);
            return [2 /*return*/, {
              data: null,
              error: authError
            }];
          case 4:
            updateState({
              loading: false
            });
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  }, [authService, updateState, handleError]);
  var refreshSession = require$$0.useCallback(function () {
    return __awaiter(_this, void 0, void 0, function () {
      var result, error_7, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$2.debug('Session refresh requested');
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, authService.refreshSession()];
          case 2:
            result = _a.sent();
            if (result.error) {
              handleError(result.error);
            } else {
              logger$2.debug('Session refresh successful');
              // State will be updated via auth state change listener
            }
            return [2 /*return*/, result];
          case 3:
            error_7 = _a.sent();
            authError = {
              type: 'UNKNOWN_ERROR',
              message: 'Session refresh failed',
              details: error_7
            };
            handleError(authError);
            return [2 /*return*/, {
              data: null,
              error: authError
            }];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  }, [authServiceClient, handleError]);
  var signInWithProvider = require$$0.useCallback(function (options) {
    return __awaiter(_this, void 0, void 0, function () {
      var result, error_8, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$2.debug('Social sign in requested', {
              provider: options.provider
            });
            updateState({
              loading: true,
              error: null
            });
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, authService.signInWithProvider(options)];
          case 2:
            result = _a.sent();
            if (result.error) {
              handleError(result.error);
            } else {
              logger$2.debug('Social sign in initiated');
            }
            return [2 /*return*/, result];
          case 3:
            error_8 = _a.sent();
            authError = {
              type: 'UNKNOWN_ERROR',
              message: 'Social sign in failed',
              details: error_8
            };
            handleError(authError);
            return [2 /*return*/, {
              data: null,
              error: authError
            }];
          case 4:
            updateState({
              loading: false
            });
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  }, [authService, updateState, handleError]);
  // Context value
  var contextValue = {
    user: state.user,
    session: state.session,
    loading: state.loading,
    error: state.error,
    initialized: state.initialized,
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    resetPassword: resetPassword,
    updateProfile: updateProfile,
    refreshSession: refreshSession,
    signInWithProvider: signInWithProvider,
    clearError: clearError
  };
  return jsxRuntimeExports.jsx(AuthContext.Provider, {
    value: contextValue,
    children: children
  });
}
/**
 * useAuth hook
 *
 * Returns the current authentication context value, including user, session, loading, error, and auth actions.
 * Must be used within an AuthProvider.
 *
 * @returns {AuthContextValue} Authentication context value.
 * @throws {Error} If used outside an AuthProvider.
 */
function useAuth() {
  var context = require$$0.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
/**
 * useIsAuthenticated hook
 *
 * Returns true if a user is currently authenticated, false otherwise.
 *
 * @returns {boolean} Authentication status.
 */
function useIsAuthenticated() {
  var user = useAuth().user;
  return user !== null;
}
/**
 * useHasRole hook
 *
 * Checks if the current user has a specific role.
 *
 * @param {string} role - Role to check.
 * @returns {boolean} True if user has the role, false otherwise.
 */
function useHasRole(role) {
  var _a, _b, _c;
  var user = useAuth().user;
  return (_c = (_b = (_a = user === null || user === void 0 ? void 0 : user.metadata) === null || _a === void 0 ? void 0 : _a.roles) === null || _b === void 0 ? void 0 : _b.includes(role)) !== null && _c !== void 0 ? _c : false;
}
/**
 * useHasAnyRole hook
 *
 * Checks if the current user has any of the specified roles.
 *
 * @param {string[]} roles - Array of roles to check.
 * @returns {boolean} True if user has any of the roles, false otherwise.
 */
function useHasAnyRole(roles) {
  var _a;
  var user = useAuth().user;
  var userRoles = ((_a = user === null || user === void 0 ? void 0 : user.metadata) === null || _a === void 0 ? void 0 : _a.roles) || [];
  return roles.some(function (role) {
    return userRoles.includes(role);
  });
}

var SocialAuthBlock = function SocialAuthBlock(_a) {
  var socialProviders = _a.socialProviders,
    onSocialAuth = _a.onSocialAuth,
    _b = _a.loading,
    loading = _b === void 0 ? false : _b,
    _c = _a.dividerText,
    dividerText = _c === void 0 ? 'or continue with' : _c,
    _d = _a.buttonVariant,
    buttonVariant = _d === void 0 ? 'outlined' : _d,
    _e = _a.showDivider,
    showDivider = _e === void 0 ? true : _e;
  if (socialProviders.length === 0) {
    return null;
  }
  return jsxRuntimeExports.jsxs(reactFramework.GridLayout, {
    sx: {
      width: '100%'
    },
    children: [showDivider && jsxRuntimeExports.jsx(material.Divider, {
      sx: {
        my: 2,
        width: '100%'
      },
      children: jsxRuntimeExports.jsx(material.Typography, {
        variant: "body2",
        color: "text.secondary",
        children: dividerText
      })
    }), socialProviders.map(function (provider) {
      return jsxRuntimeExports.jsxs(material.Button, {
        fullWidth: true,
        variant: buttonVariant,
        onClick: function onClick() {
          return onSocialAuth(provider.id);
        },
        disabled: loading,
        startIcon: provider.icon,
        children: ["Continue with ", provider.name]
      }, provider.id);
    })]
  });
};

var LoginForm = function LoginForm(_a) {
  var _b = _a.loading,
    loading = _b === void 0 ? false : _b,
    onLogin = _a.onLogin,
    onForgotPassword = _a.onForgotPassword,
    onSocialLogin = _a.onSocialLogin,
    signUpUrl = _a.signUpUrl,
    _c = _a.showSocialLogin,
    showSocialLogin = _c === void 0 ? false : _c,
    _d = _a.socialProviders,
    socialProviders = _d === void 0 ? [] : _d,
    _e = _a.showForgotPassword,
    showForgotPassword = _e === void 0 ? true : _e,
    className = _a.className;
  var _f = require$$0.useState({
      email: '',
      password: ''
    }),
    credentials = _f[0],
    setCredentials = _f[1];
  var _g = require$$0.useState({}),
    validationErrors = _g[0],
    setValidationErrors = _g[1];
  var validateForm = function validateForm() {
    var errors = {};
    if (!credentials.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!credentials.password) {
      errors.password = 'Password is required';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  var handleSubmit = function handleSubmit(e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            if (!validateForm()) return [2 /*return*/];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, onLogin(credentials)];
          case 2:
            _a.sent();
            return [3 /*break*/, 4];
          case 3:
            err_1 = _a.sent();
            // Error handling managed by parent component
            console.error('Login error:', err_1);
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  var handleForgotPassword = function handleForgotPassword() {
    if (onForgotPassword && credentials.email) {
      onForgotPassword(credentials.email);
    }
  };
  return jsxRuntimeExports.jsxs(material.Box, {
    className: className,
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    children: [jsxRuntimeExports.jsxs(reactFramework.GridLayout, {
      spacing: "small",
      columns: 1,
      children: [jsxRuntimeExports.jsx(reactFramework.TextField, {
        fullWidth: true,
        label: "Email Address",
        type: "email",
        value: credentials.email,
        onChange: function onChange(e) {
          return setCredentials(function (prev) {
            return _assign(_assign({}, prev), {
              email: e.target.value
            });
          });
        },
        error: !!validationErrors.email,
        helperText: validationErrors.email,
        required: true,
        disabled: loading,
        placeholder: "Enter your email address",
        span: 12
      }), jsxRuntimeExports.jsx(reactFramework.TextField, {
        fullWidth: true,
        label: "Password",
        type: "password",
        value: credentials.password,
        onChange: function onChange(e) {
          return setCredentials(function (prev) {
            return _assign(_assign({}, prev), {
              password: e.target.value
            });
          });
        },
        error: !!validationErrors.password,
        helperText: validationErrors.password,
        required: true,
        disabled: loading,
        placeholder: "Enter your password",
        span: 12
      }), jsxRuntimeExports.jsx(reactFramework.Button, {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        disabled: loading,
        startIcon: loading ? jsxRuntimeExports.jsx(material.CircularProgress, {
          size: 20
        }) : jsxRuntimeExports.jsx(iconsMaterial.Login, {}),
        sx: {
          mt: 1
        },
        span: "auto",
        children: loading ? 'Signing In...' : 'Sign In'
      }), showForgotPassword && onForgotPassword && jsxRuntimeExports.jsx(reactFramework.GridCell, {
        span: "grow",
        sx: {
          textAlign: 'center',
          mt: 1
        },
        children: jsxRuntimeExports.jsx(material.Link, {
          component: "button",
          type: "button",
          variant: "body2",
          onClick: handleForgotPassword,
          disabled: loading,
          sx: {
            cursor: 'pointer'
          },
          children: "Forgot password?"
        })
      })]
    }), showSocialLogin && socialProviders.length > 0 && jsxRuntimeExports.jsx(material.Box, {
      sx: {
        mt: 2
      },
      children: jsxRuntimeExports.jsx(SocialAuthBlock, {
        socialProviders: socialProviders,
        onSocialAuth: function onSocialAuth(provider) {
          return onSocialLogin === null || onSocialLogin === void 0 ? void 0 : onSocialLogin(provider);
        },
        loading: loading
      })
    }), signUpUrl && jsxRuntimeExports.jsxs(material.Typography, {
      variant: "body2",
      sx: {
        textAlign: 'center',
        mt: 2
      },
      children: ["Don't have an account?", ' ', jsxRuntimeExports.jsx(material.Link, {
        href: signUpUrl,
        children: "Sign up"
      })]
    })]
  });
};

var AuthFooterLinks = function AuthFooterLinks(_a) {
  var text = _a.text,
    linkText = _a.linkText,
    href = _a.href,
    onClick = _a.onClick,
    _b = _a.sx,
    sx = _b === void 0 ? {} : _b;
  return jsxRuntimeExports.jsxs(material.Typography, {
    variant: "body2",
    sx: _assign({
      textAlign: 'center',
      mt: 2
    }, sx),
    children: [text, ' ', jsxRuntimeExports.jsx(material.Link, {
      href: href,
      onClick: onClick,
      sx: {
        cursor: onClick ? 'pointer' : undefined
      },
      children: linkText
    })]
  });
};
// Convenience components for common patterns
var SignUpFooterLink = function SignUpFooterLink(_a) {
  var href = _a.href,
    onClick = _a.onClick,
    sx = _a.sx;
  return jsxRuntimeExports.jsx(AuthFooterLinks, {
    text: "Don't have an account?",
    linkText: "Sign up",
    href: href,
    onClick: onClick,
    sx: sx
  });
};
var SignInFooterLink = function SignInFooterLink(_a) {
  var href = _a.href,
    onClick = _a.onClick,
    sx = _a.sx;
  return jsxRuntimeExports.jsx(AuthFooterLinks, {
    text: "Already have an account?",
    linkText: "Sign in",
    href: href,
    onClick: onClick,
    sx: sx
  });
};

var LoginPage = function LoginPage(_a) {
  var _b = _a.title,
    title = _b === void 0 ? "Welcome Back" : _b,
    _c = _a.subtitle,
    subtitle = _c === void 0 ? "Sign in to your account to continue" : _c,
    logo = _a.logo,
    onSuccess = _a.onSuccess,
    onError = _a.onError,
    _d = _a.showSocialLogin,
    showSocialLogin = _d === void 0 ? false : _d,
    _e = _a.showForgotPassword,
    showForgotPassword = _e === void 0 ? true : _e,
    _f = _a.registerUrl,
    registerUrl = _f === void 0 ? "/auth/register" : _f;
  var navigate = reactRouterDom.useNavigate();
  var _g = useAuth(),
    signIn = _g.signIn,
    loading = _g.loading,
    error = _g.error,
    clearError = _g.clearError;
  var _h = require$$0.useState(),
    localError = _h[0],
    setLocalError = _h[1];
  var handleLogin = function handleLogin(credentials) {
    return __awaiter(void 0, void 0, void 0, function () {
      var result, errorMessage, err_1, errorMessage;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);
            clearError();
            setLocalError(undefined);
            return [4 /*yield*/, signIn(credentials)];
          case 1:
            result = _a.sent();
            if (result.error) {
              errorMessage = result.error.message;
              setLocalError(errorMessage);
              if (onError) {
                onError(result.error);
              }
            } else if (result.data) {
              // Success - handle redirect
              if (onSuccess) {
                onSuccess(result.data);
              } else {
                // Default redirect to dashboard
                navigate('/dashboard');
              }
            }
            return [3 /*break*/, 3];
          case 2:
            err_1 = _a.sent();
            errorMessage = 'An unexpected error occurred. Please try again.';
            setLocalError(errorMessage);
            console.error('Login error:', err_1);
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  // Create default footer with register link
  var footerContent = registerUrl ? jsxRuntimeExports.jsx(SignUpFooterLink, {
    href: registerUrl
  }) : undefined;
  return jsxRuntimeExports.jsx(reactFramework.FormPage, {
    title: title,
    description: subtitle,
    form: jsxRuntimeExports.jsx(LoginForm, {
      loading: loading,
      error: localError || (error === null || error === void 0 ? void 0 : error.message),
      onLogin: handleLogin,
      showSocialLogin: showSocialLogin,
      showForgotPassword: showForgotPassword
    }),
    footer: footerContent,
    coverImage: logo,
    maxWidth: "sm",
    background: "default"
  });
};

var RegisterForm = function RegisterForm(_a) {
  var _b = _a.loading,
    loading = _b === void 0 ? false : _b,
    onRegister = _a.onRegister,
    onSocialRegister = _a.onSocialRegister,
    validatePasswordStrength = _a.validatePasswordStrength,
    termsUrl = _a.termsUrl,
    privacyUrl = _a.privacyUrl,
    _c = _a.showSocialRegister,
    showSocialRegister = _c === void 0 ? false : _c,
    _d = _a.socialProviders,
    socialProviders = _d === void 0 ? [] : _d,
    _e = _a.requireName,
    requireName = _e === void 0 ? false : _e,
    showNameField = _a.showNameField,
    className = _a.className;
  // Handle showNameField as alias for requireName
  var shouldShowNameField = showNameField !== null && showNameField !== void 0 ? showNameField : requireName;
  var _f = require$$0.useState({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      acceptTerms: false
    }),
    credentials = _f[0],
    setCredentials = _f[1];
  var _g = require$$0.useState({}),
    validationErrors = _g[0],
    setValidationErrors = _g[1];
  // Password strength validation
  var passwordStrength = require$$0.useMemo(function () {
    if (!credentials.password) return null;
    return (validatePasswordStrength === null || validatePasswordStrength === void 0 ? void 0 : validatePasswordStrength(credentials.password)) || {
      score: 0,
      feedback: [],
      isValid: credentials.password.length >= 8
    };
  }, [credentials.password, validatePasswordStrength]);
  var validateForm = function validateForm() {
    var errors = {};
    // Email validation
    if (!credentials.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      errors.email = 'Please enter a valid email address';
    }
    // Name validation
    if (shouldShowNameField && !credentials.name) {
      errors.name = 'Name is required';
    }
    // Password validation
    if (!credentials.password) {
      errors.password = 'Password is required';
    } else if (passwordStrength && !passwordStrength.isValid) {
      errors.password = 'Password does not meet requirements';
    }
    // Password confirmation validation
    if (!credentials.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (credentials.password !== credentials.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    // Terms validation
    if (!credentials.acceptTerms) {
      errors.terms = 'You must accept the terms of service';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  var handleSubmit = function handleSubmit(e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var registrationData, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            if (!validateForm()) return [2 /*return*/];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            credentials.confirmPassword, registrationData = __rest(credentials, ["confirmPassword"]);
            return [4 /*yield*/, onRegister(registrationData)];
          case 2:
            _a.sent();
            return [3 /*break*/, 4];
          case 3:
            err_1 = _a.sent();
            console.error('Registration error:', err_1);
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  var getPasswordStrengthColor = function getPasswordStrengthColor() {
    if (!passwordStrength) return 'inherit';
    switch (passwordStrength.score) {
      case 0:
      case 1:
        return 'error';
      case 2:
        return 'warning';
      case 3:
        return 'info';
      case 4:
        return 'success';
      default:
        return 'inherit';
    }
  };
  return jsxRuntimeExports.jsx(material.Box, {
    className: className,
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    children: jsxRuntimeExports.jsxs(reactFramework.GridLayout, {
      spacing: "2",
      children: [jsxRuntimeExports.jsx(reactFramework.TextInputField, {
        label: "Email Address",
        type: "email",
        value: credentials.email,
        onChange: function onChange(value) {
          return setCredentials(function (prev) {
            return _assign(_assign({}, prev), {
              email: value
            });
          });
        },
        error: validationErrors.email,
        required: true,
        disabled: loading,
        placeholder: "Enter your email address"
      }), shouldShowNameField && jsxRuntimeExports.jsx(reactFramework.TextInputField, {
        label: "Full Name",
        type: "text",
        value: credentials.name || '',
        onChange: function onChange(value) {
          return setCredentials(function (prev) {
            return _assign(_assign({}, prev), {
              name: value
            });
          });
        },
        error: validationErrors.name,
        required: shouldShowNameField,
        disabled: loading,
        placeholder: "Enter your full name"
      }), jsxRuntimeExports.jsx(reactFramework.TextInputField, {
        label: "Password",
        type: "password",
        value: credentials.password,
        onChange: function onChange(value) {
          return setCredentials(function (prev) {
            return _assign(_assign({}, prev), {
              password: value
            });
          });
        },
        error: validationErrors.password,
        required: true,
        disabled: loading,
        placeholder: "Create a strong password"
      }), passwordStrength && credentials.password && jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          mt: 1
        },
        children: [jsxRuntimeExports.jsx(material.LinearProgress, {
          variant: "determinate",
          value: passwordStrength.score / 4 * 100,
          color: getPasswordStrengthColor(),
          sx: {
            height: 4,
            borderRadius: 2
          }
        }), jsxRuntimeExports.jsxs(material.Typography, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            mt: 0.5,
            display: 'block'
          },
          children: ["Password strength: ", ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength.score]]
        }), passwordStrength.feedback.length > 0 && jsxRuntimeExports.jsx(material.Typography, {
          variant: "caption",
          color: "text.secondary",
          component: "div",
          children: passwordStrength.feedback.map(function (tip, index) {
            return jsxRuntimeExports.jsxs("div", {
              children: ["\u2022 ", tip]
            }, index);
          })
        })]
      }), jsxRuntimeExports.jsx(reactFramework.TextInputField, {
        label: "Confirm Password",
        type: "password",
        value: credentials.confirmPassword,
        onChange: function onChange(value) {
          return setCredentials(function (prev) {
            return _assign(_assign({}, prev), {
              confirmPassword: value
            });
          });
        },
        error: validationErrors.confirmPassword,
        required: true,
        disabled: loading,
        placeholder: "Confirm your password"
      }), jsxRuntimeExports.jsx(material.FormControlLabel, {
        sx: {
          width: '100%'
        },
        control: jsxRuntimeExports.jsx(material.Checkbox, {
          checked: credentials.acceptTerms,
          onChange: function onChange(e) {
            return setCredentials(function (prev) {
              return _assign(_assign({}, prev), {
                acceptTerms: e.target.checked
              });
            });
          },
          disabled: loading,
          color: "primary"
        }),
        label: jsxRuntimeExports.jsxs(material.Typography, {
          variant: "body2",
          children: ["I agree to the", ' ', termsUrl ? jsxRuntimeExports.jsx(material.Link, {
            href: termsUrl,
            target: "_blank",
            children: "Terms of Service"
          }) : 'Terms of Service', privacyUrl && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [' ', "and", ' ', jsxRuntimeExports.jsx(material.Link, {
              href: privacyUrl,
              target: "_blank",
              children: "Privacy Policy"
            })]
          })]
        })
      }), validationErrors.terms && jsxRuntimeExports.jsx(material.Typography, {
        variant: "caption",
        color: "error",
        sx: {
          display: 'block',
          mt: 0.5
        },
        children: validationErrors.terms
      }), jsxRuntimeExports.jsx(reactFramework.GridCell, {
        span: 12,
        children: jsxRuntimeExports.jsx(material.Button, {
          type: "submit",
          fullWidth: true,
          variant: "contained",
          disabled: loading,
          startIcon: loading ? jsxRuntimeExports.jsx(material.CircularProgress, {
            size: 20
          }) : jsxRuntimeExports.jsx(iconsMaterial.PersonAdd, {}),
          sx: {
            mt: 1
          },
          children: loading ? 'Creating Account...' : 'Create Account'
        })
      }), showSocialRegister && socialProviders.length > 0 && jsxRuntimeExports.jsx(SocialAuthBlock, {
        socialProviders: socialProviders,
        onSocialAuth: function onSocialAuth(provider) {
          return onSocialRegister === null || onSocialRegister === void 0 ? void 0 : onSocialRegister(provider);
        },
        loading: loading
      })]
    })
  });
};

var RegisterPage = function RegisterPage(_a) {
  var _b = _a.title,
    title = _b === void 0 ? "Create Account" : _b,
    _c = _a.subtitle,
    subtitle = _c === void 0 ? "Join us and start your journey today" : _c,
    logo = _a.logo;
    _a.header;
    var _d = _a.background,
    background = _d === void 0 ? 'default' : _d,
    backgroundImage = _a.backgroundImage,
    _e = _a.maxWidth,
    maxWidth = _e === void 0 ? 'sm' : _e,
    status = _a.status,
    message = _a.message,
    signInUrl = _a.signInUrl,
    signInLink = _a.signInLink,
    footer = _a.footer;
    _a.signInText;
    _a.termsLink;
    _a.privacyLink;
    var registerFormProps = __rest(_a, ["title", "subtitle", "logo", "header", "background", "backgroundImage", "maxWidth", "status", "message", "signInUrl", "signInLink", "footer", "signInText", "termsLink", "privacyLink"]);
  // Use signInLink if provided, otherwise fallback to signInUrl
  var loginUrl = signInLink !== null && signInLink !== void 0 ? signInLink : signInUrl;
  // Create default footer with sign-in link
  var footerContent = footer || (loginUrl ? jsxRuntimeExports.jsx(SignInFooterLink, {
    href: loginUrl
  }) : undefined);
  return jsxRuntimeExports.jsx(reactFramework.FormPage, {
    title: title,
    description: subtitle,
    form: jsxRuntimeExports.jsx(RegisterForm, _assign({}, registerFormProps)),
    footer: footerContent,
    status: status,
    message: message,
    coverImage: logo,
    // header={header}
    maxWidth: maxWidth,
    background: background,
    backgroundImage: backgroundImage
  });
};

var PasswordResetForm = function PasswordResetForm(_a) {
  var _b = _a.loading,
    loading = _b === void 0 ? false : _b,
    onPasswordReset = _a.onPasswordReset,
    className = _a.className;
  var _c = require$$0.useState(''),
    email = _c[0],
    setEmail = _c[1];
  var _d = require$$0.useState(''),
    validationError = _d[0],
    setValidationError = _d[1];
  var validateForm = function validateForm() {
    if (!email) {
      setValidationError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidationError('Please enter a valid email address');
      return false;
    }
    setValidationError('');
    return true;
  };
  var handleSubmit = function handleSubmit(e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            if (!validateForm()) return [2 /*return*/];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, onPasswordReset({
              email: email
            })];
          case 2:
            _a.sent();
            return [3 /*break*/, 4];
          case 3:
            err_1 = _a.sent();
            console.error('Password reset error:', err_1);
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  return jsxRuntimeExports.jsx(material.Box, {
    className: className,
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    children: jsxRuntimeExports.jsxs(reactFramework.GridLayout, {
      children: [jsxRuntimeExports.jsx(reactFramework.TextInputField, {
        label: "Email Address",
        type: "email",
        value: email,
        onChange: setEmail,
        error: validationError,
        required: true,
        disabled: loading,
        placeholder: "Enter your email address"
      }), jsxRuntimeExports.jsx(reactFramework.GridCell, {
        span: "grow",
        children: jsxRuntimeExports.jsx(material.Button, {
          type: "submit",
          fullWidth: true,
          variant: "contained",
          disabled: loading,
          startIcon: loading ? jsxRuntimeExports.jsx(material.CircularProgress, {
            size: 20
          }) : jsxRuntimeExports.jsx(iconsMaterial.Email, {}),
          sx: {
            mt: 1
          },
          children: loading ? 'Sending...' : 'Send Reset Link'
        })
      })]
    })
  });
};

var PasswordResetPage = function PasswordResetPage(_a) {
  var _b = _a.title,
    title = _b === void 0 ? "Reset Password" : _b,
    _c = _a.subtitle,
    subtitle = _c === void 0 ? "Enter your email address and we'll send you a link to reset your password" : _c,
    logo = _a.logo;
    _a.header;
    var _d = _a.background,
    background = _d === void 0 ? 'default' : _d,
    backgroundImage = _a.backgroundImage,
    _e = _a.maxWidth,
    maxWidth = _e === void 0 ? 'sm' : _e,
    status = _a.status,
    message = _a.message,
    signInUrl = _a.signInUrl,
    footer = _a.footer,
    passwordResetFormProps = __rest(_a, ["title", "subtitle", "logo", "header", "background", "backgroundImage", "maxWidth", "status", "message", "signInUrl", "footer"]);
  // Create default footer with sign-in link
  var footerContent = footer || (signInUrl ? jsxRuntimeExports.jsxs(material.Typography, {
    variant: "body2",
    sx: {
      textAlign: 'center',
      mt: 2
    },
    children: ["Remember your password?", ' ', jsxRuntimeExports.jsx(material.Link, {
      href: signInUrl,
      children: "Sign in"
    })]
  }) : undefined);
  return jsxRuntimeExports.jsx(reactFramework.FormPage, {
    title: title,
    description: subtitle,
    form: jsxRuntimeExports.jsx(PasswordResetForm, _assign({}, passwordResetFormProps)),
    footer: footerContent,
    status: status,
    message: message,
    coverImage: logo,
    // header={header}
    maxWidth: maxWidth,
    background: background,
    backgroundImage: backgroundImage
  });
};

var PasswordResetConfirmForm = function PasswordResetConfirmForm(_a) {
  var token = _a.token,
    _b = _a.loading,
    loading = _b === void 0 ? false : _b,
    onPasswordResetConfirm = _a.onPasswordResetConfirm,
    validatePasswordStrength = _a.validatePasswordStrength,
    className = _a.className;
  var _c = require$$0.useState({
      password: '',
      confirmPassword: ''
    }),
    formData = _c[0],
    setFormData = _c[1];
  var _d = require$$0.useState({}),
    validationErrors = _d[0],
    setValidationErrors = _d[1];
  // Password strength validation
  var passwordStrength = require$$0.useMemo(function () {
    if (!formData.password) return null;
    return (validatePasswordStrength === null || validatePasswordStrength === void 0 ? void 0 : validatePasswordStrength(formData.password)) || {
      score: 0,
      feedback: [],
      isValid: formData.password.length >= 8
    };
  }, [formData.password, validatePasswordStrength]);
  var validateForm = function validateForm() {
    var errors = {};
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (passwordStrength && !passwordStrength.isValid) {
      errors.password = 'Password does not meet requirements';
    }
    // Password confirmation validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  var handleSubmit = function handleSubmit(e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            if (!validateForm()) return [2 /*return*/];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, onPasswordResetConfirm(_assign(_assign({}, formData), {
              token: token || ''
            }))];
          case 2:
            _a.sent();
            return [3 /*break*/, 4];
          case 3:
            err_1 = _a.sent();
            console.error('Password reset confirm error:', err_1);
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  var getPasswordStrengthColor = function getPasswordStrengthColor() {
    if (!passwordStrength) return 'inherit';
    switch (passwordStrength.score) {
      case 0:
      case 1:
        return 'error';
      case 2:
        return 'warning';
      case 3:
        return 'info';
      case 4:
        return 'success';
      default:
        return 'inherit';
    }
  };
  return jsxRuntimeExports.jsx(material.Box, {
    className: className,
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    children: jsxRuntimeExports.jsxs(reactFramework.GridLayout, {
      spacing: "2",
      children: [jsxRuntimeExports.jsx(reactFramework.TextInputField, {
        label: "New Password",
        type: "password",
        value: formData.password,
        onChange: function onChange(value) {
          return setFormData(function (prev) {
            return _assign(_assign({}, prev), {
              password: value
            });
          });
        },
        error: validationErrors.password,
        required: true,
        disabled: loading,
        placeholder: "Enter your new password"
      }), passwordStrength && formData.password && jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          mt: 1
        },
        children: [jsxRuntimeExports.jsx(material.LinearProgress, {
          variant: "determinate",
          value: passwordStrength.score / 4 * 100,
          color: getPasswordStrengthColor(),
          sx: {
            height: 4,
            borderRadius: 2
          }
        }), jsxRuntimeExports.jsxs(material.Typography, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            mt: 0.5,
            display: 'block'
          },
          children: ["Password strength: ", ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength.score]]
        }), passwordStrength.feedback.length > 0 && jsxRuntimeExports.jsx(material.Typography, {
          variant: "caption",
          color: "text.secondary",
          component: "div",
          children: passwordStrength.feedback.map(function (tip, index) {
            return jsxRuntimeExports.jsxs("div", {
              children: ["\u2022 ", tip]
            }, index);
          })
        })]
      }), jsxRuntimeExports.jsx(reactFramework.TextInputField, {
        label: "Confirm New Password",
        type: "password",
        value: formData.confirmPassword,
        onChange: function onChange(value) {
          return setFormData(function (prev) {
            return _assign(_assign({}, prev), {
              confirmPassword: value
            });
          });
        },
        error: validationErrors.confirmPassword,
        required: true,
        disabled: loading,
        placeholder: "Confirm your new password"
      }), jsxRuntimeExports.jsx(material.Button, {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        disabled: loading,
        startIcon: loading ? jsxRuntimeExports.jsx(material.CircularProgress, {
          size: 20
        }) : jsxRuntimeExports.jsx(iconsMaterial.Lock, {}),
        sx: {
          mt: 1
        },
        children: loading ? 'Updating Password...' : 'Update Password'
      })]
    })
  });
};

var PasswordResetConfirmPage = function PasswordResetConfirmPage(_a) {
  var _b = _a.title,
    title = _b === void 0 ? "Set New Password" : _b,
    _c = _a.subtitle,
    subtitle = _c === void 0 ? "Create a strong password to secure your account" : _c,
    logo = _a.logo;
    _a.header;
    var _d = _a.background,
    background = _d === void 0 ? 'default' : _d,
    backgroundImage = _a.backgroundImage,
    _e = _a.maxWidth,
    maxWidth = _e === void 0 ? 'sm' : _e,
    status = _a.status,
    message = _a.message,
    signInUrl = _a.signInUrl,
    footer = _a.footer,
    passwordResetConfirmFormProps = __rest(_a, ["title", "subtitle", "logo", "header", "background", "backgroundImage", "maxWidth", "status", "message", "signInUrl", "footer"]);
  // Create default footer with sign-in link
  var footerContent = footer || (signInUrl ? jsxRuntimeExports.jsx(material.Typography, {
    variant: "body2",
    sx: {
      textAlign: 'center',
      mt: 2
    },
    children: jsxRuntimeExports.jsx(material.Link, {
      href: signInUrl,
      children: "Back to Sign In"
    })
  }) : undefined);
  return jsxRuntimeExports.jsx(reactFramework.FormPage, {
    title: title,
    description: subtitle,
    form: jsxRuntimeExports.jsx(PasswordResetConfirmForm, _assign({}, passwordResetConfirmFormProps)),
    footer: footerContent,
    status: status,
    message: message,
    coverImage: logo,
    // header={header}
    maxWidth: maxWidth,
    background: background,
    backgroundImage: backgroundImage
  });
};

var RouteGuard = function RouteGuard(_a) {
  var providedAuthState = _a.authState,
    children = _a.children,
    fallback = _a.fallback,
    loadingComponent = _a.loadingComponent,
    errorComponent = _a.errorComponent,
    _b = _a.requiredRoles,
    requiredRoles = _b === void 0 ? [] : _b,
    _c = _a.hasRoles,
    hasRoles = _c === void 0 ? function (user, roles) {
      if (!user || !user.roles) return roles.length === 0;
      return roles.some(function (role) {
        return user.roles.includes(role);
      }); // Changed to 'some' for OR logic
    } : _c,
    onRedirectToLogin = _a.onRedirectToLogin,
    _d = _a.showLoginButton,
    showLoginButton = _d === void 0 ? true : _d,
    _e = _a.loginButtonText,
    loginButtonText = _e === void 0 ? "Sign In" : _e,
    _f = _a.accessDeniedMessage,
    accessDeniedMessage = _f === void 0 ? "You don't have permission to access this resource." : _f,
    className = _a.className;
  // Fetch auth state automatically if not provided
  var fetchedAuthState = useAuth();
  // Use provided auth state or fetch it automatically
  var authState = providedAuthState || {
    user: fetchedAuthState.user,
    loading: fetchedAuthState.loading,
    error: fetchedAuthState.error
  };
  var user = authState.user,
    loading = authState.loading,
    error = authState.error;
  // Show loading state
  if (loading) {
    return jsxRuntimeExports.jsx(material.Box, {
      className: className,
      children: loadingComponent || jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '200px',
          textAlign: 'center'
        },
        children: [jsxRuntimeExports.jsx(material.CircularProgress, {
          size: 40,
          sx: {
            mb: 2
          }
        }), jsxRuntimeExports.jsx(material.Typography, {
          variant: "body1",
          color: "text.secondary",
          children: "Checking authentication..."
        })]
      })
    });
  }
  // Show error state
  if (error) {
    return jsxRuntimeExports.jsx(material.Box, {
      className: className,
      children: errorComponent || jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '200px',
          textAlign: 'center',
          p: 3
        },
        children: [jsxRuntimeExports.jsx(iconsMaterial.Lock, {
          sx: {
            fontSize: 48,
            color: 'error.main',
            mb: 2
          }
        }), jsxRuntimeExports.jsx(material.Typography, {
          variant: "h6",
          gutterBottom: true,
          children: "Authentication Error"
        }), jsxRuntimeExports.jsx(material.Typography, {
          variant: "body2",
          color: "text.secondary",
          sx: {
            mb: 3
          },
          children: typeof error === 'string' ? error : (error === null || error === void 0 ? void 0 : error.message) || 'An error occurred'
        }), showLoginButton && onRedirectToLogin && jsxRuntimeExports.jsx(material.Button, {
          variant: "contained",
          onClick: onRedirectToLogin,
          startIcon: jsxRuntimeExports.jsx(iconsMaterial.Login, {}),
          children: loginButtonText
        })]
      })
    });
  }
  // Check if user is authenticated
  if (!user) {
    return jsxRuntimeExports.jsx(material.Box, {
      className: className,
      children: fallback || jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          textAlign: 'center',
          p: 3
        },
        children: [jsxRuntimeExports.jsx(iconsMaterial.Lock, {
          sx: {
            fontSize: 64,
            color: 'text.secondary',
            mb: 2
          }
        }), jsxRuntimeExports.jsx(material.Typography, {
          variant: "h5",
          gutterBottom: true,
          children: "Authentication Required"
        }), jsxRuntimeExports.jsx(material.Typography, {
          variant: "body1",
          color: "text.secondary",
          sx: {
            mb: 3
          },
          children: "Please sign in to access this content."
        }), showLoginButton && onRedirectToLogin && jsxRuntimeExports.jsx(material.Button, {
          variant: "contained",
          size: "large",
          onClick: onRedirectToLogin,
          startIcon: jsxRuntimeExports.jsx(iconsMaterial.Login, {}),
          children: loginButtonText
        })]
      })
    });
  }
  // Check role-based permissions
  if (requiredRoles.length > 0 && !hasRoles(user, requiredRoles)) {
    return jsxRuntimeExports.jsx(material.Box, {
      className: className,
      children: jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          textAlign: 'center',
          p: 3
        },
        children: [jsxRuntimeExports.jsx(iconsMaterial.Lock, {
          sx: {
            fontSize: 64,
            color: 'warning.main',
            mb: 2
          }
        }), jsxRuntimeExports.jsx(material.Typography, {
          variant: "h5",
          gutterBottom: true,
          children: "Access Denied"
        }), jsxRuntimeExports.jsx(material.Typography, {
          variant: "body1",
          color: "text.secondary",
          sx: {
            mb: 2
          },
          children: accessDeniedMessage
        }), jsxRuntimeExports.jsxs(material.Typography, {
          variant: "body2",
          color: "text.secondary",
          children: ["Required roles: ", requiredRoles.join(', ')]
        })]
      })
    });
  }
  // User is authenticated and authorized - render protected content
  return jsxRuntimeExports.jsx(material.Box, {
    className: className,
    children: children
  });
};

// Note: ComponentWithRole interface removed for security
// Role requirements must now be explicitly passed as props
var AccessGuard = function AccessGuard(_a) {
  var Component = _a.component,
    _b = _a.componentProps,
    componentProps = _b === void 0 ? {} : _b,
    children = _a.children,
    user = _a.user,
    requiresRole = _a.requiresRole,
    requiresRoles = _a.requiresRoles,
    _c = _a.requiresAuth,
    requiresAuth = _c === void 0 ? false : _c,
    _d = _a.onAccessDenied,
    onAccessDenied = _d === void 0 ? 'hide' : _d,
    accessDeniedMessage = _a.accessDeniedMessage,
    onAccessDeniedCallback = _a.onAccessDeniedCallback;
  // Determine what to render (component or children)
  var renderTarget = Component ? jsxRuntimeExports.jsx(Component, _assign({}, componentProps)) : children;
  if (!renderTarget) {
    return null;
  }
  // Use only explicit props for security (no component static properties)
  // This prevents manipulation via browser dev console
  var authRequired = requiresAuth || requiresRole || requiresRoles;
  // Check authentication
  if (authRequired && !user) {
    onAccessDeniedCallback === null || onAccessDeniedCallback === void 0 ? void 0 : onAccessDeniedCallback('not_authenticated', user);
    return handleAccessDenied('not_authenticated', 'Authentication required');
  }
  // Check role requirements
  if ((requiresRole || requiresRoles) && user) {
    var userRoles_1 = user.roles || [];
    var hasRequiredRole = function hasRequiredRole() {
      if (requiresRole && !userRoles_1.includes(requiresRole)) {
        return false;
      }
      if (requiresRoles && !requiresRoles.some(function (role) {
        return userRoles_1.includes(role);
      })) {
        return false;
      }
      return true;
    };
    if (!hasRequiredRole()) {
      var roleInfo = requiresRole || (requiresRoles === null || requiresRoles === void 0 ? void 0 : requiresRoles.join(' or ')) || '';
      onAccessDeniedCallback === null || onAccessDeniedCallback === void 0 ? void 0 : onAccessDeniedCallback('insufficient_roles', user);
      return handleAccessDenied('insufficient_roles', "Required role(s): ".concat(roleInfo));
    }
  }
  // Access granted - render the target
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: renderTarget
  });
  // Helper function to handle different access denied actions
  function handleAccessDenied(reason, defaultMessage) {
    // Hide (default) - don't render anything
    if (onAccessDenied === 'hide') {
      return null;
    }
    // Note: 'disable' action removed for security reasons
    // Users can re-enable disabled elements via browser dev tools
    // Message - show access denied message
    if (onAccessDenied === 'message') {
      return jsxRuntimeExports.jsx(material.Alert, {
        severity: "warning",
        sx: {
          my: 1
        },
        children: jsxRuntimeExports.jsx(material.Typography, {
          variant: "body2",
          children: accessDeniedMessage || defaultMessage
        })
      });
    }
    // Custom component
    if (/*#__PURE__*/require$$0.isValidElement(onAccessDenied)) {
      return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
        children: onAccessDenied
      });
    }
    // Fallback to hide
    return null;
  }
};

/**
 * AuthRoutes component that transforms AuthRoute to Route + RouteGuard
 *
 * @example
 * ```tsx
 * <AuthRoutes enableDefaultAuthRoutes={true}>
 *   <AuthRoute path="/dashboard" element={<RouteGuard><Dashboard /></RouteGuard>} />
 *   <Route path="/public" element={<PublicPage />} />
 * </AuthRoutes>
 * ```
 */
var AuthRoutes = function AuthRoutes(_a) {
  var children = _a.children,
    _b = _a.enableDefaultAuthRoutes,
    enableDefaultAuthRoutes = _b === void 0 ? false : _b,
    _c = _a.authBasePath,
    authBasePath = _c === void 0 ? 'auth' : _c,
    _d = _a.socialProviders,
    socialProviders = _d === void 0 ? [] : _d,
    _e = _a.showSocialAuth,
    showSocialAuth = _e === void 0 ? false : _e;
  var logo = reactFramework.useQwickApp().logo;
  // Add default auth routes if enabled
  var defaultAuthRoutes = enableDefaultAuthRoutes ? [jsxRuntimeExports.jsx(reactRouterDom.Route, {
    path: "".concat(authBasePath, "/login"),
    element: jsxRuntimeExports.jsx(LoginPage, {
      title: "Welcome Back!",
      subtitle: "Sign in to continue",
      logo: logo,
      showSocialLogin: showSocialAuth,
      registerUrl: "/".concat(authBasePath, "/register")
    })
  }, "auth-login"), jsxRuntimeExports.jsx(reactRouterDom.Route, {
    path: "".concat(authBasePath, "/register"),
    element: jsxRuntimeExports.jsx(RegisterPage, {
      logo: logo,
      title: "Create Account",
      subtitle: "Join us today",
      showSocialRegister: showSocialAuth,
      socialProviders: socialProviders,
      signInUrl: "/".concat(authBasePath, "/login"),
      showNameField: true,
      onRegister: function onRegister() {}
    })
  }, "auth-register"), jsxRuntimeExports.jsx(reactRouterDom.Route, {
    path: "".concat(authBasePath, "/forgot-password"),
    element: jsxRuntimeExports.jsx(PasswordResetPage, {
      logo: logo,
      title: "Reset Password",
      subtitle: "Enter your email to reset your password",
      backToLoginLink: "/".concat(authBasePath, "/login"),
      onPasswordReset: function onPasswordReset() {}
    })
  }, "auth-forgot")] : [];
  return jsxRuntimeExports.jsxs(reactRouterDom.Routes, {
    children: [children, defaultAuthRoutes]
  });
};

// Common social provider configurations
var SOCIAL_PROVIDERS = {
  google: {
    name: 'Google',
    color: '#db4437',
    backgroundColor: '#ffffff',
    textColor: '#757575',
    borderColor: '#dadce0'
  },
  github: {
    name: 'GitHub',
    color: '#333333',
    backgroundColor: '#ffffff',
    textColor: '#333333',
    borderColor: '#dadce0'
  },
  facebook: {
    name: 'Facebook',
    color: '#1877f2',
    backgroundColor: '#1877f2',
    textColor: '#ffffff',
    borderColor: '#1877f2'
  },
  twitter: {
    name: 'Twitter',
    color: '#1da1f2',
    backgroundColor: '#ffffff',
    textColor: '#1da1f2',
    borderColor: '#1da1f2'
  },
  apple: {
    name: 'Apple',
    color: '#000000',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#000000'
  },
  microsoft: {
    name: 'Microsoft',
    color: '#0078d4',
    backgroundColor: '#ffffff',
    textColor: '#0078d4',
    borderColor: '#0078d4'
  },
  linkedin: {
    name: 'LinkedIn',
    color: '#0077b5',
    backgroundColor: '#0077b5',
    textColor: '#ffffff',
    borderColor: '#0077b5'
  }
};
var SocialLoginButton = function SocialLoginButton(_a) {
  var provider = _a.provider,
    onClick = _a.onClick,
    _b = _a.loading,
    loading = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.fullWidth,
    fullWidth = _d === void 0 ? true : _d,
    _e = _a.size,
    size = _e === void 0 ? 'large' : _e,
    icon = _a.icon,
    children = _a.children,
    sx = _a.sx,
    className = _a.className,
    _f = _a.variant,
    variant = _f === void 0 ? 'outlined' : _f,
    customColors = _a.customColors;
  var isKnownProvider = provider in SOCIAL_PROVIDERS;
  var providerConfig = isKnownProvider ? SOCIAL_PROVIDERS[provider] : {
    name: typeof provider === 'string' ? provider.charAt(0).toUpperCase() + provider.slice(1) : 'Unknown',
    color: (customColors === null || customColors === void 0 ? void 0 : customColors.textColor) || '#333333',
    backgroundColor: (customColors === null || customColors === void 0 ? void 0 : customColors.backgroundColor) || '#ffffff',
    textColor: (customColors === null || customColors === void 0 ? void 0 : customColors.textColor) || '#333333',
    borderColor: (customColors === null || customColors === void 0 ? void 0 : customColors.borderColor) || '#dadce0'
  };
  var buttonText = children || "Continue with ".concat(providerConfig.name);
  var handleClick = function handleClick() {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(!loading && !disabled)) return [3 /*break*/, 2];
            return [4 /*yield*/, onClick(provider)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [2 /*return*/];
        }
      });
    });
  };
  // Dynamic styling based on provider and variant
  var getButtonStyles = function getButtonStyles() {
    var baseStyles = _assign({
      borderRadius: 1,
      textTransform: 'none',
      fontWeight: 500,
      py: variant === 'outlined' ? 1.5 : 1.25
    }, sx);
    if (variant === 'outlined') {
      return _assign(_assign({}, baseStyles), {
        borderColor: providerConfig.borderColor,
        color: providerConfig.textColor,
        backgroundColor: providerConfig.backgroundColor,
        '&:hover': {
          borderColor: providerConfig.color,
          backgroundColor: providerConfig.backgroundColor,
          opacity: 0.8
        }
      });
    } else if (variant === 'contained') {
      return _assign(_assign({}, baseStyles), {
        backgroundColor: providerConfig.backgroundColor,
        color: providerConfig.textColor,
        border: "1px solid ".concat(providerConfig.borderColor),
        '&:hover': {
          backgroundColor: providerConfig.color,
          opacity: 0.9
        }
      });
    }
    return baseStyles;
  };
  return jsxRuntimeExports.jsx(material.Button, {
    fullWidth: fullWidth,
    variant: variant,
    size: size,
    disabled: disabled || loading,
    onClick: handleClick,
    startIcon: loading ? jsxRuntimeExports.jsx(material.CircularProgress, {
      size: 20
    }) : icon,
    sx: getButtonStyles(),
    className: className,
    children: buttonText
  });
};

var LogoutButton = function LogoutButton(_a) {
  var _b = _a.variant,
    variant = _b === void 0 ? 'outlined' : _b,
    _c = _a.size,
    size = _c === void 0 ? 'medium' : _c,
    _d = _a.color,
    color = _d === void 0 ? 'primary' : _d,
    _e = _a.showIcon,
    showIcon = _e === void 0 ? true : _e,
    _f = _a.children,
    children = _f === void 0 ? 'Sign Out' : _f,
    icon = _a.icon,
    _g = _a.fullWidth,
    fullWidth = _g === void 0 ? false : _g,
    onLogoutSuccess = _a.onLogoutSuccess,
    onLogoutError = _a.onLogoutError,
    className = _a.className,
    style = _a.style;
  var signOut = useAuth().signOut;
  var _h = require$$0.useState(false),
    loading = _h[0],
    setLoading = _h[1];
  var _j = require$$0.useState(null),
    error = _j[0],
    setError = _j[1];
  var handleLogout = function handleLogout() {
    return __awaiter(void 0, void 0, void 0, function () {
      var err_1, errorMessage;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setLoading(true);
            setError(null);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4 /*yield*/, signOut()];
          case 2:
            _a.sent();
            onLogoutSuccess === null || onLogoutSuccess === void 0 ? void 0 : onLogoutSuccess();
            return [3 /*break*/, 5];
          case 3:
            err_1 = _a.sent();
            errorMessage = err_1 instanceof Error ? err_1.message : 'Failed to sign out';
            setError(errorMessage);
            onLogoutError === null || onLogoutError === void 0 ? void 0 : onLogoutError(err_1 instanceof Error ? err_1 : new Error(errorMessage));
            return [3 /*break*/, 5];
          case 4:
            setLoading(false);
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  };
  var handleCloseError = function handleCloseError() {
    setError(null);
  };
  var buttonIcon = icon || (showIcon ? jsxRuntimeExports.jsx(iconsMaterial.Logout, {}) : undefined);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(material.Button, {
      variant: variant,
      size: size,
      color: color,
      onClick: handleLogout,
      disabled: loading,
      startIcon: loading ? jsxRuntimeExports.jsx(material.CircularProgress, {
        size: 20
      }) : buttonIcon,
      fullWidth: fullWidth,
      className: className,
      style: style,
      children: loading ? 'Signing out...' : children
    }), jsxRuntimeExports.jsx(material.Snackbar, {
      open: !!error,
      autoHideDuration: 6000,
      onClose: handleCloseError,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      children: jsxRuntimeExports.jsx(material.Alert, {
        onClose: handleCloseError,
        severity: "error",
        sx: {
          width: '100%'
        },
        children: error
      })
    })]
  });
};

/**
 * Supabase authentication provider for client-side auth
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * This software is proprietary and confidential.
 */
var logger$1 = logging.getLogger('SupabaseAuthProvider');
/**
 * Supabase authentication provider - implements AuthServiceClient interface
 */
var SupabaseAuthProvider = /** @class */function () {
  function SupabaseAuthProvider(config) {
    this.config = config;
    this.client = supabaseJs.createClient(config.supabaseUrl, config.supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    });
    logger$1.debug('SupabaseAuthProvider initialized', {
      url: config.supabaseUrl,
      features: config.features
    });
  }
  /**
   * Get the Supabase client instance
   */
  SupabaseAuthProvider.prototype.getClient = function () {
    return this.client;
  };
  /**
   * Get list of enabled OAuth providers
   */
  SupabaseAuthProvider.prototype.getEnabledProviders = function () {
    return this.config.enabledProviders || [];
  };
  /**
   * Get headers for API requests - Supabase-specific implementation
   */
  SupabaseAuthProvider.prototype.getHeaders = function () {
    // For Supabase direct client usage, we mainly use the anon key
    // Session management is handled internally by the Supabase client
    return {
      'Content-Type': 'application/json',
      'apikey': this.config.supabaseKey,
      'Authorization': "Bearer ".concat(this.config.supabaseKey)
    };
  };
  /**
   * Convert Supabase user to AuthUser format
   */
  SupabaseAuthProvider.prototype.convertUser = function (supabaseUser) {
    var _a, _b, _c;
    return {
      id: supabaseUser.id,
      email: supabaseUser.email || '',
      emailVerified: supabaseUser.email_confirmed_at != null,
      name: ((_a = supabaseUser.user_metadata) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = supabaseUser.user_metadata) === null || _b === void 0 ? void 0 : _b.name),
      avatarUrl: (_c = supabaseUser.user_metadata) === null || _c === void 0 ? void 0 : _c.avatar_url,
      phoneNumber: supabaseUser.phone,
      lastSignInAt: supabaseUser.last_sign_in_at ? new Date(supabaseUser.last_sign_in_at) : undefined,
      createdAt: new Date(supabaseUser.created_at),
      updatedAt: new Date(supabaseUser.updated_at || supabaseUser.created_at),
      metadata: supabaseUser.user_metadata
    };
  };
  /**
   * Convert Supabase session to AuthSession format
   */
  SupabaseAuthProvider.prototype.convertSession = function (supabaseSession) {
    var _a, _b;
    return {
      user: this.convertUser(supabaseSession.user),
      accessToken: supabaseSession.access_token,
      refreshToken: supabaseSession.refresh_token,
      expiresAt: supabaseSession.expires_at ? new Date(supabaseSession.expires_at * 1000) : undefined,
      tokenType: supabaseSession.token_type || 'bearer',
      providerToken: (_a = supabaseSession.provider_token) !== null && _a !== void 0 ? _a : undefined,
      providerRefreshToken: (_b = supabaseSession.provider_refresh_token) !== null && _b !== void 0 ? _b : undefined
    };
  };
  /**
   * Convert Supabase error to AuthError format
   */
  SupabaseAuthProvider.prototype.convertError = function (error) {
    logger$1.debug('Converting Supabase error', {
      error: error
    });
    if (!error) {
      return auth.createAuthError('UNKNOWN_ERROR', 'An unknown error occurred');
    }
    var message = error.message || 'An error occurred';
    // Map Supabase error codes to AuthError types
    if (message.includes('Invalid login credentials') || message.includes('Email not confirmed')) {
      return auth.createAuthError('INVALID_CREDENTIALS', 'Invalid email or password');
    }
    if (message.includes('User not found')) {
      return auth.createAuthError('USER_NOT_FOUND', 'User not found');
    }
    if (message.includes('User already registered')) {
      return auth.createAuthError('USER_ALREADY_EXISTS', 'User already exists with this email');
    }
    if (message.includes('Email not confirmed')) {
      return auth.createAuthError('EMAIL_NOT_VERIFIED', 'Please verify your email before signing in');
    }
    if (message.includes('Password should be')) {
      return auth.createAuthError('PASSWORD_TOO_WEAK', 'Password does not meet security requirements');
    }
    if (message.includes('Invalid email')) {
      return auth.createAuthError('INVALID_EMAIL', 'Invalid email format');
    }
    if (message.includes('Signups not allowed')) {
      return auth.createAuthError('SIGNUP_DISABLED', 'User registration is currently disabled');
    }
    if (message.includes('JWT expired') || message.includes('Token expired')) {
      return auth.createAuthError('TOKEN_EXPIRED', 'Session has expired');
    }
    // Default to provider error
    return auth.createAuthError('PROVIDER_ERROR', message, {
      originalError: error
    });
  };
  /**
   * Get current session
   */
  SupabaseAuthProvider.prototype.getCurrentSession = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, error, session, error_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            logger$1.debug('Getting current session');
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.getSession()];
          case 2:
            _a = _b.sent(), data = _a.data, error = _a.error;
            if (error) {
              logger$1.debug('Error getting session', {
                error: error
              });
              return [2 /*return*/, null];
            }
            if (!data.session) {
              logger$1.debug('No active session');
              return [2 /*return*/, null];
            }
            session = this.convertSession(data.session);
            logger$1.debug('Current session retrieved', {
              userId: session.user.id
            });
            return [2 /*return*/, session];
          case 3:
            error_1 = _b.sent();
            logger$1.error('Failed to get current session', {
              error: error_1
            });
            return [2 /*return*/, null];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Get current user
   */
  SupabaseAuthProvider.prototype.getCurrentUser = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, error, user, error_2;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            logger$1.debug('Getting current user');
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.getUser()];
          case 2:
            _a = _b.sent(), data = _a.data, error = _a.error;
            if (error) {
              logger$1.debug('Error getting user', {
                error: error
              });
              return [2 /*return*/, null];
            }
            if (!data.user) {
              logger$1.debug('No authenticated user');
              return [2 /*return*/, null];
            }
            user = this.convertUser(data.user);
            logger$1.debug('Current user retrieved', {
              userId: user.id,
              email: user.email
            });
            return [2 /*return*/, user];
          case 3:
            error_2 = _b.sent();
            logger$1.error('Failed to get current user', {
              error: error_2
            });
            return [2 /*return*/, null];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign up a new user
   */
  SupabaseAuthProvider.prototype.signUp = function (credentials) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, error, user, error_3;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            logger$1.debug('Signing up user', {
              email: credentials.email
            });
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.signUp({
              email: credentials.email,
              password: credentials.password,
              options: {
                data: _assign({
                  full_name: credentials.name
                }, credentials.metadata)
              }
            })];
          case 2:
            _a = _b.sent(), data = _a.data, error = _a.error;
            if (error) {
              logger$1.debug('Sign up failed', {
                error: error
              });
              return [2 /*return*/, auth.createAuthFailure(this.convertError(error))];
            }
            if (!data.user) {
              logger$1.debug('No user returned from sign up');
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Sign up failed'))];
            }
            user = this.convertUser(data.user);
            logger$1.debug('User signed up successfully', {
              userId: user.id
            });
            return [2 /*return*/, auth.createAuthSuccess(user)];
          case 3:
            error_3 = _b.sent();
            logger$1.error('Sign up error', {
              error: error_3
            });
            return [2 /*return*/, auth.createAuthFailure(this.convertError(error_3))];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign in with email and password
   */
  SupabaseAuthProvider.prototype.signIn = function (credentials) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, error, session, error_4;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            logger$1.debug('Signing in user', {
              email: credentials.email
            });
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.signInWithPassword({
              email: credentials.email,
              password: credentials.password
            })];
          case 2:
            _a = _b.sent(), data = _a.data, error = _a.error;
            if (error) {
              logger$1.debug('Sign in failed', {
                error: error
              });
              return [2 /*return*/, auth.createAuthFailure(this.convertError(error))];
            }
            if (!data.session) {
              logger$1.debug('No session returned from sign in');
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Sign in failed'))];
            }
            session = this.convertSession(data.session);
            logger$1.debug('User signed in successfully', {
              userId: session.user.id
            });
            return [2 /*return*/, auth.createAuthSuccess(session)];
          case 3:
            error_4 = _b.sent();
            logger$1.error('Sign in error', {
              error: error_4
            });
            return [2 /*return*/, auth.createAuthFailure(this.convertError(error_4))];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign in with social provider
   */
  SupabaseAuthProvider.prototype.signInWithProvider = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, error, error_5;
      var _b, _c;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            logger$1.debug('Signing in with social provider', {
              provider: options.provider
            });
            _d.label = 1;
          case 1:
            _d.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.signInWithOAuth({
              provider: options.provider,
              options: {
                redirectTo: options.redirectTo || ((_b = this.config.redirectUrls) === null || _b === void 0 ? void 0 : _b.afterSignIn),
                scopes: (_c = options.scopes) === null || _c === void 0 ? void 0 : _c.join(' ')
              }
            })];
          case 2:
            _a = _d.sent(), _a.data, error = _a.error;
            if (error) {
              logger$1.debug('Social sign in failed', {
                error: error
              });
              return [2 /*return*/, auth.createAuthFailure(this.convertError(error))];
            }
            // For OAuth, the actual session will be available after redirect
            // This method initiates the OAuth flow
            logger$1.debug('Social sign in initiated', {
              provider: options.provider
            });
            // Return a placeholder - the real session will come via auth state change
            return [2 /*return*/, auth.createAuthSuccess({})];
          case 3:
            error_5 = _d.sent();
            logger$1.error('Social sign in error', {
              error: error_5
            });
            return [2 /*return*/, auth.createAuthFailure(this.convertError(error_5))];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign out current user
   */
  SupabaseAuthProvider.prototype.signOut = function () {
    return __awaiter(this, void 0, void 0, function () {
      var error, error_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger$1.debug('Signing out user');
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.signOut()];
          case 2:
            error = _a.sent().error;
            if (error) {
              logger$1.debug('Sign out failed', {
                error: error
              });
              return [2 /*return*/, auth.createAuthFailure(this.convertError(error))];
            }
            logger$1.debug('User signed out successfully');
            return [2 /*return*/, auth.createAuthSuccess(null)];
          case 3:
            error_6 = _a.sent();
            logger$1.error('Sign out error', {
              error: error_6
            });
            return [2 /*return*/, auth.createAuthFailure(this.convertError(error_6))];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Send password reset email
   */
  SupabaseAuthProvider.prototype.resetPassword = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var error, error_7;
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            logger$1.debug('Sending password reset email', {
              email: request.email
            });
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.resetPasswordForEmail(request.email, {
              redirectTo: request.redirectTo || ((_a = this.config.redirectUrls) === null || _a === void 0 ? void 0 : _a.passwordReset)
            })];
          case 2:
            error = _b.sent().error;
            if (error) {
              logger$1.debug('Password reset failed', {
                error: error
              });
              return [2 /*return*/, auth.createAuthFailure(this.convertError(error))];
            }
            logger$1.debug('Password reset email sent successfully');
            return [2 /*return*/, auth.createAuthSuccess(null)];
          case 3:
            error_7 = _b.sent();
            logger$1.error('Password reset error', {
              error: error_7
            });
            return [2 /*return*/, auth.createAuthFailure(this.convertError(error_7))];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Update user profile
   */
  SupabaseAuthProvider.prototype.updateProfile = function (update) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, error, user, error_8;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            logger$1.debug('Updating user profile');
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.updateUser({
              data: _assign({
                full_name: update.name,
                avatar_url: update.avatarUrl
              }, update.metadata)
            })];
          case 2:
            _a = _b.sent(), data = _a.data, error = _a.error;
            if (error) {
              logger$1.debug('Profile update failed', {
                error: error
              });
              return [2 /*return*/, auth.createAuthFailure(this.convertError(error))];
            }
            if (!data.user) {
              logger$1.debug('No user returned from profile update');
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Profile update failed'))];
            }
            user = this.convertUser(data.user);
            logger$1.debug('Profile updated successfully');
            return [2 /*return*/, auth.createAuthSuccess(user)];
          case 3:
            error_8 = _b.sent();
            logger$1.error('Profile update error', {
              error: error_8
            });
            return [2 /*return*/, auth.createAuthFailure(this.convertError(error_8))];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Refresh current session
   */
  SupabaseAuthProvider.prototype.refreshSession = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, error, session, error_9;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            logger$1.debug('Refreshing session');
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.client.auth.refreshSession()];
          case 2:
            _a = _b.sent(), data = _a.data, error = _a.error;
            if (error) {
              logger$1.debug('Session refresh failed', {
                error: error
              });
              return [2 /*return*/, auth.createAuthFailure(this.convertError(error))];
            }
            if (!data.session) {
              logger$1.debug('No session returned from refresh');
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('TOKEN_EXPIRED', 'Session refresh failed'))];
            }
            session = this.convertSession(data.session);
            logger$1.debug('Session refreshed successfully');
            return [2 /*return*/, auth.createAuthSuccess(session)];
          case 3:
            error_9 = _b.sent();
            logger$1.error('Session refresh error', {
              error: error_9
            });
            return [2 /*return*/, auth.createAuthFailure(this.convertError(error_9))];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Listen to auth state changes
   */
  SupabaseAuthProvider.prototype.onAuthStateChange = function (callback) {
    var _this = this;
    logger$1.debug('Setting up auth state change listener');
    var subscription = this.client.auth.onAuthStateChange(function (event, session) {
      logger$1.debug('Auth state changed', {
        event: event,
        hasSession: !!session
      });
      if (session) {
        var convertedSession = _this.convertSession(session);
        callback(convertedSession);
      } else {
        callback(null);
      }
    }).data.subscription;
    return function () {
      logger$1.debug('Removing auth state change listener');
      subscription.unsubscribe();
    };
  };
  return SupabaseAuthProvider;
}();

/**
 * QwickAuth Service Client - Default implementation for QwickApps Auth Service
 *
 * This is the default auth service client that communicates with qwickapps-auth-service
 * via HTTP endpoints. Can be replaced with custom implementations for different backends.
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 */
var logger = logging.getLogger('QwickAuthServiceClient');
/**
 * Default implementation of AuthServiceClient for QwickApps Auth Service
 */
var QwickAuthServiceClient = /** @class */function () {
  function QwickAuthServiceClient(config) {
    this.authStateListeners = [];
    this.config = config;
    this.serviceEndpoint = config.serviceEndpoint.replace(/\/$/, ''); // Remove trailing slash
    logger.debug('QwickAuthServiceClient initialized', {
      serviceEndpoint: this.serviceEndpoint
    });
  }
  /**
   * Get headers for API requests - default implementation for standard services
   */
  QwickAuthServiceClient.prototype.getHeaders = function () {
    return {
      'Content-Type': 'application/json',
      'apikey': this.config.supabaseAnonKey,
      'Authorization': "Bearer ".concat(this.config.supabaseAnonKey)
    };
  };
  /**
   * Get current session from service
   */
  QwickAuthServiceClient.prototype.getCurrentSession = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response, data, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            return [4 /*yield*/, fetch("".concat(this.serviceEndpoint, "/auth/me"), {
              method: 'GET',
              credentials: 'include',
              // Include session cookies
              headers: this.getHeaders()
            })];
          case 1:
            response = _a.sent();
            if (!response.ok) {
              if (response.status === 401) {
                // No active session
                return [2 /*return*/, null];
              }
              throw new Error("HTTP ".concat(response.status, ": ").concat(response.statusText));
            }
            return [4 /*yield*/, response.json()];
          case 2:
            data = _a.sent();
            logger.debug('Current session retrieved', {
              hasSession: !!data.session
            });
            return [2 /*return*/, data.session || null];
          case 3:
            error_1 = _a.sent();
            logger.error('Failed to get current session', {
              error: error_1
            });
            return [2 /*return*/, null];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign in with credentials
   */
  QwickAuthServiceClient.prototype.signIn = function (credentials) {
    return __awaiter(this, void 0, void 0, function () {
      var response, data, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            logger.debug('Signing in', {
              email: credentials.email
            });
            return [4 /*yield*/, fetch("".concat(this.serviceEndpoint, "/auth/login"), {
              method: 'POST',
              credentials: 'include',
              headers: this.getHeaders(),
              body: JSON.stringify(credentials)
            })];
          case 1:
            response = _a.sent();
            return [4 /*yield*/, response.json()];
          case 2:
            data = _a.sent();
            if (!response.ok) {
              logger.error('Sign in failed', {
                status: response.status,
                error: data
              });
              return [2 /*return*/, auth.createAuthFailure(data.error || {
                type: 'SIGN_IN_ERROR',
                message: data.message || 'Sign in failed'
              })];
            }
            logger.debug('Sign in successful');
            // Notify listeners
            this.notifyAuthStateChange(data.session);
            return [2 /*return*/, auth.createAuthSuccess(data.session)];
          case 3:
            error_2 = _a.sent();
            logger.error('Sign in error', {
              error: error_2
            });
            return [2 /*return*/, auth.createAuthFailure({
              type: 'NETWORK_ERROR',
              message: 'Failed to connect to authentication service',
              details: error_2
            })];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign up new user
   */
  QwickAuthServiceClient.prototype.signUp = function (credentials) {
    return __awaiter(this, void 0, void 0, function () {
      var response, data, error_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            logger.debug('Signing up', {
              email: credentials.email
            });
            return [4 /*yield*/, fetch("".concat(this.serviceEndpoint, "/auth/register"), {
              method: 'POST',
              credentials: 'include',
              headers: this.getHeaders(),
              body: JSON.stringify(credentials)
            })];
          case 1:
            response = _a.sent();
            return [4 /*yield*/, response.json()];
          case 2:
            data = _a.sent();
            if (!response.ok) {
              logger.error('Sign up failed', {
                status: response.status,
                error: data
              });
              return [2 /*return*/, auth.createAuthFailure(data.error || {
                type: 'SIGN_UP_ERROR',
                message: data.message || 'Sign up failed'
              })];
            }
            logger.debug('Sign up successful');
            return [2 /*return*/, auth.createAuthSuccess(data.user)];
          case 3:
            error_3 = _a.sent();
            logger.error('Sign up error', {
              error: error_3
            });
            return [2 /*return*/, auth.createAuthFailure({
              type: 'NETWORK_ERROR',
              message: 'Failed to connect to authentication service',
              details: error_3
            })];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign out current user
   */
  QwickAuthServiceClient.prototype.signOut = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response, data, error_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 4,, 5]);
            logger.debug('Signing out');
            return [4 /*yield*/, fetch("".concat(this.serviceEndpoint, "/auth/logout"), {
              method: 'POST',
              credentials: 'include',
              headers: this.getHeaders()
            })];
          case 1:
            response = _a.sent();
            if (!!response.ok) return [3 /*break*/, 3];
            return [4 /*yield*/, response.json()];
          case 2:
            data = _a.sent();
            logger.error('Sign out failed', {
              status: response.status,
              error: data
            });
            return [2 /*return*/, auth.createAuthFailure(data.error || {
              type: 'SIGN_OUT_ERROR',
              message: data.message || 'Sign out failed'
            })];
          case 3:
            logger.debug('Sign out successful');
            // Notify listeners
            this.notifyAuthStateChange(null);
            return [2 /*return*/, auth.createAuthSuccess(null)];
          case 4:
            error_4 = _a.sent();
            logger.error('Sign out error', {
              error: error_4
            });
            return [2 /*return*/, auth.createAuthFailure({
              type: 'NETWORK_ERROR',
              message: 'Failed to connect to authentication service',
              details: error_4
            })];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Request password reset
   */
  QwickAuthServiceClient.prototype.resetPassword = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var response, data, error_5;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            logger.debug('Requesting password reset', {
              email: request.email
            });
            return [4 /*yield*/, fetch("".concat(this.serviceEndpoint, "/auth/reset-password"), {
              method: 'POST',
              headers: this.getHeaders(),
              body: JSON.stringify(request)
            })];
          case 1:
            response = _a.sent();
            return [4 /*yield*/, response.json()];
          case 2:
            data = _a.sent();
            if (!response.ok) {
              logger.error('Password reset failed', {
                status: response.status,
                error: data
              });
              return [2 /*return*/, auth.createAuthFailure(data.error || {
                type: 'PASSWORD_RESET_ERROR',
                message: data.message || 'Password reset failed'
              })];
            }
            logger.debug('Password reset email sent');
            return [2 /*return*/, auth.createAuthSuccess(null)];
          case 3:
            error_5 = _a.sent();
            logger.error('Password reset error', {
              error: error_5
            });
            return [2 /*return*/, auth.createAuthFailure({
              type: 'NETWORK_ERROR',
              message: 'Failed to connect to authentication service',
              details: error_5
            })];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Update user profile
   */
  QwickAuthServiceClient.prototype.updateProfile = function (update) {
    return __awaiter(this, void 0, void 0, function () {
      var response, data, error_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            logger.debug('Updating profile');
            return [4 /*yield*/, fetch("".concat(this.serviceEndpoint, "/auth/profile"), {
              method: 'PATCH',
              credentials: 'include',
              headers: this.getHeaders(),
              body: JSON.stringify(update)
            })];
          case 1:
            response = _a.sent();
            return [4 /*yield*/, response.json()];
          case 2:
            data = _a.sent();
            if (!response.ok) {
              logger.error('Profile update failed', {
                status: response.status,
                error: data
              });
              return [2 /*return*/, auth.createAuthFailure(data.error || {
                type: 'PROFILE_UPDATE_ERROR',
                message: data.message || 'Profile update failed'
              })];
            }
            logger.debug('Profile update successful');
            return [2 /*return*/, auth.createAuthSuccess(data.user)];
          case 3:
            error_6 = _a.sent();
            logger.error('Profile update error', {
              error: error_6
            });
            return [2 /*return*/, auth.createAuthFailure({
              type: 'NETWORK_ERROR',
              message: 'Failed to connect to authentication service',
              details: error_6
            })];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Refresh current session
   */
  QwickAuthServiceClient.prototype.refreshSession = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response, data, error_7;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            logger.debug('Refreshing session');
            return [4 /*yield*/, fetch("".concat(this.serviceEndpoint, "/auth/refresh"), {
              method: 'POST',
              credentials: 'include',
              headers: this.getHeaders()
            })];
          case 1:
            response = _a.sent();
            return [4 /*yield*/, response.json()];
          case 2:
            data = _a.sent();
            if (!response.ok) {
              logger.error('Session refresh failed', {
                status: response.status,
                error: data
              });
              return [2 /*return*/, auth.createAuthFailure(data.error || {
                type: 'SESSION_REFRESH_ERROR',
                message: data.message || 'Session refresh failed'
              })];
            }
            logger.debug('Session refresh successful');
            // Notify listeners
            this.notifyAuthStateChange(data.session);
            return [2 /*return*/, auth.createAuthSuccess(data.session)];
          case 3:
            error_7 = _a.sent();
            logger.error('Session refresh error', {
              error: error_7
            });
            return [2 /*return*/, auth.createAuthFailure({
              type: 'NETWORK_ERROR',
              message: 'Failed to connect to authentication service',
              details: error_7
            })];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * Sign in with social provider
   */
  QwickAuthServiceClient.prototype.signInWithProvider = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      var redirectUrl;
      return __generator(this, function (_a) {
        try {
          logger.debug('Social sign in requested', {
            provider: options.provider
          });
          redirectUrl = "".concat(this.serviceEndpoint, "/auth/").concat(options.provider);
          // Store current location for redirect back
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('auth_redirect_url', window.location.href);
            window.location.href = redirectUrl;
          }
          // This is a redirect, so we return a success immediately
          // The actual session will be handled after redirect
          return [2 /*return*/, auth.createAuthSuccess(null)];
        } catch (error) {
          logger.error('Social sign in error', {
            error: error
          });
          return [2 /*return*/, auth.createAuthFailure({
            type: 'UNKNOWN_ERROR',
            message: 'Failed to initiate social authentication',
            details: error
          })];
        }
        return [2 /*return*/];
      });
    });
  };
  /**
   * Set up auth state change listener
   */
  QwickAuthServiceClient.prototype.onAuthStateChange = function (callback) {
    var _this = this;
    this.authStateListeners.push(callback);
    // Return unsubscribe function
    return function () {
      var index = _this.authStateListeners.indexOf(callback);
      if (index > -1) {
        _this.authStateListeners.splice(index, 1);
      }
    };
  };
  /**
   * Notify all listeners of auth state changes
   */
  QwickAuthServiceClient.prototype.notifyAuthStateChange = function (session, error) {
    this.authStateListeners.forEach(function (callback) {
      try {
        callback(session, error);
      } catch (error) {
        logger.error('Auth state listener error', {
          error: error
        });
      }
    });
  };
  return QwickAuthServiceClient;
}();

/**
 * SuperTokens Authentication Provider
 *
 * Client-side auth provider using SuperTokens for session management
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 */
var SuperTokensAuthProvider = /** @class */function () {
  function SuperTokensAuthProvider(config) {
    this.initialized = false;
    this.authStateListeners = [];
    this.config = _assign(_assign({}, config), {
      apiBasePath: config.apiBasePath || '/api/auth'
    });
  }
  SuperTokensAuthProvider.prototype.initialize = function () {
    return __awaiter(this, void 0, void 0, function () {
      var SuperTokens, Session, EmailPassword, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this.initialized) return [2 /*return*/];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 5,, 6]);
            return [4 /*yield*/, import('supertokens-web-js')];
          case 2:
            SuperTokens = _a.sent().default;
            return [4 /*yield*/, import('supertokens-web-js/recipe/session')];
          case 3:
            Session = _a.sent().default;
            return [4 /*yield*/, import('supertokens-web-js/recipe/emailpassword')];
          case 4:
            EmailPassword = _a.sent().default;
            SuperTokens.init({
              appInfo: {
                appName: this.config.appName,
                apiDomain: this.config.apiDomain,
                apiBasePath: this.config.apiBasePath
              },
              recipeList: [Session.init(), EmailPassword.init()]
            });
            this.initialized = true;
            return [3 /*break*/, 6];
          case 5:
            error_1 = _a.sent();
            console.error('[SuperTokensAuthProvider] Initialization failed:', error_1);
            throw error_1;
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.getCurrentSession = function () {
    return __awaiter(this, void 0, void 0, function () {
      var Session, accessToken, response, user, error_2, authError;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.initialize()];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 9,, 10]);
            return [4 /*yield*/, import('supertokens-web-js/recipe/session')];
          case 3:
            Session = _a.sent().default;
            return [4 /*yield*/, Session.doesSessionExist()];
          case 4:
            if (!_a.sent()) {
              return [2 /*return*/, null];
            }
            return [4 /*yield*/, Session.getUserId()];
          case 5:
            _a.sent();
            return [4 /*yield*/, Session.getAccessToken()];
          case 6:
            accessToken = _a.sent();
            return [4 /*yield*/, fetch("".concat(this.config.apiDomain, "/api/users/me"), {
              headers: this.getHeaders()
            })];
          case 7:
            response = _a.sent();
            if (!response.ok) {
              return [2 /*return*/, null];
            }
            return [4 /*yield*/, response.json()];
          case 8:
            user = _a.sent();
            return [2 /*return*/, {
              user: user,
              accessToken: accessToken || '',
              refreshToken: '',
              // SuperTokens manages refresh tokens internally
              expiresAt: new Date(Date.now() + 3600000),
              // 1 hour default
              tokenType: 'bearer'
            }];
          case 9:
            error_2 = _a.sent();
            authError = auth.createAuthError('UNKNOWN_ERROR', error_2 instanceof Error ? error_2.message : 'Failed to get current session');
            // Notify listeners of the error
            this.notifyAuthStateChange(null, authError);
            return [2 /*return*/, null];
          case 10:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.signIn = function (credentials) {
    return __awaiter(this, void 0, void 0, function () {
      var EmailPassword, response, errorType, errorMessage, session, error_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.initialize()];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 6,, 7]);
            return [4 /*yield*/, import('supertokens-web-js/recipe/emailpassword')];
          case 3:
            EmailPassword = _a.sent().default;
            return [4 /*yield*/, EmailPassword.signIn({
              formFields: [{
                id: 'email',
                value: credentials.email
              }, {
                id: 'password',
                value: credentials.password
              }]
            })];
          case 4:
            response = _a.sent();
            if (response.status !== 'OK') {
              errorType = response.status === 'WRONG_CREDENTIALS_ERROR' ? 'INVALID_CREDENTIALS' : 'UNKNOWN_ERROR';
              errorMessage = response.status === 'WRONG_CREDENTIALS_ERROR' ? 'Invalid email or password' : 'Sign in failed';
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError(errorType, errorMessage))];
            }
            return [4 /*yield*/, this.getCurrentSession()];
          case 5:
            session = _a.sent();
            if (!session) {
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Failed to create session'))];
            }
            this.notifyAuthStateChange(session);
            return [2 /*return*/, auth.createAuthSuccess(session)];
          case 6:
            error_3 = _a.sent();
            return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', error_3 instanceof Error ? error_3.message : 'Sign in failed'))];
          case 7:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.signUp = function (credentials) {
    return __awaiter(this, void 0, void 0, function () {
      var EmailPassword, formFields, response, errorType, errorMessage, session, error_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.initialize()];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 6,, 7]);
            return [4 /*yield*/, import('supertokens-web-js/recipe/emailpassword')];
          case 3:
            EmailPassword = _a.sent().default;
            formFields = [{
              id: 'email',
              value: credentials.email
            }, {
              id: 'password',
              value: credentials.password
            }];
            return [4 /*yield*/, EmailPassword.signUp({
              formFields: formFields
            })];
          case 4:
            response = _a.sent();
            if (response.status !== 'OK') {
              errorType = response.status === 'FIELD_ERROR' ? 'INVALID_EMAIL' : 'UNKNOWN_ERROR';
              errorMessage = response.status === 'FIELD_ERROR' ? 'Invalid registration data' : 'Registration failed';
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError(errorType, errorMessage))];
            }
            return [4 /*yield*/, this.getCurrentSession()];
          case 5:
            session = _a.sent();
            if (!session) {
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Registration successful but session creation failed'))];
            }
            this.notifyAuthStateChange(session);
            return [2 /*return*/, auth.createAuthSuccess(session.user)];
          case 6:
            error_4 = _a.sent();
            return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', error_4 instanceof Error ? error_4.message : 'Registration failed'))];
          case 7:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.signOut = function () {
    return __awaiter(this, void 0, void 0, function () {
      var Session, error_5;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.initialize()];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5,, 6]);
            return [4 /*yield*/, import('supertokens-web-js/recipe/session')];
          case 3:
            Session = _a.sent().default;
            return [4 /*yield*/, Session.signOut()];
          case 4:
            _a.sent();
            this.notifyAuthStateChange(null);
            return [2 /*return*/, auth.createAuthSuccess(null)];
          case 5:
            error_5 = _a.sent();
            return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', error_5 instanceof Error ? error_5.message : 'Sign out failed'))];
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.resetPassword = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var EmailPassword, response, error_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.initialize()];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5,, 6]);
            return [4 /*yield*/, import('supertokens-web-js/recipe/emailpassword')];
          case 3:
            EmailPassword = _a.sent().default;
            return [4 /*yield*/, EmailPassword.sendPasswordResetEmail({
              formFields: [{
                id: 'email',
                value: request.email
              }]
            })];
          case 4:
            response = _a.sent();
            if (response.status !== 'OK') {
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Failed to send password reset email'))];
            }
            return [2 /*return*/, auth.createAuthSuccess(null)];
          case 5:
            error_6 = _a.sent();
            return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', error_6 instanceof Error ? error_6.message : 'Password reset failed'))];
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.updateProfile = function (update) {
    return __awaiter(this, void 0, void 0, function () {
      var response, user, error_7;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.initialize()];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5,, 6]);
            return [4 /*yield*/, fetch("".concat(this.config.apiDomain, "/api/users/me"), {
              method: 'PATCH',
              headers: _assign(_assign({}, this.getHeaders()), {
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify(update)
            })];
          case 3:
            response = _a.sent();
            if (!response.ok) {
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Failed to update profile'))];
            }
            return [4 /*yield*/, response.json()];
          case 4:
            user = _a.sent();
            return [2 /*return*/, auth.createAuthSuccess(user)];
          case 5:
            error_7 = _a.sent();
            return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', error_7 instanceof Error ? error_7.message : 'Profile update failed'))];
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.refreshSession = function () {
    return __awaiter(this, void 0, void 0, function () {
      var Session, session, error_8;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.initialize()];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 6,, 7]);
            return [4 /*yield*/, import('supertokens-web-js/recipe/session')];
          case 3:
            Session = _a.sent().default;
            return [4 /*yield*/, Session.doesSessionExist()];
          case 4:
            // SuperTokens handles session refresh automatically
            // Just verify session exists
            if (!_a.sent()) {
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('TOKEN_EXPIRED', 'No active session'))];
            }
            return [4 /*yield*/, this.getCurrentSession()];
          case 5:
            session = _a.sent();
            if (!session) {
              return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', 'Failed to refresh session'))];
            }
            return [2 /*return*/, auth.createAuthSuccess(session)];
          case 6:
            error_8 = _a.sent();
            return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('UNKNOWN_ERROR', error_8 instanceof Error ? error_8.message : 'Session refresh failed'))];
          case 7:
            return [2 /*return*/];
        }
      });
    });
  };
  SuperTokensAuthProvider.prototype.signInWithProvider = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        // SuperTokens social login would be implemented here
        // For now, return not implemented
        return [2 /*return*/, auth.createAuthFailure(auth.createAuthError('NOT_IMPLEMENTED', 'Social login not yet implemented for SuperTokens'))];
      });
    });
  };
  SuperTokensAuthProvider.prototype.onAuthStateChange = function (callback) {
    var _this = this;
    this.authStateListeners.push(callback);
    // Return unsubscribe function
    return function () {
      var index = _this.authStateListeners.indexOf(callback);
      if (index > -1) {
        _this.authStateListeners.splice(index, 1);
      }
    };
  };
  SuperTokensAuthProvider.prototype.getHeaders = function () {
    // SuperTokens manages headers automatically via interceptors
    // Return empty headers as SuperTokens SDK handles auth headers
    return {};
  };
  SuperTokensAuthProvider.prototype.notifyAuthStateChange = function (session, error) {
    this.authStateListeners.forEach(function (listener) {
      try {
        listener(session, error);
      } catch (err) {
        console.error('[SuperTokensAuthProvider] Auth state listener error:', err);
      }
    });
  };
  return SuperTokensAuthProvider;
}();
/**
 * Factory function for creating SuperTokens auth provider
 */
function createSuperTokensProvider(config) {
  return new SuperTokensAuthProvider(config);
}

/**
 * QwickApps Authentication Client Library
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * This software is proprietary and confidential.
 *
 * Complete React authentication solution with built-in Supabase integration,
 * auth UI components, and zero-configuration setup for client applications.
 */
// Main authentication provider and hooks
// Constants
var QWICKAPPS_AUTH_CLIENT_VERSION = '1.0.0';
/**
 * Create a client configuration for authentication services
 */
function createAuthConfig(config) {
  var _a;
  return {
    serviceEndpoint: config.serviceEndpoint,
    supportedAuthTypes: config.supportedAuthTypes || ['email-password'],
    defaultAuthType: config.defaultAuthType || 'email-password',
    appName: config.appName,
    socialProviders: (_a = config.socialProviders) === null || _a === void 0 ? void 0 : _a.map(function (provider) {
      return {
        id: provider,
        name: provider,
        enabled: true
      };
    })
  };
}

exports.AccessGuard = AccessGuard;
exports.AuthProvider = AuthProvider;
exports.AuthRoutes = AuthRoutes;
exports.LoginForm = LoginForm;
exports.LoginPage = LoginPage;
exports.LogoutButton = LogoutButton;
exports.PasswordResetConfirmForm = PasswordResetConfirmForm;
exports.PasswordResetConfirmPage = PasswordResetConfirmPage;
exports.PasswordResetForm = PasswordResetForm;
exports.PasswordResetPage = PasswordResetPage;
exports.QWICKAPPS_AUTH_CLIENT_VERSION = QWICKAPPS_AUTH_CLIENT_VERSION;
exports.QwickAuthServiceClient = QwickAuthServiceClient;
exports.RegisterForm = RegisterForm;
exports.RegisterPage = RegisterPage;
exports.RouteGuard = RouteGuard;
exports.SignInFooterLink = SignInFooterLink;
exports.SignUpFooterLink = SignUpFooterLink;
exports.SocialAuthBlock = SocialAuthBlock;
exports.SocialLoginButton = SocialLoginButton;
exports.SupabaseAuthProvider = SupabaseAuthProvider;
exports.SuperTokensAuthProvider = SuperTokensAuthProvider;
exports.createAuthConfig = createAuthConfig;
exports.createSuperTokensProvider = createSuperTokensProvider;
exports.default = AuthProvider;
exports.useAuth = useAuth;
exports.useHasAnyRole = useHasAnyRole;
exports.useHasRole = useHasRole;
exports.useIsAuthenticated = useIsAuthenticated;
//# sourceMappingURL=index.js.map
