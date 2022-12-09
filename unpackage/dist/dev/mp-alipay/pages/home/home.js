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
const _sfc_main = {
  data() {
    return {};
  },
  computed: __spreadValues({}, common_vendor.mapState(["init"])),
  onLoad() {
    console.log(this.$http.post);
  }
};
if (!Array) {
  const _easycom_mb_image2 = common_vendor.resolveComponent("mb-image");
  _easycom_mb_image2();
}
const _easycom_mb_image = () => "../../components/mb-image/mb-image.js";
if (!Math) {
  _easycom_mb_image();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: "../../static/home/banner1.png"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Downloads/smartbot-master/pages/home/home.vue"]]);
my.createPage(MiniProgramPage);
