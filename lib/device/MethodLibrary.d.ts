declare const MethodLibrary: {
    getMatchMap(u: string): {
        Trident: boolean;
        Presto: boolean;
        WebKit: boolean;
        Gecko: boolean;
        Safari: boolean;
        Chrome: boolean;
        IE: boolean;
        Edge: boolean;
        Firefox: boolean;
        'Firefox Focus': boolean;
        Chromium: boolean;
        Opera: boolean;
        Vivaldi: boolean;
        Yandex: boolean;
        Arora: boolean;
        Lunascape: boolean;
        QupZilla: boolean;
        'Coc Coc': boolean;
        Kindle: boolean;
        Iceweasel: boolean;
        Konqueror: boolean;
        Iceape: boolean;
        SeaMonkey: boolean;
        Epiphany: boolean;
        '360': boolean;
        '360EE': boolean;
        '360SE': boolean;
        UC: boolean;
        QQBrowser: boolean;
        QQ: boolean;
        Baidu: boolean;
        Maxthon: boolean;
        Sogou: boolean;
        LBBROWSER: boolean;
        '2345Explorer': boolean;
        TheWorld: boolean;
        XiaoMi: boolean;
        Quark: boolean;
        Qiyu: boolean;
        Wechat: boolean;
        Taobao: boolean;
        Alipay: boolean;
        Weibo: boolean;
        Douban: boolean;
        Suning: boolean;
        iQiYi: boolean;
        Windows: boolean;
        Linux: boolean;
        'Mac OS': boolean;
        Android: boolean;
        Ubuntu: boolean;
        FreeBSD: boolean;
        Debian: boolean;
        'Windows Phone': boolean;
        BlackBerry: boolean;
        MeeGo: boolean;
        Symbian: boolean;
        iOS: boolean;
        'Chrome OS': boolean;
        WebOS: boolean;
        Mobile: boolean;
        Tablet: boolean;
        iPad: boolean;
    };
    matchInfoMap(_this: any): void;
    getOS(): any;
    getOSVersion(): any;
    getOrientationStatu(): string;
    getDeviceType(): any;
    getNetwork(): any;
    getLanguage(): any;
    createFingerprint(domain: string): string;
    getBrowserInfo(): {
        type: any;
        version: any;
        engine: any;
    };
};
export default MethodLibrary;
