"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-image",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$1],
  data() {
    return {
      isError: false,
      loading: true,
      opacity: 1,
      durationTime: this.duration,
      backgroundStyle: {},
      show: false
    };
  },
  watch: {
    src: {
      immediate: true,
      handler(n) {
        if (!n) {
          this.isError = true;
        } else {
          this.isError = false;
          this.loading = true;
        }
      }
    }
  },
  computed: {
    wrapStyle() {
      let style = {};
      style.width = this.$u.addUnit(this.width);
      style.height = this.$u.addUnit(this.height);
      style.borderRadius = this.shape == "circle" ? "10000px" : common_vendor.index.$u.addUnit(this.radius);
      style.overflow = this.radius > 0 ? "hidden" : "visible";
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.show = true;
  },
  emits: ["click", "error", "load"],
  methods: {
    onClick() {
      this.$emit("click");
    },
    onErrorHandler(err) {
      this.loading = false;
      this.isError = true;
      this.$emit("error", err);
    },
    onLoadHandler(event) {
      this.loading = false;
      this.isError = false;
      this.$emit("load", event);
      this.removeBgColor();
    },
    removeBgColor() {
      this.backgroundStyle = {
        backgroundColor: "transparent"
      };
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_icon2 + _easycom_u_transition2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.isError
  }, !$data.isError ? {
    b: _ctx.src,
    c: _ctx.mode,
    d: common_vendor.o((...args) => $options.onErrorHandler && $options.onErrorHandler(...args)),
    e: common_vendor.o((...args) => $options.onLoadHandler && $options.onLoadHandler(...args)),
    f: _ctx.showMenuByLongpress,
    g: _ctx.lazyLoad,
    h: _ctx.shape == "circle" ? "10000px" : _ctx.$u.addUnit(_ctx.radius),
    i: _ctx.$u.addUnit(_ctx.width),
    j: _ctx.$u.addUnit(_ctx.height)
  } : {}, {
    k: _ctx.showLoading && $data.loading
  }, _ctx.showLoading && $data.loading ? {
    l: common_vendor.p({
      name: _ctx.loadingIcon,
      width: _ctx.width,
      height: _ctx.height
    }),
    m: _ctx.shape == "circle" ? "50%" : _ctx.$u.addUnit(_ctx.radius),
    n: this.bgColor,
    o: _ctx.$u.addUnit(_ctx.width),
    p: _ctx.$u.addUnit(_ctx.height)
  } : {}, {
    q: _ctx.showError && $data.isError && !$data.loading
  }, _ctx.showError && $data.isError && !$data.loading ? {
    r: common_vendor.p({
      name: _ctx.errorIcon,
      width: _ctx.width,
      height: _ctx.height
    }),
    s: _ctx.shape == "circle" ? "50%" : _ctx.$u.addUnit(_ctx.radius),
    t: _ctx.$u.addUnit(_ctx.width),
    v: _ctx.$u.addUnit(_ctx.height)
  } : {}, {
    w: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    x: common_vendor.s($options.wrapStyle),
    y: common_vendor.s($data.backgroundStyle),
    z: common_vendor.p({
      mode: "fade",
      show: $data.show,
      duration: _ctx.fade ? 1e3 : 0
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-558b0c2e"], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/node_modules/uview-plus/components/u-image/u-image.vue"]]);
wx.createComponent(Component);
