"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "mb-image",
  props: {
    src: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "aspectFit"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.src,
    b: $props.mode
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47967164"], ["__file", "/Users/lvjun/Downloads/smartbot-master/components/mb-image/mb-image.vue"]]);
my.createComponent(Component);
