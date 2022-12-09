"use strict";
var common_vendor = require("../vendor.js");
const navigate = function(url) {
  common_vendor.index.navigateTo({
    url
  });
};
const copy = function(data) {
  common_vendor.index.setClipboardData({
    data,
    success: () => {
      common_vendor.index.showToast({
        icon: "none",
        title: "\u590D\u5236\u6210\u529F"
      });
    }
  });
};
exports.copy = copy;
exports.navigate = navigate;
