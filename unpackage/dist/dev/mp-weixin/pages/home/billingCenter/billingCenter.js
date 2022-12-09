"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      noPayList: [
        {
          tip: "\u8DDF\u55AE\u8CBB",
          balance: "100",
          coinName: "ERC20",
          time: "2021-10-10 12:10"
        },
        {
          tip: "\u8DDF\u55AE\u8CBB",
          balance: "100",
          coinName: "\u706B\u5E01",
          time: "2021-10-10 12:10"
        }
      ],
      paydeList: [
        {
          tip: "\u8A02\u95B1\u8CBB",
          balance: "100",
          coinName: "ERC20",
          time: "2021-10-10 12:10"
        },
        {
          tip: "\u624B\u7E8C\u8CBB",
          balance: "100",
          coinName: "\u706B\u5E01",
          time: "2021-10-10 12:10"
        },
        {
          tip: "\u8A02\u95B1\u8CBB",
          balance: "100",
          coinName: "ERC20",
          time: "2021-10-10 12:10"
        },
        {
          tip: "\u8A02\u95B1\u8CBB",
          balance: "100",
          coinName: "ERC20",
          time: "2021-10-10 12:10"
        },
        {
          tip: "\u8A02\u95B1\u8CBB",
          balance: "100",
          coinName: "ERC20",
          time: "2021-10-10 12:10"
        },
        {
          tip: "\u8A02\u95B1\u8CBB",
          balance: "100",
          coinName: "ERC20",
          time: "2021-10-10 12:10"
        }
      ]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  (_easycom_u_navbar2 + _easycom_u_image2)();
}
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_image = () => "../../../node-modules/uview-plus/components/u-image/u-image.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_image)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "\u8CEC\u55AE\u4E2D\u5FC3",
      height: "92rpx",
      autoBack: true
    }),
    b: $data.noPayList.length > 0 || $data.paydeList.length > 0
  }, $data.noPayList.length > 0 || $data.paydeList.length > 0 ? common_vendor.e({
    c: $data.noPayList.length > 0
  }, $data.noPayList.length > 0 ? {} : {}, {
    d: $data.noPayList.length > 0
  }, $data.noPayList.length > 0 ? {
    e: common_vendor.f($data.noPayList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.tip),
        b: common_vendor.t(item.balance),
        c: common_vendor.t(item.coinName),
        d: common_vendor.t(item.time)
      };
    })
  } : {}, {
    f: $data.noPayList.length > 0
  }, $data.noPayList.length > 0 ? {} : {}, {
    g: $data.paydeList.length > 0
  }, $data.paydeList.length > 0 ? {
    h: common_vendor.f($data.paydeList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.tip),
        b: common_vendor.t(item.balance),
        c: common_vendor.t(item.coinName),
        d: common_vendor.t(item.time)
      };
    })
  } : {}) : {
    i: common_vendor.p({
      width: "198rpx",
      height: "198rpx",
      src: "/static/home/no-data.png"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/home/billingCenter/billingCenter.vue"]]);
wx.createPage(MiniProgramPage);
