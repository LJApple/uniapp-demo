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
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lvjun/Downloads/smartbot-master/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  app.use(utils_http.http);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
