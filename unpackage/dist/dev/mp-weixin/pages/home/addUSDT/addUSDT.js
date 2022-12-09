"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_js_common = require("../../../common/js/common.js");
const _sfc_main = {
  data() {
    return {
      qrcodeWidth: 275,
      value: "asfasde2eqwfefsdvasfasde2eqwfefsdvasfasde2eqwfefsdv",
      showAddSucess: false
    };
  },
  onReady() {
    var qr = new common_vendor.UQRCode();
    qr.data = this.value;
    qr.make();
    var canvasContext = common_vendor.index.createCanvasContext("qrcode", this);
    qr.canvasContext = canvasContext;
    qr.drawCanvas();
    let inter = setInterval(() => {
      this.showAddSucess = true;
      clearInterval(inter);
    }, 1e4);
  },
  methods: {
    copy() {
      common_js_common.copy(this.value);
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    savePic() {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];
      const ws = page.$getAppWebview();
      let bitmap = new plus.nativeObj.Bitmap("addUSDT");
      ws.draw(bitmap, function() {
        let fileName = `_doc/${new Date().getTime()}.png`;
        bitmap.save(fileName, {}, function(i) {
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: i.target,
            success: function() {
              bitmap.clear();
              common_vendor.index.$u.toast("\u4FDD\u5B58\u56FE\u7247\u6210\u529F");
            }
          });
        }, function(e) {
          common_vendor.index.$u.toast("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25");
        });
      }, function(e) {
        common_vendor.index.$u.toast("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25");
      });
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
  return {
    a: common_vendor.p({
      width: "54rpx",
      height: "54rpx",
      src: "/static/home/arrow-left-black.png"
    }),
    b: common_vendor.o((...args) => $options.navigateBack && $options.navigateBack(...args)),
    c: common_vendor.p({
      width: "467rpx",
      height: "256rpx",
      src: "/static/home/usdt.png"
    }),
    d: common_vendor.s(`width: ${$data.qrcodeWidth}rpx;height: ${$data.qrcodeWidth}rpx;`),
    e: common_vendor.t($data.value),
    f: common_vendor.p({
      width: "31rpx",
      height: "31rpx",
      src: "/static/home/copy.png"
    }),
    g: common_vendor.o((...args) => $options.copy && $options.copy(...args)),
    h: common_vendor.o($options.savePic),
    i: common_vendor.p({
      color: "#000"
    }),
    j: common_vendor.p({
      width: "39rpx",
      height: "39rpx",
      src: "/static/home/close.png"
    }),
    k: common_vendor.o(($event) => _ctx.showActiveModal = false),
    l: common_vendor.p({
      width: "182rpx",
      height: "148rpx",
      src: "/static/home/success.png"
    }),
    m: common_vendor.o(($event) => _ctx.showActiveModal = false),
    n: common_vendor.o($options.navigateBack),
    o: common_vendor.p({
      closeOnClickOverlay: true,
      confirmText: "\u53BB\u652F\u4ED8",
      title: "",
      confirmColor: "#FFB119",
      cancelColor: "#333333",
      show: $data.showAddSucess
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/home/addUSDT/addUSDT.vue"]]);
wx.createPage(MiniProgramPage);
