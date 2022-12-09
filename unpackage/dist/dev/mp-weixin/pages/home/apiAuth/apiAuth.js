"use strict";
var common_js_common = require("../../../common/js/common.js");
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      authList: [
        {
          title: "Binance",
          value: "\u5DF2\u6388\u6743",
          isActive: true,
          apiKey: "dasdqwe2sadsr4refdvdfwee2e2",
          secretKey: "dasdqwe2sadsr4refdvdfwee2e2"
        },
        {
          title: "Bibox",
          value: "\u672A\u6388\u6B0A"
        },
        {
          title: "\u706B\u5E01",
          value: "\u672A\u6388\u6B0A"
        },
        {
          title: "MEXC",
          value: "\u672A\u6388\u6B0A"
        },
        {
          title: "Gate",
          value: "\u672A\u6388\u6B0A"
        }
      ]
    };
  },
  methods: {
    navigator(item) {
      const { apiKey, isActive, title, secretKey } = item;
      if (isActive) {
        common_js_common.navigate(`/pages/home/apiAuthSure/apiAuthSure?name=${title}&apiKey=${apiKey}&secretKey=${secretKey}`);
      } else {
        common_js_common.navigate(`/pages/home/apiAuthSure/apiAuthSure?name=${title}`);
      }
    }
  }
};
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_image2 + _easycom_u_navbar2 + _easycom_u_icon2)();
}
const _easycom_u_image = () => "../../../node-modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_u_image + _easycom_u_navbar + _easycom_u_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      width: "54rpx",
      height: "54rpx",
      src: "/static/home/remark.png"
    }),
    b: common_vendor.p({
      fixed: false,
      title: "API\u6388\u6743",
      rightIcon: "/static/home/remark.png",
      height: "92rpx",
      autoBack: true
    }),
    c: common_vendor.f($data.authList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.value),
        c: common_vendor.n(item.isActive ? "isActive" : ""),
        d: "bbf89910-2-" + i0,
        e: common_vendor.o(($event) => $options.navigator(item))
      };
    }),
    d: common_vendor.p({
      name: "arrow-right"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/home/apiAuth/apiAuth.vue"]]);
wx.createPage(MiniProgramPage);
