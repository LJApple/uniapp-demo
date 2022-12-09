"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
var utils_http = require("./utils/http.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/trade/trade.js";
  "./pages/assets/assets.js";
  "./pages/my/my.js";
  "./pages/home/apiAuth/apiAuth.js";
  "./pages/home/apiAuthSure/apiAuthSure.js";
  "./pages/home/billingCenter/billingCenter.js";
  "./pages/home/toBePaid/toBePaid.js";
  "./pages/home/addUSDT/addUSDT.js";
  "./pages/home/paySuccess/paySuccess.js";
}
const _sfc_main = {
  onLaunch: async function() {
  },
  mounted() {
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  app.use(utils_http.http);
  app.use(common_vendor.uviewPlus);
  app.use(common_vendor.VueClipboard);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
