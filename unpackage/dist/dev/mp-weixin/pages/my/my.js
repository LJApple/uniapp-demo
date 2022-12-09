"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [{
        text: "\u70B9\u8D5E",
        color: "blue",
        fontSize: 28
      }, {
        text: "\u5206\u4EAB"
      }, {
        text: "\u8BC4\u8BBA"
      }],
      show: true
    };
  }
};
if (!Array) {
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  _easycom_u_action_sheet2();
}
const _easycom_u_action_sheet = () => "../../node-modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
if (!Math) {
  _easycom_u_action_sheet();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.show = $event),
    b: common_vendor.p({
      list: $data.list,
      modelValue: $data.show
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
