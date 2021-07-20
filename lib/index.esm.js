function e(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function r(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?e(Object(t),!0).forEach((function(e){i(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):e(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&u(e,r)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,r){return(u=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,r,n){return(f=s()?Reflect.construct:function(e,r,n){var t=[null];t.push.apply(t,r);var o=new(Function.bind.apply(e,t));return n&&u(o,n.prototype),o}).apply(null,arguments)}function l(e){var r="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return f(e,arguments,c(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),u(t,e)})(e)}function d(e,r){return!r||"object"!=typeof r&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function p(e){var r=s();return function(){var n,t=c(e);if(r){var o=c(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return d(this,n)}}var h,g=function(){function e(){n(this,e)}return o(e,null,[{key:"JS_ERROR",get:function(){return"js_error"}},{key:"RESOURCE_ERROR",get:function(){return"resource_error"}},{key:"VUE_ERROR",get:function(){return"vue_error"}},{key:"PROMISE_ERROR",get:function(){return"promise_error"}},{key:"AJAX_ERROR",get:function(){return"ajax_error"}},{key:"CROSS_SCRIPT_ERROR",get:function(){return"cross_srcipt_error"}},{key:"UNKNOW_ERROR",get:function(){return"unknow_error"}},{key:"PERFORMANCE",get:function(){return"performance"}},{key:"NETWORK_SPEED",get:function(){return"network_speed"}}]),e}(),v=function(){function e(){n(this,e)}return o(e,null,[{key:"ERROR",get:function(){return"Error"}},{key:"WARN",get:function(){return"Warning"}},{key:"INFO",get:function(){return"Info"}}]),e}(),m=function(){function e(){n(this,e)}return o(e,null,[{key:"AXIOS",get:function(){return"axios"}},{key:"DEFAULT",get:function(){return"default"}}]),e}(),O={navigator:window.navigator,infoMap:{engine:["WebKit","Trident","Gecko","Presto"],browser:["Safari","Chrome","Edge","IE","Firefox","Firefox Focus","Chromium","Opera","Vivaldi","Yandex","Arora","Lunascape","QupZilla","Coc Coc","Kindle","Iceweasel","Konqueror","Iceape","SeaMonkey","Epiphany","360","360SE","360EE","UC","QQBrowser","QQ","Baidu","Maxthon","Sogou","LBBROWSER","2345Explorer","TheWorld","XiaoMi","Quark","Qiyu","Wechat","Taobao","Alipay","Weibo","Douban","Suning","iQiYi"],os:["Windows","Linux","Mac OS","Android","Ubuntu","FreeBSD","Debian","iOS","Windows Phone","BlackBerry","MeeGo","Symbian","Chrome OS","WebOS"],device:["Mobile","Tablet","iPad"]}},y={getMatchMap:function(e){return{Trident:e.indexOf("Trident")>-1||e.indexOf("NET CLR")>-1,Presto:e.indexOf("Presto")>-1,WebKit:e.indexOf("AppleWebKit")>-1,Gecko:e.indexOf("Gecko/")>-1,Safari:e.indexOf("Safari")>-1,Chrome:e.indexOf("Chrome")>-1||e.indexOf("CriOS")>-1,IE:e.indexOf("MSIE")>-1||e.indexOf("Trident")>-1,Edge:e.indexOf("Edge")>-1,Firefox:e.indexOf("Firefox")>-1||e.indexOf("FxiOS")>-1,"Firefox Focus":e.indexOf("Focus")>-1,Chromium:e.indexOf("Chromium")>-1,Opera:e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,Vivaldi:e.indexOf("Vivaldi")>-1,Yandex:e.indexOf("YaBrowser")>-1,Arora:e.indexOf("Arora")>-1,Lunascape:e.indexOf("Lunascape")>-1,QupZilla:e.indexOf("QupZilla")>-1,"Coc Coc":e.indexOf("coc_coc_browser")>-1,Kindle:e.indexOf("Kindle")>-1||e.indexOf("Silk/")>-1,Iceweasel:e.indexOf("Iceweasel")>-1,Konqueror:e.indexOf("Konqueror")>-1,Iceape:e.indexOf("Iceape")>-1,SeaMonkey:e.indexOf("SeaMonkey")>-1,Epiphany:e.indexOf("Epiphany")>-1,360:e.indexOf("QihooBrowser")>-1||e.indexOf("QHBrowser")>-1,"360EE":e.indexOf("360EE")>-1,"360SE":e.indexOf("360SE")>-1,UC:e.indexOf("UC")>-1||e.indexOf(" UBrowser")>-1,QQBrowser:e.indexOf("QQBrowser")>-1,QQ:e.indexOf("QQ/")>-1,Baidu:e.indexOf("Baidu")>-1||e.indexOf("BIDUBrowser")>-1,Maxthon:e.indexOf("Maxthon")>-1,Sogou:e.indexOf("MetaSr")>-1||e.indexOf("Sogou")>-1,LBBROWSER:e.indexOf("LBBROWSER")>-1,"2345Explorer":e.indexOf("2345Explorer")>-1,TheWorld:e.indexOf("TheWorld")>-1,XiaoMi:e.indexOf("MiuiBrowser")>-1,Quark:e.indexOf("Quark")>-1,Qiyu:e.indexOf("Qiyu")>-1,Wechat:e.indexOf("MicroMessenger")>-1,Taobao:e.indexOf("AliApp(TB")>-1,Alipay:e.indexOf("AliApp(AP")>-1,Weibo:e.indexOf("Weibo")>-1,Douban:e.indexOf("com.douban.frodo")>-1,Suning:e.indexOf("SNEBUY-APP")>-1,iQiYi:e.indexOf("IqiyiApp")>-1,Windows:e.indexOf("Windows")>-1,Linux:e.indexOf("Linux")>-1||e.indexOf("X11")>-1,"Mac OS":e.indexOf("Macintosh")>-1,Android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,Ubuntu:e.indexOf("Ubuntu")>-1,FreeBSD:e.indexOf("FreeBSD")>-1,Debian:e.indexOf("Debian")>-1,"Windows Phone":e.indexOf("IEMobile")>-1||e.indexOf("Windows Phone")>-1,BlackBerry:e.indexOf("BlackBerry")>-1||e.indexOf("RIM")>-1,MeeGo:e.indexOf("MeeGo")>-1,Symbian:e.indexOf("Symbian")>-1,iOS:e.indexOf("like Mac OS X")>-1,"Chrome OS":e.indexOf("CrOS")>-1,WebOS:e.indexOf("hpwOS")>-1,Mobile:e.indexOf("Mobi")>-1||e.indexOf("iPh")>-1||e.indexOf("480")>-1,Tablet:e.indexOf("Tablet")>-1||e.indexOf("Nexus 7")>-1,iPad:e.indexOf("iPad")>-1}},matchInfoMap:function(e){var r=O.navigator.userAgent||{},n=y.getMatchMap(r);for(var t in O.infoMap)for(var o=0;o<O.infoMap[t].length;o++){var i=O.infoMap[t][o];n[i]&&(e[t]=i)}},getOS:function(){return y.matchInfoMap(this),this.os},getOSVersion:function(){var e=this,r=O.navigator.userAgent||{};e.osVersion="";var n={Windows:function(){var e=r.replace(/^.*Windows NT ([\d.]+);.*$/,"$1");return{6.4:"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP","5.0":"2000"}[e]||e},Android:function(){return r.replace(/^.*Android ([\d.]+);.*$/,"$1")},iOS:function(){return r.replace(/^.*OS ([\d_]+) like.*$/,"$1").replace(/_/g,".")},Debian:function(){return r.replace(/^.*Debian\/([\d.]+).*$/,"$1")},"Windows Phone":function(){return r.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/,"$2")},"Mac OS":function(){return r.replace(/^.*Mac OS X ([\d_]+).*$/,"$1").replace(/_/g,".")},WebOS:function(){return r.replace(/^.*hpwOS\/([\d.]+);.*$/,"$1")}};return n[e.os]&&(e.osVersion=n[e.os](),e.osVersion===r&&(e.osVersion="")),e.osVersion},getOrientationStatu:function(){return window.matchMedia("(orientation: portrait)").matches?"竖屏":"横屏"},getDeviceType:function(){var e=this;return e.device="PC",y.matchInfoMap(e),e.device},getNetwork:function(){var e,r;return null===(e=navigator)||void 0===e||null===(r=e.connection)||void 0===r?void 0:r.effectiveType},getLanguage:function(){var e;return this.language=((e=(O.navigator.browserLanguage||O.navigator.language).split("-"))[1]&&(e[1]=e[1].toUpperCase()),e.join("_")),this.language},createFingerprint:function(e){var r=document.createElement("canvas"),n=r.getContext("2d"),t=e||window.location.host;n.textBaseline="top",n.font="14px 'Arial'",n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.fillText(t,2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.fillText(t,4,17);var o=r.toDataURL().replace("data:image/png;base64,","");return function(e){var r,n,t,o="";for(r=0,n=(e+="").length;r<n;r++)o+=(t=e.charCodeAt(r).toString(16)).length<2?"0".concat(t):t;return o}(atob(o).slice(-16,-12))},getBrowserInfo:function(){var e,r=this;y.matchInfoMap(r);var n,t,o=(null==O||null===(e=O.navigator)||void 0===e?void 0:e.userAgent)||{},i=function(e,r){var n=O.navigator.mimeTypes;for(var t in n)if(n[t][e]===r)return!0;return!1},a=y.getMatchMap(o),c=!1;if(window.chrome){var u=o.replace(/^.*Chrome\/([\d]+).*$/,"$1");u>36&&window.showModalDialog?c=!0:u>45&&(c=i("type","application/vnd.chromium.remoting-viewer"))}if(a.Baidu&&a.Opera&&(a.Baidu=!1),a.Mobile&&(a.Mobile=!(o.indexOf("iPad")>-1)),c&&(i("type","application/gameplugin")||null!=O&&null!==(n=O.navigator)&&void 0!==n&&null!==(t=n.connection)&&void 0!==t&&t.saveData?a["360SE"]=!0:a["360EE"]=!0),a.IE||a.Edge)switch(window.screenTop-window.screenY){case 71:case 74:case 99:break;case 102:a["360EE"]=!0;break;case 75:case 74:case 105:break;case 104:a["360SE"]=!0}var s={Safari:function(){return o.replace(/^.*Version\/([\d.]+).*$/,"$1")},Chrome:function(){return o.replace(/^.*Chrome\/([\d.]+).*$/,"$1").replace(/^.*CriOS\/([\d.]+).*$/,"$1")},IE:function(){return o.replace(/^.*MSIE ([\d.]+).*$/,"$1").replace(/^.*rv:([\d.]+).*$/,"$1")},Edge:function(){return o.replace(/^.*Edge\/([\d.]+).*$/,"$1")},Firefox:function(){return o.replace(/^.*Firefox\/([\d.]+).*$/,"$1").replace(/^.*FxiOS\/([\d.]+).*$/,"$1")},"Firefox Focus":function(){return o.replace(/^.*Focus\/([\d.]+).*$/,"$1")},Chromium:function(){return o.replace(/^.*Chromium\/([\d.]+).*$/,"$1")},Opera:function(){return o.replace(/^.*Opera\/([\d.]+).*$/,"$1").replace(/^.*OPR\/([\d.]+).*$/,"$1")},Vivaldi:function(){return o.replace(/^.*Vivaldi\/([\d.]+).*$/,"$1")},Yandex:function(){return o.replace(/^.*YaBrowser\/([\d.]+).*$/,"$1")},Arora:function(){return o.replace(/^.*Arora\/([\d.]+).*$/,"$1")},Lunascape:function(){return o.replace(/^.*Lunascape[\/\s]([\d.]+).*$/,"$1")},QupZilla:function(){return o.replace(/^.*QupZilla[\/\s]([\d.]+).*$/,"$1")},"Coc Coc":function(){return o.replace(/^.*coc_coc_browser\/([\d.]+).*$/,"$1")},Kindle:function(){return o.replace(/^.*Version\/([\d.]+).*$/,"$1")},Iceweasel:function(){return o.replace(/^.*Iceweasel\/([\d.]+).*$/,"$1")},Konqueror:function(){return o.replace(/^.*Konqueror\/([\d.]+).*$/,"$1")},Iceape:function(){return o.replace(/^.*Iceape\/([\d.]+).*$/,"$1")},SeaMonkey:function(){return o.replace(/^.*SeaMonkey\/([\d.]+).*$/,"$1")},Epiphany:function(){return o.replace(/^.*Epiphany\/([\d.]+).*$/,"$1")},360:function(){return o.replace(/^.*QihooBrowser\/([\d.]+).*$/,"$1")},"360SE":function(){return{63:"10.0",55:"9.1",45:"8.1",42:"8.0",31:"7.0",21:"6.3"}[o.replace(/^.*Chrome\/([\d]+).*$/,"$1")]||""},"360EE":function(){return{69:"11.0",63:"9.5",55:"9.0",50:"8.7",30:"7.5"}[o.replace(/^.*Chrome\/([\d]+).*$/,"$1")]||""},Maxthon:function(){return o.replace(/^.*Maxthon\/([\d.]+).*$/,"$1")},QQBrowser:function(){return o.replace(/^.*QQBrowser\/([\d.]+).*$/,"$1")},QQ:function(){return o.replace(/^.*QQ\/([\d.]+).*$/,"$1")},Baidu:function(){return o.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/,"$1")},UC:function(){return o.replace(/^.*UC?Browser\/([\d.]+).*$/,"$1")},Sogou:function(){return o.replace(/^.*SE ([\d.X]+).*$/,"$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/,"$1")},LBBROWSER:function(){return{57:"6.5",49:"6.0",46:"5.9",42:"5.3",39:"5.2",34:"5.0",29:"4.5",21:"4.0"}[navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/,"$1")]||""},"2345Explorer":function(){return o.replace(/^.*2345Explorer\/([\d.]+).*$/,"$1")},TheWorld:function(){return o.replace(/^.*TheWorld ([\d.]+).*$/,"$1")},XiaoMi:function(){return o.replace(/^.*MiuiBrowser\/([\d.]+).*$/,"$1")},Quark:function(){return o.replace(/^.*Quark\/([\d.]+).*$/,"$1")},Qiyu:function(){return o.replace(/^.*Qiyu\/([\d.]+).*$/,"$1")},Wechat:function(){return o.replace(/^.*MicroMessenger\/([\d.]+).*$/,"$1")},Taobao:function(){return o.replace(/^.*AliApp\(TB\/([\d.]+).*$/,"$1")},Alipay:function(){return o.replace(/^.*AliApp\(AP\/([\d.]+).*$/,"$1")},Weibo:function(){return o.replace(/^.*weibo__([\d.]+).*$/,"$1")},Douban:function(){return o.replace(/^.*com.douban.frodo\/([\d.]+).*$/,"$1")},Suning:function(){return o.replace(/^.*SNEBUY-APP([\d.]+).*$/,"$1")},iQiYi:function(){return o.replace(/^.*IqiyiVersion\/([\d.]+).*$/,"$1")}};return r.browserVersion="",s[r.browser]&&(r.browserVersion=s[r.browser](),r.browserVersion===o&&(r.browserVersion="")),"Edge"===r.browser&&(r.engine="EdgeHTML"),"Chrome"===r.browser&&parseInt(r.browserVersion)>27&&(r.engine="Blink"),"Opera"===r.browser&&parseInt(r.browserVersion)>12&&(r.engine="Blink"),"Yandex"===r.browser&&(r.engine="Blink"),"".concat(r.browser,"（版本: ").concat(r.browserVersion,"&nbsp;&nbsp;内核: ").concat(r.engine,"）")}},E=(h={DeviceInfoObj:function(e){e=e||{domain:""};var r={deviceType:y.getDeviceType(),OS:y.getOS(),OSVersion:y.getOSVersion(),screenHeight:window.screen.height,screenWidth:window.screen.width,language:y.getLanguage(),netWork:y.getNetwork(),orientation:y.getOrientationStatu(),browserInfo:y.getBrowserInfo(),fingerprint:y.createFingerprint(e.domain),userAgent:O.navigator.userAgent};if(!e.info||0===e.info.length)return r;var n={},t=function(t){e.info.forEach((function(e){e.toLowerCase()===t.toLowerCase()&&(n[e=t]=r[e])}))};for(var o in r)t(o);return n}},{getDeviceInfo:function(e){return h.DeviceInfoObj(e)}});function w(e){if(!e)return!1;return/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(e)}function x(e){return Object.prototype.toString.call(e).replace(/\[object\s|\]/g,"")}function S(e){return"Function"===x(e)}var b=function(e){a(t,l(Date));var r=p(t);function t(){return n(this,t),r.call(this)}return t}();b.prototype.format=function(e){var r={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,"".concat(String(this.getFullYear())).substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}["".concat(String(this.getDay()))])),r)new RegExp("(".concat(n,")")).test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?r[n]:"00".concat(r[n]).substr("".concat(String(r[n])).length)));return e};var R,$=function(){function e(r){n(this,e),this.url=r}return o(e,[{key:"report",value:function(e){if(!w(this.url))throw"上报信息url地址格式不正确,url=".concat(this.url);this.reportByImg(e)}},{key:"sendInfo",value:function(e){var r=JSON.stringify(e);try{if(fetch)return void fetch(this.url,{headers:{"Content-Type":"application/json"},method:"POST",body:r,mode:"same-origin",keepalive:!0})}catch(e){}try{var n=new XMLHttpRequest;n.open("POST",this.url,!0),n.setRequestHeader("Content-Type","application/json"),n.send(r)}catch(e){}}},{key:"reportByImg",value:function(e){if(!w(this.url))throw"上报信息url地址格式不正确,url=".concat(this.url);try{(new Image).src="".concat(this.url,"/up.gif?v=").concat((new Date).getTime(),"&").concat(this.formatParams(e))}catch(e){}}},{key:"formatParams",value:function(e){var r=[];for(var n in e)r.push("".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(e[n])));return r.join("&")}}]),e}(),k={isStop:!0,queues:[],add:function(e,r){this.queues.push({reportUrl:e,data:r})},fire:function(){if(this.queues&&0!==this.queues.length){this.isStop=!1;var e=this.queues[0];e.reportUrl&&new $(e.reportUrl).report(e.data),this.queues.splice(0,1),this.fire()}else this.isStop=!0}},I=function(){function e(r){n(this,e),this.category=g.UNKNOW_ERROR,this.level=v.INFO,this.msg="",this.url="",this.line="",this.col="",this.errorObj={},this.reportUrl=r.reportUrl,this.extendsInfo=r.extendsInfo,this.appId=r.appId,this.selector=""}return o(e,[{key:"recordError",value:function(){this.handleRecordError(),setTimeout((function(){k.isStop&&k.fire()}),100)}},{key:"handleRecordError",value:function(){try{if(!this.msg)return;if(this.reportUrl&&this.url&&this.url.toLowerCase().indexOf(this.reportUrl.toLowerCase())>=0)return;var e=this.handleErrorInfo();k.add(this.reportUrl,e)}catch(e){}}},{key:"handleErrorInfo",value:function(){var e,r={errortype:this.category,loginformation:this.msg,url:encodeURIComponent(this.url)};switch(this.category){case g.JS_ERROR:r.errorline=this.line,r.errorcol=this.col,null!=this&&null!==(e=this.errorObj)&&void 0!==e&&e.stack&&(r.errorstack=this.errorObj.stack);break;default:r.errorother=JSON.stringify(this.errorObj)}var n=this.getDeviceInfo(),t=this.getExtendsInfo();return t.category=this.category,t.logType=this.level,t.logInfo=JSON.stringify(r),t.deviceInfo=n,t.appId=this.appId,this.selector&&(t.selector=this.selector),t}},{key:"getExtendsInfo",value:function(){try{var e,n={},t=this.extendsInfo||{};for(var o in S(t.getDynamic)&&(e=t.getDynamic()),"Object"===x(e)&&(t=r(r({},t),e)),t)S(t[o])||(n[o]=t[o]);return n}catch(e){return{}}}},{key:"getDeviceInfo",value:function(){try{var e=E.getDeviceInfo();return JSON.stringify(e)}catch(e){return""}}}]),e}(),T=function(){function e(r){n(this,e),this.params=r}return o(e,[{key:"handleError",value:function(e,r){switch(e){case m.AXIOS:new M(this.params).handleError(r);break;default:new P(this.params).handleError()}}}]),e}(),M=function(e){a(t,I);var r=p(t);function t(e){return n(this,t),r.call(this,e)}return o(t,[{key:"handleError",value:function(e){var r;null!=e&&null!==(r=e.config)&&void 0!==r&&r.url&&(this.url=e.config.url),this.level=v.WARN,this.category=g.AJAX_ERROR,this.msg=JSON.stringify(e),this.recordError()}}]),t}(),P=function(e){a(t,I);var r=p(t);function t(e){return n(this,t),r.call(this,e)}return o(t,[{key:"handleError",value:function(){var e=this;if(window.XMLHttpRequest){var r=XMLHttpRequest.prototype.send,n=function(r){try{var n;200!==(null==r||null===(n=r.currentTarget)||void 0===n?void 0:n.status)&&(e.level=v.WARN,e.category=g.AJAX_ERROR,e.msg=r.target.response,e.url=r.target.responseURL,e.errorObj={status:r.target.status,statusText:r.target.statusText},e.recordError())}catch(e){}};XMLHttpRequest.prototype.send=function(){if(this.addEventListener)this.addEventListener("error",n),this.addEventListener("load",n),this.addEventListener("abort",n);else{var e=this.onreadystatechange;this.onreadystatechange=function(r){e.apply(this,arguments),4===this.readyState&&n(r)}}return r.apply(this,arguments)}}}}]),t}();function A(e){return e.reverse().filter((function(e){return e!==document&&e!==window})).map((function(e){return e.id?"".concat(e.nodeName.toLowerCase(),"#").concat(e.id):e.className&&"string"==typeof e.className?"".concat(e.nodeName.toLowerCase(),".").concat(e.className):e.nodeName.toLowerCase()})).join(" ")}function C(e){if("Array"===x(e))return A(e);for(var r=[];e;)r.push(e),e=e.parentNode;return A(r)}function B(){return R}["click","touchstart","mousedown","keydown","mouseover"].forEach((function(e){document.addEventListener(e,(function(e){R=e}),{capture:!0,passive:!0})}));var L=function(e){a(t,I);var r=p(t);function t(e){return n(this,t),r.call(this,e)}return o(t,[{key:"handleError",value:function(){var e=this;window.onerror=function(r,n,t,o,i){var a=B(),c=a?C(a.path):"";try{e.level=v.WARN,e.category=g.JS_ERROR,e.msg=r,e.url=n,e.line=t,e.col=o,e.errorObj=i,e.selector=c,e.recordError()}catch(i){}}}}]),t}(),_=function(e){a(t,I);var r=p(t);function t(e){return n(this,t),r.call(this,e)}return o(t,[{key:"handleError",value:function(){var e=this;window.addEventListener("unhandledrejection",(function(r){try{var n,t;if(!r||!r.reason)return;null!=r&&null!==(n=r.reason)&&void 0!==n&&null!==(t=n.config)&&void 0!==t&&t.url&&(e.url=r.reason.config.url),e.level=v.WARN,e.category=g.PROMISE_ERROR,e.msg=r.reason,e.recordError()}catch(e){}}),!0)}}]),t}(),j=function(e){a(t,I);var r=p(t);function t(e){return n(this,t),r.call(this,e)}return o(t,[{key:"handleError",value:function(){var e=this;window.addEventListener("error",(function(r){var n=B(),t=n?C(n.path):"";try{if(!r)return;e.category=g.RESOURCE_ERROR;var o=r.target||r.srcElement;if(!(o instanceof HTMLScriptElement||o instanceof HTMLLinkElement||o instanceof HTMLImageElement))return;e.level=v.ERROR,e.msg="加载 ".concat(o.tagName," 资源错误"),e.url=o.src||o.href,e.errorObj=o,e.selector=t,e.recordError()}catch(e){}}),!0)}}]),t}(),F=function(e){a(t,I);var r=p(t);function t(e){return n(this,t),r.call(this,e)}return o(t,[{key:"handleError",value:function(e){var r=this;e&&(e.config.errorHandler=function(e,n,t){try{var o={message:e.message,stack:e.stack,info:t};"[object Object]"===Object.prototype.toString.call(n)&&(o.componentName=n._isVue?n.$options.name||n.$options._componentTag:n.name,o.propsData=n.$options.propsData),r.level=v.WARN,r.msg=JSON.stringify(o),r.category=g.VUE_ERROR,r.recordError()}catch(e){}})}}]),t}(),U={getTiming:function(){try{if(!window.performance||!window.performance.timing)return;var e=window.performance.timing,r={};return e.loadEventEnd-e.loadEventStart<0?void setTimeout((function(){U.getTiming()}),200):(r.redirectTime=(e.redirectEnd-e.redirectStart).toFixed(2),r.dnsTime=(e.domainLookupEnd-e.domainLookupStart).toFixed(2),r.ttfbTime=(e.responseStart-e.navigationStart).toFixed(2),r.appcacheTime=(e.domainLookupStart-e.fetchStart).toFixed(2),r.unloadTime=(e.unloadEventEnd-e.unloadEventStart).toFixed(2),r.tcpTime=(e.connectEnd-e.connectStart).toFixed(2),r.reqTime=(e.responseEnd-e.responseStart).toFixed(2),r.analysisTime=(e.domComplete-e.domInteractive).toFixed(2),r.blankTime=(e.domLoading-e.navigationStart).toFixed(2),r.domReadyTime=(e.domContentLoadedEventEnd-e.navigationStart).toFixed(2),r.loadPageTime=(e.loadEventEnd-e.navigationStart).toFixed(2),r)}catch(e){}},getEntries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(window.performance&&window.performance.getEntries){var r=[],n=window.performance.getEntries();return n&&0!==n.length?(n.forEach((function(n){var t={};e.indexOf(n.initiatorType)>-1&&(t.name=n.name,t.initiatorType=n.initiatorType,t.nextHopProtocol=n.nextHopProtocol,t.redirectTime=(n.redirectEnd-n.redirectStart).toFixed(2),t.dnsTime=(n.domainLookupEnd-n.domainLookupStart).toFixed(2),t.tcpTime=(n.connectEnd-n.connectStart).toFixed(2),t.ttfbTime=(n.responseStart-n.requestStart).toFixed(2),t.responseTime=(n.responseEnd-n.responseStart).toFixed(2),t.reqTotalTime=(n.responseEnd-n.requestStart).toFixed(2),r.push(t))})),r):r}}},D=function(e){a(i,I);var t=p(i);function i(e){var r;return n(this,i),r=t.call(this,{reportUrl:e.appID,extendsInfo:e.extendsInfo,appId:e.appID}),e.isPage=!1!==e.isPage,e.isResource=!1!==e.isResource,r.isPage=e.isPage,r.isResource=e.isResource,r.usefulType=r.getSourceType(e),r.outTime=50,r.config={resourceList:[],performance:{}},r.category=g.PERFORMANCE,r.url=e.url||"",r}return o(i,[{key:"getSourceType",value:function(e){var r=[];return!1!==e.isRScript&&r.push("script"),!1!==e.isRCSS&&r.push("css"),!1!==e.isRFetch&&r.push("fetch"),!1!==e.isRXHR&&r.push("xmlhttprequest"),!1!==e.isRLink&&r.push("link"),!1!==e.isRIMG&&r.push("img"),r}},{key:"record",value:function(){try{this.isPage&&(this.config.performance=U.getTiming()),this.isResource&&(this.config.resourceList=U.getEntries(this.usefulType));var e={curTime:(new b).format("yyyy-MM-dd HH:mm:ss"),performance:this.config.performance,resourceList:this.config.resourceList,markUser:this.markUser(),markUv:this.markUv(),deviceInfo:this.getDeviceInfo()},n=r(r({},this.getExtendsInfo()),{},{category:this.category,logType:v.INFO,logInfo:JSON.stringify(e)});localStorage.setItem("page_performance",JSON.stringify(n)),new $(this.url).report(n),this.clearPerformance()}catch(e){}}},{key:"randomString",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,r="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789",n=r.length,t="",o=0;o<e;o++)t+=r.charAt(Math.floor(Math.random()*n));return t+(new Date).getTime()}},{key:"markUser",value:function(){var e=sessionStorage.getItem("ps_markUser")||"";return e||(e=this.randomString(),sessionStorage.setItem("ps_markUser",e)),e}},{key:"markUv",value:function(){var e=new b,r=localStorage.getItem("ps_markUv")||"",n=localStorage.getItem("ps_markUvTime")||"",t=e.format("yyyy/MM/dd 23:59:59");return(!r&&!n||e.getTime()>1*n)&&(r=this.randomString(),localStorage.setItem("ps_markUv",r),localStorage.setItem("ps_markUvTime",JSON.stringify(new Date(t).getTime()))),r}},{key:"clearPerformance",value:function(){var e,r;null!==(e=window)&&void 0!==e&&null!==(r=e.performance)&&void 0!==r&&r.clearResourceTimings&&(performance.clearResourceTimings(),this.config.performance={},this.config.resourceList="")}}]),i}(),W=function(){function e(){n(this,e),this.jsError=!0,this.promiseError=!0,this.resourceError=!0,this.ajaxError=!0,this.vueError=!1}return o(e,[{key:"init",value:function(e){if(null==e||!e.url||!w(e.url))throw"url is error,".concat(e.url);if(null==e||!e.appID)throw"appID is error,".concat(e.url);this.jsError=!(!1===(null==e?void 0:e.jsError)),this.promiseError=!(!1===(null==e?void 0:e.promiseError)),this.resourceError=!(!1===(null==e?void 0:e.resourceError)),this.ajaxError=!(!1===(null==e?void 0:e.ajaxError)),this.vueError=!0===(null==e?void 0:e.vueError);var r=e.url,n=e.appID,t={reportUrl:r,extendsInfo:e.extendsInfo||{},appId:n};this.jsError&&new L(t).handleError(),this.promiseError&&new _(t).handleError(),this.resourceError&&new j(t).handleError(),this.ajaxError&&new T(t).handleError(m.DEFAULT),this.vueError&&e.vue&&new F(t).handleError(e.vue),this.monitorPerformance(e)}},{key:"monitorPerformance",value:function(e){e=e||{};var r=function(){new D(e).record()};r(),window.removeEventListener("unload",r),window.addEventListener("unload",r)}}]),e}();window.MonitorJS=W;export{W as MonitorJS};