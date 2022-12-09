"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_js_common = require("../../../common/js/common.js");
const _sfc_main = {
  onLoad() {
    this.isAdequateFn("ERC20");
  },
  data() {
    return {
      needToPay: 200,
      payList: [
        {
          isActive: true,
          name: "ERC20",
          surplusMoney: 199
        },
        {
          isActive: false,
          name: "TRX",
          surplusMoney: 201
        },
        {
          isActive: false,
          name: "\u5408\u7D04\u652F\u4ED8",
          surplusMoney: 300,
          isContractActive: true
        }
      ],
      isAdequate: false,
      surplusMoney: 0,
      isContractPay: false,
      secretKey: "WERT SDFG RTYU HJKL",
      showActiveModal: false
    };
  },
  methods: {
    copy() {
      common_js_common.copy();
    },
    isAdequateFn(id) {
      const obj = this.payList.find((item) => item.name === id);
      this.isAdequate = obj.surplusMoney > this.needToPay;
      this.surplusMoney = obj.surplusMoney;
    },
    selectPaytype(item) {
      if (item.isContractActive)
        return;
      this.isContractPay = item.name === "\u5408\u7EA6\u652F\u4ED8";
      this.payList.forEach((citem) => {
        if (citem.name === item.name) {
          citem.isActive = true;
          this.isAdequate = citem.surplusMoney > this.needToPay;
          this.surplusMoney = citem.surplusMoney;
        } else {
          citem.isActive = false;
        }
      });
    },
    navigator() {
      common_js_common.navigate(`/pages/home/addUSDT/addUSDT`);
    },
    activeShow() {
      this.showActiveModal = true;
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    confirmActive() {
      common_vendor.index.reLaunch({
        url: "/pages/assets/assets"
      });
    },
    submit() {
      if (!this.isAdequate)
        return;
      common_js_common.navigate("/pages/home/paySuccess/paySuccess");
    }
  }
};
if (!Array) {
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_modal2 = common_vendor.resolveComponent("u-modal");
  (_easycom_u__image2 + _easycom_u_button2 + _easycom_u_modal2)();
}
const _easycom_u__image = () => "../../../node-modules/uview-plus/components/u--image/u--image.js";
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_modal = () => "../../../node-modules/uview-plus/components/u-modal/u-modal.js";
if (!Math) {
  (_easycom_u__image + _easycom_u_button + _easycom_u_modal)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      width: "54rpx",
      height: "54rpx",
      src: "/static/home/arr-back.png"
    }),
    b: common_vendor.o((...args) => $options.navigateBack && $options.navigateBack(...args)),
    c: common_vendor.t($data.needToPay),
    d: common_vendor.f($data.payList, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: !item.isContractActive
      }, !item.isContractActive ? {
        c: "49b9fb72-1-" + i0,
        d: common_vendor.p({
          width: "46rpx",
          height: "46rpx",
          src: `/static/home/${item.isActive ? "selected" : "unSelected"}.png`
        })
      } : {
        e: common_vendor.o((...args) => $options.activeShow && $options.activeShow(...args))
      }, {
        f: common_vendor.o(($event) => $options.selectPaytype(item))
      });
    }),
    e: common_vendor.t(!$data.isAdequate ? "\u4F59\u984D\u4E0D\u8DB3\uFF1A" : "\u4F59\u984D\u5145\u8DB3\uFF1A"),
    f: common_vendor.t($data.surplusMoney),
    g: !$data.isAdequate && !$data.isContractPay
  }, !$data.isAdequate && !$data.isContractPay ? {
    h: common_vendor.o((...args) => $options.navigator && $options.navigator(...args))
  } : {}, {
    i: common_vendor.t(!$data.isAdequate ? "\u652F\u4ED8" : "\u78BA\u5B9A\u652F\u4ED8"),
    j: common_vendor.o($options.submit),
    k: common_vendor.p({
      color: !$data.isAdequate ? "#CCCCCC" : "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
    }),
    l: common_vendor.p({
      width: "39rpx",
      height: "39rpx",
      src: "/static/home/close.png"
    }),
    m: common_vendor.o(($event) => $data.showActiveModal = false),
    n: common_vendor.t($data.secretKey),
    o: common_vendor.p({
      width: "31rpx",
      height: "31rpx",
      src: "/static/home/copy.png"
    }),
    p: common_vendor.o((...args) => $options.copy && $options.copy(...args)),
    q: common_vendor.o(($event) => $data.showActiveModal = false),
    r: common_vendor.o($options.confirmActive),
    s: common_vendor.p({
      closeOnClickOverlay: true,
      confirmText: "\u597D\u7684",
      title: "\u6FC0\u6D3B",
      confirmColor: "#FFB119",
      cancelColor: "#333333",
      show: $data.showActiveModal,
      title: _ctx.\u786E\u5B9A
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/home/toBePaid/toBePaid.vue"]]);
wx.createPage(MiniProgramPage);
