"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  onLoad: function(option) {
    console.log(option.name);
    const {
      secretKey,
      name,
      apiKey
    } = option;
    this.coinName = name;
    if (secretKey && apiKey) {
      this.form.apiKey = apiKey;
      this.form.secretKey = secretKey;
      this.type = "edit";
      this.tempType = "edit";
    }
  },
  data() {
    return {
      coinName: "",
      form: {
        apiKey: "",
        secretKey: ""
      },
      formPwd: {
        pwd: "",
        emial: "243253432@gmail.com"
      },
      type: "add",
      tempType: "add",
      rules: {
        "apiKey": {
          type: "string",
          required: true,
          message: "\u8ACB\u8F38\u5165api key",
          trigger: ["blur", "change"]
        },
        "secretKey": {
          type: "string",
          required: true,
          message: "\u8ACB\u8F38\u5165Secret Key",
          trigger: ["blur", "change"]
        },
        "pwd": {
          type: "string",
          required: true,
          message: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
          trigger: ["blur", "change"]
        }
      },
      showPwd: false,
      isVidate: false
    };
  },
  methods: {
    submit() {
      if (this.tempType === "edit") {
        this.showPwd = true;
        return;
      }
      this.$refs.form.validate().then((res) => {
        if (this.type === "edit") {
          common_vendor.index.$u.toast("\u4FEE\u6539");
        } else {
          common_vendor.index.$u.toast("\u65B0\u589E");
        }
        common_vendor.index.navigateBack({
          delta: 1
        });
      }).catch((errors) => {
        common_vendor.index.$u.toast("\u6821\u9A8C\u5931\u8D25");
      });
    },
    confirm() {
      this.formPwd;
      this.$refs.formPwd.validate().then((res) => {
        console.log(res);
        this.tempType = "add";
        this.showPwd = false;
      });
    },
    cancel() {
      this.showPwd = false;
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_modal2 = common_vendor.resolveComponent("u-modal");
  (_easycom_u_navbar2 + _easycom_u__input2 + _easycom_u_form_item2 + _easycom_u__form2 + _easycom_u_button2 + _easycom_u_modal2)();
}
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u__input = () => "../../../node-modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../../node-modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u__form = () => "../../../node-modules/uview-plus/components/u--form/u--form.js";
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_modal = () => "../../../node-modules/uview-plus/components/u-modal/u-modal.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u__input + _easycom_u_form_item + _easycom_u__form + _easycom_u_button + _easycom_u_modal)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      fixed: false,
      title: $data.coinName,
      height: "92rpx",
      autoBack: true
    }),
    b: common_vendor.t($data.coinName),
    c: common_vendor.o(($event) => $data.form.apiKey = $event),
    d: common_vendor.p({
      disabled: $data.tempType === "edit",
      placeholder: "\u8ACB\u8F38\u5165api key",
      border: "none",
      modelValue: $data.form.apiKey
    }),
    e: common_vendor.sr("apiKey", "222048e2-2,222048e2-1"),
    f: common_vendor.p({
      labelWidth: "200rpx",
      label: "Api Key\uFF1A",
      prop: "apiKey",
      borderBottom: "true"
    }),
    g: common_vendor.o(($event) => $data.form.secretKey = $event),
    h: common_vendor.p({
      disabled: $data.tempType === "edit",
      placeholder: "\u8ACB\u8F38\u5165Secret Key",
      border: "none",
      modelValue: $data.form.secretKey
    }),
    i: common_vendor.sr("secretKey", "222048e2-4,222048e2-1"),
    j: common_vendor.p({
      labelWidth: "200rpx",
      label: "Secret Key:",
      prop: "secretKey",
      borderBottom: true
    }),
    k: common_vendor.sr("form", "222048e2-1"),
    l: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      rules: $data.rules
    }),
    m: common_vendor.t($data.tempType === "edit" ? "\u4FEE\u6539" : "\u5C0E\u5165"),
    n: common_vendor.o($options.submit),
    o: common_vendor.p({
      color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
    }),
    p: common_vendor.t($data.formPwd.emial),
    q: common_vendor.p({
      labelWidth: "180rpx",
      label: "\u7576\u524D\u8CEC\u6236\uFF1A"
    }),
    r: common_vendor.o(($event) => $data.formPwd.pwd = $event),
    s: common_vendor.p({
      type: "password",
      placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
      modelValue: $data.formPwd.pwd
    }),
    t: common_vendor.sr("pwd", "222048e2-10,222048e2-8"),
    v: common_vendor.p({
      labelWidth: "180rpx",
      label: "\u5BC6\u78BC\uFF1A",
      prop: "pwd"
    }),
    w: common_vendor.sr("formPwd", "222048e2-8,222048e2-7"),
    x: common_vendor.p({
      labelPosition: "left",
      model: $data.formPwd,
      rules: $data.rules
    }),
    y: common_vendor.o($options.confirm),
    z: common_vendor.o($options.cancel),
    A: common_vendor.p({
      confirmText: "\u786E\u5B9A",
      cancelText: "\u53D6\u6D88",
      title: "\u5BC6\u78BC\u9A57\u8B49",
      showCancelButton: true,
      confirmColor: "#FFB119",
      cancelColor: "#333333",
      show: $data.showPwd,
      title: _ctx.\u786E\u5B9A
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/smartbot/pages/home/apiAuthSure/apiAuthSure.vue"]]);
wx.createPage(MiniProgramPage);
