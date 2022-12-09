"use strict";
var common_vendor = require("../common/vendor.js");
const install = (app, vm) => {
  const fly = new common_vendor.Fly();
  fly.interceptors.request.use((request) => {
    let token = common_vendor.index.getStorageSync("aliToken");
    if (token) {
      request.headers["token"] = token;
    }
    return request;
  }, function(error) {
    return Promise.reject(error);
  });
  fly.interceptors.response.use((res) => {
    return res;
  }, (error) => {
    return Promise.reject(error);
  });
  app.config.globalProperties.$http = fly;
};
var http = {
  install
};
exports.http = http;
