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
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-transition",
  data() {
    return {
      inited: false,
      viewStyle: {},
      status: "",
      transitionEnded: false,
      display: false,
      classes: ""
    };
  },
  computed: {
    mergeStyle() {
      const { viewStyle, customStyle } = this;
      return __spreadValues(__spreadValues({
        transitionDuration: `${this.duration}ms`,
        transitionTimingFunction: this.timingFunction
      }, common_vendor.index.$u.addStyle(customStyle)), viewStyle);
    }
  },
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.transition, common_vendor.props$12],
  watch: {
    show: {
      handler(newVal) {
        newVal ? this.vueEnter() : this.vueLeave();
      },
      immediate: true
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.inited
  }, $data.inited ? {
    b: common_vendor.o((...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    c: common_vendor.n($data.classes),
    d: common_vendor.s($options.mergeStyle),
    e: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args))
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1eafea41"], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/node_modules/uview-plus/components/u-transition/u-transition.vue"]]);
wx.createComponent(Component);
