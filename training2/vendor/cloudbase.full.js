(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@cloudbase/utilities/dist/constants/common.js
  var require_common = __commonJS({
    "node_modules/@cloudbase/utilities/dist/constants/common.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.COMMUNITY_SITE_URL = exports.IS_DEBUG_MODE = exports.getProtocol = exports.setProtocol = exports.getSdkName = exports.setSdkName = void 0;
      var sdk_name2 = "@cloudbase/js-sdk";
      function setSdkName2(name) {
        sdk_name2 = name;
      }
      exports.setSdkName = setSdkName2;
      function getSdkName5() {
        return sdk_name2;
      }
      exports.getSdkName = getSdkName5;
      var PROTOCOL2 = typeof location !== "undefined" && location.protocol === "http:" ? "http:" : "https:";
      function setProtocol(protocol) {
        PROTOCOL2 = protocol;
      }
      exports.setProtocol = setProtocol;
      function getProtocol() {
        return PROTOCOL2;
      }
      exports.getProtocol = getProtocol;
      exports.IS_DEBUG_MODE = true;
      exports.COMMUNITY_SITE_URL = "https://support.qq.com/products/148793";
    }
  });

  // node_modules/@cloudbase/utilities/dist/constants/errors.js
  var require_errors = __commonJS({
    "node_modules/@cloudbase/utilities/dist/constants/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ERRORS = void 0;
      exports.ERRORS = {
        INVALID_PARAMS: "INVALID_PARAMS",
        INVALID_SYNTAX: "INVALID_SYNTAX",
        INVALID_OPERATION: "INVALID_OPERATION",
        OPERATION_FAIL: "OPERATION_FAIL",
        NETWORK_ERROR: "NETWORK_ERROR",
        UNKOWN_ERROR: "UNKOWN_ERROR"
      };
    }
  });

  // node_modules/@cloudbase/utilities/dist/constants/index.js
  var require_constants = __commonJS({
    "node_modules/@cloudbase/utilities/dist/constants/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_common(), exports);
      __exportStar(require_errors(), exports);
    }
  });

  // node_modules/@cloudbase/adapter-interface/dist/cmjs/types.js
  var require_types = __commonJS({
    "node_modules/@cloudbase/adapter-interface/dist/cmjs/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var StorageType2;
      (function(StorageType3) {
        StorageType3["local"] = "local";
        StorageType3["none"] = "none";
        StorageType3["session"] = "session";
      })(StorageType2 = exports.StorageType || (exports.StorageType = {}));
      var AbstractSDKRequest2 = /* @__PURE__ */ (function() {
        function AbstractSDKRequest3() {
        }
        return AbstractSDKRequest3;
      })();
      exports.AbstractSDKRequest = AbstractSDKRequest2;
      var AbstractStorage = /* @__PURE__ */ (function() {
        function AbstractStorage2() {
        }
        return AbstractStorage2;
      })();
      exports.AbstractStorage = AbstractStorage;
    }
  });

  // node_modules/@cloudbase/adapter-interface/dist/cmjs/utils.js
  var require_utils = __commonJS({
    "node_modules/@cloudbase/adapter-interface/dist/cmjs/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function formatUrl3(protocol, url, query) {
        if (query === void 0) {
          query = {};
        }
        var urlHasQuery = /\?/.test(url);
        var queryString = "";
        for (var key2 in query) {
          if (queryString === "") {
            !urlHasQuery && (url += "?");
          } else {
            queryString += "&";
          }
          queryString += key2 + "=" + encodeURIComponent(query[key2]);
        }
        url += queryString;
        if (/^http(s)?\:\/\//.test(url)) {
          return url;
        }
        return "" + protocol + url;
      }
      exports.formatUrl = formatUrl3;
    }
  });

  // node_modules/@cloudbase/adapter-interface/dist/cmjs/index.js
  var require_cmjs = __commonJS({
    "node_modules/@cloudbase/adapter-interface/dist/cmjs/index.js"(exports) {
      "use strict";
      function __export2(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
      Object.defineProperty(exports, "__esModule", { value: true });
      __export2(require_types());
      __export2(require_utils());
    }
  });

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // node_modules/crypto-js/core.js
  var require_core = __commonJS({
    "node_modules/crypto-js/core.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory();
        } else if (typeof define === "function" && define.amd) {
          define([], factory);
        } else {
          root.CryptoJS = factory();
        }
      })(exports, function() {
        var CryptoJS = CryptoJS || (function(Math2, undefined2) {
          var crypto;
          if (typeof window !== "undefined" && window.crypto) {
            crypto = window.crypto;
          }
          if (typeof self !== "undefined" && self.crypto) {
            crypto = self.crypto;
          }
          if (typeof globalThis !== "undefined" && globalThis.crypto) {
            crypto = globalThis.crypto;
          }
          if (!crypto && typeof window !== "undefined" && window.msCrypto) {
            crypto = window.msCrypto;
          }
          if (!crypto && typeof global !== "undefined" && global.crypto) {
            crypto = global.crypto;
          }
          if (!crypto && typeof __require === "function") {
            try {
              crypto = require_crypto();
            } catch (err) {
            }
          }
          var cryptoSecureRandomInt = function() {
            if (crypto) {
              if (typeof crypto.getRandomValues === "function") {
                try {
                  return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {
                }
              }
              if (typeof crypto.randomBytes === "function") {
                try {
                  return crypto.randomBytes(4).readInt32LE();
                } catch (err) {
                }
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          };
          var create = Object.create || /* @__PURE__ */ (function() {
            function F() {
            }
            return function(obj) {
              var subtype;
              F.prototype = obj;
              subtype = new F();
              F.prototype = null;
              return subtype;
            };
          })();
          var C = {};
          var C_lib = C.lib = {};
          var Base = C_lib.Base = /* @__PURE__ */ (function() {
            return {
              /**
               * Creates a new object that inherits from this object.
               *
               * @param {Object} overrides Properties to copy into the new object.
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         field: 'value',
               *
               *         method: function () {
               *         }
               *     });
               */
              extend: function(overrides) {
                var subtype = create(this);
                if (overrides) {
                  subtype.mixIn(overrides);
                }
                if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                  subtype.init = function() {
                    subtype.$super.init.apply(this, arguments);
                  };
                }
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              /**
               * Extends this object and runs the init method.
               * Arguments to create() will be passed to init().
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var instance = MyType.create();
               */
              create: function() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);
                return instance;
              },
              /**
               * Initializes a newly created object.
               * Override this method to add some logic when your objects are created.
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         init: function () {
               *             // ...
               *         }
               *     });
               */
              init: function() {
              },
              /**
               * Copies properties into this object.
               *
               * @param {Object} properties The properties to mix in.
               *
               * @example
               *
               *     MyType.mixIn({
               *         field: 'value'
               *     });
               */
              mixIn: function(properties) {
                for (var propertyName in properties) {
                  if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                  }
                }
                if (properties.hasOwnProperty("toString")) {
                  this.toString = properties.toString;
                }
              },
              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = instance.clone();
               */
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          })();
          var WordArray = C_lib.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of 32-bit words.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.create();
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
             */
            init: function(words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined2) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 4;
              }
            },
            /**
             * Converts this word array to a string.
             *
             * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
             *
             * @return {string} The stringified word array.
             *
             * @example
             *
             *     var string = wordArray + '';
             *     var string = wordArray.toString();
             *     var string = wordArray.toString(CryptoJS.enc.Utf8);
             */
            toString: function(encoder) {
              return (encoder || Hex).stringify(this);
            },
            /**
             * Concatenates a word array to this word array.
             *
             * @param {WordArray} wordArray The word array to append.
             *
             * @return {WordArray} This word array.
             *
             * @example
             *
             *     wordArray1.concat(wordArray2);
             */
            concat: function(wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) {
                for (var i2 = 0; i2 < thatSigBytes; i2++) {
                  var thatByte = thatWords[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                  thisWords[thisSigBytes + i2 >>> 2] |= thatByte << 24 - (thisSigBytes + i2) % 4 * 8;
                }
              } else {
                for (var j = 0; j < thatSigBytes; j += 4) {
                  thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                }
              }
              this.sigBytes += thatSigBytes;
              return this;
            },
            /**
             * Removes insignificant bits.
             *
             * @example
             *
             *     wordArray.clamp();
             */
            clamp: function() {
              var words = this.words;
              var sigBytes = this.sigBytes;
              words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
              words.length = Math2.ceil(sigBytes / 4);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {WordArray} The clone.
             *
             * @example
             *
             *     var clone = wordArray.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },
            /**
             * Creates a word array filled with random bytes.
             *
             * @param {number} nBytes The number of random bytes to generate.
             *
             * @return {WordArray} The random word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.random(16);
             */
            random: function(nBytes) {
              var words = [];
              for (var i2 = 0; i2 < nBytes; i2 += 4) {
                words.push(cryptoSecureRandomInt());
              }
              return new WordArray.init(words, nBytes);
            }
          });
          var C_enc = C.enc = {};
          var Hex = C_enc.Hex = {
            /**
             * Converts a word array to a hex string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The hex string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i2 = 0; i2 < sigBytes; i2++) {
                var bite = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 15).toString(16));
              }
              return hexChars.join("");
            },
            /**
             * Converts a hex string to a word array.
             *
             * @param {string} hexStr The hex string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
             */
            parse: function(hexStr) {
              var hexStrLength = hexStr.length;
              var words = [];
              for (var i2 = 0; i2 < hexStrLength; i2 += 2) {
                words[i2 >>> 3] |= parseInt(hexStr.substr(i2, 2), 16) << 24 - i2 % 8 * 4;
              }
              return new WordArray.init(words, hexStrLength / 2);
            }
          };
          var Latin1 = C_enc.Latin1 = {
            /**
             * Converts a word array to a Latin1 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Latin1 string.
             *
             * @static
             *
             * @example
             *
             *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i2 = 0; i2 < sigBytes; i2++) {
                var bite = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            /**
             * Converts a Latin1 string to a word array.
             *
             * @param {string} latin1Str The Latin1 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
             */
            parse: function(latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words = [];
              for (var i2 = 0; i2 < latin1StrLength; i2++) {
                words[i2 >>> 2] |= (latin1Str.charCodeAt(i2) & 255) << 24 - i2 % 4 * 8;
              }
              return new WordArray.init(words, latin1StrLength);
            }
          };
          var Utf8 = C_enc.Utf8 = {
            /**
             * Converts a word array to a UTF-8 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-8 string.
             *
             * @static
             *
             * @example
             *
             *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
             */
            stringify: function(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            /**
             * Converts a UTF-8 string to a word array.
             *
             * @param {string} utf8Str The UTF-8 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
             */
            parse: function(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
             * Resets this block algorithm's data buffer to its initial state.
             *
             * @example
             *
             *     bufferedBlockAlgorithm.reset();
             */
            reset: function() {
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },
            /**
             * Adds new data to this block algorithm's buffer.
             *
             * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
             *
             * @example
             *
             *     bufferedBlockAlgorithm._append('data');
             *     bufferedBlockAlgorithm._append(wordArray);
             */
            _append: function(data) {
              if (typeof data == "string") {
                data = Utf8.parse(data);
              }
              this._data.concat(data);
              this._nDataBytes += data.sigBytes;
            },
            /**
             * Processes available data blocks.
             *
             * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
             *
             * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
             *
             * @return {WordArray} The processed data.
             *
             * @example
             *
             *     var processedData = bufferedBlockAlgorithm._process();
             *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
             */
            _process: function(doFlush) {
              var processedWords;
              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = blockSize * 4;
              var nBlocksReady = dataSigBytes / blockSizeBytes;
              if (doFlush) {
                nBlocksReady = Math2.ceil(nBlocksReady);
              } else {
                nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
              }
              var nWordsReady = nBlocksReady * blockSize;
              var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
              if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                  this._doProcessBlock(dataWords, offset);
                }
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              }
              return new WordArray.init(processedWords, nBytesReady);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = bufferedBlockAlgorithm.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             */
            cfg: Base.extend(),
            /**
             * Initializes a newly created hasher.
             *
             * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
             *
             * @example
             *
             *     var hasher = CryptoJS.algo.SHA256.create();
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            /**
             * Resets this hasher to its initial state.
             *
             * @example
             *
             *     hasher.reset();
             */
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            /**
             * Updates this hasher with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {Hasher} This hasher.
             *
             * @example
             *
             *     hasher.update('message');
             *     hasher.update(wordArray);
             */
            update: function(messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            /**
             * Finalizes the hash computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The hash.
             *
             * @example
             *
             *     var hash = hasher.finalize();
             *     var hash = hasher.finalize('message');
             *     var hash = hasher.finalize(wordArray);
             */
            finalize: function(messageUpdate) {
              if (messageUpdate) {
                this._append(messageUpdate);
              }
              var hash = this._doFinalize();
              return hash;
            },
            blockSize: 512 / 32,
            /**
             * Creates a shortcut function to a hasher's object interface.
             *
             * @param {Hasher} hasher The hasher to create a helper for.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
             */
            _createHelper: function(hasher) {
              return function(message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            /**
             * Creates a shortcut function to the HMAC's object interface.
             *
             * @param {Hasher} hasher The hasher to use in this HMAC helper.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
             */
            _createHmacHelper: function(hasher) {
              return function(message, key2) {
                return new C_algo.HMAC.init(hasher, key2).finalize(message);
              };
            }
          });
          var C_algo = C.algo = {};
          return C;
        })(Math);
        return CryptoJS;
      });
    }
  });

  // node_modules/crypto-js/sha256.js
  var require_sha256 = __commonJS({
    "node_modules/crypto-js/sha256.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS) {
        (function(Math2) {
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          var H = [];
          var K = [];
          (function() {
            function isPrime(n2) {
              var sqrtN = Math2.sqrt(n2);
              for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n2 % factor)) {
                  return false;
                }
              }
              return true;
            }
            function getFractionalBits(n2) {
              return (n2 - (n2 | 0)) * 4294967296 | 0;
            }
            var n = 2;
            var nPrime = 0;
            while (nPrime < 64) {
              if (isPrime(n)) {
                if (nPrime < 8) {
                  H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
                }
                K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
                nPrime++;
              }
              n++;
            }
          })();
          var W = [];
          var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init(H.slice(0));
            },
            _doProcessBlock: function(M, offset) {
              var H2 = this._hash.words;
              var a = H2[0];
              var b = H2[1];
              var c = H2[2];
              var d = H2[3];
              var e = H2[4];
              var f = H2[5];
              var g = H2[6];
              var h = H2[7];
              for (var i2 = 0; i2 < 64; i2++) {
                if (i2 < 16) {
                  W[i2] = M[offset + i2] | 0;
                } else {
                  var gamma0x = W[i2 - 15];
                  var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                  var gamma1x = W[i2 - 2];
                  var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                  W[i2] = gamma0 + W[i2 - 7] + gamma1 + W[i2 - 16];
                }
                var ch = e & f ^ ~e & g;
                var maj = a & b ^ a & c ^ b & c;
                var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                var t1 = h + sigma1 + ch + K[i2] + W[i2];
                var t2 = sigma0 + maj;
                h = g;
                g = f;
                f = e;
                e = d + t1 | 0;
                d = c;
                c = b;
                b = a;
                a = t1 + t2 | 0;
              }
              H2[0] = H2[0] + a | 0;
              H2[1] = H2[1] + b | 0;
              H2[2] = H2[2] + c | 0;
              H2[3] = H2[3] + d | 0;
              H2[4] = H2[4] + e | 0;
              H2[5] = H2[5] + f | 0;
              H2[6] = H2[6] + g | 0;
              H2[7] = H2[7] + h | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              this._process();
              return this._hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          C.SHA256 = Hasher._createHelper(SHA256);
          C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
        })(Math);
        return CryptoJS.SHA256;
      });
    }
  });

  // node_modules/crypto-js/hmac.js
  var require_hmac = __commonJS({
    "node_modules/crypto-js/hmac.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS) {
        (function() {
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var C_enc = C.enc;
          var Utf8 = C_enc.Utf8;
          var C_algo = C.algo;
          var HMAC = C_algo.HMAC = Base.extend({
            /**
             * Initializes a newly created HMAC.
             *
             * @param {Hasher} hasher The hash algorithm to use.
             * @param {WordArray|string} key The secret key.
             *
             * @example
             *
             *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
             */
            init: function(hasher, key2) {
              hasher = this._hasher = new hasher.init();
              if (typeof key2 == "string") {
                key2 = Utf8.parse(key2);
              }
              var hasherBlockSize = hasher.blockSize;
              var hasherBlockSizeBytes = hasherBlockSize * 4;
              if (key2.sigBytes > hasherBlockSizeBytes) {
                key2 = hasher.finalize(key2);
              }
              key2.clamp();
              var oKey = this._oKey = key2.clone();
              var iKey = this._iKey = key2.clone();
              var oKeyWords = oKey.words;
              var iKeyWords = iKey.words;
              for (var i2 = 0; i2 < hasherBlockSize; i2++) {
                oKeyWords[i2] ^= 1549556828;
                iKeyWords[i2] ^= 909522486;
              }
              oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
              this.reset();
            },
            /**
             * Resets this HMAC to its initial state.
             *
             * @example
             *
             *     hmacHasher.reset();
             */
            reset: function() {
              var hasher = this._hasher;
              hasher.reset();
              hasher.update(this._iKey);
            },
            /**
             * Updates this HMAC with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {HMAC} This HMAC instance.
             *
             * @example
             *
             *     hmacHasher.update('message');
             *     hmacHasher.update(wordArray);
             */
            update: function(messageUpdate) {
              this._hasher.update(messageUpdate);
              return this;
            },
            /**
             * Finalizes the HMAC computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The HMAC.
             *
             * @example
             *
             *     var hmac = hmacHasher.finalize();
             *     var hmac = hmacHasher.finalize('message');
             *     var hmac = hmacHasher.finalize(wordArray);
             */
            finalize: function(messageUpdate) {
              var hasher = this._hasher;
              var innerHash = hasher.finalize(messageUpdate);
              hasher.reset();
              var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
              return hmac;
            }
          });
        })();
      });
    }
  });

  // node_modules/crypto-js/hmac-sha256.js
  var require_hmac_sha256 = __commonJS({
    "node_modules/crypto-js/hmac-sha256.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_sha256(), require_hmac());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./sha256", "./hmac"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS) {
        return CryptoJS.HmacSHA256;
      });
    }
  });

  // node_modules/crypto-js/enc-base64.js
  var require_enc_base64 = __commonJS({
    "node_modules/crypto-js/enc-base64.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS) {
        (function() {
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          var Base64 = C_enc.Base64 = {
            /**
             * Converts a word array to a Base64 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Base64 string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = this._map;
              wordArray.clamp();
              var base64Chars = [];
              for (var i2 = 0; i2 < sigBytes; i2 += 3) {
                var byte1 = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                var byte2 = words[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255;
                var byte3 = words[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255;
                var triplet = byte1 << 16 | byte2 << 8 | byte3;
                for (var j = 0; j < 4 && i2 + j * 0.75 < sigBytes; j++) {
                  base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }
              return base64Chars.join("");
            },
            /**
             * Converts a Base64 string to a word array.
             *
             * @param {string} base64Str The Base64 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
             */
            parse: function(base64Str) {
              var base64StrLength = base64Str.length;
              var map = this._map;
              var reverseMap = this._reverseMap;
              if (!reverseMap) {
                reverseMap = this._reverseMap = [];
                for (var j = 0; j < map.length; j++) {
                  reverseMap[map.charCodeAt(j)] = j;
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              }
              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
          function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for (var i2 = 0; i2 < base64StrLength; i2++) {
              if (i2 % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i2 - 1)] << i2 % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i2)] >>> 6 - i2 % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
              }
            }
            return WordArray.create(words, nBytes);
          }
        })();
        return CryptoJS.enc.Base64;
      });
    }
  });

  // node_modules/crypto-js/enc-utf8.js
  var require_enc_utf8 = __commonJS({
    "node_modules/crypto-js/enc-utf8.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS) {
        return CryptoJS.enc.Utf8;
      });
    }
  });

  // node_modules/@cloudbase/utilities/dist/libs/util.js
  var require_util = __commonJS({
    "node_modules/@cloudbase/utilities/dist/libs/util.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.transformPhone = exports.sleep = exports.printGroupLog = exports.throwError = exports.printInfo = exports.printError = exports.printWarn = exports.execCallback = exports.createPromiseCallback = exports.removeParam = exports.getHash = exports.getQuery = exports.toQueryString = exports.createSign = exports.formatUrl = exports.genSeqId = exports.isFormData = exports.isInstanceOf = exports.isNull = exports.isPalinObject = exports.isUndefined = exports.isString = exports.isArray = void 0;
      var hmac_sha256_1 = __importDefault(require_hmac_sha256());
      var enc_base64_1 = __importDefault(require_enc_base64());
      var enc_utf8_1 = __importDefault(require_enc_utf8());
      var constants_1 = require_constants();
      function isArray3(val) {
        return Object.prototype.toString.call(val) === "[object Array]";
      }
      exports.isArray = isArray3;
      function isString7(val) {
        return typeof val === "string";
      }
      exports.isString = isString7;
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      exports.isUndefined = isUndefined;
      function isPalinObject2(val) {
        return Object.prototype.toString.call(val) === "[object Object]";
      }
      exports.isPalinObject = isPalinObject2;
      function isNull(val) {
        return Object.prototype.toString.call(val) === "[object Null]";
      }
      exports.isNull = isNull;
      function isInstanceOf(instance, construct) {
        return instance instanceof construct;
      }
      exports.isInstanceOf = isInstanceOf;
      function isFormData2(val) {
        return Object.prototype.toString.call(val) === "[object FormData]";
      }
      exports.isFormData = isFormData2;
      function genSeqId2() {
        return Math.random().toString(16).slice(2);
      }
      exports.genSeqId = genSeqId2;
      function formatUrl3(PROTOCOL2, url, query) {
        if (query === void 0) {
          query = {};
        }
        var urlHasQuery = /\?/.test(url);
        var queryString = "";
        for (var key2 in query) {
          if (queryString === "") {
            !urlHasQuery && (url += "?");
          } else {
            queryString += "&";
          }
          queryString += "".concat(key2, "=").concat(encodeURIComponent(query[key2]));
        }
        url += queryString;
        if (/^http(s)?\:\/\//.test(url)) {
          return url;
        }
        return "".concat(PROTOCOL2).concat(url);
      }
      exports.formatUrl = formatUrl3;
      function base64url(source) {
        var encodedSource = enc_base64_1.default.stringify(source);
        encodedSource = encodedSource.replace(/=+$/, "");
        encodedSource = encodedSource.replace(/\+/g, "-");
        encodedSource = encodedSource.replace(/\//g, "_");
        return encodedSource;
      }
      function createSign2(payload, secret) {
        var header = {
          alg: "HS256",
          typ: "JWT"
        };
        var headerStr = base64url(enc_utf8_1.default.parse(JSON.stringify(header)));
        var payloadStr = base64url(enc_utf8_1.default.parse(JSON.stringify(payload)));
        var token = "".concat(headerStr, ".").concat(payloadStr);
        var sign = base64url((0, hmac_sha256_1.default)(token, secret));
        return "".concat(token, ".").concat(sign);
      }
      exports.createSign = createSign2;
      function toQueryString(query) {
        if (query === void 0) {
          query = {};
        }
        var queryString = [];
        for (var key2 in query) {
          queryString.push("".concat(key2, "=").concat(encodeURIComponent(query[key2])));
        }
        return queryString.join("&");
      }
      exports.toQueryString = toQueryString;
      function getQuery2(name, url) {
        if (typeof window === "undefined") {
          return false;
        }
        var u = url || window.location.search;
        var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"));
        var r = u.substr(u.indexOf("?") + 1).match(reg);
        return r != null ? r[2] : "";
      }
      exports.getQuery = getQuery2;
      var getHash2 = function(name) {
        if (typeof window === "undefined") {
          return "";
        }
        var matches = window.location.hash.match(new RegExp("[#?&/]".concat(name, "=([^&#]*)")));
        return matches ? matches[1] : "";
      };
      exports.getHash = getHash2;
      function removeParam2(key2, sourceURL) {
        var rtn = sourceURL.split("?")[0];
        var param;
        var params_arr = [];
        var queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
        if (queryString !== "") {
          params_arr = queryString.split("&");
          for (var i2 = params_arr.length - 1; i2 >= 0; i2 -= 1) {
            param = params_arr[i2].split("=")[0];
            if (param === key2) {
              params_arr.splice(i2, 1);
            }
          }
          rtn = "".concat(rtn, "?").concat(params_arr.join("&"));
        }
        return rtn;
      }
      exports.removeParam = removeParam2;
      function createPromiseCallback2() {
        var cb;
        if (!Promise) {
          cb = function() {
          };
          cb.promise = {};
          var throwPromiseNotDefined = function() {
            throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
          };
          Object.defineProperty(cb.promise, "then", { get: throwPromiseNotDefined });
          Object.defineProperty(cb.promise, "catch", { get: throwPromiseNotDefined });
          return cb;
        }
        var promise = new Promise(function(resolve, reject) {
          cb = function(err, data) {
            if (err)
              return reject(err);
            return resolve(data);
          };
        });
        cb.promise = promise;
        return cb;
      }
      exports.createPromiseCallback = createPromiseCallback2;
      function execCallback3(fn, err, data) {
        if (data === void 0) {
          data = null;
        }
        if (fn && typeof fn === "function") {
          return fn(err, data);
        }
        if (err) {
          throw err;
        }
        return data;
      }
      exports.execCallback = execCallback3;
      function printWarn5(error, msg) {
        console.warn("[".concat((0, constants_1.getSdkName)(), "][").concat(error, "]:").concat(msg));
      }
      exports.printWarn = printWarn5;
      function printError(error, msg) {
        console.error({
          code: error,
          msg: "[".concat((0, constants_1.getSdkName)(), "][").concat(error, "]:").concat(msg)
        });
      }
      exports.printError = printError;
      function printInfo(error, msg) {
        console.log("[".concat((0, constants_1.getSdkName)(), "][").concat(error, "]:").concat(msg));
      }
      exports.printInfo = printInfo;
      function throwError5(error, msg) {
        throw new Error(JSON.stringify({
          code: error,
          msg: "[".concat((0, constants_1.getSdkName)(), "][").concat(error, "]:").concat(msg)
        }));
      }
      exports.throwError = throwError5;
      function printGroupLog(options) {
        var title = options.title, _a2 = options.subtitle, subtitle = _a2 === void 0 ? "" : _a2, _b = options.content, content = _b === void 0 ? [] : _b, _c = options.printTrace, printTrace = _c === void 0 ? false : _c, _d = options.collapsed, collapsed = _d === void 0 ? false : _d;
        if (collapsed) {
          console.groupCollapsed(title, subtitle);
        } else {
          console.group(title, subtitle);
        }
        for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
          var tip = content_1[_i];
          var type = tip.type, body = tip.body;
          switch (type) {
            case "info":
              console.log(body);
              break;
            case "warn":
              console.warn(body);
              break;
            case "error":
              console.error(body);
              break;
          }
        }
        if (printTrace) {
          console.trace("stack trace:");
        }
        console.groupEnd();
      }
      exports.printGroupLog = printGroupLog;
      var sleep2 = function(ms) {
        if (ms === void 0) {
          ms = 0;
        }
        return new Promise(function(r) {
          return setTimeout(r, ms);
        });
      };
      exports.sleep = sleep2;
      function transformPhone3(phoneNumber) {
        return "+86".concat(phoneNumber);
      }
      exports.transformPhone = transformPhone3;
    }
  });

  // node_modules/@cloudbase/utilities/dist/adapters/platforms/web.js
  var require_web = __commonJS({
    "node_modules/@cloudbase/utilities/dist/adapters/platforms/web.js"(exports) {
      "use strict";
      var __extends14 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics2 = function(d, b) {
          extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
          };
          return extendStatics2(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics2(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __assign13 = exports && exports.__assign || function() {
        __assign13 = Object.assign || function(t) {
          for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
            s = arguments[i2];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign13.apply(this, arguments);
      };
      var __awaiter20 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
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
      };
      var __generator20 = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
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
                return { value: op[1], done: false };
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
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WebRequest = exports.genAdapter = void 0;
      var adapter_interface_1 = require_cmjs();
      var util_1 = require_util();
      var common_1 = require_common();
      var WebRequest = (function(_super) {
        __extends14(WebRequest2, _super);
        function WebRequest2(config) {
          var _this = _super.call(this) || this;
          var timeout = config.timeout, timeoutMsg = config.timeoutMsg, restrictedMethods = config.restrictedMethods;
          _this._timeout = timeout || 0;
          _this._timeoutMsg = timeoutMsg || "\u8BF7\u6C42\u8D85\u65F6";
          _this._restrictedMethods = restrictedMethods || ["get", "post", "upload", "download"];
          return _this;
        }
        WebRequest2.prototype.get = function(options) {
          return this._request(__assign13(__assign13({}, options), { method: "get" }), this._restrictedMethods.includes("get"));
        };
        WebRequest2.prototype.post = function(options) {
          return this._request(__assign13(__assign13({}, options), { method: "post" }), this._restrictedMethods.includes("post"));
        };
        WebRequest2.prototype.put = function(options) {
          return this._request(__assign13(__assign13({}, options), { method: "put" }));
        };
        WebRequest2.prototype.upload = function(options) {
          var data = options.data, file = options.file, name = options.name;
          var formData = new FormData();
          for (var key2 in data) {
            formData.append(key2, data[key2]);
          }
          formData.append("key", name);
          formData.append("file", file);
          return this._request(__assign13(__assign13({}, options), { data: formData, method: "post" }), this._restrictedMethods.includes("upload"));
        };
        WebRequest2.prototype.download = function(options) {
          return __awaiter20(this, void 0, void 0, function() {
            var data, url, fileName, link, e_1;
            return __generator20(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  _a2.trys.push([0, 2, , 3]);
                  return [4, this.get(__assign13(__assign13({}, options), { headers: {}, responseType: "blob" }))];
                case 1:
                  data = _a2.sent().data;
                  url = window.URL.createObjectURL(new Blob([data]));
                  fileName = decodeURIComponent(new URL(options.url).pathname.split("/").pop() || "");
                  link = document.createElement("a");
                  link.href = url;
                  link.setAttribute("download", fileName);
                  link.style.display = "none";
                  document.body.appendChild(link);
                  link.click();
                  window.URL.revokeObjectURL(url);
                  document.body.removeChild(link);
                  return [3, 3];
                case 2:
                  e_1 = _a2.sent();
                  return [3, 3];
                case 3:
                  return [2, new Promise(function(resolve) {
                    resolve({
                      statusCode: 200,
                      tempFilePath: options.url
                    });
                  })];
              }
            });
          });
        };
        WebRequest2.prototype._request = function(options, enableAbort) {
          var _this = this;
          if (enableAbort === void 0) {
            enableAbort = false;
          }
          var method = String(options.method).toLowerCase() || "get";
          return new Promise(function(resolve) {
            var url = options.url, _a2 = options.headers, headers = _a2 === void 0 ? {} : _a2, data = options.data, responseType = options.responseType, withCredentials = options.withCredentials, body = options.body, onUploadProgress = options.onUploadProgress;
            var realUrl = (0, util_1.formatUrl)((0, common_1.getProtocol)(), url, method === "get" ? data : {});
            var ajax = new XMLHttpRequest();
            ajax.open(method, realUrl);
            responseType && (ajax.responseType = responseType);
            for (var key2 in headers) {
              ajax.setRequestHeader(key2, headers[key2]);
            }
            var timer;
            if (onUploadProgress) {
              ajax.upload.addEventListener("progress", onUploadProgress);
            }
            ajax.onreadystatechange = function() {
              var result = {};
              if (ajax.readyState === 4) {
                var headers_1 = ajax.getAllResponseHeaders();
                var arr = headers_1.trim().split(/[\r\n]+/);
                var headerMap_1 = {};
                arr.forEach(function(line) {
                  var parts = line.split(": ");
                  var header = parts.shift().toLowerCase();
                  var value = parts.join(": ");
                  headerMap_1[header] = value;
                });
                result.header = headerMap_1;
                result.statusCode = ajax.status;
                try {
                  result.data = responseType === "blob" ? ajax.response : JSON.parse(ajax.responseText);
                } catch (e) {
                  result.data = responseType === "blob" ? ajax.response : ajax.responseText;
                }
                clearTimeout(timer);
                resolve(result);
              }
            };
            if (enableAbort && _this._timeout) {
              timer = setTimeout(function() {
                console.warn(_this._timeoutMsg);
                ajax.abort();
              }, _this._timeout);
            }
            var payload;
            if ((0, util_1.isFormData)(data)) {
              payload = data;
            } else if (headers["content-type"] === "application/x-www-form-urlencoded") {
              payload = (0, util_1.toQueryString)(data);
            } else if (body) {
              payload = body;
            } else {
              payload = data ? JSON.stringify(data) : void 0;
            }
            if (withCredentials) {
              ajax.withCredentials = true;
            }
            ajax.send(payload);
          });
        };
        return WebRequest2;
      })(adapter_interface_1.AbstractSDKRequest);
      exports.WebRequest = WebRequest;
      function genAdapter2() {
        var adapter2 = {
          root: window,
          reqClass: WebRequest,
          wsClass: WebSocket,
          localStorage,
          sessionStorage
        };
        return adapter2;
      }
      exports.genAdapter = genAdapter2;
    }
  });

  // node_modules/@cloudbase/utilities/dist/adapters/index.js
  var require_adapters = __commonJS({
    "node_modules/@cloudbase/utilities/dist/adapters/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.useDefaultAdapter = exports.useAdapters = exports.RUNTIME = void 0;
      var Web = __importStar(require_web());
      var util_1 = require_util();
      var RUNTIME5;
      (function(RUNTIME6) {
        RUNTIME6["WEB"] = "web";
        RUNTIME6["WX_MP"] = "wx_mp";
      })(RUNTIME5 = exports.RUNTIME || (exports.RUNTIME = {}));
      function useAdapters2(adapters5) {
        var adapterList = (0, util_1.isArray)(adapters5) ? adapters5 : [adapters5];
        for (var _i = 0, adapterList_1 = adapterList; _i < adapterList_1.length; _i++) {
          var adapter2 = adapterList_1[_i];
          var isMatch2 = adapter2.isMatch, genAdapter2 = adapter2.genAdapter, runtime2 = adapter2.runtime;
          if (isMatch2()) {
            return {
              adapter: genAdapter2(),
              runtime: runtime2
            };
          }
        }
      }
      exports.useAdapters = useAdapters2;
      function useDefaultAdapter2() {
        return {
          adapter: Web.genAdapter(),
          runtime: RUNTIME5.WEB
        };
      }
      exports.useDefaultAdapter = useDefaultAdapter2;
    }
  });

  // node_modules/@cloudbase/utilities/dist/libs/cache.js
  var require_cache = __commonJS({
    "node_modules/@cloudbase/utilities/dist/libs/cache.js"(exports) {
      "use strict";
      var __extends14 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics2 = function(d, b) {
          extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
          };
          return extendStatics2(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics2(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __awaiter20 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
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
      };
      var __generator20 = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
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
                return { value: op[1], done: false };
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
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CloudbaseCache = void 0;
      var adapter_interface_1 = require_cmjs();
      var util_1 = require_util();
      var constants_1 = require_constants();
      var TcbCacheObject = (function(_super) {
        __extends14(TcbCacheObject2, _super);
        function TcbCacheObject2(root) {
          var _this = _super.call(this) || this;
          _this._root = root;
          if (!root.tcbCacheObject) {
            root.tcbCacheObject = {};
          }
          return _this;
        }
        TcbCacheObject2.prototype.setItem = function(key2, value) {
          this._root.tcbCacheObject[key2] = value;
        };
        TcbCacheObject2.prototype.getItem = function(key2) {
          return this._root.tcbCacheObject[key2];
        };
        TcbCacheObject2.prototype.removeItem = function(key2) {
          delete this._root.tcbCacheObject[key2];
        };
        TcbCacheObject2.prototype.clear = function() {
          delete this._root.tcbCacheObject;
        };
        return TcbCacheObject2;
      })(adapter_interface_1.AbstractStorage);
      function createStorage(persistence, adapter2) {
        switch (persistence) {
          case "local":
            if (!adapter2.localStorage) {
              (0, util_1.printWarn)(constants_1.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform");
              return new TcbCacheObject(adapter2.root);
            }
            return adapter2.localStorage;
          case "none":
            return new TcbCacheObject(adapter2.root);
          case "session":
            if (!adapter2.sessionStorage) {
              (0, util_1.printWarn)(constants_1.ERRORS.INVALID_PARAMS, "sessionStorage is not supported on current platform");
              return new TcbCacheObject(adapter2.root);
            }
            return adapter2.sessionStorage;
          default:
            if (!adapter2.localStorage) {
              (0, util_1.printWarn)(constants_1.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform");
              return new TcbCacheObject(adapter2.root);
            }
            return adapter2.localStorage;
        }
      }
      var CloudbaseCache2 = (function() {
        function CloudbaseCache3(config) {
          this.keys = {};
          var persistence = config.persistence, _a2 = config.platformInfo, platformInfo = _a2 === void 0 ? {} : _a2, _b = config.keys, keys = _b === void 0 ? {} : _b, _c = config.alwaysLocalKeys, alwaysLocalKeys = _c === void 0 ? [] : _c;
          this._platformInfo = platformInfo;
          this._alwaysLocalKeys = alwaysLocalKeys;
          if (!this._storage) {
            this._persistence = platformInfo.adapter.primaryStorage || persistence;
            this._storage = createStorage(this._persistence, platformInfo.adapter);
            this.keys = keys;
          }
        }
        Object.defineProperty(CloudbaseCache3.prototype, "mode", {
          get: function() {
            return this._storage.mode || "sync";
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(CloudbaseCache3.prototype, "persistence", {
          get: function() {
            return this._persistence;
          },
          enumerable: false,
          configurable: true
        });
        CloudbaseCache3.prototype.updatePersistence = function(persistence) {
          if (this.mode === "async") {
            (0, util_1.printWarn)(constants_1.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use updatePersistenceAsync insteed");
            return;
          }
          if (persistence === this._persistence) {
            return;
          }
          var isCurrentLocal = this._persistence === "local";
          this._persistence = persistence;
          var storage = createStorage(persistence, this._platformInfo.adapter);
          for (var key2 in this.keys) {
            var name_1 = this.keys[key2];
            if (isCurrentLocal && this._alwaysLocalKeys.includes(key2)) {
              continue;
            }
            var val = this._storage.getItem(name_1);
            if (!(0, util_1.isUndefined)(val) && !(0, util_1.isNull)(val)) {
              storage.setItem(name_1, val);
              this._storage.removeItem(name_1);
            }
          }
          this._storage = storage;
        };
        CloudbaseCache3.prototype.updatePersistenceAsync = function(persistence) {
          return __awaiter20(this, void 0, void 0, function() {
            var isCurrentLocal, storage, _a2, _b, _c, _i, key2, name_2, val;
            return __generator20(this, function(_d) {
              switch (_d.label) {
                case 0:
                  if (persistence === this._persistence) {
                    return [2];
                  }
                  isCurrentLocal = this._persistence === "local";
                  this._persistence = persistence;
                  storage = createStorage(persistence, this._platformInfo.adapter);
                  _a2 = this.keys;
                  _b = [];
                  for (_c in _a2)
                    _b.push(_c);
                  _i = 0;
                  _d.label = 1;
                case 1:
                  if (!(_i < _b.length)) return [3, 5];
                  _c = _b[_i];
                  if (!(_c in _a2)) return [3, 4];
                  key2 = _c;
                  name_2 = this.keys[key2];
                  if (isCurrentLocal && this._alwaysLocalKeys.includes(key2)) {
                    return [3, 4];
                  }
                  return [4, this._storage.getItem(name_2)];
                case 2:
                  val = _d.sent();
                  if (!(!(0, util_1.isUndefined)(val) && !(0, util_1.isNull)(val))) return [3, 4];
                  storage.setItem(name_2, val);
                  return [4, this._storage.removeItem(name_2)];
                case 3:
                  _d.sent();
                  _d.label = 4;
                case 4:
                  _i++;
                  return [3, 1];
                case 5:
                  this._storage = storage;
                  return [2];
              }
            });
          });
        };
        CloudbaseCache3.prototype.setStore = function(key2, value, version2) {
          if (this.mode === "async") {
            (0, util_1.printWarn)(constants_1.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use setStoreAsync insteed");
            return;
          }
          if (!this._storage) {
            return;
          }
          try {
            var val = {
              version: version2 || "localCachev1",
              content: value
            };
            this._storage.setItem(key2, JSON.stringify(val));
          } catch (e) {
            throw new Error(JSON.stringify({
              code: constants_1.ERRORS.OPERATION_FAIL,
              msg: "[".concat((0, constants_1.getSdkName)(), "][").concat(constants_1.ERRORS.OPERATION_FAIL, "]setStore failed"),
              info: e
            }));
          }
          return;
        };
        CloudbaseCache3.prototype.setStoreAsync = function(key2, value, version2) {
          return __awaiter20(this, void 0, void 0, function() {
            var val, e_1;
            return __generator20(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  if (!this._storage) {
                    return [2];
                  }
                  _a2.label = 1;
                case 1:
                  _a2.trys.push([1, 3, , 4]);
                  val = {
                    version: version2 || "localCachev1",
                    content: value
                  };
                  return [4, this._storage.setItem(key2, JSON.stringify(val))];
                case 2:
                  _a2.sent();
                  return [3, 4];
                case 3:
                  e_1 = _a2.sent();
                  return [2];
                case 4:
                  return [2];
              }
            });
          });
        };
        CloudbaseCache3.prototype.getStore = function(key2, version2) {
          var _a2;
          if (this.mode === "async") {
            (0, util_1.printWarn)(constants_1.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use getStoreAsync insteed");
            return;
          }
          try {
            if (typeof process !== "undefined" && ((_a2 = process.env) === null || _a2 === void 0 ? void 0 : _a2.tcb_token)) {
              return process.env.tcb_token;
            }
            if (!this._storage) {
              return "";
            }
          } catch (e) {
            return "";
          }
          version2 = version2 || "localCachev1";
          var content = this._storage.getItem(key2);
          if (!content) {
            return "";
          }
          if (content.indexOf(version2) >= 0) {
            var d = JSON.parse(content);
            return d.content;
          }
          return "";
        };
        CloudbaseCache3.prototype.getStoreAsync = function(key2, version2) {
          var _a2;
          return __awaiter20(this, void 0, void 0, function() {
            var content, d;
            return __generator20(this, function(_b) {
              switch (_b.label) {
                case 0:
                  try {
                    if (typeof process !== "undefined" && ((_a2 = process.env) === null || _a2 === void 0 ? void 0 : _a2.tcb_token)) {
                      return [2, process.env.tcb_token];
                    }
                    if (!this._storage) {
                      return [2, ""];
                    }
                  } catch (e) {
                    return [2, ""];
                  }
                  version2 = version2 || "localCachev1";
                  return [4, this._storage.getItem(key2)];
                case 1:
                  content = _b.sent();
                  if (!content) {
                    return [2, ""];
                  }
                  if (content.indexOf(version2) >= 0) {
                    d = JSON.parse(content);
                    return [2, d.content];
                  }
                  return [2, ""];
              }
            });
          });
        };
        CloudbaseCache3.prototype.removeStore = function(key2) {
          if (this.mode === "async") {
            (0, util_1.printWarn)(constants_1.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use removeStoreAsync insteed");
            return;
          }
          this._storage.removeItem(key2);
        };
        CloudbaseCache3.prototype.removeStoreAsync = function(key2) {
          return __awaiter20(this, void 0, void 0, function() {
            return __generator20(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  return [4, this._storage.removeItem(key2)];
                case 1:
                  _a2.sent();
                  return [2];
              }
            });
          });
        };
        return CloudbaseCache3;
      })();
      exports.CloudbaseCache = CloudbaseCache2;
    }
  });

  // node_modules/@cloudbase/utilities/dist/libs/events.js
  var require_events = __commonJS({
    "node_modules/@cloudbase/utilities/dist/libs/events.js"(exports) {
      "use strict";
      var __extends14 = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics2 = function(d, b) {
          extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
          };
          return extendStatics2(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics2(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __spreadArray3 = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
          if (ar || !(i2 in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
            ar[i2] = from[i2];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.removeEventListener = exports.activateEvent = exports.addEventListener = exports.CloudbaseEventEmitter = exports.IErrorEvent = exports.CloudbaseEvent = void 0;
      var util_1 = require_util();
      function _addEventListener(name, listener, listeners) {
        listeners[name] = listeners[name] || [];
        listeners[name].push(listener);
      }
      function _removeEventListener(name, listener, listeners) {
        if (listeners === null || listeners === void 0 ? void 0 : listeners[name]) {
          var index = listeners[name].indexOf(listener);
          if (index !== -1) {
            listeners[name].splice(index, 1);
          }
        }
      }
      var CloudbaseEvent = /* @__PURE__ */ (function() {
        function CloudbaseEvent2(name, data) {
          this.data = data || null;
          this.name = name;
        }
        return CloudbaseEvent2;
      })();
      exports.CloudbaseEvent = CloudbaseEvent;
      var IErrorEvent = (function(_super) {
        __extends14(IErrorEvent2, _super);
        function IErrorEvent2(error, data) {
          var _this = _super.call(this, "error", { error, data }) || this;
          _this.error = error;
          return _this;
        }
        return IErrorEvent2;
      })(CloudbaseEvent);
      exports.IErrorEvent = IErrorEvent;
      var CloudbaseEventEmitter2 = (function() {
        function CloudbaseEventEmitter3() {
          this._listeners = {};
        }
        CloudbaseEventEmitter3.prototype.on = function(name, listener) {
          _addEventListener(name, listener, this._listeners);
          return this;
        };
        CloudbaseEventEmitter3.prototype.off = function(name, listener) {
          _removeEventListener(name, listener, this._listeners);
          return this;
        };
        CloudbaseEventEmitter3.prototype.fire = function(event, data) {
          if ((0, util_1.isInstanceOf)(event, IErrorEvent)) {
            console.error(event.error);
            return this;
          }
          var ev = (0, util_1.isString)(event) ? new CloudbaseEvent(event, data || {}) : event;
          var name = ev.name;
          if (this._listens(name)) {
            ev.target = this;
            var handlers = this._listeners[name] ? __spreadArray3([], this._listeners[name], true) : [];
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
              var fn = handlers_1[_i];
              fn.call(this, ev);
            }
          }
          return this;
        };
        CloudbaseEventEmitter3.prototype._listens = function(name) {
          return this._listeners[name] && this._listeners[name].length > 0;
        };
        return CloudbaseEventEmitter3;
      })();
      exports.CloudbaseEventEmitter = CloudbaseEventEmitter2;
      var eventEmitter = new CloudbaseEventEmitter2();
      function addEventListener2(event, callback) {
        eventEmitter.on(event, callback);
      }
      exports.addEventListener = addEventListener2;
      function activateEvent(event, data) {
        if (data === void 0) {
          data = {};
        }
        eventEmitter.fire(event, data);
      }
      exports.activateEvent = activateEvent;
      function removeEventListener(event, callback) {
        eventEmitter.off(event, callback);
      }
      exports.removeEventListener = removeEventListener;
    }
  });

  // node_modules/@cloudbase/utilities/dist/helpers/decorators.js
  var require_decorators = __commonJS({
    "node_modules/@cloudbase/utilities/dist/helpers/decorators.js"(exports) {
      "use strict";
      var __awaiter20 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
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
      };
      var __generator20 = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
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
                return { value: op[1], done: false };
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
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.catchErrorsDecorator = void 0;
      var util_1 = require_util();
      var constants_1 = require_constants();
      var isFirefox = false;
      if (typeof navigator !== "undefined" && navigator.userAgent) {
        isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
      }
      var REG_STACK_DECORATE = isFirefox ? /(\.js\/)?__decorate(\$\d+)?<@.*\d$/ : /(\/\w+\.js\.)?__decorate(\$\d+)?\s*\(.*\)$/;
      var REG_STACK_LINK = /https?\:\/\/.+\:\d*\/.*\.js\:\d+\:\d+/;
      function catchErrorsDecorator12(options) {
        var _a2 = options.mode, mode = _a2 === void 0 ? "async" : _a2, _b = options.customInfo, customInfo = _b === void 0 ? {} : _b, title = options.title, _c = options.messages, messages = _c === void 0 ? [] : _c;
        return function(target, methodName, descriptor) {
          if (!constants_1.IS_DEBUG_MODE) {
            return;
          }
          var className = customInfo.className || target.constructor.name;
          var fnName = customInfo.methodName || methodName;
          var fn = descriptor.value;
          var sourceLink = getSourceLink(new Error());
          if (mode === "sync") {
            descriptor.value = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var innerErr = getRewritedError({
                err: new Error(),
                className,
                methodName: fnName,
                sourceLink
              });
              try {
                return fn.apply(this, args);
              } catch (err) {
                var failErr = err;
                var errMsg = err.message;
                var logs = {
                  title: title || "".concat(className, ".").concat(fnName, " failed"),
                  content: [{
                    type: "error",
                    body: err
                  }]
                };
                if (errMsg && /^\{.*\}$/.test(errMsg)) {
                  var msg = JSON.parse(errMsg);
                  logs.subtitle = errMsg;
                  if (msg.code) {
                    if (innerErr) {
                      innerErr.code = msg.code;
                      innerErr.msg = msg.msg;
                    } else {
                      err.code = msg.code;
                      err.message = msg.msg;
                    }
                    failErr = innerErr || err;
                    logs.content = messages.map(function(msg2) {
                      return {
                        type: "info",
                        body: msg2
                      };
                    });
                  }
                }
                (0, util_1.printGroupLog)(logs);
                throw failErr;
              }
            };
          } else {
            descriptor.value = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return __awaiter20(this, void 0, void 0, function() {
                var innerErr, err_1, failErr, errMsg, logs, msg;
                return __generator20(this, function(_a3) {
                  switch (_a3.label) {
                    case 0:
                      innerErr = getRewritedError({
                        err: new Error(),
                        className,
                        methodName: fnName,
                        sourceLink
                      });
                      _a3.label = 1;
                    case 1:
                      _a3.trys.push([1, 3, , 4]);
                      return [4, fn.apply(this, args)];
                    case 2:
                      return [2, _a3.sent()];
                    case 3:
                      err_1 = _a3.sent();
                      failErr = err_1;
                      errMsg = err_1.message;
                      logs = {
                        title: title || "".concat(className, ".").concat(fnName, " failed"),
                        content: [{
                          type: "error",
                          body: err_1
                        }]
                      };
                      if (errMsg && /^\{.*\}$/.test(errMsg)) {
                        msg = JSON.parse(errMsg);
                        logs.subtitle = msg;
                        if (msg.code) {
                          if (innerErr) {
                            innerErr.code = msg.code;
                            innerErr.message = msg.msg;
                          } else {
                            err_1.code = msg.code;
                            err_1.message = msg.msg;
                          }
                          failErr = innerErr || err_1;
                          logs.content = messages.map(function(msg2) {
                            return {
                              type: "info",
                              body: msg2
                            };
                          });
                        }
                      }
                      (0, util_1.printGroupLog)(logs);
                      throw failErr;
                    case 4:
                      return [2];
                  }
                });
              });
            };
          }
        };
      }
      exports.catchErrorsDecorator = catchErrorsDecorator12;
      function getSourceLink(err) {
        var sourceLink = "";
        var outterErrStacks = err.stack.split("\n");
        var indexOfDecorator = outterErrStacks.findIndex(function(str) {
          return REG_STACK_DECORATE.test(str);
        });
        if (indexOfDecorator !== -1) {
          var match = REG_STACK_LINK.exec(outterErrStacks[indexOfDecorator + 1] || "");
          sourceLink = match ? match[0] : "";
        }
        return sourceLink;
      }
      function getRewritedError(options) {
        var err = options.err, className = options.className, methodName = options.methodName, sourceLink = options.sourceLink;
        if (!sourceLink) {
          return null;
        }
        var innerErrStack = err.stack.split("\n");
        var REG_STACK_INNER_METHOD = isFirefox ? /^catchErrorsDecorator\/<\/descriptor.value@.*\d$/ : new RegExp("".concat(className, "\\.descriptor.value\\s*\\[as\\s").concat(methodName, "\\]\\s*\\(.*\\)$"));
        var REG_STACK_INNER_METHOD_WITHOUT_LINK = isFirefox ? /^catchErrorsDecorator\/<\/descriptor.value/ : new RegExp("".concat(className, "\\.descriptor.value\\s*\\[as\\s").concat(methodName, "\\]"));
        var indexOfSource = innerErrStack.findIndex(function(str) {
          return REG_STACK_INNER_METHOD.test(str);
        });
        var innerErr;
        if (indexOfSource !== -1) {
          var realErrStack = innerErrStack.filter(function(v, i2) {
            return i2 > indexOfSource;
          });
          realErrStack.unshift(innerErrStack[indexOfSource].replace(REG_STACK_INNER_METHOD_WITHOUT_LINK, "".concat(className, ".").concat(methodName)).replace(REG_STACK_LINK, sourceLink));
          innerErr = new Error();
          innerErr.stack = "".concat(isFirefox ? "@debugger" : "Error", "\n").concat(realErrStack.join("\n"));
        }
        return innerErr;
      }
    }
  });

  // node_modules/@cloudbase/utilities/dist/helpers/index.js
  var require_helpers = __commonJS({
    "node_modules/@cloudbase/utilities/dist/helpers/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_decorators(), exports);
    }
  });

  // node_modules/@cloudbase/utilities/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@cloudbase/utilities/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.helpers = exports.utils = exports.events = exports.cache = exports.adapters = exports.constants = void 0;
      var constants15 = __importStar(require_constants());
      exports.constants = constants15;
      var adapters5 = __importStar(require_adapters());
      exports.adapters = adapters5;
      var cache2 = __importStar(require_cache());
      exports.cache = cache2;
      var events3 = __importStar(require_events());
      exports.events = events3;
      var utils12 = __importStar(require_util());
      exports.utils = utils12;
      var helpers12 = __importStar(require_helpers());
      exports.helpers = helpers12;
    }
  });

  // node_modules/lodash.set/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.set/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var INFINITY = 1 / 0;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var symbolTag = "[object Symbol]";
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      var reLeadingDot = /^\./;
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reEscapeChar = /\\(\\)?/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      function getValue(object, key2) {
        return object == null ? void 0 : object[key2];
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Symbol2 = root.Symbol;
      var splice = arrayProto.splice;
      var Map2 = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function Hash(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
      }
      function hashDelete(key2) {
        return this.has(key2) && delete this.__data__[key2];
      }
      function hashGet(key2) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key2];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key2) ? data[key2] : void 0;
      }
      function hashHas(key2) {
        var data = this.__data__;
        return nativeCreate ? data[key2] !== void 0 : hasOwnProperty.call(data, key2);
      }
      function hashSet(key2, value) {
        var data = this.__data__;
        data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
      }
      function listCacheDelete(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        return true;
      }
      function listCacheGet(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key2) {
        return assocIndexOf(this.__data__, key2) > -1;
      }
      function listCacheSet(key2, value) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          data.push([key2, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key2) {
        return getMapData(this, key2)["delete"](key2);
      }
      function mapCacheGet(key2) {
        return getMapData(this, key2).get(key2);
      }
      function mapCacheHas(key2) {
        return getMapData(this, key2).has(key2);
      }
      function mapCacheSet(key2, value) {
        getMapData(this, key2).set(key2, value);
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function assignValue(object, key2, value) {
        var objValue = object[key2];
        if (!(hasOwnProperty.call(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
          object[key2] = value;
        }
      }
      function assocIndexOf(array, key2) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key2)) {
            return length;
          }
        }
        return -1;
      }
      function baseIsNative(value) {
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = isKey(path, object) ? [path] : castPath(path);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key2 = toKey(path[index]), newValue = value;
          if (index != lastIndex) {
            var objValue = nested[key2];
            newValue = customizer ? customizer(objValue, key2, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key2, newValue);
          nested = nested[key2];
        }
        return object;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function castPath(value) {
        return isArray3(value) ? value : stringToPath(value);
      }
      function getMapData(map, key2) {
        var data = map.__data__;
        return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key2) {
        var value = getValue(object, key2);
        return baseIsNative(value) ? value : void 0;
      }
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isKey(value, object) {
        if (isArray3(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var stringToPath = memoize(function(string) {
        string = toString(string);
        var result = [];
        if (reLeadingDot.test(string)) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, string2) {
          result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key2)) {
            return cache2.get(key2);
          }
          var result = func.apply(this, args);
          memoized.cache = cache2.set(key2, result);
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArray3 = Array.isArray;
      function isFunction(value) {
        var tag = isObject2(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isObject2(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike2(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike2(value) && objectToString.call(value) == symbolTag;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      function set2(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      module.exports = set2;
    }
  });

  // node_modules/lodash.unset/index.js
  var require_lodash2 = __commonJS({
    "node_modules/lodash.unset/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var INFINITY = 1 / 0;
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var nullTag = "[object Null]";
      var proxyTag = "[object Proxy]";
      var symbolTag = "[object Symbol]";
      var undefinedTag = "[object Undefined]";
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reEscapeChar = /\\(\\)?/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function getValue(object, key2) {
        return object == null ? void 0 : object[key2];
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      var nativeObjectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Symbol2 = root.Symbol;
      var splice = arrayProto.splice;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      var Map2 = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key2) {
        var result = this.has(key2) && delete this.__data__[key2];
        this.size -= result ? 1 : 0;
        return result;
      }
      function hashGet(key2) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key2];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key2) ? data[key2] : void 0;
      }
      function hashHas(key2) {
        var data = this.__data__;
        return nativeCreate ? data[key2] !== void 0 : hasOwnProperty.call(data, key2);
      }
      function hashSet(key2, value) {
        var data = this.__data__;
        this.size += this.has(key2) ? 0 : 1;
        data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key2) {
        return assocIndexOf(this.__data__, key2) > -1;
      }
      function listCacheSet(key2, value) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          ++this.size;
          data.push([key2, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key2) {
        var result = getMapData(this, key2)["delete"](key2);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key2) {
        return getMapData(this, key2).get(key2);
      }
      function mapCacheHas(key2) {
        return getMapData(this, key2).has(key2);
      }
      function mapCacheSet(key2, value) {
        var data = getMapData(this, key2), size = data.size;
        data.set(key2, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function assocIndexOf(array, key2) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key2)) {
            return length;
          }
        }
        return -1;
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      function baseIsNative(value) {
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray3(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        var index = -1, length = path.length;
        if (!length) {
          return true;
        }
        while (++index < length) {
          var key2 = toKey(path[index]);
          if (key2 === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
            return false;
          }
          if ((key2 === "constructor" || key2 === "prototype") && index < length - 1) {
            return false;
          }
        }
        var obj = parent(object, path);
        return obj == null || delete obj[toKey(last(path))];
      }
      function castPath(value, object) {
        if (isArray3(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      function getMapData(map, key2) {
        var data = map.__data__;
        return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key2) {
        var value = getValue(object, key2);
        return baseIsNative(value) ? value : void 0;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      function isKey(value, object) {
        if (isArray3(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function memoizeCapped(func) {
        var result = memoize(func, function(key2) {
          if (cache2.size === MAX_MEMOIZE_SIZE) {
            cache2.clear();
          }
          return key2;
        });
        var cache2 = result.cache;
        return result;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : void 0;
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key2)) {
            return cache2.get(key2);
          }
          var result = func.apply(this, args);
          memoized.cache = cache2.set(key2, result) || cache2;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArray3 = Array.isArray;
      function isFunction(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike2(value) {
        return value != null && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike2(value) && baseGetTag(value) == symbolTag;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      function unset2(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      module.exports = unset2;
    }
  });

  // node_modules/lodash.clonedeep/index.js
  var require_lodash3 = __commonJS({
    "node_modules/lodash.clonedeep/index.js"(exports, module) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reFlags = /\w*$/;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      function addMapEntry(map, pair) {
        map.set(pair[0], pair[1]);
        return map;
      }
      function addSetEntry(set2, value) {
        set2.add(value);
        return set2;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array ? array.length : 0;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array ? array.length : 0;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function getValue(object, key2) {
        return object == null ? void 0 : object[key2];
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key2) {
          result[++index] = [key2, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function setToArray(set2) {
        var index = -1, result = Array(set2.size);
        set2.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var Symbol2 = root.Symbol;
      var Uint8Array2 = root.Uint8Array;
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      var objectCreate = Object.create;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var splice = arrayProto.splice;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var nativeKeys = overArg(Object.keys, Object);
      var DataView2 = getNative(root, "DataView");
      var Map2 = getNative(root, "Map");
      var Promise2 = getNative(root, "Promise");
      var Set2 = getNative(root, "Set");
      var WeakMap = getNative(root, "WeakMap");
      var nativeCreate = getNative(Object, "create");
      var dataViewCtorString = toSource(DataView2);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function Hash(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
      }
      function hashDelete(key2) {
        return this.has(key2) && delete this.__data__[key2];
      }
      function hashGet(key2) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key2];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key2) ? data[key2] : void 0;
      }
      function hashHas(key2) {
        var data = this.__data__;
        return nativeCreate ? data[key2] !== void 0 : hasOwnProperty.call(data, key2);
      }
      function hashSet(key2, value) {
        var data = this.__data__;
        data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
      }
      function listCacheDelete(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        return true;
      }
      function listCacheGet(key2) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key2) {
        return assocIndexOf(this.__data__, key2) > -1;
      }
      function listCacheSet(key2, value) {
        var data = this.__data__, index = assocIndexOf(data, key2);
        if (index < 0) {
          data.push([key2, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key2) {
        return getMapData(this, key2)["delete"](key2);
      }
      function mapCacheGet(key2) {
        return getMapData(this, key2).get(key2);
      }
      function mapCacheHas(key2) {
        return getMapData(this, key2).has(key2);
      }
      function mapCacheSet(key2, value) {
        getMapData(this, key2).set(key2, value);
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function Stack(entries) {
        this.__data__ = new ListCache(entries);
      }
      function stackClear() {
        this.__data__ = new ListCache();
      }
      function stackDelete(key2) {
        return this.__data__["delete"](key2);
      }
      function stackGet(key2) {
        return this.__data__.get(key2);
      }
      function stackHas(key2) {
        return this.__data__.has(key2);
      }
      function stackSet(key2, value) {
        var cache2 = this.__data__;
        if (cache2 instanceof ListCache) {
          var pairs = cache2.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key2, value]);
            return this;
          }
          cache2 = this.__data__ = new MapCache(pairs);
        }
        cache2.set(key2, value);
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var result = isArray3(value) || isArguments(value) ? baseTimes(value.length, String) : [];
        var length = result.length, skipIndexes = !!length;
        for (var key2 in value) {
          if ((inherited || hasOwnProperty.call(value, key2)) && !(skipIndexes && (key2 == "length" || isIndex(key2, length)))) {
            result.push(key2);
          }
        }
        return result;
      }
      function assignValue(object, key2, value) {
        var objValue = object[key2];
        if (!(hasOwnProperty.call(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
          object[key2] = value;
        }
      }
      function assocIndexOf(array, key2) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key2)) {
            return length;
          }
        }
        return -1;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseClone(value, isDeep, isFull, customizer, key2, object, stack) {
        var result;
        if (customizer) {
          result = object ? customizer(value, key2, object, stack) : customizer(value);
        }
        if (result !== void 0) {
          return result;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray3(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            if (isHostObject(value)) {
              return object ? value : {};
            }
            result = initCloneObject(isFunc ? {} : value);
            if (!isDeep) {
              return copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, baseClone, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (!isArr) {
          var props = isFull ? getAllKeys(value) : keys(value);
        }
        arrayEach(props || value, function(subValue, key3) {
          if (props) {
            key3 = subValue;
            subValue = value[key3];
          }
          assignValue(result, key3, baseClone(subValue, isDeep, isFull, customizer, key3, value, stack));
        });
        return result;
      }
      function baseCreate(proto) {
        return isObject2(proto) ? objectCreate(proto) : {};
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray3(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function baseGetTag(value) {
        return objectToString.call(value);
      }
      function baseIsNative(value) {
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key2 in Object(object)) {
          if (hasOwnProperty.call(object, key2) && key2 != "constructor") {
            result.push(key2);
          }
        }
        return result;
      }
      function cloneBuffer(buffer2, isDeep) {
        if (isDeep) {
          return buffer2.slice();
        }
        var result = new buffer2.constructor(buffer2.length);
        buffer2.copy(result);
        return result;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer2 = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer2, dataView.byteOffset, dataView.byteLength);
      }
      function cloneMap(map, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
        return arrayReduce(array, addMapEntry, new map.constructor());
      }
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      function cloneSet(set2, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(setToArray(set2), true) : setToArray(set2);
        return arrayReduce(array, addSetEntry, new set2.constructor());
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key2 = props[index];
          var newValue = customizer ? customizer(object[key2], source[key2], key2, object, source) : void 0;
          assignValue(object, key2, newValue === void 0 ? source[key2] : newValue);
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getMapData(map, key2) {
        var data = map.__data__;
        return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key2) {
        var value = getValue(object, key2);
        return baseIsNative(value) ? value : void 0;
      }
      var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
      var getTag = baseGetTag;
      if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      function initCloneArray(array) {
        var length = array.length, result = array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, cloneFunc, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return cloneMap(object, isDeep, cloneFunc);
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return cloneSet(object, isDeep, cloneFunc);
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function cloneDeep2(value) {
        return baseClone(value, true, true);
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      function isArguments(value) {
        return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
      }
      var isArray3 = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike2(value) && isArrayLike(value);
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      function isFunction(value) {
        var tag = isObject2(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject2(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike2(value) {
        return !!value && typeof value == "object";
      }
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      module.exports = cloneDeep2;
    }
  });

  // node_modules/@cloudbase/app/dist/esm/index.js
  var import_utilities5 = __toESM(require_dist());

  // node_modules/cloudbase-adapter-wx_mp/dist/esm/index.js
  var import_adapter_interface = __toESM(require_cmjs());
  var __extends = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var __assign = function() {
    __assign = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  function isMatch() {
    if (typeof wx === "undefined") {
      return false;
    }
    if (typeof Page === "undefined") {
      return false;
    }
    if (!wx.getSystemInfoSync) {
      return false;
    }
    if (!wx.getStorageSync) {
      return false;
    }
    if (!wx.setStorageSync) {
      return false;
    }
    if (!wx.connectSocket) {
      return false;
    }
    if (!wx.request) {
      return false;
    }
    try {
      if (!wx.getSystemInfoSync()) {
        return false;
      }
      if (wx.getSystemInfoSync().AppPlatform === "qq") {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
  function isPlugin() {
    return typeof App === "undefined" && typeof getApp === "undefined" && !wx.onAppHide && !wx.offAppHide && !wx.onAppShow && !wx.offAppShow;
  }
  var WxRequest = (function(_super) {
    __extends(WxRequest2, _super);
    function WxRequest2(config) {
      if (config === void 0) {
        config = {};
      }
      var _this = _super.call(this) || this;
      var timeout = config.timeout, timeoutMsg = config.timeoutMsg, restrictedMethods = config.restrictedMethods;
      _this._timeout = timeout || 0;
      _this._timeoutMsg = timeoutMsg || "\u8BF7\u6C42\u8D85\u65F6";
      _this._restrictedMethods = restrictedMethods || ["get", "post", "upload", "download"];
      return _this;
    }
    WxRequest2.prototype.post = function(options) {
      var self2 = this;
      return new Promise(function(resolve, reject) {
        var url = options.url, data = options.data, headers = options.headers;
        var task = wx.request({
          url: (0, import_adapter_interface.formatUrl)("https:", url),
          data,
          timeout: self2._timeout,
          method: "POST",
          header: headers,
          success: function(res) {
            resolve(res);
          },
          fail: function(err) {
            reject(err);
          },
          complete: function(err) {
            if (!err || !err.errMsg) {
              return;
            }
            if (!self2._timeout || self2._restrictedMethods.indexOf("post") === -1) {
              return;
            }
            var errMsg = err.errMsg;
            if (errMsg === "request:fail timeout") {
              console.warn(self2._timeoutMsg);
              try {
                task.abort();
              } catch (e) {
              }
            }
          }
        });
      });
    };
    WxRequest2.prototype.upload = function(options) {
      var _this = this;
      var self2 = this;
      return new Promise(function(resolve) {
        return __awaiter(_this, void 0, void 0, function() {
          var url, file, data, headers, onUploadProgress, task;
          return __generator(this, function(_a2) {
            url = options.url, file = options.file, data = options.data, headers = options.headers, onUploadProgress = options.onUploadProgress;
            task = wx.uploadFile({
              url,
              filePath: file,
              name: "file",
              formData: __assign({}, data),
              header: headers,
              timeout: this._timeout,
              success: function(res) {
                var result = {
                  statusCode: res.statusCode,
                  data: res.data || {}
                };
                if (res.statusCode === 200 && data.success_action_status) {
                  result.statusCode = parseInt(data.success_action_status, 10);
                }
                resolve(result);
              },
              fail: function(err) {
                resolve(err);
              },
              complete: function(err) {
                if (!err || !err.errMsg) {
                  return;
                }
                if (!self2._timeout || self2._restrictedMethods.indexOf("upload") === -1) {
                  return;
                }
                var errMsg = err.errMsg;
                if (errMsg === "request:fail timeout") {
                  console.warn(self2._timeoutMsg);
                  try {
                    task.abort();
                  } catch (e) {
                  }
                }
              }
            });
            if (onUploadProgress) {
              task.onProgressUpdate(function(res) {
                onUploadProgress(res);
              });
            }
            return [2];
          });
        });
      });
    };
    WxRequest2.prototype.download = function(options) {
      var _this = this;
      var self2 = this;
      return new Promise(function(resolve, reject) {
        var url = options.url, headers = options.headers;
        var task = wx.downloadFile({
          url: (0, import_adapter_interface.formatUrl)("https:", url),
          header: headers,
          timeout: _this._timeout,
          success: function(res) {
            if (res.statusCode === 200 && res.tempFilePath) {
              resolve({
                statusCode: 200,
                tempFilePath: res.tempFilePath
              });
            } else {
              resolve(res);
            }
          },
          fail: function(err) {
            reject(err);
          },
          complete: function(err) {
            if (!err || !err.errMsg) {
              return;
            }
            if (!self2._timeout || self2._restrictedMethods.indexOf("download") === -1) {
              return;
            }
            var errMsg = err.errMsg;
            if (errMsg === "request:fail timeout") {
              console.warn(self2._timeoutMsg);
              try {
                task.abort();
              } catch (e) {
              }
            }
          }
        });
      });
    };
    return WxRequest2;
  })(import_adapter_interface.AbstractSDKRequest);
  var wxMpStorage = {
    setItem: function(key2, value) {
      wx.setStorageSync(key2, value);
    },
    getItem: function(key2) {
      return wx.getStorageSync(key2);
    },
    removeItem: function(key2) {
      wx.removeStorageSync(key2);
    },
    clear: function() {
      wx.clearStorageSync();
    }
  };
  var WxMpWebSocket = /* @__PURE__ */ (function() {
    function WxMpWebSocket2(url, options) {
      if (options === void 0) {
        options = {};
      }
      var ws = wx.connectSocket(__assign({ url }, options));
      var socketTask = {
        set onopen(cb) {
          ws.onOpen(cb);
        },
        set onmessage(cb) {
          ws.onMessage(cb);
        },
        set onclose(cb) {
          ws.onClose(cb);
        },
        set onerror(cb) {
          ws.onError(cb);
        },
        send: function(data) {
          return ws.send({ data });
        },
        close: function(code2, reason) {
          return ws.close({
            code: code2,
            reason
          });
        },
        get readyState() {
          return ws.readyState;
        },
        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
      };
      return socketTask;
    }
    return WxMpWebSocket2;
  })();
  function genAdapter() {
    var adapter2 = {
      root: {},
      reqClass: WxRequest,
      wsClass: WxMpWebSocket,
      localStorage: wxMpStorage,
      primaryStorage: import_adapter_interface.StorageType.local,
      getAppSign: function() {
        var info = wx.getAccountInfoSync();
        if (isPlugin()) {
          return info && info.plugin ? info.plugin.appId : "";
        } else {
          return info && info.miniProgram ? info.miniProgram.appId : "";
        }
      }
    };
    return adapter2;
  }
  var adapter = {
    genAdapter,
    isMatch,
    runtime: "wx_mp"
  };
  var esm_default = adapter;

  // node_modules/@cloudbase/app/dist/esm/libs/component.js
  var import_utilities = __toESM(require_dist());
  var __spreadArray = function(to, from, pack) {
    if (pack || arguments.length === 2) for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  var ERRORS = import_utilities.constants.ERRORS;
  var components = {};
  function registerComponent(app, component7) {
    var name = component7.name, namespace = component7.namespace, entity = component7.entity, injectEvents = component7.injectEvents, _a2 = component7.IIFE, IIFE = _a2 === void 0 ? false : _a2;
    if (components[name] || namespace && app[namespace]) {
      throw new Error(JSON.stringify({
        code: ERRORS.INVALID_OPERATION,
        msg: "Duplicate component ".concat(name)
      }));
    }
    if (IIFE) {
      if (!entity || typeof entity !== "function") {
        throw new Error(JSON.stringify({
          code: ERRORS.INVALID_PARAMS,
          msg: "IIFE component's entity must be a function"
        }));
      }
      entity.call(app);
    }
    components[name] = component7;
    if (namespace) {
      app.prototype[namespace] = entity;
    } else {
      deepExtend(app.prototype, entity);
    }
    if (injectEvents) {
      var bus = injectEvents.bus, events3 = injectEvents.events;
      if (!bus || !events3 || events3.length === 0) {
        return;
      }
      var originCallback_1 = app.prototype.fire || function() {
      };
      if (!app.prototype.events) {
        app.prototype.events = {};
      }
      var originEvents = app.prototype.events || {};
      if (originEvents[name]) {
        app.prototype.events[name].events = __spreadArray(__spreadArray([], app.prototype.events[name].events, true), events3, true);
      } else {
        app.prototype.events[name] = { bus, events: events3 };
      }
      app.prototype.fire = function(eventName, data) {
        originCallback_1(eventName, data);
        for (var name_1 in this.events) {
          var _a3 = this.events[name_1], bus_1 = _a3.bus, eventList = _a3.events;
          if (eventList.includes(eventName)) {
            bus_1.fire(eventName, data);
            break;
          }
        }
      };
    }
  }
  function deepExtend(target, source) {
    if (!(source instanceof Object)) {
      return source;
    }
    switch (source.constructor) {
      case Date:
        var dateValue = source;
        return new Date(dateValue.getTime());
      case Object:
        if (target === void 0) {
          target = {};
        }
        break;
      case Array:
        target = [];
        break;
      default:
        return source;
    }
    for (var key2 in source) {
      if (!source.hasOwnProperty(key2)) {
        continue;
      }
      target[key2] = deepExtend(target[key2], source[key2]);
    }
    return target;
  }
  function registerHook(app, hook2) {
    var entity = hook2.entity, target = hook2.target;
    if (!app.prototype.hasOwnProperty(target)) {
      throw new Error(JSON.stringify({
        code: ERRORS.INVALID_OPERATION,
        msg: "target:".concat(target, " is not exist")
      }));
    }
    var originMethod = app.prototype[target];
    if (typeof originMethod !== "function") {
      throw new Error(JSON.stringify({
        code: ERRORS.INVALID_OPERATION,
        msg: "target:".concat(target, " is not a function which is the only type supports hook")
      }));
    }
    app.prototype[target] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      entity.call.apply(entity, __spreadArray([this], args, false));
      return originMethod.call.apply(originMethod, __spreadArray([this], args, false));
    };
  }

  // node_modules/@cloudbase/app/dist/esm/libs/adapter.js
  var Platform = {};

  // node_modules/@cloudbase/app/dist/esm/libs/cache.js
  var import_utilities2 = __toESM(require_dist());
  var __assign2 = function() {
    __assign2 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign2.apply(this, arguments);
  };
  var KEY_ACCESS_TOKEN = "access_token";
  var KEY_ACCESS_TOKEN_EXPIRE = "access_token_expire";
  var KEY_REFRESH_TOKEN = "refresh_token";
  var KEY_ANONYMOUS_UUID = "anonymous_uuid";
  var KEY_LOGIN_TYPE = "login_type";
  var USER_INFO_KEY = "user_info";
  var CloudbaseCache = import_utilities2.cache.CloudbaseCache;
  var cacheMap = {};
  var localCacheMap = {};
  function initCache(config) {
    var env = config.env, persistence = config.persistence, platformInfo = config.platformInfo;
    var accessTokenKey = "".concat(KEY_ACCESS_TOKEN, "_").concat(env);
    var accessTokenExpireKey = "".concat(KEY_ACCESS_TOKEN_EXPIRE, "_").concat(env);
    var refreshTokenKey = "".concat(KEY_REFRESH_TOKEN, "_").concat(env);
    var anonymousUuidKey = "".concat(KEY_ANONYMOUS_UUID, "_").concat(env);
    var loginTypeKey = "".concat(KEY_LOGIN_TYPE, "_").concat(env);
    var userInfoKey = "".concat(USER_INFO_KEY, "_").concat(env);
    var keys = {
      accessTokenKey,
      accessTokenExpireKey,
      refreshTokenKey,
      anonymousUuidKey,
      loginTypeKey,
      userInfoKey
    };
    cacheMap[env] ? cacheMap[env].updatePersistence(persistence) : cacheMap[env] = new CloudbaseCache(__assign2(__assign2({}, config), { keys, platformInfo, alwaysLocalKeys: ["anonymousUuidKey"] }));
    localCacheMap[env] = localCacheMap[env] || new CloudbaseCache(__assign2(__assign2({}, config), { keys, platformInfo, persistence: "local" }));
  }
  function getCacheByEnvId(env) {
    return cacheMap[env];
  }
  function getLocalCache(env) {
    return localCacheMap[env];
  }

  // node_modules/@cloudbase/app/dist/esm/constants/common.js
  var import_utilities3 = __toESM(require_dist());
  var setUtilitiesSdkName = import_utilities3.constants.setSdkName;
  var setUtilitiesProtocol = import_utilities3.constants.setProtocol;
  var sdk_version = "";
  var sdk_name = "@cloudbase/js-sdk";
  function setSdkVersion(version2) {
    sdk_version = version2;
  }
  function getSdkVersion() {
    return sdk_version;
  }
  function setSdkName(name) {
    sdk_name = name;
    setUtilitiesSdkName(name);
  }
  function getSdkName() {
    return sdk_name;
  }
  var DATA_VERSION = "2020-01-10";
  var PROTOCOL = typeof location !== "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var BASE_URL = typeof process !== "undefined" && false ? "//tcb-pre.tencentcloudapi.com/web" : "//tcb-api.tencentcloudapi.com/web";
  function setEndPoint(url, protocol) {
    BASE_URL = url;
    if (protocol) {
      PROTOCOL = protocol;
      setUtilitiesProtocol(protocol);
    }
  }
  function setRegionLevelEndpoint(env, region, protocol) {
    var endpoiont = region ? "//".concat(env, ".").concat(region, ".tcb-api.tencentcloudapi.com/web") : "//".concat(env, ".ap-shanghai.tcb-api.tencentcloudapi.com/web");
    setEndPoint(endpoiont, protocol);
  }
  function getEndPoint() {
    return { BASE_URL, PROTOCOL };
  }
  var LOGINTYPE;
  (function(LOGINTYPE3) {
    LOGINTYPE3["ANONYMOUS"] = "ANONYMOUS";
    LOGINTYPE3["WECHAT"] = "WECHAT";
    LOGINTYPE3["CUSTOM"] = "CUSTOM";
    LOGINTYPE3["NULL"] = "NULL";
  })(LOGINTYPE || (LOGINTYPE = {}));

  // node_modules/@cloudbase/app/dist/esm/libs/request.js
  var import_utilities4 = __toESM(require_dist());

  // node_modules/@cloudbase/app/dist/esm/constants/events.js
  var EVENTS = {
    LOGIN_STATE_CHANGED: "loginStateChanged",
    LOGIN_STATE_EXPIRED: "loginStateExpire",
    LOGIN_TYPE_CHANGED: "loginTypeChanged",
    ANONYMOUS_CONVERTED: "anonymousConverted",
    ACCESS_TOKEN_REFRESHD: "refreshAccessToken"
  };

  // node_modules/@cloudbase/app/dist/esm/libs/request.js
  var __assign3 = function() {
    __assign3 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign3.apply(this, arguments);
  };
  var __awaiter2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator2 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var ERRORS2 = import_utilities4.constants.ERRORS;
  var genSeqId = import_utilities4.utils.genSeqId;
  var isFormData = import_utilities4.utils.isFormData;
  var formatUrl2 = import_utilities4.utils.formatUrl;
  var createSign = import_utilities4.utils.createSign;
  var RUNTIME = import_utilities4.adapters.RUNTIME;
  var ACTIONS_WITHOUT_ACCESSTOKEN = [
    "auth.getJwt",
    "auth.logout",
    "auth.signInWithTicket",
    "auth.signInAnonymously",
    "auth.signIn",
    "auth.fetchAccessTokenWithRefreshToken",
    "auth.signUpWithEmailAndPassword",
    "auth.activateEndUserMail",
    "auth.sendPasswordResetEmail",
    "auth.resetPasswordWithToken",
    "auth.isUsernameRegistered"
  ];
  function bindHooks(instance, name, hooks) {
    var originMethod = instance[name];
    instance[name] = function(options) {
      var data = {};
      var headers = {};
      hooks.forEach(function(hook2) {
        var _a2 = hook2.call(instance, options), appendedData = _a2.data, appendedHeaders = _a2.headers;
        Object.assign(data, appendedData);
        Object.assign(headers, appendedHeaders);
      });
      var originData = options.data;
      originData && (function() {
        if (isFormData(originData)) {
          for (var key2 in data) {
            originData.append(key2, data[key2]);
          }
          return;
        }
        options.data = __assign3(__assign3({}, originData), data);
      })();
      options.headers = __assign3(__assign3({}, options.headers || {}), headers);
      return originMethod.call(instance, options);
    };
  }
  function beforeEach() {
    var seqId = genSeqId();
    return {
      data: {
        seqId
      },
      headers: {
        "X-SDK-Version": "@cloudbase/js-sdk/".concat(getSdkVersion()),
        "x-seqid": seqId
      }
    };
  }
  var CloudbaseRequest = (function() {
    function CloudbaseRequest2(config) {
      this._throwWhenRequestFail = false;
      this.config = config;
      this._reqClass = new Platform.adapter.reqClass({
        timeout: this.config.timeout,
        timeoutMsg: "[@cloudbase/js-sdk] \u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
        restrictedMethods: ["post"]
      });
      this._throwWhenRequestFail = config.throw || false;
      this._cache = getCacheByEnvId(this.config.env);
      this._localCache = getLocalCache(this.config.env);
      bindHooks(this._reqClass, "post", [beforeEach]);
      bindHooks(this._reqClass, "upload", [beforeEach]);
      bindHooks(this._reqClass, "download", [beforeEach]);
    }
    CloudbaseRequest2.prototype.post = function(options) {
      return __awaiter2(this, void 0, void 0, function() {
        var res;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._reqClass.post(options)];
            case 1:
              res = _a2.sent();
              return [2, res];
          }
        });
      });
    };
    CloudbaseRequest2.prototype.upload = function(options) {
      return __awaiter2(this, void 0, void 0, function() {
        var res;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._reqClass.upload(options)];
            case 1:
              res = _a2.sent();
              return [2, res];
          }
        });
      });
    };
    CloudbaseRequest2.prototype.download = function(options) {
      return __awaiter2(this, void 0, void 0, function() {
        var res;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._reqClass.download(options)];
            case 1:
              res = _a2.sent();
              return [2, res];
          }
        });
      });
    };
    CloudbaseRequest2.prototype.refreshAccessToken = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var result, err, e_1;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (!this._refreshAccessTokenPromise) {
                this._refreshAccessTokenPromise = this._refreshAccessToken();
              }
              _a2.label = 1;
            case 1:
              _a2.trys.push([1, 3, , 4]);
              return [4, this._refreshAccessTokenPromise];
            case 2:
              result = _a2.sent();
              return [3, 4];
            case 3:
              e_1 = _a2.sent();
              err = e_1;
              return [3, 4];
            case 4:
              this._refreshAccessTokenPromise = null;
              this._shouldRefreshAccessTokenHook = null;
              if (err) {
                throw err;
              }
              return [2, result];
          }
        });
      });
    };
    CloudbaseRequest2.prototype.getAccessToken = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var _a2, accessTokenKey, accessTokenExpireKey, refreshTokenKey, refreshToken, accessToken, accessTokenExpire, _b, shouldRefreshAccessToken, _c;
        return __generator2(this, function(_d) {
          switch (_d.label) {
            case 0:
              _a2 = this._cache.keys, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey, refreshTokenKey = _a2.refreshTokenKey;
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 1:
              refreshToken = _d.sent();
              if (!refreshToken) {
                throw new Error(JSON.stringify({
                  code: ERRORS2.OPERATION_FAIL,
                  msg: "refresh token is not exist, your local data might be messed up, please retry after clear localStorage or sessionStorage"
                }));
              }
              return [4, this._cache.getStoreAsync(accessTokenKey)];
            case 2:
              accessToken = _d.sent();
              _b = Number;
              return [4, this._cache.getStoreAsync(accessTokenExpireKey)];
            case 3:
              accessTokenExpire = _b.apply(void 0, [_d.sent()]);
              shouldRefreshAccessToken = true;
              _c = this._shouldRefreshAccessTokenHook;
              if (!_c) return [3, 5];
              return [4, this._shouldRefreshAccessTokenHook(accessToken, accessTokenExpire)];
            case 4:
              _c = !_d.sent();
              _d.label = 5;
            case 5:
              if (_c) {
                shouldRefreshAccessToken = false;
              }
              if (!((!accessToken || !accessTokenExpire || accessTokenExpire < Date.now()) && shouldRefreshAccessToken)) return [3, 7];
              return [4, this.refreshAccessToken()];
            case 6:
              return [2, _d.sent()];
            case 7:
              return [2, {
                accessToken,
                accessTokenExpire
              }];
          }
        });
      });
    };
    CloudbaseRequest2.prototype.request = function(action, params, options) {
      return __awaiter2(this, void 0, void 0, function() {
        var tcbTraceKey, contentType, tmpObj, refreshTokenKey, refreshToken, _a2, payload, key2, key2, opts, traceHeader, _b, appSign, appSecret, timestamp, appAccessKey, appAccessKeyId, sign, parse, inQuery, search, formatQuery, _c, BASE_URL2, PROTOCOL2, newUrl, res, resTraceHeader;
        return __generator2(this, function(_d) {
          switch (_d.label) {
            case 0:
              tcbTraceKey = "x-tcb-trace_".concat(this.config.env);
              contentType = "application/x-www-form-urlencoded";
              tmpObj = __assign3({ action, dataVersion: DATA_VERSION, env: this.config.env }, params);
              if (!(ACTIONS_WITHOUT_ACCESSTOKEN.indexOf(action) === -1)) return [3, 3];
              refreshTokenKey = this._cache.keys.refreshTokenKey;
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 1:
              refreshToken = _d.sent();
              if (!refreshToken) return [3, 3];
              _a2 = tmpObj;
              return [4, this.getAccessToken()];
            case 2:
              _a2.access_token = _d.sent().accessToken;
              _d.label = 3;
            case 3:
              if (action === "storage.uploadFile") {
                payload = new FormData();
                for (key2 in payload) {
                  if (payload.hasOwnProperty(key2) && payload[key2] !== void 0) {
                    payload.append(key2, tmpObj[key2]);
                  }
                }
                contentType = "multipart/form-data";
              } else {
                contentType = "application/json;charset=UTF-8";
                payload = {};
                for (key2 in tmpObj) {
                  if (tmpObj[key2] !== void 0) {
                    payload[key2] = tmpObj[key2];
                  }
                }
              }
              opts = {
                headers: {
                  "content-type": contentType
                }
              };
              if (options === null || options === void 0 ? void 0 : options.onUploadProgress) {
                opts.onUploadProgress = options.onUploadProgress;
              }
              if (this.config.region) {
                opts.headers["X-TCB-Region"] = this.config.region;
              }
              traceHeader = this._localCache.getStore(tcbTraceKey);
              if (traceHeader) {
                opts.headers["X-TCB-Trace"] = traceHeader;
              }
              if (Platform.runtime !== RUNTIME.WEB) {
                _b = this.config, appSign = _b.appSign, appSecret = _b.appSecret;
                timestamp = Date.now();
                appAccessKey = appSecret.appAccessKey, appAccessKeyId = appSecret.appAccessKeyId;
                sign = createSign({
                  data: {},
                  timestamp,
                  appAccessKeyId,
                  appSign
                }, appAccessKey);
                opts.headers["X-TCB-App-Source"] = "timestamp=".concat(timestamp, ";appAccessKeyId=").concat(appAccessKeyId, ";appSign=").concat(appSign, ";sign=").concat(sign);
              }
              parse = params.parse, inQuery = params.inQuery, search = params.search;
              formatQuery = {
                env: this.config.env
              };
              parse && (formatQuery.parse = true);
              inQuery && (formatQuery = __assign3(__assign3({}, inQuery), formatQuery));
              _c = getEndPoint(), BASE_URL2 = _c.BASE_URL, PROTOCOL2 = _c.PROTOCOL;
              newUrl = formatUrl2(PROTOCOL2, BASE_URL2, formatQuery);
              if (search) {
                newUrl += search;
              }
              return [4, this.post(__assign3({ url: newUrl, data: payload }, opts))];
            case 4:
              res = _d.sent();
              resTraceHeader = res.header && res.header["x-tcb-trace"];
              if (resTraceHeader) {
                this._localCache.setStore(tcbTraceKey, resTraceHeader);
              }
              if (Number(res.status) !== 200 && Number(res.statusCode) !== 200 || !res.data) {
                throw new Error("network request error");
              }
              return [2, res];
          }
        });
      });
    };
    CloudbaseRequest2.prototype.send = function(action, data) {
      if (data === void 0) {
        data = {};
      }
      return __awaiter2(this, void 0, void 0, function() {
        var response;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.request(action, data, { onUploadProgress: data.onUploadProgress })];
            case 1:
              response = _a2.sent();
              if (!(response.data.code === "ACCESS_TOKEN_EXPIRED" && ACTIONS_WITHOUT_ACCESSTOKEN.indexOf(action) === -1)) return [3, 4];
              return [4, this.refreshAccessToken()];
            case 2:
              _a2.sent();
              return [4, this.request(action, data, { onUploadProgress: data.onUploadProgress })];
            case 3:
              response = _a2.sent();
              _a2.label = 4;
            case 4:
              if (response.data.code && this._throwWhenRequestFail) {
                throw new Error(JSON.stringify({
                  code: ERRORS2.OPERATION_FAIL,
                  msg: "[".concat(response.data.code, "] ").concat(response.data.message)
                }));
              }
              return [2, response.data];
          }
        });
      });
    };
    CloudbaseRequest2.prototype._refreshAccessToken = function(retryNum) {
      if (retryNum === void 0) {
        retryNum = 1;
      }
      return __awaiter2(this, void 0, void 0, function() {
        var _a2, accessTokenKey, accessTokenExpireKey, refreshTokenKey, loginTypeKey, anonymousUuidKey, refreshToken, params, response, code2, isAnonymous, anonymous_uuid, refresh_token, res;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this._cache.keys, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey, refreshTokenKey = _a2.refreshTokenKey, loginTypeKey = _a2.loginTypeKey, anonymousUuidKey = _a2.anonymousUuidKey;
              return [4, this._cache.removeStoreAsync(accessTokenKey)];
            case 1:
              _b.sent();
              return [4, this._cache.removeStoreAsync(accessTokenExpireKey)];
            case 2:
              _b.sent();
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 3:
              refreshToken = _b.sent();
              if (!refreshToken) {
                throw new Error(JSON.stringify({
                  code: ERRORS2.INVALID_OPERATION,
                  msg: "not login"
                }));
              }
              params = {
                refresh_token: refreshToken
              };
              return [4, this.request("auth.fetchAccessTokenWithRefreshToken", params)];
            case 4:
              response = _b.sent();
              if (!response.data.code) return [3, 12];
              code2 = response.data.code;
              if (!(code2 === "SIGN_PARAM_INVALID" || code2 === "REFRESH_TOKEN_EXPIRED" || code2 === "INVALID_REFRESH_TOKEN")) return [3, 11];
              return [4, this._cache.getStoreAsync(loginTypeKey)];
            case 5:
              isAnonymous = _b.sent() === LOGINTYPE.ANONYMOUS;
              if (!(isAnonymous && code2 === "INVALID_REFRESH_TOKEN")) return [3, 9];
              return [4, this._cache.getStoreAsync(anonymousUuidKey)];
            case 6:
              anonymous_uuid = _b.sent();
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 7:
              refresh_token = _b.sent();
              return [4, this.send("auth.signInAnonymously", {
                anonymous_uuid,
                refresh_token
              })];
            case 8:
              res = _b.sent();
              this._setRefreshToken(res.refresh_token);
              if (retryNum >= 1) {
                return [2, this._refreshAccessToken(--retryNum)];
              }
              throw new Error(JSON.stringify({
                code: ERRORS2.OPERATION_FAIL,
                message: "\u91CD\u8BD5\u83B7\u53D6 refresh token \u5931\u8D25"
              }));
            case 9:
              cloudbase2.fire(EVENTS.LOGIN_STATE_EXPIRED);
              return [4, this._cache.removeStoreAsync(refreshTokenKey)];
            case 10:
              _b.sent();
              _b.label = 11;
            case 11:
              throw new Error(JSON.stringify({
                code: ERRORS2.NETWORK_ERROR,
                msg: "refresh access_token failed\uFF1A".concat(response.data.code)
              }));
            case 12:
              if (!response.data.access_token) return [3, 15];
              cloudbase2.fire(EVENTS.ACCESS_TOKEN_REFRESHD);
              return [4, this._cache.setStoreAsync(accessTokenKey, response.data.access_token)];
            case 13:
              _b.sent();
              return [4, this._cache.setStoreAsync(accessTokenExpireKey, response.data.access_token_expire + Date.now())];
            case 14:
              _b.sent();
              return [2, {
                accessToken: response.data.access_token,
                accessTokenExpire: response.data.access_token_expire
              }];
            case 15:
              if (!response.data.refresh_token) return [3, 19];
              return [4, this._cache.removeStoreAsync(refreshTokenKey)];
            case 16:
              _b.sent();
              return [4, this._cache.setStoreAsync(refreshTokenKey, response.data.refresh_token)];
            case 17:
              _b.sent();
              return [4, this._refreshAccessToken()];
            case 18:
              _b.sent();
              _b.label = 19;
            case 19:
              return [2];
          }
        });
      });
    };
    CloudbaseRequest2.prototype._setRefreshToken = function(refreshToken) {
      return __awaiter2(this, void 0, void 0, function() {
        var _a2, accessTokenKey, accessTokenExpireKey, refreshTokenKey;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this._cache.keys, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey, refreshTokenKey = _a2.refreshTokenKey;
              return [4, this._cache.removeStoreAsync(accessTokenKey)];
            case 1:
              _b.sent();
              return [4, this._cache.removeStoreAsync(accessTokenExpireKey)];
            case 2:
              _b.sent();
              return [4, this._cache.setStoreAsync(refreshTokenKey, refreshToken)];
            case 3:
              _b.sent();
              return [2];
          }
        });
      });
    };
    return CloudbaseRequest2;
  })();
  var requestMap = {};
  function initRequest(config) {
    requestMap[config.env] = new CloudbaseRequest(__assign3(__assign3({}, config), { throw: true }));
  }
  function getRequestByEnvId(env) {
    return requestMap[env];
  }

  // node_modules/@cloudbase/app/dist/esm/index.js
  var __assign4 = function() {
    __assign4 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign4.apply(this, arguments);
  };
  var __decorate = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter3 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator3 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var useAdapters = import_utilities5.adapters.useAdapters;
  var useDefaultAdapter = import_utilities5.adapters.useDefaultAdapter;
  var RUNTIME2 = import_utilities5.adapters.RUNTIME;
  var ERRORS3 = import_utilities5.constants.ERRORS;
  var COMMUNITY_SITE_URL = import_utilities5.constants.COMMUNITY_SITE_URL;
  var printWarn = import_utilities5.utils.printWarn;
  var catchErrorsDecorator = import_utilities5.helpers.catchErrorsDecorator;
  var DEFAULT_INIT_CONFIG = {
    timeout: 15e3,
    persistence: "local"
  };
  var MAX_TIMEOUT = 1e3 * 60 * 10;
  var MIN_TIMEOUT = 100;
  var extensionMap = {};
  var Cloudbase = (function() {
    function Cloudbase2(config) {
      this._config = config ? config : this._config;
      this.authInstance = null;
    }
    Object.defineProperty(Cloudbase2.prototype, "config", {
      get: function() {
        return this._config;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Cloudbase2.prototype, "platform", {
      get: function() {
        return Platform;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Cloudbase2.prototype, "cache", {
      get: function() {
        return getCacheByEnvId(this._config.env);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Cloudbase2.prototype, "localCache", {
      get: function() {
        return getLocalCache(this._config.env);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Cloudbase2.prototype, "request", {
      get: function() {
        return getRequestByEnvId(this._config.env);
      },
      enumerable: false,
      configurable: true
    });
    Cloudbase2.prototype.init = function(config) {
      if (!config.env) {
        throw new Error(JSON.stringify({
          code: ERRORS3.INVALID_PARAMS,
          msg: "env must not be specified"
        }));
      }
      if (!Platform.adapter) {
        this._useDefaultAdapter();
      }
      this.requestClient = new Platform.adapter.reqClass({
        timeout: config.timeout || 5e3,
        timeoutMsg: "[".concat(getSdkName(), "][REQUEST TIMEOUT] request had been abort since didn't finished within").concat(config.timeout / 1e3, "s")
      });
      if (Platform.runtime !== RUNTIME2.WEB) {
        if (!config.appSecret) {
          throw new Error(JSON.stringify({
            code: ERRORS3.INVALID_PARAMS,
            msg: "invalid appSecret"
          }));
        }
        var appSign_1 = Platform.adapter.getAppSign ? Platform.adapter.getAppSign() : "";
        if (config.appSign && appSign_1 && config.appSign !== appSign_1) {
          throw new Error(JSON.stringify({
            code: ERRORS3.INVALID_PARAMS,
            msg: "invalid appSign"
          }));
        }
        appSign_1 && (config.appSign = appSign_1);
        if (!config.appSign) {
          throw new Error(JSON.stringify({
            code: ERRORS3.INVALID_PARAMS,
            msg: "invalid appSign"
          }));
        }
      }
      this._config = __assign4(__assign4({}, DEFAULT_INIT_CONFIG), config);
      this._config.timeout = this._formatTimeout(this._config.timeout);
      var _a2 = this._config, env = _a2.env, persistence = _a2.persistence, debug = _a2.debug, timeout = _a2.timeout, appSecret = _a2.appSecret, appSign = _a2.appSign;
      initCache({ env, persistence, debug, platformInfo: this.platform });
      initRequest({ env, region: config.region || "", timeout, appSecret, appSign });
      if (config.region) {
        setRegionLevelEndpoint(env, config.region || "");
      }
      var app = new Cloudbase2(this._config);
      app.requestClient = this.requestClient;
      return app;
    };
    Cloudbase2.prototype.updateConfig = function(config) {
      var persistence = config.persistence, debug = config.debug;
      this._config.persistence = persistence;
      this._config.debug = debug;
      initCache({ env: this._config.env, persistence, debug, platformInfo: this.platform });
    };
    Cloudbase2.prototype.registerExtension = function(ext) {
      extensionMap[ext.name] = ext;
    };
    Cloudbase2.prototype.invokeExtension = function(name, opts) {
      return __awaiter3(this, void 0, void 0, function() {
        var ext;
        return __generator3(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              ext = extensionMap[name];
              if (!ext) {
                throw new Error(JSON.stringify({
                  code: ERRORS3.INVALID_PARAMS,
                  msg: "extension:".concat(name, " must be registered before invoke")
                }));
              }
              return [4, ext.invoke(opts, this)];
            case 1:
              return [2, _a2.sent()];
          }
        });
      });
    };
    Cloudbase2.prototype.useAdapters = function(adapters5) {
      var _a2 = useAdapters(adapters5) || {}, adapter2 = _a2.adapter, runtime2 = _a2.runtime;
      adapter2 && (Platform.adapter = adapter2);
      runtime2 && (Platform.runtime = runtime2);
    };
    Cloudbase2.prototype.registerHook = function(hook2) {
      registerHook(Cloudbase2, hook2);
    };
    Cloudbase2.prototype.registerComponent = function(component7) {
      registerComponent(Cloudbase2, component7);
    };
    Cloudbase2.prototype.registerVersion = function(version2) {
      setSdkVersion(version2);
    };
    Cloudbase2.prototype.registerSdkName = function(name) {
      setSdkName(name);
    };
    Cloudbase2.prototype.registerEndPoint = function(url, protocol) {
      setEndPoint(url, protocol);
    };
    Cloudbase2.prototype._useDefaultAdapter = function() {
      var _a2 = useDefaultAdapter(), adapter2 = _a2.adapter, runtime2 = _a2.runtime;
      Platform.adapter = adapter2;
      Platform.runtime = runtime2;
    };
    Cloudbase2.prototype._formatTimeout = function(timeout) {
      switch (true) {
        case timeout > MAX_TIMEOUT:
          printWarn(ERRORS3.INVALID_PARAMS, "timeout is greater than maximum value[10min]");
          return MAX_TIMEOUT;
        case timeout < MIN_TIMEOUT:
          printWarn(ERRORS3.INVALID_PARAMS, "timeout is less than maximum value[100ms]");
          return MIN_TIMEOUT;
        default:
          return timeout;
      }
    };
    __decorate([
      catchErrorsDecorator({
        mode: "sync",
        title: "Cloudbase \u521D\u59CB\u5316\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 cloudbase.init() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5982\u679C\u662F\u975E\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u662F\u5426\u914D\u7F6E\u4E86\u5B89\u5168\u5E94\u7528\u6765\u6E90\uFF08https://docs.cloudbase.net/api-reference/webv2/adapter.html#jie-ru-liu-cheng\uFF09",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL)
        ]
      }),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", [Object]),
      __metadata("design:returntype", Cloudbase2)
    ], Cloudbase2.prototype, "init", null);
    __decorate([
      catchErrorsDecorator({
        title: "\u8C03\u7528\u6269\u5C55\u80FD\u529B\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 invokeExtension() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u88AB\u8C03\u7528\u7684\u6269\u5C55\u80FD\u529B\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5\u5E76\u901A\u8FC7 registerExtension() \u6CE8\u518C",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL)
        ]
      }),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", [String, Object]),
      __metadata("design:returntype", Promise)
    ], Cloudbase2.prototype, "invokeExtension", null);
    return Cloudbase2;
  })();
  var cloudbase2 = new Cloudbase();
  cloudbase2.useAdapters(esm_default);
  var esm_default2 = cloudbase2;

  // node_modules/@cloudbase/auth/dist/esm/index.js
  var import_utilities12 = __toESM(require_dist());

  // node_modules/@cloudbase/auth/dist/esm/providers/base.js
  var __awaiter4 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator4 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var AuthProvider = (function() {
    function AuthProvider2(config) {
      this._config = config;
      this._cache = config.cache;
      this._request = config.request;
    }
    AuthProvider2.prototype.checkLocalLoginState = function() {
      return __awaiter4(this, void 0, void 0, function() {
        var _a2, accessTokenKey, accessTokenExpireKey, accessToken, accessTokenExpire, loginState;
        return __generator4(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this._cache.keys, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey;
              return [4, this._cache.getStoreAsync(accessTokenKey)];
            case 1:
              accessToken = _b.sent();
              return [4, this._cache.getStoreAsync(accessTokenExpireKey)];
            case 2:
              accessTokenExpire = _b.sent();
              if (!accessToken) return [3, 7];
              if (!(accessTokenExpire && accessTokenExpire > Date.now())) return [3, 4];
              loginState = new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              });
              return [4, loginState.checkLocalStateAsync()];
            case 3:
              _b.sent();
              return [2, loginState];
            case 4:
              return [4, this._cache.removeStoreAsync(accessTokenKey)];
            case 5:
              _b.sent();
              return [4, this._cache.removeStoreAsync(accessTokenExpireKey)];
            case 6:
              _b.sent();
              _b.label = 7;
            case 7:
              return [2];
          }
        });
      });
    };
    AuthProvider2.prototype.setRefreshToken = function(refreshToken) {
      return __awaiter4(this, void 0, void 0, function() {
        var _a2, accessTokenKey, accessTokenExpireKey, refreshTokenKey;
        return __generator4(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this._cache.keys, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey, refreshTokenKey = _a2.refreshTokenKey;
              return [4, this._cache.removeStoreAsync(accessTokenKey)];
            case 1:
              _b.sent();
              return [4, this._cache.removeStoreAsync(accessTokenExpireKey)];
            case 2:
              _b.sent();
              return [4, this._cache.setStoreAsync(refreshTokenKey, refreshToken)];
            case 3:
              _b.sent();
              return [2];
          }
        });
      });
    };
    AuthProvider2.prototype.setAccessToken = function(accessToken, accessTokenExpire) {
      return __awaiter4(this, void 0, void 0, function() {
        var _a2, accessTokenKey, accessTokenExpireKey;
        return __generator4(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this._cache.keys, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey;
              return [4, this._cache.setStoreAsync(accessTokenKey, accessToken)];
            case 1:
              _b.sent();
              return [4, this._cache.setStoreAsync(accessTokenExpireKey, accessTokenExpire)];
            case 2:
              _b.sent();
              return [2];
          }
        });
      });
    };
    AuthProvider2.prototype.refreshUserInfo = function() {
      return __awaiter4(this, void 0, void 0, function() {
        var action, userInfo;
        return __generator4(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              action = "auth.getUserInfo";
              return [4, this._request.send(action, {})];
            case 1:
              userInfo = _a2.sent().data;
              return [4, this.setLocalUserInfo(userInfo)];
            case 2:
              _a2.sent();
              return [2, userInfo];
          }
        });
      });
    };
    AuthProvider2.prototype.setLocalUserInfo = function(userInfo) {
      return __awaiter4(this, void 0, void 0, function() {
        var userInfoKey;
        return __generator4(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              userInfoKey = this._cache.keys.userInfoKey;
              return [4, this._cache.setStoreAsync(userInfoKey, userInfo)];
            case 1:
              _a2.sent();
              return [2];
          }
        });
      });
    };
    return AuthProvider2;
  })();

  // node_modules/@cloudbase/auth/dist/esm/providers/weixinAuthProvider.js
  var import_utilities6 = __toESM(require_dist());

  // node_modules/@cloudbase/auth/dist/esm/constants.js
  var LOGINTYPE2;
  (function(LOGINTYPE3) {
    LOGINTYPE3["ANONYMOUS"] = "ANONYMOUS";
    LOGINTYPE3["WECHAT"] = "WECHAT";
    LOGINTYPE3["WECHAT_PUBLIC"] = "WECHAT-PUBLIC";
    LOGINTYPE3["WECHAT_OPEN"] = "WECHAT-OPEN";
    LOGINTYPE3["CUSTOM"] = "CUSTOM";
    LOGINTYPE3["EMAIL"] = "EMAIL";
    LOGINTYPE3["USERNAME"] = "USERNAME";
    LOGINTYPE3["NULL"] = "NULL";
    LOGINTYPE3["PHONE"] = "PHONE";
  })(LOGINTYPE2 || (LOGINTYPE2 = {}));

  // node_modules/@cloudbase/auth/dist/esm/providers/weixinAuthProvider.js
  var __extends2 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var __decorate2 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata2 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter5 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator5 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var getSdkName2 = import_utilities6.constants.getSdkName;
  var ERRORS4 = import_utilities6.constants.ERRORS;
  var COMMUNITY_SITE_URL2 = import_utilities6.constants.COMMUNITY_SITE_URL;
  var RUNTIME3 = import_utilities6.adapters.RUNTIME;
  var getQuery = import_utilities6.utils.getQuery;
  var getHash = import_utilities6.utils.getHash;
  var removeParam = import_utilities6.utils.removeParam;
  var printWarn2 = import_utilities6.utils.printWarn;
  var catchErrorsDecorator2 = import_utilities6.helpers.catchErrorsDecorator;
  var WeixinAuthProvider = (function(_super) {
    __extends2(WeixinAuthProvider2, _super);
    function WeixinAuthProvider2(config, appid, scope, state) {
      var _this = _super.call(this, config) || this;
      _this._runtime = config.runtime;
      _this._appid = appid;
      _this._scope = scope;
      _this._state = state || "weixin";
      return _this;
    }
    WeixinAuthProvider2.prototype.signIn = function() {
      return __awaiter5(this, void 0, void 0, function() {
        return __generator5(this, function(_a2) {
          return [2, printWarn2(ERRORS4.OPERATION_FAIL, "API signIn has been deprecated, please use signInWithRedirect insteed")];
        });
      });
    };
    WeixinAuthProvider2.prototype.signInWithRedirect = function() {
      return __awaiter5(this, void 0, void 0, function() {
        return __generator5(this, function(_a2) {
          return [2, this._redirect()];
        });
      });
    };
    WeixinAuthProvider2.prototype.getRedirectResult = function(options) {
      return __awaiter5(this, void 0, void 0, function() {
        var code2;
        return __generator5(this, function(_a2) {
          code2 = getWeixinCode();
          if (!code2) {
            return [2, null];
          }
          return [2, this._signInWithCode(code2, options)];
        });
      });
    };
    WeixinAuthProvider2.prototype.getLinkRedirectResult = function(options) {
      if (options === void 0) {
        options = {};
      }
      return __awaiter5(this, void 0, void 0, function() {
        var withUnionId, code2, appid, loginType, hybridMiniapp;
        var _a2;
        return __generator5(this, function(_b) {
          withUnionId = (_a2 = options.withUnionId, _a2 === void 0 ? false : _a2);
          code2 = getWeixinCode();
          if (!code2) {
            return [2, null];
          }
          appid = this._appid;
          loginType = (function(scope) {
            switch (scope) {
              case "snsapi_login":
                return "WECHAT-OPEN";
              default:
                return "WECHAT-PUBLIC";
            }
          })(this._scope);
          hybridMiniapp = this._runtime === RUNTIME3.WX_MP ? "1" : "0";
          return [2, this._request.send("auth.linkWithWeixinCode", {
            payload: {
              appid,
              loginType,
              code: code2,
              hybridMiniapp,
              withUnionId
            }
          })];
        });
      });
    };
    WeixinAuthProvider2.prototype._redirect = function() {
      var currUrl = removeParam("code", location.href);
      currUrl = removeParam("state", currUrl);
      currUrl = encodeURIComponent(currUrl);
      var host = "//open.weixin.qq.com/connect/oauth2/authorize";
      if (this._scope === "snsapi_login") {
        host = "//open.weixin.qq.com/connect/qrconnect";
      }
      try {
        location.href = "".concat(host, "?appid=").concat(this._appid, "&redirect_uri=").concat(currUrl, "&response_type=code&scope=").concat(this._scope, "&state=").concat(this._state, "#wechat_redirect");
      } catch (e) {
        throw new Error("[".concat(getSdkName2(), "][").concat(ERRORS4.UNKOWN_ERROR, "]").concat(e));
      }
    };
    WeixinAuthProvider2.prototype._signInWithCode = function(code2, options) {
      return __awaiter5(this, void 0, void 0, function() {
        var accessTokenKey, accessTokenExpireKey, refreshTokenKey, loginType, refreshTokenRes, refreshToken, loginState;
        var _a2;
        return __generator5(this, function(_b) {
          switch (_b.label) {
            case 0:
              accessTokenKey = (_a2 = this._cache.keys, _a2.accessTokenKey), accessTokenExpireKey = _a2.accessTokenExpireKey, refreshTokenKey = _a2.refreshTokenKey;
              loginType = (function(scope) {
                switch (scope) {
                  case "snsapi_login":
                    return "WECHAT-OPEN";
                  default:
                    return "WECHAT-PUBLIC";
                }
              })(this._scope);
              return [4, this._getRefreshTokenByWXCode(this._appid, loginType, code2, options)];
            case 1:
              refreshTokenRes = _b.sent();
              refreshToken = refreshTokenRes.refreshToken;
              return [4, this._cache.setStoreAsync(refreshTokenKey, refreshToken)];
            case 2:
              _b.sent();
              if (!refreshTokenRes.accessToken) return [3, 4];
              return [4, this._cache.setStoreAsync(accessTokenKey, refreshTokenRes.accessToken)];
            case 3:
              _b.sent();
              _b.label = 4;
            case 4:
              if (!refreshTokenRes.accessTokenExpire) return [3, 6];
              return [4, this._cache.setStoreAsync(accessTokenExpireKey, String(refreshTokenRes.accessTokenExpire + Date.now()))];
            case 5:
              _b.sent();
              _b.label = 6;
            case 6:
              eventBus.fire(EVENTS2.LOGIN_STATE_CHANGED);
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, {
                env: this._config.env,
                loginType: LOGINTYPE2.WECHAT,
                persistence: this._config.persistence
              });
              return [4, this.refreshUserInfo()];
            case 7:
              _b.sent();
              loginState = new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              });
              return [4, loginState.checkLocalStateAsync()];
            case 8:
              _b.sent();
              return [2, loginState];
          }
        });
      });
    };
    WeixinAuthProvider2.prototype._getRefreshTokenByWXCode = function(appid, loginType, code2, options) {
      if (options === void 0) {
        options = {};
      }
      return __awaiter5(this, void 0, void 0, function() {
        var withUnionId, createUser, syncUserInfo, action, hybridMiniapp;
        var _a2, _b;
        return __generator5(this, function(_c) {
          withUnionId = (_a2 = options.withUnionId, _a2 === void 0 ? false : _a2), createUser = (_b = options.createUser, _b === void 0 ? true : _b);
          syncUserInfo = this._scope === "snsapi_base" ? false : options.syncUserInfo || false;
          action = "auth.signIn";
          hybridMiniapp = this._runtime === RUNTIME3.WX_MP ? "1" : "0";
          return [2, this._request.send(action, {
            appid,
            loginType,
            hybridMiniapp,
            syncUserInfo,
            loginCredential: code2,
            withUnionId,
            createUser
          }).then(function(res) {
            if (res.code) {
              throw new Error("[".concat(getSdkName2(), "][").concat(ERRORS4.OPERATION_FAIL, "] failed login via wechat: ").concat(res.code));
            }
            if (res.refresh_token) {
              return {
                refreshToken: res.refresh_token,
                accessToken: res.access_token,
                accessTokenExpire: res.access_token_expire
              };
            }
            throw new Error("[".concat(getSdkName2(), "][").concat(ERRORS4.OPERATION_FAIL, "] action:getJwt not return refreshToken"));
          })];
        });
      });
    };
    __decorate2([
      catchErrorsDecorator2({
        title: "\u8DF3\u8F6C\u5FAE\u4FE1\u516C\u4F17\u53F7\u6388\u6743\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().weixinAuthProvider().signInWithRedirect() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL2)
        ]
      }),
      __metadata2("design:type", Function),
      __metadata2("design:paramtypes", []),
      __metadata2("design:returntype", Promise)
    ], WeixinAuthProvider2.prototype, "signInWithRedirect", null);
    __decorate2([
      catchErrorsDecorator2({
        title: "\u5FAE\u4FE1\u516C\u4F17\u53F7\u767B\u5F55\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().weixinAuthProvider().getRedirectResult() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u5FAE\u4FE1\u516C\u4F17\u53F7\u767B\u5F55\u6388\u6743",
          "  3 - \u5FAE\u4FE1\u516C\u4F17\u53F7\u7684 AppId \u4E0E AppSecret \u914D\u7F6E\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL2)
        ]
      }),
      __metadata2("design:type", Function),
      __metadata2("design:paramtypes", [Object]),
      __metadata2("design:returntype", Promise)
    ], WeixinAuthProvider2.prototype, "getRedirectResult", null);
    __decorate2([
      catchErrorsDecorator2({
        title: "\u83B7\u53D6\u5FAE\u4FE1\u91CD\u5B9A\u5411\u7ED1\u5B9A\u7ED3\u679C",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().weixinAuthProvider().getLinkRedirectResult() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u5FAE\u4FE1\u516C\u4F17\u53F7\u767B\u5F55\u6388\u6743",
          "  3 - \u5FAE\u4FE1\u516C\u4F17\u53F7\u7684 AppId \u4E0E AppSecret \u914D\u7F6E\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL2)
        ]
      }),
      __metadata2("design:type", Function),
      __metadata2("design:paramtypes", [Object]),
      __metadata2("design:returntype", Promise)
    ], WeixinAuthProvider2.prototype, "getLinkRedirectResult", null);
    return WeixinAuthProvider2;
  })(AuthProvider);
  function getWeixinCode() {
    return getQuery("code") || getHash("code");
  }

  // node_modules/@cloudbase/auth/dist/esm/providers/anonymousAuthProvider.js
  var import_utilities7 = __toESM(require_dist());
  var __extends3 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var __decorate3 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata3 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter6 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator6 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var ERRORS5 = import_utilities7.constants.ERRORS;
  var COMMUNITY_SITE_URL3 = import_utilities7.constants.COMMUNITY_SITE_URL;
  var throwError = import_utilities7.utils.throwError;
  var isString = import_utilities7.utils.isString;
  var addEventListener = import_utilities7.events.addEventListener;
  var catchErrorsDecorator3 = import_utilities7.helpers.catchErrorsDecorator;
  var AnonymousAuthProvider = (function(_super) {
    __extends3(AnonymousAuthProvider2, _super);
    function AnonymousAuthProvider2(config) {
      var _this = _super.call(this, config) || this;
      _this._onConverted = _this._onConverted.bind(_this);
      addEventListener(EVENTS2.ANONYMOUS_CONVERTED, _this._onConverted);
      return _this;
    }
    AnonymousAuthProvider2.prototype.signIn = function() {
      return __awaiter6(this, void 0, void 0, function() {
        var anonymousUuidKey, refreshTokenKey, anonymous_uuid, refresh_token, res, loginState;
        var _a2;
        return __generator6(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this._cache.updatePersistenceAsync("local")];
            case 1:
              _b.sent();
              anonymousUuidKey = (_a2 = this._cache.keys, _a2.anonymousUuidKey), refreshTokenKey = _a2.refreshTokenKey;
              return [4, this._cache.getStoreAsync(anonymousUuidKey)];
            case 2:
              anonymous_uuid = _b.sent();
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 3:
              refresh_token = _b.sent();
              return [4, this._request.send("auth.signInAnonymously", {
                anonymous_uuid,
                refresh_token
              })];
            case 4:
              res = _b.sent();
              if (!(res.uuid && res.refresh_token)) return [3, 10];
              return [4, this._setAnonymousUUID(res.uuid)];
            case 5:
              _b.sent();
              return [4, this.setRefreshToken(res.refresh_token)];
            case 6:
              _b.sent();
              return [4, this._request.refreshAccessToken()];
            case 7:
              _b.sent();
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, {
                env: this._config.env,
                loginType: LOGINTYPE2.ANONYMOUS,
                persistence: "local"
              });
              eventBus.fire(EVENTS2.LOGIN_STATE_CHANGED);
              loginState = new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              });
              return [4, loginState.checkLocalStateAsync()];
            case 8:
              _b.sent();
              return [4, loginState.user.refresh()];
            case 9:
              _b.sent();
              return [2, loginState];
            case 10:
              throw new Error(JSON.stringify({
                code: ERRORS5.OPERATION_FAIL,
                msg: JSON.stringify(res) || "anonymous signIn failed"
              }));
          }
        });
      });
    };
    AnonymousAuthProvider2.prototype.linkAndRetrieveDataWithTicket = function(ticket) {
      return __awaiter6(this, void 0, void 0, function() {
        var anonymousUuidKey, refreshTokenKey, anonymous_uuid, refresh_token, res, loginState;
        var _a2;
        return __generator6(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!isString(ticket)) {
                throwError(ERRORS5.INVALID_PARAMS, "ticket must be a string");
              }
              anonymousUuidKey = (_a2 = this._cache.keys, _a2.anonymousUuidKey), refreshTokenKey = _a2.refreshTokenKey;
              return [4, this._cache.getStoreAsync(anonymousUuidKey)];
            case 1:
              anonymous_uuid = _b.sent();
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 2:
              refresh_token = _b.sent();
              return [4, this._request.send("auth.linkAndRetrieveDataWithTicket", {
                anonymous_uuid,
                refresh_token,
                ticket
              })];
            case 3:
              res = _b.sent();
              if (!res.refresh_token) return [3, 8];
              return [4, this._clearAnonymousUUID()];
            case 4:
              _b.sent();
              return [4, this.setRefreshToken(res.refresh_token)];
            case 5:
              _b.sent();
              return [4, this._request.refreshAccessToken()];
            case 6:
              _b.sent();
              eventBus.fire(EVENTS2.ANONYMOUS_CONVERTED, { env: this._config.env });
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, { loginType: LOGINTYPE2.CUSTOM, persistence: "local" });
              loginState = new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              });
              return [4, loginState.checkLocalStateAsync()];
            case 7:
              _b.sent();
              return [2, loginState];
            case 8:
              throwError(ERRORS5.OPERATION_FAIL, JSON.stringify(res) || "linkAndRetrieveDataWithTicket failed");
              return [2];
          }
        });
      });
    };
    AnonymousAuthProvider2.prototype._setAnonymousUUID = function(id) {
      return __awaiter6(this, void 0, void 0, function() {
        var anonymousUuidKey, loginTypeKey;
        var _a2;
        return __generator6(this, function(_b) {
          switch (_b.label) {
            case 0:
              anonymousUuidKey = (_a2 = this._cache.keys, _a2.anonymousUuidKey), loginTypeKey = _a2.loginTypeKey;
              return [4, this._cache.removeStoreAsync(anonymousUuidKey)];
            case 1:
              _b.sent();
              return [4, this._cache.setStoreAsync(anonymousUuidKey, id)];
            case 2:
              _b.sent();
              return [4, this._cache.setStoreAsync(loginTypeKey, LOGINTYPE2.ANONYMOUS)];
            case 3:
              _b.sent();
              return [2];
          }
        });
      });
    };
    AnonymousAuthProvider2.prototype._clearAnonymousUUID = function() {
      return __awaiter6(this, void 0, void 0, function() {
        return __generator6(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._cache.removeStoreAsync(this._cache.keys.anonymousUuidKey)];
            case 1:
              _a2.sent();
              return [2];
          }
        });
      });
    };
    AnonymousAuthProvider2.prototype._onConverted = function(ev) {
      return __awaiter6(this, void 0, void 0, function() {
        var env;
        return __generator6(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              env = ev.data.env;
              if (env !== this._config.env) {
                return [2];
              }
              return [4, this._cache.updatePersistenceAsync(this._config.persistence)];
            case 1:
              _a2.sent();
              return [2];
          }
        });
      });
    };
    __decorate3([
      catchErrorsDecorator3({
        title: "\u533F\u540D\u767B\u5F55\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u542F\u4E86\u533F\u540D\u767B\u5F55",
          "  2 - \u8C03\u7528 auth().anonymouseProvider().signIn() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL3)
        ]
      }),
      __metadata3("design:type", Function),
      __metadata3("design:paramtypes", []),
      __metadata3("design:returntype", Promise)
    ], AnonymousAuthProvider2.prototype, "signIn", null);
    return AnonymousAuthProvider2;
  })(AuthProvider);

  // node_modules/@cloudbase/auth/dist/esm/providers/customAuthProvider.js
  var import_utilities8 = __toESM(require_dist());
  var __extends4 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var __decorate4 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata4 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter7 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator7 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var ERRORS6 = import_utilities8.constants.ERRORS;
  var COMMUNITY_SITE_URL4 = import_utilities8.constants.COMMUNITY_SITE_URL;
  var isString2 = import_utilities8.utils.isString;
  var catchErrorsDecorator4 = import_utilities8.helpers.catchErrorsDecorator;
  var CustomAuthProvider = (function(_super) {
    __extends4(CustomAuthProvider2, _super);
    function CustomAuthProvider2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomAuthProvider2.prototype.signIn = function(ticket) {
      return __awaiter7(this, void 0, void 0, function() {
        var refreshTokenKey, res, _a2, _b, _c, loginState;
        var _d;
        return __generator7(this, function(_e) {
          switch (_e.label) {
            case 0:
              if (!isString2(ticket)) {
                throw new Error(JSON.stringify({
                  code: ERRORS6.INVALID_PARAMS,
                  msg: "ticket must be a string"
                }));
              }
              refreshTokenKey = this._cache.keys.refreshTokenKey;
              _b = (_a2 = this._request).send;
              _c = ["auth.signInWithTicket"];
              _d = {
                ticket
              };
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 1:
              return [4, _b.apply(_a2, _c.concat([(_d.refresh_token = _e.sent() || "", _d)]))];
            case 2:
              res = _e.sent();
              if (!res.refresh_token) return [3, 7];
              return [4, this.setRefreshToken(res.refresh_token)];
            case 3:
              _e.sent();
              return [4, this._request.refreshAccessToken()];
            case 4:
              _e.sent();
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, {
                env: this._config.env,
                loginType: LOGINTYPE2.CUSTOM,
                persistence: this._config.persistence
              });
              eventBus.fire(EVENTS2.LOGIN_STATE_CHANGED);
              return [4, this.refreshUserInfo()];
            case 5:
              _e.sent();
              loginState = new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              });
              return [4, loginState.checkLocalStateAsync()];
            case 6:
              _e.sent();
              return [2, loginState];
            case 7:
              throw new Error(JSON.stringify({
                code: ERRORS6.OPERATION_FAIL,
                msg: "custom signIn failed"
              }));
          }
        });
      });
    };
    __decorate4([
      catchErrorsDecorator4({
        title: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u542F\u4E86\u81EA\u5B9A\u4E49\u767B\u5F55",
          "  2 - \u8C03\u7528 auth().customAuthProvider().signIn() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  3 - ticket \u662F\u5426\u5F52\u5C5E\u4E8E\u5F53\u524D\u73AF\u5883",
          "  4 - \u521B\u5EFA ticket \u7684\u81EA\u5B9A\u4E49\u767B\u5F55\u79C1\u94A5\u662F\u5426\u8FC7\u671F",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL4)
        ]
      }),
      __metadata4("design:type", Function),
      __metadata4("design:paramtypes", [String]),
      __metadata4("design:returntype", Promise)
    ], CustomAuthProvider2.prototype, "signIn", null);
    return CustomAuthProvider2;
  })(AuthProvider);

  // node_modules/@cloudbase/auth/dist/esm/providers/emailAuthProvider.js
  var import_utilities9 = __toESM(require_dist());
  var __extends5 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var __decorate5 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata5 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter8 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator8 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var throwError2 = import_utilities9.utils.throwError;
  var isString3 = import_utilities9.utils.isString;
  var ERRORS7 = import_utilities9.constants.ERRORS;
  var COMMUNITY_SITE_URL5 = import_utilities9.constants.COMMUNITY_SITE_URL;
  var catchErrorsDecorator5 = import_utilities9.helpers.catchErrorsDecorator;
  var EmailAuthProvider = (function(_super) {
    __extends5(EmailAuthProvider2, _super);
    function EmailAuthProvider2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailAuthProvider2.prototype.signIn = function(email, password) {
      return __awaiter8(this, void 0, void 0, function() {
        var refreshTokenKey, res, refresh_token, access_token, access_token_expire;
        return __generator8(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (!isString3(email)) {
                throwError2(ERRORS7.INVALID_PARAMS, "email must be a string");
              }
              refreshTokenKey = this._cache.keys.refreshTokenKey;
              return [4, this._request.send("auth.signIn", {
                loginType: "EMAIL",
                email,
                password,
                refresh_token: this._cache.getStore(refreshTokenKey) || ""
              })];
            case 1:
              res = _a2.sent();
              refresh_token = res.refresh_token, access_token = res.access_token, access_token_expire = res.access_token_expire;
              if (!refresh_token) return [3, 8];
              return [4, this.setRefreshToken(refresh_token)];
            case 2:
              _a2.sent();
              if (!(access_token && access_token_expire)) return [3, 4];
              return [4, this.setAccessToken(access_token, access_token_expire)];
            case 3:
              _a2.sent();
              return [3, 6];
            case 4:
              return [4, this._request.refreshAccessToken()];
            case 5:
              _a2.sent();
              _a2.label = 6;
            case 6:
              return [4, this.refreshUserInfo()];
            case 7:
              _a2.sent();
              eventBus.fire(EVENTS2.LOGIN_STATE_CHANGED);
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, {
                env: this._config.env,
                loginType: LOGINTYPE2.EMAIL,
                persistence: this._config.persistence
              });
              return [2, new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              })];
            case 8:
              if (res.code) {
                throwError2(ERRORS7.OPERATION_FAIL, "Email login fail[".concat(res.code, "] ").concat(res.message));
              } else {
                throwError2(ERRORS7.OPERATION_FAIL, "Email login fail");
              }
              return [2];
          }
        });
      });
    };
    EmailAuthProvider2.prototype.signUp = function(email, password) {
      return __awaiter8(this, void 0, void 0, function() {
        return __generator8(this, function(_a2) {
          return [2, this._request.send("auth.signUpWithEmailAndPassword", {
            email,
            password
          })];
        });
      });
    };
    EmailAuthProvider2.prototype.resetPassword = function(email) {
      return __awaiter8(this, void 0, void 0, function() {
        return __generator8(this, function(_a2) {
          return [2, this._request.send("auth.sendPasswordResetEmail", {
            email
          })];
        });
      });
    };
    EmailAuthProvider2.prototype.resetPasswordWithToken = function(token, newPassword) {
      return __awaiter8(this, void 0, void 0, function() {
        return __generator8(this, function(_a2) {
          return [2, this._request.send("auth.resetPasswordWithToken", {
            token,
            newPassword
          })];
        });
      });
    };
    EmailAuthProvider2.prototype.activate = function(token) {
      return __awaiter8(this, void 0, void 0, function() {
        return __generator8(this, function(_a2) {
          return [2, this._request.send("auth.activateEndUserMail", {
            token
          })];
        });
      });
    };
    __decorate5([
      catchErrorsDecorator5({
        title: "\u90AE\u7BB1\u5BC6\u7801\u767B\u5F55\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().emailAuthProvider() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u90AE\u7BB1\u767B\u5F55",
          "  3 - \u90AE\u7BB1\u5730\u5740\u4E0E\u5BC6\u7801\u662F\u5426\u5339\u914D",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL5)
        ]
      }),
      __metadata5("design:type", Function),
      __metadata5("design:paramtypes", [String, String]),
      __metadata5("design:returntype", Promise)
    ], EmailAuthProvider2.prototype, "signIn", null);
    __decorate5([
      catchErrorsDecorator5({
        title: "\u90AE\u7BB1\u6CE8\u518C\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().signUpWithEmailAndPassword() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u90AE\u7BB1\u767B\u5F55",
          "  3 - \u6B64\u90AE\u7BB1\u5730\u5740\u662F\u5426\u5DF2\u7ECF\u88AB\u5176\u4ED6\u7528\u6237\u5360\u7528",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL5)
        ]
      }),
      __metadata5("design:type", Function),
      __metadata5("design:paramtypes", [String, String]),
      __metadata5("design:returntype", Promise)
    ], EmailAuthProvider2.prototype, "signUp", null);
    __decorate5([
      catchErrorsDecorator5({
        title: "\u91CD\u7F6E\u5BC6\u7801\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().sendPasswordResetEmail() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u90AE\u7BB1\u767B\u5F55",
          "  3 - \u6B64\u90AE\u7BB1\u5730\u5740\u662F\u5426\u5DF2\u7ECF\u4E0E\u5F53\u524D\u7528\u6237\u7ED1\u5B9A",
          "  4 - \u6B64\u90AE\u7BB1\u5730\u5740\u662F\u5426\u5DF2\u7ECF\u88AB\u5176\u4ED6\u7528\u6237\u5360\u7528",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL5)
        ]
      }),
      __metadata5("design:type", Function),
      __metadata5("design:paramtypes", [String]),
      __metadata5("design:returntype", Promise)
    ], EmailAuthProvider2.prototype, "resetPassword", null);
    __decorate5([
      catchErrorsDecorator5({
        title: "\u91CD\u7F6E\u5BC6\u7801\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u90AE\u7BB1\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL5)
        ]
      }),
      __metadata5("design:type", Function),
      __metadata5("design:paramtypes", [String, String]),
      __metadata5("design:returntype", Promise)
    ], EmailAuthProvider2.prototype, "resetPasswordWithToken", null);
    __decorate5([
      catchErrorsDecorator5({
        title: "\u90AE\u7BB1\u6FC0\u6D3B\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u90AE\u7BB1\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL5)
        ]
      }),
      __metadata5("design:type", Function),
      __metadata5("design:paramtypes", [String]),
      __metadata5("design:returntype", Promise)
    ], EmailAuthProvider2.prototype, "activate", null);
    return EmailAuthProvider2;
  })(AuthProvider);

  // node_modules/@cloudbase/auth/dist/esm/providers/usernameAuthProvider.js
  var import_utilities10 = __toESM(require_dist());
  var __extends6 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var __decorate6 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata6 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter9 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator9 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var printWarn3 = import_utilities10.utils.printWarn;
  var ERRORS8 = import_utilities10.constants.ERRORS;
  var COMMUNITY_SITE_URL6 = import_utilities10.constants.COMMUNITY_SITE_URL;
  var catchErrorsDecorator6 = import_utilities10.helpers.catchErrorsDecorator;
  var UsernameAuthProvider = (function(_super) {
    __extends6(UsernameAuthProvider2, _super);
    function UsernameAuthProvider2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    UsernameAuthProvider2.prototype.signIn = function(username, password) {
      return __awaiter9(this, void 0, void 0, function() {
        var refreshTokenKey, res, _a2, _b, _c, refresh_token, access_token_expire, access_token;
        var _d;
        return __generator9(this, function(_e) {
          switch (_e.label) {
            case 0:
              if (typeof username !== "string") {
                throw new Error(JSON.stringify({
                  code: ERRORS8.INVALID_PARAMS,
                  msg: "username must be a string"
                }));
              }
              if (typeof password !== "string") {
                password = "";
                printWarn3(ERRORS8.INVALID_PARAMS, "password is empty");
              }
              refreshTokenKey = this._cache.keys.refreshTokenKey;
              _b = (_a2 = this._request).send;
              _c = ["auth.signIn"];
              _d = {
                loginType: LOGINTYPE2.USERNAME,
                username,
                password
              };
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 1:
              return [4, _b.apply(_a2, _c.concat([(_d.refresh_token = _e.sent() || "", _d)]))];
            case 2:
              res = _e.sent();
              refresh_token = res.refresh_token, access_token_expire = res.access_token_expire, access_token = res.access_token;
              if (!refresh_token) return [3, 9];
              return [4, this.setRefreshToken(refresh_token)];
            case 3:
              _e.sent();
              if (!(access_token && access_token_expire)) return [3, 5];
              return [4, this.setAccessToken(access_token, access_token_expire)];
            case 4:
              _e.sent();
              return [3, 7];
            case 5:
              return [4, this._request.refreshAccessToken()];
            case 6:
              _e.sent();
              _e.label = 7;
            case 7:
              return [4, this.refreshUserInfo()];
            case 8:
              _e.sent();
              eventBus.fire(EVENTS2.LOGIN_STATE_CHANGED);
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, {
                env: this._config.env,
                loginType: LOGINTYPE2.USERNAME,
                persistence: this._config.persistence
              });
              return [2, new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              })];
            case 9:
              if (res.code) {
                throw new Error(JSON.stringify({
                  code: ERRORS8.OPERATION_FAIL,
                  msg: "login by username failed:[".concat(res.code, "] ").concat(res.message)
                }));
              } else {
                throw new Error(JSON.stringify({
                  code: ERRORS8.OPERATION_FAIL,
                  msg: "login by username failed"
                }));
              }
              return [2];
          }
        });
      });
    };
    __decorate6([
      catchErrorsDecorator6({
        title: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().signInWithUsernameAndPassword() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55",
          "  3 - \u7528\u6237\u540D\u5BC6\u7801\u662F\u5426\u5339\u914D",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL6)
        ]
      }),
      __metadata6("design:type", Function),
      __metadata6("design:paramtypes", [String, String]),
      __metadata6("design:returntype", Promise)
    ], UsernameAuthProvider2.prototype, "signIn", null);
    return UsernameAuthProvider2;
  })(AuthProvider);

  // node_modules/@cloudbase/auth/dist/esm/providers/phoneAuthProvider.js
  var import_utilities11 = __toESM(require_dist());
  var __extends7 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var __decorate7 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata7 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter10 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator10 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var throwError3 = import_utilities11.utils.throwError;
  var isString4 = import_utilities11.utils.isString;
  var transformPhone = import_utilities11.utils.transformPhone;
  var ERRORS9 = import_utilities11.constants.ERRORS;
  var COMMUNITY_SITE_URL7 = import_utilities11.constants.COMMUNITY_SITE_URL;
  var catchErrorsDecorator7 = import_utilities11.helpers.catchErrorsDecorator;
  var SIGN_METHOD = {
    SIGNIN: "SIGNIN",
    SIGNUP: "SIGNUP",
    FORCERESETPWD: "FORCERESETPWD"
  };
  var PhoneAuthProvider = (function(_super) {
    __extends7(PhoneAuthProvider2, _super);
    function PhoneAuthProvider2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PhoneAuthProvider2.prototype.signIn = function(param) {
      return __awaiter10(this, void 0, void 0, function() {
        var phoneNumber, phoneCode, password, signMethod, refreshTokenKey, res, refresh_token, access_token, access_token_expire;
        return __generator10(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              phoneNumber = param.phoneNumber, phoneCode = param.phoneCode, password = param.password, signMethod = param.signMethod;
              if (!isString4(phoneNumber)) {
                throwError3(ERRORS9.INVALID_PARAMS, "phoneNumber must be a string");
              }
              if (!isString4(phoneCode) && !isString4(password)) {
                throwError3(ERRORS9.INVALID_PARAMS, "phoneCode or password must be a string");
              }
              if (!signMethod) {
                signMethod = SIGN_METHOD.SIGNIN;
              }
              refreshTokenKey = this._cache.keys.refreshTokenKey;
              return [4, this._request.send("auth.signIn", {
                loginType: LOGINTYPE2.PHONE,
                phoneNumber: transformPhone(phoneNumber),
                phoneCode,
                password,
                refresh_token: this._cache.getStore(refreshTokenKey) || "",
                signMethod
              })];
            case 1:
              res = _a2.sent();
              refresh_token = res.refresh_token, access_token = res.access_token, access_token_expire = res.access_token_expire;
              if (!refresh_token) return [3, 8];
              return [4, this.setRefreshToken(refresh_token)];
            case 2:
              _a2.sent();
              if (!(access_token && access_token_expire)) return [3, 4];
              return [4, this.setAccessToken(access_token, access_token_expire)];
            case 3:
              _a2.sent();
              return [3, 6];
            case 4:
              return [4, this._request.refreshAccessToken()];
            case 5:
              _a2.sent();
              _a2.label = 6;
            case 6:
              return [4, this.refreshUserInfo()];
            case 7:
              _a2.sent();
              eventBus.fire(EVENTS2.LOGIN_STATE_CHANGED);
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, {
                env: this._config.env,
                loginType: LOGINTYPE2.PHONE,
                persistence: this._config.persistence
              });
              return [2, new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              })];
            case 8:
              if (res.code) {
                throwError3(ERRORS9.OPERATION_FAIL, "Phone login fail[".concat(res.code, "] ").concat(res.message));
              } else {
                throwError3(ERRORS9.OPERATION_FAIL, "Phone login fail");
              }
              return [2];
          }
        });
      });
    };
    PhoneAuthProvider2.prototype.signUp = function(phoneNumber, phoneCode, password) {
      return __awaiter10(this, void 0, void 0, function() {
        return __generator10(this, function(_a2) {
          return [2, this.signIn({
            phoneNumber,
            phoneCode,
            password,
            signMethod: SIGN_METHOD.SIGNUP
          })];
        });
      });
    };
    PhoneAuthProvider2.prototype.forceResetPwd = function(phoneNumber, phoneCode, password) {
      return __awaiter10(this, void 0, void 0, function() {
        return __generator10(this, function(_a2) {
          return [2, this.signIn({
            phoneNumber,
            phoneCode,
            password,
            signMethod: SIGN_METHOD.FORCERESETPWD
          })];
        });
      });
    };
    __decorate7([
      catchErrorsDecorator7({
        title: "\u624B\u673A\u53F7\u767B\u5F55\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().SmsAuthProvider() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55",
          "  3 - \u77ED\u4FE1\u9A8C\u8BC1\u7801/\u5BC6\u7801\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL7)
        ]
      }),
      __metadata7("design:type", Function),
      __metadata7("design:paramtypes", [Object]),
      __metadata7("design:returntype", Promise)
    ], PhoneAuthProvider2.prototype, "signIn", null);
    __decorate7([
      catchErrorsDecorator7({
        title: "\u624B\u673A\u77ED\u4FE1\u6CE8\u518C\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().signUpWithPhoneCode() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL7)
        ]
      }),
      __metadata7("design:type", Function),
      __metadata7("design:paramtypes", [String, String, String]),
      __metadata7("design:returntype", Promise)
    ], PhoneAuthProvider2.prototype, "signUp", null);
    __decorate7([
      catchErrorsDecorator7({
        title: "\u624B\u673A\u5BC6\u7801\u91CD\u7F6E\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().forceResetPwd() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL7)
        ]
      }),
      __metadata7("design:type", Function),
      __metadata7("design:paramtypes", [String, String, String]),
      __metadata7("design:returntype", Promise)
    ], PhoneAuthProvider2.prototype, "forceResetPwd", null);
    return PhoneAuthProvider2;
  })(AuthProvider);

  // node_modules/@cloudbase/auth/dist/esm/index.js
  var __assign5 = function() {
    __assign5 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign5.apply(this, arguments);
  };
  var __decorate8 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata8 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter11 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator11 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var CloudbaseEventEmitter = import_utilities12.events.CloudbaseEventEmitter;
  var RUNTIME4 = import_utilities12.adapters.RUNTIME;
  var printWarn4 = import_utilities12.utils.printWarn;
  var throwError4 = import_utilities12.utils.throwError;
  var transformPhone2 = import_utilities12.utils.transformPhone;
  var ERRORS10 = import_utilities12.constants.ERRORS;
  var COMMUNITY_SITE_URL8 = import_utilities12.constants.COMMUNITY_SITE_URL;
  var catchErrorsDecorator8 = import_utilities12.helpers.catchErrorsDecorator;
  var COMPONENT_NAME = "auth";
  var eventBus = new CloudbaseEventEmitter();
  var User = (function() {
    function User2(options) {
      var cache2 = options.cache, request = options.request;
      this._cache = cache2;
      this._request = request;
      this._setUserInfo();
    }
    User2.prototype.checkLocalInfo = function() {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          this.uid = this._getLocalUserInfo("uid");
          this.loginType = this._getLocalUserInfo("loginType");
          this.openid = this._getLocalUserInfo("wxOpenId");
          this.wxOpenId = this._getLocalUserInfo("wxOpenId");
          this.wxPublicId = this._getLocalUserInfo("wxPublicId");
          this.unionId = this._getLocalUserInfo("wxUnionId");
          this.qqMiniOpenId = this._getLocalUserInfo("qqMiniOpenId");
          this.customUserId = this._getLocalUserInfo("customUserId");
          this.nickName = this._getLocalUserInfo("nickName");
          this.gender = this._getLocalUserInfo("gender");
          this.avatarUrl = this._getLocalUserInfo("avatarUrl");
          this.email = this._getLocalUserInfo("email");
          this.hasPassword = Boolean(this._getLocalUserInfo("hasPassword"));
          this.phone = this._getLocalUserInfo("phone");
          this.username = this._getLocalUserInfo("username");
          this.location = {
            country: this._getLocalUserInfo("country"),
            province: this._getLocalUserInfo("province"),
            city: this._getLocalUserInfo("city")
          };
          return [2];
        });
      });
    };
    User2.prototype.checkLocalInfoAsync = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var _t;
        return __generator11(this, function(_u) {
          switch (_u.label) {
            case 0:
              _a2 = this;
              return [4, this._getLocalUserInfoAsync("uid")];
            case 1:
              _a2.uid = _u.sent();
              _b = this;
              return [4, this._getLocalUserInfoAsync("loginType")];
            case 2:
              _b.loginType = _u.sent();
              _c = this;
              return [4, this._getLocalUserInfoAsync("wxOpenId")];
            case 3:
              _c.openid = _u.sent();
              _d = this;
              return [4, this._getLocalUserInfoAsync("wxOpenId")];
            case 4:
              _d.wxOpenId = _u.sent();
              _e = this;
              return [4, this._getLocalUserInfoAsync("wxPublicId")];
            case 5:
              _e.wxPublicId = _u.sent();
              _f = this;
              return [4, this._getLocalUserInfoAsync("wxUnionId")];
            case 6:
              _f.unionId = _u.sent();
              _g = this;
              return [4, this._getLocalUserInfoAsync("qqMiniOpenId")];
            case 7:
              _g.qqMiniOpenId = _u.sent();
              _h = this;
              return [4, this._getLocalUserInfoAsync("customUserId")];
            case 8:
              _h.customUserId = _u.sent();
              _j = this;
              return [4, this._getLocalUserInfoAsync("nickName")];
            case 9:
              _j.nickName = _u.sent();
              _k = this;
              return [4, this._getLocalUserInfoAsync("gender")];
            case 10:
              _k.gender = _u.sent();
              _l = this;
              return [4, this._getLocalUserInfoAsync("avatarUrl")];
            case 11:
              _l.avatarUrl = _u.sent();
              _m = this;
              return [4, this._getLocalUserInfoAsync("email")];
            case 12:
              _m.email = _u.sent();
              _o = this;
              _p = Boolean;
              return [4, this._getLocalUserInfoAsync("hasPassword")];
            case 13:
              _o.hasPassword = _p.apply(void 0, [_u.sent()]);
              _q = this;
              return [4, this._getLocalUserInfoAsync("phone")];
            case 14:
              _q.phone = _u.sent();
              _r = this;
              return [4, this._getLocalUserInfoAsync("username")];
            case 15:
              _r.username = _u.sent();
              _s = this;
              _t = {};
              return [4, this._getLocalUserInfoAsync("country")];
            case 16:
              _t.country = _u.sent();
              return [4, this._getLocalUserInfoAsync("province")];
            case 17:
              _t.province = _u.sent();
              return [4, this._getLocalUserInfoAsync("city")];
            case 18:
              _s.location = (_t.city = _u.sent(), _t);
              return [2];
          }
        });
      });
    };
    User2.prototype.linkWithTicket = function(ticket) {
      if (typeof ticket !== "string") {
        throw new Error("ticket must be string");
      }
      return this._request.send("auth.linkWithTicket", { ticket });
    };
    User2.prototype.linkWithRedirect = function(provider) {
      provider.signInWithRedirect();
    };
    User2.prototype.getLinkedUidList = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var data, hasPrimaryUid, users, _i, users_1, user;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._request.send("auth.getLinkedUidList", {})];
            case 1:
              data = _a2.sent().data;
              hasPrimaryUid = false;
              users = data.users;
              for (_i = 0, users_1 = users; _i < users_1.length; _i++) {
                user = users_1[_i];
                if (user.wxOpenId && user.wxPublicId) {
                  hasPrimaryUid = true;
                  break;
                }
              }
              return [2, {
                users,
                hasPrimaryUid
              }];
          }
        });
      });
    };
    User2.prototype.setPrimaryUid = function(uid) {
      return this._request.send("auth.setPrimaryUid", { uid });
    };
    User2.prototype.unlink = function(loginType) {
      return this._request.send("auth.unlink", { platform: loginType });
    };
    User2.prototype.update = function(userInfo) {
      return __awaiter11(this, void 0, void 0, function() {
        var nickName, gender, avatarUrl, province, country, city, newUserInfo;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              nickName = userInfo.nickName, gender = userInfo.gender, avatarUrl = userInfo.avatarUrl, province = userInfo.province, country = userInfo.country, city = userInfo.city;
              return [4, this._request.send("auth.updateUserInfo", { nickName, gender, avatarUrl, province, country, city })];
            case 1:
              newUserInfo = _a2.sent().data;
              this._setLocalUserInfo(newUserInfo);
              return [2];
          }
        });
      });
    };
    User2.prototype.updatePassword = function(newPassword, oldPassword) {
      return this._request.send("auth.updatePassword", {
        oldPassword,
        newPassword
      });
    };
    User2.prototype.updateEmail = function(newEmail, password) {
      return this._request.send("auth.updateEmail", {
        newEmail,
        password
      });
    };
    User2.prototype.updateUsername = function(username) {
      if (typeof username !== "string") {
        throwError4(ERRORS10.INVALID_PARAMS, "username must be a string");
      }
      return this._request.send("auth.updateUsername", {
        username
      });
    };
    User2.prototype.refresh = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var action, userInfo;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              action = "auth.getUserInfo";
              return [4, this._request.send(action, {})];
            case 1:
              userInfo = _a2.sent().data;
              this._setLocalUserInfo(userInfo);
              return [2, userInfo];
          }
        });
      });
    };
    User2.prototype.linkWithPhoneNumber = function(phoneNumber, phoneCode) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this._request.send("auth.linkOrUpdatePhoneNumber", {
            phoneNumber: transformPhone2(phoneNumber),
            phoneCode
          })];
        });
      });
    };
    User2.prototype.updatePhoneNumber = function(phoneNumber, phoneCode) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this._request.send("auth.linkOrUpdatePhoneNumber", {
            phoneNumber: transformPhone2(phoneNumber),
            phoneCode
          })];
        });
      });
    };
    User2.prototype._getLocalUserInfo = function(key2) {
      var userInfoKey = this._cache.keys.userInfoKey;
      var userInfo = this._cache.getStore(userInfoKey);
      return userInfo[key2];
    };
    User2.prototype._getLocalUserInfoAsync = function(key2) {
      return __awaiter11(this, void 0, void 0, function() {
        var userInfoKey, userInfo;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              userInfoKey = this._cache.keys.userInfoKey;
              return [4, this._cache.getStoreAsync(userInfoKey)];
            case 1:
              userInfo = _a2.sent();
              return [2, userInfo[key2]];
          }
        });
      });
    };
    User2.prototype._setUserInfo = function() {
      var _this = this;
      var userInfoKey = this._cache.keys.userInfoKey;
      var userInfo = this._cache.getStore(userInfoKey);
      [
        "uid",
        "loginType",
        "openid",
        "wxOpenId",
        "wxPublicId",
        "unionId",
        "qqMiniOpenId",
        "email",
        "hasPassword",
        "customUserId",
        "nickName",
        "gender",
        "avatarUrl",
        "phone",
        "username"
      ].forEach(function(infoKey) {
        _this[infoKey] = userInfo[infoKey];
      });
      this.location = {
        country: userInfo.country,
        province: userInfo.province,
        city: userInfo.city
      };
    };
    User2.prototype._setLocalUserInfo = function(userInfo) {
      var userInfoKey = this._cache.keys.userInfoKey;
      this._cache.setStore(userInfoKey, userInfo);
      this._setUserInfo();
    };
    __decorate8([
      catchErrorsDecorator8({
        title: "\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.linkWithTicket() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u6B64\u8D26\u6237\u662F\u5426\u5DF2\u7ECF\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u767B\u5F55",
          "  3 - ticket \u53C2\u6570\u662F\u5426\u5F52\u5C5E\u5F53\u524D\u73AF\u5883",
          "  4 - \u521B\u5EFA ticket \u7684\u81EA\u5B9A\u4E49\u767B\u5F55\u79C1\u94A5\u662F\u5426\u8FC7\u671F",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String]),
      __metadata8("design:returntype", Promise)
    ], User2.prototype, "linkWithTicket", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u7ED1\u5B9A\u7B2C\u4E09\u65B9\u767B\u5F55\u65B9\u5F0F\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.linkWithRedirect() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u6B64\u8D26\u6237\u662F\u5426\u5DF2\u7ECF\u7ED1\u5B9A\u6B64\u7B2C\u4E09\u65B9",
          "  3 - \u6B64\u7B2C\u4E09\u65B9\u662F\u5426\u5DF2\u7ECF\u6388\u6743",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [Object]),
      __metadata8("design:returntype", void 0)
    ], User2.prototype, "linkWithRedirect", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u83B7\u53D6\u8D26\u6237\u5217\u8868\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.getLinkedUidList() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", []),
      __metadata8("design:returntype", Promise)
    ], User2.prototype, "getLinkedUidList", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u8BBE\u7F6E\u5FAE\u4FE1\u4E3B\u8D26\u53F7\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.setPrimaryUid() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String]),
      __metadata8("design:returntype", void 0)
    ], User2.prototype, "setPrimaryUid", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u63A5\u89E6\u7ED1\u5B9A\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.unlink() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u8D26\u6237\u662F\u5426\u5DF2\u7ECF\u4E0E\u6B64\u767B\u5F55\u65B9\u5F0F\u89E3\u7ED1",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String]),
      __metadata8("design:returntype", void 0)
    ], User2.prototype, "unlink", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u66F4\u65B0\u7528\u6237\u4FE1\u606F\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.update() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u7528\u6237\u4FE1\u606F\u4E2D\u662F\u5426\u5305\u542B\u975E\u6CD5\u503C",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [Object]),
      __metadata8("design:returntype", Promise)
    ], User2.prototype, "update", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u66F4\u65B0\u5BC6\u7801\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.updatePassword() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  3 - \u65B0\u5BC6\u7801\u4E2D\u662F\u5426\u5305\u542B\u975E\u6CD5\u5B57\u7B26",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String, String]),
      __metadata8("design:returntype", void 0)
    ], User2.prototype, "updatePassword", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u66F4\u65B0\u90AE\u7BB1\u5730\u5740\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.updateEmail() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u90AE\u7BB1\u5BC6\u7801\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String, String]),
      __metadata8("design:returntype", void 0)
    ], User2.prototype, "updateEmail", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u66F4\u65B0\u7528\u6237\u540D\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.updateUsername() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String]),
      __metadata8("design:returntype", void 0)
    ], User2.prototype, "updateUsername", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u5237\u65B0\u672C\u5730\u7528\u6237\u4FE1\u606F\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 User.refresh() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", []),
      __metadata8("design:returntype", Promise)
    ], User2.prototype, "refresh", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u7ED1\u5B9A\u624B\u673A\u53F7\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().linkWithPhoneNumber() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String, String]),
      __metadata8("design:returntype", Promise)
    ], User2.prototype, "linkWithPhoneNumber", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u66F4\u65B0\u624B\u673A\u53F7\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String, String]),
      __metadata8("design:returntype", Promise)
    ], User2.prototype, "updatePhoneNumber", null);
    return User2;
  })();
  var LoginState = (function() {
    function LoginState2(options) {
      var envId = options.envId, cache2 = options.cache, request = options.request;
      if (!envId) {
        throwError4(ERRORS10.INVALID_PARAMS, "envId is not defined");
      }
      this._cache = cache2;
      this.user = new User({
        cache: cache2,
        request
      });
    }
    LoginState2.prototype.checkLocalState = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var _a2, refreshTokenKey, accessTokenKey, accessTokenExpireKey, refreshToken, accessToken, accessTokenExpire;
        return __generator11(this, function(_b) {
          _a2 = this._cache.keys, refreshTokenKey = _a2.refreshTokenKey, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey;
          refreshToken = this._cache.getStore(refreshTokenKey);
          accessToken = this._cache.getStore(accessTokenKey);
          accessTokenExpire = this._cache.getStore(accessTokenExpireKey);
          this.credential = {
            refreshToken,
            accessToken,
            accessTokenExpire
          };
          this._loginType = this._cache.getStore(this._cache.keys.loginTypeKey);
          this.user.checkLocalInfo();
          return [2];
        });
      });
    };
    LoginState2.prototype.checkLocalStateAsync = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var _a2, refreshTokenKey, accessTokenKey, accessTokenExpireKey, refreshToken, accessToken, accessTokenExpire, _b;
        return __generator11(this, function(_c) {
          switch (_c.label) {
            case 0:
              _a2 = this._cache.keys, refreshTokenKey = _a2.refreshTokenKey, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey;
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 1:
              refreshToken = _c.sent();
              return [4, this._cache.getStoreAsync(accessTokenKey)];
            case 2:
              accessToken = _c.sent();
              return [4, this._cache.getStoreAsync(accessTokenExpireKey)];
            case 3:
              accessTokenExpire = _c.sent();
              this.credential = {
                refreshToken,
                accessToken,
                accessTokenExpire
              };
              _b = this;
              return [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
            case 4:
              _b._loginType = _c.sent();
              return [4, this.user.checkLocalInfoAsync()];
            case 5:
              _c.sent();
              return [2];
          }
        });
      });
    };
    Object.defineProperty(LoginState2.prototype, "isAnonymousAuth", {
      get: function() {
        return this.loginType === LOGINTYPE2.ANONYMOUS;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LoginState2.prototype, "isCustomAuth", {
      get: function() {
        return this.loginType === LOGINTYPE2.CUSTOM;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LoginState2.prototype, "isWeixinAuth", {
      get: function() {
        return this.loginType === LOGINTYPE2.WECHAT || this.loginType === LOGINTYPE2.WECHAT_OPEN || this.loginType === LOGINTYPE2.WECHAT_PUBLIC;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LoginState2.prototype, "isUsernameAuth", {
      get: function() {
        return this.loginType === LOGINTYPE2.USERNAME;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LoginState2.prototype, "loginType", {
      get: function() {
        return this._loginType;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LoginState2.prototype, "isPhoneAuth", {
      get: function() {
        return this.loginType === LOGINTYPE2.PHONE;
      },
      enumerable: false,
      configurable: true
    });
    return LoginState2;
  })();
  var Auth = (function() {
    function Auth2(config) {
      this._config = config;
      this._cache = config.cache;
      this._request = config.request;
      this._runtime = config.runtime || RUNTIME4.WEB;
      eventBus.on(EVENTS2.LOGIN_TYPE_CHANGED, this._onLoginTypeChanged.bind(this));
    }
    Object.defineProperty(Auth2.prototype, "currentUser", {
      get: function() {
        if (this._cache.mode === "async") {
          printWarn4(ERRORS10.INVALID_OPERATION, "current platform's storage is asynchronous, please use getCurrentUser insteed");
          return;
        }
        var loginState = this.hasLoginState();
        if (loginState) {
          return loginState.user || null;
        }
        return null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Auth2.prototype, "loginType", {
      get: function() {
        return this._cache.getStore(this._cache.keys.loginTypeKey);
      },
      enumerable: false,
      configurable: true
    });
    Auth2.prototype.getCurrenUser = function() {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.getCurrentUser()];
            case 1:
              return [2, _a2.sent()];
          }
        });
      });
    };
    Auth2.prototype.getCurrentUser = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var loginState;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.getLoginState()];
            case 1:
              loginState = _a2.sent();
              if (!loginState) return [3, 3];
              return [4, loginState.user.checkLocalInfoAsync()];
            case 2:
              _a2.sent();
              return [2, loginState.user || null];
            case 3:
              return [2, null];
          }
        });
      });
    };
    Auth2.prototype.getLoginType = function() {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
            case 1:
              return [2, _a2.sent()];
          }
        });
      });
    };
    Auth2.prototype.getAccessToken = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var _a2;
        return __generator11(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = {};
              return [4, this._request.getAccessToken()];
            case 1:
              return [2, (_a2.accessToken = _b.sent().accessToken, _a2.env = this._config.env, _a2)];
          }
        });
      });
    };
    Auth2.prototype.weixinAuthProvider = function(_a2) {
      var appid = _a2.appid, scope = _a2.scope, state = _a2.state;
      if (!this._weixinAuthProvider) {
        this._weixinAuthProvider = new WeixinAuthProvider(__assign5(__assign5({}, this._config), { cache: this._cache, request: this._request, runtime: this._runtime }), appid, scope, state);
      }
      return this._weixinAuthProvider;
    };
    Auth2.prototype.anonymousAuthProvider = function() {
      if (!this._anonymousAuthProvider) {
        this._anonymousAuthProvider = new AnonymousAuthProvider(__assign5(__assign5({}, this._config), { cache: this._cache, request: this._request }));
      }
      return this._anonymousAuthProvider;
    };
    Auth2.prototype.customAuthProvider = function() {
      if (!this._customAuthProvider) {
        this._customAuthProvider = new CustomAuthProvider(__assign5(__assign5({}, this._config), { cache: this._cache, request: this._request }));
      }
      return this._customAuthProvider;
    };
    Auth2.prototype.emailAuthProvider = function() {
      if (!this._emailAuthProvider) {
        this._emailAuthProvider = new EmailAuthProvider(__assign5(__assign5({}, this._config), { cache: this._cache, request: this._request }));
      }
      return this._emailAuthProvider;
    };
    Auth2.prototype.usernameAuthProvider = function() {
      if (!this._usernameAuthProvider) {
        this._usernameAuthProvider = new UsernameAuthProvider(__assign5(__assign5({}, this._config), { cache: this._cache, request: this._request }));
      }
      return this._usernameAuthProvider;
    };
    Auth2.prototype.phoneAuthProvider = function() {
      if (!this._phoneAuthProvider) {
        this._phoneAuthProvider = new PhoneAuthProvider(__assign5(__assign5({}, this._config), { cache: this._cache, request: this._request }));
      }
      return this._phoneAuthProvider;
    };
    Auth2.prototype.signInWithUsernameAndPassword = function(username, password) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this.usernameAuthProvider().signIn(username, password)];
        });
      });
    };
    Auth2.prototype.isUsernameRegistered = function(username) {
      return __awaiter11(this, void 0, void 0, function() {
        var data;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (typeof username !== "string") {
                throwError4(ERRORS10.INVALID_PARAMS, "username must be a string");
              }
              return [4, this._request.send("auth.isUsernameRegistered", {
                username
              })];
            case 1:
              data = _a2.sent().data;
              return [2, data === null || data === void 0 ? void 0 : data.isRegistered];
          }
        });
      });
    };
    Auth2.prototype.signInWithEmailAndPassword = function(email, password) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this.emailAuthProvider().signIn(email, password)];
        });
      });
    };
    Auth2.prototype.signUpWithEmailAndPassword = function(email, password) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this.emailAuthProvider().signUp(email, password)];
        });
      });
    };
    Auth2.prototype.sendPasswordResetEmail = function(email) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this.emailAuthProvider().resetPassword(email)];
        });
      });
    };
    Auth2.prototype.signOut = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var _a2, refreshTokenKey, accessTokenKey, accessTokenExpireKey, action, refresh_token, res;
        return __generator11(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this._cache.keys, refreshTokenKey = _a2.refreshTokenKey, accessTokenKey = _a2.accessTokenKey, accessTokenExpireKey = _a2.accessTokenExpireKey;
              action = "auth.logout";
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 1:
              refresh_token = _b.sent();
              if (!refresh_token) {
                return [2];
              }
              return [4, this._request.send(action, { refresh_token })];
            case 2:
              res = _b.sent();
              this._cache.removeStoreAsync(refreshTokenKey);
              this._cache.removeStoreAsync(accessTokenKey);
              this._cache.removeStoreAsync(accessTokenExpireKey);
              eventBus.fire(EVENTS2.LOGIN_STATE_CHANGED);
              eventBus.fire(EVENTS2.LOGIN_TYPE_CHANGED, {
                env: this._config.env,
                loginType: LOGINTYPE2.NULL,
                persistence: this._config.persistence
              });
              return [2, res];
          }
        });
      });
    };
    Auth2.prototype.onLoginStateChanged = function(callback) {
      return __awaiter11(this, void 0, void 0, function() {
        var loginState;
        var _this = this;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              eventBus.on(EVENTS2.LOGIN_STATE_CHANGED, function() {
                return __awaiter11(_this, void 0, void 0, function() {
                  var loginState2;
                  return __generator11(this, function(_a3) {
                    switch (_a3.label) {
                      case 0:
                        return [4, this.getLoginState()];
                      case 1:
                        loginState2 = _a3.sent();
                        callback.call(this, loginState2);
                        return [2];
                    }
                  });
                });
              });
              return [4, this.getLoginState()];
            case 1:
              loginState = _a2.sent();
              callback.call(this, loginState);
              return [2];
          }
        });
      });
    };
    Auth2.prototype.onLoginStateExpired = function(callback) {
      eventBus.on(EVENTS2.LOGIN_STATE_EXPIRED, callback.bind(this));
    };
    Auth2.prototype.onAccessTokenRefreshed = function(callback) {
      eventBus.on(EVENTS2.ACCESS_TOKEN_REFRESHD, callback.bind(this));
    };
    Auth2.prototype.onAnonymousConverted = function(callback) {
      eventBus.on(EVENTS2.ANONYMOUS_CONVERTED, callback.bind(this));
    };
    Auth2.prototype.onLoginTypeChanged = function(callback) {
      var _this = this;
      eventBus.on(EVENTS2.LOGIN_TYPE_CHANGED, function() {
        return __awaiter11(_this, void 0, void 0, function() {
          var loginState;
          return __generator11(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, this.getLoginState()];
              case 1:
                loginState = _a2.sent();
                callback.call(this, loginState);
                return [2];
            }
          });
        });
      });
    };
    Auth2.prototype.hasLoginState = function() {
      if (this._cache.mode === "async") {
        printWarn4(ERRORS10.INVALID_OPERATION, "current platform's storage is asynchronous, please use getLoginState insteed");
        return;
      }
      var refreshTokenKey = this._cache.keys.refreshTokenKey;
      var refreshToken = this._cache.getStore(refreshTokenKey);
      if (refreshToken) {
        var loginState = new LoginState({
          envId: this._config.env,
          cache: this._cache,
          request: this._request
        });
        loginState.checkLocalState();
        return loginState;
      }
      return null;
    };
    Auth2.prototype.getLoginState = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var refreshTokenKey, refreshToken, loginState;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              refreshTokenKey = this._cache.keys.refreshTokenKey;
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 1:
              refreshToken = _a2.sent();
              if (!refreshToken) return [3, 3];
              loginState = new LoginState({
                envId: this._config.env,
                cache: this._cache,
                request: this._request
              });
              return [4, loginState.checkLocalStateAsync()];
            case 2:
              _a2.sent();
              return [2, loginState];
            case 3:
              return [2, null];
          }
        });
      });
    };
    Auth2.prototype.shouldRefreshAccessToken = function(hook2) {
      this._request._shouldRefreshAccessTokenHook = hook2.bind(this);
    };
    Auth2.prototype.getUserInfo = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var action, res;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              action = "auth.getUserInfo";
              return [4, this._request.send(action, {})];
            case 1:
              res = _a2.sent();
              if (res.code) {
                return [2, res];
              }
              return [2, __assign5(__assign5({}, res.data), { requestId: res.seqId })];
          }
        });
      });
    };
    Auth2.prototype.getAuthHeader = function() {
      var _a2 = this._cache.keys, refreshTokenKey = _a2.refreshTokenKey, accessTokenKey = _a2.accessTokenKey;
      var refreshToken = this._cache.getStore(refreshTokenKey);
      var accessToken = this._cache.getStore(accessTokenKey);
      return {
        "x-cloudbase-credentials": "".concat(accessToken, "/@@/").concat(refreshToken)
      };
    };
    Auth2.prototype.getAuthHeaderAsync = function() {
      return __awaiter11(this, void 0, void 0, function() {
        var _a2, refreshTokenKey, accessTokenKey, refreshToken, accessToken;
        return __generator11(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this._request.refreshAccessToken()];
            case 1:
              _b.sent();
              _a2 = this._cache.keys, refreshTokenKey = _a2.refreshTokenKey, accessTokenKey = _a2.accessTokenKey;
              return [4, this._cache.getStoreAsync(refreshTokenKey)];
            case 2:
              refreshToken = _b.sent();
              return [4, this._cache.getStoreAsync(accessTokenKey)];
            case 3:
              accessToken = _b.sent();
              return [2, {
                "x-cloudbase-credentials": "".concat(accessToken, "/@@/").concat(refreshToken)
              }];
          }
        });
      });
    };
    Auth2.prototype.sendPhoneCode = function(phoneNumber) {
      return __awaiter11(this, void 0, void 0, function() {
        var data;
        return __generator11(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._request.send("auth.sendPhoneCode", {
                phoneNumber: transformPhone2(phoneNumber)
              })];
            case 1:
              data = _a2.sent().data;
              return [2, data.SendStatus === "Ok"];
          }
        });
      });
    };
    Auth2.prototype.signUpWithPhoneCode = function(phoneNumber, phoneCode, password) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this.phoneAuthProvider().signUp(phoneNumber, phoneCode, password)];
        });
      });
    };
    Auth2.prototype.signInWithPhoneCodeOrPassword = function(param) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this.phoneAuthProvider().signIn(param)];
        });
      });
    };
    Auth2.prototype.forceResetPwdByPhoneCode = function(param) {
      return __awaiter11(this, void 0, void 0, function() {
        return __generator11(this, function(_a2) {
          return [2, this.phoneAuthProvider().signIn(__assign5(__assign5({}, param), { signMethod: SIGN_METHOD.FORCERESETPWD }))];
        });
      });
    };
    Auth2.prototype._onLoginTypeChanged = function(ev) {
      return __awaiter11(this, void 0, void 0, function() {
        var _a2, loginType, persistence, env;
        return __generator11(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = ev.data, loginType = _a2.loginType, persistence = _a2.persistence, env = _a2.env;
              if (env !== this._config.env) {
                return [2];
              }
              return [4, this._cache.updatePersistenceAsync(persistence)];
            case 1:
              _b.sent();
              return [4, this._cache.setStoreAsync(this._cache.keys.loginTypeKey, loginType)];
            case 2:
              _b.sent();
              return [2];
          }
        });
      });
    };
    __decorate8([
      catchErrorsDecorator8({
        title: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().getCurrenUser() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", []),
      __metadata8("design:returntype", Promise)
    ], Auth2.prototype, "getCurrenUser", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().getCurrentUser() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", []),
      __metadata8("design:returntype", Promise)
    ], Auth2.prototype, "getCurrentUser", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u83B7\u53D6\u7528\u6237\u662F\u5426\u88AB\u5360\u7528\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().isUsernameRegistered() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String]),
      __metadata8("design:returntype", Promise)
    ], Auth2.prototype, "isUsernameRegistered", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u7528\u6237\u767B\u51FA\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().signOut() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u7528\u6237\u662F\u5426\u4E3A\u533F\u540D\u767B\u5F55\uFF08\u533F\u540D\u767B\u5F55\u4E0D\u652F\u6301signOut\uFF09",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", []),
      __metadata8("design:returntype", Promise)
    ], Auth2.prototype, "signOut", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u83B7\u53D6\u672C\u5730\u767B\u5F55\u6001\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 auth().getLoginState() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", []),
      __metadata8("design:returntype", Promise)
    ], Auth2.prototype, "getLoginState", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u662F\u5426\u5DF2\u767B\u5F55",
          "  2 - \u8C03\u7528 auth().getUserInfo() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", []),
      __metadata8("design:returntype", Promise)
    ], Auth2.prototype, "getUserInfo", null);
    __decorate8([
      catchErrorsDecorator8({
        title: "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u662F\u5426\u5F00\u901A\u4E86\u77ED\u4FE1\u9A8C\u8BC1\u7801\u767B\u5F55",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL8)
        ]
      }),
      __metadata8("design:type", Function),
      __metadata8("design:paramtypes", [String]),
      __metadata8("design:returntype", Promise)
    ], Auth2.prototype, "sendPhoneCode", null);
    return Auth2;
  })();
  var EVENTS2 = {
    LOGIN_STATE_CHANGED: "loginStateChanged",
    LOGIN_STATE_EXPIRED: "loginStateExpire",
    LOGIN_TYPE_CHANGED: "loginTypeChanged",
    ANONYMOUS_CONVERTED: "anonymousConverted",
    ACCESS_TOKEN_REFRESHD: "refreshAccessToken"
  };
  var component = {
    name: COMPONENT_NAME,
    namespace: "auth",
    injectEvents: {
      bus: eventBus,
      events: [
        EVENTS2.LOGIN_TYPE_CHANGED,
        EVENTS2.LOGIN_STATE_EXPIRED,
        EVENTS2.LOGIN_STATE_CHANGED,
        EVENTS2.ACCESS_TOKEN_REFRESHD,
        EVENTS2.ANONYMOUS_CONVERTED
      ]
    },
    entity: function(config) {
      if (config === void 0) {
        config = { region: "", persistence: "local" };
      }
      if (this.authInstance) {
        printWarn4(ERRORS10.INVALID_OPERATION, "every cloudbase instance should has only one auth object");
        return this.authInstance;
      }
      var _a2 = this.platform, adapter2 = _a2.adapter, runtime2 = _a2.runtime;
      var newPersistence = config.persistence || adapter2.primaryStorage;
      if (newPersistence && newPersistence !== this.config.persistence) {
        this.updateConfig({ persistence: newPersistence });
      }
      var _b = this.config, env = _b.env, persistence = _b.persistence, debug = _b.debug;
      this.authInstance = new Auth({
        env,
        region: config.region,
        persistence,
        debug,
        cache: this.cache,
        request: this.request,
        runtime: runtime2
      });
      return this.authInstance;
    }
  };
  try {
    cloudbase.registerComponent(component);
  } catch (e) {
  }
  function registerAuth(app) {
    try {
      app.registerComponent(component);
    } catch (e) {
      console.warn(e);
    }
  }

  // node_modules/@cloudbase/functions/dist/esm/index.js
  var import_utilities13 = __toESM(require_dist());
  var __decorate9 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata9 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter12 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator12 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var getSdkName3 = import_utilities13.constants.getSdkName;
  var ERRORS11 = import_utilities13.constants.ERRORS;
  var COMMUNITY_SITE_URL9 = import_utilities13.constants.COMMUNITY_SITE_URL;
  var execCallback = import_utilities13.utils.execCallback;
  var catchErrorsDecorator9 = import_utilities13.helpers.catchErrorsDecorator;
  var COMPONENT_NAME2 = "functions";
  var CloudbaseFunctions = (function() {
    function CloudbaseFunctions2() {
    }
    CloudbaseFunctions2.prototype.callFunction = function(options, callback) {
      return __awaiter12(this, void 0, void 0, function() {
        var name, data, query, parse, search, jsonData, action, params, request, res, result, e_1;
        return __generator12(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              name = options.name, data = options.data, query = options.query, parse = options.parse, search = options.search;
              if (!name) {
                throw new Error(JSON.stringify({
                  code: ERRORS11.INVALID_PARAMS,
                  msg: "[".concat(COMPONENT_NAME2, ".callFunction] invalid function name")
                }));
              }
              try {
                jsonData = data ? JSON.stringify(data) : "";
              } catch (e) {
                throw new Error(JSON.stringify({
                  code: ERRORS11.INVALID_PARAMS,
                  msg: "[".concat(COMPONENT_NAME2, ".callFunction] invalid data")
                }));
              }
              action = "functions.invokeFunction";
              params = {
                inQuery: query,
                parse,
                search,
                function_name: name,
                request_data: jsonData
              };
              request = this.request;
              _a2.label = 1;
            case 1:
              _a2.trys.push([1, 3, , 4]);
              return [4, request.send(action, params)];
            case 2:
              res = _a2.sent();
              if (res.code) {
                return [2, execCallback(callback, null, res)];
              }
              result = res.data.response_data;
              if (parse) {
                return [2, execCallback(callback, null, {
                  result,
                  requestId: res.requestId
                })];
              }
              try {
                result = JSON.parse(res.data.response_data);
                return [2, execCallback(callback, null, {
                  result,
                  requestId: res.requestId
                })];
              } catch (e) {
                execCallback(callback, new Error("[".concat(getSdkName3(), "][").concat(ERRORS11.INVALID_PARAMS, "][").concat(COMPONENT_NAME2, ".callFunction] response data must be json")));
              }
              return [3, 4];
            case 3:
              e_1 = _a2.sent();
              execCallback(callback, e_1);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
    };
    __decorate9([
      catchErrorsDecorator9({
        customInfo: {
          className: "Cloudbase",
          methodName: "callFunction"
        },
        title: "\u51FD\u6570\u8C03\u7528\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 callFunction() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u73AF\u5883\u4E0B\u662F\u5426\u5B58\u5728\u6B64\u51FD\u6570",
          "  3 - \u51FD\u6570\u5B89\u5168\u89C4\u5219\u662F\u5426\u9650\u5236\u4E86\u5F53\u524D\u767B\u5F55\u72B6\u6001\u8BBF\u95EE",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL9)
        ]
      }),
      __metadata9("design:type", Function),
      __metadata9("design:paramtypes", [Object, Function]),
      __metadata9("design:returntype", Promise)
    ], CloudbaseFunctions2.prototype, "callFunction", null);
    return CloudbaseFunctions2;
  })();
  var cloudbaseFunctions = new CloudbaseFunctions();
  var component2 = {
    name: COMPONENT_NAME2,
    entity: {
      callFunction: cloudbaseFunctions.callFunction
    }
  };
  try {
    cloudbase.registerComponent(component2);
  } catch (e) {
  }
  function registerFunctions(app) {
    try {
      app.registerComponent(component2);
    } catch (e) {
      console.warn(e);
    }
  }

  // node_modules/@cloudbase/storage/dist/esm/index.js
  var import_utilities14 = __toESM(require_dist());
  var __decorate10 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata10 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter13 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator13 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var getSdkName4 = import_utilities14.constants.getSdkName;
  var ERRORS12 = import_utilities14.constants.ERRORS;
  var COMMUNITY_SITE_URL10 = import_utilities14.constants.COMMUNITY_SITE_URL;
  var isArray = import_utilities14.utils.isArray;
  var isString5 = import_utilities14.utils.isString;
  var isPalinObject = import_utilities14.utils.isPalinObject;
  var execCallback2 = import_utilities14.utils.execCallback;
  var catchErrorsDecorator10 = import_utilities14.helpers.catchErrorsDecorator;
  var COMPONENT_NAME3 = "storage";
  var CloudbaseStorage = (function() {
    function CloudbaseStorage2() {
    }
    CloudbaseStorage2.prototype.uploadFile = function(params, callback) {
      return __awaiter13(this, void 0, void 0, function() {
        var cloudPath, filePath, onUploadProgress, action, request, metaData, _a2, url, authorization, token, fileId, cosFileId, download_url, requestId, data, res;
        return __generator13(this, function(_b) {
          switch (_b.label) {
            case 0:
              cloudPath = params.cloudPath, filePath = params.filePath, onUploadProgress = params.onUploadProgress;
              if (!isString5(cloudPath) || !filePath) {
                throw new Error(JSON.stringify({
                  code: ERRORS12.INVALID_PARAMS,
                  msg: "[".concat(COMPONENT_NAME3, ".uploadFile] invalid params")
                }));
              }
              action = "storage.getUploadMetadata";
              request = this.request;
              return [4, request.send(action, {
                path: cloudPath
              })];
            case 1:
              metaData = _b.sent();
              _a2 = metaData.data, url = _a2.url, authorization = _a2.authorization, token = _a2.token, fileId = _a2.fileId, cosFileId = _a2.cosFileId, download_url = _a2.download_url, requestId = metaData.requestId;
              data = {
                key: cloudPath,
                signature: authorization,
                "x-cos-meta-fileid": cosFileId,
                success_action_status: "201",
                "x-cos-security-token": token
              };
              return [4, request.upload({
                url,
                data,
                file: filePath,
                name: cloudPath,
                onUploadProgress
              })];
            case 2:
              res = _b.sent();
              if (res.statusCode === 201) {
                return [2, execCallback2(callback, null, {
                  fileID: fileId,
                  download_url,
                  requestId
                })];
              }
              return [2, execCallback2(callback, new Error("[".concat(getSdkName4(), "][").concat(ERRORS12.OPERATION_FAIL, "][").concat(COMPONENT_NAME3, "]:").concat(res.data)))];
          }
        });
      });
    };
    CloudbaseStorage2.prototype.getUploadMetadata = function(params, callback) {
      return __awaiter13(this, void 0, void 0, function() {
        var cloudPath, request, action, metaData, err_1;
        return __generator13(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              cloudPath = params.cloudPath;
              if (!isString5(cloudPath)) {
                throw new Error(JSON.stringify({
                  code: ERRORS12.INVALID_PARAMS,
                  msg: "[".concat(COMPONENT_NAME3, ".getUploadMetadata] invalid cloudPath")
                }));
              }
              request = this.request;
              action = "storage.getUploadMetadata";
              _a2.label = 1;
            case 1:
              _a2.trys.push([1, 3, , 4]);
              return [4, request.send(action, {
                path: cloudPath
              })];
            case 2:
              metaData = _a2.sent();
              return [2, execCallback2(callback, null, metaData)];
            case 3:
              err_1 = _a2.sent();
              return [2, execCallback2(callback, err_1)];
            case 4:
              return [2];
          }
        });
      });
    };
    CloudbaseStorage2.prototype.deleteFile = function(params, callback) {
      return __awaiter13(this, void 0, void 0, function() {
        var fileList, _i, fileList_1, fileId, action, request, res, data;
        return __generator13(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              fileList = params.fileList;
              if (!fileList || !isArray(fileList) || fileList.length === 0) {
                throw new Error(JSON.stringify({
                  code: ERRORS12.INVALID_PARAMS,
                  msg: "[".concat(COMPONENT_NAME3, ".deleteFile] fileList must not be empty")
                }));
              }
              for (_i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                fileId = fileList_1[_i];
                if (!fileId || !isString5(fileId)) {
                  throw new Error(JSON.stringify({
                    code: ERRORS12.INVALID_PARAMS,
                    msg: "[".concat(COMPONENT_NAME3, ".deleteFile] fileID must be string")
                  }));
                }
              }
              action = "storage.batchDeleteFile";
              request = this.request;
              return [4, request.send(action, {
                fileid_list: fileList
              })];
            case 1:
              res = _a2.sent();
              if (res.code) {
                return [2, execCallback2(callback, null, res)];
              }
              data = {
                fileList: res.data.delete_list,
                requestId: res.requestId
              };
              return [2, execCallback2(callback, null, data)];
          }
        });
      });
    };
    CloudbaseStorage2.prototype.getTempFileURL = function(params, callback) {
      return __awaiter13(this, void 0, void 0, function() {
        var fileList, file_list, _i, fileList_2, file, action, request, res;
        return __generator13(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              fileList = params.fileList;
              if (!fileList || !isArray(fileList) || fileList.length === 0) {
                throw new Error(JSON.stringify({
                  code: ERRORS12.INVALID_PARAMS,
                  msg: "[".concat(COMPONENT_NAME3, ".getTempFileURL] fileList must not be empty")
                }));
              }
              file_list = [];
              for (_i = 0, fileList_2 = fileList; _i < fileList_2.length; _i++) {
                file = fileList_2[_i];
                if (isPalinObject(file)) {
                  if (!file.hasOwnProperty("fileID") || !file.hasOwnProperty("maxAge")) {
                    throw new Error(JSON.stringify({
                      code: ERRORS12.INVALID_PARAMS,
                      msg: "[".concat(COMPONENT_NAME3, ".getTempFileURL] file info must include fileID and maxAge")
                    }));
                  }
                  file_list.push({
                    fileid: file.fileID,
                    max_age: file.maxAge
                  });
                } else if (isString5(file)) {
                  file_list.push({
                    fileid: file
                  });
                } else {
                  throw new Error(JSON.stringify({
                    code: ERRORS12.INVALID_PARAMS,
                    msg: "[".concat(COMPONENT_NAME3, ".getTempFileURL] invalid fileList")
                  }));
                }
              }
              action = "storage.batchGetDownloadUrl";
              request = this.request;
              return [4, request.send(action, { file_list })];
            case 1:
              res = _a2.sent();
              if (res.code) {
                return [2, execCallback2(callback, null, res)];
              }
              return [2, execCallback2(callback, null, {
                fileList: res.data.download_list,
                requestId: res.requestId
              })];
          }
        });
      });
    };
    CloudbaseStorage2.prototype.downloadFile = function(params, callback) {
      return __awaiter13(this, void 0, void 0, function() {
        var fileID, tmpUrlRes, res, request, tmpUrl, result;
        return __generator13(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              fileID = params.fileID;
              if (!isString5(fileID)) {
                throw new Error(JSON.stringify({
                  code: ERRORS12.INVALID_PARAMS,
                  msg: "[".concat(COMPONENT_NAME3, ".getTempFileURL] fileID must be string")
                }));
              }
              return [4, this.getTempFileURL.call(this, {
                fileList: [{
                  fileID,
                  maxAge: 600
                }]
              })];
            case 1:
              tmpUrlRes = _a2.sent();
              res = tmpUrlRes.fileList[0];
              if (res.code !== "SUCCESS") {
                return [2, execCallback2(callback, res)];
              }
              request = this.request;
              tmpUrl = encodeURI(res.download_url);
              return [4, request.download({ url: tmpUrl })];
            case 2:
              result = _a2.sent();
              return [2, execCallback2(callback, null, result)];
          }
        });
      });
    };
    __decorate10([
      catchErrorsDecorator10({
        customInfo: {
          className: "Cloudbase",
          methodName: "uploadFile"
        },
        title: "\u4E0A\u4F20\u6587\u4EF6\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 uploadFile() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u57DF\u540D\u662F\u5426\u5728\u5B89\u5168\u57DF\u540D\u5217\u8868\u4E2D\uFF1Ahttps://console.cloud.tencent.com/tcb/env/safety",
          "  3 - \u4E91\u5B58\u50A8\u5B89\u5168\u89C4\u5219\u662F\u5426\u9650\u5236\u4E86\u5F53\u524D\u767B\u5F55\u72B6\u6001\u8BBF\u95EE",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL10)
        ]
      }),
      __metadata10("design:type", Function),
      __metadata10("design:paramtypes", [Object, Function]),
      __metadata10("design:returntype", Promise)
    ], CloudbaseStorage2.prototype, "uploadFile", null);
    __decorate10([
      catchErrorsDecorator10({
        customInfo: {
          className: "Cloudbase",
          methodName: "getUploadMetadata"
        },
        title: "\u83B7\u53D6\u4E0A\u4F20\u5143\u4FE1\u606F\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 getUploadMetadata() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u57DF\u540D\u662F\u5426\u5728\u5B89\u5168\u57DF\u540D\u5217\u8868\u4E2D\uFF1Ahttps://console.cloud.tencent.com/tcb/env/safety",
          "  3 - \u4E91\u5B58\u50A8\u5B89\u5168\u89C4\u5219\u662F\u5426\u9650\u5236\u4E86\u5F53\u524D\u767B\u5F55\u72B6\u6001\u8BBF\u95EE",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL10)
        ]
      }),
      __metadata10("design:type", Function),
      __metadata10("design:paramtypes", [Object, Function]),
      __metadata10("design:returntype", Promise)
    ], CloudbaseStorage2.prototype, "getUploadMetadata", null);
    __decorate10([
      catchErrorsDecorator10({
        customInfo: {
          className: "Cloudbase",
          methodName: "deleteFile"
        },
        title: "\u5220\u9664\u6587\u4EF6\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 deleteFile() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u57DF\u540D\u662F\u5426\u5728\u5B89\u5168\u57DF\u540D\u5217\u8868\u4E2D\uFF1Ahttps://console.cloud.tencent.com/tcb/env/safety",
          "  3 - \u4E91\u5B58\u50A8\u5B89\u5168\u89C4\u5219\u662F\u5426\u9650\u5236\u4E86\u5F53\u524D\u767B\u5F55\u72B6\u6001\u8BBF\u95EE",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL10)
        ]
      }),
      __metadata10("design:type", Function),
      __metadata10("design:paramtypes", [Object, Function]),
      __metadata10("design:returntype", Promise)
    ], CloudbaseStorage2.prototype, "deleteFile", null);
    __decorate10([
      catchErrorsDecorator10({
        customInfo: {
          className: "Cloudbase",
          methodName: "getTempFileURL"
        },
        title: "\u83B7\u53D6\u6587\u4EF6\u4E0B\u8F7D\u94FE\u63A5",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 getTempFileURL() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u57DF\u540D\u662F\u5426\u5728\u5B89\u5168\u57DF\u540D\u5217\u8868\u4E2D\uFF1Ahttps://console.cloud.tencent.com/tcb/env/safety",
          "  3 - \u4E91\u5B58\u50A8\u5B89\u5168\u89C4\u5219\u662F\u5426\u9650\u5236\u4E86\u5F53\u524D\u767B\u5F55\u72B6\u6001\u8BBF\u95EE",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL10)
        ]
      }),
      __metadata10("design:type", Function),
      __metadata10("design:paramtypes", [Object, Function]),
      __metadata10("design:returntype", Promise)
    ], CloudbaseStorage2.prototype, "getTempFileURL", null);
    __decorate10([
      catchErrorsDecorator10({
        customInfo: {
          className: "Cloudbase",
          methodName: "downloadFile"
        },
        title: "\u4E0B\u8F7D\u6587\u4EF6\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 downloadFile() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "  2 - \u5F53\u524D\u57DF\u540D\u662F\u5426\u5728\u5B89\u5168\u57DF\u540D\u5217\u8868\u4E2D\uFF1Ahttps://console.cloud.tencent.com/tcb/env/safety",
          "  3 - \u4E91\u5B58\u50A8\u5B89\u5168\u89C4\u5219\u662F\u5426\u9650\u5236\u4E86\u5F53\u524D\u767B\u5F55\u72B6\u6001\u8BBF\u95EE",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL10)
        ]
      }),
      __metadata10("design:type", Function),
      __metadata10("design:paramtypes", [Object, Function]),
      __metadata10("design:returntype", Promise)
    ], CloudbaseStorage2.prototype, "downloadFile", null);
    return CloudbaseStorage2;
  })();
  var cloudbaseStorage = new CloudbaseStorage();
  var component3 = {
    name: COMPONENT_NAME3,
    entity: {
      uploadFile: cloudbaseStorage.uploadFile,
      deleteFile: cloudbaseStorage.deleteFile,
      getTempFileURL: cloudbaseStorage.getTempFileURL,
      downloadFile: cloudbaseStorage.downloadFile,
      getUploadMetadata: cloudbaseStorage.getUploadMetadata
    }
  };
  try {
    cloudbase.registerComponent(component3);
  } catch (e) {
  }
  function registerStorage(app) {
    try {
      app.registerComponent(component3);
    } catch (e) {
      console.warn(e);
    }
  }

  // node_modules/@cloudbase/realtime/dist/esm/virtual-websocket-client.js
  var import_lodash = __toESM(require_lodash());
  var import_lodash2 = __toESM(require_lodash2());
  var import_lodash3 = __toESM(require_lodash3());

  // node_modules/@cloudbase/realtime/dist/esm/message.js
  function genRequestId(prefix) {
    if (prefix === void 0) {
      prefix = "";
    }
    return "".concat(prefix ? "".concat(prefix, "_") : "").concat(+/* @__PURE__ */ new Date(), "_").concat(Math.random());
  }

  // node_modules/@cloudbase/realtime/dist/esm/listener.js
  var RealtimeListener = /* @__PURE__ */ (function() {
    function RealtimeListener2(options) {
      this.close = options.close;
      this.onChange = options.onChange;
      this.onError = options.onError;
      if (options.debug) {
        Object.defineProperty(this, "virtualClient", {
          get: function() {
            return options.virtualClient;
          }
        });
      }
    }
    return RealtimeListener2;
  })();

  // node_modules/@cloudbase/realtime/dist/esm/snapshot.js
  var Snapshot = /* @__PURE__ */ (function() {
    function Snapshot2(options) {
      var id = options.id, docChanges = options.docChanges, docs = options.docs, msgType = options.msgType, type = options.type;
      var cachedDocChanges;
      var cachedDocs;
      Object.defineProperties(this, {
        id: {
          get: function() {
            return id;
          },
          enumerable: true
        },
        docChanges: {
          get: function() {
            if (!cachedDocChanges) {
              cachedDocChanges = JSON.parse(JSON.stringify(docChanges));
            }
            return cachedDocChanges;
          },
          enumerable: true
        },
        docs: {
          get: function() {
            if (!cachedDocs) {
              cachedDocs = JSON.parse(JSON.stringify(docs));
            }
            return cachedDocs;
          },
          enumerable: true
        },
        msgType: {
          get: function() {
            return msgType;
          },
          enumerable: true
        },
        type: {
          get: function() {
            return type;
          },
          enumerable: true
        }
      });
    }
    return Snapshot2;
  })();

  // node_modules/@cloudbase/realtime/dist/esm/error.js
  var __extends8 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var RealtimeErrorMessageError = (function(_super) {
    __extends8(RealtimeErrorMessageError2, _super);
    function RealtimeErrorMessageError2(serverErrorMsg) {
      var _this = _super.call(this, "Watch Error ".concat(JSON.stringify(serverErrorMsg.msgData), " (requestid: ").concat(serverErrorMsg.requestId, ")")) || this;
      _this.isRealtimeErrorMessageError = true;
      _this.payload = serverErrorMsg;
      return _this;
    }
    return RealtimeErrorMessageError2;
  })(Error);
  var isRealtimeErrorMessageError = function(e) {
    return e === null || e === void 0 ? void 0 : e.isRealtimeErrorMessageError;
  };
  var TimeoutError = (function(_super) {
    __extends8(TimeoutError2, _super);
    function TimeoutError2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "timeout";
      _this.payload = null;
      _this.generic = true;
      return _this;
    }
    return TimeoutError2;
  })(Error);
  var isTimeoutError = function(e) {
    return e.type === "timeout";
  };
  var CancelledError = (function(_super) {
    __extends8(CancelledError2, _super);
    function CancelledError2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "cancelled";
      _this.payload = null;
      _this.generic = true;
      return _this;
    }
    return CancelledError2;
  })(Error);
  var isCancelledError = function(e) {
    return e.type === "cancelled";
  };
  var CloudSDKError = (function(_super) {
    __extends8(CloudSDKError2, _super);
    function CloudSDKError2(options) {
      var _this = _super.call(this, options.errMsg) || this;
      _this.errCode = "UNKNOWN_ERROR";
      Object.defineProperties(_this, {
        message: {
          get: function() {
            return "errCode: ".concat(this.errCode, " ").concat(ERR_CODE[this.errCode] || "", " | errMsg: ").concat(this.errMsg);
          },
          set: function(msg) {
            this.errMsg = msg;
          }
        }
      });
      _this.errCode = options.errCode || "UNKNOWN_ERROR";
      _this.errMsg = options.errMsg;
      return _this;
    }
    Object.defineProperty(CloudSDKError2.prototype, "message", {
      get: function() {
        return "errCode: ".concat(this.errCode, " | errMsg: ").concat(this.errMsg);
      },
      set: function(msg) {
        this.errMsg = msg;
      },
      enumerable: false,
      configurable: true
    });
    return CloudSDKError2;
  })(Error);
  var ERR_CODE = {
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
    SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL",
    SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL",
    SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL",
    SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL",
    SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG: "SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG",
    SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA: "SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA",
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR: "SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR",
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED: "SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED",
    SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL: "SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL",
    SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR: "SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR"
  };

  // node_modules/@cloudbase/realtime/dist/esm/utils.js
  var sleep = function(ms) {
    if (ms === void 0) {
      ms = 0;
    }
    return new Promise(function(r) {
      return setTimeout(r, ms);
    });
  };

  // node_modules/@cloudbase/realtime/dist/esm/virtual-websocket-client.js
  var __awaiter14 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator14 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var __spreadArray2 = function(to, from, pack) {
    if (pack || arguments.length === 2) for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  var WATCH_STATUS;
  (function(WATCH_STATUS2) {
    WATCH_STATUS2["LOGGINGIN"] = "LOGGINGIN";
    WATCH_STATUS2["INITING"] = "INITING";
    WATCH_STATUS2["REBUILDING"] = "REBUILDING";
    WATCH_STATUS2["ACTIVE"] = "ACTIVE";
    WATCH_STATUS2["ERRORED"] = "ERRORED";
    WATCH_STATUS2["CLOSING"] = "CLOSING";
    WATCH_STATUS2["CLOSED"] = "CLOSED";
    WATCH_STATUS2["PAUSED"] = "PAUSED";
    WATCH_STATUS2["RESUMING"] = "RESUMING";
  })(WATCH_STATUS || (WATCH_STATUS = {}));
  var DEFAULT_WAIT_TIME_ON_UNKNOWN_ERROR = 100;
  var DEFAULT_MAX_AUTO_RETRY_ON_ERROR = 2;
  var DEFAULT_MAX_SEND_ACK_AUTO_RETRY_ON_ERROR = 2;
  var DEFAULT_SEND_ACK_DEBOUNCE_TIMEOUT = 10 * 1e3;
  var DEFAULT_INIT_WATCH_TIMEOUT = 10 * 1e3;
  var DEFAULT_REBUILD_WATCH_TIMEOUT = 10 * 1e3;
  var VirtualWebSocketClient = (function() {
    function VirtualWebSocketClient2(options) {
      var _this = this;
      this.watchStatus = WATCH_STATUS.INITING;
      this._login = function(envId, refresh) {
        return __awaiter14(_this, void 0, void 0, function() {
          var loginResult;
          return __generator14(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                this.watchStatus = WATCH_STATUS.LOGGINGIN;
                return [4, this.login(envId, refresh)];
              case 1:
                loginResult = _a2.sent();
                if (!this.envId) {
                  this.envId = loginResult.envId;
                }
                return [2, loginResult];
            }
          });
        });
      };
      this.initWatch = function(forceRefreshLogin) {
        return __awaiter14(_this, void 0, void 0, function() {
          var success;
          var _this2 = this;
          return __generator14(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (this._initWatchPromise) {
                  return [2, this._initWatchPromise];
                }
                this._initWatchPromise = new Promise(function(resolve, reject) {
                  return __awaiter14(_this2, void 0, void 0, function() {
                    var envId, initWatchMsg, initEventMsg, _a3, events3, currEvent, _i, events_1, e, snapshot, e_1;
                    return __generator14(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          _b.trys.push([0, 3, , 4]);
                          if (this.watchStatus === WATCH_STATUS.PAUSED) {
                            console.log("[realtime] initWatch cancelled on pause");
                            return [2, resolve()];
                          }
                          return [4, this._login(this.envId, forceRefreshLogin)];
                        case 1:
                          envId = _b.sent().envId;
                          if (this.watchStatus === WATCH_STATUS.PAUSED) {
                            console.log("[realtime] initWatch cancelled on pause");
                            return [2, resolve()];
                          }
                          this.watchStatus = WATCH_STATUS.INITING;
                          initWatchMsg = {
                            watchId: this.watchId,
                            requestId: genRequestId(),
                            msgType: "INIT_WATCH",
                            msgData: {
                              envId,
                              collName: this.collectionName,
                              query: this.query,
                              limit: this.limit,
                              orderBy: this.orderBy
                            }
                          };
                          return [4, this.send({
                            msg: initWatchMsg,
                            waitResponse: true,
                            skipOnMessage: true,
                            timeout: DEFAULT_INIT_WATCH_TIMEOUT
                          })];
                        case 2:
                          initEventMsg = _b.sent();
                          _a3 = initEventMsg.msgData, events3 = _a3.events, currEvent = _a3.currEvent;
                          this.sessionInfo = {
                            queryID: initEventMsg.msgData.queryID,
                            currentEventId: currEvent - 1,
                            currentDocs: []
                          };
                          if (events3.length > 0) {
                            for (_i = 0, events_1 = events3; _i < events_1.length; _i++) {
                              e = events_1[_i];
                              e.ID = currEvent;
                            }
                            this.handleServerEvents(initEventMsg);
                          } else {
                            this.sessionInfo.currentEventId = currEvent;
                            snapshot = new Snapshot({
                              id: currEvent,
                              docChanges: [],
                              docs: [],
                              type: "init"
                            });
                            this.listener.onChange(snapshot);
                            this.scheduleSendACK();
                          }
                          this.onWatchStart(this, this.sessionInfo.queryID);
                          this.watchStatus = WATCH_STATUS.ACTIVE;
                          this._availableRetries.INIT_WATCH = DEFAULT_MAX_AUTO_RETRY_ON_ERROR;
                          resolve();
                          return [3, 4];
                        case 3:
                          e_1 = _b.sent();
                          this.handleWatchEstablishmentError(e_1, {
                            operationName: "INIT_WATCH",
                            resolve,
                            reject
                          });
                          return [3, 4];
                        case 4:
                          return [2];
                      }
                    });
                  });
                });
                success = false;
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, , 3, 4]);
                return [4, this._initWatchPromise];
              case 2:
                _a2.sent();
                success = true;
                return [3, 4];
              case 3:
                this._initWatchPromise = void 0;
                return [7];
              case 4:
                console.log("[realtime] initWatch ".concat(success ? "success" : "fail"));
                return [2];
            }
          });
        });
      };
      this.rebuildWatch = function(forceRefreshLogin) {
        return __awaiter14(_this, void 0, void 0, function() {
          var success;
          var _this2 = this;
          return __generator14(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (this._rebuildWatchPromise) {
                  return [2, this._rebuildWatchPromise];
                }
                this._rebuildWatchPromise = new Promise(function(resolve, reject) {
                  return __awaiter14(_this2, void 0, void 0, function() {
                    var envId, rebuildWatchMsg, nextEventMsg, e_2;
                    return __generator14(this, function(_a3) {
                      switch (_a3.label) {
                        case 0:
                          _a3.trys.push([0, 3, , 4]);
                          if (this.watchStatus === WATCH_STATUS.PAUSED) {
                            console.log("[realtime] rebuildWatch cancelled on pause");
                            return [2, resolve()];
                          }
                          return [4, this._login(this.envId, forceRefreshLogin)];
                        case 1:
                          envId = _a3.sent().envId;
                          if (!this.sessionInfo) {
                            throw new Error("can not rebuildWatch without a successful initWatch (lack of sessionInfo)");
                          }
                          if (this.watchStatus === WATCH_STATUS.PAUSED) {
                            console.log("[realtime] rebuildWatch cancelled on pause");
                            return [2, resolve()];
                          }
                          this.watchStatus = WATCH_STATUS.REBUILDING;
                          rebuildWatchMsg = {
                            watchId: this.watchId,
                            requestId: genRequestId(),
                            msgType: "REBUILD_WATCH",
                            msgData: {
                              envId,
                              collName: this.collectionName,
                              queryID: this.sessionInfo.queryID,
                              eventID: this.sessionInfo.currentEventId
                            }
                          };
                          return [4, this.send({
                            msg: rebuildWatchMsg,
                            waitResponse: true,
                            skipOnMessage: false,
                            timeout: DEFAULT_REBUILD_WATCH_TIMEOUT
                          })];
                        case 2:
                          nextEventMsg = _a3.sent();
                          this.handleServerEvents(nextEventMsg);
                          this.watchStatus = WATCH_STATUS.ACTIVE;
                          this._availableRetries.REBUILD_WATCH = DEFAULT_MAX_AUTO_RETRY_ON_ERROR;
                          resolve();
                          return [3, 4];
                        case 3:
                          e_2 = _a3.sent();
                          this.handleWatchEstablishmentError(e_2, {
                            operationName: "REBUILD_WATCH",
                            resolve,
                            reject
                          });
                          return [3, 4];
                        case 4:
                          return [2];
                      }
                    });
                  });
                });
                success = false;
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, , 3, 4]);
                return [4, this._rebuildWatchPromise];
              case 2:
                _a2.sent();
                success = true;
                return [3, 4];
              case 3:
                this._rebuildWatchPromise = void 0;
                return [7];
              case 4:
                console.log("[realtime] rebuildWatch ".concat(success ? "success" : "fail"));
                return [2];
            }
          });
        });
      };
      this.handleWatchEstablishmentError = function(e, options2) {
        return __awaiter14(_this, void 0, void 0, function() {
          var isInitWatch, abortWatch, retry;
          var _this2 = this;
          return __generator14(this, function(_a2) {
            isInitWatch = options2.operationName === "INIT_WATCH";
            abortWatch = function() {
              _this2.closeWithError(new CloudSDKError({
                errCode: isInitWatch ? ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL : ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL,
                errMsg: e
              }));
              options2.reject(e);
            };
            retry = function(refreshLogin) {
              if (_this2.useRetryTicket(options2.operationName)) {
                if (isInitWatch) {
                  _this2._initWatchPromise = void 0;
                  options2.resolve(_this2.initWatch(refreshLogin));
                } else {
                  _this2._rebuildWatchPromise = void 0;
                  options2.resolve(_this2.rebuildWatch(refreshLogin));
                }
              } else {
                abortWatch();
              }
            };
            this.handleCommonError(e, {
              onSignError: function() {
                return retry(true);
              },
              onTimeoutError: function() {
                return retry(false);
              },
              onNotRetryableError: abortWatch,
              onCancelledError: options2.reject,
              onUnknownError: function() {
                return __awaiter14(_this2, void 0, void 0, function() {
                  var onWSDisconnected, e_3;
                  var _this3 = this;
                  return __generator14(this, function(_a3) {
                    switch (_a3.label) {
                      case 0:
                        _a3.trys.push([0, 8, , 9]);
                        onWSDisconnected = function() {
                          return __awaiter14(_this3, void 0, void 0, function() {
                            return __generator14(this, function(_a4) {
                              switch (_a4.label) {
                                case 0:
                                  this.pause();
                                  return [4, this.onceWSConnected()];
                                case 1:
                                  _a4.sent();
                                  retry(true);
                                  return [2];
                              }
                            });
                          });
                        };
                        if (!!this.isWSConnected()) return [3, 2];
                        return [4, onWSDisconnected()];
                      case 1:
                        _a3.sent();
                        return [3, 7];
                      case 2:
                        return [4, sleep(DEFAULT_WAIT_TIME_ON_UNKNOWN_ERROR)];
                      case 3:
                        _a3.sent();
                        if (!(this.watchStatus === WATCH_STATUS.PAUSED)) return [3, 4];
                        options2.reject(new CancelledError("".concat(options2.operationName, " cancelled due to pause after unknownError")));
                        return [3, 7];
                      case 4:
                        if (!!this.isWSConnected()) return [3, 6];
                        return [4, onWSDisconnected()];
                      case 5:
                        _a3.sent();
                        return [3, 7];
                      case 6:
                        retry(false);
                        _a3.label = 7;
                      case 7:
                        return [3, 9];
                      case 8:
                        e_3 = _a3.sent();
                        retry(true);
                        return [3, 9];
                      case 9:
                        return [2];
                    }
                  });
                });
              }
            });
            return [2];
          });
        });
      };
      this.closeWatch = function() {
        return __awaiter14(_this, void 0, void 0, function() {
          var queryId, closeWatchMsg, e_4;
          return __generator14(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                queryId = this.sessionInfo ? this.sessionInfo.queryID : "";
                if (this.watchStatus !== WATCH_STATUS.ACTIVE) {
                  this.watchStatus = WATCH_STATUS.CLOSED;
                  this.onWatchClose(this, queryId);
                  return [2];
                }
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, 3, 4, 5]);
                this.watchStatus = WATCH_STATUS.CLOSING;
                closeWatchMsg = {
                  watchId: this.watchId,
                  requestId: genRequestId(),
                  msgType: "CLOSE_WATCH",
                  msgData: null
                };
                return [4, this.send({
                  msg: closeWatchMsg
                })];
              case 2:
                _a2.sent();
                this.sessionInfo = void 0;
                this.watchStatus = WATCH_STATUS.CLOSED;
                return [3, 5];
              case 3:
                e_4 = _a2.sent();
                this.closeWithError(new CloudSDKError({
                  errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL,
                  errMsg: e_4
                }));
                return [3, 5];
              case 4:
                this.onWatchClose(this, queryId);
                return [7];
              case 5:
                return [2];
            }
          });
        });
      };
      this.scheduleSendACK = function() {
        _this.clearACKSchedule();
        _this._ackTimeoutId = setTimeout(function() {
          if (_this._waitExpectedTimeoutId) {
            _this.scheduleSendACK();
          } else {
            _this.sendACK();
          }
        }, DEFAULT_SEND_ACK_DEBOUNCE_TIMEOUT);
      };
      this.clearACKSchedule = function() {
        if (_this._ackTimeoutId) {
          clearTimeout(_this._ackTimeoutId);
        }
      };
      this.sendACK = function() {
        return __awaiter14(_this, void 0, void 0, function() {
          var ackMsg, e_5, msg;
          return __generator14(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 2, , 3]);
                if (this.watchStatus !== WATCH_STATUS.ACTIVE) {
                  this.scheduleSendACK();
                  return [2];
                }
                if (!this.sessionInfo) {
                  console.warn("[realtime listener] can not send ack without a successful initWatch (lack of sessionInfo)");
                  return [2];
                }
                ackMsg = {
                  watchId: this.watchId,
                  requestId: genRequestId(),
                  msgType: "CHECK_LAST",
                  msgData: {
                    queryID: this.sessionInfo.queryID,
                    eventID: this.sessionInfo.currentEventId
                  }
                };
                return [4, this.send({
                  msg: ackMsg
                })];
              case 1:
                _a2.sent();
                this.scheduleSendACK();
                return [3, 3];
              case 2:
                e_5 = _a2.sent();
                if (isRealtimeErrorMessageError(e_5)) {
                  msg = e_5.payload;
                  switch (msg.msgData.code) {
                    case "CHECK_LOGIN_FAILED":
                    case "SIGN_EXPIRED_ERROR":
                    case "SIGN_INVALID_ERROR":
                    case "SIGN_PARAM_INVALID": {
                      this.rebuildWatch();
                      return [2];
                    }
                    case "QUERYID_INVALID_ERROR":
                    case "SYS_ERR":
                    case "INVALIID_ENV":
                    case "COLLECTION_PERMISSION_DENIED": {
                      this.closeWithError(new CloudSDKError({
                        errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL,
                        errMsg: msg.msgData.code
                      }));
                      return [2];
                    }
                    default: {
                      break;
                    }
                  }
                }
                if (this._availableRetries.CHECK_LAST && this._availableRetries.CHECK_LAST > 0) {
                  this._availableRetries.CHECK_LAST--;
                  this.scheduleSendACK();
                } else {
                  this.closeWithError(new CloudSDKError({
                    errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL,
                    errMsg: e_5
                  }));
                }
                return [3, 3];
              case 3:
                return [2];
            }
          });
        });
      };
      this.handleCommonError = function(e, options2) {
        if (isRealtimeErrorMessageError(e)) {
          var msg = e.payload;
          switch (msg.msgData.code) {
            case "CHECK_LOGIN_FAILED":
            case "SIGN_EXPIRED_ERROR":
            case "SIGN_INVALID_ERROR":
            case "SIGN_PARAM_INVALID": {
              options2.onSignError(e);
              return;
            }
            case "QUERYID_INVALID_ERROR":
            case "SYS_ERR":
            case "INVALIID_ENV":
            case "COLLECTION_PERMISSION_DENIED": {
              options2.onNotRetryableError(e);
              return;
            }
            default: {
              options2.onNotRetryableError(e);
              return;
            }
          }
        } else if (isTimeoutError(e)) {
          options2.onTimeoutError(e);
          return;
        } else if (isCancelledError(e)) {
          options2.onCancelledError(e);
          return;
        }
        options2.onUnknownError(e);
      };
      this.watchId = "watchid_".concat(+/* @__PURE__ */ new Date(), "_").concat(Math.random());
      this.envId = options.envId;
      this.collectionName = options.collectionName;
      this.query = options.query;
      this.limit = options.limit;
      this.orderBy = options.orderBy;
      this.send = options.send;
      this.login = options.login;
      this.isWSConnected = options.isWSConnected;
      this.onceWSConnected = options.onceWSConnected;
      this.getWaitExpectedTimeoutLength = options.getWaitExpectedTimeoutLength;
      this.onWatchStart = options.onWatchStart;
      this.onWatchClose = options.onWatchClose;
      this.debug = options.debug;
      this._availableRetries = {
        INIT_WATCH: DEFAULT_MAX_AUTO_RETRY_ON_ERROR,
        REBUILD_WATCH: DEFAULT_MAX_AUTO_RETRY_ON_ERROR,
        CHECK_LAST: DEFAULT_MAX_SEND_ACK_AUTO_RETRY_ON_ERROR
      };
      this.listener = new RealtimeListener({
        close: this.closeWatch,
        onChange: options.onChange,
        onError: options.onError,
        debug: this.debug,
        virtualClient: this
      });
      this.initWatch();
    }
    VirtualWebSocketClient2.prototype.onMessage = function(msg) {
      var _this = this;
      switch (this.watchStatus) {
        case WATCH_STATUS.PAUSED: {
          if (msg.msgType !== "ERROR") {
            return;
          }
          break;
        }
        case WATCH_STATUS.LOGGINGIN:
        case WATCH_STATUS.INITING:
        case WATCH_STATUS.REBUILDING: {
          console.warn("[realtime listener] internal non-fatal error: unexpected message received while ".concat(this.watchStatus));
          return;
        }
        case WATCH_STATUS.CLOSED: {
          console.warn("[realtime listener] internal non-fatal error: unexpected message received when the watch has closed");
          return;
        }
        case WATCH_STATUS.ERRORED: {
          console.warn("[realtime listener] internal non-fatal error: unexpected message received when the watch has ended with error");
          return;
        }
      }
      if (!this.sessionInfo) {
        console.warn("[realtime listener] internal non-fatal error: sessionInfo not found while message is received.");
        return;
      }
      this.scheduleSendACK();
      switch (msg.msgType) {
        case "NEXT_EVENT": {
          console.warn("nextevent ".concat(msg.msgData.currEvent, " ignored"), msg);
          this.handleServerEvents(msg);
          break;
        }
        case "CHECK_EVENT": {
          if (this.sessionInfo.currentEventId < msg.msgData.currEvent) {
            this.sessionInfo.expectEventId = msg.msgData.currEvent;
            this.clearWaitExpectedEvent();
            this._waitExpectedTimeoutId = setTimeout(function() {
              _this.rebuildWatch();
            }, this.getWaitExpectedTimeoutLength());
            console.log("[realtime] waitExpectedTimeoutLength ".concat(this.getWaitExpectedTimeoutLength()));
          }
          break;
        }
        case "ERROR": {
          this.closeWithError(new CloudSDKError({
            errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG,
            errMsg: "".concat(msg.msgData.code, " - ").concat(msg.msgData.message)
          }));
          break;
        }
        default: {
          console.warn("[realtime listener] virtual client receive unexpected msg ".concat(msg.msgType, ": "), msg);
          break;
        }
      }
    };
    VirtualWebSocketClient2.prototype.closeWithError = function(error) {
      var _a2;
      this.watchStatus = WATCH_STATUS.ERRORED;
      this.clearACKSchedule();
      this.listener.onError(error);
      this.onWatchClose(this, ((_a2 = this.sessionInfo) === null || _a2 === void 0 ? void 0 : _a2.queryID) || "");
      console.log("[realtime] client closed (".concat(this.collectionName, " ").concat(this.query, ") (watchId ").concat(this.watchId, ")"));
    };
    VirtualWebSocketClient2.prototype.pause = function() {
      this.watchStatus = WATCH_STATUS.PAUSED;
      console.log("[realtime] client paused (".concat(this.collectionName, " ").concat(this.query, ") (watchId ").concat(this.watchId, ")"));
    };
    VirtualWebSocketClient2.prototype.resume = function() {
      return __awaiter14(this, void 0, void 0, function() {
        var e_6;
        return __generator14(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              this.watchStatus = WATCH_STATUS.RESUMING;
              console.log("[realtime] client resuming with ".concat(this.sessionInfo ? "REBUILD_WATCH" : "INIT_WATCH", " (").concat(this.collectionName, " ").concat(this.query, ") (").concat(this.watchId, ")"));
              _a2.label = 1;
            case 1:
              _a2.trys.push([1, 3, , 4]);
              return [4, this.sessionInfo ? this.rebuildWatch() : this.initWatch()];
            case 2:
              _a2.sent();
              console.log("[realtime] client successfully resumed (".concat(this.collectionName, " ").concat(this.query, ") (").concat(this.watchId, ")"));
              return [3, 4];
            case 3:
              e_6 = _a2.sent();
              console.error("[realtime] client resume failed (".concat(this.collectionName, " ").concat(this.query, ") (").concat(this.watchId, ")"), e_6);
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
    };
    VirtualWebSocketClient2.prototype.useRetryTicket = function(operationName) {
      if (this._availableRetries[operationName] && this._availableRetries[operationName] > 0) {
        this._availableRetries[operationName]--;
        console.log("[realtime] ".concat(operationName, " use a retry ticket, now only ").concat(this._availableRetries[operationName], " retry left"));
        return true;
      }
      return false;
    };
    VirtualWebSocketClient2.prototype.handleServerEvents = function(msg) {
      return __awaiter14(this, void 0, void 0, function() {
        var e_7;
        return __generator14(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              _a2.trys.push([0, 2, , 3]);
              this.scheduleSendACK();
              return [4, this._handleServerEvents(msg)];
            case 1:
              _a2.sent();
              this._postHandleServerEventsValidityCheck(msg);
              return [3, 3];
            case 2:
              e_7 = _a2.sent();
              console.error("[realtime listener] internal non-fatal error: handle server events failed with error: ", e_7);
              throw e_7;
            case 3:
              return [2];
          }
        });
      });
    };
    VirtualWebSocketClient2.prototype._handleServerEvents = function(msg) {
      return __awaiter14(this, void 0, void 0, function() {
        var requestId, events3, msgType, sessionInfo, allChangeEvents, docs, initEncountered, _loop_1, this_1, i2, len2, state_1;
        return __generator14(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              requestId = msg.requestId;
              events3 = msg.msgData.events;
              msgType = msg.msgType;
              if (!events3.length || !this.sessionInfo) {
                return [2];
              }
              sessionInfo = this.sessionInfo;
              try {
                allChangeEvents = events3.map(getPublicEvent);
              } catch (e) {
                this.closeWithError(new CloudSDKError({
                  errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA,
                  errMsg: e
                }));
                return [2];
              }
              docs = __spreadArray2([], sessionInfo.currentDocs, true);
              initEncountered = false;
              _loop_1 = function(i3, len3) {
                var change, localDoc, doc, fieldPath, _i, _b, fieldPath, err, err, doc, doc, err, ind, ind, docsSnapshot, docChanges, snapshot;
                return __generator14(this, function(_c) {
                  switch (_c.label) {
                    case 0:
                      change = allChangeEvents[i3];
                      if (!(sessionInfo.currentEventId >= change.id)) return [3, 1];
                      if (!allChangeEvents[i3 - 1] || change.id > allChangeEvents[i3 - 1].id) {
                        console.warn("[realtime] duplicate event received, cur ".concat(sessionInfo.currentEventId, " but got ").concat(change.id));
                      } else {
                        console.error("[realtime listener] server non-fatal error: events out of order (the latter event's id is smaller than that of the former) (requestId ".concat(requestId, ")"));
                      }
                      return [2, "continue"];
                    case 1:
                      if (!(sessionInfo.currentEventId === change.id - 1)) return [3, 2];
                      switch (change.dataType) {
                        case "update": {
                          if (!change.doc) {
                            switch (change.queueType) {
                              case "update":
                              case "dequeue": {
                                localDoc = docs.find(function(doc2) {
                                  return doc2._id === change.docId;
                                });
                                if (localDoc) {
                                  doc = (0, import_lodash3.default)(localDoc);
                                  if (change.updatedFields) {
                                    for (fieldPath in change.updatedFields) {
                                      (0, import_lodash.default)(doc, fieldPath, change.updatedFields[fieldPath]);
                                    }
                                  }
                                  if (change.removedFields) {
                                    for (_i = 0, _b = change.removedFields; _i < _b.length; _i++) {
                                      fieldPath = _b[_i];
                                      (0, import_lodash2.default)(doc, fieldPath);
                                    }
                                  }
                                  change.doc = doc;
                                } else {
                                  console.error("[realtime listener] internal non-fatal server error: unexpected update dataType event where no doc is associated.");
                                }
                                break;
                              }
                              case "enqueue": {
                                err = new CloudSDKError({
                                  errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                  errMsg: 'HandleServerEvents: full doc is not provided with dataType="update" and queueType="enqueue" (requestId '.concat(msg.requestId, ")")
                                });
                                this_1.closeWithError(err);
                                throw err;
                              }
                              default: {
                                break;
                              }
                            }
                          }
                          break;
                        }
                        case "replace": {
                          if (!change.doc) {
                            err = new CloudSDKError({
                              errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                              errMsg: 'HandleServerEvents: full doc is not provided with dataType="replace" (requestId '.concat(msg.requestId, ")")
                            });
                            this_1.closeWithError(err);
                            throw err;
                          }
                          break;
                        }
                        case "remove": {
                          doc = docs.find(function(doc2) {
                            return doc2._id === change.docId;
                          });
                          if (doc) {
                            change.doc = doc;
                          } else {
                            console.error("[realtime listener] internal non-fatal server error: unexpected remove event where no doc is associated.");
                          }
                          break;
                        }
                        case "limit": {
                          if (!change.doc) {
                            switch (change.queueType) {
                              case "dequeue": {
                                doc = docs.find(function(doc2) {
                                  return doc2._id === change.docId;
                                });
                                if (doc) {
                                  change.doc = doc;
                                } else {
                                  console.error("[realtime listener] internal non-fatal server error: unexpected limit dataType event where no doc is associated.");
                                }
                                break;
                              }
                              case "enqueue": {
                                err = new CloudSDKError({
                                  errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                  errMsg: 'HandleServerEvents: full doc is not provided with dataType="limit" and queueType="enqueue" (requestId '.concat(msg.requestId, ")")
                                });
                                this_1.closeWithError(err);
                                throw err;
                              }
                              default: {
                                break;
                              }
                            }
                          }
                          break;
                        }
                      }
                      switch (change.queueType) {
                        case "init": {
                          if (!initEncountered) {
                            initEncountered = true;
                            docs = [change.doc];
                          } else {
                            docs.push(change.doc);
                          }
                          break;
                        }
                        case "enqueue": {
                          docs.push(change.doc);
                          break;
                        }
                        case "dequeue": {
                          ind = docs.findIndex(function(doc2) {
                            return doc2._id === change.docId;
                          });
                          if (ind > -1) {
                            docs.splice(ind, 1);
                          } else {
                            console.error("[realtime listener] internal non-fatal server error: unexpected dequeue event where no doc is associated.");
                          }
                          break;
                        }
                        case "update": {
                          ind = docs.findIndex(function(doc2) {
                            return doc2._id === change.docId;
                          });
                          if (ind > -1) {
                            docs[ind] = change.doc;
                          } else {
                            console.error("[realtime listener] internal non-fatal server error: unexpected queueType update event where no doc is associated.");
                          }
                          break;
                        }
                      }
                      if (i3 === len3 - 1 || allChangeEvents[i3 + 1] && allChangeEvents[i3 + 1].id !== change.id) {
                        docsSnapshot = __spreadArray2([], docs, true);
                        docChanges = allChangeEvents.slice(0, i3 + 1).filter(function(c) {
                          return c.id === change.id;
                        });
                        this_1.sessionInfo.currentEventId = change.id;
                        this_1.sessionInfo.currentDocs = docs;
                        snapshot = new Snapshot({
                          id: change.id,
                          docChanges,
                          docs: docsSnapshot,
                          msgType
                        });
                        this_1.listener.onChange(snapshot);
                      }
                      return [3, 4];
                    case 2:
                      console.warn("[realtime listener] event received is out of order, cur ".concat(this_1.sessionInfo.currentEventId, " but got ").concat(change.id));
                      return [4, this_1.rebuildWatch()];
                    case 3:
                      _c.sent();
                      return [2, { value: void 0 }];
                    case 4:
                      return [2];
                  }
                });
              };
              this_1 = this;
              i2 = 0, len2 = allChangeEvents.length;
              _a2.label = 1;
            case 1:
              if (!(i2 < len2)) return [3, 4];
              return [5, _loop_1(i2, len2)];
            case 2:
              state_1 = _a2.sent();
              if (typeof state_1 === "object")
                return [2, state_1.value];
              _a2.label = 3;
            case 3:
              i2++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
    };
    VirtualWebSocketClient2.prototype._postHandleServerEventsValidityCheck = function(msg) {
      if (!this.sessionInfo) {
        console.error("[realtime listener] internal non-fatal error: sessionInfo lost after server event handling, this should never occur");
        return;
      }
      if (this.sessionInfo.expectEventId && this.sessionInfo.currentEventId >= this.sessionInfo.expectEventId) {
        this.clearWaitExpectedEvent();
      }
      if (this.sessionInfo.currentEventId < msg.msgData.currEvent) {
        console.warn("[realtime listener] internal non-fatal error: client eventId does not match with server event id after server event handling");
        return;
      }
    };
    VirtualWebSocketClient2.prototype.clearWaitExpectedEvent = function() {
      if (this._waitExpectedTimeoutId) {
        clearTimeout(this._waitExpectedTimeoutId);
        this._waitExpectedTimeoutId = void 0;
      }
    };
    return VirtualWebSocketClient2;
  })();
  function getPublicEvent(event) {
    var e = {
      id: event.ID,
      dataType: event.DataType,
      queueType: event.QueueType,
      docId: event.DocID,
      doc: event.Doc && event.Doc !== "{}" ? JSON.parse(event.Doc) : void 0
    };
    if (event.DataType === "update") {
      if (event.UpdatedFields) {
        e.updatedFields = JSON.parse(event.UpdatedFields);
      }
      if (event.removedFields || event.RemovedFields) {
        e.removedFields = JSON.parse(event.removedFields);
      }
    }
    return e;
  }

  // node_modules/@cloudbase/realtime/dist/esm/ws-event.js
  var CLOSE_EVENT_CODE_INFO = {
    1e3: {
      code: 1e3,
      name: "Normal Closure",
      description: "Normal closure; the connection successfully completed whatever purpose for which it was created."
    },
    1001: {
      code: 1001,
      name: "Going Away",
      description: "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection."
    },
    1002: {
      code: 1002,
      name: "Protocol Error",
      description: "The endpoint is terminating the connection due to a protocol error."
    },
    1003: {
      code: 1003,
      name: "Unsupported Data",
      description: "The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data)."
    },
    1005: {
      code: 1005,
      name: "No Status Received",
      description: "Indicates that no status code was provided even though one was expected."
    },
    1006: {
      code: 1006,
      name: "Abnormal Closure",
      description: "Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected."
    },
    1007: {
      code: 1007,
      name: "Invalid frame payload data",
      description: "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message)."
    },
    1008: {
      code: 1008,
      name: "Policy Violation",
      description: "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable."
    },
    1009: {
      code: 1009,
      name: "Message too big",
      description: "The endpoint is terminating the connection because a data frame was received that is too large."
    },
    1010: {
      code: 1010,
      name: "Missing Extension",
      description: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
    },
    1011: {
      code: 1011,
      name: "Internal Error",
      description: "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."
    },
    1012: {
      code: 1012,
      name: "Service Restart",
      description: "The server is terminating the connection because it is restarting."
    },
    1013: {
      code: 1013,
      name: "Try Again Later",
      description: "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients."
    },
    1014: {
      code: 1014,
      name: "Bad Gateway",
      description: "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code."
    },
    1015: {
      code: 1015,
      name: "TLS Handshake",
      description: "Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
    },
    3e3: {
      code: 3e3,
      name: "Reconnect WebSocket",
      description: "The client is terminating the connection because it wants to reconnect"
    },
    3001: {
      code: 3001,
      name: "No Realtime Listeners",
      description: "The client is terminating the connection because no more realtime listeners exist"
    },
    3002: {
      code: 3002,
      name: "Heartbeat Ping Error",
      description: "The client is terminating the connection due to its failure in sending heartbeat messages"
    },
    3003: {
      code: 3003,
      name: "Heartbeat Pong Timeout Error",
      description: "The client is terminating the connection because no heartbeat response is received from the server"
    },
    3050: {
      code: 3050,
      name: "Server Close",
      description: "The client is terminating the connection because no heartbeat response is received from the server"
    }
  };
  var CLOSE_EVENT_CODE;
  (function(CLOSE_EVENT_CODE2) {
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["NormalClosure"] = 1e3] = "NormalClosure";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["GoingAway"] = 1001] = "GoingAway";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["ProtocolError"] = 1002] = "ProtocolError";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["UnsupportedData"] = 1003] = "UnsupportedData";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["NoStatusReceived"] = 1005] = "NoStatusReceived";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["AbnormalClosure"] = 1006] = "AbnormalClosure";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["InvalidFramePayloadData"] = 1007] = "InvalidFramePayloadData";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["PolicyViolation"] = 1008] = "PolicyViolation";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["MessageTooBig"] = 1009] = "MessageTooBig";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["MissingExtension"] = 1010] = "MissingExtension";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["InternalError"] = 1011] = "InternalError";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["ServiceRestart"] = 1012] = "ServiceRestart";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["TryAgainLater"] = 1013] = "TryAgainLater";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["BadGateway"] = 1014] = "BadGateway";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["TLSHandshake"] = 1015] = "TLSHandshake";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["ReconnectWebSocket"] = 3e3] = "ReconnectWebSocket";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["NoRealtimeListeners"] = 3001] = "NoRealtimeListeners";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["HeartbeatPingError"] = 3002] = "HeartbeatPingError";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["HeartbeatPongTimeoutError"] = 3003] = "HeartbeatPongTimeoutError";
    CLOSE_EVENT_CODE2[CLOSE_EVENT_CODE2["NoAuthentication"] = 3050] = "NoAuthentication";
  })(CLOSE_EVENT_CODE || (CLOSE_EVENT_CODE = {}));
  var getWSCloseError = function(code2, reason) {
    var info = CLOSE_EVENT_CODE_INFO[code2];
    var errMsg = !info ? "code ".concat(code2) : "".concat(info.name, ", code ").concat(code2, ", reason ").concat(reason || info.description);
    return new CloudSDKError({
      errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED,
      errMsg
    });
  };

  // node_modules/@cloudbase/realtime/dist/esm/common.js
  var wsClass = null;
  var runtime = "web";
  function getWsClass() {
    return wsClass;
  }
  function setWsClass(val) {
    wsClass = val;
  }
  function getRuntime() {
    return runtime;
  }
  function setRuntime(val) {
    runtime = val;
  }

  // node_modules/@cloudbase/realtime/dist/esm/websocket-client.js
  var __assign6 = function() {
    __assign6 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign6.apply(this, arguments);
  };
  var __awaiter15 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator15 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var WS_READY_STATE = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
  };
  var MAX_RTT_OBSERVED = 3;
  var DEFAULT_EXPECTED_EVENT_WAIT_TIME = 5e3;
  var DEFAULT_UNTRUSTED_RTT_THRESHOLD = 1e4;
  var DEFAULT_MAX_RECONNECT = 5;
  var DEFAULT_WS_RECONNECT_INTERVAL = 1e4;
  var DEFAULT_PING_FAIL_TOLERANCE = 2;
  var DEFAULT_PONG_MISS_TOLERANCE = 2;
  var DEFAULT_LOGIN_TIMEOUT = 5e3;
  var RealtimeWebSocketClient = (function() {
    function RealtimeWebSocketClient2(options) {
      var _this = this;
      this._virtualWSClient = /* @__PURE__ */ new Set();
      this._queryIdClientMap = /* @__PURE__ */ new Map();
      this._watchIdClientMap = /* @__PURE__ */ new Map();
      this._pingFailed = 0;
      this._pongMissed = 0;
      this._logins = /* @__PURE__ */ new Map();
      this._wsReadySubsribers = [];
      this._wsResponseWait = /* @__PURE__ */ new Map();
      this._rttObserved = [];
      this.send = function(opts) {
        return __awaiter15(_this, void 0, void 0, function() {
          var _this2 = this;
          return __generator15(this, function(_a2) {
            return [2, new Promise(function(_resolve, _reject) {
              return __awaiter15(_this2, void 0, void 0, function() {
                var timeoutId, _hasResolved, _hasRejected, resolve, reject, err_1, e_1;
                var _this3 = this;
                return __generator15(this, function(_a3) {
                  switch (_a3.label) {
                    case 0:
                      _hasResolved = false;
                      _hasRejected = false;
                      resolve = function(value) {
                        _hasResolved = true;
                        timeoutId && clearTimeout(timeoutId);
                        _resolve(value);
                      };
                      reject = function(error) {
                        _hasRejected = true;
                        timeoutId && clearTimeout(timeoutId);
                        _reject(error);
                      };
                      if (opts.timeout) {
                        timeoutId = setTimeout(function() {
                          return __awaiter15(_this3, void 0, void 0, function() {
                            return __generator15(this, function(_a4) {
                              switch (_a4.label) {
                                case 0:
                                  if (!(!_hasResolved || !_hasRejected)) return [3, 2];
                                  return [4, sleep(0)];
                                case 1:
                                  _a4.sent();
                                  if (!_hasResolved || !_hasRejected) {
                                    reject(new TimeoutError("wsclient.send timedout"));
                                  }
                                  _a4.label = 2;
                                case 2:
                                  return [2];
                              }
                            });
                          });
                        }, opts.timeout);
                      }
                      _a3.label = 1;
                    case 1:
                      _a3.trys.push([1, 8, , 9]);
                      if (!this._wsInitPromise) return [3, 3];
                      return [4, this._wsInitPromise];
                    case 2:
                      _a3.sent();
                      _a3.label = 3;
                    case 3:
                      if (!this._ws) {
                        reject(new Error("invalid state: ws connection not exists, can not send message"));
                        return [2];
                      }
                      if (this._ws.readyState !== WS_READY_STATE.OPEN) {
                        reject(new Error("ws readyState invalid: ".concat(this._ws.readyState, ", can not send message")));
                        return [2];
                      }
                      if (opts.waitResponse) {
                        this._wsResponseWait.set(opts.msg.requestId, {
                          resolve,
                          reject,
                          skipOnMessage: opts.skipOnMessage
                        });
                      }
                      _a3.label = 4;
                    case 4:
                      _a3.trys.push([4, 6, , 7]);
                      return [4, this._ws.send(JSON.stringify(opts.msg))];
                    case 5:
                      _a3.sent();
                      if (!opts.waitResponse) {
                        resolve(void 0);
                      }
                      return [3, 7];
                    case 6:
                      err_1 = _a3.sent();
                      if (err_1) {
                        reject(err_1);
                        if (opts.waitResponse) {
                          this._wsResponseWait.delete(opts.msg.requestId);
                        }
                      }
                      return [3, 7];
                    case 7:
                      return [3, 9];
                    case 8:
                      e_1 = _a3.sent();
                      reject(e_1);
                      return [3, 9];
                    case 9:
                      return [2];
                  }
                });
              });
            })];
          });
        });
      };
      this.closeAllClients = function(error) {
        _this._virtualWSClient.forEach(function(client) {
          client.closeWithError(error);
        });
      };
      this.pauseClients = function(clients) {
        (clients || _this._virtualWSClient).forEach(function(client) {
          client.pause();
        });
      };
      this.resumeClients = function(clients) {
        (clients || _this._virtualWSClient).forEach(function(client) {
          client.resume();
        });
      };
      this.initWebSocketConnection = function(reconnect, availableRetries) {
        if (availableRetries === void 0) {
          availableRetries = _this._maxReconnect;
        }
        return __awaiter15(_this, void 0, void 0, function() {
          var e_2;
          var _this2 = this;
          return __generator15(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (reconnect && this._reconnectState) {
                  return [2];
                }
                if (reconnect) {
                  this._reconnectState = true;
                }
                if (this._wsInitPromise) {
                  return [2, this._wsInitPromise];
                }
                if (reconnect) {
                  this.pauseClients();
                }
                this.close(CLOSE_EVENT_CODE.ReconnectWebSocket);
                this._wsInitPromise = new Promise(function(resolve, reject) {
                  return __awaiter15(_this2, void 0, void 0, function() {
                    var wsSign_1, e_3, isConnected;
                    var _this3 = this;
                    return __generator15(this, function(_a3) {
                      switch (_a3.label) {
                        case 0:
                          _a3.trys.push([0, 6, , 11]);
                          return [4, this.getWsSign()];
                        case 1:
                          wsSign_1 = _a3.sent();
                          return [4, new Promise(function(success) {
                            var url = wsSign_1.wsUrl || "wss://tcb-ws.tencentcloudapi.com";
                            var wsClass2 = getWsClass();
                            _this3._ws = wsClass2 ? new wsClass2(url) : new WebSocket(url);
                            success(void 0);
                          })];
                        case 2:
                          _a3.sent();
                          if (!this._ws.connect) return [3, 4];
                          return [4, this._ws.connect()];
                        case 3:
                          _a3.sent();
                          _a3.label = 4;
                        case 4:
                          return [4, this.initWebSocketEvent()];
                        case 5:
                          _a3.sent();
                          resolve();
                          if (reconnect) {
                            this.resumeClients();
                            this._reconnectState = false;
                          }
                          return [3, 11];
                        case 6:
                          e_3 = _a3.sent();
                          console.error("[realtime] initWebSocketConnection connect fail", e_3);
                          if (!(availableRetries > 0)) return [3, 9];
                          isConnected = true;
                          this._wsInitPromise = void 0;
                          if (!isConnected) return [3, 8];
                          return [4, sleep(this._reconnectInterval)];
                        case 7:
                          _a3.sent();
                          if (reconnect) {
                            this._reconnectState = false;
                          }
                          _a3.label = 8;
                        case 8:
                          resolve(this.initWebSocketConnection(reconnect, availableRetries - 1));
                          return [3, 10];
                        case 9:
                          reject(e_3);
                          if (reconnect) {
                            this.closeAllClients(new CloudSDKError({
                              errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL,
                              errMsg: e_3
                            }));
                          }
                          _a3.label = 10;
                        case 10:
                          return [3, 11];
                        case 11:
                          return [2];
                      }
                    });
                  });
                });
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, 3, 4, 5]);
                return [4, this._wsInitPromise];
              case 2:
                _a2.sent();
                this._wsReadySubsribers.forEach(function(_a3) {
                  var resolve = _a3.resolve;
                  return resolve();
                });
                return [3, 5];
              case 3:
                e_2 = _a2.sent();
                this._wsReadySubsribers.forEach(function(_a3) {
                  var reject = _a3.reject;
                  return reject();
                });
                return [3, 5];
              case 4:
                this._wsInitPromise = void 0;
                this._wsReadySubsribers = [];
                return [7];
              case 5:
                return [2];
            }
          });
        });
      };
      this.initWebSocketEvent = function() {
        return new Promise(function(resolve, reject) {
          if (!_this._ws) {
            throw new Error("can not initWebSocketEvent, ws not exists");
          }
          var wsOpened = false;
          _this._ws.onopen = function(event) {
            console.warn("[realtime] ws event: open", event);
            wsOpened = true;
            resolve();
          };
          _this._ws.onerror = function(event) {
            _this._logins = /* @__PURE__ */ new Map();
            if (!wsOpened) {
              console.error("[realtime] ws open failed with ws event: error", event);
              reject(event);
            } else {
              console.error("[realtime] ws event: error", event);
              _this.clearHeartbeat();
              _this._virtualWSClient.forEach(function(client) {
                return client.closeWithError(new CloudSDKError({
                  errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR,
                  errMsg: event
                }));
              });
            }
          };
          _this._ws.onclose = function(closeEvent) {
            console.warn("[realtime] ws event: close", closeEvent);
            _this._logins = /* @__PURE__ */ new Map();
            _this.clearHeartbeat();
            switch (closeEvent.code) {
              case CLOSE_EVENT_CODE.ReconnectWebSocket: {
                break;
              }
              case CLOSE_EVENT_CODE.NoRealtimeListeners: {
                break;
              }
              case CLOSE_EVENT_CODE.HeartbeatPingError:
              case CLOSE_EVENT_CODE.HeartbeatPongTimeoutError:
              case CLOSE_EVENT_CODE.NormalClosure:
              case CLOSE_EVENT_CODE.AbnormalClosure: {
                if (_this._maxReconnect > 0) {
                  _this.initWebSocketConnection(true, _this._maxReconnect);
                } else {
                  _this.closeAllClients(getWSCloseError(closeEvent.code));
                }
                break;
              }
              case CLOSE_EVENT_CODE.NoAuthentication: {
                _this.closeAllClients(getWSCloseError(closeEvent.code, closeEvent.reason));
                break;
              }
              default: {
                if (_this._maxReconnect > 0) {
                  _this.initWebSocketConnection(true, _this._maxReconnect);
                } else {
                  _this.closeAllClients(getWSCloseError(closeEvent.code));
                }
              }
            }
          };
          _this._ws.onmessage = function(res) {
            var rawMsg = res.data;
            _this.heartbeat();
            var msg;
            try {
              msg = JSON.parse(rawMsg);
            } catch (e) {
              throw new Error("[realtime] onMessage parse res.data error: ".concat(e));
            }
            if (msg.msgType === "ERROR") {
              var virtualWatch_1 = null;
              _this._virtualWSClient.forEach(function(item) {
                if (item.watchId === msg.watchId) {
                  virtualWatch_1 = item;
                }
              });
              if (virtualWatch_1) {
                virtualWatch_1.listener.onError(msg);
              }
            }
            var responseWaitSpec = _this._wsResponseWait.get(msg.requestId);
            if (responseWaitSpec) {
              try {
                if (msg.msgType === "ERROR") {
                  responseWaitSpec.reject(new RealtimeErrorMessageError(msg));
                } else {
                  responseWaitSpec.resolve(msg);
                }
              } catch (e) {
                console.error("ws onMessage responseWaitSpec.resolve(msg) errored:", e);
              } finally {
                _this._wsResponseWait.delete(msg.requestId);
              }
              if (responseWaitSpec.skipOnMessage) {
                return;
              }
            }
            if (msg.msgType === "PONG") {
              if (_this._lastPingSendTS) {
                var rtt = Date.now() - _this._lastPingSendTS;
                if (rtt > DEFAULT_UNTRUSTED_RTT_THRESHOLD) {
                  console.warn("[realtime] untrusted rtt observed: ".concat(rtt));
                  return;
                }
                if (_this._rttObserved.length >= MAX_RTT_OBSERVED) {
                  _this._rttObserved.splice(0, _this._rttObserved.length - MAX_RTT_OBSERVED + 1);
                }
                _this._rttObserved.push(rtt);
              }
              return;
            }
            var client = msg.watchId && _this._watchIdClientMap.get(msg.watchId);
            if (client) {
              client.onMessage(msg);
            } else {
              console.error("[realtime] no realtime listener found responsible for watchId ".concat(msg.watchId, ": "), msg);
              switch (msg.msgType) {
                case "INIT_EVENT":
                case "NEXT_EVENT":
                case "CHECK_EVENT": {
                  client = _this._queryIdClientMap.get(msg.msgData.queryID);
                  if (client) {
                    client.onMessage(msg);
                  }
                  break;
                }
                default: {
                  for (var _i = 0, _a2 = Array.from(_this._watchIdClientMap.entries()); _i < _a2.length; _i++) {
                    var _b = _a2[_i], client_1 = _b[1];
                    client_1.onMessage(msg);
                    break;
                  }
                }
              }
            }
          };
          _this.heartbeat();
        });
      };
      this.isWSConnected = function() {
        return Boolean(_this._ws && _this._ws.readyState === WS_READY_STATE.OPEN);
      };
      this.onceWSConnected = function() {
        return __awaiter15(_this, void 0, void 0, function() {
          var _this2 = this;
          return __generator15(this, function(_a2) {
            if (this.isWSConnected()) {
              return [2];
            }
            if (this._wsInitPromise) {
              return [2, this._wsInitPromise];
            }
            return [2, new Promise(function(resolve, reject) {
              _this2._wsReadySubsribers.push({
                resolve,
                reject
              });
            })];
          });
        });
      };
      this.webLogin = function(envId, refresh) {
        return __awaiter15(_this, void 0, void 0, function() {
          var loginInfo_1, emptyEnvLoginInfo, promise, loginInfo, loginStartTS, loginResult, curLoginInfo, e_4;
          var _this2 = this;
          return __generator15(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (!refresh) {
                  if (envId) {
                    loginInfo_1 = this._logins.get(envId);
                    if (loginInfo_1) {
                      if (loginInfo_1.loggedIn && loginInfo_1.loginResult) {
                        return [2, loginInfo_1.loginResult];
                      }
                      if (loginInfo_1.loggingInPromise) {
                        return [2, loginInfo_1.loggingInPromise];
                      }
                    }
                  } else {
                    emptyEnvLoginInfo = this._logins.get("");
                    if (emptyEnvLoginInfo === null || emptyEnvLoginInfo === void 0 ? void 0 : emptyEnvLoginInfo.loggingInPromise) {
                      return [2, emptyEnvLoginInfo.loggingInPromise];
                    }
                  }
                }
                promise = new Promise(function(resolve, reject) {
                  return __awaiter15(_this2, void 0, void 0, function() {
                    var wsSign, msgData, loginMsg, loginResMsg, e_5;
                    return __generator15(this, function(_a3) {
                      switch (_a3.label) {
                        case 0:
                          _a3.trys.push([0, 3, , 4]);
                          return [4, this.getWsSign()];
                        case 1:
                          wsSign = _a3.sent();
                          msgData = {
                            envId: wsSign.envId || "",
                            accessToken: "",
                            referrer: "web",
                            sdkVersion: "",
                            dataVersion: ""
                          };
                          loginMsg = {
                            watchId: void 0,
                            requestId: genRequestId(),
                            msgType: "LOGIN",
                            msgData,
                            exMsgData: {
                              runtime: getRuntime(),
                              signStr: wsSign.signStr,
                              secretVersion: wsSign.secretVersion
                            }
                          };
                          return [4, this.send({
                            msg: loginMsg,
                            waitResponse: true,
                            skipOnMessage: true,
                            timeout: DEFAULT_LOGIN_TIMEOUT
                          })];
                        case 2:
                          loginResMsg = _a3.sent();
                          if (!loginResMsg.msgData.code) {
                            resolve({
                              envId: wsSign.envId
                            });
                          } else {
                            reject(new Error("".concat(loginResMsg.msgData.code, " ").concat(loginResMsg.msgData.message)));
                          }
                          return [3, 4];
                        case 3:
                          e_5 = _a3.sent();
                          reject(e_5);
                          return [3, 4];
                        case 4:
                          return [2];
                      }
                    });
                  });
                });
                loginInfo = envId && this._logins.get(envId);
                loginStartTS = Date.now();
                if (loginInfo) {
                  loginInfo.loggedIn = false;
                  loginInfo.loggingInPromise = promise;
                  loginInfo.loginStartTS = loginStartTS;
                } else {
                  loginInfo = {
                    loggedIn: false,
                    loggingInPromise: promise,
                    loginStartTS
                  };
                  this._logins.set(envId || "", loginInfo);
                }
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, 3, , 4]);
                return [4, promise];
              case 2:
                loginResult = _a2.sent();
                curLoginInfo = envId && this._logins.get(envId);
                if (curLoginInfo && curLoginInfo === loginInfo && curLoginInfo.loginStartTS === loginStartTS) {
                  loginInfo.loggedIn = true;
                  loginInfo.loggingInPromise = void 0;
                  loginInfo.loginStartTS = void 0;
                  loginInfo.loginResult = loginResult;
                  return [2, loginResult];
                }
                if (curLoginInfo) {
                  if (curLoginInfo.loggedIn && curLoginInfo.loginResult) {
                    return [2, curLoginInfo.loginResult];
                  }
                  if (curLoginInfo.loggingInPromise) {
                    return [2, curLoginInfo.loggingInPromise];
                  }
                  throw new Error("ws unexpected login info");
                } else {
                  throw new Error("ws login info reset");
                }
                return [3, 4];
              case 3:
                e_4 = _a2.sent();
                loginInfo.loggedIn = false;
                loginInfo.loggingInPromise = void 0;
                loginInfo.loginStartTS = void 0;
                loginInfo.loginResult = void 0;
                throw e_4;
              case 4:
                return [2];
            }
          });
        });
      };
      this.getWsSign = function() {
        return __awaiter15(_this, void 0, void 0, function() {
          var expiredTs, res, _a2, signStr, wsUrl, secretVersion, envId;
          return __generator15(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (this._wsSign && this._wsSign.expiredTs > Date.now()) {
                  return [2, this._wsSign];
                }
                expiredTs = Date.now() + 6e4;
                return [4, this._context.appConfig.request.send("auth.wsWebSign", { runtime: getRuntime() })];
              case 1:
                res = _b.sent();
                if (res.code) {
                  throw new Error("[tcb-js-sdk] \u83B7\u53D6\u5B9E\u65F6\u6570\u636E\u63A8\u9001\u767B\u5F55\u7968\u636E\u5931\u8D25: ".concat(res.code));
                }
                if (res.data) {
                  _a2 = res.data, signStr = _a2.signStr, wsUrl = _a2.wsUrl, secretVersion = _a2.secretVersion, envId = _a2.envId;
                  return [2, {
                    signStr,
                    wsUrl,
                    secretVersion,
                    envId,
                    expiredTs
                  }];
                }
                throw new Error("[tcb-js-sdk] \u83B7\u53D6\u5B9E\u65F6\u6570\u636E\u63A8\u9001\u767B\u5F55\u7968\u636E\u5931\u8D25");
            }
          });
        });
      };
      this.getWaitExpectedTimeoutLength = function() {
        if (!_this._rttObserved.length) {
          return DEFAULT_EXPECTED_EVENT_WAIT_TIME;
        }
        return _this._rttObserved.reduce(function(acc, cur) {
          return acc + cur;
        }) / _this._rttObserved.length * 1.5;
      };
      this.ping = function() {
        return __awaiter15(_this, void 0, void 0, function() {
          var msg;
          return __generator15(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                msg = {
                  watchId: void 0,
                  requestId: genRequestId(),
                  msgType: "PING",
                  msgData: null
                };
                return [4, this.send({
                  msg
                })];
              case 1:
                _a2.sent();
                return [2];
            }
          });
        });
      };
      this.onWatchStart = function(client, queryID) {
        _this._queryIdClientMap.set(queryID, client);
      };
      this.onWatchClose = function(client, queryID) {
        if (queryID) {
          _this._queryIdClientMap.delete(queryID);
        }
        _this._watchIdClientMap.delete(client.watchId);
        _this._virtualWSClient.delete(client);
        if (!_this._virtualWSClient.size) {
          _this.close(CLOSE_EVENT_CODE.NoRealtimeListeners);
        }
      };
      this._maxReconnect = options.maxReconnect || DEFAULT_MAX_RECONNECT;
      this._reconnectInterval = options.reconnectInterval || DEFAULT_WS_RECONNECT_INTERVAL;
      this._context = options.context;
    }
    RealtimeWebSocketClient2.prototype.clearHeartbeat = function() {
      this._pingTimeoutId && clearTimeout(this._pingTimeoutId);
      this._pongTimeoutId && clearTimeout(this._pongTimeoutId);
    };
    RealtimeWebSocketClient2.prototype.close = function(code2) {
      this.clearHeartbeat();
      if (this._ws) {
        this._ws.close(code2, CLOSE_EVENT_CODE_INFO[code2].name);
        this._ws = void 0;
      }
    };
    RealtimeWebSocketClient2.prototype.watch = function(options) {
      if (!this._ws && !this._wsInitPromise) {
        this.initWebSocketConnection(false);
      }
      var virtualClient = new VirtualWebSocketClient(__assign6(__assign6({}, options), { send: this.send, login: this.webLogin, isWSConnected: this.isWSConnected, onceWSConnected: this.onceWSConnected, getWaitExpectedTimeoutLength: this.getWaitExpectedTimeoutLength, onWatchStart: this.onWatchStart, onWatchClose: this.onWatchClose, debug: true }));
      this._virtualWSClient.add(virtualClient);
      this._watchIdClientMap.set(virtualClient.watchId, virtualClient);
      return virtualClient.listener;
    };
    RealtimeWebSocketClient2.prototype.heartbeat = function(immediate) {
      var _this = this;
      this.clearHeartbeat();
      this._pingTimeoutId = setTimeout(function() {
        return __awaiter15(_this, void 0, void 0, function() {
          var e_6;
          var _this2 = this;
          return __generator15(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 2, , 3]);
                if (!this._ws || this._ws.readyState !== WS_READY_STATE.OPEN) {
                  return [2];
                }
                this._lastPingSendTS = Date.now();
                return [4, this.ping()];
              case 1:
                _a2.sent();
                this._pingFailed = 0;
                this._pongTimeoutId = setTimeout(function() {
                  console.error("pong timed out");
                  if (_this2._pongMissed < DEFAULT_PONG_MISS_TOLERANCE) {
                    _this2._pongMissed++;
                    _this2.heartbeat(true);
                  } else {
                    _this2.initWebSocketConnection(true);
                  }
                }, this._context.appConfig.realtimePongWaitTimeout);
                return [3, 3];
              case 2:
                e_6 = _a2.sent();
                if (this._pingFailed < DEFAULT_PING_FAIL_TOLERANCE) {
                  this._pingFailed++;
                  this.heartbeat();
                } else {
                  this.close(CLOSE_EVENT_CODE.HeartbeatPingError);
                }
                return [3, 3];
              case 3:
                return [2];
            }
          });
        });
      }, immediate ? 0 : this._context.appConfig.realtimePingInterval);
    };
    return RealtimeWebSocketClient2;
  })();

  // node_modules/@cloudbase/realtime/dist/esm/index.js
  var hook = {
    target: "database",
    entity: function() {
      var _a2 = this.platform, adapter2 = _a2.adapter, runtime2 = _a2.runtime;
      setWsClass(adapter2.wsClass);
      setRuntime(runtime2);
    }
  };
  var component4 = {
    name: "realtime",
    IIFE: true,
    entity: function() {
      this.prototype.wsClientClass = RealtimeWebSocketClient;
    }
  };
  try {
    cloudbase.registerComponent(component4);
    cloudbase.registerHook(hook);
  } catch (e) {
  }
  function registerRealtime(app) {
    try {
      app.registerComponent(component4);
      app.registerHook(hook);
    } catch (e) {
      console.warn(e);
    }
  }

  // node_modules/@cloudbase/analytics/dist/esm/index.js
  var import_utilities15 = __toESM(require_dist());
  var __decorate11 = function(decorators, target, key2, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
    else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
    return c > 3 && r && Object.defineProperty(target, key2, r), r;
  };
  var __metadata11 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  var __awaiter16 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator16 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
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
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var ERRORS13 = import_utilities15.constants.ERRORS;
  var COMMUNITY_SITE_URL11 = import_utilities15.constants.COMMUNITY_SITE_URL;
  var catchErrorsDecorator11 = import_utilities15.helpers.catchErrorsDecorator;
  var COMPONENT_NAME4 = "analytics";
  var reportTypes = ["mall"];
  function validateAnalyticsData(data) {
    if (Object.prototype.toString.call(data).slice(8, -1) !== "Object") {
      return false;
    }
    var report_data = data.report_data, report_type = data.report_type;
    if (reportTypes.includes(report_type) === false) {
      return false;
    }
    if (Object.prototype.toString.call(report_data).slice(8, -1) !== "Object") {
      return false;
    }
    if (report_data.action_time !== void 0 && !Number.isInteger(report_data.action_time)) {
      return false;
    }
    if (typeof report_data.action_type !== "string") {
      return false;
    }
    return true;
  }
  var CloudbaseAnalytics = (function() {
    function CloudbaseAnalytics2() {
    }
    CloudbaseAnalytics2.prototype.analytics = function(requestData) {
      return __awaiter16(this, void 0, void 0, function() {
        var action, action_time, transformData, params, request;
        return __generator16(this, function(_a2) {
          if (!validateAnalyticsData(requestData)) {
            throw new Error(JSON.stringify({
              code: ERRORS13.INVALID_PARAMS,
              msg: "[".concat(COMPONENT_NAME4, ".analytics] invalid report data")
            }));
          }
          action = "analytics.report";
          action_time = requestData.report_data.action_time === void 0 ? Math.floor(Date.now() / 1e3) : requestData.report_data.action_time;
          transformData = {
            analytics_scene: requestData.report_type,
            analytics_data: Object.assign({}, requestData.report_data, {
              action_time
            })
          };
          params = {
            requestData: transformData
          };
          request = this.request;
          request.send(action, params);
          return [2];
        });
      });
    };
    __decorate11([
      catchErrorsDecorator11({
        customInfo: {
          className: "Cloudbase",
          methodName: "analytics"
        },
        title: "\u4E0A\u62A5\u8C03\u7528\u5931\u8D25",
        messages: [
          "\u8BF7\u786E\u8BA4\u4EE5\u4E0B\u5404\u9879\uFF1A",
          "  1 - \u8C03\u7528 analytics() \u7684\u8BED\u6CD5\u6216\u53C2\u6570\u662F\u5426\u6B63\u786E",
          "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A".concat(COMMUNITY_SITE_URL11)
        ]
      }),
      __metadata11("design:type", Function),
      __metadata11("design:paramtypes", [Object]),
      __metadata11("design:returntype", Promise)
    ], CloudbaseAnalytics2.prototype, "analytics", null);
    return CloudbaseAnalytics2;
  })();
  var cloudbaseAnalytics = new CloudbaseAnalytics();
  var component5 = {
    name: COMPONENT_NAME4,
    entity: {
      analytics: cloudbaseAnalytics.analytics
    }
  };
  try {
    cloudbase.registerComponent(component5);
  } catch (e) {
  }
  function registerAnalytics(app) {
    try {
      app.registerComponent(component5);
    } catch (e) {
      console.warn(e);
    }
  }

  // node_modules/@cloudbase/database/dist/esm/geo/index.js
  var geo_exports = {};
  __export(geo_exports, {
    LineString: () => LineString,
    MultiLineString: () => MultiLineString,
    MultiPoint: () => MultiPoint,
    MultiPolygon: () => MultiPolygon,
    Point: () => Point,
    Polygon: () => Polygon
  });

  // node_modules/@cloudbase/database/dist/esm/constant.js
  var _a;
  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2["DocIDError"] = "\u6587\u6863ID\u4E0D\u5408\u6CD5";
    ErrorCode2["CollNameError"] = "\u96C6\u5408\u540D\u79F0\u4E0D\u5408\u6CD5";
    ErrorCode2["OpStrError"] = "\u64CD\u4F5C\u7B26\u4E0D\u5408\u6CD5";
    ErrorCode2["DirectionError"] = "\u6392\u5E8F\u5B57\u7B26\u4E0D\u5408\u6CD5";
    ErrorCode2["IntergerError"] = "must be integer";
    ErrorCode2["QueryParamTypeError"] = "\u67E5\u8BE2\u53C2\u6570\u5FC5\u987B\u4E3A\u5BF9\u8C61";
    ErrorCode2["QueryParamValueError"] = "\u67E5\u8BE2\u53C2\u6570\u5BF9\u8C61\u503C\u4E0D\u80FD\u5747\u4E3Aundefined";
  })(ErrorCode || (ErrorCode = {}));
  var FieldType = {
    String: "String",
    Number: "Number",
    Object: "Object",
    Array: "Array",
    Boolean: "Boolean",
    Null: "Null",
    GeoPoint: "GeoPoint",
    GeoLineString: "GeoLineString",
    GeoPolygon: "GeoPolygon",
    GeoMultiPoint: "GeoMultiPoint",
    GeoMultiLineString: "GeoMultiLineString",
    GeoMultiPolygon: "GeoMultiPolygon",
    Timestamp: "Date",
    Command: "Command",
    ServerDate: "ServerDate",
    BsonDate: "BsonDate"
  };
  var OrderDirectionList = ["desc", "asc"];
  var WhereFilterOpList = ["<", "<=", "==", ">=", ">"];
  var Opeartor;
  (function(Opeartor2) {
    Opeartor2["lt"] = "<";
    Opeartor2["gt"] = ">";
    Opeartor2["lte"] = "<=";
    Opeartor2["gte"] = ">=";
    Opeartor2["eq"] = "==";
  })(Opeartor || (Opeartor = {}));
  var OperatorMap = (_a = {}, _a[Opeartor.eq] = "$eq", _a[Opeartor.lt] = "$lt", _a[Opeartor.lte] = "$lte", _a[Opeartor.gt] = "$gt", _a[Opeartor.gte] = "$gte", _a);
  var QueryType;
  (function(QueryType2) {
    QueryType2["WHERE"] = "WHERE";
    QueryType2["DOC"] = "DOC";
  })(QueryType || (QueryType = {}));

  // node_modules/@cloudbase/database/dist/esm/utils/symbol.js
  var __extends9 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var _symbols = [];
  var __internalMark__ = {};
  var HiddenSymbol = /* @__PURE__ */ (function() {
    function HiddenSymbol2(target) {
      Object.defineProperties(this, {
        target: {
          enumerable: false,
          writable: false,
          configurable: false,
          value: target
        }
      });
    }
    return HiddenSymbol2;
  })();
  var InternalSymbol = (function(_super) {
    __extends9(InternalSymbol2, _super);
    function InternalSymbol2(target, __mark__) {
      var _this = this;
      if (__mark__ !== __internalMark__) {
        throw new TypeError("InternalSymbol cannot be constructed with new operator");
      }
      _this = _super.call(this, target) || this;
      return _this;
    }
    InternalSymbol2.for = function(target) {
      for (var i2 = 0, len2 = _symbols.length; i2 < len2; i2++) {
        if (_symbols[i2].target === target) {
          return _symbols[i2].instance;
        }
      }
      var symbol = new InternalSymbol2(target, __internalMark__);
      _symbols.push({
        target,
        instance: symbol
      });
      return symbol;
    };
    return InternalSymbol2;
  })(HiddenSymbol);
  var symbol_default = InternalSymbol;

  // node_modules/@cloudbase/database/dist/esm/helper/symbol.js
  var SYMBOL_UNSET_FIELD_NAME = symbol_default.for("UNSET_FIELD_NAME");
  var SYMBOL_UPDATE_COMMAND = symbol_default.for("UPDATE_COMMAND");
  var SYMBOL_QUERY_COMMAND = symbol_default.for("QUERY_COMMAND");
  var SYMBOL_LOGIC_COMMAND = symbol_default.for("LOGIC_COMMAND");
  var SYMBOL_GEO_POINT = symbol_default.for("GEO_POINT");
  var SYMBOL_GEO_LINE_STRING = symbol_default.for("SYMBOL_GEO_LINE_STRING");
  var SYMBOL_GEO_POLYGON = symbol_default.for("SYMBOL_GEO_POLYGON");
  var SYMBOL_GEO_MULTI_POINT = symbol_default.for("SYMBOL_GEO_MULTI_POINT");
  var SYMBOL_GEO_MULTI_LINE_STRING = symbol_default.for("SYMBOL_GEO_MULTI_LINE_STRING");
  var SYMBOL_GEO_MULTI_POLYGON = symbol_default.for("SYMBOL_GEO_MULTI_POLYGON");
  var SYMBOL_SERVER_DATE = symbol_default.for("SERVER_DATE");
  var SYMBOL_REGEXP = symbol_default.for("REGEXP");

  // node_modules/@cloudbase/database/dist/esm/serverDate/index.js
  var ServerDate = (function() {
    function ServerDate2(_a2) {
      var _b = (_a2 === void 0 ? {} : _a2).offset, offset = _b === void 0 ? 0 : _b;
      this.offset = offset;
    }
    Object.defineProperty(ServerDate2.prototype, "_internalType", {
      get: function() {
        return SYMBOL_SERVER_DATE;
      },
      enumerable: true,
      configurable: true
    });
    ServerDate2.prototype.parse = function() {
      return {
        $date: {
          offset: this.offset
        }
      };
    };
    return ServerDate2;
  })();
  function ServerDateConstructor(opt) {
    return new ServerDate(opt);
  }

  // node_modules/@cloudbase/database/dist/esm/util.js
  var __read = function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i2 = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i2.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i2["return"])) m.call(i2);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
  var Util = (function() {
    function Util2() {
    }
    Util2.formatResDocumentData = function(documents) {
      return documents.map(function(document2) {
        return Util2.formatField(document2);
      });
    };
    Util2.formatField = function(document2) {
      var keys = Object.keys(document2);
      var protoField = {};
      if (Array.isArray(document2)) {
        protoField = [];
      }
      keys.forEach(function(key2) {
        var item = document2[key2];
        var type = Util2.whichType(item);
        var realValue;
        switch (type) {
          case FieldType.GeoPoint:
            realValue = new Point(item.coordinates[0], item.coordinates[1]);
            break;
          case FieldType.GeoLineString:
            realValue = new LineString(item.coordinates.map(function(point) {
              return new Point(point[0], point[1]);
            }));
            break;
          case FieldType.GeoPolygon:
            realValue = new Polygon(item.coordinates.map(function(line) {
              return new LineString(line.map(function(_a2) {
                var _b = __read(_a2, 2), lng = _b[0], lat = _b[1];
                return new Point(lng, lat);
              }));
            }));
            break;
          case FieldType.GeoMultiPoint:
            realValue = new MultiPoint(item.coordinates.map(function(point) {
              return new Point(point[0], point[1]);
            }));
            break;
          case FieldType.GeoMultiLineString:
            realValue = new MultiLineString(item.coordinates.map(function(line) {
              return new LineString(line.map(function(_a2) {
                var _b = __read(_a2, 2), lng = _b[0], lat = _b[1];
                return new Point(lng, lat);
              }));
            }));
            break;
          case FieldType.GeoMultiPolygon:
            realValue = new MultiPolygon(item.coordinates.map(function(polygon) {
              return new Polygon(polygon.map(function(line) {
                return new LineString(line.map(function(_a2) {
                  var _b = __read(_a2, 2), lng = _b[0], lat = _b[1];
                  return new Point(lng, lat);
                }));
              }));
            }));
            break;
          case FieldType.Timestamp:
            realValue = new Date(item.$timestamp * 1e3);
            break;
          case FieldType.Object:
          case FieldType.Array:
            realValue = Util2.formatField(item);
            break;
          case FieldType.ServerDate:
            realValue = new Date(item.$date);
            break;
          default:
            realValue = item;
        }
        if (Array.isArray(protoField)) {
          protoField.push(realValue);
        } else {
          protoField[key2] = realValue;
        }
      });
      return protoField;
    };
    Util2.whichType = function(obj) {
      var type = Object.prototype.toString.call(obj).slice(8, -1);
      if (type === FieldType.Timestamp) {
        return FieldType.BsonDate;
      }
      if (type === FieldType.Object) {
        if (obj instanceof Point) {
          return FieldType.GeoPoint;
        } else if (obj instanceof Date) {
          return FieldType.Timestamp;
        } else if (obj instanceof ServerDate) {
          return FieldType.ServerDate;
        }
        if (obj.$timestamp) {
          type = FieldType.Timestamp;
        } else if (obj.$date) {
          type = FieldType.ServerDate;
        } else if (Point.validate(obj)) {
          type = FieldType.GeoPoint;
        } else if (LineString.validate(obj)) {
          type = FieldType.GeoLineString;
        } else if (Polygon.validate(obj)) {
          type = FieldType.GeoPolygon;
        } else if (MultiPoint.validate(obj)) {
          type = FieldType.GeoMultiPoint;
        } else if (MultiLineString.validate(obj)) {
          type = FieldType.GeoMultiLineString;
        } else if (MultiPolygon.validate(obj)) {
          type = FieldType.GeoMultiPolygon;
        }
      }
      return type;
    };
    Util2.generateDocId = function() {
      var chars = "ABCDEFabcdef0123456789";
      var autoId = "";
      for (var i2 = 0; i2 < 24; i2++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return autoId;
    };
    return Util2;
  })();

  // node_modules/@cloudbase/database/dist/esm/validate.js
  var Validate = (function() {
    function Validate2() {
    }
    Validate2.isGeopoint = function(point, degree) {
      if (Util.whichType(degree) !== FieldType.Number) {
        throw new Error("Geo Point must be number type");
      }
      var degreeAbs = Math.abs(degree);
      if (point === "latitude" && degreeAbs > 90) {
        throw new Error("latitude should be a number ranges from -90 to 90");
      } else if (point === "longitude" && degreeAbs > 180) {
        throw new Error("longitude should be a number ranges from -180 to 180");
      }
      return true;
    };
    Validate2.isInteger = function(param, num) {
      if (!Number.isInteger(num)) {
        throw new Error(param + ErrorCode.IntergerError);
      }
      return true;
    };
    Validate2.isFieldOrder = function(direction) {
      if (OrderDirectionList.indexOf(direction) === -1) {
        throw new Error(ErrorCode.DirectionError);
      }
      return true;
    };
    Validate2.isFieldPath = function(path) {
      if (!/^[a-zA-Z0-9-_\.]/.test(path)) {
        throw new Error();
      }
      return true;
    };
    Validate2.isOperator = function(op) {
      if (WhereFilterOpList.indexOf(op) === -1) {
        throw new Error(ErrorCode.OpStrError);
      }
      return true;
    };
    Validate2.isCollName = function(name) {
      if (!/^[a-zA-Z0-9]([a-zA-Z0-9-_]){1,32}$/.test(name)) {
        throw new Error(ErrorCode.CollNameError);
      }
      return true;
    };
    Validate2.isDocID = function(docId) {
      if (!/^([a-fA-F0-9]){24}$/.test(docId)) {
        throw new Error(ErrorCode.DocIDError);
      }
      return true;
    };
    return Validate2;
  })();

  // node_modules/@cloudbase/database/dist/esm/utils/type.js
  var getType = function(x) {
    return Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
  };
  var isObject = function(x) {
    return getType(x) === "object";
  };
  var isString6 = function(x) {
    return getType(x) === "string";
  };
  var isNumber = function(x) {
    return getType(x) === "number";
  };
  var isArray2 = function(x) {
    return Array.isArray(x);
  };
  var isDate = function(x) {
    return getType(x) === "date";
  };
  var isRegExp = function(x) {
    return getType(x) === "regexp";
  };
  var isInternalObject = function(x) {
    return x && x._internalType instanceof InternalSymbol;
  };

  // node_modules/@cloudbase/database/dist/esm/geo/point.js
  var Point = (function() {
    function Point2(longitude, latitude) {
      Validate.isGeopoint("longitude", longitude);
      Validate.isGeopoint("latitude", latitude);
      this.longitude = longitude;
      this.latitude = latitude;
    }
    Point2.prototype.parse = function(key2) {
      var _a2;
      return _a2 = {}, _a2[key2] = {
        type: "Point",
        coordinates: [this.longitude, this.latitude]
      }, _a2;
    };
    Point2.prototype.toJSON = function() {
      return {
        type: "Point",
        coordinates: [
          this.longitude,
          this.latitude
        ]
      };
    };
    Point2.prototype.toReadableString = function() {
      return "[" + this.longitude + "," + this.latitude + "]";
    };
    Point2.validate = function(point) {
      return point.type === "Point" && isArray2(point.coordinates) && Validate.isGeopoint("longitude", point.coordinates[0]) && Validate.isGeopoint("latitude", point.coordinates[1]);
    };
    Object.defineProperty(Point2.prototype, "_internalType", {
      get: function() {
        return SYMBOL_GEO_POINT;
      },
      enumerable: true,
      configurable: true
    });
    return Point2;
  })();

  // node_modules/@cloudbase/database/dist/esm/geo/lineString.js
  var __values = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i2 >= o.length) o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var LineString = (function() {
    function LineString2(points) {
      if (!isArray2(points)) {
        throw new TypeError('"points" must be of type Point[]. Received type ' + typeof points);
      }
      if (points.length < 2) {
        throw new Error('"points" must contain 2 points at least');
      }
      points.forEach(function(point) {
        if (!(point instanceof Point)) {
          throw new TypeError('"points" must be of type Point[]. Received type ' + typeof point + "[]");
        }
      });
      this.points = points;
    }
    LineString2.prototype.parse = function(key2) {
      var _a2;
      return _a2 = {}, _a2[key2] = {
        type: "LineString",
        coordinates: this.points.map(function(point) {
          return point.toJSON().coordinates;
        })
      }, _a2;
    };
    LineString2.prototype.toJSON = function() {
      return {
        type: "LineString",
        coordinates: this.points.map(function(point) {
          return point.toJSON().coordinates;
        })
      };
    };
    LineString2.validate = function(lineString) {
      var e_1, _a2;
      if (lineString.type !== "LineString" || !isArray2(lineString.coordinates)) {
        return false;
      }
      try {
        for (var _b = __values(lineString.coordinates), _c = _b.next(); !_c.done; _c = _b.next()) {
          var point = _c.value;
          if (!isNumber(point[0]) || !isNumber(point[1])) {
            return false;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return true;
    };
    LineString2.isClosed = function(lineString) {
      var firstPoint = lineString.points[0];
      var lastPoint = lineString.points[lineString.points.length - 1];
      if (firstPoint.latitude === lastPoint.latitude && firstPoint.longitude === lastPoint.longitude) {
        return true;
      }
    };
    Object.defineProperty(LineString2.prototype, "_internalType", {
      get: function() {
        return SYMBOL_GEO_LINE_STRING;
      },
      enumerable: true,
      configurable: true
    });
    return LineString2;
  })();

  // node_modules/@cloudbase/database/dist/esm/geo/polygon.js
  var __values2 = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i2 >= o.length) o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var Polygon = (function() {
    function Polygon2(lines) {
      if (!isArray2(lines)) {
        throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof lines);
      }
      if (lines.length === 0) {
        throw new Error("Polygon must contain 1 linestring at least");
      }
      lines.forEach(function(line) {
        if (!(line instanceof LineString)) {
          throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof line + "[]");
        }
        if (!LineString.isClosed(line)) {
          throw new Error("LineString " + line.points.map(function(p) {
            return p.toReadableString();
          }) + " is not a closed cycle");
        }
      });
      this.lines = lines;
    }
    Polygon2.prototype.parse = function(key2) {
      var _a2;
      return _a2 = {}, _a2[key2] = {
        type: "Polygon",
        coordinates: this.lines.map(function(line) {
          return line.points.map(function(point) {
            return [point.longitude, point.latitude];
          });
        })
      }, _a2;
    };
    Polygon2.prototype.toJSON = function() {
      return {
        type: "Polygon",
        coordinates: this.lines.map(function(line) {
          return line.points.map(function(point) {
            return [point.longitude, point.latitude];
          });
        })
      };
    };
    Polygon2.validate = function(polygon) {
      var e_1, _a2, e_2, _b;
      if (polygon.type !== "Polygon" || !isArray2(polygon.coordinates)) {
        return false;
      }
      try {
        for (var _c = __values2(polygon.coordinates), _d = _c.next(); !_d.done; _d = _c.next()) {
          var line = _d.value;
          if (!this.isCloseLineString(line)) {
            return false;
          }
          try {
            for (var line_1 = (e_2 = void 0, __values2(line)), line_1_1 = line_1.next(); !line_1_1.done; line_1_1 = line_1.next()) {
              var point = line_1_1.value;
              if (!isNumber(point[0]) || !isNumber(point[1])) {
                return false;
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (line_1_1 && !line_1_1.done && (_b = line_1.return)) _b.call(line_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return true;
    };
    Polygon2.isCloseLineString = function(lineString) {
      var firstPoint = lineString[0];
      var lastPoint = lineString[lineString.length - 1];
      if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
        return false;
      }
      return true;
    };
    Object.defineProperty(Polygon2.prototype, "_internalType", {
      get: function() {
        return SYMBOL_GEO_MULTI_POLYGON;
      },
      enumerable: true,
      configurable: true
    });
    return Polygon2;
  })();

  // node_modules/@cloudbase/database/dist/esm/geo/multiPoint.js
  var __values3 = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i2 >= o.length) o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var MultiPoint = (function() {
    function MultiPoint2(points) {
      if (!isArray2(points)) {
        throw new TypeError('"points" must be of type Point[]. Received type ' + typeof points);
      }
      if (points.length === 0) {
        throw new Error('"points" must contain 1 point at least');
      }
      points.forEach(function(point) {
        if (!(point instanceof Point)) {
          throw new TypeError('"points" must be of type Point[]. Received type ' + typeof point + "[]");
        }
      });
      this.points = points;
    }
    MultiPoint2.prototype.parse = function(key2) {
      var _a2;
      return _a2 = {}, _a2[key2] = {
        type: "MultiPoint",
        coordinates: this.points.map(function(point) {
          return point.toJSON().coordinates;
        })
      }, _a2;
    };
    MultiPoint2.prototype.toJSON = function() {
      return {
        type: "MultiPoint",
        coordinates: this.points.map(function(point) {
          return point.toJSON().coordinates;
        })
      };
    };
    MultiPoint2.validate = function(multiPoint) {
      var e_1, _a2;
      if (multiPoint.type !== "MultiPoint" || !isArray2(multiPoint.coordinates)) {
        return false;
      }
      try {
        for (var _b = __values3(multiPoint.coordinates), _c = _b.next(); !_c.done; _c = _b.next()) {
          var point = _c.value;
          if (!isNumber(point[0]) || !isNumber(point[1])) {
            return false;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return true;
    };
    Object.defineProperty(MultiPoint2.prototype, "_internalType", {
      get: function() {
        return SYMBOL_GEO_MULTI_POINT;
      },
      enumerable: true,
      configurable: true
    });
    return MultiPoint2;
  })();

  // node_modules/@cloudbase/database/dist/esm/geo/multiLineString.js
  var __values4 = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i2 >= o.length) o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var MultiLineString = (function() {
    function MultiLineString2(lines) {
      if (!isArray2(lines)) {
        throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof lines);
      }
      if (lines.length === 0) {
        throw new Error("Polygon must contain 1 linestring at least");
      }
      lines.forEach(function(line) {
        if (!(line instanceof LineString)) {
          throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof line + "[]");
        }
      });
      this.lines = lines;
    }
    MultiLineString2.prototype.parse = function(key2) {
      var _a2;
      return _a2 = {}, _a2[key2] = {
        type: "MultiLineString",
        coordinates: this.lines.map(function(line) {
          return line.points.map(function(point) {
            return [point.longitude, point.latitude];
          });
        })
      }, _a2;
    };
    MultiLineString2.prototype.toJSON = function() {
      return {
        type: "MultiLineString",
        coordinates: this.lines.map(function(line) {
          return line.points.map(function(point) {
            return [point.longitude, point.latitude];
          });
        })
      };
    };
    MultiLineString2.validate = function(multiLineString) {
      var e_1, _a2, e_2, _b;
      if (multiLineString.type !== "MultiLineString" || !isArray2(multiLineString.coordinates)) {
        return false;
      }
      try {
        for (var _c = __values4(multiLineString.coordinates), _d = _c.next(); !_d.done; _d = _c.next()) {
          var line = _d.value;
          try {
            for (var line_1 = (e_2 = void 0, __values4(line)), line_1_1 = line_1.next(); !line_1_1.done; line_1_1 = line_1.next()) {
              var point = line_1_1.value;
              if (!isNumber(point[0]) || !isNumber(point[1])) {
                return false;
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (line_1_1 && !line_1_1.done && (_b = line_1.return)) _b.call(line_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return true;
    };
    Object.defineProperty(MultiLineString2.prototype, "_internalType", {
      get: function() {
        return SYMBOL_GEO_MULTI_LINE_STRING;
      },
      enumerable: true,
      configurable: true
    });
    return MultiLineString2;
  })();

  // node_modules/@cloudbase/database/dist/esm/geo/multiPolygon.js
  var __values5 = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i2 >= o.length) o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var MultiPolygon = (function() {
    function MultiPolygon2(polygons) {
      var e_1, _a2;
      if (!isArray2(polygons)) {
        throw new TypeError('"polygons" must be of type Polygon[]. Received type ' + typeof polygons);
      }
      if (polygons.length === 0) {
        throw new Error("MultiPolygon must contain 1 polygon at least");
      }
      try {
        for (var polygons_1 = __values5(polygons), polygons_1_1 = polygons_1.next(); !polygons_1_1.done; polygons_1_1 = polygons_1.next()) {
          var polygon = polygons_1_1.value;
          if (!(polygon instanceof Polygon)) {
            throw new TypeError('"polygon" must be of type Polygon[]. Received type ' + typeof polygon + "[]");
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (polygons_1_1 && !polygons_1_1.done && (_a2 = polygons_1.return)) _a2.call(polygons_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      this.polygons = polygons;
    }
    MultiPolygon2.prototype.parse = function(key2) {
      var _a2;
      return _a2 = {}, _a2[key2] = {
        type: "MultiPolygon",
        coordinates: this.polygons.map(function(polygon) {
          return polygon.lines.map(function(line) {
            return line.points.map(function(point) {
              return [point.longitude, point.latitude];
            });
          });
        })
      }, _a2;
    };
    MultiPolygon2.prototype.toJSON = function() {
      return {
        type: "MultiPolygon",
        coordinates: this.polygons.map(function(polygon) {
          return polygon.lines.map(function(line) {
            return line.points.map(function(point) {
              return [point.longitude, point.latitude];
            });
          });
        })
      };
    };
    MultiPolygon2.validate = function(multiPolygon) {
      var e_2, _a2, e_3, _b, e_4, _c;
      if (multiPolygon.type !== "MultiPolygon" || !isArray2(multiPolygon.coordinates)) {
        return false;
      }
      try {
        for (var _d = __values5(multiPolygon.coordinates), _e = _d.next(); !_e.done; _e = _d.next()) {
          var polygon = _e.value;
          try {
            for (var polygon_1 = (e_3 = void 0, __values5(polygon)), polygon_1_1 = polygon_1.next(); !polygon_1_1.done; polygon_1_1 = polygon_1.next()) {
              var line = polygon_1_1.value;
              try {
                for (var line_1 = (e_4 = void 0, __values5(line)), line_1_1 = line_1.next(); !line_1_1.done; line_1_1 = line_1.next()) {
                  var point = line_1_1.value;
                  if (!isNumber(point[0]) || !isNumber(point[1])) {
                    return false;
                  }
                }
              } catch (e_4_1) {
                e_4 = { error: e_4_1 };
              } finally {
                try {
                  if (line_1_1 && !line_1_1.done && (_c = line_1.return)) _c.call(line_1);
                } finally {
                  if (e_4) throw e_4.error;
                }
              }
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (polygon_1_1 && !polygon_1_1.done && (_b = polygon_1.return)) _b.call(polygon_1);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_e && !_e.done && (_a2 = _d.return)) _a2.call(_d);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return true;
    };
    Object.defineProperty(MultiPolygon2.prototype, "_internalType", {
      get: function() {
        return SYMBOL_GEO_POLYGON;
      },
      enumerable: true,
      configurable: true
    });
    return MultiPolygon2;
  })();

  // node_modules/@cloudbase/database/dist/esm/lib/util.js
  var createPromiseCallback = function() {
    var cb;
    if (!Promise) {
      cb = function() {
      };
      cb.promise = {};
      var throwPromiseNotDefined = function() {
        throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
      };
      Object.defineProperty(cb.promise, "then", { get: throwPromiseNotDefined });
      Object.defineProperty(cb.promise, "catch", { get: throwPromiseNotDefined });
      return cb;
    }
    var promise = new Promise(function(resolve, reject) {
      cb = function(err, data) {
        if (err)
          return reject(err);
        return resolve(data);
      };
    });
    cb.promise = promise;
    return cb;
  };

  // node_modules/@cloudbase/database/dist/esm/commands/update.js
  var UPDATE_COMMANDS_LITERAL;
  (function(UPDATE_COMMANDS_LITERAL2) {
    UPDATE_COMMANDS_LITERAL2["SET"] = "set";
    UPDATE_COMMANDS_LITERAL2["REMOVE"] = "remove";
    UPDATE_COMMANDS_LITERAL2["INC"] = "inc";
    UPDATE_COMMANDS_LITERAL2["MUL"] = "mul";
    UPDATE_COMMANDS_LITERAL2["PUSH"] = "push";
    UPDATE_COMMANDS_LITERAL2["PULL"] = "pull";
    UPDATE_COMMANDS_LITERAL2["PULL_ALL"] = "pullAll";
    UPDATE_COMMANDS_LITERAL2["POP"] = "pop";
    UPDATE_COMMANDS_LITERAL2["SHIFT"] = "shift";
    UPDATE_COMMANDS_LITERAL2["UNSHIFT"] = "unshift";
    UPDATE_COMMANDS_LITERAL2["ADD_TO_SET"] = "addToSet";
    UPDATE_COMMANDS_LITERAL2["BIT"] = "bit";
    UPDATE_COMMANDS_LITERAL2["RENAME"] = "rename";
    UPDATE_COMMANDS_LITERAL2["MAX"] = "max";
    UPDATE_COMMANDS_LITERAL2["MIN"] = "min";
  })(UPDATE_COMMANDS_LITERAL || (UPDATE_COMMANDS_LITERAL = {}));
  var UpdateCommand = (function() {
    function UpdateCommand2(operator, operands, fieldName) {
      this._internalType = SYMBOL_UPDATE_COMMAND;
      Object.defineProperties(this, {
        _internalType: {
          enumerable: false,
          configurable: false
        }
      });
      this.operator = operator;
      this.operands = operands;
      this.fieldName = fieldName || SYMBOL_UNSET_FIELD_NAME;
    }
    UpdateCommand2.prototype._setFieldName = function(fieldName) {
      var command = new UpdateCommand2(this.operator, this.operands, fieldName);
      return command;
    };
    return UpdateCommand2;
  })();
  function isUpdateCommand(object) {
    return object && object instanceof UpdateCommand && object._internalType === SYMBOL_UPDATE_COMMAND;
  }

  // node_modules/@cloudbase/database/dist/esm/commands/logic.js
  var LOGIC_COMMANDS_LITERAL;
  (function(LOGIC_COMMANDS_LITERAL2) {
    LOGIC_COMMANDS_LITERAL2["AND"] = "and";
    LOGIC_COMMANDS_LITERAL2["OR"] = "or";
    LOGIC_COMMANDS_LITERAL2["NOT"] = "not";
    LOGIC_COMMANDS_LITERAL2["NOR"] = "nor";
  })(LOGIC_COMMANDS_LITERAL || (LOGIC_COMMANDS_LITERAL = {}));
  var LogicCommand = (function() {
    function LogicCommand2(operator, operands, fieldName) {
      this._internalType = SYMBOL_LOGIC_COMMAND;
      Object.defineProperties(this, {
        _internalType: {
          enumerable: false,
          configurable: false
        }
      });
      this.operator = operator;
      this.operands = operands;
      this.fieldName = fieldName || SYMBOL_UNSET_FIELD_NAME;
      if (this.fieldName !== SYMBOL_UNSET_FIELD_NAME) {
        if (Array.isArray(operands)) {
          operands = operands.slice();
          this.operands = operands;
          for (var i2 = 0, len2 = operands.length; i2 < len2; i2++) {
            var query = operands[i2];
            if (isLogicCommand(query) || isQueryCommand(query)) {
              operands[i2] = query._setFieldName(this.fieldName);
            }
          }
        } else {
          var query = operands;
          if (isLogicCommand(query) || isQueryCommand(query)) {
            operands = query._setFieldName(this.fieldName);
          }
        }
      }
    }
    LogicCommand2.prototype._setFieldName = function(fieldName) {
      var operands = this.operands.map(function(operand) {
        if (operand instanceof LogicCommand2) {
          return operand._setFieldName(fieldName);
        } else {
          return operand;
        }
      });
      var command = new LogicCommand2(this.operator, operands, fieldName);
      return command;
    };
    LogicCommand2.prototype.and = function() {
      var __expressions__ = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        __expressions__[_i] = arguments[_i];
      }
      var expressions = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
      expressions.unshift(this);
      return new LogicCommand2(LOGIC_COMMANDS_LITERAL.AND, expressions, this.fieldName);
    };
    LogicCommand2.prototype.or = function() {
      var __expressions__ = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        __expressions__[_i] = arguments[_i];
      }
      var expressions = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
      expressions.unshift(this);
      return new LogicCommand2(LOGIC_COMMANDS_LITERAL.OR, expressions, this.fieldName);
    };
    return LogicCommand2;
  })();
  function isLogicCommand(object) {
    return object && object instanceof LogicCommand && object._internalType === SYMBOL_LOGIC_COMMAND;
  }

  // node_modules/@cloudbase/database/dist/esm/commands/query.js
  var __extends10 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var QUERY_COMMANDS_LITERAL;
  (function(QUERY_COMMANDS_LITERAL2) {
    QUERY_COMMANDS_LITERAL2["EQ"] = "eq";
    QUERY_COMMANDS_LITERAL2["NEQ"] = "neq";
    QUERY_COMMANDS_LITERAL2["GT"] = "gt";
    QUERY_COMMANDS_LITERAL2["GTE"] = "gte";
    QUERY_COMMANDS_LITERAL2["LT"] = "lt";
    QUERY_COMMANDS_LITERAL2["LTE"] = "lte";
    QUERY_COMMANDS_LITERAL2["IN"] = "in";
    QUERY_COMMANDS_LITERAL2["NIN"] = "nin";
    QUERY_COMMANDS_LITERAL2["ALL"] = "all";
    QUERY_COMMANDS_LITERAL2["ELEM_MATCH"] = "elemMatch";
    QUERY_COMMANDS_LITERAL2["EXISTS"] = "exists";
    QUERY_COMMANDS_LITERAL2["SIZE"] = "size";
    QUERY_COMMANDS_LITERAL2["MOD"] = "mod";
    QUERY_COMMANDS_LITERAL2["GEO_NEAR"] = "geoNear";
    QUERY_COMMANDS_LITERAL2["GEO_WITHIN"] = "geoWithin";
    QUERY_COMMANDS_LITERAL2["GEO_INTERSECTS"] = "geoIntersects";
  })(QUERY_COMMANDS_LITERAL || (QUERY_COMMANDS_LITERAL = {}));
  var QueryCommand = (function(_super) {
    __extends10(QueryCommand2, _super);
    function QueryCommand2(operator, operands, fieldName) {
      var _this = _super.call(this, operator, operands, fieldName) || this;
      _this.operator = operator;
      _this._internalType = SYMBOL_QUERY_COMMAND;
      return _this;
    }
    QueryCommand2.prototype.toJSON = function() {
      var _a2, _b;
      switch (this.operator) {
        case QUERY_COMMANDS_LITERAL.IN:
        case QUERY_COMMANDS_LITERAL.NIN:
          return _a2 = {}, _a2["$" + this.operator] = this.operands, _a2;
        default:
          return _b = {}, _b["$" + this.operator] = this.operands[0], _b;
      }
    };
    QueryCommand2.prototype._setFieldName = function(fieldName) {
      var command = new QueryCommand2(this.operator, this.operands, fieldName);
      return command;
    };
    QueryCommand2.prototype.eq = function(val) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.EQ, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.neq = function(val) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.NEQ, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.gt = function(val) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.GT, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.gte = function(val) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.GTE, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.lt = function(val) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.LT, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.lte = function(val) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.LTE, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.in = function(list) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.IN, list, this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.nin = function(list) {
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.NIN, list, this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.geoNear = function(val) {
      if (!(val.geometry instanceof Point)) {
        throw new TypeError('"geometry" must be of type Point. Received type ' + typeof val.geometry);
      }
      if (val.maxDistance !== void 0 && !isNumber(val.maxDistance)) {
        throw new TypeError('"maxDistance" must be of type Number. Received type ' + typeof val.maxDistance);
      }
      if (val.minDistance !== void 0 && !isNumber(val.minDistance)) {
        throw new TypeError('"minDistance" must be of type Number. Received type ' + typeof val.minDistance);
      }
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.GEO_NEAR, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.geoWithin = function(val) {
      if (!(val.geometry instanceof MultiPolygon) && !(val.geometry instanceof Polygon)) {
        throw new TypeError('"geometry" must be of type Polygon or MultiPolygon. Received type ' + typeof val.geometry);
      }
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.GEO_WITHIN, [val], this.fieldName);
      return this.and(command);
    };
    QueryCommand2.prototype.geoIntersects = function(val) {
      if (!(val.geometry instanceof Point) && !(val.geometry instanceof LineString) && !(val.geometry instanceof Polygon) && !(val.geometry instanceof MultiPoint) && !(val.geometry instanceof MultiLineString) && !(val.geometry instanceof MultiPolygon)) {
        throw new TypeError('"geometry" must be of type Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon. Received type ' + typeof val.geometry);
      }
      var command = new QueryCommand2(QUERY_COMMANDS_LITERAL.GEO_INTERSECTS, [val], this.fieldName);
      return this.and(command);
    };
    return QueryCommand2;
  })(LogicCommand);
  function isQueryCommand(object) {
    return object && object instanceof QueryCommand && object._internalType === SYMBOL_QUERY_COMMAND;
  }
  function isComparisonCommand(object) {
    return isQueryCommand(object);
  }

  // node_modules/@cloudbase/database/dist/esm/operator-map.js
  var OperatorMap2 = {};
  for (key in QUERY_COMMANDS_LITERAL) {
    OperatorMap2[key] = "$" + key;
  }
  var key;
  for (key in LOGIC_COMMANDS_LITERAL) {
    OperatorMap2[key] = "$" + key;
  }
  var key;
  for (key in UPDATE_COMMANDS_LITERAL) {
    OperatorMap2[key] = "$" + key;
  }
  var key;
  OperatorMap2[QUERY_COMMANDS_LITERAL.NEQ] = "$ne";
  OperatorMap2[UPDATE_COMMANDS_LITERAL.REMOVE] = "$unset";
  OperatorMap2[UPDATE_COMMANDS_LITERAL.SHIFT] = "$pop";
  OperatorMap2[UPDATE_COMMANDS_LITERAL.UNSHIFT] = "$push";
  function operatorToString(operator) {
    return OperatorMap2[operator] || "$" + operator;
  }

  // node_modules/@cloudbase/database/dist/esm/serializer/datatype.js
  var __assign7 = function() {
    __assign7 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign7.apply(this, arguments);
  };
  var __read2 = function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i2 = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i2.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i2["return"])) m.call(i2);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
  var __spread = function() {
    for (var ar = [], i2 = 0; i2 < arguments.length; i2++) ar = ar.concat(__read2(arguments[i2]));
    return ar;
  };
  function serialize(val) {
    return serializeHelper(val, [val]);
  }
  function serializeHelper(val, visited) {
    if (isInternalObject(val)) {
      switch (val._internalType) {
        case SYMBOL_GEO_POINT: {
          return val.toJSON();
        }
        case SYMBOL_SERVER_DATE: {
          return val.parse();
        }
        case SYMBOL_REGEXP: {
          return val.parse();
        }
        default: {
          return val.toJSON ? val.toJSON() : val;
        }
      }
    } else if (isDate(val)) {
      return {
        $date: +val
      };
    } else if (isRegExp(val)) {
      return {
        $regex: val.source,
        $options: val.flags
      };
    } else if (isArray2(val)) {
      return val.map(function(item) {
        if (visited.indexOf(item) > -1) {
          throw new Error("Cannot convert circular structure to JSON");
        }
        return serializeHelper(item, __spread(visited, [
          item
        ]));
      });
    } else if (isObject(val)) {
      var ret = __assign7({}, val);
      for (var key2 in ret) {
        if (visited.indexOf(ret[key2]) > -1) {
          throw new Error("Cannot convert circular structure to JSON");
        }
        ret[key2] = serializeHelper(ret[key2], __spread(visited, [
          ret[key2]
        ]));
      }
      return ret;
    } else {
      return val;
    }
  }

  // node_modules/@cloudbase/database/dist/esm/serializer/common.js
  var __assign8 = function() {
    __assign8 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign8.apply(this, arguments);
  };
  var __read3 = function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i2 = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i2.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i2["return"])) m.call(i2);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
  var __spread2 = function() {
    for (var ar = [], i2 = 0; i2 < arguments.length; i2++) ar = ar.concat(__read3(arguments[i2]));
    return ar;
  };
  function flatten(query, shouldPreserverObject, parents, visited) {
    var cloned = __assign8({}, query);
    for (var key2 in query) {
      if (/^\$/.test(key2))
        continue;
      var value = query[key2];
      if (!value)
        continue;
      if (isObject(value) && !shouldPreserverObject(value)) {
        if (visited.indexOf(value) > -1) {
          throw new Error("Cannot convert circular structure to JSON");
        }
        var newParents = __spread2(parents, [
          key2
        ]);
        var newVisited = __spread2(visited, [
          value
        ]);
        var flattenedChild = flatten(value, shouldPreserverObject, newParents, newVisited);
        cloned[key2] = flattenedChild;
        var hasKeyNotCombined = false;
        for (var childKey in flattenedChild) {
          if (!/^\$/.test(childKey)) {
            cloned[key2 + "." + childKey] = flattenedChild[childKey];
            delete cloned[key2][childKey];
          } else {
            hasKeyNotCombined = true;
          }
        }
        if (!hasKeyNotCombined) {
          delete cloned[key2];
        }
      }
    }
    return cloned;
  }
  function flattenQueryObject(query) {
    return flatten(query, isConversionRequired, [], [query]);
  }
  function mergeConditionAfterEncode(query, condition, key2) {
    if (!condition[key2]) {
      delete query[key2];
    }
    for (var conditionKey in condition) {
      if (query[conditionKey]) {
        if (isArray2(query[conditionKey])) {
          query[conditionKey].push(condition[conditionKey]);
        } else if (isObject(query[conditionKey])) {
          if (isObject(condition[conditionKey])) {
            Object.assign(query[conditionKey], condition[conditionKey]);
          } else {
            console.warn("unmergable condition, query is object but condition is " + getType(condition) + ", can only overwrite", condition, key2);
            query[conditionKey] = condition[conditionKey];
          }
        } else {
          console.warn("to-merge query is of type " + getType(query) + ", can only overwrite", query, condition, key2);
          query[conditionKey] = condition[conditionKey];
        }
      } else {
        query[conditionKey] = condition[conditionKey];
      }
    }
  }
  function isConversionRequired(val) {
    return isInternalObject(val) || isDate(val) || isRegExp(val);
  }
  function encodeInternalDataType(val) {
    return serialize(val);
  }

  // node_modules/@cloudbase/database/dist/esm/serializer/update.js
  var UpdateSerializer = (function() {
    function UpdateSerializer2() {
    }
    UpdateSerializer2.encode = function(query) {
      var stringifier = new UpdateSerializer2();
      return stringifier.encodeUpdate(query);
    };
    UpdateSerializer2.prototype.encodeUpdate = function(query) {
      if (isUpdateCommand(query)) {
        return this.encodeUpdateCommand(query);
      } else if (getType(query) === "object") {
        return this.encodeUpdateObject(query);
      } else {
        return query;
      }
    };
    UpdateSerializer2.prototype.encodeUpdateCommand = function(query) {
      if (query.fieldName === SYMBOL_UNSET_FIELD_NAME) {
        throw new Error("Cannot encode a comparison command with unset field name");
      }
      switch (query.operator) {
        case UPDATE_COMMANDS_LITERAL.PUSH:
        case UPDATE_COMMANDS_LITERAL.PULL:
        case UPDATE_COMMANDS_LITERAL.PULL_ALL:
        case UPDATE_COMMANDS_LITERAL.POP:
        case UPDATE_COMMANDS_LITERAL.SHIFT:
        case UPDATE_COMMANDS_LITERAL.UNSHIFT:
        case UPDATE_COMMANDS_LITERAL.ADD_TO_SET: {
          return this.encodeArrayUpdateCommand(query);
        }
        default: {
          return this.encodeFieldUpdateCommand(query);
        }
      }
    };
    UpdateSerializer2.prototype.encodeFieldUpdateCommand = function(query) {
      var _a2, _b, _c, _d;
      var $op = operatorToString(query.operator);
      switch (query.operator) {
        case UPDATE_COMMANDS_LITERAL.REMOVE: {
          return _a2 = {}, _a2[$op] = (_b = {}, _b[query.fieldName] = "", _b), _a2;
        }
        default: {
          return _c = {}, _c[$op] = (_d = {}, _d[query.fieldName] = query.operands[0], _d), _c;
        }
      }
    };
    UpdateSerializer2.prototype.encodeArrayUpdateCommand = function(query) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      var $op = operatorToString(query.operator);
      switch (query.operator) {
        case UPDATE_COMMANDS_LITERAL.PUSH: {
          var modifiers = void 0;
          if (isArray2(query.operands)) {
            modifiers = {
              $each: query.operands.map(encodeInternalDataType)
            };
          } else {
            modifiers = query.operands;
          }
          return _a2 = {}, _a2[$op] = (_b = {}, _b[query.fieldName] = modifiers, _b), _a2;
        }
        case UPDATE_COMMANDS_LITERAL.UNSHIFT: {
          var modifiers = {
            $each: query.operands.map(encodeInternalDataType),
            $position: 0
          };
          return _c = {}, _c[$op] = (_d = {}, _d[query.fieldName] = modifiers, _d), _c;
        }
        case UPDATE_COMMANDS_LITERAL.POP: {
          return _e = {}, _e[$op] = (_f = {}, _f[query.fieldName] = 1, _f), _e;
        }
        case UPDATE_COMMANDS_LITERAL.SHIFT: {
          return _g = {}, _g[$op] = (_h = {}, _h[query.fieldName] = -1, _h), _g;
        }
        default: {
          return _j = {}, _j[$op] = (_k = {}, _k[query.fieldName] = encodeInternalDataType(query.operands), _k), _j;
        }
      }
    };
    UpdateSerializer2.prototype.encodeUpdateObject = function(query) {
      var flattened = flattenQueryObject(query);
      for (var key2 in flattened) {
        if (/^\$/.test(key2))
          continue;
        var val = flattened[key2];
        if (isUpdateCommand(val)) {
          flattened[key2] = val._setFieldName(key2);
          var condition = this.encodeUpdateCommand(flattened[key2]);
          mergeConditionAfterEncode(flattened, condition, key2);
        } else {
          flattened[key2] = val = encodeInternalDataType(val);
          var $setCommand = new UpdateCommand(UPDATE_COMMANDS_LITERAL.SET, [val], key2);
          var condition = this.encodeUpdateCommand($setCommand);
          mergeConditionAfterEncode(flattened, condition, key2);
        }
      }
      return flattened;
    };
    return UpdateSerializer2;
  })();

  // node_modules/@cloudbase/database/dist/esm/utils/utils.js
  var wsList = {};
  function getWsInstance(db) {
    if (!Db.wsClientClass) {
      throw new Error("to use realtime you must import realtime module first");
    }
    var env = db.config.env;
    if (!wsList[env]) {
      wsList[env] = new Db.wsClientClass({
        context: {
          appConfig: {
            docSizeLimit: 1e3,
            realtimePingInterval: 1e4,
            realtimePongWaitTimeout: 5e3,
            request: new Db.reqClass(db.config)
          }
        }
      });
    }
    return wsList[env];
  }

  // node_modules/@cloudbase/database/dist/esm/document.js
  var __assign9 = function() {
    __assign9 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign9.apply(this, arguments);
  };
  var DocumentReference = (function() {
    function DocumentReference3(db, coll, docID, projection) {
      var _this = this;
      if (projection === void 0) {
        projection = {};
      }
      this.watch = function(options) {
        var ws = getWsInstance(_this._db);
        return ws.watch(__assign9(__assign9({}, options), { envId: _this._db.config.env, collectionName: _this._coll, query: JSON.stringify({
          _id: _this.id
        }) }));
      };
      this._db = db;
      this._coll = coll;
      this.id = docID;
      this.request = new Db.reqClass(this._db.config);
      this.projection = projection;
    }
    DocumentReference3.prototype.create = function(data, callback) {
      callback = callback || createPromiseCallback();
      var params = {
        collectionName: this._coll,
        data: serialize(data)
      };
      if (this.id) {
        params["_id"] = this.id;
      }
      this.request.send("database.addDocument", params).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          callback(0, {
            id: res.data._id,
            requestId: res.requestId
          });
        }
      }).catch(function(err) {
        callback(err);
      });
      return callback.promise;
    };
    DocumentReference3.prototype.set = function(data, callback) {
      callback = callback || createPromiseCallback();
      if (!this.id) {
        return Promise.resolve({
          code: "INVALID_PARAM",
          message: "docId\u4E0D\u80FD\u4E3A\u7A7A"
        });
      }
      if (!data || typeof data !== "object") {
        return Promise.resolve({
          code: "INVALID_PARAM",
          message: "\u53C2\u6570\u5FC5\u9700\u662F\u975E\u7A7A\u5BF9\u8C61"
        });
      }
      if (data.hasOwnProperty("_id")) {
        return Promise.resolve({
          code: "INVALID_PARAM",
          message: "\u4E0D\u80FD\u66F4\u65B0_id\u7684\u503C"
        });
      }
      var hasOperator = false;
      var checkMixed = function(objs) {
        if (typeof objs === "object") {
          for (var key2 in objs) {
            if (objs[key2] instanceof UpdateCommand) {
              hasOperator = true;
            } else if (typeof objs[key2] === "object") {
              checkMixed(objs[key2]);
            }
          }
        }
      };
      checkMixed(data);
      if (hasOperator) {
        return Promise.resolve({
          code: "DATABASE_REQUEST_FAILED",
          message: "update operator complicit"
        });
      }
      var merge = false;
      var param = {
        collectionName: this._coll,
        queryType: QueryType.DOC,
        data: serialize(data),
        multi: false,
        merge,
        upsert: true
      };
      if (this.id) {
        param["query"] = { _id: this.id };
      }
      this.request.send("database.updateDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          callback(0, {
            updated: res.data.updated,
            upsertedId: res.data.upserted_id,
            requestId: res.requestId
          });
        }
      }).catch(function(err) {
        callback(err);
      });
      return callback.promise;
    };
    DocumentReference3.prototype.update = function(data, callback) {
      callback = callback || createPromiseCallback();
      if (!data || typeof data !== "object") {
        return Promise.resolve({
          code: "INVALID_PARAM",
          message: "\u53C2\u6570\u5FC5\u9700\u662F\u975E\u7A7A\u5BF9\u8C61"
        });
      }
      if (data.hasOwnProperty("_id")) {
        return Promise.resolve({
          code: "INVALID_PARAM",
          message: "\u4E0D\u80FD\u66F4\u65B0_id\u7684\u503C"
        });
      }
      var query = { _id: this.id };
      var merge = true;
      var param = {
        collectionName: this._coll,
        data: UpdateSerializer.encode(data),
        query,
        queryType: QueryType.DOC,
        multi: false,
        merge,
        upsert: false
      };
      this.request.send("database.updateDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          callback(0, {
            updated: res.data.updated,
            upsertedId: res.data.upserted_id,
            requestId: res.requestId
          });
        }
      }).catch(function(err) {
        callback(err);
      });
      return callback.promise;
    };
    DocumentReference3.prototype.remove = function(callback) {
      callback = callback || createPromiseCallback();
      var query = { _id: this.id };
      var param = {
        collectionName: this._coll,
        query,
        queryType: QueryType.DOC,
        multi: false
      };
      this.request.send("database.deleteDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          callback(0, {
            deleted: res.data.deleted,
            requestId: res.requestId
          });
        }
      }).catch(function(err) {
        callback(err);
      });
      return callback.promise;
    };
    DocumentReference3.prototype.get = function(callback) {
      callback = callback || createPromiseCallback();
      var query = { _id: this.id };
      var param = {
        collectionName: this._coll,
        query,
        queryType: QueryType.DOC,
        multi: false,
        projection: this.projection
      };
      this.request.send("database.queryDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          var documents = Util.formatResDocumentData(res.data.list);
          callback(0, {
            data: documents,
            requestId: res.requestId
          });
        }
      }).catch(function(err) {
        callback(err);
      });
      return callback.promise;
    };
    DocumentReference3.prototype.field = function(projection) {
      for (var k in projection) {
        if (projection[k]) {
          projection[k] = 1;
        } else {
          projection[k] = 0;
        }
      }
      return new DocumentReference3(this._db, this._coll, this.id, projection);
    };
    return DocumentReference3;
  })();

  // node_modules/@cloudbase/database/dist/esm/serializer/query.js
  var QuerySerializer = (function() {
    function QuerySerializer2() {
    }
    QuerySerializer2.encode = function(query) {
      var encoder = new QueryEncoder();
      return encoder.encodeQuery(query);
    };
    return QuerySerializer2;
  })();
  var QueryEncoder = (function() {
    function QueryEncoder2() {
    }
    QueryEncoder2.prototype.encodeQuery = function(query, key2) {
      var _a2;
      if (isConversionRequired(query)) {
        if (isLogicCommand(query)) {
          return this.encodeLogicCommand(query);
        } else if (isQueryCommand(query)) {
          return this.encodeQueryCommand(query);
        } else {
          return _a2 = {}, _a2[key2] = this.encodeQueryObject(query), _a2;
        }
      } else {
        if (isObject(query)) {
          return this.encodeQueryObject(query);
        } else {
          return query;
        }
      }
    };
    QueryEncoder2.prototype.encodeRegExp = function(query) {
      return {
        $regex: query.source,
        $options: query.flags
      };
    };
    QueryEncoder2.prototype.encodeLogicCommand = function(query) {
      var _a2, _b, _c, _d, _e, _f, _g;
      var _this = this;
      switch (query.operator) {
        case LOGIC_COMMANDS_LITERAL.NOR:
        case LOGIC_COMMANDS_LITERAL.AND:
        case LOGIC_COMMANDS_LITERAL.OR: {
          var $op = operatorToString(query.operator);
          var subqueries = query.operands.map(function(oprand) {
            return _this.encodeQuery(oprand, query.fieldName);
          });
          return _a2 = {}, _a2[$op] = subqueries, _a2;
        }
        case LOGIC_COMMANDS_LITERAL.NOT: {
          var $op = operatorToString(query.operator);
          var operatorExpression = query.operands[0];
          if (isRegExp(operatorExpression)) {
            return _b = {}, _b[query.fieldName] = (_c = {}, _c[$op] = this.encodeRegExp(operatorExpression), _c), _b;
          } else {
            var subqueries = this.encodeQuery(operatorExpression)[query.fieldName];
            return _d = {}, _d[query.fieldName] = (_e = {}, _e[$op] = subqueries, _e), _d;
          }
        }
        default: {
          var $op = operatorToString(query.operator);
          if (query.operands.length === 1) {
            var subquery = this.encodeQuery(query.operands[0]);
            return _f = {}, _f[$op] = subquery, _f;
          } else {
            var subqueries = query.operands.map(this.encodeQuery.bind(this));
            return _g = {}, _g[$op] = subqueries, _g;
          }
        }
      }
    };
    QueryEncoder2.prototype.encodeQueryCommand = function(query) {
      if (isComparisonCommand(query)) {
        return this.encodeComparisonCommand(query);
      } else {
        return this.encodeComparisonCommand(query);
      }
    };
    QueryEncoder2.prototype.encodeComparisonCommand = function(query) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _j;
      if (query.fieldName === SYMBOL_UNSET_FIELD_NAME) {
        throw new Error("Cannot encode a comparison command with unset field name");
      }
      var $op = operatorToString(query.operator);
      switch (query.operator) {
        case QUERY_COMMANDS_LITERAL.EQ:
        case QUERY_COMMANDS_LITERAL.NEQ:
        case QUERY_COMMANDS_LITERAL.LT:
        case QUERY_COMMANDS_LITERAL.LTE:
        case QUERY_COMMANDS_LITERAL.GT:
        case QUERY_COMMANDS_LITERAL.GTE:
        case QUERY_COMMANDS_LITERAL.ELEM_MATCH:
        case QUERY_COMMANDS_LITERAL.EXISTS:
        case QUERY_COMMANDS_LITERAL.SIZE:
        case QUERY_COMMANDS_LITERAL.MOD: {
          return _a2 = {}, _a2[query.fieldName] = (_b = {}, _b[$op] = encodeInternalDataType(query.operands[0]), _b), _a2;
        }
        case QUERY_COMMANDS_LITERAL.IN:
        case QUERY_COMMANDS_LITERAL.NIN:
        case QUERY_COMMANDS_LITERAL.ALL: {
          return _c = {}, _c[query.fieldName] = (_d = {}, _d[$op] = encodeInternalDataType(query.operands), _d), _c;
        }
        case QUERY_COMMANDS_LITERAL.GEO_NEAR: {
          var options = query.operands[0];
          return _e = {}, _e[query.fieldName] = {
            $nearSphere: {
              $geometry: options.geometry.toJSON(),
              $maxDistance: options.maxDistance,
              $minDistance: options.minDistance
            }
          }, _e;
        }
        case QUERY_COMMANDS_LITERAL.GEO_WITHIN: {
          var options = query.operands[0];
          return _f = {}, _f[query.fieldName] = {
            $geoWithin: {
              $geometry: options.geometry.toJSON()
            }
          }, _f;
        }
        case QUERY_COMMANDS_LITERAL.GEO_INTERSECTS: {
          var options = query.operands[0];
          return _g = {}, _g[query.fieldName] = {
            $geoIntersects: {
              $geometry: options.geometry.toJSON()
            }
          }, _g;
        }
        default: {
          return _h = {}, _h[query.fieldName] = (_j = {}, _j[$op] = encodeInternalDataType(query.operands[0]), _j), _h;
        }
      }
    };
    QueryEncoder2.prototype.encodeQueryObject = function(query) {
      var flattened = flattenQueryObject(query);
      for (var key2 in flattened) {
        var val = flattened[key2];
        if (isLogicCommand(val)) {
          flattened[key2] = val._setFieldName(key2);
          var condition = this.encodeLogicCommand(flattened[key2]);
          this.mergeConditionAfterEncode(flattened, condition, key2);
        } else if (isComparisonCommand(val)) {
          flattened[key2] = val._setFieldName(key2);
          var condition = this.encodeComparisonCommand(flattened[key2]);
          this.mergeConditionAfterEncode(flattened, condition, key2);
        } else if (isConversionRequired(val)) {
          flattened[key2] = encodeInternalDataType(val);
        }
      }
      return flattened;
    };
    QueryEncoder2.prototype.mergeConditionAfterEncode = function(query, condition, key2) {
      if (!condition[key2]) {
        delete query[key2];
      }
      for (var conditionKey in condition) {
        if (query[conditionKey]) {
          if (isArray2(query[conditionKey])) {
            query[conditionKey] = query[conditionKey].concat(condition[conditionKey]);
          } else if (isObject(query[conditionKey])) {
            if (isObject(condition[conditionKey])) {
              Object.assign(query, condition);
            } else {
              console.warn("unmergable condition, query is object but condition is " + getType(condition) + ", can only overwrite", condition, key2);
              query[conditionKey] = condition[conditionKey];
            }
          } else {
            console.warn("to-merge query is of type " + getType(query) + ", can only overwrite", query, condition, key2);
            query[conditionKey] = condition[conditionKey];
          }
        } else {
          query[conditionKey] = condition[conditionKey];
        }
      }
    };
    return QueryEncoder2;
  })();

  // node_modules/@cloudbase/database/dist/esm/query.js
  var __assign10 = function() {
    __assign10 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign10.apply(this, arguments);
  };
  var Query = (function() {
    function Query3(db, coll, fieldFilters, fieldOrders, queryOptions) {
      var _this = this;
      this.watch = function(options) {
        var ws = getWsInstance(_this._db);
        return ws.watch(__assign10(__assign10({}, options), { envId: _this._db.config.env, collectionName: _this._coll, query: JSON.stringify(_this._fieldFilters || {}), limit: _this._queryOptions.limit, orderBy: _this._fieldOrders ? _this._fieldOrders.reduce(function(acc, cur) {
          acc[cur.field] = cur.direction;
          return acc;
        }, {}) : void 0 }));
      };
      this._db = db;
      this._coll = coll;
      this._fieldFilters = fieldFilters;
      this._fieldOrders = fieldOrders || [];
      this._queryOptions = queryOptions || {};
      this._request = new Db.reqClass(this._db.config);
    }
    Query3.prototype.get = function(callback) {
      callback = callback || createPromiseCallback();
      var newOder = [];
      if (this._fieldOrders) {
        this._fieldOrders.forEach(function(order) {
          newOder.push(order);
        });
      }
      var param = {
        collectionName: this._coll,
        queryType: QueryType.WHERE
      };
      if (this._fieldFilters) {
        param.query = this._fieldFilters;
      }
      if (newOder.length > 0) {
        param.order = newOder;
      }
      if (this._queryOptions.offset) {
        param.offset = this._queryOptions.offset;
      }
      if (this._queryOptions.limit) {
        param.limit = this._queryOptions.limit < 1e3 ? this._queryOptions.limit : 1e3;
      } else {
        param.limit = 100;
      }
      if (this._queryOptions.projection) {
        param.projection = this._queryOptions.projection;
      }
      this._request.send("database.queryDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          var documents = Util.formatResDocumentData(res.data.list);
          var result = {
            data: documents,
            requestId: res.requestId
          };
          if (res.total)
            result.total = res.total;
          if (res.limit)
            result.limit = res.limit;
          if (res.offset)
            result.offset = res.offset;
          callback(0, result);
        }
      }).catch(function(err) {
        callback(err);
      });
      return callback.promise;
    };
    Query3.prototype.count = function(callback) {
      callback = callback || createPromiseCallback();
      var param = {
        collectionName: this._coll,
        queryType: QueryType.WHERE
      };
      if (this._fieldFilters) {
        param.query = this._fieldFilters;
      }
      this._request.send("database.countDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          callback(0, {
            requestId: res.requestId,
            total: res.data.total
          });
        }
      }).catch(function(e) {
        callback(e);
      });
      return callback.promise;
    };
    Query3.prototype.where = function(query) {
      if (Object.prototype.toString.call(query).slice(8, -1) !== "Object") {
        throw Error(ErrorCode.QueryParamTypeError);
      }
      var keys = Object.keys(query);
      var checkFlag = keys.some(function(item) {
        return query[item] !== void 0;
      });
      if (keys.length && !checkFlag) {
        throw Error(ErrorCode.QueryParamValueError);
      }
      return new Query3(this._db, this._coll, QuerySerializer.encode(query), this._fieldOrders, this._queryOptions);
    };
    Query3.prototype.orderBy = function(fieldPath, directionStr) {
      Validate.isFieldPath(fieldPath);
      Validate.isFieldOrder(directionStr);
      var newOrder = {
        field: fieldPath,
        direction: directionStr
      };
      var combinedOrders = this._fieldOrders.concat(newOrder);
      return new Query3(this._db, this._coll, this._fieldFilters, combinedOrders, this._queryOptions);
    };
    Query3.prototype.limit = function(limit) {
      Validate.isInteger("limit", limit);
      var option = __assign10({}, this._queryOptions);
      option.limit = limit;
      return new Query3(this._db, this._coll, this._fieldFilters, this._fieldOrders, option);
    };
    Query3.prototype.skip = function(offset) {
      Validate.isInteger("offset", offset);
      var option = __assign10({}, this._queryOptions);
      option.offset = offset;
      return new Query3(this._db, this._coll, this._fieldFilters, this._fieldOrders, option);
    };
    Query3.prototype.update = function(data, callback) {
      callback = callback || createPromiseCallback();
      if (!data || typeof data !== "object") {
        return Promise.resolve({
          code: "INVALID_PARAM",
          message: "\u53C2\u6570\u5FC5\u9700\u662F\u975E\u7A7A\u5BF9\u8C61"
        });
      }
      if (data.hasOwnProperty("_id")) {
        return Promise.resolve({
          code: "INVALID_PARAM",
          message: "\u4E0D\u80FD\u66F4\u65B0_id\u7684\u503C"
        });
      }
      var param = {
        collectionName: this._coll,
        query: this._fieldFilters,
        queryType: QueryType.WHERE,
        multi: true,
        merge: true,
        upsert: false,
        data: UpdateSerializer.encode(data)
      };
      this._request.send("database.updateDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          callback(0, {
            requestId: res.requestId,
            updated: res.data.updated,
            upsertId: res.data.upsert_id
          });
        }
      }).catch(function(e) {
        callback(e);
      });
      return callback.promise;
    };
    Query3.prototype.field = function(projection) {
      for (var k in projection) {
        if (projection[k]) {
          if (typeof projection[k] !== "object") {
            projection[k] = 1;
          }
        } else {
          projection[k] = 0;
        }
      }
      var option = __assign10({}, this._queryOptions);
      option.projection = projection;
      return new Query3(this._db, this._coll, this._fieldFilters, this._fieldOrders, option);
    };
    Query3.prototype.remove = function(callback) {
      callback = callback || createPromiseCallback();
      if (Object.keys(this._queryOptions).length > 0) {
        console.warn("`offset`, `limit` and `projection` are not supported in remove() operation");
      }
      if (this._fieldOrders.length > 0) {
        console.warn("`orderBy` is not supported in remove() operation");
      }
      var param = {
        collectionName: this._coll,
        query: QuerySerializer.encode(this._fieldFilters),
        queryType: QueryType.WHERE,
        multi: true
      };
      this._request.send("database.deleteDocument", param).then(function(res) {
        if (res.code) {
          callback(0, res);
        } else {
          callback(0, {
            requestId: res.requestId,
            deleted: res.data.deleted
          });
        }
      }).catch(function(e) {
        callback(e);
      });
      return callback.promise;
    };
    return Query3;
  })();

  // node_modules/bson/dist/bson.browser.esm.js
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  var byteLength_1 = byteLength;
  var toByteArray_1 = toByteArray;
  var fromByteArray_1 = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  var i;
  var len;
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i2;
    for (i2 = 0; i2 < len2; i2 += 4) {
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i2 = start; i2 < end; i2 += 3) {
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
    }
    return parts.join("");
  }
  var base64Js = {
    byteLength: byteLength_1,
    toByteArray: toByteArray_1,
    fromByteArray: fromByteArray_1
  };
  var read = function read2(buffer2, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i2 = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer2[offset + i2];
    i2 += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  var write = function write2(buffer2, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i2 = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i2] = m & 255, i2 += d, m /= 256, mLen -= 8) {
    }
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i2] = e & 255, i2 += d, e /= 256, eLen -= 8) {
    }
    buffer2[offset + i2 - d] |= s * 128;
  };
  var ieee754 = {
    read,
    write
  };
  var buffer$1 = createCommonjsModule(function(module, exports) {
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? (
      // eslint-disable-line dot-notation
      Symbol["for"]("nodejs.util.inspect.custom")
    ) : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = {
          foo: function foo() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function get() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function get() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers["typeof"](value));
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers["typeof"](value));
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength2(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i2 = 0; i2 < length; i2 += 1) {
        buf[i2] = array[i2] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len2 = checked(obj.length) | 0;
        var buf = createBuffer(len2);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len2);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) return 0;
      var x = a.length;
      var y = b.length;
      for (var i2 = 0, len2 = Math.min(x, y); i2 < len2; ++i2) {
        if (a[i2] !== b[i2]) {
          x = a[i2];
          y = b[i2];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      var buffer2 = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        var buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            Buffer2.from(buf).copy(buffer2, pos);
          } else {
            Uint8Array.prototype.set.call(buffer2, buf, pos);
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer2, pos);
        }
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength2(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + babelHelpers["typeof"](string));
      }
      var len2 = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len2 === 0) return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len2;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len2 * 2;
          case "hex":
            return len2 >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength2;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i2 = b[n];
      b[n] = b[m];
      b[m] = i2;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len2 = this.length;
      if (len2 % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i2 = 0; i2 < len2; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len2 = this.length;
      if (len2 % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i2 = 0; i2 < len2; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len2 = this.length;
      if (len2 % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i2 = 0; i2 < len2; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + babelHelpers["typeof"](target));
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len2 = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i2 = 0; i2 < len2; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x = thisCopy[i2];
          y = targetCopy[i2];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir) return -1;
        else byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read3(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      var i2;
      if (dir) {
        var foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read3(arr, i2) === read3(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read3(arr, i2 + j) !== read3(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i2;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i2 = 0; i2 < length; ++i2) {
        var parsed = parseInt(string.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed)) return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write3(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64Js.fromByteArray(buf);
      } else {
        return base64Js.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i2 = start;
      while (i2 < end) {
        var firstByte = buf[i2];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len2 = codePoints.length;
      if (len2 <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i2 = 0;
      while (i2 < len2) {
        res += String.fromCharCode.apply(String, codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len2 = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len2) end = len2;
      var out = "";
      for (var i2 = start; i2 < end; ++i2) {
        out += hexSliceLookupTable[buf[i2]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i2 = 0; i2 < bytes.length - 1; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len2 = this.length;
      start = ~~start;
      end = end === void 0 ? len2 : ~~end;
      if (start < 0) {
        start += len2;
        if (start < 0) start = 0;
      } else if (start > len2) {
        start = len2;
      }
      if (end < 0) {
        end += len2;
        if (end < 0) end = 0;
      } else if (end > len2) {
        end = len2;
      }
      if (end < start) end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength3, this.length);
      var val = this[offset];
      var mul = 1;
      var i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength3, this.length);
      }
      var val = this[offset + --byteLength3];
      var mul = 1;
      while (byteLength3 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength3] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength3, this.length);
      var val = this[offset];
      var mul = 1;
      var i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength3, this.length);
      var i2 = byteLength3;
      var mul = 1;
      var val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      var mul = 1;
      var i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      var i2 = byteLength3 - 1;
      var mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i2 = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i2 = byteLength3 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len2 = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len2;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code2 = val.charCodeAt(0);
          if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
            val = code2;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      var i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len2 = bytes.length;
        if (len2 === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len2];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i2 = 0; i2 < length; ++i2) {
        codePoint = string.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i2);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64Js.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i2 = 0; i2 < length; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src.length) break;
        dst[i2 + offset] = src[i2];
      }
      return i2;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = (function() {
      var alphabet = "0123456789abcdef";
      var table = new Array(256);
      for (var i2 = 0; i2 < 16; ++i2) {
        var i16 = i2 * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i2] + alphabet[j];
        }
      }
      return table;
    })();
  });
  var buffer_1 = buffer$1.Buffer;
  buffer$1.SlowBuffer;
  buffer$1.INSPECT_MAX_BYTES;
  buffer$1.kMaxLength;
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) {
        if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      }
    };
    return _extendStatics(d, b);
  };
  function __extends11(d, b) {
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var BSONError = (
    /** @class */
    (function(_super) {
      __extends11(BSONError2, _super);
      function BSONError2(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, BSONError2.prototype);
        return _this;
      }
      Object.defineProperty(BSONError2.prototype, "name", {
        get: function() {
          return "BSONError";
        },
        enumerable: false,
        configurable: true
      });
      return BSONError2;
    })(Error)
  );
  var BSONTypeError = (
    /** @class */
    (function(_super) {
      __extends11(BSONTypeError2, _super);
      function BSONTypeError2(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, BSONTypeError2.prototype);
        return _this;
      }
      Object.defineProperty(BSONTypeError2.prototype, "name", {
        get: function() {
          return "BSONTypeError";
        },
        enumerable: false,
        configurable: true
      });
      return BSONTypeError2;
    })(TypeError)
  );
  function checkForMath(potentialGlobal) {
    return potentialGlobal && potentialGlobal.Math == Math && potentialGlobal;
  }
  function getGlobal() {
    return checkForMath(typeof globalThis === "object" && globalThis) || checkForMath(typeof window === "object" && window) || checkForMath(typeof self === "object" && self) || checkForMath(typeof global === "object" && global) || // eslint-disable-next-line @typescript-eslint/no-implied-eval
    Function("return this")();
  }
  function isReactNative() {
    var g = getGlobal();
    return typeof g.navigator === "object" && g.navigator.product === "ReactNative";
  }
  var insecureRandomBytes = function insecureRandomBytes2(size) {
    var insecureWarning = isReactNative() ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values." : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.";
    console.warn(insecureWarning);
    var result = buffer_1.alloc(size);
    for (var i2 = 0; i2 < size; ++i2)
      result[i2] = Math.floor(Math.random() * 256);
    return result;
  };
  var detectRandomBytes = function() {
    {
      if (typeof window !== "undefined") {
        var target_1 = window.crypto || window.msCrypto;
        if (target_1 && target_1.getRandomValues) {
          return function(size) {
            return target_1.getRandomValues(buffer_1.alloc(size));
          };
        }
      }
      if (typeof global !== "undefined" && global.crypto && global.crypto.getRandomValues) {
        return function(size) {
          return global.crypto.getRandomValues(buffer_1.alloc(size));
        };
      }
      return insecureRandomBytes;
    }
  };
  var randomBytes = detectRandomBytes();
  function isAnyArrayBuffer(value) {
    return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(Object.prototype.toString.call(value));
  }
  function isUint8Array(value) {
    return Object.prototype.toString.call(value) === "[object Uint8Array]";
  }
  function isRegExp2(d) {
    return Object.prototype.toString.call(d) === "[object RegExp]";
  }
  function isDate2(d) {
    return isObjectLike(d) && Object.prototype.toString.call(d) === "[object Date]";
  }
  function isObjectLike(candidate) {
    return typeof candidate === "object" && candidate !== null;
  }
  function deprecate(fn, message) {
    var warned = false;
    function deprecated() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (!warned) {
        console.warn(message);
        warned = true;
      }
      return fn.apply(this, args);
    }
    return deprecated;
  }
  function ensureBuffer(potentialBuffer) {
    if (ArrayBuffer.isView(potentialBuffer)) {
      return buffer_1.from(potentialBuffer.buffer, potentialBuffer.byteOffset, potentialBuffer.byteLength);
    }
    if (isAnyArrayBuffer(potentialBuffer)) {
      return buffer_1.from(potentialBuffer);
    }
    throw new BSONTypeError("Must use either Buffer or TypedArray");
  }
  var VALIDATION_REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i;
  var uuidValidateString = function(str) {
    return typeof str === "string" && VALIDATION_REGEX.test(str);
  };
  var uuidHexStringToBuffer = function(hexString) {
    if (!uuidValidateString(hexString)) {
      throw new BSONTypeError('UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".');
    }
    var sanitizedHexString = hexString.replace(/-/g, "");
    return buffer_1.from(sanitizedHexString, "hex");
  };
  var bufferToUuidHexString = function(buffer2, includeDashes) {
    if (includeDashes === void 0) {
      includeDashes = true;
    }
    return includeDashes ? buffer2.toString("hex", 0, 4) + "-" + buffer2.toString("hex", 4, 6) + "-" + buffer2.toString("hex", 6, 8) + "-" + buffer2.toString("hex", 8, 10) + "-" + buffer2.toString("hex", 10, 16) : buffer2.toString("hex");
  };
  var BSON_INT64_MAX$1 = Math.pow(2, 63) - 1;
  var BSON_INT64_MIN$1 = -Math.pow(2, 63);
  var JS_INT_MAX = Math.pow(2, 53);
  var JS_INT_MIN = -Math.pow(2, 53);
  var BSON_BINARY_SUBTYPE_UUID_NEW = 4;
  var Binary = (
    /** @class */
    (function() {
      function Binary2(buffer2, subType) {
        if (!(this instanceof Binary2))
          return new Binary2(buffer2, subType);
        if (!(buffer2 == null) && !(typeof buffer2 === "string") && !ArrayBuffer.isView(buffer2) && !(buffer2 instanceof ArrayBuffer) && !Array.isArray(buffer2)) {
          throw new BSONTypeError("Binary can only be constructed from string, Buffer, TypedArray, or Array<number>");
        }
        this.sub_type = subType !== null && subType !== void 0 ? subType : Binary2.BSON_BINARY_SUBTYPE_DEFAULT;
        if (buffer2 == null) {
          this.buffer = buffer_1.alloc(Binary2.BUFFER_SIZE);
          this.position = 0;
        } else {
          if (typeof buffer2 === "string") {
            this.buffer = buffer_1.from(buffer2, "binary");
          } else if (Array.isArray(buffer2)) {
            this.buffer = buffer_1.from(buffer2);
          } else {
            this.buffer = ensureBuffer(buffer2);
          }
          this.position = this.buffer.byteLength;
        }
      }
      Binary2.prototype.put = function(byteValue) {
        if (typeof byteValue === "string" && byteValue.length !== 1) {
          throw new BSONTypeError("only accepts single character String");
        } else if (typeof byteValue !== "number" && byteValue.length !== 1)
          throw new BSONTypeError("only accepts single character Uint8Array or Array");
        var decodedByte;
        if (typeof byteValue === "string") {
          decodedByte = byteValue.charCodeAt(0);
        } else if (typeof byteValue === "number") {
          decodedByte = byteValue;
        } else {
          decodedByte = byteValue[0];
        }
        if (decodedByte < 0 || decodedByte > 255) {
          throw new BSONTypeError("only accepts number in a valid unsigned byte range 0-255");
        }
        if (this.buffer.length > this.position) {
          this.buffer[this.position++] = decodedByte;
        } else {
          var buffer2 = buffer_1.alloc(Binary2.BUFFER_SIZE + this.buffer.length);
          this.buffer.copy(buffer2, 0, 0, this.buffer.length);
          this.buffer = buffer2;
          this.buffer[this.position++] = decodedByte;
        }
      };
      Binary2.prototype.write = function(sequence, offset) {
        offset = typeof offset === "number" ? offset : this.position;
        if (this.buffer.length < offset + sequence.length) {
          var buffer2 = buffer_1.alloc(this.buffer.length + sequence.length);
          this.buffer.copy(buffer2, 0, 0, this.buffer.length);
          this.buffer = buffer2;
        }
        if (ArrayBuffer.isView(sequence)) {
          this.buffer.set(ensureBuffer(sequence), offset);
          this.position = offset + sequence.byteLength > this.position ? offset + sequence.length : this.position;
        } else if (typeof sequence === "string") {
          this.buffer.write(sequence, offset, sequence.length, "binary");
          this.position = offset + sequence.length > this.position ? offset + sequence.length : this.position;
        }
      };
      Binary2.prototype.read = function(position, length) {
        length = length && length > 0 ? length : this.position;
        return this.buffer.slice(position, position + length);
      };
      Binary2.prototype.value = function(asRaw) {
        asRaw = !!asRaw;
        if (asRaw && this.buffer.length === this.position) {
          return this.buffer;
        }
        if (asRaw) {
          return this.buffer.slice(0, this.position);
        }
        return this.buffer.toString("binary", 0, this.position);
      };
      Binary2.prototype.length = function() {
        return this.position;
      };
      Binary2.prototype.toJSON = function() {
        return this.buffer.toString("base64");
      };
      Binary2.prototype.toString = function(format) {
        return this.buffer.toString(format);
      };
      Binary2.prototype.toExtendedJSON = function(options) {
        options = options || {};
        var base64String = this.buffer.toString("base64");
        var subType = Number(this.sub_type).toString(16);
        if (options.legacy) {
          return {
            $binary: base64String,
            $type: subType.length === 1 ? "0" + subType : subType
          };
        }
        return {
          $binary: {
            base64: base64String,
            subType: subType.length === 1 ? "0" + subType : subType
          }
        };
      };
      Binary2.prototype.toUUID = function() {
        if (this.sub_type === Binary2.SUBTYPE_UUID) {
          return new UUID(this.buffer.slice(0, this.position));
        }
        throw new BSONError('Binary sub_type "'.concat(this.sub_type, '" is not supported for converting to UUID. Only "').concat(Binary2.SUBTYPE_UUID, '" is currently supported.'));
      };
      Binary2.fromExtendedJSON = function(doc, options) {
        options = options || {};
        var data;
        var type;
        if ("$binary" in doc) {
          if (options.legacy && typeof doc.$binary === "string" && "$type" in doc) {
            type = doc.$type ? parseInt(doc.$type, 16) : 0;
            data = buffer_1.from(doc.$binary, "base64");
          } else {
            if (typeof doc.$binary !== "string") {
              type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
              data = buffer_1.from(doc.$binary.base64, "base64");
            }
          }
        } else if ("$uuid" in doc) {
          type = 4;
          data = uuidHexStringToBuffer(doc.$uuid);
        }
        if (!data) {
          throw new BSONTypeError("Unexpected Binary Extended JSON format ".concat(JSON.stringify(doc)));
        }
        return type === BSON_BINARY_SUBTYPE_UUID_NEW ? new UUID(data) : new Binary2(data, type);
      };
      Binary2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      Binary2.prototype.inspect = function() {
        var asBuffer = this.value(true);
        return 'new Binary(Buffer.from("'.concat(asBuffer.toString("hex"), '", "hex"), ').concat(this.sub_type, ")");
      };
      Binary2.BSON_BINARY_SUBTYPE_DEFAULT = 0;
      Binary2.BUFFER_SIZE = 256;
      Binary2.SUBTYPE_DEFAULT = 0;
      Binary2.SUBTYPE_FUNCTION = 1;
      Binary2.SUBTYPE_BYTE_ARRAY = 2;
      Binary2.SUBTYPE_UUID_OLD = 3;
      Binary2.SUBTYPE_UUID = 4;
      Binary2.SUBTYPE_MD5 = 5;
      Binary2.SUBTYPE_ENCRYPTED = 6;
      Binary2.SUBTYPE_COLUMN = 7;
      Binary2.SUBTYPE_USER_DEFINED = 128;
      return Binary2;
    })()
  );
  Object.defineProperty(Binary.prototype, "_bsontype", { value: "Binary" });
  var UUID_BYTE_LENGTH = 16;
  var UUID = (
    /** @class */
    (function(_super) {
      __extends11(UUID2, _super);
      function UUID2(input) {
        var _this = this;
        var bytes;
        var hexStr;
        if (input == null) {
          bytes = UUID2.generate();
        } else if (input instanceof UUID2) {
          bytes = buffer_1.from(input.buffer);
          hexStr = input.__id;
        } else if (ArrayBuffer.isView(input) && input.byteLength === UUID_BYTE_LENGTH) {
          bytes = ensureBuffer(input);
        } else if (typeof input === "string") {
          bytes = uuidHexStringToBuffer(input);
        } else {
          throw new BSONTypeError("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
        }
        _this = _super.call(this, bytes, BSON_BINARY_SUBTYPE_UUID_NEW) || this;
        _this.__id = hexStr;
        return _this;
      }
      Object.defineProperty(UUID2.prototype, "id", {
        /**
         * The UUID bytes
         * @readonly
         */
        get: function() {
          return this.buffer;
        },
        set: function(value) {
          this.buffer = value;
          if (UUID2.cacheHexString) {
            this.__id = bufferToUuidHexString(value);
          }
        },
        enumerable: false,
        configurable: true
      });
      UUID2.prototype.toHexString = function(includeDashes) {
        if (includeDashes === void 0) {
          includeDashes = true;
        }
        if (UUID2.cacheHexString && this.__id) {
          return this.__id;
        }
        var uuidHexString = bufferToUuidHexString(this.id, includeDashes);
        if (UUID2.cacheHexString) {
          this.__id = uuidHexString;
        }
        return uuidHexString;
      };
      UUID2.prototype.toString = function(encoding) {
        return encoding ? this.id.toString(encoding) : this.toHexString();
      };
      UUID2.prototype.toJSON = function() {
        return this.toHexString();
      };
      UUID2.prototype.equals = function(otherId) {
        if (!otherId) {
          return false;
        }
        if (otherId instanceof UUID2) {
          return otherId.id.equals(this.id);
        }
        try {
          return new UUID2(otherId).id.equals(this.id);
        } catch (_a2) {
          return false;
        }
      };
      UUID2.prototype.toBinary = function() {
        return new Binary(this.id, Binary.SUBTYPE_UUID);
      };
      UUID2.generate = function() {
        var bytes = randomBytes(UUID_BYTE_LENGTH);
        bytes[6] = bytes[6] & 15 | 64;
        bytes[8] = bytes[8] & 63 | 128;
        return buffer_1.from(bytes);
      };
      UUID2.isValid = function(input) {
        if (!input) {
          return false;
        }
        if (input instanceof UUID2) {
          return true;
        }
        if (typeof input === "string") {
          return uuidValidateString(input);
        }
        if (isUint8Array(input)) {
          if (input.length !== UUID_BYTE_LENGTH) {
            return false;
          }
          return (input[6] & 240) === 64 && (input[8] & 128) === 128;
        }
        return false;
      };
      UUID2.createFromHexString = function(hexString) {
        var buffer2 = uuidHexStringToBuffer(hexString);
        return new UUID2(buffer2);
      };
      UUID2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      UUID2.prototype.inspect = function() {
        return 'new UUID("'.concat(this.toHexString(), '")');
      };
      return UUID2;
    })(Binary)
  );
  var Code = (
    /** @class */
    (function() {
      function Code2(code2, scope) {
        if (!(this instanceof Code2))
          return new Code2(code2, scope);
        this.code = code2;
        this.scope = scope;
      }
      Code2.prototype.toJSON = function() {
        return { code: this.code, scope: this.scope };
      };
      Code2.prototype.toExtendedJSON = function() {
        if (this.scope) {
          return { $code: this.code, $scope: this.scope };
        }
        return { $code: this.code };
      };
      Code2.fromExtendedJSON = function(doc) {
        return new Code2(doc.$code, doc.$scope);
      };
      Code2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      Code2.prototype.inspect = function() {
        var codeJson = this.toJSON();
        return 'new Code("'.concat(String(codeJson.code), '"').concat(codeJson.scope ? ", ".concat(JSON.stringify(codeJson.scope)) : "", ")");
      };
      return Code2;
    })()
  );
  Object.defineProperty(Code.prototype, "_bsontype", { value: "Code" });
  function isDBRefLike(value) {
    return isObjectLike(value) && value.$id != null && typeof value.$ref === "string" && (value.$db == null || typeof value.$db === "string");
  }
  var DBRef = (
    /** @class */
    (function() {
      function DBRef2(collection, oid, db, fields) {
        if (!(this instanceof DBRef2))
          return new DBRef2(collection, oid, db, fields);
        var parts = collection.split(".");
        if (parts.length === 2) {
          db = parts.shift();
          collection = parts.shift();
        }
        this.collection = collection;
        this.oid = oid;
        this.db = db;
        this.fields = fields || {};
      }
      Object.defineProperty(DBRef2.prototype, "namespace", {
        // Property provided for compatibility with the 1.x parser
        // the 1.x parser used a "namespace" property, while 4.x uses "collection"
        /** @internal */
        get: function() {
          return this.collection;
        },
        set: function(value) {
          this.collection = value;
        },
        enumerable: false,
        configurable: true
      });
      DBRef2.prototype.toJSON = function() {
        var o = Object.assign({
          $ref: this.collection,
          $id: this.oid
        }, this.fields);
        if (this.db != null)
          o.$db = this.db;
        return o;
      };
      DBRef2.prototype.toExtendedJSON = function(options) {
        options = options || {};
        var o = {
          $ref: this.collection,
          $id: this.oid
        };
        if (options.legacy) {
          return o;
        }
        if (this.db)
          o.$db = this.db;
        o = Object.assign(o, this.fields);
        return o;
      };
      DBRef2.fromExtendedJSON = function(doc) {
        var copy = Object.assign({}, doc);
        delete copy.$ref;
        delete copy.$id;
        delete copy.$db;
        return new DBRef2(doc.$ref, doc.$id, doc.$db, copy);
      };
      DBRef2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      DBRef2.prototype.inspect = function() {
        var oid = this.oid === void 0 || this.oid.toString === void 0 ? this.oid : this.oid.toString();
        return 'new DBRef("'.concat(this.namespace, '", new ObjectId("').concat(String(oid), '")').concat(this.db ? ', "'.concat(this.db, '"') : "", ")");
      };
      return DBRef2;
    })()
  );
  Object.defineProperty(DBRef.prototype, "_bsontype", { value: "DBRef" });
  var wasm = void 0;
  try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(
      // prettier-ignore
      new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])
    ), {}).exports;
  } catch (_a2) {
  }
  var TWO_PWR_16_DBL = 1 << 16;
  var TWO_PWR_24_DBL = 1 << 24;
  var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
  var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
  var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
  var INT_CACHE = {};
  var UINT_CACHE = {};
  var Long = (
    /** @class */
    (function() {
      function Long2(low, high, unsigned) {
        if (low === void 0) {
          low = 0;
        }
        if (!(this instanceof Long2))
          return new Long2(low, high, unsigned);
        if (typeof low === "bigint") {
          Object.assign(this, Long2.fromBigInt(low, !!high));
        } else if (typeof low === "string") {
          Object.assign(this, Long2.fromString(low, !!high));
        } else {
          this.low = low | 0;
          this.high = high | 0;
          this.unsigned = !!unsigned;
        }
        Object.defineProperty(this, "__isLong__", {
          value: true,
          configurable: false,
          writable: false,
          enumerable: false
        });
      }
      Long2.fromBits = function(lowBits, highBits, unsigned) {
        return new Long2(lowBits, highBits, unsigned);
      };
      Long2.fromInt = function(value, unsigned) {
        var obj, cachedObj, cache2;
        if (unsigned) {
          value >>>= 0;
          if (cache2 = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
              return cachedObj;
          }
          obj = Long2.fromBits(value, (value | 0) < 0 ? -1 : 0, true);
          if (cache2)
            UINT_CACHE[value] = obj;
          return obj;
        } else {
          value |= 0;
          if (cache2 = -128 <= value && value < 128) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
              return cachedObj;
          }
          obj = Long2.fromBits(value, value < 0 ? -1 : 0, false);
          if (cache2)
            INT_CACHE[value] = obj;
          return obj;
        }
      };
      Long2.fromNumber = function(value, unsigned) {
        if (isNaN(value))
          return unsigned ? Long2.UZERO : Long2.ZERO;
        if (unsigned) {
          if (value < 0)
            return Long2.UZERO;
          if (value >= TWO_PWR_64_DBL)
            return Long2.MAX_UNSIGNED_VALUE;
        } else {
          if (value <= -TWO_PWR_63_DBL)
            return Long2.MIN_VALUE;
          if (value + 1 >= TWO_PWR_63_DBL)
            return Long2.MAX_VALUE;
        }
        if (value < 0)
          return Long2.fromNumber(-value, unsigned).neg();
        return Long2.fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
      };
      Long2.fromBigInt = function(value, unsigned) {
        return Long2.fromString(value.toString(), unsigned);
      };
      Long2.fromString = function(str, unsigned, radix) {
        if (str.length === 0)
          throw Error("empty string");
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
          return Long2.ZERO;
        if (typeof unsigned === "number") {
          radix = unsigned, unsigned = false;
        } else {
          unsigned = !!unsigned;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
          throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0)
          throw Error("interior hyphen");
        else if (p === 0) {
          return Long2.fromString(str.substring(1), unsigned, radix).neg();
        }
        var radixToPower = Long2.fromNumber(Math.pow(radix, 8));
        var result = Long2.ZERO;
        for (var i2 = 0; i2 < str.length; i2 += 8) {
          var size = Math.min(8, str.length - i2), value = parseInt(str.substring(i2, i2 + size), radix);
          if (size < 8) {
            var power = Long2.fromNumber(Math.pow(radix, size));
            result = result.mul(power).add(Long2.fromNumber(value));
          } else {
            result = result.mul(radixToPower);
            result = result.add(Long2.fromNumber(value));
          }
        }
        result.unsigned = unsigned;
        return result;
      };
      Long2.fromBytes = function(bytes, unsigned, le) {
        return le ? Long2.fromBytesLE(bytes, unsigned) : Long2.fromBytesBE(bytes, unsigned);
      };
      Long2.fromBytesLE = function(bytes, unsigned) {
        return new Long2(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
      };
      Long2.fromBytesBE = function(bytes, unsigned) {
        return new Long2(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
      };
      Long2.isLong = function(value) {
        return isObjectLike(value) && value["__isLong__"] === true;
      };
      Long2.fromValue = function(val, unsigned) {
        if (typeof val === "number")
          return Long2.fromNumber(val, unsigned);
        if (typeof val === "string")
          return Long2.fromString(val, unsigned);
        return Long2.fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
      };
      Long2.prototype.add = function(addend) {
        if (!Long2.isLong(addend))
          addend = Long2.fromValue(addend);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 65535;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 + b48;
        c48 &= 65535;
        return Long2.fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      Long2.prototype.and = function(other) {
        if (!Long2.isLong(other))
          other = Long2.fromValue(other);
        return Long2.fromBits(this.low & other.low, this.high & other.high, this.unsigned);
      };
      Long2.prototype.compare = function(other) {
        if (!Long2.isLong(other))
          other = Long2.fromValue(other);
        if (this.eq(other))
          return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
          return -1;
        if (!thisNeg && otherNeg)
          return 1;
        if (!this.unsigned)
          return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
      };
      Long2.prototype.comp = function(other) {
        return this.compare(other);
      };
      Long2.prototype.divide = function(divisor) {
        if (!Long2.isLong(divisor))
          divisor = Long2.fromValue(divisor);
        if (divisor.isZero())
          throw Error("division by zero");
        if (wasm) {
          if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
            return this;
          }
          var low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
          return Long2.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (this.isZero())
          return this.unsigned ? Long2.UZERO : Long2.ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
          if (this.eq(Long2.MIN_VALUE)) {
            if (divisor.eq(Long2.ONE) || divisor.eq(Long2.NEG_ONE))
              return Long2.MIN_VALUE;
            else if (divisor.eq(Long2.MIN_VALUE))
              return Long2.ONE;
            else {
              var halfThis = this.shr(1);
              approx = halfThis.div(divisor).shl(1);
              if (approx.eq(Long2.ZERO)) {
                return divisor.isNegative() ? Long2.ONE : Long2.NEG_ONE;
              } else {
                rem = this.sub(divisor.mul(approx));
                res = approx.add(rem.div(divisor));
                return res;
              }
            }
          } else if (divisor.eq(Long2.MIN_VALUE))
            return this.unsigned ? Long2.UZERO : Long2.ZERO;
          if (this.isNegative()) {
            if (divisor.isNegative())
              return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
          } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
          res = Long2.ZERO;
        } else {
          if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
          if (divisor.gt(this))
            return Long2.UZERO;
          if (divisor.gt(this.shru(1)))
            return Long2.UONE;
          res = Long2.UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
          approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
          var log2 = Math.ceil(Math.log(approx) / Math.LN2);
          var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
          var approxRes = Long2.fromNumber(approx);
          var approxRem = approxRes.mul(divisor);
          while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = Long2.fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
          }
          if (approxRes.isZero())
            approxRes = Long2.ONE;
          res = res.add(approxRes);
          rem = rem.sub(approxRem);
        }
        return res;
      };
      Long2.prototype.div = function(divisor) {
        return this.divide(divisor);
      };
      Long2.prototype.equals = function(other) {
        if (!Long2.isLong(other))
          other = Long2.fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
          return false;
        return this.high === other.high && this.low === other.low;
      };
      Long2.prototype.eq = function(other) {
        return this.equals(other);
      };
      Long2.prototype.getHighBits = function() {
        return this.high;
      };
      Long2.prototype.getHighBitsUnsigned = function() {
        return this.high >>> 0;
      };
      Long2.prototype.getLowBits = function() {
        return this.low;
      };
      Long2.prototype.getLowBitsUnsigned = function() {
        return this.low >>> 0;
      };
      Long2.prototype.getNumBitsAbs = function() {
        if (this.isNegative()) {
          return this.eq(Long2.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        }
        var val = this.high !== 0 ? this.high : this.low;
        var bit;
        for (bit = 31; bit > 0; bit--)
          if ((val & 1 << bit) !== 0)
            break;
        return this.high !== 0 ? bit + 33 : bit + 1;
      };
      Long2.prototype.greaterThan = function(other) {
        return this.comp(other) > 0;
      };
      Long2.prototype.gt = function(other) {
        return this.greaterThan(other);
      };
      Long2.prototype.greaterThanOrEqual = function(other) {
        return this.comp(other) >= 0;
      };
      Long2.prototype.gte = function(other) {
        return this.greaterThanOrEqual(other);
      };
      Long2.prototype.ge = function(other) {
        return this.greaterThanOrEqual(other);
      };
      Long2.prototype.isEven = function() {
        return (this.low & 1) === 0;
      };
      Long2.prototype.isNegative = function() {
        return !this.unsigned && this.high < 0;
      };
      Long2.prototype.isOdd = function() {
        return (this.low & 1) === 1;
      };
      Long2.prototype.isPositive = function() {
        return this.unsigned || this.high >= 0;
      };
      Long2.prototype.isZero = function() {
        return this.high === 0 && this.low === 0;
      };
      Long2.prototype.lessThan = function(other) {
        return this.comp(other) < 0;
      };
      Long2.prototype.lt = function(other) {
        return this.lessThan(other);
      };
      Long2.prototype.lessThanOrEqual = function(other) {
        return this.comp(other) <= 0;
      };
      Long2.prototype.lte = function(other) {
        return this.lessThanOrEqual(other);
      };
      Long2.prototype.modulo = function(divisor) {
        if (!Long2.isLong(divisor))
          divisor = Long2.fromValue(divisor);
        if (wasm) {
          var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
          return Long2.fromBits(low, wasm.get_high(), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
      };
      Long2.prototype.mod = function(divisor) {
        return this.modulo(divisor);
      };
      Long2.prototype.rem = function(divisor) {
        return this.modulo(divisor);
      };
      Long2.prototype.multiply = function(multiplier) {
        if (this.isZero())
          return Long2.ZERO;
        if (!Long2.isLong(multiplier))
          multiplier = Long2.fromValue(multiplier);
        if (wasm) {
          var low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
          return Long2.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (multiplier.isZero())
          return Long2.ZERO;
        if (this.eq(Long2.MIN_VALUE))
          return multiplier.isOdd() ? Long2.MIN_VALUE : Long2.ZERO;
        if (multiplier.eq(Long2.MIN_VALUE))
          return this.isOdd() ? Long2.MIN_VALUE : Long2.ZERO;
        if (this.isNegative()) {
          if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
          else
            return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative())
          return this.mul(multiplier.neg()).neg();
        if (this.lt(Long2.TWO_PWR_24) && multiplier.lt(Long2.TWO_PWR_24))
          return Long2.fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 65535;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 65535;
        return Long2.fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      Long2.prototype.mul = function(multiplier) {
        return this.multiply(multiplier);
      };
      Long2.prototype.negate = function() {
        if (!this.unsigned && this.eq(Long2.MIN_VALUE))
          return Long2.MIN_VALUE;
        return this.not().add(Long2.ONE);
      };
      Long2.prototype.neg = function() {
        return this.negate();
      };
      Long2.prototype.not = function() {
        return Long2.fromBits(~this.low, ~this.high, this.unsigned);
      };
      Long2.prototype.notEquals = function(other) {
        return !this.equals(other);
      };
      Long2.prototype.neq = function(other) {
        return this.notEquals(other);
      };
      Long2.prototype.ne = function(other) {
        return this.notEquals(other);
      };
      Long2.prototype.or = function(other) {
        if (!Long2.isLong(other))
          other = Long2.fromValue(other);
        return Long2.fromBits(this.low | other.low, this.high | other.high, this.unsigned);
      };
      Long2.prototype.shiftLeft = function(numBits) {
        if (Long2.isLong(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        else if (numBits < 32)
          return Long2.fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
        else
          return Long2.fromBits(0, this.low << numBits - 32, this.unsigned);
      };
      Long2.prototype.shl = function(numBits) {
        return this.shiftLeft(numBits);
      };
      Long2.prototype.shiftRight = function(numBits) {
        if (Long2.isLong(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        else if (numBits < 32)
          return Long2.fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
        else
          return Long2.fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      Long2.prototype.shr = function(numBits) {
        return this.shiftRight(numBits);
      };
      Long2.prototype.shiftRightUnsigned = function(numBits) {
        if (Long2.isLong(numBits))
          numBits = numBits.toInt();
        numBits &= 63;
        if (numBits === 0)
          return this;
        else {
          var high = this.high;
          if (numBits < 32) {
            var low = this.low;
            return Long2.fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
          } else if (numBits === 32)
            return Long2.fromBits(high, 0, this.unsigned);
          else
            return Long2.fromBits(high >>> numBits - 32, 0, this.unsigned);
        }
      };
      Long2.prototype.shr_u = function(numBits) {
        return this.shiftRightUnsigned(numBits);
      };
      Long2.prototype.shru = function(numBits) {
        return this.shiftRightUnsigned(numBits);
      };
      Long2.prototype.subtract = function(subtrahend) {
        if (!Long2.isLong(subtrahend))
          subtrahend = Long2.fromValue(subtrahend);
        return this.add(subtrahend.neg());
      };
      Long2.prototype.sub = function(subtrahend) {
        return this.subtract(subtrahend);
      };
      Long2.prototype.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      Long2.prototype.toNumber = function() {
        if (this.unsigned)
          return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
      };
      Long2.prototype.toBigInt = function() {
        return BigInt(this.toString());
      };
      Long2.prototype.toBytes = function(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
      };
      Long2.prototype.toBytesLE = function() {
        var hi = this.high, lo = this.low;
        return [
          lo & 255,
          lo >>> 8 & 255,
          lo >>> 16 & 255,
          lo >>> 24,
          hi & 255,
          hi >>> 8 & 255,
          hi >>> 16 & 255,
          hi >>> 24
        ];
      };
      Long2.prototype.toBytesBE = function() {
        var hi = this.high, lo = this.low;
        return [
          hi >>> 24,
          hi >>> 16 & 255,
          hi >>> 8 & 255,
          hi & 255,
          lo >>> 24,
          lo >>> 16 & 255,
          lo >>> 8 & 255,
          lo & 255
        ];
      };
      Long2.prototype.toSigned = function() {
        if (!this.unsigned)
          return this;
        return Long2.fromBits(this.low, this.high, false);
      };
      Long2.prototype.toString = function(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
          throw RangeError("radix");
        if (this.isZero())
          return "0";
        if (this.isNegative()) {
          if (this.eq(Long2.MIN_VALUE)) {
            var radixLong = Long2.fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
          } else
            return "-" + this.neg().toString(radix);
        }
        var radixToPower = Long2.fromNumber(Math.pow(radix, 6), this.unsigned);
        var rem = this;
        var result = "";
        while (true) {
          var remDiv = rem.div(radixToPower);
          var intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0;
          var digits = intval.toString(radix);
          rem = remDiv;
          if (rem.isZero()) {
            return digits + result;
          } else {
            while (digits.length < 6)
              digits = "0" + digits;
            result = "" + digits + result;
          }
        }
      };
      Long2.prototype.toUnsigned = function() {
        if (this.unsigned)
          return this;
        return Long2.fromBits(this.low, this.high, true);
      };
      Long2.prototype.xor = function(other) {
        if (!Long2.isLong(other))
          other = Long2.fromValue(other);
        return Long2.fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
      };
      Long2.prototype.eqz = function() {
        return this.isZero();
      };
      Long2.prototype.le = function(other) {
        return this.lessThanOrEqual(other);
      };
      Long2.prototype.toExtendedJSON = function(options) {
        if (options && options.relaxed)
          return this.toNumber();
        return { $numberLong: this.toString() };
      };
      Long2.fromExtendedJSON = function(doc, options) {
        var result = Long2.fromString(doc.$numberLong);
        return options && options.relaxed ? result.toNumber() : result;
      };
      Long2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      Long2.prototype.inspect = function() {
        return 'new Long("'.concat(this.toString(), '"').concat(this.unsigned ? ", true" : "", ")");
      };
      Long2.TWO_PWR_24 = Long2.fromInt(TWO_PWR_24_DBL);
      Long2.MAX_UNSIGNED_VALUE = Long2.fromBits(4294967295 | 0, 4294967295 | 0, true);
      Long2.ZERO = Long2.fromInt(0);
      Long2.UZERO = Long2.fromInt(0, true);
      Long2.ONE = Long2.fromInt(1);
      Long2.UONE = Long2.fromInt(1, true);
      Long2.NEG_ONE = Long2.fromInt(-1);
      Long2.MAX_VALUE = Long2.fromBits(4294967295 | 0, 2147483647 | 0, false);
      Long2.MIN_VALUE = Long2.fromBits(0, 2147483648 | 0, false);
      return Long2;
    })()
  );
  Object.defineProperty(Long.prototype, "__isLong__", { value: true });
  Object.defineProperty(Long.prototype, "_bsontype", { value: "Long" });
  var PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
  var PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
  var PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
  var EXPONENT_MAX = 6111;
  var EXPONENT_MIN = -6176;
  var EXPONENT_BIAS = 6176;
  var MAX_DIGITS = 34;
  var NAN_BUFFER = [
    124,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ].reverse();
  var INF_NEGATIVE_BUFFER = [
    248,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ].reverse();
  var INF_POSITIVE_BUFFER = [
    120,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ].reverse();
  var EXPONENT_REGEX = /^([-+])?(\d+)?$/;
  var COMBINATION_MASK = 31;
  var EXPONENT_MASK = 16383;
  var COMBINATION_INFINITY = 30;
  var COMBINATION_NAN = 31;
  function isDigit(value) {
    return !isNaN(parseInt(value, 10));
  }
  function divideu128(value) {
    var DIVISOR = Long.fromNumber(1e3 * 1e3 * 1e3);
    var _rem = Long.fromNumber(0);
    if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
      return { quotient: value, rem: _rem };
    }
    for (var i2 = 0; i2 <= 3; i2++) {
      _rem = _rem.shiftLeft(32);
      _rem = _rem.add(new Long(value.parts[i2], 0));
      value.parts[i2] = _rem.div(DIVISOR).low;
      _rem = _rem.modulo(DIVISOR);
    }
    return { quotient: value, rem: _rem };
  }
  function multiply64x2(left, right) {
    if (!left && !right) {
      return { high: Long.fromNumber(0), low: Long.fromNumber(0) };
    }
    var leftHigh = left.shiftRightUnsigned(32);
    var leftLow = new Long(left.getLowBits(), 0);
    var rightHigh = right.shiftRightUnsigned(32);
    var rightLow = new Long(right.getLowBits(), 0);
    var productHigh = leftHigh.multiply(rightHigh);
    var productMid = leftHigh.multiply(rightLow);
    var productMid2 = leftLow.multiply(rightHigh);
    var productLow = leftLow.multiply(rightLow);
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productMid = new Long(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productLow = productMid.shiftLeft(32).add(new Long(productLow.getLowBits(), 0));
    return { high: productHigh, low: productLow };
  }
  function lessThan(left, right) {
    var uhleft = left.high >>> 0;
    var uhright = right.high >>> 0;
    if (uhleft < uhright) {
      return true;
    } else if (uhleft === uhright) {
      var ulleft = left.low >>> 0;
      var ulright = right.low >>> 0;
      if (ulleft < ulright)
        return true;
    }
    return false;
  }
  function invalidErr(string, message) {
    throw new BSONTypeError('"'.concat(string, '" is not a valid Decimal128 string - ').concat(message));
  }
  var Decimal128 = (
    /** @class */
    (function() {
      function Decimal1282(bytes) {
        if (!(this instanceof Decimal1282))
          return new Decimal1282(bytes);
        if (typeof bytes === "string") {
          this.bytes = Decimal1282.fromString(bytes).bytes;
        } else if (isUint8Array(bytes)) {
          if (bytes.byteLength !== 16) {
            throw new BSONTypeError("Decimal128 must take a Buffer of 16 bytes");
          }
          this.bytes = bytes;
        } else {
          throw new BSONTypeError("Decimal128 must take a Buffer or string");
        }
      }
      Decimal1282.fromString = function(representation) {
        var isNegative = false;
        var sawRadix = false;
        var foundNonZero = false;
        var significantDigits = 0;
        var nDigitsRead = 0;
        var nDigits = 0;
        var radixPosition = 0;
        var firstNonZero = 0;
        var digits = [0];
        var nDigitsStored = 0;
        var digitsInsert = 0;
        var firstDigit = 0;
        var lastDigit = 0;
        var exponent = 0;
        var i2 = 0;
        var significandHigh = new Long(0, 0);
        var significandLow = new Long(0, 0);
        var biasedExponent = 0;
        var index = 0;
        if (representation.length >= 7e3) {
          throw new BSONTypeError("" + representation + " not a valid Decimal128 string");
        }
        var stringMatch = representation.match(PARSE_STRING_REGEXP);
        var infMatch = representation.match(PARSE_INF_REGEXP);
        var nanMatch = representation.match(PARSE_NAN_REGEXP);
        if (!stringMatch && !infMatch && !nanMatch || representation.length === 0) {
          throw new BSONTypeError("" + representation + " not a valid Decimal128 string");
        }
        if (stringMatch) {
          var unsignedNumber = stringMatch[2];
          var e = stringMatch[4];
          var expSign = stringMatch[5];
          var expNumber = stringMatch[6];
          if (e && expNumber === void 0)
            invalidErr(representation, "missing exponent power");
          if (e && unsignedNumber === void 0)
            invalidErr(representation, "missing exponent base");
          if (e === void 0 && (expSign || expNumber)) {
            invalidErr(representation, "missing e before exponent");
          }
        }
        if (representation[index] === "+" || representation[index] === "-") {
          isNegative = representation[index++] === "-";
        }
        if (!isDigit(representation[index]) && representation[index] !== ".") {
          if (representation[index] === "i" || representation[index] === "I") {
            return new Decimal1282(buffer_1.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
          } else if (representation[index] === "N") {
            return new Decimal1282(buffer_1.from(NAN_BUFFER));
          }
        }
        while (isDigit(representation[index]) || representation[index] === ".") {
          if (representation[index] === ".") {
            if (sawRadix)
              invalidErr(representation, "contains multiple periods");
            sawRadix = true;
            index = index + 1;
            continue;
          }
          if (nDigitsStored < 34) {
            if (representation[index] !== "0" || foundNonZero) {
              if (!foundNonZero) {
                firstNonZero = nDigitsRead;
              }
              foundNonZero = true;
              digits[digitsInsert++] = parseInt(representation[index], 10);
              nDigitsStored = nDigitsStored + 1;
            }
          }
          if (foundNonZero)
            nDigits = nDigits + 1;
          if (sawRadix)
            radixPosition = radixPosition + 1;
          nDigitsRead = nDigitsRead + 1;
          index = index + 1;
        }
        if (sawRadix && !nDigitsRead)
          throw new BSONTypeError("" + representation + " not a valid Decimal128 string");
        if (representation[index] === "e" || representation[index] === "E") {
          var match = representation.substr(++index).match(EXPONENT_REGEX);
          if (!match || !match[2])
            return new Decimal1282(buffer_1.from(NAN_BUFFER));
          exponent = parseInt(match[0], 10);
          index = index + match[0].length;
        }
        if (representation[index])
          return new Decimal1282(buffer_1.from(NAN_BUFFER));
        firstDigit = 0;
        if (!nDigitsStored) {
          firstDigit = 0;
          lastDigit = 0;
          digits[0] = 0;
          nDigits = 1;
          nDigitsStored = 1;
          significantDigits = 0;
        } else {
          lastDigit = nDigitsStored - 1;
          significantDigits = nDigits;
          if (significantDigits !== 1) {
            while (digits[firstNonZero + significantDigits - 1] === 0) {
              significantDigits = significantDigits - 1;
            }
          }
        }
        if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
          exponent = EXPONENT_MIN;
        } else {
          exponent = exponent - radixPosition;
        }
        while (exponent > EXPONENT_MAX) {
          lastDigit = lastDigit + 1;
          if (lastDigit - firstDigit > MAX_DIGITS) {
            var digitsString = digits.join("");
            if (digitsString.match(/^0+$/)) {
              exponent = EXPONENT_MAX;
              break;
            }
            invalidErr(representation, "overflow");
          }
          exponent = exponent - 1;
        }
        while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
          if (lastDigit === 0 && significantDigits < nDigitsStored) {
            exponent = EXPONENT_MIN;
            significantDigits = 0;
            break;
          }
          if (nDigitsStored < nDigits) {
            nDigits = nDigits - 1;
          } else {
            lastDigit = lastDigit - 1;
          }
          if (exponent < EXPONENT_MAX) {
            exponent = exponent + 1;
          } else {
            var digitsString = digits.join("");
            if (digitsString.match(/^0+$/)) {
              exponent = EXPONENT_MAX;
              break;
            }
            invalidErr(representation, "overflow");
          }
        }
        if (lastDigit - firstDigit + 1 < significantDigits) {
          var endOfString = nDigitsRead;
          if (sawRadix) {
            firstNonZero = firstNonZero + 1;
            endOfString = endOfString + 1;
          }
          if (isNegative) {
            firstNonZero = firstNonZero + 1;
            endOfString = endOfString + 1;
          }
          var roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
          var roundBit = 0;
          if (roundDigit >= 5) {
            roundBit = 1;
            if (roundDigit === 5) {
              roundBit = digits[lastDigit] % 2 === 1 ? 1 : 0;
              for (i2 = firstNonZero + lastDigit + 2; i2 < endOfString; i2++) {
                if (parseInt(representation[i2], 10)) {
                  roundBit = 1;
                  break;
                }
              }
            }
          }
          if (roundBit) {
            var dIdx = lastDigit;
            for (; dIdx >= 0; dIdx--) {
              if (++digits[dIdx] > 9) {
                digits[dIdx] = 0;
                if (dIdx === 0) {
                  if (exponent < EXPONENT_MAX) {
                    exponent = exponent + 1;
                    digits[dIdx] = 1;
                  } else {
                    return new Decimal1282(buffer_1.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
                  }
                }
              }
            }
          }
        }
        significandHigh = Long.fromNumber(0);
        significandLow = Long.fromNumber(0);
        if (significantDigits === 0) {
          significandHigh = Long.fromNumber(0);
          significandLow = Long.fromNumber(0);
        } else if (lastDigit - firstDigit < 17) {
          var dIdx = firstDigit;
          significandLow = Long.fromNumber(digits[dIdx++]);
          significandHigh = new Long(0, 0);
          for (; dIdx <= lastDigit; dIdx++) {
            significandLow = significandLow.multiply(Long.fromNumber(10));
            significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
          }
        } else {
          var dIdx = firstDigit;
          significandHigh = Long.fromNumber(digits[dIdx++]);
          for (; dIdx <= lastDigit - 17; dIdx++) {
            significandHigh = significandHigh.multiply(Long.fromNumber(10));
            significandHigh = significandHigh.add(Long.fromNumber(digits[dIdx]));
          }
          significandLow = Long.fromNumber(digits[dIdx++]);
          for (; dIdx <= lastDigit; dIdx++) {
            significandLow = significandLow.multiply(Long.fromNumber(10));
            significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
          }
        }
        var significand = multiply64x2(significandHigh, Long.fromString("100000000000000000"));
        significand.low = significand.low.add(significandLow);
        if (lessThan(significand.low, significandLow)) {
          significand.high = significand.high.add(Long.fromNumber(1));
        }
        biasedExponent = exponent + EXPONENT_BIAS;
        var dec = { low: Long.fromNumber(0), high: Long.fromNumber(0) };
        if (significand.high.shiftRightUnsigned(49).and(Long.fromNumber(1)).equals(Long.fromNumber(1))) {
          dec.high = dec.high.or(Long.fromNumber(3).shiftLeft(61));
          dec.high = dec.high.or(Long.fromNumber(biasedExponent).and(Long.fromNumber(16383).shiftLeft(47)));
          dec.high = dec.high.or(significand.high.and(Long.fromNumber(140737488355327)));
        } else {
          dec.high = dec.high.or(Long.fromNumber(biasedExponent & 16383).shiftLeft(49));
          dec.high = dec.high.or(significand.high.and(Long.fromNumber(562949953421311)));
        }
        dec.low = significand.low;
        if (isNegative) {
          dec.high = dec.high.or(Long.fromString("9223372036854775808"));
        }
        var buffer2 = buffer_1.alloc(16);
        index = 0;
        buffer2[index++] = dec.low.low & 255;
        buffer2[index++] = dec.low.low >> 8 & 255;
        buffer2[index++] = dec.low.low >> 16 & 255;
        buffer2[index++] = dec.low.low >> 24 & 255;
        buffer2[index++] = dec.low.high & 255;
        buffer2[index++] = dec.low.high >> 8 & 255;
        buffer2[index++] = dec.low.high >> 16 & 255;
        buffer2[index++] = dec.low.high >> 24 & 255;
        buffer2[index++] = dec.high.low & 255;
        buffer2[index++] = dec.high.low >> 8 & 255;
        buffer2[index++] = dec.high.low >> 16 & 255;
        buffer2[index++] = dec.high.low >> 24 & 255;
        buffer2[index++] = dec.high.high & 255;
        buffer2[index++] = dec.high.high >> 8 & 255;
        buffer2[index++] = dec.high.high >> 16 & 255;
        buffer2[index++] = dec.high.high >> 24 & 255;
        return new Decimal1282(buffer2);
      };
      Decimal1282.prototype.toString = function() {
        var biased_exponent;
        var significand_digits = 0;
        var significand = new Array(36);
        for (var i2 = 0; i2 < significand.length; i2++)
          significand[i2] = 0;
        var index = 0;
        var is_zero = false;
        var significand_msb;
        var significand128 = { parts: [0, 0, 0, 0] };
        var j, k;
        var string = [];
        index = 0;
        var buffer2 = this.bytes;
        var low = buffer2[index++] | buffer2[index++] << 8 | buffer2[index++] << 16 | buffer2[index++] << 24;
        var midl = buffer2[index++] | buffer2[index++] << 8 | buffer2[index++] << 16 | buffer2[index++] << 24;
        var midh = buffer2[index++] | buffer2[index++] << 8 | buffer2[index++] << 16 | buffer2[index++] << 24;
        var high = buffer2[index++] | buffer2[index++] << 8 | buffer2[index++] << 16 | buffer2[index++] << 24;
        index = 0;
        var dec = {
          low: new Long(low, midl),
          high: new Long(midh, high)
        };
        if (dec.high.lessThan(Long.ZERO)) {
          string.push("-");
        }
        var combination = high >> 26 & COMBINATION_MASK;
        if (combination >> 3 === 3) {
          if (combination === COMBINATION_INFINITY) {
            return string.join("") + "Infinity";
          } else if (combination === COMBINATION_NAN) {
            return "NaN";
          } else {
            biased_exponent = high >> 15 & EXPONENT_MASK;
            significand_msb = 8 + (high >> 14 & 1);
          }
        } else {
          significand_msb = high >> 14 & 7;
          biased_exponent = high >> 17 & EXPONENT_MASK;
        }
        var exponent = biased_exponent - EXPONENT_BIAS;
        significand128.parts[0] = (high & 16383) + ((significand_msb & 15) << 14);
        significand128.parts[1] = midh;
        significand128.parts[2] = midl;
        significand128.parts[3] = low;
        if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
          is_zero = true;
        } else {
          for (k = 3; k >= 0; k--) {
            var least_digits = 0;
            var result = divideu128(significand128);
            significand128 = result.quotient;
            least_digits = result.rem.low;
            if (!least_digits)
              continue;
            for (j = 8; j >= 0; j--) {
              significand[k * 9 + j] = least_digits % 10;
              least_digits = Math.floor(least_digits / 10);
            }
          }
        }
        if (is_zero) {
          significand_digits = 1;
          significand[index] = 0;
        } else {
          significand_digits = 36;
          while (!significand[index]) {
            significand_digits = significand_digits - 1;
            index = index + 1;
          }
        }
        var scientific_exponent = significand_digits - 1 + exponent;
        if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
          if (significand_digits > 34) {
            string.push("".concat(0));
            if (exponent > 0)
              string.push("E+".concat(exponent));
            else if (exponent < 0)
              string.push("E".concat(exponent));
            return string.join("");
          }
          string.push("".concat(significand[index++]));
          significand_digits = significand_digits - 1;
          if (significand_digits) {
            string.push(".");
          }
          for (var i2 = 0; i2 < significand_digits; i2++) {
            string.push("".concat(significand[index++]));
          }
          string.push("E");
          if (scientific_exponent > 0) {
            string.push("+".concat(scientific_exponent));
          } else {
            string.push("".concat(scientific_exponent));
          }
        } else {
          if (exponent >= 0) {
            for (var i2 = 0; i2 < significand_digits; i2++) {
              string.push("".concat(significand[index++]));
            }
          } else {
            var radix_position = significand_digits + exponent;
            if (radix_position > 0) {
              for (var i2 = 0; i2 < radix_position; i2++) {
                string.push("".concat(significand[index++]));
              }
            } else {
              string.push("0");
            }
            string.push(".");
            while (radix_position++ < 0) {
              string.push("0");
            }
            for (var i2 = 0; i2 < significand_digits - Math.max(radix_position - 1, 0); i2++) {
              string.push("".concat(significand[index++]));
            }
          }
        }
        return string.join("");
      };
      Decimal1282.prototype.toJSON = function() {
        return { $numberDecimal: this.toString() };
      };
      Decimal1282.prototype.toExtendedJSON = function() {
        return { $numberDecimal: this.toString() };
      };
      Decimal1282.fromExtendedJSON = function(doc) {
        return Decimal1282.fromString(doc.$numberDecimal);
      };
      Decimal1282.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      Decimal1282.prototype.inspect = function() {
        return 'new Decimal128("'.concat(this.toString(), '")');
      };
      return Decimal1282;
    })()
  );
  Object.defineProperty(Decimal128.prototype, "_bsontype", { value: "Decimal128" });
  var Double = (
    /** @class */
    (function() {
      function Double2(value) {
        if (!(this instanceof Double2))
          return new Double2(value);
        if (value instanceof Number) {
          value = value.valueOf();
        }
        this.value = +value;
      }
      Double2.prototype.valueOf = function() {
        return this.value;
      };
      Double2.prototype.toJSON = function() {
        return this.value;
      };
      Double2.prototype.toString = function(radix) {
        return this.value.toString(radix);
      };
      Double2.prototype.toExtendedJSON = function(options) {
        if (options && (options.legacy || options.relaxed && isFinite(this.value))) {
          return this.value;
        }
        if (Object.is(Math.sign(this.value), -0)) {
          return { $numberDouble: "-".concat(this.value.toFixed(1)) };
        }
        return {
          $numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) : this.value.toString()
        };
      };
      Double2.fromExtendedJSON = function(doc, options) {
        var doubleValue = parseFloat(doc.$numberDouble);
        return options && options.relaxed ? doubleValue : new Double2(doubleValue);
      };
      Double2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      Double2.prototype.inspect = function() {
        var eJSON = this.toExtendedJSON();
        return "new Double(".concat(eJSON.$numberDouble, ")");
      };
      return Double2;
    })()
  );
  Object.defineProperty(Double.prototype, "_bsontype", { value: "Double" });
  var Int32 = (
    /** @class */
    (function() {
      function Int322(value) {
        if (!(this instanceof Int322))
          return new Int322(value);
        if (value instanceof Number) {
          value = value.valueOf();
        }
        this.value = +value | 0;
      }
      Int322.prototype.valueOf = function() {
        return this.value;
      };
      Int322.prototype.toString = function(radix) {
        return this.value.toString(radix);
      };
      Int322.prototype.toJSON = function() {
        return this.value;
      };
      Int322.prototype.toExtendedJSON = function(options) {
        if (options && (options.relaxed || options.legacy))
          return this.value;
        return { $numberInt: this.value.toString() };
      };
      Int322.fromExtendedJSON = function(doc, options) {
        return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int322(doc.$numberInt);
      };
      Int322.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      Int322.prototype.inspect = function() {
        return "new Int32(".concat(this.valueOf(), ")");
      };
      return Int322;
    })()
  );
  Object.defineProperty(Int32.prototype, "_bsontype", { value: "Int32" });
  var MaxKey = (
    /** @class */
    (function() {
      function MaxKey2() {
        if (!(this instanceof MaxKey2))
          return new MaxKey2();
      }
      MaxKey2.prototype.toExtendedJSON = function() {
        return { $maxKey: 1 };
      };
      MaxKey2.fromExtendedJSON = function() {
        return new MaxKey2();
      };
      MaxKey2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      MaxKey2.prototype.inspect = function() {
        return "new MaxKey()";
      };
      return MaxKey2;
    })()
  );
  Object.defineProperty(MaxKey.prototype, "_bsontype", { value: "MaxKey" });
  var MinKey = (
    /** @class */
    (function() {
      function MinKey2() {
        if (!(this instanceof MinKey2))
          return new MinKey2();
      }
      MinKey2.prototype.toExtendedJSON = function() {
        return { $minKey: 1 };
      };
      MinKey2.fromExtendedJSON = function() {
        return new MinKey2();
      };
      MinKey2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      MinKey2.prototype.inspect = function() {
        return "new MinKey()";
      };
      return MinKey2;
    })()
  );
  Object.defineProperty(MinKey.prototype, "_bsontype", { value: "MinKey" });
  var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
  var PROCESS_UNIQUE = null;
  var kId = /* @__PURE__ */ Symbol("id");
  var ObjectId = (
    /** @class */
    (function() {
      function ObjectId2(inputId) {
        if (!(this instanceof ObjectId2))
          return new ObjectId2(inputId);
        var workingId;
        if (typeof inputId === "object" && inputId && "id" in inputId) {
          if (typeof inputId.id !== "string" && !ArrayBuffer.isView(inputId.id)) {
            throw new BSONTypeError("Argument passed in must have an id that is of type string or Buffer");
          }
          if ("toHexString" in inputId && typeof inputId.toHexString === "function") {
            workingId = buffer_1.from(inputId.toHexString(), "hex");
          } else {
            workingId = inputId.id;
          }
        } else {
          workingId = inputId;
        }
        if (workingId == null || typeof workingId === "number") {
          this[kId] = ObjectId2.generate(typeof workingId === "number" ? workingId : void 0);
        } else if (ArrayBuffer.isView(workingId) && workingId.byteLength === 12) {
          this[kId] = workingId instanceof buffer_1 ? workingId : ensureBuffer(workingId);
        } else if (typeof workingId === "string") {
          if (workingId.length === 12) {
            var bytes = buffer_1.from(workingId);
            if (bytes.byteLength === 12) {
              this[kId] = bytes;
            } else {
              throw new BSONTypeError("Argument passed in must be a string of 12 bytes");
            }
          } else if (workingId.length === 24 && checkForHexRegExp.test(workingId)) {
            this[kId] = buffer_1.from(workingId, "hex");
          } else {
            throw new BSONTypeError("Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer");
          }
        } else {
          throw new BSONTypeError("Argument passed in does not match the accepted types");
        }
        if (ObjectId2.cacheHexString) {
          this.__id = this.id.toString("hex");
        }
      }
      Object.defineProperty(ObjectId2.prototype, "id", {
        /**
         * The ObjectId bytes
         * @readonly
         */
        get: function() {
          return this[kId];
        },
        set: function(value) {
          this[kId] = value;
          if (ObjectId2.cacheHexString) {
            this.__id = value.toString("hex");
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ObjectId2.prototype, "generationTime", {
        /**
         * The generation time of this ObjectId instance
         * @deprecated Please use getTimestamp / createFromTime which returns an int32 epoch
         */
        get: function() {
          return this.id.readInt32BE(0);
        },
        set: function(value) {
          this.id.writeUInt32BE(value, 0);
        },
        enumerable: false,
        configurable: true
      });
      ObjectId2.prototype.toHexString = function() {
        if (ObjectId2.cacheHexString && this.__id) {
          return this.__id;
        }
        var hexString = this.id.toString("hex");
        if (ObjectId2.cacheHexString && !this.__id) {
          this.__id = hexString;
        }
        return hexString;
      };
      ObjectId2.getInc = function() {
        return ObjectId2.index = (ObjectId2.index + 1) % 16777215;
      };
      ObjectId2.generate = function(time) {
        if ("number" !== typeof time) {
          time = Math.floor(Date.now() / 1e3);
        }
        var inc = ObjectId2.getInc();
        var buffer2 = buffer_1.alloc(12);
        buffer2.writeUInt32BE(time, 0);
        if (PROCESS_UNIQUE === null) {
          PROCESS_UNIQUE = randomBytes(5);
        }
        buffer2[4] = PROCESS_UNIQUE[0];
        buffer2[5] = PROCESS_UNIQUE[1];
        buffer2[6] = PROCESS_UNIQUE[2];
        buffer2[7] = PROCESS_UNIQUE[3];
        buffer2[8] = PROCESS_UNIQUE[4];
        buffer2[11] = inc & 255;
        buffer2[10] = inc >> 8 & 255;
        buffer2[9] = inc >> 16 & 255;
        return buffer2;
      };
      ObjectId2.prototype.toString = function(format) {
        if (format)
          return this.id.toString(format);
        return this.toHexString();
      };
      ObjectId2.prototype.toJSON = function() {
        return this.toHexString();
      };
      ObjectId2.prototype.equals = function(otherId) {
        if (otherId === void 0 || otherId === null) {
          return false;
        }
        if (otherId instanceof ObjectId2) {
          return this[kId][11] === otherId[kId][11] && this[kId].equals(otherId[kId]);
        }
        if (typeof otherId === "string" && ObjectId2.isValid(otherId) && otherId.length === 12 && isUint8Array(this.id)) {
          return otherId === buffer_1.prototype.toString.call(this.id, "latin1");
        }
        if (typeof otherId === "string" && ObjectId2.isValid(otherId) && otherId.length === 24) {
          return otherId.toLowerCase() === this.toHexString();
        }
        if (typeof otherId === "string" && ObjectId2.isValid(otherId) && otherId.length === 12) {
          return buffer_1.from(otherId).equals(this.id);
        }
        if (typeof otherId === "object" && "toHexString" in otherId && typeof otherId.toHexString === "function") {
          var otherIdString = otherId.toHexString();
          var thisIdString = this.toHexString().toLowerCase();
          return typeof otherIdString === "string" && otherIdString.toLowerCase() === thisIdString;
        }
        return false;
      };
      ObjectId2.prototype.getTimestamp = function() {
        var timestamp = /* @__PURE__ */ new Date();
        var time = this.id.readUInt32BE(0);
        timestamp.setTime(Math.floor(time) * 1e3);
        return timestamp;
      };
      ObjectId2.createPk = function() {
        return new ObjectId2();
      };
      ObjectId2.createFromTime = function(time) {
        var buffer2 = buffer_1.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        buffer2.writeUInt32BE(time, 0);
        return new ObjectId2(buffer2);
      };
      ObjectId2.createFromHexString = function(hexString) {
        if (typeof hexString === "undefined" || hexString != null && hexString.length !== 24) {
          throw new BSONTypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
        }
        return new ObjectId2(buffer_1.from(hexString, "hex"));
      };
      ObjectId2.isValid = function(id) {
        if (id == null)
          return false;
        try {
          new ObjectId2(id);
          return true;
        } catch (_a2) {
          return false;
        }
      };
      ObjectId2.prototype.toExtendedJSON = function() {
        if (this.toHexString)
          return { $oid: this.toHexString() };
        return { $oid: this.toString("hex") };
      };
      ObjectId2.fromExtendedJSON = function(doc) {
        return new ObjectId2(doc.$oid);
      };
      ObjectId2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      ObjectId2.prototype.inspect = function() {
        return 'new ObjectId("'.concat(this.toHexString(), '")');
      };
      ObjectId2.index = Math.floor(Math.random() * 16777215);
      return ObjectId2;
    })()
  );
  Object.defineProperty(ObjectId.prototype, "generate", {
    value: deprecate(function(time) {
      return ObjectId.generate(time);
    }, "Please use the static `ObjectId.generate(time)` instead")
  });
  Object.defineProperty(ObjectId.prototype, "getInc", {
    value: deprecate(function() {
      return ObjectId.getInc();
    }, "Please use the static `ObjectId.getInc()` instead")
  });
  Object.defineProperty(ObjectId.prototype, "get_inc", {
    value: deprecate(function() {
      return ObjectId.getInc();
    }, "Please use the static `ObjectId.getInc()` instead")
  });
  Object.defineProperty(ObjectId, "get_inc", {
    value: deprecate(function() {
      return ObjectId.getInc();
    }, "Please use the static `ObjectId.getInc()` instead")
  });
  Object.defineProperty(ObjectId.prototype, "_bsontype", { value: "ObjectID" });
  function alphabetize(str) {
    return str.split("").sort().join("");
  }
  var BSONRegExp = (
    /** @class */
    (function() {
      function BSONRegExp2(pattern, options) {
        if (!(this instanceof BSONRegExp2))
          return new BSONRegExp2(pattern, options);
        this.pattern = pattern;
        this.options = alphabetize(options !== null && options !== void 0 ? options : "");
        if (this.pattern.indexOf("\0") !== -1) {
          throw new BSONError("BSON Regex patterns cannot contain null bytes, found: ".concat(JSON.stringify(this.pattern)));
        }
        if (this.options.indexOf("\0") !== -1) {
          throw new BSONError("BSON Regex options cannot contain null bytes, found: ".concat(JSON.stringify(this.options)));
        }
        for (var i2 = 0; i2 < this.options.length; i2++) {
          if (!(this.options[i2] === "i" || this.options[i2] === "m" || this.options[i2] === "x" || this.options[i2] === "l" || this.options[i2] === "s" || this.options[i2] === "u")) {
            throw new BSONError("The regular expression option [".concat(this.options[i2], "] is not supported"));
          }
        }
      }
      BSONRegExp2.parseOptions = function(options) {
        return options ? options.split("").sort().join("") : "";
      };
      BSONRegExp2.prototype.toExtendedJSON = function(options) {
        options = options || {};
        if (options.legacy) {
          return { $regex: this.pattern, $options: this.options };
        }
        return { $regularExpression: { pattern: this.pattern, options: this.options } };
      };
      BSONRegExp2.fromExtendedJSON = function(doc) {
        if ("$regex" in doc) {
          if (typeof doc.$regex !== "string") {
            if (doc.$regex._bsontype === "BSONRegExp") {
              return doc;
            }
          } else {
            return new BSONRegExp2(doc.$regex, BSONRegExp2.parseOptions(doc.$options));
          }
        }
        if ("$regularExpression" in doc) {
          return new BSONRegExp2(doc.$regularExpression.pattern, BSONRegExp2.parseOptions(doc.$regularExpression.options));
        }
        throw new BSONTypeError("Unexpected BSONRegExp EJSON object form: ".concat(JSON.stringify(doc)));
      };
      return BSONRegExp2;
    })()
  );
  Object.defineProperty(BSONRegExp.prototype, "_bsontype", { value: "BSONRegExp" });
  var BSONSymbol = (
    /** @class */
    (function() {
      function BSONSymbol2(value) {
        if (!(this instanceof BSONSymbol2))
          return new BSONSymbol2(value);
        this.value = value;
      }
      BSONSymbol2.prototype.valueOf = function() {
        return this.value;
      };
      BSONSymbol2.prototype.toString = function() {
        return this.value;
      };
      BSONSymbol2.prototype.inspect = function() {
        return 'new BSONSymbol("'.concat(this.value, '")');
      };
      BSONSymbol2.prototype.toJSON = function() {
        return this.value;
      };
      BSONSymbol2.prototype.toExtendedJSON = function() {
        return { $symbol: this.value };
      };
      BSONSymbol2.fromExtendedJSON = function(doc) {
        return new BSONSymbol2(doc.$symbol);
      };
      BSONSymbol2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      return BSONSymbol2;
    })()
  );
  Object.defineProperty(BSONSymbol.prototype, "_bsontype", { value: "Symbol" });
  var LongWithoutOverridesClass = Long;
  var Timestamp = (
    /** @class */
    (function(_super) {
      __extends11(Timestamp2, _super);
      function Timestamp2(low, high) {
        var _this = this;
        if (!(_this instanceof Timestamp2))
          return new Timestamp2(low, high);
        if (Long.isLong(low)) {
          _this = _super.call(this, low.low, low.high, true) || this;
        } else if (isObjectLike(low) && typeof low.t !== "undefined" && typeof low.i !== "undefined") {
          _this = _super.call(this, low.i, low.t, true) || this;
        } else {
          _this = _super.call(this, low, high, true) || this;
        }
        Object.defineProperty(_this, "_bsontype", {
          value: "Timestamp",
          writable: false,
          configurable: false,
          enumerable: false
        });
        return _this;
      }
      Timestamp2.prototype.toJSON = function() {
        return {
          $timestamp: this.toString()
        };
      };
      Timestamp2.fromInt = function(value) {
        return new Timestamp2(Long.fromInt(value, true));
      };
      Timestamp2.fromNumber = function(value) {
        return new Timestamp2(Long.fromNumber(value, true));
      };
      Timestamp2.fromBits = function(lowBits, highBits) {
        return new Timestamp2(lowBits, highBits);
      };
      Timestamp2.fromString = function(str, optRadix) {
        return new Timestamp2(Long.fromString(str, true, optRadix));
      };
      Timestamp2.prototype.toExtendedJSON = function() {
        return { $timestamp: { t: this.high >>> 0, i: this.low >>> 0 } };
      };
      Timestamp2.fromExtendedJSON = function(doc) {
        return new Timestamp2(doc.$timestamp);
      };
      Timestamp2.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        return this.inspect();
      };
      Timestamp2.prototype.inspect = function() {
        return "new Timestamp({ t: ".concat(this.getHighBits(), ", i: ").concat(this.getLowBits(), " })");
      };
      Timestamp2.MAX_VALUE = Long.MAX_UNSIGNED_VALUE;
      return Timestamp2;
    })(LongWithoutOverridesClass)
  );
  function isBSONType(value) {
    return isObjectLike(value) && Reflect.has(value, "_bsontype") && typeof value._bsontype === "string";
  }
  var BSON_INT32_MAX = 2147483647;
  var BSON_INT32_MIN = -2147483648;
  var BSON_INT64_MAX = 9223372036854776e3;
  var BSON_INT64_MIN = -9223372036854776e3;
  var keysToCodecs = {
    $oid: ObjectId,
    $binary: Binary,
    $uuid: Binary,
    $symbol: BSONSymbol,
    $numberInt: Int32,
    $numberDecimal: Decimal128,
    $numberDouble: Double,
    $numberLong: Long,
    $minKey: MinKey,
    $maxKey: MaxKey,
    $regex: BSONRegExp,
    $regularExpression: BSONRegExp,
    $timestamp: Timestamp
  };
  function deserializeValue(value, options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof value === "number") {
      if (options.relaxed || options.legacy) {
        return value;
      }
      if (Math.floor(value) === value) {
        if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX)
          return new Int32(value);
        if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX)
          return Long.fromNumber(value);
      }
      return new Double(value);
    }
    if (value == null || typeof value !== "object")
      return value;
    if (value.$undefined)
      return null;
    var keys = Object.keys(value).filter(function(k) {
      return k.startsWith("$") && value[k] != null;
    });
    for (var i2 = 0; i2 < keys.length; i2++) {
      var c = keysToCodecs[keys[i2]];
      if (c)
        return c.fromExtendedJSON(value, options);
    }
    if (value.$date != null) {
      var d = value.$date;
      var date = /* @__PURE__ */ new Date();
      if (options.legacy) {
        if (typeof d === "number")
          date.setTime(d);
        else if (typeof d === "string")
          date.setTime(Date.parse(d));
      } else {
        if (typeof d === "string")
          date.setTime(Date.parse(d));
        else if (Long.isLong(d))
          date.setTime(d.toNumber());
        else if (typeof d === "number" && options.relaxed)
          date.setTime(d);
      }
      return date;
    }
    if (value.$code != null) {
      var copy = Object.assign({}, value);
      if (value.$scope) {
        copy.$scope = deserializeValue(value.$scope);
      }
      return Code.fromExtendedJSON(value);
    }
    if (isDBRefLike(value) || value.$dbPointer) {
      var v = value.$ref ? value : value.$dbPointer;
      if (v instanceof DBRef)
        return v;
      var dollarKeys = Object.keys(v).filter(function(k) {
        return k.startsWith("$");
      });
      var valid_1 = true;
      dollarKeys.forEach(function(k) {
        if (["$ref", "$id", "$db"].indexOf(k) === -1)
          valid_1 = false;
      });
      if (valid_1)
        return DBRef.fromExtendedJSON(v);
    }
    return value;
  }
  function serializeArray(array, options) {
    return array.map(function(v, index) {
      options.seenObjects.push({ propertyName: "index ".concat(index), obj: null });
      try {
        return serializeValue(v, options);
      } finally {
        options.seenObjects.pop();
      }
    });
  }
  function getISOString(date) {
    var isoStr = date.toISOString();
    return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + "Z";
  }
  function serializeValue(value, options) {
    if ((typeof value === "object" || typeof value === "function") && value !== null) {
      var index = options.seenObjects.findIndex(function(entry) {
        return entry.obj === value;
      });
      if (index !== -1) {
        var props = options.seenObjects.map(function(entry) {
          return entry.propertyName;
        });
        var leadingPart = props.slice(0, index).map(function(prop) {
          return "".concat(prop, " -> ");
        }).join("");
        var alreadySeen = props[index];
        var circularPart = " -> " + props.slice(index + 1, props.length - 1).map(function(prop) {
          return "".concat(prop, " -> ");
        }).join("");
        var current = props[props.length - 1];
        var leadingSpace = " ".repeat(leadingPart.length + alreadySeen.length / 2);
        var dashes = "-".repeat(circularPart.length + (alreadySeen.length + current.length) / 2 - 1);
        throw new BSONTypeError("Converting circular structure to EJSON:\n" + "    ".concat(leadingPart).concat(alreadySeen).concat(circularPart).concat(current, "\n") + "    ".concat(leadingSpace, "\\").concat(dashes, "/"));
      }
      options.seenObjects[options.seenObjects.length - 1].obj = value;
    }
    if (Array.isArray(value))
      return serializeArray(value, options);
    if (value === void 0)
      return null;
    if (value instanceof Date || isDate2(value)) {
      var dateNum = value.getTime(), inRange = dateNum > -1 && dateNum < 2534023188e5;
      if (options.legacy) {
        return options.relaxed && inRange ? { $date: value.getTime() } : { $date: getISOString(value) };
      }
      return options.relaxed && inRange ? { $date: getISOString(value) } : { $date: { $numberLong: value.getTime().toString() } };
    }
    if (typeof value === "number" && (!options.relaxed || !isFinite(value))) {
      if (Math.floor(value) === value) {
        var int32Range = value >= BSON_INT32_MIN && value <= BSON_INT32_MAX, int64Range = value >= BSON_INT64_MIN && value <= BSON_INT64_MAX;
        if (int32Range)
          return { $numberInt: value.toString() };
        if (int64Range)
          return { $numberLong: value.toString() };
      }
      return { $numberDouble: value.toString() };
    }
    if (value instanceof RegExp || isRegExp2(value)) {
      var flags = value.flags;
      if (flags === void 0) {
        var match = value.toString().match(/[gimuy]*$/);
        if (match) {
          flags = match[0];
        }
      }
      var rx = new BSONRegExp(value.source, flags);
      return rx.toExtendedJSON(options);
    }
    if (value != null && typeof value === "object")
      return serializeDocument(value, options);
    return value;
  }
  var BSON_TYPE_MAPPINGS = {
    Binary: function(o) {
      return new Binary(o.value(), o.sub_type);
    },
    Code: function(o) {
      return new Code(o.code, o.scope);
    },
    DBRef: function(o) {
      return new DBRef(o.collection || o.namespace, o.oid, o.db, o.fields);
    },
    Decimal128: function(o) {
      return new Decimal128(o.bytes);
    },
    Double: function(o) {
      return new Double(o.value);
    },
    Int32: function(o) {
      return new Int32(o.value);
    },
    Long: function(o) {
      return Long.fromBits(
        // underscore variants for 1.x backwards compatibility
        o.low != null ? o.low : o.low_,
        o.low != null ? o.high : o.high_,
        o.low != null ? o.unsigned : o.unsigned_
      );
    },
    MaxKey: function() {
      return new MaxKey();
    },
    MinKey: function() {
      return new MinKey();
    },
    ObjectID: function(o) {
      return new ObjectId(o);
    },
    ObjectId: function(o) {
      return new ObjectId(o);
    },
    BSONRegExp: function(o) {
      return new BSONRegExp(o.pattern, o.options);
    },
    Symbol: function(o) {
      return new BSONSymbol(o.value);
    },
    Timestamp: function(o) {
      return Timestamp.fromBits(o.low, o.high);
    }
  };
  function serializeDocument(doc, options) {
    if (doc == null || typeof doc !== "object")
      throw new BSONError("not an object instance");
    var bsontype = doc._bsontype;
    if (typeof bsontype === "undefined") {
      var _doc = {};
      for (var name in doc) {
        options.seenObjects.push({ propertyName: name, obj: null });
        try {
          var value = serializeValue(doc[name], options);
          if (name === "__proto__") {
            Object.defineProperty(_doc, name, {
              value,
              writable: true,
              enumerable: true,
              configurable: true
            });
          } else {
            _doc[name] = value;
          }
        } finally {
          options.seenObjects.pop();
        }
      }
      return _doc;
    } else if (isBSONType(doc)) {
      var outDoc = doc;
      if (typeof outDoc.toExtendedJSON !== "function") {
        var mapper = BSON_TYPE_MAPPINGS[doc._bsontype];
        if (!mapper) {
          throw new BSONTypeError("Unrecognized or invalid _bsontype: " + doc._bsontype);
        }
        outDoc = mapper(outDoc);
      }
      if (bsontype === "Code" && outDoc.scope) {
        outDoc = new Code(outDoc.code, serializeValue(outDoc.scope, options));
      } else if (bsontype === "DBRef" && outDoc.oid) {
        outDoc = new DBRef(serializeValue(outDoc.collection, options), serializeValue(outDoc.oid, options), serializeValue(outDoc.db, options), serializeValue(outDoc.fields, options));
      }
      return outDoc.toExtendedJSON(options);
    } else {
      throw new BSONError("_bsontype must be a string, but was: " + typeof bsontype);
    }
  }
  var EJSON;
  (function(EJSON2) {
    function parse(text, options) {
      var finalOptions = Object.assign({}, { relaxed: true, legacy: false }, options);
      if (typeof finalOptions.relaxed === "boolean")
        finalOptions.strict = !finalOptions.relaxed;
      if (typeof finalOptions.strict === "boolean")
        finalOptions.relaxed = !finalOptions.strict;
      return JSON.parse(text, function(key2, value) {
        if (key2.indexOf("\0") !== -1) {
          throw new BSONError("BSON Document field names cannot contain null bytes, found: ".concat(JSON.stringify(key2)));
        }
        return deserializeValue(value, finalOptions);
      });
    }
    EJSON2.parse = parse;
    function stringify(value, replacer, space, options) {
      if (space != null && typeof space === "object") {
        options = space;
        space = 0;
      }
      if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
        options = replacer;
        replacer = void 0;
        space = 0;
      }
      var serializeOptions = Object.assign({ relaxed: true, legacy: false }, options, {
        seenObjects: [{ propertyName: "(root)", obj: null }]
      });
      var doc = serializeValue(value, serializeOptions);
      return JSON.stringify(doc, replacer, space);
    }
    EJSON2.stringify = stringify;
    function serialize2(value, options) {
      options = options || {};
      return JSON.parse(stringify(value, options));
    }
    EJSON2.serialize = serialize2;
    function deserialize2(ejson, options) {
      options = options || {};
      return parse(JSON.stringify(ejson), options);
    }
    EJSON2.deserialize = deserialize2;
  })(EJSON || (EJSON = {}));
  var bsonMap;
  var bsonGlobal = getGlobal();
  if (bsonGlobal.Map) {
    bsonMap = bsonGlobal.Map;
  } else {
    bsonMap = /** @class */
    (function() {
      function Map2(array) {
        if (array === void 0) {
          array = [];
        }
        this._keys = [];
        this._values = {};
        for (var i2 = 0; i2 < array.length; i2++) {
          if (array[i2] == null)
            continue;
          var entry = array[i2];
          var key2 = entry[0];
          var value = entry[1];
          this._keys.push(key2);
          this._values[key2] = { v: value, i: this._keys.length - 1 };
        }
      }
      Map2.prototype.clear = function() {
        this._keys = [];
        this._values = {};
      };
      Map2.prototype.delete = function(key2) {
        var value = this._values[key2];
        if (value == null)
          return false;
        delete this._values[key2];
        this._keys.splice(value.i, 1);
        return true;
      };
      Map2.prototype.entries = function() {
        var _this = this;
        var index = 0;
        return {
          next: function() {
            var key2 = _this._keys[index++];
            return {
              value: key2 !== void 0 ? [key2, _this._values[key2].v] : void 0,
              done: key2 !== void 0 ? false : true
            };
          }
        };
      };
      Map2.prototype.forEach = function(callback, self2) {
        self2 = self2 || this;
        for (var i2 = 0; i2 < this._keys.length; i2++) {
          var key2 = this._keys[i2];
          callback.call(self2, this._values[key2].v, key2, self2);
        }
      };
      Map2.prototype.get = function(key2) {
        return this._values[key2] ? this._values[key2].v : void 0;
      };
      Map2.prototype.has = function(key2) {
        return this._values[key2] != null;
      };
      Map2.prototype.keys = function() {
        var _this = this;
        var index = 0;
        return {
          next: function() {
            var key2 = _this._keys[index++];
            return {
              value: key2 !== void 0 ? key2 : void 0,
              done: key2 !== void 0 ? false : true
            };
          }
        };
      };
      Map2.prototype.set = function(key2, value) {
        if (this._values[key2]) {
          this._values[key2].v = value;
          return this;
        }
        this._keys.push(key2);
        this._values[key2] = { v: value, i: this._keys.length - 1 };
        return this;
      };
      Map2.prototype.values = function() {
        var _this = this;
        var index = 0;
        return {
          next: function() {
            var key2 = _this._keys[index++];
            return {
              value: key2 !== void 0 ? _this._values[key2].v : void 0,
              done: key2 !== void 0 ? false : true
            };
          }
        };
      };
      Object.defineProperty(Map2.prototype, "size", {
        get: function() {
          return this._keys.length;
        },
        enumerable: false,
        configurable: true
      });
      return Map2;
    })();
  }
  var JS_INT_MAX_LONG = Long.fromNumber(JS_INT_MAX);
  var JS_INT_MIN_LONG = Long.fromNumber(JS_INT_MIN);
  var SPACE_FOR_FLOAT64 = new Uint8Array(8);
  var DV_FOR_FLOAT64 = new DataView(SPACE_FOR_FLOAT64.buffer, SPACE_FOR_FLOAT64.byteOffset, SPACE_FOR_FLOAT64.byteLength);
  var MAXSIZE = 1024 * 1024 * 17;
  var buffer = buffer_1.alloc(MAXSIZE);

  // node_modules/@cloudbase/database/dist/esm/aggregate.js
  var __awaiter17 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator17 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var Aggregation = (function() {
    function Aggregation2(db, collectionName) {
      this._stages = [];
      if (db && collectionName) {
        this._db = db;
        this._request = new Db.reqClass(this._db.config);
        this._collectionName = collectionName;
      }
    }
    Aggregation2.prototype.end = function() {
      return __awaiter17(this, void 0, void 0, function() {
        var result;
        return __generator17(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (!this._collectionName || !this._db) {
                throw new Error("Aggregation pipeline cannot send request");
              }
              return [4, this._request.send("database.aggregate", {
                collectionName: this._collectionName,
                stages: this._stages
              })];
            case 1:
              result = _a2.sent();
              if (result && result.data && result.data.list) {
                return [2, {
                  requestId: result.requestId,
                  data: JSON.parse(result.data.list).map(EJSON.parse)
                }];
              }
              return [2, result];
          }
        });
      });
    };
    Aggregation2.prototype.unwrap = function() {
      return this._stages;
    };
    Aggregation2.prototype.done = function() {
      return this._stages.map(function(_a2) {
        var _b;
        var stageKey = _a2.stageKey, stageValue = _a2.stageValue;
        return _b = {}, _b[stageKey] = JSON.parse(stageValue), _b;
      });
    };
    Aggregation2.prototype._pipe = function(stage, param) {
      this._stages.push({
        stageKey: "$" + stage,
        stageValue: JSON.stringify(param)
      });
      return this;
    };
    Aggregation2.prototype.addFields = function(param) {
      return this._pipe("addFields", param);
    };
    Aggregation2.prototype.bucket = function(param) {
      return this._pipe("bucket", param);
    };
    Aggregation2.prototype.bucketAuto = function(param) {
      return this._pipe("bucketAuto", param);
    };
    Aggregation2.prototype.count = function(param) {
      return this._pipe("count", param);
    };
    Aggregation2.prototype.geoNear = function(param) {
      if (param.query) {
        param.query = QuerySerializer.encode(param.query);
      }
      if (param.distanceMultiplier && typeof param.distanceMultiplier === "number") {
        param.distanceMultiplier = param.distanceMultiplier;
      }
      if (param.near) {
        param.near = new Point(param.near.longitude, param.near.latitude).toJSON();
      }
      return this._pipe("geoNear", param);
    };
    Aggregation2.prototype.group = function(param) {
      return this._pipe("group", param);
    };
    Aggregation2.prototype.limit = function(param) {
      return this._pipe("limit", param);
    };
    Aggregation2.prototype.match = function(param) {
      return this._pipe("match", QuerySerializer.encode(param));
    };
    Aggregation2.prototype.project = function(param) {
      return this._pipe("project", param);
    };
    Aggregation2.prototype.lookup = function(param) {
      return this._pipe("lookup", param);
    };
    Aggregation2.prototype.replaceRoot = function(param) {
      return this._pipe("replaceRoot", param);
    };
    Aggregation2.prototype.sample = function(param) {
      return this._pipe("sample", param);
    };
    Aggregation2.prototype.skip = function(param) {
      return this._pipe("skip", param);
    };
    Aggregation2.prototype.sort = function(param) {
      return this._pipe("sort", param);
    };
    Aggregation2.prototype.sortByCount = function(param) {
      return this._pipe("sortByCount", param);
    };
    Aggregation2.prototype.unwind = function(param) {
      return this._pipe("unwind", param);
    };
    return Aggregation2;
  })();
  var aggregate_default = Aggregation;

  // node_modules/@cloudbase/database/dist/esm/collection.js
  var __extends12 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var CollectionReference = (function(_super) {
    __extends12(CollectionReference3, _super);
    function CollectionReference3(db, coll) {
      return _super.call(this, db, coll) || this;
    }
    Object.defineProperty(CollectionReference3.prototype, "name", {
      get: function() {
        return this._coll;
      },
      enumerable: true,
      configurable: true
    });
    CollectionReference3.prototype.doc = function(docID) {
      if (typeof docID !== "string" && typeof docID !== "number") {
        throw new Error("docId\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u6216\u6570\u5B57");
      }
      return new DocumentReference(this._db, this._coll, docID);
    };
    CollectionReference3.prototype.add = function(data, callback) {
      var docRef = new DocumentReference(this._db, this._coll, void 0);
      return docRef.create(data, callback);
    };
    CollectionReference3.prototype.aggregate = function() {
      return new aggregate_default(this._db, this._coll);
    };
    return CollectionReference3;
  })(Query);

  // node_modules/@cloudbase/database/dist/esm/command.js
  var Command = {
    eq: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.EQ, [val]);
    },
    neq: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.NEQ, [val]);
    },
    lt: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.LT, [val]);
    },
    lte: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.LTE, [val]);
    },
    gt: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.GT, [val]);
    },
    gte: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.GTE, [val]);
    },
    in: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.IN, val);
    },
    nin: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.NIN, val);
    },
    all: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.ALL, val);
    },
    elemMatch: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.ELEM_MATCH, [val]);
    },
    exists: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.EXISTS, [val]);
    },
    size: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.SIZE, [val]);
    },
    mod: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.MOD, [val]);
    },
    geoNear: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.GEO_NEAR, [val]);
    },
    geoWithin: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.GEO_WITHIN, [val]);
    },
    geoIntersects: function(val) {
      return new QueryCommand(QUERY_COMMANDS_LITERAL.GEO_INTERSECTS, [val]);
    },
    and: function() {
      var __expressions__ = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        __expressions__[_i] = arguments[_i];
      }
      var expressions = isArray2(arguments[0]) ? arguments[0] : Array.from(arguments);
      return new LogicCommand(LOGIC_COMMANDS_LITERAL.AND, expressions);
    },
    nor: function() {
      var __expressions__ = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        __expressions__[_i] = arguments[_i];
      }
      var expressions = isArray2(arguments[0]) ? arguments[0] : Array.from(arguments);
      return new LogicCommand(LOGIC_COMMANDS_LITERAL.NOR, expressions);
    },
    or: function() {
      var __expressions__ = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        __expressions__[_i] = arguments[_i];
      }
      var expressions = isArray2(arguments[0]) ? arguments[0] : Array.from(arguments);
      return new LogicCommand(LOGIC_COMMANDS_LITERAL.OR, expressions);
    },
    not: function() {
      var __expressions__ = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        __expressions__[_i] = arguments[_i];
      }
      var expressions = isArray2(arguments[0]) ? arguments[0] : Array.from(arguments);
      return new LogicCommand(LOGIC_COMMANDS_LITERAL.NOT, expressions);
    },
    set: function(val) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.SET, [val]);
    },
    remove: function() {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.REMOVE, []);
    },
    inc: function(val) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.INC, [val]);
    },
    mul: function(val) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.MUL, [val]);
    },
    push: function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var values;
      if (isObject(args[0]) && args[0].hasOwnProperty("each")) {
        var options = args[0];
        values = {
          $each: options.each,
          $position: options.position,
          $sort: options.sort,
          $slice: options.slice
        };
      } else if (isArray2(args[0])) {
        values = args[0];
      } else {
        values = Array.from(args);
      }
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.PUSH, values);
    },
    pull: function(values) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.PULL, values);
    },
    pullAll: function(values) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.PULL_ALL, values);
    },
    pop: function() {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.POP, []);
    },
    shift: function() {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.SHIFT, []);
    },
    unshift: function() {
      var __values__ = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        __values__[_i] = arguments[_i];
      }
      var values = isArray2(arguments[0]) ? arguments[0] : Array.from(arguments);
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.UNSHIFT, values);
    },
    addToSet: function(values) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.ADD_TO_SET, values);
    },
    rename: function(values) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.RENAME, [values]);
    },
    bit: function(values) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.BIT, [values]);
    },
    max: function(values) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.MAX, [values]);
    },
    min: function(values) {
      return new UpdateCommand(UPDATE_COMMANDS_LITERAL.MIN, [values]);
    },
    expr: function(values) {
      return {
        $expr: values
      };
    },
    jsonSchema: function(schema) {
      return {
        $jsonSchema: schema
      };
    },
    text: function(values) {
      if (isString6(values)) {
        return {
          $search: values.search
        };
      } else {
        return {
          $search: values.search,
          $language: values.language,
          $caseSensitive: values.caseSensitive,
          $diacriticSensitive: values.diacriticSensitive
        };
      }
    },
    aggregate: {
      pipeline: function() {
        return new aggregate_default();
      },
      abs: function(param) {
        return new AggregationOperator("abs", param);
      },
      add: function(param) {
        return new AggregationOperator("add", param);
      },
      ceil: function(param) {
        return new AggregationOperator("ceil", param);
      },
      divide: function(param) {
        return new AggregationOperator("divide", param);
      },
      exp: function(param) {
        return new AggregationOperator("exp", param);
      },
      floor: function(param) {
        return new AggregationOperator("floor", param);
      },
      ln: function(param) {
        return new AggregationOperator("ln", param);
      },
      log: function(param) {
        return new AggregationOperator("log", param);
      },
      log10: function(param) {
        return new AggregationOperator("log10", param);
      },
      mod: function(param) {
        return new AggregationOperator("mod", param);
      },
      multiply: function(param) {
        return new AggregationOperator("multiply", param);
      },
      pow: function(param) {
        return new AggregationOperator("pow", param);
      },
      sqrt: function(param) {
        return new AggregationOperator("sqrt", param);
      },
      subtract: function(param) {
        return new AggregationOperator("subtract", param);
      },
      trunc: function(param) {
        return new AggregationOperator("trunc", param);
      },
      arrayElemAt: function(param) {
        return new AggregationOperator("arrayElemAt", param);
      },
      arrayToObject: function(param) {
        return new AggregationOperator("arrayToObject", param);
      },
      concatArrays: function(param) {
        return new AggregationOperator("concatArrays", param);
      },
      filter: function(param) {
        return new AggregationOperator("filter", param);
      },
      in: function(param) {
        return new AggregationOperator("in", param);
      },
      indexOfArray: function(param) {
        return new AggregationOperator("indexOfArray", param);
      },
      isArray: function(param) {
        return new AggregationOperator("isArray", param);
      },
      map: function(param) {
        return new AggregationOperator("map", param);
      },
      range: function(param) {
        return new AggregationOperator("range", param);
      },
      reduce: function(param) {
        return new AggregationOperator("reduce", param);
      },
      reverseArray: function(param) {
        return new AggregationOperator("reverseArray", param);
      },
      size: function(param) {
        return new AggregationOperator("size", param);
      },
      slice: function(param) {
        return new AggregationOperator("slice", param);
      },
      zip: function(param) {
        return new AggregationOperator("zip", param);
      },
      and: function(param) {
        return new AggregationOperator("and", param);
      },
      not: function(param) {
        return new AggregationOperator("not", param);
      },
      or: function(param) {
        return new AggregationOperator("or", param);
      },
      cmp: function(param) {
        return new AggregationOperator("cmp", param);
      },
      eq: function(param) {
        return new AggregationOperator("eq", param);
      },
      gt: function(param) {
        return new AggregationOperator("gt", param);
      },
      gte: function(param) {
        return new AggregationOperator("gte", param);
      },
      lt: function(param) {
        return new AggregationOperator("lt", param);
      },
      lte: function(param) {
        return new AggregationOperator("lte", param);
      },
      neq: function(param) {
        return new AggregationOperator("ne", param);
      },
      cond: function(param) {
        return new AggregationOperator("cond", param);
      },
      ifNull: function(param) {
        return new AggregationOperator("ifNull", param);
      },
      switch: function(param) {
        return new AggregationOperator("switch", param);
      },
      dateFromParts: function(param) {
        return new AggregationOperator("dateFromParts", param);
      },
      dateFromString: function(param) {
        return new AggregationOperator("dateFromString", param);
      },
      dayOfMonth: function(param) {
        return new AggregationOperator("dayOfMonth", param);
      },
      dayOfWeek: function(param) {
        return new AggregationOperator("dayOfWeek", param);
      },
      dayOfYear: function(param) {
        return new AggregationOperator("dayOfYear", param);
      },
      isoDayOfWeek: function(param) {
        return new AggregationOperator("isoDayOfWeek", param);
      },
      isoWeek: function(param) {
        return new AggregationOperator("isoWeek", param);
      },
      isoWeekYear: function(param) {
        return new AggregationOperator("isoWeekYear", param);
      },
      millisecond: function(param) {
        return new AggregationOperator("millisecond", param);
      },
      minute: function(param) {
        return new AggregationOperator("minute", param);
      },
      month: function(param) {
        return new AggregationOperator("month", param);
      },
      second: function(param) {
        return new AggregationOperator("second", param);
      },
      hour: function(param) {
        return new AggregationOperator("hour", param);
      },
      week: function(param) {
        return new AggregationOperator("week", param);
      },
      year: function(param) {
        return new AggregationOperator("year", param);
      },
      literal: function(param) {
        return new AggregationOperator("literal", param);
      },
      mergeObjects: function(param) {
        return new AggregationOperator("mergeObjects", param);
      },
      objectToArray: function(param) {
        return new AggregationOperator("objectToArray", param);
      },
      allElementsTrue: function(param) {
        return new AggregationOperator("allElementsTrue", param);
      },
      anyElementTrue: function(param) {
        return new AggregationOperator("anyElementTrue", param);
      },
      setDifference: function(param) {
        return new AggregationOperator("setDifference", param);
      },
      setEquals: function(param) {
        return new AggregationOperator("setEquals", param);
      },
      setIntersection: function(param) {
        return new AggregationOperator("setIntersection", param);
      },
      setIsSubset: function(param) {
        return new AggregationOperator("setIsSubset", param);
      },
      setUnion: function(param) {
        return new AggregationOperator("setUnion", param);
      },
      concat: function(param) {
        return new AggregationOperator("concat", param);
      },
      dateToString: function(param) {
        return new AggregationOperator("dateToString", param);
      },
      indexOfBytes: function(param) {
        return new AggregationOperator("indexOfBytes", param);
      },
      indexOfCP: function(param) {
        return new AggregationOperator("indexOfCP", param);
      },
      split: function(param) {
        return new AggregationOperator("split", param);
      },
      strLenBytes: function(param) {
        return new AggregationOperator("strLenBytes", param);
      },
      strLenCP: function(param) {
        return new AggregationOperator("strLenCP", param);
      },
      strcasecmp: function(param) {
        return new AggregationOperator("strcasecmp", param);
      },
      substr: function(param) {
        return new AggregationOperator("substr", param);
      },
      substrBytes: function(param) {
        return new AggregationOperator("substrBytes", param);
      },
      substrCP: function(param) {
        return new AggregationOperator("substrCP", param);
      },
      toLower: function(param) {
        return new AggregationOperator("toLower", param);
      },
      toUpper: function(param) {
        return new AggregationOperator("toUpper", param);
      },
      meta: function(param) {
        return new AggregationOperator("meta", param);
      },
      addToSet: function(param) {
        return new AggregationOperator("addToSet", param);
      },
      avg: function(param) {
        return new AggregationOperator("avg", param);
      },
      first: function(param) {
        return new AggregationOperator("first", param);
      },
      last: function(param) {
        return new AggregationOperator("last", param);
      },
      max: function(param) {
        return new AggregationOperator("max", param);
      },
      min: function(param) {
        return new AggregationOperator("min", param);
      },
      push: function(param) {
        return new AggregationOperator("push", param);
      },
      stdDevPop: function(param) {
        return new AggregationOperator("stdDevPop", param);
      },
      stdDevSamp: function(param) {
        return new AggregationOperator("stdDevSamp", param);
      },
      sum: function(param) {
        return new AggregationOperator("sum", param);
      },
      let: function(param) {
        return new AggregationOperator("let", param);
      }
    },
    project: {
      slice: function(param) {
        return new ProjectionOperator("slice", param);
      },
      elemMatch: function(param) {
        return new ProjectionOperator("elemMatch", param);
      }
    }
  };
  var AggregationOperator = /* @__PURE__ */ (function() {
    function AggregationOperator2(name, param) {
      this["$" + name] = param;
    }
    return AggregationOperator2;
  })();
  var ProjectionOperator = /* @__PURE__ */ (function() {
    function ProjectionOperator2(name, param) {
      this["$" + name] = param;
    }
    return ProjectionOperator2;
  })();

  // node_modules/@cloudbase/database/dist/esm/regexp/index.js
  var RegExp2 = (function() {
    function RegExp3(_a2) {
      var regexp = _a2.regexp, options = _a2.options;
      if (!regexp) {
        throw new TypeError("regexp must be a string");
      }
      this.$regex = regexp;
      this.$options = options;
    }
    RegExp3.prototype.parse = function() {
      return {
        $regex: this.$regex,
        $options: this.$options
      };
    };
    Object.defineProperty(RegExp3.prototype, "_internalType", {
      get: function() {
        return SYMBOL_REGEXP;
      },
      enumerable: true,
      configurable: true
    });
    return RegExp3;
  })();
  function RegExpConstructor(param) {
    return new RegExp2(param);
  }

  // node_modules/@cloudbase/database/dist/esm/const/code.js
  var ERRORS14 = {
    CREATE_WATCH_NET_ERROR: {
      code: "CREATE_WATCH_NET_ERROR",
      message: "create watch network error"
    },
    CREATE_WACTH_EXCEED_ERROR: {
      code: "CREATE_WACTH_EXCEED_ERROR",
      message: "maximum connections exceed"
    },
    CREATE_WATCH_SERVER_ERROR: {
      code: "CREATE_WATCH_SERVER_ERROR",
      message: "create watch server error"
    },
    CONN_ERROR: {
      code: "CONN_ERROR",
      message: "connection error"
    },
    INVALID_PARAM: {
      code: "INVALID_PARAM",
      message: "Invalid request param"
    },
    INSERT_DOC_FAIL: {
      code: "INSERT_DOC_FAIL",
      message: "insert document failed"
    },
    DATABASE_TRANSACTION_CONFLICT: {
      code: "DATABASE_TRANSACTION_CONFLICT",
      message: "database transaction conflict"
    }
  };

  // node_modules/@cloudbase/database/dist/esm/transaction/document.js
  var __assign11 = function() {
    __assign11 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign11.apply(this, arguments);
  };
  var __awaiter18 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator18 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var GET_DOC = "database.getInTransaction";
  var UPDATE_DOC = "database.updateDocInTransaction";
  var DELETE_DOC = "database.deleteDocInTransaction";
  var INSERT_DOC = "database.insertDocInTransaction";
  var DocumentReference2 = (function() {
    function DocumentReference3(transaction, coll, docID) {
      this._coll = coll;
      this.id = docID;
      this._transaction = transaction;
      this._request = this._transaction.getRequestMethod();
      this._transactionId = this._transaction.getTransactionId();
    }
    DocumentReference3.prototype.create = function(data) {
      return __awaiter18(this, void 0, void 0, function() {
        var params, res, inserted, ok;
        return __generator18(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              params = {
                collectionName: this._coll,
                transactionId: this._transactionId,
                data: EJSON.stringify(serialize(data), { relaxed: false })
              };
              if (this.id) {
                params["_id"] = this.id;
              }
              return [4, this._request.send(INSERT_DOC, params)];
            case 1:
              res = _a2.sent();
              if (res.code) {
                throw res;
              }
              inserted = EJSON.parse(res.inserted);
              ok = EJSON.parse(res.ok);
              if (ok == 1 && inserted == 1) {
                return [2, __assign11(__assign11({}, res), {
                  ok,
                  inserted
                })];
              } else {
                throw new Error(ERRORS14.INSERT_DOC_FAIL.message);
              }
              return [2];
          }
        });
      });
    };
    DocumentReference3.prototype.get = function() {
      return __awaiter18(this, void 0, void 0, function() {
        var param, res;
        return __generator18(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              param = {
                collectionName: this._coll,
                transactionId: this._transactionId,
                query: {
                  _id: { $eq: this.id }
                }
              };
              return [4, this._request.send(GET_DOC, param)];
            case 1:
              res = _a2.sent();
              if (res.code)
                throw res;
              return [2, {
                data: res.data !== "null" ? Util.formatField(EJSON.parse(res.data)) : EJSON.parse(res.data),
                requestId: res.requestId
              }];
          }
        });
      });
    };
    DocumentReference3.prototype.set = function(data) {
      return __awaiter18(this, void 0, void 0, function() {
        var param, res;
        return __generator18(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              param = {
                collectionName: this._coll,
                transactionId: this._transactionId,
                query: {
                  _id: { $eq: this.id }
                },
                data: EJSON.stringify(serialize(data), { relaxed: false }),
                upsert: true
              };
              return [4, this._request.send(UPDATE_DOC, param)];
            case 1:
              res = _a2.sent();
              if (res.code)
                throw res;
              return [2, __assign11(__assign11({}, res), { updated: EJSON.parse(res.updated), upserted: res.upserted ? JSON.parse(res.upserted) : null })];
          }
        });
      });
    };
    DocumentReference3.prototype.update = function(data) {
      return __awaiter18(this, void 0, void 0, function() {
        var param, res;
        return __generator18(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              param = {
                collectionName: this._coll,
                transactionId: this._transactionId,
                query: {
                  _id: { $eq: this.id }
                },
                data: EJSON.stringify(UpdateSerializer.encode(data), {
                  relaxed: false
                })
              };
              return [4, this._request.send(UPDATE_DOC, param)];
            case 1:
              res = _a2.sent();
              if (res.code)
                throw res;
              return [2, __assign11(__assign11({}, res), { updated: EJSON.parse(res.updated) })];
          }
        });
      });
    };
    DocumentReference3.prototype.delete = function() {
      return __awaiter18(this, void 0, void 0, function() {
        var param, res;
        return __generator18(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              param = {
                collectionName: this._coll,
                transactionId: this._transactionId,
                query: {
                  _id: { $eq: this.id }
                }
              };
              return [4, this._request.send(DELETE_DOC, param)];
            case 1:
              res = _a2.sent();
              if (res.code)
                throw res;
              return [2, __assign11(__assign11({}, res), { deleted: EJSON.parse(res.deleted) })];
          }
        });
      });
    };
    return DocumentReference3;
  })();

  // node_modules/@cloudbase/database/dist/esm/transaction/query.js
  var Query2 = /* @__PURE__ */ (function() {
    function Query3(transaction, coll) {
      this._coll = coll;
      this._transaction = transaction;
    }
    return Query3;
  })();

  // node_modules/@cloudbase/database/dist/esm/transaction/collection.js
  var __extends13 = /* @__PURE__ */ (function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
  var CollectionReference2 = (function(_super) {
    __extends13(CollectionReference3, _super);
    function CollectionReference3(transaction, coll) {
      return _super.call(this, transaction, coll) || this;
    }
    Object.defineProperty(CollectionReference3.prototype, "name", {
      get: function() {
        return this._coll;
      },
      enumerable: true,
      configurable: true
    });
    CollectionReference3.prototype.doc = function(docID) {
      if (typeof docID !== "string" && typeof docID !== "number") {
        throw new Error("docId\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u6216\u6570\u5B57");
      }
      return new DocumentReference2(this._transaction, this._coll, docID);
    };
    CollectionReference3.prototype.add = function(data) {
      var docID;
      if (data._id !== void 0) {
        docID = data._id;
      }
      var docRef = new DocumentReference2(this._transaction, this._coll, docID);
      return docRef.create(data);
    };
    return CollectionReference3;
  })(Query2);

  // node_modules/@cloudbase/database/dist/esm/transaction/index.js
  var __awaiter19 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  };
  var __generator19 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
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
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var START = "database.startTransaction";
  var COMMIT = "database.commitTransaction";
  var ABORT = "database.abortTransaction";
  var Transaction = (function() {
    function Transaction2(db) {
      this._db = db;
      this._request = new Db.reqClass(this._db.config);
      this.aborted = false;
      this.commited = false;
      this.inited = false;
    }
    Transaction2.prototype.init = function() {
      return __awaiter19(this, void 0, void 0, function() {
        var res;
        return __generator19(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this._request.send(START)];
            case 1:
              res = _a2.sent();
              if (res.code) {
                throw res;
              }
              this.inited = true;
              this._id = res.transactionId;
              return [2];
          }
        });
      });
    };
    Transaction2.prototype.collection = function(collName) {
      if (!collName) {
        throw new Error("Collection name is required");
      }
      return new CollectionReference2(this, collName);
    };
    Transaction2.prototype.getTransactionId = function() {
      return this._id;
    };
    Transaction2.prototype.getRequestMethod = function() {
      return this._request;
    };
    Transaction2.prototype.commit = function() {
      return __awaiter19(this, void 0, void 0, function() {
        var param, res;
        return __generator19(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              param = {
                transactionId: this._id
              };
              return [4, this._request.send(COMMIT, param)];
            case 1:
              res = _a2.sent();
              if (res.code)
                throw res;
              this.commited = true;
              return [2, res];
          }
        });
      });
    };
    Transaction2.prototype.rollback = function(customRollbackRes) {
      return __awaiter19(this, void 0, void 0, function() {
        var param, res;
        return __generator19(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              param = {
                transactionId: this._id
              };
              return [4, this._request.send(ABORT, param)];
            case 1:
              res = _a2.sent();
              if (res.code)
                throw res;
              this.aborted = true;
              this.abortReason = customRollbackRes;
              return [2, res];
          }
        });
      });
    };
    return Transaction2;
  })();
  function startTransaction() {
    return __awaiter19(this, void 0, void 0, function() {
      var transaction;
      return __generator19(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            transaction = new Transaction(this);
            return [4, transaction.init()];
          case 1:
            _a2.sent();
            return [2, transaction];
        }
      });
    });
  }
  function runTransaction(callback, times) {
    if (times === void 0) {
      times = 3;
    }
    return __awaiter19(this, void 0, void 0, function() {
      var transaction, callbackRes, error_1, throwWithRollback;
      var _this = this;
      return __generator19(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            _a2.trys.push([0, 4, , 10]);
            transaction = new Transaction(this);
            return [4, transaction.init()];
          case 1:
            _a2.sent();
            return [4, callback(transaction)];
          case 2:
            callbackRes = _a2.sent();
            if (transaction.aborted === true) {
              throw transaction.abortReason;
            }
            return [4, transaction.commit()];
          case 3:
            _a2.sent();
            return [2, callbackRes];
          case 4:
            error_1 = _a2.sent();
            if (transaction.inited === false) {
              throw error_1;
            }
            throwWithRollback = function(error) {
              return __awaiter19(_this, void 0, void 0, function() {
                var err_1;
                return __generator19(this, function(_a3) {
                  switch (_a3.label) {
                    case 0:
                      if (!(!transaction.aborted && !transaction.commited)) return [3, 5];
                      _a3.label = 1;
                    case 1:
                      _a3.trys.push([1, 3, , 4]);
                      return [4, transaction.rollback()];
                    case 2:
                      _a3.sent();
                      return [3, 4];
                    case 3:
                      err_1 = _a3.sent();
                      return [3, 4];
                    case 4:
                      throw error;
                    case 5:
                      if (transaction.aborted === true) {
                        throw transaction.abortReason;
                      }
                      throw error;
                  }
                });
              });
            };
            if (!(times <= 0)) return [3, 6];
            return [4, throwWithRollback(error_1)];
          case 5:
            _a2.sent();
            _a2.label = 6;
          case 6:
            if (!(error_1 && error_1.code === ERRORS14.DATABASE_TRANSACTION_CONFLICT.code)) return [3, 8];
            return [4, runTransaction.bind(this)(callback, --times)];
          case 7:
            return [2, _a2.sent()];
          case 8:
            return [4, throwWithRollback(error_1)];
          case 9:
            _a2.sent();
            return [3, 10];
          case 10:
            return [2];
        }
      });
    });
  }

  // node_modules/@cloudbase/database/dist/esm/index.js
  var Db = (function() {
    function Db2(config) {
      this.config = config;
      this.Geo = geo_exports;
      this.serverDate = ServerDateConstructor;
      this.command = Command;
      this.RegExp = RegExpConstructor;
      this.startTransaction = startTransaction;
      this.runTransaction = runTransaction;
      this.logicCommand = LogicCommand;
      this.updateCommand = UpdateCommand;
      this.queryCommand = QueryCommand;
    }
    Db2.prototype.collection = function(collName) {
      if (!collName) {
        throw new Error("Collection name is required");
      }
      return new CollectionReference(this, collName);
    };
    Db2.prototype.createCollection = function(collName) {
      var request = new Db2.reqClass(this.config);
      var params = {
        collectionName: collName
      };
      return request.send("database.addCollection", params);
    };
    return Db2;
  })();

  // node_modules/@cloudbase/js-sdk/database/dist/index.esm.js
  var __assign12 = function() {
    __assign12 = Object.assign || function(t) {
      for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s = arguments[i2];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign12.apply(this, arguments);
  };
  var COMPONENT_NAME5 = "database";
  function database(dbConfig) {
    var _a2 = this.platform, adapter2 = _a2.adapter, runtime2 = _a2.runtime;
    Db.reqClass = this.request.constructor;
    Db.getAccessToken = this.authInstance ? this.authInstance.getAccessToken.bind(this.authInstance) : function() {
      return "";
    };
    Db.runtime = runtime2;
    if (this.wsClientClass) {
      Db.wsClass = adapter2.wsClass;
      Db.wsClientClass = this.wsClientClass;
    }
    if (!Db.ws) {
      Db.ws = null;
    }
    return new Db(__assign12(__assign12({}, this.config), dbConfig));
  }
  var component6 = {
    name: COMPONENT_NAME5,
    entity: {
      database
    }
  };
  try {
    cloudbase.registerComponent(component6);
  } catch (e) {
  }
  function registerDatabase(app) {
    try {
      app.registerComponent(component6);
    } catch (e) {
      console.warn(e);
    }
  }

  // node_modules/@cloudbase/js-sdk/package.json
  var package_default = {
    name: "@cloudbase/js-sdk",
    version: "1.8.4",
    description: "cloudbase javascript sdk",
    main: "dist/index.cjs.js",
    module: "dist/index.esm.js",
    miniprogram: "miniprogram_dist",
    typings: "./index.d.ts",
    scripts: {
      lint: 'eslint --fix "./src/**/*.ts" "./database/**/*.ts"',
      build: "rm -rf dist/ && gulp build",
      "build:cdn": "gulp cdn",
      "build:miniapp": "gulp miniapp",
      "build:e2e": "rm -rf dist/ && NODE_ENV=e2e gulp e2e"
    },
    publishConfig: {
      access: "public"
    },
    repository: {
      type: "git",
      url: "https://github.com/TencentCloudBase/cloudbase-js-sdk"
    },
    keywords: [
      "tcb",
      "cloudbase",
      "Cloudbase",
      "serverless",
      "Serverless",
      "javascript",
      "JavaScript"
    ],
    files: [
      "miniprogram_dist",
      "**/dist/",
      "/index.d.ts",
      "**/package.json"
    ],
    components: [
      "app",
      "auth",
      "database",
      "functions",
      "storage"
    ],
    author: "",
    license: "ISC",
    dependencies: {
      "@cloudbase/analytics": "^1.8.4",
      "@cloudbase/app": "^1.8.4",
      "@cloudbase/auth": "^1.8.4",
      "@cloudbase/database": "0.9.22",
      "@cloudbase/functions": "^1.8.4",
      "@cloudbase/realtime": "^1.8.4",
      "@cloudbase/storage": "^1.8.4",
      "@cloudbase/types": "^1.8.4",
      "@cloudbase/utilities": "^1.8.4"
    },
    browserslist: [
      "last 2 version",
      "> 1%",
      "chrome 53"
    ],
    gitHead: "0cf52fe434d43d351d852156834c71baac974d58"
  };

  // node_modules/@cloudbase/js-sdk/dist/index.esm.js
  var version = package_default.version;
  esm_default2.registerVersion(version);
  try {
    registerAuth(esm_default2);
    registerFunctions(esm_default2);
    registerStorage(esm_default2);
    registerDatabase(esm_default2);
    registerRealtime(esm_default2);
    registerAnalytics(esm_default2);
  } catch (e) {
  }
  try {
    window.cloudbase = esm_default2;
  } catch (e) {
  }
  var index_esm_default = esm_default2;

  // entry.js
  globalThis.cloudbase = index_esm_default;
})();
/*! Bundled license information:

bson/dist/bson.browser.esm.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
