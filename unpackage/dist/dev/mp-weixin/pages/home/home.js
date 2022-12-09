"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
var common_js_common = require("../../common/js/common.js");
const _sfc_main = {
  data() {
    return {
      bannerList: [{
        image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        title: "\u6628\u591C\u661F\u8FB0\u6628\u591C\u98CE\uFF0C\u753B\u697C\u897F\u7554\u6842\u5802\u4E1C"
      }, {
        image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        title: "\u8EAB\u65E0\u5F69\u51E4\u53CC\u98DE\u7FFC\uFF0C\u5FC3\u6709\u7075\u7280\u4E00\u70B9\u901A"
      }, {
        image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        title: "\u8C01\u5FF5\u897F\u98CE\u72EC\u81EA\u51C9\uFF0C\u8427\u8427\u9EC4\u53F6\u95ED\u758F\u7A97\uFF0C\u6C89\u601D\u5F80\u4E8B\u7ACB\u6B8B\u9633"
      }],
      messageTip: {
        USDTCount: 10,
        time: "11-11"
      },
      show: false,
      netTitleList: ["\u5E63\u7A2E", "\u6301\u5009\u8CC7\u7522USDT", "\u50F9\u683CUSDT"],
      netContentList: [
        {
          type: "BTC",
          assets: "123456.1234",
          price: "1234.12"
        },
        {
          type: "ETH",
          assets: "83456.1234",
          price: "1234.12"
        },
        {
          type: "HT",
          assets: "53456.1234",
          price: "1234.12"
        },
        {
          type: "XRP",
          assets: "23456.1234",
          price: "1234.12"
        },
        {
          type: "DOGE",
          assets: "23456.1234",
          price: "1234.12"
        }
      ]
    };
  },
  computed: __spreadValues({}, common_vendor.mapState(["init"])),
  onLoad() {
    console.log(this.$http.post);
  },
  methods: {
    navigateAuth() {
      common_js_common.navigate("/pages/home/apiAuth/apiAuth");
    },
    confirm() {
      common_js_common.navigate("/pages/home/toBePaid/toBePaid");
    },
    navigateToCenter() {
      common_js_common.navigate("/pages/home/billingCenter/billingCenter");
    }
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_modal2 = common_vendor.resolveComponent("u-modal");
  (_easycom_u_swiper2 + _easycom_u__image2 + _easycom_u_image2 + _easycom_u_modal2)();
}
const _easycom_u_swiper = () => "../../node-modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_u__image = () => "../../node-modules/uview-plus/components/u--image/u--image.js";
const _easycom_u_image = () => "../../node-modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_modal = () => "../../node-modules/uview-plus/components/u-modal/u-modal.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u__image + _easycom_u_image + _easycom_u_modal)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "485rpx",
      list: $data.bannerList,
      keyName: "image",
      indicatorActiveColor: "#F5A700",
      indicatorInactiveColor: "#FFFFFF",
      indicatorStyle: "bottom: 65rpx;",
      autoplay: true,
      circular: true,
      indicator: true,
      indicatorMode: "dot"
    }),
    b: common_vendor.p({
      width: "56rpx",
      height: "54rpx",
      src: "/static/home/message.png"
    }),
    c: common_vendor.t($data.messageTip.USDTCount),
    d: common_vendor.t($data.messageTip.time),
    e: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    f: common_vendor.p({
      width: "160rpx",
      height: "150rpx",
      src: "/static/home/api.png"
    }),
    g: common_vendor.o((...args) => $options.navigateAuth && $options.navigateAuth(...args)),
    h: common_vendor.p({
      width: "152rpx",
      height: "157rpx",
      src: "/static/home/center.png"
    }),
    i: common_vendor.o((...args) => $options.navigateToCenter && $options.navigateToCenter(...args)),
    j: common_vendor.p({
      width: "12",
      height: "7",
      src: "/static/home/left-arrow.png"
    }),
    k: common_vendor.f($data.netTitleList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item)
      };
    }),
    l: common_vendor.f($data.netContentList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.type),
        b: common_vendor.t(item.assets),
        c: common_vendor.t(item.price)
      };
    }),
    m: common_vendor.o($options.confirm),
    n: common_vendor.p({
      confirmText: "\u53BB\u652F\u4ED8",
      cancelText: "\u9000\u51FA",
      showCancelButton: true,
      confirmColor: "#FFB119",
      cancelColor: "#333333",
      show: $data.show,
      title: _ctx.\u5F85\u652F\u4ED8
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
