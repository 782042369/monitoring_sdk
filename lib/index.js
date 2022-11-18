(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MonitorJS = {}));
})(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module) {
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
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _createClass = unwrapExports(createClass);

	var defineProperty = createCommonjsModule(function (module) {
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

	module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _defineProperty = unwrapExports(defineProperty);

	var asyncToGenerator = createCommonjsModule(function (module) {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _asyncToGenerator = unwrapExports(asyncToGenerator);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  Object.defineProperty(subClass, "prototype", {
	    value: Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    }),
	    writable: false
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _inherits = unwrapExports(inherits);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}

	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(_typeof_1);

	var assertThisInitialized = createCommonjsModule(function (module) {
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _assertThisInitialized = unwrapExports(assertThisInitialized);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];



	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return assertThisInitialized(self);
	}

	module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _getPrototypeOf = unwrapExports(getPrototypeOf);

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  define(Gp, "constructor", GeneratorFunctionPrototype);
	  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });

	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
	});

	var regenerator = runtime_1;

	/*
	 * @Author: 杨宏旋
	 * @Date: 2021-07-19 18:15:10
	 * @LastEditors: yanghongxuan
	 * @LastEditTime: 2021-12-27 17:48:56
	 * @Description:
	 */

	/**
	 * 日志类型枚举
	 */
	var CategoryEnum;

	(function (CategoryEnum) {
	  /**
	   * js 日志
	   */
	  CategoryEnum["JS"] = "js";
	  /**
	   * 资源引用日志
	   */

	  CategoryEnum["RESOURCE"] = "resource";
	  /**
	   * Vue日志
	   */

	  CategoryEnum["VUE"] = "vue";
	  /**
	   * promise 日志
	   */

	  CategoryEnum["PROMISE"] = "promise";
	  /**
	   * ajax异步请求日志
	   */

	  CategoryEnum["AJAX"] = "ajax";
	  /**
	   * 跨域js日志
	   */

	  CategoryEnum["CROSS_SCRIPT"] = "cross_srcipt";
	  /**
	   * 未知异常
	   */

	  CategoryEnum["UNKNOW"] = "unknow";
	  /**
	   * 性能上报
	   */

	  CategoryEnum["PERFORMANCE"] = "performance";
	})(CategoryEnum || (CategoryEnum = {}));
	/**
	 * Ajax库枚举
	 */


	var AjaxLibEnum;

	(function (AjaxLibEnum) {
	  AjaxLibEnum["XHR"] = "xhr";
	  AjaxLibEnum["FETCH"] = "fetch";
	})(AjaxLibEnum || (AjaxLibEnum = {}));
	/**
	 * Ajax请求方式枚举
	 */


	var AjaxMethodEnum;

	(function (AjaxMethodEnum) {
	  AjaxMethodEnum["GET"] = "get";
	  AjaxMethodEnum["POST"] = "post";
	  AjaxMethodEnum["DELETE"] = "delete";
	  AjaxMethodEnum["PUT"] = "put";
	})(AjaxMethodEnum || (AjaxMethodEnum = {}));
	/**
	 * 缓存key枚举
	 */


	var StorageKeyEnum;

	(function (StorageKeyEnum) {
	  StorageKeyEnum["FIRST_PV"] = "ps_first";
	  StorageKeyEnum["MARKUSER"] = "ps_markUser";
	  StorageKeyEnum["MARKTIME"] = "ps_markUvTime";
	  StorageKeyEnum["MARKUV"] = "ps_markUv";
	})(StorageKeyEnum || (StorageKeyEnum = {}));

	var isNativeFunction = createCommonjsModule(function (module) {
	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(isNativeFunction);

	var isNativeReflectConstruct = createCommonjsModule(function (module) {
	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(isNativeReflectConstruct);

	var construct = createCommonjsModule(function (module) {
	function _construct(Parent, args, Class) {
	  if (isNativeReflectConstruct()) {
	    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  } else {
	    module.exports = _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) setPrototypeOf(instance, Class.prototype);
	      return instance;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  }

	  return _construct.apply(null, arguments);
	}

	module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(construct);

	var wrapNativeSuper = createCommonjsModule(function (module) {
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return construct(Class, arguments, getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return setPrototypeOf(Wrapper, Class);
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _wrapNativeSuper(Class);
	}

	module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _wrapNativeSuper = unwrapExports(wrapNativeSuper);

	function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	function checkUrl(url) {
	  if (!url) {
	    return false;
	  }

	  var urlRule = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
	  return urlRule.test(url);
	}

	function type(obj) {
	  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
	}

	function isFunction(func) {
	  return type(func) === 'Function';
	}
	function isArray(list) {
	  return type(list) === 'Array';
	}
	function isString(list) {
	  return type(list) === 'String';
	}
	/**
	 * 是否是对象
	 * @param {*} obj
	 */

	function isObject(obj) {
	  return type(obj) === 'Object';
	}
	var MyDate = /*#__PURE__*/function (_Date) {
	  _inherits(MyDate, _Date);

	  var _super = _createSuper$6(MyDate);

	  function MyDate() {
	    _classCallCheck(this, MyDate);

	    return _super.call(this);
	  }

	  _createClass(MyDate, [{
	    key: "format",
	    value: function format(fmt) {
	      var o = {
	        'M+': this.getMonth() + 1,
	        'd+': this.getDate(),
	        'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
	        'H+': this.getHours(),
	        'm+': this.getMinutes(),
	        's+': this.getSeconds(),
	        'q+': Math.floor((this.getMonth() + 3) / 3),
	        S: this.getMilliseconds() // 毫秒

	      };
	      var week = {
	        '0': '/u65e5',
	        '1': '/u4e00',
	        '2': '/u4e8c',
	        '3': '/u4e09',
	        '4': '/u56db',
	        '5': '/u4e94',
	        '6': '/u516d'
	      };

	      if (/(y+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, "".concat(String(this.getFullYear())).substr(4 - RegExp.$1.length));
	      }

	      if (/(E+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468' : '') + week["".concat(String(this.getDay()))]);
	      }

	      for (var k in o) {
	        if (new RegExp("(".concat(k, ")")).test(fmt)) {
	          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : "00".concat(o[k]).substr("".concat(String(o[k])).length));
	        }
	      }

	      return fmt;
	    }
	  }]);

	  return MyDate;
	}( /*#__PURE__*/_wrapNativeSuper(Date));
	function getLocationHref() {
	  if (typeof document === 'undefined' || document.location === null) return '';
	  return document.location.href;
	}
	function randomString() {
	  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
	  var maxPos = $chars.length;
	  var pwd = '';

	  for (var i = 0; i < len; i++) {
	    pwd = pwd + $chars.charAt(Math.floor(Math.random() * maxPos));
	  }

	  return pwd + new Date().getTime();
	}
	/**
	 * 获得markpage
	 */

	function markUser(userID) {
	  if (userID) {
	    return String(userID);
	  }

	  var psMarkUser = localStorage.getItem(StorageKeyEnum.MARKUSER) || '';

	  if (!psMarkUser) {
	    psMarkUser = randomString();
	    localStorage.setItem(StorageKeyEnum.MARKUSER, psMarkUser);
	  }

	  return psMarkUser;
	}
	/**
	 * 获得Uv
	 */

	function markUv() {
	  var date = new MyDate();
	  var psMarkUv = localStorage.getItem(StorageKeyEnum.MARKUV) || '';
	  var datatime = localStorage.getItem(StorageKeyEnum.MARKTIME) || '';
	  var today = date.format('yyyy/MM/dd 23:59:59');

	  if (!psMarkUv && !datatime || date.getTime() > datatime * 1) {
	    psMarkUv = randomString();
	    localStorage.setItem(StorageKeyEnum.MARKUV, psMarkUv);
	    localStorage.setItem(StorageKeyEnum.MARKTIME, JSON.stringify(new Date(today).getTime()));
	  }

	  return psMarkUv;
	}
	/**
	 *
	 * @returns 获取横竖屏状态
	 */

	function getOrientationStatus() {
	  var orientationStatus = '';
	  var orientation = window.matchMedia('(orientation: portrait)');

	  if (orientation.matches) {
	    orientationStatus = '竖屏';
	  } else {
	    orientationStatus = '横屏';
	  }

	  return orientationStatus;
	}
	/**
	 *
	 * @returns 获取网络状态
	 */

	function getNetwork() {
	  var _navigator, _navigator$connection;

	  var netWork = (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator$connection = _navigator.connection) === null || _navigator$connection === void 0 ? void 0 : _navigator$connection.effectiveType;
	  return netWork;
	}
	/**
	 *
	 * @returns 获取当前语言
	 */

	function getLanguage() {
	  var language = window.navigator.language;
	  var arr = language.split('-');

	  if (arr[1]) {
	    arr[1] = arr[1].toUpperCase();
	  }

	  return arr.join('_');
	}
	/**
	 *
	 * @returns 生成浏览器指纹
	 */

	function bin2hex(s) {
	  var i,
	      l,
	      n,
	      o = '';
	  s += '';

	  for (i = 0, l = s.length; i < l; i++) {
	    n = s.charCodeAt(i).toString(16);
	    o += n.length < 2 ? "0".concat(n) : n;
	  }

	  return o;
	}

	function createFingerprint() {
	  var canvas = document.createElement('canvas');
	  var ctx = canvas.getContext('2d');
	  var txt = window.location.host;
	  ctx.textBaseline = 'top';
	  ctx.font = "14px 'Arial'";
	  ctx.textBaseline = 'alphabetic';
	  ctx.fillStyle = '#f60';
	  ctx.fillRect(125, 1, 62, 20);
	  ctx.fillStyle = '#069';
	  ctx.fillText(txt, 2, 15);
	  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
	  ctx.fillText(txt, 4, 17);
	  var b64 = canvas.toDataURL().replace('data:image/png;base64,', '');
	  var bin = atob(b64);
	  var crc = bin2hex(bin.slice(-16, -12));
	  return crc;
	}

	function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	/**
	 * 数据持久化
	 */

	var API = /*#__PURE__*/function () {
	  function API(reportUrl) {
	    _classCallCheck(this, API);

	    _defineProperty(this, "reportUrl", void 0);

	    this.reportUrl = reportUrl;
	  }
	  /**
	   * 上报信息 （默认方式）
	   */


	  _createClass(API, [{
	    key: "report",
	    value: function report(data) {
	      if (!checkUrl(this.reportUrl)) {
	        throw "\u4E0A\u62A5\u4FE1\u606Furl\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E,reportUrl=".concat(this.reportUrl);
	      }

	      var reportInfo = this.formatParams(_objectSpread$3(_objectSpread$3({}, data), {}, {
	        //   first: firstIn(),
	        device: JSON.stringify({
	          lan: getLanguage(),
	          net: getNetwork(),
	          orientation: getOrientationStatus(),
	          fingerprint: createFingerprint(),
	          h: window.screen.height,
	          w: window.screen.width // 屏幕宽

	        })
	      }));

	      if ('sendBeacon' in navigator) {
	        this.reportByNavigator(reportInfo);
	      } else {
	        this.reportByImg(reportInfo);
	      }
	    }
	    /**
	     * 发送消息
	     */
	    // sendInfo(data: {
	    //   category: CategoryEnum
	    //   appID: OptionsType['appID']
	    //   url: string
	    //   log: string
	    //   markUser: string
	    //   markUv: string
	    // }) {
	    //   const dataStr = JSON.stringify(data)
	    //   try {
	    //     if (fetch) {
	    //       fetch(this.reportUrl, {
	    //         headers: {
	    //           'Content-Type': 'application/json',
	    //         },
	    //         method: 'POST',
	    //         body: dataStr,
	    //         mode: 'same-origin', // 告诉浏览器是同源，同源后浏览器不会进行预检请求
	    //         keepalive: true,
	    //       })
	    //       return
	    //     }
	    //   } catch (error) {
	    //     console.info('fetch请求异常', error)
	    //   }
	    //   try {
	    //     const xhr = new XMLHttpRequest()
	    //     xhr.open('POST', this.reportUrl, true)
	    //     // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    //     xhr.setRequestHeader('Content-Type', 'application/json')
	    //     xhr.send(dataStr)
	    //   } catch (error) {
	    //     console.info(error)
	    //   }
	    // }

	    /**
	     * 通过img方式上报信息
	     */

	  }, {
	    key: "reportByImg",
	    value: function reportByImg(data) {
	      if (!checkUrl(this.reportUrl)) {
	        throw "\u4E0A\u62A5\u4FE1\u606Furl\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E,reportUrl=".concat(this.reportUrl);
	      }

	      try {
	        var img = new Image();
	        img.src = "".concat(this.reportUrl, "/up.gif?v=").concat(new Date().getTime(), "&").concat(data);
	      } catch (error) {
	        console.info(error);
	      }
	    }
	    /**
	     * sendBeacon上报
	     */

	  }, {
	    key: "reportByNavigator",
	    value: function reportByNavigator(data) {
	      navigator.sendBeacon(this.reportUrl, data);
	    }
	    /*
	     *格式化参数
	     */

	  }, {
	    key: "formatParams",
	    value: function formatParams(data) {
	      var arr = [];

	      for (var name in data) {
	        arr.push("".concat(encodeURIComponent(name), "=").concat(encodeURIComponent(data[name])));
	      }

	      return arr.join('&');
	    }
	  }]);

	  return API;
	}();

	/*
	 * @Author: 杨宏旋
	 * @Date: 2021-07-19 18:15:10
	 * @LastEditors: yanghongxuan
	 * @LastEditTime: 2021-12-27 10:30:13
	 * @Description:
	 */
	/**
	 * 消息队列
	 */

	var TaskQueue = {
	  /**
	   * 是否停止fire
	   */
	  isStop: true,

	  /**
	   * 待处理消息列表
	   */
	  queues: [],

	  /**
	   * 添加消息
	   * @param {*} reportUrl 上报url
	   * @param {*} data 上报数据
	   */
	  add: function add(reportUrl, data) {
	    this.queues.push({
	      reportUrl: reportUrl,
	      data: data
	    });
	  },

	  /**
	   * 统一上报
	   */
	  fire: function fire() {
	    if (!this.queues || this.queues.length === 0) {
	      this.isStop = true;
	      return;
	    }

	    this.isStop = false;
	    var item = this.queues[0];
	    new API(item.reportUrl).report(item.data);
	    this.queues.splice(0, 1);
	    this.fire(); // 递归
	  }
	};

	/* eslint-disable no-undef */
	/*
	 * @Author: 杨宏旋
	 * @Date: 2020-05-31 22:47:24
	 * @LastEditors: yanghongxuan
	 * @LastEditTime: 2021-12-22 15:22:34
	 * @Description:
	 */

	function getSelectors(path) {
	  return path.reverse().filter(function (element) {
	    return element !== document && element !== window;
	  }).map(function (element) {
	    var selector = '';

	    if (element.id) {
	      return "".concat(element.nodeName.toLowerCase(), "#").concat(element.id);
	    } else if (element.className && typeof element.className === 'string') {
	      return "".concat(element.nodeName.toLowerCase(), ".").concat(element.className);
	    } else {
	      selector = element.nodeName.toLowerCase();
	    }

	    return selector;
	  }).join(' ');
	}

	function getSelector (pathsOrTarget) {
	  if (isArray(pathsOrTarget)) {
	    // 可能是一个数组
	    return getSelectors(pathsOrTarget);
	  } else {
	    // 也有可有是一个对象
	    var path = [];

	    while (pathsOrTarget) {
	      path.push(pathsOrTarget);
	      pathsOrTarget = pathsOrTarget.parentNode;
	    }

	    return getSelectors(path);
	  }
	}

	/*
	 * @Author: 杨宏旋
	 * @Date: 2020-05-31 22:47:24
	 * @LastEditors: 杨宏旋
	 * @LastEditTime: 2021-07-20 13:19:24
	 * @Description:
	 */
	var lastEvent;
	['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(function (eventType) {
	  document.addEventListener(eventType, function (event) {
	    lastEvent = event;
	  }, {
	    capture: true,
	    passive: true // 默认不阻止默认事件

	  });
	});
	function getLastEvent () {
	  return lastEvent;
	}

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	/**
	 * 监控基类
	 */

	var BaseMonitor = /*#__PURE__*/function () {
	  // Breadcrumb: Breadcrumb

	  /**
	   * 上报错误地址
	   * @param {*} params { reportUrl,extendsInfo }
	   */
	  function BaseMonitor(params) {
	    _classCallCheck(this, BaseMonitor);

	    _defineProperty(this, "category", void 0);

	    _defineProperty(this, "msg", void 0);

	    _defineProperty(this, "url", void 0);

	    _defineProperty(this, "line", void 0);

	    _defineProperty(this, "col", void 0);

	    _defineProperty(this, "errorObj", void 0);

	    _defineProperty(this, "reportUrl", void 0);

	    _defineProperty(this, "extendsInfo", void 0);

	    _defineProperty(this, "appID", void 0);

	    _defineProperty(this, "userID", void 0);

	    this.category = CategoryEnum.UNKNOW; // 错误类型

	    this.msg = ''; // 错误信息

	    this.url = ''; // 错误信息地址

	    this.line = ''; // 行数

	    this.col = ''; // 列数

	    this.errorObj = {}; // 错误堆栈

	    this.reportUrl = params.reportUrl; // 上报错误地址

	    this.extendsInfo = params.extendsInfo; // 扩展信息

	    this.appID = params.appID; // 应用id

	    if (params.userID !== undefined) {
	      this.userID = params.userID; // 用户id
	    } // this.Breadcrumb = new Breadcrumb()

	  }
	  /**
	   * 记录错误信息
	   */


	  _createClass(BaseMonitor, [{
	    key: "recordError",
	    value: function recordError() {
	      this.handleRecordError(); // 延迟记录日志

	      setTimeout(function () {
	        TaskQueue.isStop && TaskQueue.fire(); // 停止则fire
	      }, 100);
	    }
	    /**
	     * 处理记录日志
	     */

	  }, {
	    key: "handleRecordError",
	    value: function handleRecordError() {
	      try {
	        if (!this.msg) {
	          return;
	        } // 过滤掉错误上报地址


	        if (this.reportUrl && this.url && this.url.toLowerCase().indexOf(this.reportUrl.toLowerCase()) >= 0) {
	          console.info('统计错误接口异常', this.msg);
	          return;
	        }

	        var errorInfo = this.handleErrorInfo(); // this.Breadcrumb.push({
	        //   category: errorInfo.category,
	        //   data: errorInfo.logInfo,
	        // })
	        // 记录日志

	        TaskQueue.add(this.reportUrl, errorInfo);
	      } catch (error) {
	        console.info(error);
	      }
	    }
	    /**
	     * 处理错误信息
	     * @param {*} extendsInfo
	     */

	  }, {
	    key: "handleErrorInfo",
	    value: function handleErrorInfo() {
	      var _this$errorObj;

	      var txt = {
	        loginformation: this.msg
	      };

	      if (this !== null && this !== void 0 && (_this$errorObj = this.errorObj) !== null && _this$errorObj !== void 0 && _this$errorObj.stack) {
	        txt.errorstack = this.errorObj.stack;
	      }

	      switch (this.category) {
	        case CategoryEnum.JS:
	          txt.errorline = this.line;
	          txt.errorcol = this.col;
	          break;

	        default:
	          txt.logother = this.errorObj;
	          break;
	      }

	      var lastEvent = getLastEvent(); // 最后一个交互事件

	      var selector = lastEvent ? getSelector(lastEvent.path) : ''; // 代表最后一个操作的元素

	      var extendsInfo = this.getExtendsInfo();

	      var recordInfo = _objectSpread$2(_objectSpread$2({}, extendsInfo), {}, {
	        category: this.category,
	        appID: this.appID,
	        url: (this === null || this === void 0 ? void 0 : this.url) || location.href,
	        log: JSON.stringify(txt),
	        markUser: markUser(this.userID),
	        markUv: markUv(),
	        // 来自域名
	        preUrl: document.referrer && document.referrer !== location.href ? document.referrer : ''
	      });

	      selector && (recordInfo.selector = selector);
	      return recordInfo;
	    }
	    /**
	     * 获取扩展信息
	     */

	  }, {
	    key: "getExtendsInfo",
	    value: function getExtendsInfo() {
	      try {
	        var ret = {};
	        var extendsInfo = this.extendsInfo || {};
	        var dynamicParams;

	        if (isFunction(extendsInfo.getDynamic)) {
	          dynamicParams = extendsInfo.getDynamic(); // 获取动态参数
	        } // 判断动态方法返回的参数是否是对象


	        if (isObject(dynamicParams)) {
	          extendsInfo = _objectSpread$2(_objectSpread$2({}, extendsInfo), dynamicParams);
	        } // 遍历扩展信息，排除动态方法


	        for (var key in extendsInfo) {
	          if (!isFunction(extendsInfo[key])) {
	            // 排除获取动态方法
	            ret[key] = extendsInfo[key];
	          }
	        }

	        return ret;
	      } catch (error) {
	        console.info('call getExtendsInfo error', error);
	        return {};
	      }
	    }
	  }]);

	  return BaseMonitor;
	}();

	function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * ajax error异常
	 */

	var AjaxError = /*#__PURE__*/function () {
	  function AjaxError(params) {
	    _classCallCheck(this, AjaxError);

	    _defineProperty(this, "params", void 0);

	    this.params = params;
	  }
	  /**
	   * 处理错误
	   * @param type {*} ajax库类型
	   * @param error{*} 错误信息
	   */


	  _createClass(AjaxError, [{
	    key: "handleError",
	    value: function handleError() {
	      new XHRError(this.params);
	    }
	  }]);

	  return AjaxError;
	}();
	/**
	 * 获取HTTP错误信息
	 */


	var XHRError = /*#__PURE__*/function (_BaseMonitor) {
	  _inherits(XHRError, _BaseMonitor);

	  var _super = _createSuper$5(XHRError);

	  function XHRError(params) {
	    var _this;

	    _classCallCheck(this, XHRError);

	    _this = _super.call(this, params);

	    if (window.XMLHttpRequest) {
	      _this.handleXhrError();
	    } // eslint-disable-next-line no-extra-boolean-cast


	    if (!!window.fetch) {
	      _this.handleFetchError();
	    }

	    return _this;
	  }
	  /**
	   *
	   * @param type 接口类型
	   * @param startTime 请求开始事件
	   * @param self 接口参数
	   * @param ajaxlib AjaxLibEnum
	   */


	  _createClass(XHRError, [{
	    key: "_handleEvent",
	    value: function _handleEvent(type, startTime, self, lib, logData) {
	      try {
	        var _self$responseText;

	        var duration = Date.now() - startTime;
	        this.category = CategoryEnum.AJAX;
	        this.msg = CategoryEnum.AJAX;
	        this.errorObj = {
	          status: self.status,
	          duration: duration,
	          type: type,
	          method: logData.method.toLowerCase(),
	          lib: lib,
	          path: logData.url,
	          decodedBodySize: self.decodedBodySize || (self === null || self === void 0 ? void 0 : (_self$responseText = self.responseText) === null || _self$responseText === void 0 ? void 0 : _self$responseText.length) || 0
	        };
	        this.recordError();
	      } catch (error) {
	        console.info(error);
	      }
	    }
	    /**
	     * 获取XMLHttpRequest 错误信息
	     */

	  }, {
	    key: "handleXhrError",
	    value: function handleXhrError() {
	      var self = this; // 原生 XMLHttpRequest 监听

	      var oldOpen = XMLHttpRequest.prototype.open;

	      XMLHttpRequest.prototype.open = function (method, url) {
	        if (!url.match(/up.gif/) && !url.match(/sockjs/)) {
	          this.logData = {
	            method: method || AjaxMethodEnum.GET,
	            url: url
	          };
	        }

	        return oldOpen.apply(this, arguments);
	      };

	      var xhrSend = XMLHttpRequest.prototype.send;

	      XMLHttpRequest.prototype.send = function () {
	        var _this2 = this;

	        if (this.addEventListener && this.logData) {
	          var startTime = Date.now() //在发送之前记录一下开始的时间
	          ;
	          ['error', 'load', 'abort', 'onreadystatechange'].map(function (ele) {
	            //    xhr.xhr.responseText.length
	            _this2.addEventListener(ele, function () {
	              self._handleEvent(ele, startTime, _this2, AjaxLibEnum.XHR, _this2.logData);
	            });
	          });
	        }

	        return xhrSend.apply(this, arguments);
	      };
	    }
	  }, {
	    key: "handleFetchError",
	    value: function handleFetchError() {
	      var self = this;
	      var originFetch = window.fetch;

	      window.fetch = function () {
	        var _args$;

	        var logData = {
	          method: AjaxMethodEnum.GET,
	          url: ''
	        };

	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        logData.method = (args === null || args === void 0 ? void 0 : (_args$ = args[1]) === null || _args$ === void 0 ? void 0 : _args$.method) || AjaxMethodEnum.GET;
	        logData.url = args[0];
	        var startTime = Date.now(); //在发送之前记录一下开始的时间

	        originFetch.apply(this, args).then( /*#__PURE__*/function () {
	          var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(res) {
	            var tempRes, decodedBodySize;
	            return regenerator.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    tempRes = res.clone();
	                    _context.next = 3;
	                    return res.text();

	                  case 3:
	                    decodedBodySize = _context.sent;

	                    self._handleEvent(res.ok ? 'load' : 'error', startTime, {
	                      status: tempRes.status || res.ok ? 200 : 500,
	                      response: res,
	                      decodedBodySize: decodedBodySize.length
	                    }, AjaxLibEnum.FETCH, logData);

	                  case 5:
	                  case "end":
	                    return _context.stop();
	                }
	              }
	            }, _callee);
	          }));

	          return function (_x) {
	            return _ref.apply(this, arguments);
	          };
	        }())["catch"](function (error) {
	          self._handleEvent('error', startTime, {
	            status: 500,
	            response: error
	          }, AjaxLibEnum.FETCH, logData);

	          throw error;
	        });
	      };
	    }
	  }]);

	  return XHRError;
	}(BaseMonitor);

	function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * 捕获JS错误
	 */

	var JSError = /*#__PURE__*/function (_BaseMonitor) {
	  _inherits(JSError, _BaseMonitor);

	  var _super = _createSuper$4(JSError);

	  function JSError(params) {
	    _classCallCheck(this, JSError);

	    return _super.call(this, params);
	  }
	  /**
	   * 注册onerror事件
	   */


	  _createClass(JSError, [{
	    key: "handleError",
	    value: function handleError() {
	      var _this = this;

	      window.onerror = function (msg, url, line, col, error) {
	        try {
	          _this.category = CategoryEnum.JS;
	          _this.msg = msg;
	          _this.url = url;
	          _this.line = line;
	          _this.col = col;
	          _this.errorObj = error;

	          _this.recordError();
	        } catch (error) {
	          console.info('js错误异常', error);
	        }
	      };
	    }
	  }]);

	  return JSError;
	}(BaseMonitor);

	function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * 捕获未处理的Promise异常
	 */

	var PromiseError = /*#__PURE__*/function (_BaseMonitor) {
	  _inherits(PromiseError, _BaseMonitor);

	  var _super = _createSuper$3(PromiseError);

	  function PromiseError(params) {
	    _classCallCheck(this, PromiseError);

	    return _super.call(this, params);
	  }
	  /**
	   * 处理错误
	   */


	  _createClass(PromiseError, [{
	    key: "handleError",
	    value: function handleError() {
	      var _this = this;

	      window.addEventListener('unhandledrejection', function (event) {
	        try {
	          var _event$reason, _event$reason$config;

	          if (!event || !event.reason) {
	            return;
	          } // 判断当前被捕获的异常url，是否是异常处理url，防止死循环


	          if (event !== null && event !== void 0 && (_event$reason = event.reason) !== null && _event$reason !== void 0 && (_event$reason$config = _event$reason.config) !== null && _event$reason$config !== void 0 && _event$reason$config.url) {
	            _this.url = event.reason.config.url;
	          }

	          _this.category = CategoryEnum.PROMISE;
	          _this.msg = event.reason;
	          _this.errorObj = event.reason;

	          _this.recordError();
	        } catch (error) {
	          console.info(error);
	        }
	      }, true);
	    }
	  }]);

	  return PromiseError;
	}(BaseMonitor);

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

	function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * 资源加载错误
	 */

	var ResourceError = /*#__PURE__*/function (_BaseMonitor) {
	  _inherits(ResourceError, _BaseMonitor);

	  var _super = _createSuper$2(ResourceError);

	  function ResourceError(params) {
	    _classCallCheck(this, ResourceError);

	    return _super.call(this, params);
	  }
	  /**
	   * 注册onerror事件
	   */


	  _createClass(ResourceError, [{
	    key: "handleError",
	    value: function handleError() {
	      var _this = this;

	      window.addEventListener('error', function (event) {
	        try {
	          if (!event) {
	            return;
	          }

	          _this.category = CategoryEnum.RESOURCE;
	          var target = event.target || event.srcElement;
	          var isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;

	          if (!isElementTarget) {
	            return; // js error不再处理
	          }

	          _this.msg = "\u52A0\u8F7D ".concat(target.tagName, " \u8D44\u6E90\u9519\u8BEF");
	          _this.url = location.href;
	          _this.errorObj = _objectSpread$1(_objectSpread$1({}, target), {}, {
	            src: target.src || target.href
	          });

	          _this.recordError();
	        } catch (error) {
	          console.info('资源加载收集异常', error);
	        }
	      }, true);
	    }
	  }]);

	  return ResourceError;
	}(BaseMonitor);

	/*
	 * @Author: 杨宏旋
	 * @Date: 2021-07-20 17:27:51
	 * @LastEditors: yanghongxuan
	 * @LastEditTime: 2021-12-22 15:36:19
	 * @Description:
	 */
	function vue3VmHandler(vm) {
	  var componentName = '';

	  if (vm.$root === vm) {
	    componentName = 'root';
	  } else {
	    var name_2 = vm.$options && vm.$options.name;
	    componentName = name_2 ? "component <".concat(name_2, ">") : 'anonymous component';
	  }

	  return {
	    componentName: componentName,
	    propsData: vm.$props
	  };
	}
	function vue2VmHandler(vm) {
	  var componentName = '';

	  if (vm.$root === vm) {
	    componentName = 'root';
	  } else {
	    var name_1 = vm._isVue ? vm.$options && vm.$options.name || vm.$options && vm.$options._componentTag : vm.name;
	    componentName = (name_1 ? "component <".concat(name_1, ">") : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? " at ".concat(vm.$options && vm.$options.__file) : '');
	  }

	  return {
	    componentName: componentName,
	    propsData: vm.$options && vm.$options.propsData
	  };
	}
	function getBigVersion(version) {
	  return Number(version.split('.')[0]);
	}

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * vue错误
	 */

	function handleVueError(err, vm, info, Vue) {
	  var version = Vue === null || Vue === void 0 ? void 0 : Vue.version;
	  var data = {
	    message: "".concat(err.message, "(").concat(info, ")"),
	    url: getLocationHref(),
	    name: err.name,
	    stack: err.stack || []
	  };

	  if (isString(version)) {
	    switch (getBigVersion(version)) {
	      case 2:
	        data = Object.assign(data, vue2VmHandler(vm));
	        break;

	      case 3:
	        data = Object.assign(data, vue3VmHandler(vm));
	        break;

	      default:
	        return;
	    }
	  }

	  return data; // breadcrumb.push({
	  //   type: BREADCRUMBTYPES.VUE,
	  //   category: breadcrumb.getCategory(BREADCRUMBTYPES.VUE),
	  //   data: data,
	  // })
	  // transportData.send(data)
	}

	var VueError = /*#__PURE__*/function (_BaseMonitor) {
	  _inherits(VueError, _BaseMonitor);

	  var _super = _createSuper$1(VueError);

	  function VueError(params) {
	    _classCallCheck(this, VueError);

	    return _super.call(this, params);
	  }
	  /**
	   * 处理Vue错误提示
	   */


	  _createClass(VueError, [{
	    key: "handleError",
	    value: function handleError(Vue) {
	      var _this = this;

	      if (!Vue) {
	        return;
	      }

	      Vue.config.errorHandler = function (error, vm, info) {
	        try {
	          _this.msg = JSON.stringify(handleVueError(error, vm, info, Vue));
	          _this.category = CategoryEnum.VUE;

	          _this.recordError();
	        } catch (error) {
	          console.info('vue错误异常', error);
	        }
	      };
	    }
	  }]);

	  return VueError;
	}(BaseMonitor);

	/**
	 * 页面监控
	 */
	var pagePerformance = {
	  getTiming: function getTiming() {
	    try {
	      if (!window.performance || !window.performance.timing) {
	        console.info('你的浏览器不支持 performance 操作');
	        return;
	      }

	      var t = window.performance.timing;
	      var times = {}; // 【重要】重定向的时间

	      times.redirectTime = (t.redirectEnd - t.redirectStart).toFixed(2); // 【重要】DNS 查询时间
	      // 【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？

	      times.dnsTime = (t.domainLookupEnd - t.domainLookupStart).toFixed(2); // 【重要】读取页面第一个字节的时间
	      // 【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？

	      times.ttfbTime = (t.responseStart - t.navigationStart).toFixed(2); // DNS 缓存时间

	      times.appcacheTime = (t.domainLookupStart - t.fetchStart).toFixed(2); // 卸载页面的时间

	      times.unloadTime = (t.unloadEventEnd - t.unloadEventStart).toFixed(2); // tcp连接耗时

	      times.tcpTime = (t.connectEnd - t.connectStart).toFixed(2); // 【重要】内容加载完成的时间
	      // 【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？

	      times.reqTime = (t.responseEnd - t.responseStart).toFixed(2); // 解析dom树耗时

	      times.analysisTime = (t.domComplete - t.domInteractive).toFixed(2); // 白屏时间

	      times.blankTime = (t.domLoading - t.navigationStart).toFixed(2); // domReadyTime

	      times.domReadyTime = (t.domContentLoadedEventEnd - t.navigationStart).toFixed(2); // 【重要】页面加载完成的时间
	      // 【原因】这几乎代表了用户等待页面可用的时间

	      times.loadPageTime = (t.loadEventEnd - t.navigationStart).toFixed(2);
	      times.radt = (t.fetchStart - t.navigationStart).toFixed(2) || 0;
	      return times;
	    } catch (error) {
	      console.info(error);
	    }
	  },
	  getEntries: function getEntries() {
	    var usefulType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var url = arguments.length > 1 ? arguments[1] : undefined;

	    if (!window.performance || !window.performance.getEntries) {
	      console.info('该浏览器不支持performance.getEntries方法');
	      return;
	    }

	    var entryTimesList = [];
	    var entryList = window.performance.getEntriesByType('resource');

	    if (!entryList || entryList.length === 0) {
	      return entryTimesList;
	    }

	    entryList.forEach(function (item) {
	      var name = item.name ? item.name.split('?')[0] : ''; // 忽略上传日志的接口再次上报

	      if (name.indexOf(url) > -1) {
	        return;
	      }

	      if (usefulType.indexOf(item.initiatorType) > -1) {
	        entryTimesList.push({
	          /** 请求资源路径*/
	          name: name,

	          /** 发起资源类型*/
	          initiatorType: item.initiatorType,

	          /** http协议版本*/
	          nextHopProtocol: item.nextHopProtocol,

	          /** 重定向时间*/
	          redirectTime: (item.redirectEnd - item.redirectStart).toFixed(2),

	          /** dns查询耗时*/
	          dnsTime: (item.domainLookupEnd - item.domainLookupStart).toFixed(2),

	          /** tcp链接耗时*/
	          tcpTime: (item.connectEnd - item.connectStart).toFixed(2),

	          /** 发送请求到接收到响应第一个字符*/
	          ttfbTime: (item.responseStart - item.requestStart).toFixed(2),

	          /** 接收响应的时间（从第一个字符到最后一个字符）*/
	          responseTime: (item.responseEnd - item.responseStart).toFixed(2),

	          /** 请求+响应总时间 */
	          reqTotalTime: (item.responseEnd - item.requestStart).toFixed(2),

	          /** 表示解压之后的body大小 */
	          decodedBodySize: item.decodedBodySize || 0
	        });
	      }
	    });
	    return entryTimesList;
	  }
	};

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var MonitorPerformance = /*#__PURE__*/function (_BaseMonitor) {
	  _inherits(MonitorPerformance, _BaseMonitor);

	  var _super = _createSuper(MonitorPerformance);

	  function MonitorPerformance(options) {
	    var _this;

	    _classCallCheck(this, MonitorPerformance);

	    _this = _super.call(this, {
	      reportUrl: options.reportUrl,
	      appID: options.appID,
	      userID: options.userID,
	      extendsInfo: options.extendsInfo
	    });

	    _defineProperty(_assertThisInitialized(_this), "isPage", void 0);

	    _defineProperty(_assertThisInitialized(_this), "isResource", void 0);

	    _defineProperty(_assertThisInitialized(_this), "usefulType", void 0);

	    _defineProperty(_assertThisInitialized(_this), "outTime", void 0);

	    _defineProperty(_assertThisInitialized(_this), "config", void 0);

	    options.isPage = options.isPage !== false;
	    options.isResource = options.isResource !== false;
	    _this.isPage = options.isPage; // 是否上报页面性能数据

	    _this.isResource = options.isResource; // 是否上报页面资源数据

	    _this.usefulType = _this.getSourceType(options);
	    _this.outTime = 50;
	    _this.config = {
	      resourceList: [],
	      performance: {} // 页面性能列表

	    };
	    _this.category = CategoryEnum.PERFORMANCE;
	    _this.reportUrl = options.reportUrl || '';
	    return _this;
	  }
	  /**
	   * 获取需要上报资源数据类型
	   * @param {*} options
	   */


	  _createClass(MonitorPerformance, [{
	    key: "getSourceType",
	    value: function getSourceType(options) {
	      var usefulType = []; // 'navigation'
	      // http请求类的数据不走这里上报

	      options.isRScript !== false && usefulType.push('script'); // 资源数据细分，是否上报script数据

	      options.isRCSS !== false && usefulType.push('css'); // 资源数据细分，是否上报CSS数据

	      options.isRLink !== false && usefulType.push('link'); // 资源数据细分，是否上报Link数据

	      options.isRIMG !== false && usefulType.push('img'); // 资源数据细分，是否上报IMG数据

	      return usefulType;
	    }
	    /**
	     * 记录页面信息
	     * @param {*} options  {pageId ：页面标示,url ：上报地址}
	     */

	  }, {
	    key: "record",
	    value: function record() {
	      try {
	        if (this.isPage) {
	          this.config.performance = pagePerformance.getTiming() || {};
	        }

	        if (this.isResource) {
	          this.config.resourceList = pagePerformance.getEntries(this.usefulType, this.reportUrl) || [];
	        }

	        var result = {
	          performance: this.config.performance,
	          resourceList: this.config.resourceList
	        };
	        var extendsInfo = this.getExtendsInfo();

	        var data = _objectSpread(_objectSpread({}, extendsInfo), {}, {
	          category: this.category,
	          log: JSON.stringify(result),
	          appID: this.appID,
	          markUser: markUser(this.userID),
	          markUv: markUv(),
	          url: (this === null || this === void 0 ? void 0 : this.url) || location.href // url 地址

	        });

	        localStorage.setItem('page_performance', JSON.stringify(data)); // 发送监控数据

	        new API(this.reportUrl).report(data);
	        this.clearPerformance();
	      } catch (error) {
	        console.info('性能信息上报异常', error);
	      }
	    }
	  }, {
	    key: "clearPerformance",
	    value: function clearPerformance() {
	      var _window, _window$performance;

	      if ((_window = window) !== null && _window !== void 0 && (_window$performance = _window.performance) !== null && _window$performance !== void 0 && _window$performance.clearResourceTimings) {
	        performance.clearResourceTimings();
	        this.config.performance = {};
	        this.config.resourceList = [];
	      }
	    }
	  }]);

	  return MonitorPerformance;
	}(BaseMonitor);

	var MonitorJS = /*#__PURE__*/function () {
	  function MonitorJS() {
	    _classCallCheck(this, MonitorJS);

	    _defineProperty(this, "jsError", void 0);

	    _defineProperty(this, "promiseError", void 0);

	    _defineProperty(this, "resourceError", void 0);

	    _defineProperty(this, "ajaxError", void 0);

	    _defineProperty(this, "vueError", void 0);

	    this.jsError = true;
	    this.promiseError = true;
	    this.resourceError = true;
	    this.ajaxError = true;
	    this.vueError = false;
	  }
	  /**
	   * 处理异常信息初始化
	   * @param {OptionsType} options
	   */


	  _createClass(MonitorJS, [{
	    key: "init",
	    value: function init(options) {
	      if (!(options !== null && options !== void 0 && options.reportUrl) || !checkUrl(options.reportUrl)) {
	        throw "reportUrl is error,".concat(options.reportUrl);
	      }

	      if (!(options !== null && options !== void 0 && options.appID)) {
	        throw "appID is error,".concat(options.appID);
	      }

	      this.jsError = !((options === null || options === void 0 ? void 0 : options.jsError) === false);
	      this.promiseError = !((options === null || options === void 0 ? void 0 : options.promiseError) === false);
	      this.resourceError = !((options === null || options === void 0 ? void 0 : options.resourceError) === false);
	      this.ajaxError = !((options === null || options === void 0 ? void 0 : options.ajaxError) === false);
	      this.vueError = (options === null || options === void 0 ? void 0 : options.vueError) === true; // 显式配置

	      var reportUrl = options.reportUrl; // 上报错误地址

	      var appID = options.appID; // 上报id

	      var extendsInfo = options.extendsInfo || {}; // 扩展信息（一般用于系统个性化分析）

	      var param = {
	        reportUrl: reportUrl,
	        extendsInfo: extendsInfo,
	        appID: appID,
	        userID: options.userID
	      };

	      if (this.jsError) {
	        new JSError(param).handleError();
	      }

	      if (this.promiseError) {
	        new PromiseError(param).handleError();
	      }

	      if (this.resourceError) {
	        new ResourceError(param).handleError();
	      }

	      if (this.ajaxError) {
	        new AjaxError(param).handleError();
	      }

	      if (this.vueError && options.vue) {
	        new VueError(param).handleError(options.vue);
	      }

	      this.monitorPerformance(options);
	      /**
	       * pv统计刷新页面 清空本地缓存
	       */

	      var recordFunc = function recordFunc() {
	        alert(1);
	        sessionStorage.removeItem(StorageKeyEnum.FIRST_PV);
	      };

	      window.addEventListener('beforeunload', recordFunc);
	      window.removeEventListener('beforeunload', recordFunc);
	    }
	    /**
	     * 监听页面性能
	     * @param {OptionsType} options {pageId：页面标示,url：上报地址}
	     */

	  }, {
	    key: "monitorPerformance",
	    value: function monitorPerformance(options) {
	      var recordFunc = function recordFunc() {
	        new MonitorPerformance(options).record();
	      };

	      window.onload = function () {
	        setTimeout(function () {
	          // 延迟上报
	          recordFunc();
	        }, 300);
	      };
	    }
	  }]);

	  return MonitorJS;
	}();

	/*
	 * @Author: 杨宏旋
	 * @Date: 2021-07-14 19:11:52
	 * @LastEditors: 杨宏旋
	 * @LastEditTime: 2021-07-22 11:02:21
	 * @Description:
	 */
	window.MonitorJS = MonitorJS;

	exports.MonitorJS = MonitorJS;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
