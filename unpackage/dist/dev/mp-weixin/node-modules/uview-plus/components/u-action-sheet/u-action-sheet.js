"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-action-sheet",
  mixins: [common_vendor.openType, common_vendor.button, common_vendor.mixin, common_vendor.props$3],
  data() {
    return {};
  },
  computed: {
    itemStyle() {
      return (index) => {
        let style = {};
        if (this.actions[index].color)
          style.color = this.actions[index].color;
        if (this.actions[index].fontSize)
          style.fontSize = common_vendor.index.$u.addUnit(this.actions[index].fontSize);
        if (this.actions[index].disabled)
          style.color = "#c0c4cc";
        return style;
      };
    }
  },
  methods: {
    closeHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    },
    cancel() {
      this.$emit("close");
    },
    selectHandler(index) {
      const item = this.actions[index];
      if (item && !item.disabled && !item.loading) {
        this.$emit("select", item);
        if (this.closeOnClickAction) {
          this.$emit("close");
        }
      }
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  const _easycom_u_loading_icon2 = common_vendor.resolveComponent("u-loading-icon");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_icon2 + _easycom_u_line2 + _easycom_u_loading_icon2 + _easycom_u_gap2 + _easycom_u_popup2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_line = () => "../u-line/u-line.js";
const _easycom_u_loading_icon = () => "../u-loading-icon/u-loading-icon.js";
const _easycom_u_gap = () => "../u-gap/u-gap.js";
const _easycom_u_popup = () => "../u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_line + _easycom_u_loading_icon + _easycom_u_gap + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.title
  }, _ctx.title ? {
    b: common_vendor.t(_ctx.title),
    c: common_vendor.p({
      name: "close",
      size: "17",
      color: "#c8c9cc",
      bold: true
    }),
    d: common_vendor.o((...args) => $options.cancel && $options.cancel(...args))
  } : {}, {
    e: _ctx.description
  }, _ctx.description ? {
    f: common_vendor.t(_ctx.description),
    g: common_vendor.s({
      marginTop: `${_ctx.title && _ctx.description ? 0 : "18px"}`
    })
  } : {}, {
    h: _ctx.description
  }, _ctx.description ? {} : {}, {
    i: common_vendor.f(_ctx.actions, (item, index, i0) => {
      return common_vendor.e({
        a: !item.loading
      }, !item.loading ? common_vendor.e({
        b: common_vendor.t(item.name),
        c: common_vendor.s($options.itemStyle(index)),
        d: item.subname
      }, item.subname ? {
        e: common_vendor.t(item.subname)
      } : {}) : {
        f: "6a35a061-3-" + i0 + ",6a35a061-0",
        g: common_vendor.p({
          ["custom-class"]: "van-action-sheet__loading",
          size: "18",
          mode: "circle"
        })
      }, {
        h: common_vendor.o(($event) => $options.selectHandler(index)),
        i: !item.disabled && !item.loading ? "u-action-sheet--hover" : "",
        j: item.openType,
        k: common_vendor.o(($event) => $options.selectHandler(index)),
        l: !item.disabled && !item.loading ? "u-action-sheet--hover" : "",
        m: index !== _ctx.actions.length - 1
      }, index !== _ctx.actions.length - 1 ? {
        n: "6a35a061-4-" + i0 + ",6a35a061-0"
      } : {}, {
        o: index
      });
    }),
    j: common_vendor.o((...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
    k: common_vendor.o((...args) => _ctx.onContact && _ctx.onContact(...args)),
    l: common_vendor.o((...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
    m: common_vendor.o((...args) => _ctx.onError && _ctx.onError(...args)),
    n: common_vendor.o((...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
    o: common_vendor.o((...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
    p: _ctx.lang,
    q: _ctx.sessionFrom,
    r: _ctx.sendMessageTitle,
    s: _ctx.sendMessagePath,
    t: _ctx.sendMessageImg,
    v: _ctx.showMessageCard,
    w: _ctx.appParameter,
    x: _ctx.cancelText
  }, _ctx.cancelText ? {
    y: common_vendor.p({
      bgColor: "#eaeaec",
      height: "6"
    })
  } : {}, {
    z: _ctx.cancelText
  }, _ctx.cancelText ? {
    A: common_vendor.t(_ctx.cancelText),
    B: common_vendor.o(() => {
    }),
    C: common_vendor.o((...args) => $options.cancel && $options.cancel(...args))
  } : {}, {
    D: common_vendor.o($options.closeHandler),
    E: common_vendor.p({
      show: _ctx.show,
      mode: "bottom",
      safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
      round: _ctx.round
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a35a061"], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/node_modules/uview-plus/components/u-action-sheet/u-action-sheet.vue"]]);
wx.createComponent(Component);
