import { Context } from "egg";

export default {
    /**
     * 正则匹配UA
     * @param this 
     * @param regex 正则对象
     */
    testUA(this: Context, regex: RegExp) {
        return regex.test(this.get('user-agent'));
    },

    /**
     * 是否是ios设备
     */
    get isIOS(this: Context) {
        const regex = /iphone|ipad|ipod/i;
        return this.testUA(regex);
    },

    /**
     * 是否是android设备
     */
    get isAndroid(this: Context) {
        const regex = /android/i;
        return this.testUA(regex);
    },

    /**
     * 是否是移动端设备
     */
    get isMobile(this: Context) {
        const regex = /android|iphone|ipod|ipad|windows phone|mqqbrowser/i;
        return this.testUA(regex);
    },

    /**
     * 是否是微信
     */
    get isWeixin(this: Context) {
        const regex = /MicroMessenger/i;
        return this.testUA(regex);
    },
    /**
     * 是否是支付宝
     */
    get isAlipay(this: Context) {
        const regex = /AlipayClient/i;
        return this.testUA(regex);
    },
};

