"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-gap",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$15],
  computed: {
    gapStyle() {
      const style = {
        backgroundColor: this.bgColor,
        height: common_vendor.index.$u.addUnit(this.height),
        marginTop: common_vendor.index.$u.addUnit(this.marginTop),
        marginBottom: common_vendor.index.$u.addUnit(this.marginBottom)
      };
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.gapStyle)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3171af9f"], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/node_modules/uview-plus/components/u-gap/u-gap.vue"]]);
wx.createComponent(Component);
