(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MonitorJS = {}));
}(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

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

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  /*
   * @Author: 杨宏旋
   * @Date: 2021-07-19 18:15:10
   * @LastEditors: 杨宏旋
   * @LastEditTime: 2021-07-21 11:32:23
   * @Description:
   */

  /**
   * 错误类型枚举
   */

  /* eslint-disable */
  var ErrorCategoryEnum;

  (function (ErrorCategoryEnum) {
    /**
     * js 错误
     */
    ErrorCategoryEnum["JS_ERROR"] = "js_error";
    /**
     * 资源引用错误
     */

    ErrorCategoryEnum["RESOURCE_ERROR"] = "resource_error";
    /**
     * Vue错误
     */

    ErrorCategoryEnum["VUE_ERROR"] = "vue_error";
    /**
     * promise 错误
     */

    ErrorCategoryEnum["PROMISE_ERROR"] = "promise_error";
    /**
     * ajax异步请求错误
     */

    ErrorCategoryEnum["AJAX_ERROR"] = "ajax_error";
    /**
     * 跨域js错误
     */

    ErrorCategoryEnum["CROSS_SCRIPT_ERROR"] = "cross_srcipt_error";
    /**
     * 未知异常
     */

    ErrorCategoryEnum["UNKNOW_ERROR"] = "unknow_error";
    /**
     * 性能上报
     */

    ErrorCategoryEnum["PERFORMANCE"] = "performance";
  })(ErrorCategoryEnum || (ErrorCategoryEnum = {}));
  /**
   * 错误level枚举
   */


  var ErrorLevelEnum;

  (function (ErrorLevelEnum) {
    /**
     * 错误信息
     */
    ErrorLevelEnum["ERROR"] = "Error";
    /**
     * 警告信息
     */

    ErrorLevelEnum["WARN"] = "Warning";
    /**
     * 日志信息
     */

    ErrorLevelEnum["INFO"] = "Info";
    /**
     * 用户自定义事件
     */

    ErrorLevelEnum["Custom"] = "Custom";
  })(ErrorLevelEnum || (ErrorLevelEnum = {}));
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

  /*
   * @Author: 杨宏旋
   * @Date: 2021-07-20 10:54:25
   * @LastEditors: 杨宏旋
   * @LastEditTime: 2021-07-20 10:55:52
   * @Description:
   */
  // 变量库
  var VariableLibrary = {
    navigator: window.navigator,
    // 信息map
    infoMap: {
      engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
      browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi'],
      os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
      device: ['Mobile', 'Tablet', 'iPad']
    }
  };

  /* eslint-disable no-useless-escape */

  var MethodLibrary = function () {
    return {
      // 获取匹配库
      getMatchMap: function getMatchMap(u) {
        return {
          // 内核
          Trident: u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
          Presto: u.indexOf('Presto') > -1,
          WebKit: u.indexOf('AppleWebKit') > -1,
          Gecko: u.indexOf('Gecko/') > -1,
          // 浏览器
          Safari: u.indexOf('Safari') > -1,
          Chrome: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
          IE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
          Edge: u.indexOf('Edge') > -1,
          Firefox: u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
          'Firefox Focus': u.indexOf('Focus') > -1,
          Chromium: u.indexOf('Chromium') > -1,
          Opera: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
          Vivaldi: u.indexOf('Vivaldi') > -1,
          Yandex: u.indexOf('YaBrowser') > -1,
          Arora: u.indexOf('Arora') > -1,
          Lunascape: u.indexOf('Lunascape') > -1,
          QupZilla: u.indexOf('QupZilla') > -1,
          'Coc Coc': u.indexOf('coc_coc_browser') > -1,
          Kindle: u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
          Iceweasel: u.indexOf('Iceweasel') > -1,
          Konqueror: u.indexOf('Konqueror') > -1,
          Iceape: u.indexOf('Iceape') > -1,
          SeaMonkey: u.indexOf('SeaMonkey') > -1,
          Epiphany: u.indexOf('Epiphany') > -1,
          '360': u.indexOf('QihooBrowser') > -1 || u.indexOf('QHBrowser') > -1,
          '360EE': u.indexOf('360EE') > -1,
          '360SE': u.indexOf('360SE') > -1,
          UC: u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
          QQBrowser: u.indexOf('QQBrowser') > -1,
          QQ: u.indexOf('QQ/') > -1,
          Baidu: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
          Maxthon: u.indexOf('Maxthon') > -1,
          Sogou: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
          LBBROWSER: u.indexOf('LBBROWSER') > -1,
          '2345Explorer': u.indexOf('2345Explorer') > -1,
          TheWorld: u.indexOf('TheWorld') > -1,
          XiaoMi: u.indexOf('MiuiBrowser') > -1,
          Quark: u.indexOf('Quark') > -1,
          Qiyu: u.indexOf('Qiyu') > -1,
          Wechat: u.indexOf('MicroMessenger') > -1,
          Taobao: u.indexOf('AliApp(TB') > -1,
          Alipay: u.indexOf('AliApp(AP') > -1,
          Weibo: u.indexOf('Weibo') > -1,
          Douban: u.indexOf('com.douban.frodo') > -1,
          Suning: u.indexOf('SNEBUY-APP') > -1,
          iQiYi: u.indexOf('IqiyiApp') > -1,
          // 系统或平台
          Windows: u.indexOf('Windows') > -1,
          Linux: u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
          'Mac OS': u.indexOf('Macintosh') > -1,
          Android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
          Ubuntu: u.indexOf('Ubuntu') > -1,
          FreeBSD: u.indexOf('FreeBSD') > -1,
          Debian: u.indexOf('Debian') > -1,
          'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
          BlackBerry: u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
          MeeGo: u.indexOf('MeeGo') > -1,
          Symbian: u.indexOf('Symbian') > -1,
          iOS: u.indexOf('like Mac OS X') > -1,
          'Chrome OS': u.indexOf('CrOS') > -1,
          WebOS: u.indexOf('hpwOS') > -1,
          // 设备
          Mobile: u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
          Tablet: u.indexOf('Tablet') > -1 || u.indexOf('Nexus 7') > -1,
          iPad: u.indexOf('iPad') > -1
        };
      },
      // 在信息map和匹配库中进行匹配
      matchInfoMap: function matchInfoMap(_this) {
        var u = VariableLibrary.navigator.userAgent || {};
        var match = MethodLibrary.getMatchMap(u);

        for (var s in VariableLibrary.infoMap) {
          for (var i = 0; i < VariableLibrary.infoMap[s].length; i++) {
            var value = VariableLibrary.infoMap[s][i];

            if (match[value]) {
              _this[s] = value;
            }
          }
        }
      },
      // 获取当前操作系统
      getOS: function getOS() {
        var _this = this;

        MethodLibrary.matchInfoMap(_this);
        return _this.os;
      },
      // 获取操作系统版本
      getOSVersion: function getOSVersion() {
        var _this = this;

        var u = VariableLibrary.navigator.userAgent || {};
        _this.osVersion = ''; // 系统版本信息

        var osVersion = {
          Windows: function Windows() {
            var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1');
            var oldWindowsVersionMap = {
              '6.4': '10',
              '6.3': '8.1',
              '6.2': '8',
              '6.1': '7',
              '6.0': 'Vista',
              '5.2': 'XP',
              '5.1': 'XP',
              '5.0': '2000'
            };
            return oldWindowsVersionMap[v] || v;
          },
          Android: function Android() {
            return u.replace(/^.*Android ([\d.]+);.*$/, '$1');
          },
          iOS: function iOS() {
            return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
          },
          Debian: function Debian() {
            return u.replace(/^.*Debian\/([\d.]+).*$/, '$1');
          },
          'Windows Phone': function WindowsPhone() {
            return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
          },
          'Mac OS': function MacOS() {
            return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
          },
          WebOS: function WebOS() {
            return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
          }
        };

        if (osVersion[_this.os]) {
          _this.osVersion = osVersion[_this.os]();

          if (_this.osVersion === u) {
            _this.osVersion = '';
          }
        }

        return _this.osVersion;
      },
      // 获取横竖屏状态
      getOrientationStatu: function getOrientationStatu() {
        var orientationStatus = '';
        var orientation = window.matchMedia('(orientation: portrait)');

        if (orientation.matches) {
          orientationStatus = '竖屏';
        } else {
          orientationStatus = '横屏';
        }

        return orientationStatus;
      },
      // 获取设备类型
      getDeviceType: function getDeviceType() {
        var _this = this;

        _this.device = 'PC';
        MethodLibrary.matchInfoMap(_this);
        return _this.device;
      },
      // 获取网络状态
      getNetwork: function getNetwork() {
        var _navigator, _navigator$connection;

        var netWork = (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator$connection = _navigator.connection) === null || _navigator$connection === void 0 ? void 0 : _navigator$connection.effectiveType;
        return netWork;
      },
      // 获取当前语言
      getLanguage: function getLanguage() {
        var _this = this;

        _this.language = function () {
          var language = VariableLibrary.navigator.browserLanguage || VariableLibrary.navigator.language;
          var arr = language.split('-');

          if (arr[1]) {
            arr[1] = arr[1].toUpperCase();
          }

          return arr.join('_');
        }();

        return _this.language;
      },
      // 生成浏览器指纹
      createFingerprint: function createFingerprint(domain) {
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

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var txt = domain || window.location.host;
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
      },
      // 浏览器信息
      getBrowserInfo: function getBrowserInfo() {
        var _VariableLibrary$navi;

        var _this = this;

        MethodLibrary.matchInfoMap(_this);
        var u = (VariableLibrary === null || VariableLibrary === void 0 ? void 0 : (_VariableLibrary$navi = VariableLibrary.navigator) === null || _VariableLibrary$navi === void 0 ? void 0 : _VariableLibrary$navi.userAgent) || {};

        var _mime = function _mime(option, value) {
          var mimeTypes = VariableLibrary.navigator.mimeTypes;

          for (var key in mimeTypes) {
            if (mimeTypes[key][option] === value) {
              return true;
            }
          }

          return false;
        };

        var match = MethodLibrary.getMatchMap(u);
        var is360 = false;

        if (window.chrome) {
          var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');

          if (chrome_vision > 36 && window.showModalDialog) {
            is360 = true;
          } else if (chrome_vision > 45) {
            is360 = _mime('type', 'application/vnd.chromium.remoting-viewer');
          }
        }

        if (match['Baidu'] && match['Opera']) {
          match['Baidu'] = false;
        }

        if (match['Mobile']) {
          match['Mobile'] = !(u.indexOf('iPad') > -1);
        }

        if (is360) {
          var _VariableLibrary$navi2, _VariableLibrary$navi3;

          if (_mime('type', 'application/gameplugin')) {
            match['360SE'] = true;
          } else if (VariableLibrary !== null && VariableLibrary !== void 0 && (_VariableLibrary$navi2 = VariableLibrary.navigator) !== null && _VariableLibrary$navi2 !== void 0 && (_VariableLibrary$navi3 = _VariableLibrary$navi2.connection) !== null && _VariableLibrary$navi3 !== void 0 && _VariableLibrary$navi3.saveData) {
            match['360SE'] = true;
          } else {
            match['360EE'] = true;
          }
        }

        if (match['IE'] || match['Edge']) {
          var navigator_top = window.screenTop - window.screenY;

          switch (navigator_top) {
            case 71:
              // 无收藏栏,贴边
              break;

            case 74:
              // 无收藏栏,非贴边
              break;

            case 99:
              // 有收藏栏,贴边
              break;

            case 102:
              // 有收藏栏,非贴边
              match['360EE'] = true;
              break;

            case 75:
              // 无收藏栏,贴边
              break;

            case 74:
              // 无收藏栏,非贴边
              break;

            case 105:
              // 有收藏栏,贴边
              break;

            case 104:
              // 有收藏栏,非贴边
              match['360SE'] = true;
              break;
          }
        }

        var browerVersionMap = {
          Safari: function Safari() {
            return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
          },
          Chrome: function Chrome() {
            return u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
          },
          IE: function IE() {
            return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
          },
          Edge: function Edge() {
            return u.replace(/^.*Edge\/([\d.]+).*$/, '$1');
          },
          Firefox: function Firefox() {
            return u.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
          },
          'Firefox Focus': function FirefoxFocus() {
            return u.replace(/^.*Focus\/([\d.]+).*$/, '$1');
          },
          Chromium: function Chromium() {
            return u.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
          },
          Opera: function Opera() {
            return u.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
          },
          Vivaldi: function Vivaldi() {
            return u.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
          },
          Yandex: function Yandex() {
            return u.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
          },
          Arora: function Arora() {
            return u.replace(/^.*Arora\/([\d.]+).*$/, '$1');
          },
          Lunascape: function Lunascape() {
            return u.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
          },
          QupZilla: function QupZilla() {
            return u.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
          },
          'Coc Coc': function CocCoc() {
            return u.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
          },
          Kindle: function Kindle() {
            return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
          },
          Iceweasel: function Iceweasel() {
            return u.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
          },
          Konqueror: function Konqueror() {
            return u.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
          },
          Iceape: function Iceape() {
            return u.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
          },
          SeaMonkey: function SeaMonkey() {
            return u.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
          },
          Epiphany: function Epiphany() {
            return u.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
          },
          '360': function _() {
            return u.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
          },
          '360SE': function SE() {
            var hash = {
              '63': '10.0',
              '55': '9.1',
              '45': '8.1',
              '42': '8.0',
              '31': '7.0',
              '21': '6.3'
            };
            var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
            return hash[chrome_vision] || '';
          },
          '360EE': function EE() {
            var hash = {
              '69': '11.0',
              '63': '9.5',
              '55': '9.0',
              '50': '8.7',
              '30': '7.5'
            };
            var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
            return hash[chrome_vision] || '';
          },
          Maxthon: function Maxthon() {
            return u.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
          },
          QQBrowser: function QQBrowser() {
            return u.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
          },
          QQ: function QQ() {
            return u.replace(/^.*QQ\/([\d.]+).*$/, '$1');
          },
          Baidu: function Baidu() {
            return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1');
          },
          UC: function UC() {
            return u.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
          },
          Sogou: function Sogou() {
            return u.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
          },
          LBBROWSER: function LBBROWSER() {
            var hash = {
              '57': '6.5',
              '49': '6.0',
              '46': '5.9',
              '42': '5.3',
              '39': '5.2',
              '34': '5.0',
              '29': '4.5',
              '21': '4.0'
            };
            var chrome_vision = navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, '$1');
            return hash[chrome_vision] || '';
          },
          '2345Explorer': function Explorer() {
            return u.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1');
          },
          TheWorld: function TheWorld() {
            return u.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
          },
          XiaoMi: function XiaoMi() {
            return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
          },
          Quark: function Quark() {
            return u.replace(/^.*Quark\/([\d.]+).*$/, '$1');
          },
          Qiyu: function Qiyu() {
            return u.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
          },
          Wechat: function Wechat() {
            return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
          },
          Taobao: function Taobao() {
            return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
          },
          Alipay: function Alipay() {
            return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
          },
          Weibo: function Weibo() {
            return u.replace(/^.*weibo__([\d.]+).*$/, '$1');
          },
          Douban: function Douban() {
            return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
          },
          Suning: function Suning() {
            return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
          },
          iQiYi: function iQiYi() {
            return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
          }
        };
        _this.browserVersion = '';

        if (browerVersionMap[_this.browser]) {
          _this.browserVersion = browerVersionMap[_this.browser]();

          if (_this.browserVersion === u) {
            _this.browserVersion = '';
          }
        }

        if (_this.browser === 'Edge') {
          _this.engine = 'EdgeHTML';
        }

        if (_this.browser === 'Chrome' && parseInt(_this.browserVersion) > 27) {
          _this.engine = 'Blink';
        }

        if (_this.browser === 'Opera' && parseInt(_this.browserVersion) > 12) {
          _this.engine = 'Blink';
        }

        if (_this.browser === 'Yandex') {
          _this.engine = 'Blink';
        }

        return "".concat(_this.browser, "\uFF08\u7248\u672C: ").concat(_this.browserVersion, "&nbsp;&nbsp;\u5185\u6838: ").concat(_this.engine, "\uFF09");
      }
    };
  }();

  /*
   * @Author: 杨宏旋
   * @Date: 2021-07-19 16:36:31
   * @LastEditors: 杨宏旋
   * @LastEditTime: 2021-07-20 11:00:59
   * @Description:
   */

  var DeviceInfo = function () {
    // 逻辑层
    var LogicLibrary = function () {
      return {
        DeviceInfoObj: function DeviceInfoObj(params) {
          params = params || {
            domain: ''
          };
          var info = {
            deviceType: MethodLibrary.getDeviceType(),
            OS: MethodLibrary.getOS(),
            OSVersion: MethodLibrary.getOSVersion(),
            screenHeight: window.screen.height,
            screenWidth: window.screen.width,
            language: MethodLibrary.getLanguage(),
            netWork: MethodLibrary.getNetwork(),
            orientation: MethodLibrary.getOrientationStatu(),
            browserInfo: MethodLibrary.getBrowserInfo(),
            fingerprint: MethodLibrary.createFingerprint(params.domain),
            userAgent: VariableLibrary.navigator.userAgent // 包含 appCodeName,appName,appVersion,language,platform 等

          };

          if (!params.info || params.info.length === 0) {
            return info;
          }

          var infoTemp = {};

          var _loop = function _loop(i) {
            params.info.forEach(function (item) {
              if (item.toLowerCase() === i.toLowerCase()) {
                item = i;
                infoTemp[item] = info[item];
              }
            });
          };

          for (var i in info) {
            _loop(i);
          }

          return infoTemp;
        }
      };
    }(); // 对外暴露方法


    return {
      getDeviceInfo: function getDeviceInfo(params) {
        return LogicLibrary.DeviceInfoObj(params);
      }
    };
  }();

  /* eslint-disable no-useless-escape */

  /*
   * @Author: 杨宏旋
   * @Date: 2021-07-19 16:25:42
   * @LastEditors: 杨宏旋
   * @LastEditTime: 2021-07-20 20:21:26
   * @Description:
   */
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

    var _super = _createSuper(MyDate);

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

  /**
   * 数据持久化
   */

  var API = /*#__PURE__*/function () {
    function API(url) {
      _classCallCheck(this, API);

      _defineProperty(this, "url", void 0);

      this.url = url;
    }
    /**
     * 上报信息 （默认方式）
     */


    _createClass(API, [{
      key: "report",
      value: function report(data) {
        if (!checkUrl(this.url)) {
          throw "\u4E0A\u62A5\u4FE1\u606Furl\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E,url=".concat(this.url);
        }

        this.reportByImg(data);
      }
      /**
       * 发送消息
       */

    }, {
      key: "sendInfo",
      value: function sendInfo(data) {
        var dataStr = JSON.stringify(data);

        try {
          if (fetch) {
            fetch(this.url, {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: dataStr,
              mode: 'same-origin',
              keepalive: true
            });
            return;
          }
        } catch (error) {
          console.info('fetch请求异常', error);
        }

        try {
          var xhr = new XMLHttpRequest();
          xhr.open('POST', this.url, true); // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(dataStr);
        } catch (error) {
          console.info(error);
        }
      }
      /**
       * 通过img方式上报信息
       */

    }, {
      key: "reportByImg",
      value: function reportByImg(data) {
        if (!checkUrl(this.url)) {
          throw "\u4E0A\u62A5\u4FE1\u606Furl\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E,url=".concat(this.url);
        }

        try {
          var img = new Image();
          img.src = "".concat(this.url, "/up.gif?v=").concat(new Date().getTime(), "&").concat(this.formatParams(data));
        } catch (error) {
          console.info(error);
        }
      } // /**
      //  * sendBeacon上报
      //  */
      // reportByNavigator(data: DataProps) {
      //   navigator.sendBeacon && navigator.sendBeacon(this.url, data)
      // }

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
   * @LastEditors: 杨宏旋
   * @LastEditTime: 2021-07-20 20:25:57
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

      _defineProperty(this, "level", void 0);

      _defineProperty(this, "msg", void 0);

      _defineProperty(this, "url", void 0);

      _defineProperty(this, "line", void 0);

      _defineProperty(this, "col", void 0);

      _defineProperty(this, "errorObj", void 0);

      _defineProperty(this, "reportUrl", void 0);

      _defineProperty(this, "extendsInfo", void 0);

      _defineProperty(this, "appID", void 0);

      _defineProperty(this, "selector", void 0);

      this.category = ErrorCategoryEnum.UNKNOW_ERROR; // 错误类型

      this.level = ErrorLevelEnum.INFO; // 错误等级

      this.msg = ''; // 错误信息

      this.url = ''; // 错误信息地址

      this.line = ''; // 行数

      this.col = ''; // 列数

      this.errorObj = {}; // 错误堆栈

      this.reportUrl = params.reportUrl; // 上报错误地址

      this.extendsInfo = params.extendsInfo; // 扩展信息

      this.appID = params.appID; // 应用id

      this.selector = ''; // 触发错误的元素
      // this.Breadcrumb = new Breadcrumb()
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

          var errorInfo = this.handleErrorInfo();
          console.info('errorInfo: ', errorInfo); // this.Breadcrumb.push({
          //   category: errorInfo.category,
          //   data: errorInfo.logInfo,
          //   time: errorInfo.time,
          //   level: errorInfo.logType,
          // })
          // console.log('this.Breadcrumb: ', this.Breadcrumb)

          console.info("------------------------ ".concat(this.category, " ------------------------\n"), errorInfo); // 记录日志

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
          loginformation: this.msg,
          url: encodeURIComponent(this.url)
        };

        switch (this.category) {
          case ErrorCategoryEnum.JS_ERROR:
            txt.errorline = this.line;
            txt.errorcol = this.col;

            if (this !== null && this !== void 0 && (_this$errorObj = this.errorObj) !== null && _this$errorObj !== void 0 && _this$errorObj.stack) {
              txt.errorstack = this.errorObj.stack;
            }

            break;

          default:
            txt.errorother = JSON.stringify(this.errorObj);
            break;
        }

        var deviceInfo = this.getDeviceInfo();
        var extendsInfo = this.getExtendsInfo();
        var recordInfo = extendsInfo;
        recordInfo.category = this.category; // 错误分类

        recordInfo.level = this.level; // 错误级别

        recordInfo.logInfo = JSON.stringify(txt); // 错误信息

        recordInfo.deviceInfo = deviceInfo; // 设备信息

        recordInfo.appID = this.appID; // 应用id

        recordInfo.time = new Date().getTime();
        this.selector && (recordInfo.selector = this.selector);
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
            extendsInfo = _objectSpread2(_objectSpread2({}, extendsInfo), dynamicParams);
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
      /**
       * 获取设备信息
       */

    }, {
      key: "getDeviceInfo",
      value: function getDeviceInfo() {
        try {
          var deviceInfo = DeviceInfo.getDeviceInfo();
          return JSON.stringify(deviceInfo);
        } catch (error) {
          console.info(error);
          return '';
        }
      }
    }]);

    return BaseMonitor;
  }();

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

    var _super = _createSuper(XHRError);

    function XHRError(params) {
      var _this;

      _classCallCheck(this, XHRError);

      _this = _super.call(this, params);

      _defineProperty(_assertThisInitialized(_this), "_handleEvent", function (type, startTime, self, ajaxlib, logData) {
        return function () {
          try {
            var duration = Date.now() - startTime;
            _this.level = ErrorLevelEnum.WARN;
            _this.category = ErrorCategoryEnum.AJAX_ERROR;
            _this.msg = self.response || ErrorCategoryEnum.AJAX_ERROR;
            _this.url = logData.url; // 请求路径

            _this.errorObj = {
              status: self.status,
              statusText: self.statusText,
              duration: duration,
              type: type,
              method: logData.method.toLowerCase(),
              ajaxlib: ajaxlib
            };
            console.log('this.errorObj: ', _this.errorObj);

            _this.recordError();
          } catch (error) {
            console.info(error);
          }
        };
      });

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
      key: "handleXhrError",
      value:
      /**
       * 获取XMLHttpRequest 错误信息
       */
      function handleXhrError() {
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
            ['error', 'load', 'abort'].map(function (ele) {
              _this2.addEventListener(ele, self._handleEvent(ele, startTime, _this2, AjaxLibEnum.XHR, _this2.logData));
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

          return originFetch.apply(this, args).then(function (res) {
            var tempRes = res.clone();

            if (res.ok) {
              self._handleEvent('load', startTime, {
                status: tempRes.status || 200,
                statusText: JSON.stringify(res) || '',
                response: res
              }, AjaxLibEnum.FETCH, logData)();
            } else {
              self._handleEvent('error', startTime, {
                status: tempRes.status || 500,
                statusText: JSON.stringify(res) || '',
                response: res
              }, AjaxLibEnum.FETCH, logData)();
            }
          })["catch"](function (error) {
            self._handleEvent('error', startTime, {
              status: 500,
              statusText: error || '',
              response: error
            }, AjaxLibEnum.FETCH, logData)();

            throw error;
          });
        };
      }
    }]);

    return XHRError;
  }(BaseMonitor);

  /* eslint-disable no-undef */
  /*
   * @Author: 杨宏旋
   * @Date: 2020-05-31 22:47:24
   * @LastEditors: 杨宏旋
   * @LastEditTime: 2021-07-20 19:21:11
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

  /**
   * 捕获JS错误
   */

  var JSError = /*#__PURE__*/function (_BaseMonitor) {
    _inherits(JSError, _BaseMonitor);

    var _super = _createSuper(JSError);

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
          var lastEvent = getLastEvent(); // 最后一个交互事件

          var selector = lastEvent ? getSelector(lastEvent.path) : ''; // 代表最后一个操作的元素

          try {
            _this.level = ErrorLevelEnum.WARN;
            _this.category = ErrorCategoryEnum.JS_ERROR;
            _this.msg = msg;
            _this.url = url;
            _this.line = line;
            _this.col = col;
            _this.errorObj = error;
            _this.selector = selector;

            _this.recordError();
          } catch (error) {
            console.info('js错误异常', error);
          }
        };
      }
    }]);

    return JSError;
  }(BaseMonitor);

  /**
   * 捕获未处理的Promise异常
   */

  var PromiseError = /*#__PURE__*/function (_BaseMonitor) {
    _inherits(PromiseError, _BaseMonitor);

    var _super = _createSuper(PromiseError);

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

            _this.level = ErrorLevelEnum.WARN;
            _this.category = ErrorCategoryEnum.PROMISE_ERROR;
            _this.msg = event.reason;

            _this.recordError();
          } catch (error) {
            console.info(error);
          }
        }, true);
      }
    }]);

    return PromiseError;
  }(BaseMonitor);

  /**
   * 资源加载错误
   */

  var ResourceError = /*#__PURE__*/function (_BaseMonitor) {
    _inherits(ResourceError, _BaseMonitor);

    var _super = _createSuper(ResourceError);

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
          var lastEvent = getLastEvent(); // 最后一个交互事件

          var selector = lastEvent ? getSelector(lastEvent.path) : ''; // 代表最后一个操作的元素

          try {
            if (!event) {
              return;
            }

            _this.category = ErrorCategoryEnum.RESOURCE_ERROR;
            var target = event.target || event.srcElement;
            var isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;

            if (!isElementTarget) {
              return; // js error不再处理
            }

            _this.level = ErrorLevelEnum.ERROR;
            _this.msg = "\u52A0\u8F7D ".concat(target.tagName, " \u8D44\u6E90\u9519\u8BEF");
            _this.url = target.src || target.href;
            _this.errorObj = target;
            _this.selector = selector;

            _this.recordError();
          } catch (error) {
            console.info('资源加载收集异常', error);
          }
        }, true);
      }
    }]);

    return ResourceError;
  }(BaseMonitor);

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
    //   level: breadcrumbLevel,
    // })
    // transportData.send(data)
  }

  var VueError = /*#__PURE__*/function (_BaseMonitor) {
    _inherits(VueError, _BaseMonitor);

    var _super = _createSuper(VueError);

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
            _this.level = ErrorLevelEnum.WARN;
            _this.msg = JSON.stringify(handleVueError(error, vm, info, Vue));
            _this.category = ErrorCategoryEnum.VUE_ERROR;

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
        var times = {};
        var loadTime = t.loadEventEnd - t.loadEventStart;

        if (loadTime < 0) {
          setTimeout(function () {
            pagePerformance.getTiming();
          }, 200);
          return;
        } // 【重要】重定向的时间


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
        return times;
      } catch (error) {
        console.info(error);
      }
    },
    getEntries: function getEntries() {
      var usefulType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!window.performance || !window.performance.getEntries) {
        console.info('该浏览器不支持performance.getEntries方法');
        return;
      }

      var entryTimesList = [];
      var entryList = window.performance.getEntries();

      if (!entryList || entryList.length === 0) {
        return entryTimesList;
      }

      entryList.forEach(function (item) {
        var templeObj = {};

        if (usefulType.indexOf(item.initiatorType) > -1) {
          // 请求资源路径
          templeObj.name = item.name; // 发起资源类型

          templeObj.initiatorType = item.initiatorType; // http协议版本

          templeObj.nextHopProtocol = item.nextHopProtocol; // 重定向时间

          templeObj.redirectTime = (item.redirectEnd - item.redirectStart).toFixed(2); // dns查询耗时

          templeObj.dnsTime = (item.domainLookupEnd - item.domainLookupStart).toFixed(2); // tcp链接耗时

          templeObj.tcpTime = (item.connectEnd - item.connectStart).toFixed(2); // 发送请求到接收到响应第一个字符

          templeObj.ttfbTime = (item.responseStart - item.requestStart).toFixed(2); // 接收响应的时间（从第一个字符到最后一个字符）

          templeObj.responseTime = (item.responseEnd - item.responseStart).toFixed(2); // 请求+响应总时间

          templeObj.reqTotalTime = (item.responseEnd - item.requestStart).toFixed(2);
          entryTimesList.push(templeObj);
        }
      });
      return entryTimesList;
    }
  };

  var MonitorPerformance = /*#__PURE__*/function (_BaseMonitor) {
    _inherits(MonitorPerformance, _BaseMonitor);

    var _super = _createSuper(MonitorPerformance);

    function MonitorPerformance(options) {
      var _this;

      _classCallCheck(this, MonitorPerformance);

      _this = _super.call(this, {
        reportUrl: options.reportUrl,
        appID: options.appID,
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
      _this.category = ErrorCategoryEnum.PERFORMANCE;
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

        options.isRScript !== false && usefulType.push('script'); // 资源数据细分，是否上报script数据

        options.isRCSS !== false && usefulType.push('css'); // 资源数据细分，是否上报CSS数据

        options.isRFetch !== false && usefulType.push('fetch'); // 资源数据细分，是否上报Fetch数据

        options.isRXHR !== false && usefulType.push('xmlhttprequest'); // 资源数据细分，是否上报XHR数据

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
            this.config.performance = pagePerformance.getTiming();
          }

          if (this.isResource) {
            this.config.resourceList = pagePerformance.getEntries(this.usefulType);
          }

          var result = {
            curTime: new MyDate().format('yyyy-MM-dd HH:mm:ss'),
            performance: this.config.performance,
            resourceList: this.config.resourceList,
            markUser: this.markUser(),
            markUv: this.markUv(),
            deviceInfo: this.getDeviceInfo()
          };
          var extendsInfo = this.getExtendsInfo();

          var data = _objectSpread2(_objectSpread2({}, extendsInfo), {}, {
            category: this.category,
            logType: ErrorLevelEnum.INFO,
            logInfo: JSON.stringify(result)
          });

          localStorage.setItem('page_performance', JSON.stringify(data)); // 发送监控数据

          new API(this.reportUrl).report(data);
          this.clearPerformance();
        } catch (error) {
          console.info('性能信息上报异常', error);
        }
      }
    }, {
      key: "randomString",
      value: function randomString() {
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

    }, {
      key: "markUser",
      value: function markUser() {
        var psMarkUser = sessionStorage.getItem('ps_markUser') || '';

        if (!psMarkUser) {
          psMarkUser = this.randomString();
          sessionStorage.setItem('ps_markUser', psMarkUser);
        }

        return psMarkUser;
      }
      /**
       * 获得Uv
       */

    }, {
      key: "markUv",
      value: function markUv() {
        var date = new MyDate();
        var psMarkUv = localStorage.getItem('ps_markUv') || '';
        var datatime = localStorage.getItem('ps_markUvTime') || '';
        var today = date.format('yyyy/MM/dd 23:59:59');

        if (!psMarkUv && !datatime || date.getTime() > datatime * 1) {
          psMarkUv = this.randomString();
          localStorage.setItem('ps_markUv', psMarkUv);
          localStorage.setItem('ps_markUvTime', JSON.stringify(new Date(today).getTime()));
        }

        return psMarkUv;
      }
    }, {
      key: "clearPerformance",
      value: function clearPerformance() {
        var _window, _window$performance;

        if ((_window = window) !== null && _window !== void 0 && (_window$performance = _window.performance) !== null && _window$performance !== void 0 && _window$performance.clearResourceTimings) {
          performance.clearResourceTimings();
          this.config.performance = {};
          this.config.resourceList = '';
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
          appID: appID
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
      }
      /**
       * 监听页面性能
       * @param {OptionsType} options {pageId：页面标示,url：上报地址}
       */

    }, {
      key: "monitorPerformance",
      value: function monitorPerformance(options) {
        // new MonitorNetworkSpeed(options).reportNetworkSpeed();
        var recordFunc = function recordFunc() {
          new MonitorPerformance(options).record();
        };

        recordFunc();
        window.removeEventListener('unload', recordFunc);
        window.addEventListener('unload', recordFunc);
      }
    }]);

    return MonitorJS;
  }();

  /*
   * @Author: 杨宏旋
   * @Date: 2021-07-14 19:11:52
   * @LastEditors: 杨宏旋
   * @LastEditTime: 2021-07-20 20:21:56
   * @Description:
   */
  window.MonitorJS = MonitorJS;

  exports.MonitorJS = MonitorJS;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
