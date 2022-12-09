"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    submit() {
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    }
  }
};
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_image2 + _easycom_u_button2)();
}
const _easycom_u_image = () => "../../../node-modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_image + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      width: "219rpx",
      height: "219rpx",
      src: "/static/home/pay-success.png"
    }),
    b: common_vendor.o($options.submit),
    c: common_vendor.p({
      text: "\u56DE\u9996\u9801",
      color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/home/paySuccess/paySuccess.vue"]]);
wx.createPage(MiniProgramPage);
