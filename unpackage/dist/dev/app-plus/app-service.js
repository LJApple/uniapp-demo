var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const version = "3.1.6";
  {
    formatAppLog("log", "at node_modules/uview-plus/libs/config/config.js:6", `
 %c uview-plus V${version} %c https://uiadmin.net/uview-plus 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  var config = {
    v: version,
    version,
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    unit: "px"
  };
  var actionSheet = {
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  var album = {
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  var alert = {
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  var avatar = {
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  var avatarGroup = {
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  var backtop = {
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  var badge = {
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  var button = {
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  var calendar = {
    calendar: {
      title: "\u65E5\u671F\u9009\u62E9",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "\u5F00\u59CB",
      endText: "\u7ED3\u675F",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "\u786E\u5B9A",
      confirmDisabledText: "\u786E\u5B9A",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  var carKeyboard = {
    carKeyboard: {
      random: false
    }
  };
  var cell = {
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  var cellGroup = {
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  var checkbox = {
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  var checkboxGroup = {
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  var circleProgress = {
    circleProgress: {
      percentage: 30
    }
  };
  var code$1 = {
    code: {
      seconds: 60,
      startText: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
      changeText: "X\u79D2\u91CD\u65B0\u83B7\u53D6",
      endText: "\u91CD\u65B0\u83B7\u53D6",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  var codeInput = {
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  var col = {
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  var collapse = {
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  var collapseItem = {
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  var columnNotice = {
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  var countDown = {
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  var countTo = {
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  var datetimePicker = {
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: () => []
    }
  };
  var divider = {
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  var empty$1 = {
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  var form = {
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  var formItem = {
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  var gap = {
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  var grid = {
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  var gridItem = {
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  var icon = {
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  var image$1 = {
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  var indexAnchor = {
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  var indexList = {
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  var input = {
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  var keyboard = {
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      autoChange: false
    }
  };
  var line = {
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  var lineProgress = {
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  var link = {
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u6253\u5F00",
      lineColor: "",
      text: ""
    }
  };
  var list = {
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  var listItem = {
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  var loadingIcon = {
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  var loadingPage = {
    loadingPage: {
      loadingText: "\u6B63\u5728\u52A0\u8F7D",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  var loadmore = {
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "\u52A0\u8F7D\u66F4\u591A",
      loadingText: "\u6B63\u5728\u52A0\u8F7D...",
      nomoreText: "\u6CA1\u6709\u66F4\u591A\u4E86",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  var modal = {
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  var navbar = {
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  var noNetwork = {
    noNetwork: {
      tips: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u4FE1\u53F7\u4E22\u5931",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  var noticeBar = {
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  var notify = {
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  var numberBox = {
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  var numberKeyboard = {
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  var overlay = {
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  var parse = {
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  var picker = {
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  var popup = {
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  var radio = {
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  var radioGroup = {
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  var rate = {
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  var readMore = {
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "\u5C55\u5F00\u9605\u8BFB\u5168\u6587",
      openText: "\u6536\u8D77",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  var row = {
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  var rowNotice = {
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  var scrollList = {
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  var search = {
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "\u641C\u7D22",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  var section = {
    section: {
      title: "",
      subTitle: "\u66F4\u591A",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  var skeleton = {
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  var slider = {
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  var statusBar = {
    statusBar: {
      bgColor: "transparent"
    }
  };
  var steps = {
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  var stepsItem = {
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  var sticky = {
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  var subsection = {
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  var swipeAction = {
    swipeAction: {
      autoClose: true
    }
  };
  var swipeActionItem = {
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  var swiper = {
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  var swipterIndicator = {
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  var _switch = {
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  var tabbar = {
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  var tabbarItem = {
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  var tabs = {
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  var tag = {
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  var text = {
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  var textarea = {
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  var toast$1 = {
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  var toolbar = {
    toolbar: {
      show: true,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  var tooltip = {
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  var transition$1 = {
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  var upload = {
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  var props$s = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, actionSheet), album), alert), avatar), avatarGroup), backtop), badge), button), calendar), carKeyboard), cell), cellGroup), checkbox), checkboxGroup), circleProgress), code$1), codeInput), col), collapse), collapseItem), columnNotice), countDown), countTo), datetimePicker), divider), empty$1), form), formItem), gap), grid), gridItem), icon), image$1), indexAnchor), indexList), input), keyboard), line), lineProgress), link), list), listItem), loadingIcon), loadingPage), loadmore), modal), navbar), noNetwork), noticeBar), notify), numberBox), numberKeyboard), overlay), parse), picker), popup), radio), radioGroup), rate), readMore), row), rowNotice), scrollList), search), section), skeleton), slider), statusBar), steps), stepsItem), sticky), subsection), swipeAction), swipeActionItem), swiper), swipterIndicator), _switch), tabbar), tabbarItem), tabs), tag), text), textarea), toast$1), toolbar), tooltip), transition$1), upload);
  var props$r = {
    props: {
      show: {
        type: Boolean,
        default: props$s.loadingIcon.show
      },
      color: {
        type: String,
        default: props$s.loadingIcon.color
      },
      textColor: {
        type: String,
        default: props$s.loadingIcon.textColor
      },
      vertical: {
        type: Boolean,
        default: props$s.loadingIcon.vertical
      },
      mode: {
        type: String,
        default: props$s.loadingIcon.mode
      },
      size: {
        type: [String, Number],
        default: props$s.loadingIcon.size
      },
      textSize: {
        type: [String, Number],
        default: props$s.loadingIcon.textSize
      },
      text: {
        type: [String, Number],
        default: props$s.loadingIcon.text
      },
      timingFunction: {
        type: String,
        default: props$s.loadingIcon.timingFunction
      },
      duration: {
        type: [String, Number],
        default: props$s.loadingIcon.duration
      },
      inactiveColor: {
        type: String,
        default: props$s.loadingIcon.inactiveColor
      }
    }
  };
  var mpMixin = {};
  var mixin = {
    props: {
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: ""
      },
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      $u() {
        return uni.$u.deepMerge(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item2) => {
              classes[prefix + this[item2]] = true;
            });
          }
          if (change) {
            change.map((item2) => {
              this[item2] ? classes[prefix + item2] = this[item2] : delete classes[prefix + item2];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  var _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$_ = {
    name: "u-loading-icon",
    mixins: [mpMixin, mixin, props$r],
    data() {
      return {
        array12: Array.from({
          length: 12
        }),
        aniAngel: 360,
        webviewHide: false,
        loading: false
      };
    },
    computed: {
      otherBorderColor() {
        const lightColor = uni.$u.colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
        ref: "ani",
        style: vue.normalizeStyle({
          color: _ctx.color,
          width: _ctx.$u.addUnit(_ctx.size),
          height: _ctx.$u.addUnit(_ctx.size),
          borderTopColor: _ctx.color,
          borderBottomColor: $options.otherBorderColor,
          borderLeftColor: $options.otherBorderColor,
          borderRightColor: $options.otherBorderColor,
          "animation-duration": `${_ctx.duration}ms`,
          "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
        })
      }, [
        _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($data.array12, (item2, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index2,
            class: "u-loading-icon__dot"
          });
        }), 128)) : vue.createCommentVNode("v-if", true)
      ], 6)) : vue.createCommentVNode("v-if", true),
      _ctx.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: "u-loading-icon__text",
        style: vue.normalizeStyle({
          fontSize: _ctx.$u.addUnit(_ctx.textSize),
          color: _ctx.textColor
        })
      }, vue.toDisplayString(_ctx.text), 5)) : vue.createCommentVNode("v-if", true)
    ], 6)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$Z], ["__scopeId", "data-v-854b5fbe"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
  var props$q = {
    props: {
      length: {
        type: [String, Number],
        default: props$s.swiperIndicator.length
      },
      current: {
        type: [String, Number],
        default: props$s.swiperIndicator.current
      },
      indicatorActiveColor: {
        type: String,
        default: props$s.swiperIndicator.indicatorActiveColor
      },
      indicatorInactiveColor: {
        type: String,
        default: props$s.swiperIndicator.indicatorInactiveColor
      },
      indicatorMode: {
        type: String,
        default: props$s.swiperIndicator.indicatorMode
      }
    }
  };
  const _sfc_main$Z = {
    name: "u-swiper-indicator",
    mixins: [mpMixin, mixin, props$q],
    data() {
      return {
        lineWidth: 22
      };
    },
    computed: {
      lineStyle() {
        let style = {};
        style.width = uni.$u.addUnit(this.lineWidth);
        style.transform = `translateX(${uni.$u.addUnit(this.current * this.lineWidth)})`;
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      dotStyle() {
        return (index2) => {
          let style = {};
          style.backgroundColor = index2 === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
          return style;
        };
      }
    }
  };
  function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-swiper-indicator" }, [
      _ctx.indicatorMode === "line" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-swiper-indicator__wrapper", [`u-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
        style: vue.normalizeStyle({
          width: _ctx.$u.addUnit($data.lineWidth * _ctx.length),
          backgroundColor: _ctx.indicatorInactiveColor
        })
      }, [
        vue.createElementVNode("view", {
          class: "u-swiper-indicator__wrapper--line__bar",
          style: vue.normalizeStyle([$options.lineStyle])
        }, null, 4)
      ], 6)) : vue.createCommentVNode("v-if", true),
      _ctx.indicatorMode === "dot" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-swiper-indicator__wrapper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.length, (item2, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["u-swiper-indicator__wrapper__dot", [index2 === _ctx.current && "u-swiper-indicator__wrapper__dot--active"]]),
            key: index2,
            style: vue.normalizeStyle([$options.dotStyle(index2)])
          }, null, 6);
        }), 128))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Y], ["__scopeId", "data-v-487724be"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator.vue"]]);
  var props$p = {
    props: {
      list: {
        type: Array,
        default: props$s.swiper.list
      },
      indicator: {
        type: Boolean,
        default: props$s.swiper.indicator
      },
      indicatorActiveColor: {
        type: String,
        default: props$s.swiper.indicatorActiveColor
      },
      indicatorInactiveColor: {
        type: String,
        default: props$s.swiper.indicatorInactiveColor
      },
      indicatorStyle: {
        type: [String, Object],
        default: props$s.swiper.indicatorStyle
      },
      indicatorMode: {
        type: String,
        default: props$s.swiper.indicatorMode
      },
      autoplay: {
        type: Boolean,
        default: props$s.swiper.autoplay
      },
      current: {
        type: [String, Number],
        default: props$s.swiper.current
      },
      currentItemId: {
        type: String,
        default: props$s.swiper.currentItemId
      },
      interval: {
        type: [String, Number],
        default: props$s.swiper.interval
      },
      duration: {
        type: [String, Number],
        default: props$s.swiper.duration
      },
      circular: {
        type: Boolean,
        default: props$s.swiper.circular
      },
      previousMargin: {
        type: [String, Number],
        default: props$s.swiper.previousMargin
      },
      nextMargin: {
        type: [String, Number],
        default: props$s.swiper.nextMargin
      },
      acceleration: {
        type: Boolean,
        default: props$s.swiper.acceleration
      },
      displayMultipleItems: {
        type: Number,
        default: props$s.swiper.displayMultipleItems
      },
      easingFunction: {
        type: String,
        default: props$s.swiper.easingFunction
      },
      keyName: {
        type: String,
        default: props$s.swiper.keyName
      },
      imgMode: {
        type: String,
        default: props$s.swiper.imgMode
      },
      height: {
        type: [String, Number],
        default: props$s.swiper.height
      },
      bgColor: {
        type: String,
        default: props$s.swiper.bgColor
      },
      radius: {
        type: [String, Number],
        default: props$s.swiper.radius
      },
      loading: {
        type: Boolean,
        default: props$s.swiper.loading
      },
      showTitle: {
        type: Boolean,
        default: props$s.swiper.showTitle
      }
    }
  };
  const _sfc_main$Y = {
    name: "u-swiper",
    mixins: [mpMixin, mixin, props$p],
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val, preVal) {
        if (val === preVal)
          return;
        this.currentIndex = val;
      }
    },
    computed: {
      itemStyle() {
        return (index2) => {
          const style = {};
          if (this.nextMargin && this.previousMargin) {
            style.borderRadius = uni.$u.addUnit(this.radius);
            if (index2 !== this.currentIndex)
              style.transform = "scale(0.92)";
          }
          return style;
        };
      }
    },
    methods: {
      getItemType(item2) {
        if (typeof item2 === "string")
          return uni.$u.test.video(this.getSource(item2)) ? "video" : "image";
        if (typeof item2 === "object" && this.keyName) {
          if (!item2.type)
            return uni.$u.test.video(this.getSource(item2)) ? "video" : "image";
          if (item2.type === "image")
            return "image";
          if (item2.type === "video")
            return "video";
          return "image";
        }
      },
      getSource(item2) {
        if (typeof item2 === "string")
          return item2;
        if (typeof item2 === "object" && this.keyName)
          return item2[this.keyName];
        else
          uni.$u.error("\u8BF7\u6309\u683C\u5F0F\u4F20\u9012\u5217\u8868\u53C2\u6570");
        return "";
      },
      change(e) {
        const {
          current
        } = e.detail;
        this.pauseVideo(this.currentIndex);
        this.currentIndex = current;
        this.$emit("change", e.detail);
      },
      pauseVideo(index2) {
        const lastItem = this.getSource(this.list[index2]);
        if (uni.$u.test.video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index2}`, this);
          video2.pause();
        }
      },
      getPoster(item2) {
        return typeof item2 === "object" && item2.poster ? item2.poster : "";
      },
      clickHandler(index2) {
        this.$emit("click", index2);
      }
    }
  };
  function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$5);
    const _component_u_swiper_indicator = resolveEasycom(vue.resolveDynamicComponent("u-swiper-indicator"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-swiper",
      style: vue.normalizeStyle({
        backgroundColor: _ctx.bgColor,
        height: _ctx.$u.addUnit(_ctx.height),
        borderRadius: _ctx.$u.addUnit(_ctx.radius)
      })
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-swiper__loading"
      }, [
        vue.createVNode(_component_u_loading_icon, { mode: "circle" })
      ])) : (vue.openBlock(), vue.createElementBlock("swiper", {
        key: 1,
        class: "u-swiper__wrapper",
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit(_ctx.height)
        }),
        onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
        circular: _ctx.circular,
        interval: _ctx.interval,
        duration: _ctx.duration,
        autoplay: _ctx.autoplay,
        current: _ctx.current,
        currentItemId: _ctx.currentItemId,
        previousMargin: _ctx.$u.addUnit(_ctx.previousMargin),
        nextMargin: _ctx.$u.addUnit(_ctx.nextMargin),
        acceleration: _ctx.acceleration,
        displayMultipleItems: _ctx.displayMultipleItems,
        easingFunction: _ctx.easingFunction
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item2, index2) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            class: "u-swiper__wrapper__item",
            key: index2
          }, [
            vue.createElementVNode("view", {
              class: "u-swiper__wrapper__item__wrapper",
              style: vue.normalizeStyle([$options.itemStyle(index2)])
            }, [
              vue.createCommentVNode(" \u5728nvue\u4E2D\uFF0Cimage\u56FE\u7247\u7684\u5BBD\u5EA6\u9ED8\u8BA4\u4E3A\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u9700\u8981\u901A\u8FC7flex:1\u6491\u5F00\uFF0C\u53E6\u5916\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u624D\u80FD\u663E\u793A\u56FE\u7247 "),
              $options.getItemType(item2) === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                class: "u-swiper__wrapper__item__wrapper__image",
                src: $options.getSource(item2),
                mode: _ctx.imgMode,
                onClick: ($event) => $options.clickHandler(index2),
                style: vue.normalizeStyle({
                  height: _ctx.$u.addUnit(_ctx.height),
                  borderRadius: _ctx.$u.addUnit(_ctx.radius)
                })
              }, null, 12, ["src", "mode", "onClick"])) : vue.createCommentVNode("v-if", true),
              $options.getItemType(item2) === "video" ? (vue.openBlock(), vue.createElementBlock("video", {
                key: 1,
                class: "u-swiper__wrapper__item__wrapper__video",
                id: `video-${index2}`,
                "enable-progress-gesture": false,
                src: $options.getSource(item2),
                poster: $options.getPoster(item2),
                title: _ctx.showTitle && _ctx.$u.test.object(item2) && item2.title ? item2.title : "",
                style: vue.normalizeStyle({
                  height: _ctx.$u.addUnit(_ctx.height)
                }),
                controls: "",
                onClick: ($event) => $options.clickHandler(index2)
              }, null, 12, ["id", "src", "poster", "title", "onClick"])) : vue.createCommentVNode("v-if", true),
              _ctx.showTitle && _ctx.$u.test.object(item2) && item2.title && _ctx.$u.test.image($options.getSource(item2)) ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 2,
                class: "u-swiper__wrapper__item__wrapper__title u-line-1"
              }, vue.toDisplayString(item2.title), 1)) : vue.createCommentVNode("v-if", true)
            ], 4)
          ]);
        }), 128))
      ], 44, ["circular", "interval", "duration", "autoplay", "current", "currentItemId", "previousMargin", "nextMargin", "acceleration", "displayMultipleItems", "easingFunction"])),
      vue.createElementVNode("view", {
        class: "u-swiper__indicator",
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.indicatorStyle)])
      }, [
        vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
          !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (vue.openBlock(), vue.createBlock(_component_u_swiper_indicator, {
            key: 0,
            indicatorActiveColor: _ctx.indicatorActiveColor,
            indicatorInactiveColor: _ctx.indicatorInactiveColor,
            length: _ctx.list.length,
            current: $data.currentIndex,
            indicatorMode: _ctx.indicatorMode
          }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : vue.createCommentVNode("v-if", true)
        ], true)
      ], 4)
    ], 4);
  }
  var __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$X], ["__scopeId", "data-v-a2b426be"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-swiper/u-swiper.vue"]]);
  var icons = {
    "uicon-level": "\uE693",
    "uicon-column-line": "\uE68E",
    "uicon-checkbox-mark": "\uE807",
    "uicon-folder": "\uE7F5",
    "uicon-movie": "\uE7F6",
    "uicon-star-fill": "\uE669",
    "uicon-star": "\uE65F",
    "uicon-phone-fill": "\uE64F",
    "uicon-phone": "\uE622",
    "uicon-apple-fill": "\uE881",
    "uicon-chrome-circle-fill": "\uE885",
    "uicon-backspace": "\uE67B",
    "uicon-attach": "\uE632",
    "uicon-cut": "\uE948",
    "uicon-empty-car": "\uE602",
    "uicon-empty-coupon": "\uE682",
    "uicon-empty-address": "\uE646",
    "uicon-empty-favor": "\uE67C",
    "uicon-empty-permission": "\uE686",
    "uicon-empty-news": "\uE687",
    "uicon-empty-search": "\uE664",
    "uicon-github-circle-fill": "\uE887",
    "uicon-rmb": "\uE608",
    "uicon-person-delete-fill": "\uE66A",
    "uicon-reload": "\uE788",
    "uicon-order": "\uE68F",
    "uicon-server-man": "\uE6BC",
    "uicon-search": "\uE62A",
    "uicon-fingerprint": "\uE955",
    "uicon-more-dot-fill": "\uE630",
    "uicon-scan": "\uE662",
    "uicon-share-square": "\uE60B",
    "uicon-map": "\uE61D",
    "uicon-map-fill": "\uE64E",
    "uicon-tags": "\uE629",
    "uicon-tags-fill": "\uE651",
    "uicon-bookmark-fill": "\uE63B",
    "uicon-bookmark": "\uE60A",
    "uicon-eye": "\uE613",
    "uicon-eye-fill": "\uE641",
    "uicon-mic": "\uE64A",
    "uicon-mic-off": "\uE649",
    "uicon-calendar": "\uE66E",
    "uicon-calendar-fill": "\uE634",
    "uicon-trash": "\uE623",
    "uicon-trash-fill": "\uE658",
    "uicon-play-left": "\uE66D",
    "uicon-play-right": "\uE610",
    "uicon-minus": "\uE618",
    "uicon-plus": "\uE62D",
    "uicon-info": "\uE653",
    "uicon-info-circle": "\uE7D2",
    "uicon-info-circle-fill": "\uE64B",
    "uicon-question": "\uE715",
    "uicon-error": "\uE6D3",
    "uicon-close": "\uE685",
    "uicon-checkmark": "\uE6A8",
    "uicon-android-circle-fill": "\uE67E",
    "uicon-android-fill": "\uE67D",
    "uicon-ie": "\uE87B",
    "uicon-IE-circle-fill": "\uE889",
    "uicon-google": "\uE87A",
    "uicon-google-circle-fill": "\uE88A",
    "uicon-setting-fill": "\uE872",
    "uicon-setting": "\uE61F",
    "uicon-minus-square-fill": "\uE855",
    "uicon-plus-square-fill": "\uE856",
    "uicon-heart": "\uE7DF",
    "uicon-heart-fill": "\uE851",
    "uicon-camera": "\uE7D7",
    "uicon-camera-fill": "\uE870",
    "uicon-more-circle": "\uE63E",
    "uicon-more-circle-fill": "\uE645",
    "uicon-chat": "\uE620",
    "uicon-chat-fill": "\uE61E",
    "uicon-bag-fill": "\uE617",
    "uicon-bag": "\uE619",
    "uicon-error-circle-fill": "\uE62C",
    "uicon-error-circle": "\uE624",
    "uicon-close-circle": "\uE63F",
    "uicon-close-circle-fill": "\uE637",
    "uicon-checkmark-circle": "\uE63D",
    "uicon-checkmark-circle-fill": "\uE635",
    "uicon-question-circle-fill": "\uE666",
    "uicon-question-circle": "\uE625",
    "uicon-share": "\uE631",
    "uicon-share-fill": "\uE65E",
    "uicon-shopping-cart": "\uE621",
    "uicon-shopping-cart-fill": "\uE65D",
    "uicon-bell": "\uE609",
    "uicon-bell-fill": "\uE640",
    "uicon-list": "\uE650",
    "uicon-list-dot": "\uE616",
    "uicon-zhihu": "\uE6BA",
    "uicon-zhihu-circle-fill": "\uE709",
    "uicon-zhifubao": "\uE6B9",
    "uicon-zhifubao-circle-fill": "\uE6B8",
    "uicon-weixin-circle-fill": "\uE6B1",
    "uicon-weixin-fill": "\uE6B2",
    "uicon-twitter-circle-fill": "\uE6AB",
    "uicon-twitter": "\uE6AA",
    "uicon-taobao-circle-fill": "\uE6A7",
    "uicon-taobao": "\uE6A6",
    "uicon-weibo-circle-fill": "\uE6A5",
    "uicon-weibo": "\uE6A4",
    "uicon-qq-fill": "\uE6A1",
    "uicon-qq-circle-fill": "\uE6A0",
    "uicon-moments-circel-fill": "\uE69A",
    "uicon-moments": "\uE69B",
    "uicon-qzone": "\uE695",
    "uicon-qzone-circle-fill": "\uE696",
    "uicon-baidu-circle-fill": "\uE680",
    "uicon-baidu": "\uE681",
    "uicon-facebook-circle-fill": "\uE68A",
    "uicon-facebook": "\uE689",
    "uicon-car": "\uE60C",
    "uicon-car-fill": "\uE636",
    "uicon-warning-fill": "\uE64D",
    "uicon-warning": "\uE694",
    "uicon-clock-fill": "\uE638",
    "uicon-clock": "\uE60F",
    "uicon-edit-pen": "\uE612",
    "uicon-edit-pen-fill": "\uE66B",
    "uicon-email": "\uE611",
    "uicon-email-fill": "\uE642",
    "uicon-minus-circle": "\uE61B",
    "uicon-minus-circle-fill": "\uE652",
    "uicon-plus-circle": "\uE62E",
    "uicon-plus-circle-fill": "\uE661",
    "uicon-file-text": "\uE663",
    "uicon-file-text-fill": "\uE665",
    "uicon-pushpin": "\uE7E3",
    "uicon-pushpin-fill": "\uE86E",
    "uicon-grid": "\uE673",
    "uicon-grid-fill": "\uE678",
    "uicon-play-circle": "\uE647",
    "uicon-play-circle-fill": "\uE655",
    "uicon-pause-circle-fill": "\uE654",
    "uicon-pause": "\uE8FA",
    "uicon-pause-circle": "\uE643",
    "uicon-eye-off": "\uE648",
    "uicon-eye-off-outline": "\uE62B",
    "uicon-gift-fill": "\uE65C",
    "uicon-gift": "\uE65B",
    "uicon-rmb-circle-fill": "\uE657",
    "uicon-rmb-circle": "\uE677",
    "uicon-kefu-ermai": "\uE656",
    "uicon-server-fill": "\uE751",
    "uicon-coupon-fill": "\uE8C4",
    "uicon-coupon": "\uE8AE",
    "uicon-integral": "\uE704",
    "uicon-integral-fill": "\uE703",
    "uicon-home-fill": "\uE964",
    "uicon-home": "\uE965",
    "uicon-hourglass-half-fill": "\uE966",
    "uicon-hourglass": "\uE967",
    "uicon-account": "\uE628",
    "uicon-plus-people-fill": "\uE626",
    "uicon-minus-people-fill": "\uE615",
    "uicon-account-fill": "\uE614",
    "uicon-thumb-down-fill": "\uE726",
    "uicon-thumb-down": "\uE727",
    "uicon-thumb-up": "\uE733",
    "uicon-thumb-up-fill": "\uE72F",
    "uicon-lock-fill": "\uE979",
    "uicon-lock-open": "\uE973",
    "uicon-lock-opened-fill": "\uE974",
    "uicon-lock": "\uE97A",
    "uicon-red-packet-fill": "\uE690",
    "uicon-photo-fill": "\uE98B",
    "uicon-photo": "\uE98D",
    "uicon-volume-off-fill": "\uE659",
    "uicon-volume-off": "\uE644",
    "uicon-volume-fill": "\uE670",
    "uicon-volume": "\uE633",
    "uicon-red-packet": "\uE691",
    "uicon-download": "\uE63C",
    "uicon-arrow-up-fill": "\uE6B0",
    "uicon-arrow-down-fill": "\uE600",
    "uicon-play-left-fill": "\uE675",
    "uicon-play-right-fill": "\uE676",
    "uicon-rewind-left-fill": "\uE679",
    "uicon-rewind-right-fill": "\uE67A",
    "uicon-arrow-downward": "\uE604",
    "uicon-arrow-leftward": "\uE601",
    "uicon-arrow-rightward": "\uE603",
    "uicon-arrow-upward": "\uE607",
    "uicon-arrow-down": "\uE60D",
    "uicon-arrow-right": "\uE605",
    "uicon-arrow-left": "\uE60E",
    "uicon-arrow-up": "\uE606",
    "uicon-skip-back-left": "\uE674",
    "uicon-skip-forward-right": "\uE672",
    "uicon-rewind-right": "\uE66F",
    "uicon-rewind-left": "\uE671",
    "uicon-arrow-right-double": "\uE68D",
    "uicon-arrow-left-double": "\uE68C",
    "uicon-wifi-off": "\uE668",
    "uicon-wifi": "\uE667",
    "uicon-empty-data": "\uE62F",
    "uicon-empty-history": "\uE684",
    "uicon-empty-list": "\uE68B",
    "uicon-empty-page": "\uE627",
    "uicon-empty-order": "\uE639",
    "uicon-man": "\uE697",
    "uicon-woman": "\uE69C",
    "uicon-man-add": "\uE61C",
    "uicon-man-add-fill": "\uE64C",
    "uicon-man-delete": "\uE61A",
    "uicon-man-delete-fill": "\uE66A",
    "uicon-zh": "\uE70A",
    "uicon-en": "\uE692"
  };
  var props$o = {
    props: {
      name: {
        type: String,
        default: props$s.icon.name
      },
      color: {
        type: String,
        default: props$s.icon.color
      },
      size: {
        type: [String, Number],
        default: props$s.icon.size
      },
      bold: {
        type: Boolean,
        default: props$s.icon.bold
      },
      index: {
        type: [String, Number],
        default: props$s.icon.index
      },
      hoverClass: {
        type: String,
        default: props$s.icon.hoverClass
      },
      customPrefix: {
        type: String,
        default: props$s.icon.customPrefix
      },
      label: {
        type: [String, Number],
        default: props$s.icon.label
      },
      labelPos: {
        type: String,
        default: props$s.icon.labelPos
      },
      labelSize: {
        type: [String, Number],
        default: props$s.icon.labelSize
      },
      labelColor: {
        type: String,
        default: props$s.icon.labelColor
      },
      space: {
        type: [String, Number],
        default: props$s.icon.space
      },
      imgMode: {
        type: String,
        default: props$s.icon.imgMode
      },
      width: {
        type: [String, Number],
        default: props$s.icon.width
      },
      height: {
        type: [String, Number],
        default: props$s.icon.height
      },
      top: {
        type: [String, Number],
        default: props$s.icon.top
      },
      stop: {
        type: Boolean,
        default: props$s.icon.stop
      }
    }
  };
  const _sfc_main$X = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$o],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && uni.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: uni.$u.addUnit(this.size),
          lineHeight: uni.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: uni.$u.addUnit(this.top)
        };
        if (this.color && !uni.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);
        style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);
        return style;
      },
      icon() {
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "u-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: vue.normalizeStyle([$options.imgStyle, _ctx.$u.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
        style: vue.normalizeStyle([$options.iconStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
        "hover-class": _ctx.hoverClass
      }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
      vue.createCommentVNode(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
      _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "u-icon__label",
        style: vue.normalizeStyle({
          color: _ctx.labelColor,
          fontSize: _ctx.$u.addUnit(_ctx.labelSize),
          marginLeft: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginTop: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginRight: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginBottom: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
        })
      }, vue.toDisplayString(_ctx.label), 5)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$W], ["__scopeId", "data-v-6dbbd241"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  var props$n = {
    props: {
      show: {
        type: Boolean,
        default: props$s.transition.show
      },
      mode: {
        type: String,
        default: props$s.transition.mode
      },
      duration: {
        type: [String, Number],
        default: props$s.transition.duration
      },
      timingFunction: {
        type: String,
        default: props$s.transition.timingFunction
      }
    }
  };
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  var transition = {
    methods: {
      clickHandler() {
        this.$emit("click");
      },
      vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        this.$nextTick(async () => {
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        });
      },
      vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        this.$nextTick(() => {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        });
      },
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$W = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        viewStyle: {},
        status: "",
        transitionEnded: false,
        display: false,
        classes: ""
      };
    },
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return __spreadValues(__spreadValues({
          transitionDuration: `${this.duration}ms`,
          transitionTimingFunction: this.timingFunction
        }, uni.$u.addStyle(customStyle)), viewStyle);
      }
    },
    mixins: [mpMixin, mixin, transition, props$n],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        immediate: true
      }
    }
  };
  function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-transition", $data.classes]),
      ref: "u-transition",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
      style: vue.normalizeStyle([$options.mergeStyle]),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 38)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$V], ["__scopeId", "data-v-1eafea41"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  var props$m = {
    props: {
      src: {
        type: String,
        default: props$s.image.src
      },
      mode: {
        type: String,
        default: props$s.image.mode
      },
      width: {
        type: [String, Number],
        default: props$s.image.width
      },
      height: {
        type: [String, Number],
        default: props$s.image.height
      },
      shape: {
        type: String,
        default: props$s.image.shape
      },
      radius: {
        type: [String, Number],
        default: props$s.image.radius
      },
      lazyLoad: {
        type: Boolean,
        default: props$s.image.lazyLoad
      },
      showMenuByLongpress: {
        type: Boolean,
        default: props$s.image.showMenuByLongpress
      },
      loadingIcon: {
        type: String,
        default: props$s.image.loadingIcon
      },
      errorIcon: {
        type: String,
        default: props$s.image.errorIcon
      },
      showLoading: {
        type: Boolean,
        default: props$s.image.showLoading
      },
      showError: {
        type: Boolean,
        default: props$s.image.showError
      },
      fade: {
        type: Boolean,
        default: props$s.image.fade
      },
      webp: {
        type: Boolean,
        default: props$s.image.webp
      },
      duration: {
        type: [String, Number],
        default: props$s.image.duration
      },
      bgColor: {
        type: String,
        default: props$s.image.bgColor
      }
    }
  };
  const _sfc_main$V = {
    name: "u-image",
    mixins: [mpMixin, mixin, props$m],
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
        style.borderRadius = this.shape == "circle" ? "10000px" : uni.$u.addUnit(this.radius);
        style.overflow = this.radius > 0 ? "hidden" : "visible";
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
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
      onLoadHandler(event2) {
        this.loading = false;
        this.isError = false;
        this.$emit("load", event2);
        this.removeBgColor();
      },
      removeBgColor() {
        this.backgroundStyle = {
          backgroundColor: "transparent"
        };
      }
    }
  };
  function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      mode: "fade",
      show: $data.show,
      duration: _ctx.fade ? 1e3 : 0
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: "u-image",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
          style: vue.normalizeStyle([$options.wrapStyle, $data.backgroundStyle])
        }, [
          !$data.isError ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            src: _ctx.src,
            mode: _ctx.mode,
            onError: _cache[0] || (_cache[0] = (...args) => $options.onErrorHandler && $options.onErrorHandler(...args)),
            onLoad: _cache[1] || (_cache[1] = (...args) => $options.onLoadHandler && $options.onLoadHandler(...args)),
            "show-menu-by-longpress": _ctx.showMenuByLongpress,
            "lazy-load": _ctx.lazyLoad,
            class: "u-image__image",
            style: vue.normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "10000px" : _ctx.$u.addUnit(_ctx.radius),
              width: _ctx.$u.addUnit(_ctx.width),
              height: _ctx.$u.addUnit(_ctx.height)
            })
          }, null, 44, ["src", "mode", "show-menu-by-longpress", "lazy-load"])) : vue.createCommentVNode("v-if", true),
          _ctx.showLoading && $data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-image__loading",
            style: vue.normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "50%" : _ctx.$u.addUnit(_ctx.radius),
              backgroundColor: this.bgColor,
              width: _ctx.$u.addUnit(_ctx.width),
              height: _ctx.$u.addUnit(_ctx.height)
            })
          }, [
            vue.renderSlot(_ctx.$slots, "loading", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.loadingIcon,
                width: _ctx.width,
                height: _ctx.height
              }, null, 8, ["name", "width", "height"])
            ], true)
          ], 4)) : vue.createCommentVNode("v-if", true),
          _ctx.showError && $data.isError && !$data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "u-image__error",
            style: vue.normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "50%" : _ctx.$u.addUnit(_ctx.radius),
              width: _ctx.$u.addUnit(_ctx.width),
              height: _ctx.$u.addUnit(_ctx.height)
            })
          }, [
            vue.renderSlot(_ctx.$slots, "error", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.errorIcon,
                width: _ctx.width,
                height: _ctx.height
              }, null, 8, ["name", "width", "height"])
            ], true)
          ], 4)) : vue.createCommentVNode("v-if", true)
        ], 4)
      ]),
      _: 3
    }, 8, ["show", "duration"]);
  }
  var __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$U], ["__scopeId", "data-v-558b0c2e"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-image/u-image.vue"]]);
  const _sfc_main$U = {
    name: "u--image",
    mixins: [mpMixin, props$m, mixin],
    components: {
      uvImage: __easycom_0$5
    },
    emits: ["click", "error", "load"]
  };
  function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvImage = vue.resolveComponent("uvImage");
    return vue.openBlock(), vue.createBlock(_component_uvImage, {
      src: _ctx.src,
      mode: _ctx.mode,
      width: _ctx.width,
      height: _ctx.height,
      shape: _ctx.shape,
      radius: _ctx.radius,
      lazyLoad: _ctx.lazyLoad,
      showMenuByLongpress: _ctx.showMenuByLongpress,
      loadingIcon: _ctx.loadingIcon,
      errorIcon: _ctx.errorIcon,
      showLoading: _ctx.showLoading,
      showError: _ctx.showError,
      fade: _ctx.fade,
      webp: _ctx.webp,
      duration: _ctx.duration,
      bgColor: _ctx.bgColor,
      customStyle: _ctx.customStyle,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
      onError: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("error")),
      onLoad: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("load"))
    }, {
      loading: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "loading")
      ]),
      error: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "error")
      ]),
      _: 3
    }, 8, ["src", "mode", "width", "height", "shape", "radius", "lazyLoad", "showMenuByLongpress", "loadingIcon", "errorIcon", "showLoading", "showError", "fade", "webp", "duration", "bgColor", "customStyle"]);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$T], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u--image/u--image.vue"]]);
  var props$l = {
    props: {
      color: {
        type: String,
        default: props$s.line.color
      },
      length: {
        type: [String, Number],
        default: props$s.line.length
      },
      direction: {
        type: String,
        default: props$s.line.direction
      },
      hairline: {
        type: Boolean,
        default: props$s.line.hairline
      },
      margin: {
        type: [String, Number],
        default: props$s.line.margin
      },
      dashed: {
        type: Boolean,
        default: props$s.line.dashed
      }
    }
  };
  const _sfc_main$T = {
    name: "u-line",
    mixins: [mpMixin, mixin, props$l],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-line",
      style: vue.normalizeStyle([$options.lineStyle])
    }, null, 4);
  }
  var __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$S], ["__scopeId", "data-v-059431e1"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-line/u-line.vue"]]);
  var props$k = {
    props: {
      show: {
        type: Boolean,
        default: props$s.overlay.show
      },
      zIndex: {
        type: [String, Number],
        default: props$s.overlay.zIndex
      },
      duration: {
        type: [String, Number],
        default: props$s.overlay.duration
      },
      opacity: {
        type: [String, Number],
        default: props$s.overlay.opacity
      }
    }
  };
  const _sfc_main$S = {
    name: "u-overlay",
    mixins: [mpMixin, mixin, props$k],
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.show,
      "custom-class": "u-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["show", "duration", "custom-style", "onClick"]);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$R], ["__scopeId", "data-v-02151e93"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-overlay/u-overlay.vue"]]);
  var props$j = {
    props: {
      bgColor: {
        type: String,
        default: props$s.statusBar.bgColor
      }
    }
  };
  const _sfc_main$R = {
    name: "u-status-bar",
    mixins: [mpMixin, mixin, props$j],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = uni.$u.addUnit(uni.$u.sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle([$options.style]),
      class: "u-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$Q], ["__scopeId", "data-v-782db321"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-status-bar/u-status-bar.vue"]]);
  var props$i = {
    props: {}
  };
  const _sfc_main$Q = {
    name: "u-safe-bottom",
    mixins: [mpMixin, mixin, props$i],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
      style: vue.normalizeStyle([$options.style])
    }, null, 6);
  }
  var __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$P], ["__scopeId", "data-v-4ef03a09"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-safe-bottom/u-safe-bottom.vue"]]);
  var props$h = {
    props: {
      show: {
        type: Boolean,
        default: props$s.popup.show
      },
      overlay: {
        type: Boolean,
        default: props$s.popup.overlay
      },
      mode: {
        type: String,
        default: props$s.popup.mode
      },
      duration: {
        type: [String, Number],
        default: props$s.popup.duration
      },
      closeable: {
        type: Boolean,
        default: props$s.popup.closeable
      },
      overlayStyle: {
        type: [Object, String],
        default: props$s.popup.overlayStyle
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: props$s.popup.closeOnClickOverlay
      },
      zIndex: {
        type: [String, Number],
        default: props$s.popup.zIndex
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: props$s.popup.safeAreaInsetBottom
      },
      safeAreaInsetTop: {
        type: Boolean,
        default: props$s.popup.safeAreaInsetTop
      },
      closeIconPos: {
        type: String,
        default: props$s.popup.closeIconPos
      },
      round: {
        type: [Boolean, String, Number],
        default: props$s.popup.round
      },
      zoom: {
        type: Boolean,
        default: props$s.popup.zoom
      },
      bgColor: {
        type: String,
        default: props$s.popup.bgColor
      },
      overlayOpacity: {
        type: [Number, String],
        default: props$s.popup.overlayOpacity
      }
    }
  };
  const _sfc_main$P = {
    name: "u-popup",
    mixins: [mpMixin, mixin, props$h],
    data() {
      return {
        overlayDuration: this.duration + 50
      };
    },
    watch: {
      show(newValue, oldValue) {
      }
    },
    computed: {
      transitionStyle() {
        const style = {
          zIndex: this.zIndex,
          position: "fixed",
          display: "flex"
        };
        style[this.mode] = 0;
        if (this.mode === "left") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "right") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "top") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "bottom") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "center") {
          return uni.$u.deepMerge(style, {
            alignItems: "center",
            "justify-content": "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
        }
      },
      contentStyle() {
        const style = {};
        uni.$u.sys();
        if (this.mode !== "center") {
          style.flex = 1;
        }
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.round) {
          const value = uni.$u.addUnit(this.round);
          if (this.mode === "top") {
            style.borderBottomLeftRadius = value;
            style.borderBottomRightRadius = value;
          } else if (this.mode === "bottom") {
            style.borderTopLeftRadius = value;
            style.borderTopRightRadius = value;
          } else if (this.mode === "center") {
            style.borderRadius = value;
          }
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      position() {
        if (this.mode === "center") {
          return this.zoom ? "fade-zoom" : "fade";
        }
        if (this.mode === "left") {
          return "slide-left";
        }
        if (this.mode === "right") {
          return "slide-right";
        }
        if (this.mode === "bottom") {
          return "slide-up";
        }
        if (this.mode === "top") {
          return "slide-down";
        }
      }
    },
    methods: {
      overlayClick() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      close(e) {
        this.$emit("close");
      },
      afterEnter() {
        this.$emit("open");
      },
      clickHandler() {
        if (this.mode === "center") {
          this.overlayClick();
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_0$3);
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_0$2);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3$3);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-popup" }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_u_overlay, {
        key: 0,
        show: _ctx.show,
        onClick: $options.overlayClick,
        duration: $data.overlayDuration,
        customStyle: _ctx.overlayStyle,
        opacity: _ctx.overlayOpacity
      }, null, 8, ["show", "onClick", "duration", "customStyle", "opacity"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_u_transition, {
        show: _ctx.show,
        customStyle: $options.transitionStyle,
        mode: $options.position,
        duration: _ctx.duration,
        onAfterEnter: $options.afterEnter,
        onClick: $options.clickHandler
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "u-popup__content",
            style: vue.normalizeStyle([$options.contentStyle]),
            onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
          }, [
            _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
            _ctx.closeable ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
              class: vue.normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
              "hover-class": "u-popup__content__close--hover",
              "hover-stay-time": "150"
            }, [
              vue.createVNode(_component_u_icon, {
                name: "close",
                color: "#909399",
                size: "18",
                bold: ""
              })
            ], 2)) : vue.createCommentVNode("v-if", true),
            _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 2 })) : vue.createCommentVNode("v-if", true)
          ], 4)
        ]),
        _: 3
      }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
    ]);
  }
  var __easycom_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$O], ["__scopeId", "data-v-8b82f2ea"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-popup/u-popup.vue"]]);
  var props$g = {
    props: {
      show: {
        type: Boolean,
        default: props$s.modal.show
      },
      title: {
        type: [String],
        default: props$s.modal.title
      },
      content: {
        type: String,
        default: props$s.modal.content
      },
      confirmText: {
        type: String,
        default: props$s.modal.confirmText
      },
      cancelText: {
        type: String,
        default: props$s.modal.cancelText
      },
      showConfirmButton: {
        type: Boolean,
        default: props$s.modal.showConfirmButton
      },
      showCancelButton: {
        type: Boolean,
        default: props$s.modal.showCancelButton
      },
      confirmColor: {
        type: String,
        default: props$s.modal.confirmColor
      },
      cancelColor: {
        type: String,
        default: props$s.modal.cancelColor
      },
      buttonReverse: {
        type: Boolean,
        default: props$s.modal.buttonReverse
      },
      zoom: {
        type: Boolean,
        default: props$s.modal.zoom
      },
      asyncClose: {
        type: Boolean,
        default: props$s.modal.asyncClose
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: props$s.modal.closeOnClickOverlay
      },
      negativeTop: {
        type: [String, Number],
        default: props$s.modal.negativeTop
      },
      width: {
        type: [String, Number],
        default: props$s.modal.width
      },
      confirmButtonShape: {
        type: String,
        default: props$s.modal.confirmButtonShape
      }
    }
  };
  const _sfc_main$O = {
    name: "u-modal",
    mixins: [mpMixin, mixin, props$g],
    data() {
      return {
        loading: false
      };
    },
    watch: {
      show(n) {
        if (n && this.loading)
          this.loading = false;
      }
    },
    methods: {
      confirmHandler() {
        if (this.asyncClose) {
          this.loading = true;
        }
        this.$emit("confirm");
      },
      cancelHandler() {
        this.$emit("cancel");
      },
      clickHandler() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$3);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$5);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$5);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      mode: "center",
      zoom: _ctx.zoom,
      show: _ctx.show,
      customStyle: {
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: `-${_ctx.$u.addUnit(_ctx.negativeTop)}`
      },
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      safeAreaInsetBottom: false,
      duration: 400,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: "u-modal",
          style: vue.normalizeStyle({
            width: _ctx.$u.addUnit(_ctx.width)
          })
        }, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "u-modal__title"
          }, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "u-modal__content",
            style: vue.normalizeStyle({
              paddingTop: `${_ctx.title ? 12 : 25}px`
            })
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode("text", { class: "u-modal__content__text" }, vue.toDisplayString(_ctx.content), 1)
            ], true)
          ], 4),
          _ctx.$slots.confirmButton ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-modal__button-group--confirm-button"
          }, [
            vue.renderSlot(_ctx.$slots, "confirmButton", {}, void 0, true)
          ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
            vue.createVNode(_component_u_line),
            vue.createElementVNode("view", {
              class: "u-modal__button-group",
              style: vue.normalizeStyle({
                flexDirection: _ctx.buttonReverse ? "row-reverse" : "row"
              })
            }, [
              _ctx.showCancelButton ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: vue.normalizeClass(["u-modal__button-group__wrapper u-modal__button-group__wrapper--cancel", [_ctx.showCancelButton && !_ctx.showConfirmButton && "u-modal__button-group__wrapper--only-cancel"]]),
                "hover-stay-time": 150,
                "hover-class": "u-modal__button-group__wrapper--hover",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.cancelHandler && $options.cancelHandler(...args))
              }, [
                vue.createElementVNode("text", {
                  class: "u-modal__button-group__wrapper__text",
                  style: vue.normalizeStyle({
                    color: _ctx.cancelColor
                  })
                }, vue.toDisplayString(_ctx.cancelText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true),
              _ctx.showConfirmButton && _ctx.showCancelButton ? (vue.openBlock(), vue.createBlock(_component_u_line, {
                key: 1,
                direction: "column"
              })) : vue.createCommentVNode("v-if", true),
              _ctx.showConfirmButton ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: vue.normalizeClass(["u-modal__button-group__wrapper u-modal__button-group__wrapper--confirm", [!_ctx.showCancelButton && _ctx.showConfirmButton && "u-modal__button-group__wrapper--only-confirm"]]),
                "hover-stay-time": 150,
                "hover-class": "u-modal__button-group__wrapper--hover",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.confirmHandler && $options.confirmHandler(...args))
              }, [
                $data.loading ? (vue.openBlock(), vue.createBlock(_component_u_loading_icon, { key: 0 })) : (vue.openBlock(), vue.createElementBlock("text", {
                  key: 1,
                  class: "u-modal__button-group__wrapper__text",
                  style: vue.normalizeStyle({
                    color: _ctx.confirmColor
                  })
                }, vue.toDisplayString(_ctx.confirmText), 5))
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], 4)
          ], 64))
        ], 4)
      ]),
      _: 3
    }, 8, ["zoom", "show", "customStyle", "closeOnClickOverlay", "onClick"]);
  }
  var __easycom_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N], ["__scopeId", "data-v-4eb28ee6"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-modal/u-modal.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item2 = plugin.settings[id];
          defaultSettings[id] = item2.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item2 of this.onQueue) {
        this.target.on[item2.method](...item2.args);
      }
      for (const item2 of this.targetQueue) {
        item2.resolve(await this.target[item2.method](...item2.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$1(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i2 = subs.indexOf(fn);
      if (i2 > -1) {
        subs.splice(i2, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type2 = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type2, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type2 = args.type;
        if (!options || !options.root) {
          type2 = namespace + type2;
          if (!store2._actions[type2]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type2);
            return;
          }
        }
        return store2.dispatch(type2, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type2 = args.type;
        if (!options || !options.root) {
          type2 = namespace + type2;
          if (!store2._mutations[type2]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type2);
            return;
          }
        }
        store2.commit(type2, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type2) {
        if (type2.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type2.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type2];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type2, handler, local) {
    var entry = store2._mutations[type2] || (store2._mutations[type2] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type2, handler, local) {
    var entry = store2._actions[type2] || (store2._actions[type2] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type2, rawGetter, local) {
    if (store2._wrappedGetters[type2]) {
      {
        console.error("[vuex] duplicate getter key: " + type2);
      }
      return;
    }
    store2._wrappedGetters[type2] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type2, payload, options) {
    if (isObject$1(type2) && type2.type) {
      options = payload;
      payload = type2;
      type2 = type2.type;
    }
    {
      assert(typeof type2 === "string", "expects string as the type, but found " + typeof type2 + ".");
    }
    return { type: type2, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i2) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i2 === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type2) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type2, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type2, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type2 + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type2, payload) {
      return dispatch.call(store2, type2, payload);
    };
    this.commit = function boundCommit(type2, payload, options2) {
      return commit.call(store2, type2, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install2(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type2 = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type: type2, payload };
    var entry = this._mutations[type2];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type2);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type2 + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type2 = ref.type;
    var payload = ref.payload;
    var action = { type: type2, payload };
    var entry = this._actions[type2];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type2);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error2);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error2);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    if (!isValidMap(states)) {
      console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(states).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedState() {
        var state = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module) {
            return;
          }
          state = module.context.state;
          getters = module.context.getters;
        }
        return typeof val === "function" ? val.call(this, state, getters) : state[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject$1(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module = store2._modulesNamespaceMap[namespace];
    if (!module) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module;
  }
  const navigate = function(url2) {
    uni.navigateTo({
      url: url2
    });
  };
  const copy = function(data) {
    uni.setClipboardData({
      data,
      success: () => {
        uni.showToast({
          icon: "none",
          title: "\u590D\u5236\u6210\u529F"
        });
      }
    });
  };
  const _sfc_main$N = {
    data() {
      return {
        bannerList: [{
          image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "\u6628\u591C\u661F\u8FB0\u6628\u591C\u98CE\uFF0C\u753B\u697C\u897F\u7554\u6842\u5802\u4E1C"
        }, {
          image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          title: "\u8EAB\u65E0\u5F69\u51E4\u53CC\u98DE\u7FFC\uFF0C\u5FC3\u6709\u7075\u7280\u4E00\u70B9\u901A"
        }, {
          image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "\u8C01\u5FF5\u897F\u98CE\u72EC\u81EA\u51C9\uFF0C\u8427\u8427\u9EC4\u53F6\u95ED\u758F\u7A97\uFF0C\u6C89\u601D\u5F80\u4E8B\u7ACB\u6B8B\u9633"
        }],
        messageTip: {
          USDTCount: 10,
          time: "11-11"
        },
        show: false,
        netTitleList: ["\u5E63\u7A2E", "\u6301\u5009\u8CC7\u7522USDT", "\u50F9\u683CUSDT"],
        netContentList: [
          {
            type: "BTC",
            assets: "123456.1234",
            price: "1234.12"
          },
          {
            type: "ETH",
            assets: "83456.1234",
            price: "1234.12"
          },
          {
            type: "HT",
            assets: "53456.1234",
            price: "1234.12"
          },
          {
            type: "XRP",
            assets: "23456.1234",
            price: "1234.12"
          },
          {
            type: "DOGE",
            assets: "23456.1234",
            price: "1234.12"
          }
        ]
      };
    },
    computed: __spreadValues({}, mapState(["init"])),
    onLoad() {
      formatAppLog("log", "at pages/home/home.vue:122", this.$http.post);
    },
    methods: {
      navigateAuth() {
        navigate("/pages/home/apiAuth/apiAuth");
      },
      confirm() {
        navigate("/pages/home/toBePaid/toBePaid");
      },
      navigateToCenter() {
        navigate("/pages/home/billingCenter/billingCenter");
      }
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_swiper = resolveEasycom(vue.resolveDynamicComponent("u-swiper"), __easycom_0$7);
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(' <u-navbar height="48" title="" :bgColor="bgColor"></u-navbar> '),
      vue.createElementVNode("view", null, [
        vue.createCommentVNode(" \u6EDA\u52A8 "),
        vue.createVNode(_component_u_swiper, {
          height: "485rpx",
          list: $data.bannerList,
          keyName: "image",
          indicatorActiveColor: "#F5A700",
          indicatorInactiveColor: "#FFFFFF",
          indicatorStyle: "bottom: 65rpx;",
          autoplay: true,
          circular: "",
          indicator: "",
          indicatorMode: "dot"
        }, null, 8, ["list"]),
        vue.createCommentVNode(" \u5185\u5BB9 "),
        vue.createElementVNode("view", { class: "content" }, [
          vue.createCommentVNode(" \u6D88\u606F\u63D0\u9192 "),
          vue.createElementVNode("view", {
            class: "c-tip",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.confirm && $options.confirm(...args))
          }, [
            vue.createVNode(_component_u__image, {
              width: "56rpx",
              height: "54rpx",
              src: "/static/home/message.png"
            }),
            vue.createElementVNode("view", { class: "color222" }, "\u60A8\u6709\u4E00\u7B46\u91D1\u984D" + vue.toDisplayString($data.messageTip.USDTCount) + " USDT\u7684\u8CEC\u55AE\u5F85\u652F\u4ED8", 1),
            vue.createElementVNode("view", { class: "color666" }, vue.toDisplayString($data.messageTip.time), 1)
          ]),
          vue.createCommentVNode(" api\u6388\u6743\uFF0C\u8D26\u5355\u4E2D\u5FC3 "),
          vue.createElementVNode("view", { class: "c-ul" }, [
            vue.createElementVNode("view", {
              class: "cu-li cu-first",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateAuth && $options.navigateAuth(...args))
            }, [
              vue.createElementVNode("text", { class: "color000" }, "API\u6388\u6B0A"),
              vue.createVNode(_component_u_image, {
                width: "160rpx",
                height: "150rpx",
                src: "/static/home/api.png"
              })
            ]),
            vue.createElementVNode("view", {
              class: "cu-li cu-second",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateToCenter && $options.navigateToCenter(...args))
            }, [
              vue.createElementVNode("text", { class: "color000" }, "\u8CEC\u55AE\u4E2D\u5FC3"),
              vue.createVNode(_component_u_image, {
                width: "152rpx",
                height: "157rpx",
                src: "/static/home/center.png"
              })
            ])
          ]),
          vue.createCommentVNode(" \u5168\u7F51\u6392\u884C "),
          vue.createElementVNode("view", { class: "c-net" }, [
            vue.createElementVNode("view", { class: "cn-title" }, [
              vue.createElementVNode("view", { class: "cnt-left" }, [
                vue.createElementVNode("text", { class: "cntl-text" }, "\u5168\u7DB2\u6301\u5009\u6392\u884C"),
                vue.createElementVNode("view", { class: "cntl-div" })
              ]),
              vue.createElementVNode("view", { class: "cnt-more" }, [
                vue.createElementVNode("text", { class: "cntm-left" }, "\u66F4\u591A"),
                vue.createVNode(_component_u_image, {
                  width: "12",
                  height: "7",
                  src: "/static/home/left-arrow.png"
                })
              ])
            ])
          ]),
          vue.createCommentVNode(" \u5168\u7F51\u6392\u884C\u5217\u8868 "),
          vue.createElementVNode("view", { class: "c-net-list" }, [
            vue.createElementVNode("view", { class: "cnl-title" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.netTitleList, (item2) => {
                return vue.openBlock(), vue.createElementBlock("text", { class: "cnlt-text" }, vue.toDisplayString(item2), 1);
              }), 256))
            ]),
            vue.createElementVNode("view", { class: "cnl-content" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.netContentList, (item2) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "cnlc-data" }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item2.type), 1),
                  vue.createElementVNode("text", null, vue.toDisplayString(item2.assets), 1),
                  vue.createElementVNode("text", null, vue.toDisplayString(item2.price), 1)
                ]);
              }), 256))
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" \u5F85\u652F\u4ED8\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        onConfirm: $options.confirm,
        onCancel: _ctx.cancel,
        confirmText: "\u53BB\u652F\u4ED8",
        cancelText: "\u9000\u51FA",
        showCancelButton: "",
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.show,
        title: _ctx.\u5F85\u652F\u4ED8
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", { style: { "padding": "106upx 0" } }, "\u60A8\u7684\u8CEC\u55AE\u5DF2\u903E\u671F\uFF0C\u8ACB\u5148\u524D\u5F80\u652F\u4ED8")
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "onCancel", "show", "title"])
    ]);
  }
  var PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/home/home.vue"]]);
  var props$f = {
    props: {
      modelValue: {
        type: [String, Number],
        default: props$s.input.value
      },
      type: {
        type: String,
        default: props$s.input.type
      },
      fixed: {
        type: Boolean,
        default: props$s.input.fixed
      },
      disabled: {
        type: Boolean,
        default: props$s.input.disabled
      },
      disabledColor: {
        type: String,
        default: props$s.input.disabledColor
      },
      clearable: {
        type: Boolean,
        default: props$s.input.clearable
      },
      password: {
        type: Boolean,
        default: props$s.input.password
      },
      maxlength: {
        type: [String, Number],
        default: props$s.input.maxlength
      },
      placeholder: {
        type: String,
        default: props$s.input.placeholder
      },
      placeholderClass: {
        type: String,
        default: props$s.input.placeholderClass
      },
      placeholderStyle: {
        type: [String, Object],
        default: props$s.input.placeholderStyle
      },
      showWordLimit: {
        type: Boolean,
        default: props$s.input.showWordLimit
      },
      confirmType: {
        type: String,
        default: props$s.input.confirmType
      },
      confirmHold: {
        type: Boolean,
        default: props$s.input.confirmHold
      },
      holdKeyboard: {
        type: Boolean,
        default: props$s.input.holdKeyboard
      },
      focus: {
        type: Boolean,
        default: props$s.input.focus
      },
      autoBlur: {
        type: Boolean,
        default: props$s.input.autoBlur
      },
      disableDefaultPadding: {
        type: Boolean,
        default: props$s.input.disableDefaultPadding
      },
      cursor: {
        type: [String, Number],
        default: props$s.input.cursor
      },
      cursorSpacing: {
        type: [String, Number],
        default: props$s.input.cursorSpacing
      },
      selectionStart: {
        type: [String, Number],
        default: props$s.input.selectionStart
      },
      selectionEnd: {
        type: [String, Number],
        default: props$s.input.selectionEnd
      },
      adjustPosition: {
        type: Boolean,
        default: props$s.input.adjustPosition
      },
      inputAlign: {
        type: String,
        default: props$s.input.inputAlign
      },
      fontSize: {
        type: [String, Number],
        default: props$s.input.fontSize
      },
      color: {
        type: String,
        default: props$s.input.color
      },
      prefixIcon: {
        type: String,
        default: props$s.input.prefixIcon
      },
      prefixIconStyle: {
        type: [String, Object],
        default: props$s.input.prefixIconStyle
      },
      suffixIcon: {
        type: String,
        default: props$s.input.suffixIcon
      },
      suffixIconStyle: {
        type: [String, Object],
        default: props$s.input.suffixIconStyle
      },
      border: {
        type: String,
        default: props$s.input.border
      },
      readonly: {
        type: Boolean,
        default: props$s.input.readonly
      },
      shape: {
        type: String,
        default: props$s.input.shape
      },
      formatter: {
        type: [Function, null],
        default: props$s.input.formatter
      },
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  };
  const _sfc_main$M = {
    name: "u-input",
    mixins: [mpMixin, mixin, props$f],
    data() {
      return {
        innerValue: "",
        focused: false,
        firstChange: true,
        changeFromInner: false,
        innerFormatter: (value) => value
      };
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      isShowClear() {
        const { clearable, readonly, focused, innerValue } = this;
        return !!clearable && !readonly && !!focused && innerValue !== "";
      },
      inputClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
        classes.push(`u-input--${shape}`);
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-input--no-radius"
        ]));
        return classes.join(" ");
      },
      wrapperStyle() {
        const style = {};
        if (this.disabled) {
          style.backgroundColor = this.disabledColor;
        }
        if (this.border === "none") {
          style.padding = "0";
        } else {
          style.paddingTop = "6px";
          style.paddingBottom = "6px";
          style.paddingLeft = "9px";
          style.paddingRight = "9px";
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      inputStyle() {
        const style = {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          textAlign: this.inputAlign
        };
        return style;
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
    methods: {
      setFormatter(e) {
        this.innerFormatter = e;
      },
      onInput(e) {
        let { value = "" } = e.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value);
        this.innerValue = value;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      onBlur(event2) {
        this.$emit("blur", event2.detail.value);
        uni.$u.sleep(50).then(() => {
          this.focused = false;
        });
        uni.$u.formValidate(this, "blur");
      },
      onFocus(event2) {
        this.focused = true;
        this.$emit("focus");
      },
      onConfirm(event2) {
        this.$emit("confirm", this.innerValue);
      },
      onkeyboardheightchange() {
        this.$emit("keyboardheightchange");
      },
      valueChange() {
        const value = this.innerValue;
        this.$nextTick(() => {
          this.$emit("update:modelValue", value);
          this.changeFromInner = true;
          this.$emit("change", value);
          uni.$u.formValidate(this, "change");
        });
      },
      onClear() {
        this.innerValue = "";
        this.$nextTick(() => {
          this.valueChange();
          this.$emit("clear");
        });
      },
      clickHandler() {
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-input", $options.inputClass]),
      style: vue.normalizeStyle([$options.wrapperStyle])
    }, [
      vue.createElementVNode("view", { class: "u-input__content" }, [
        _ctx.prefixIcon || _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-input__content__prefix-icon"
        }, [
          vue.renderSlot(_ctx.$slots, "prefix", {}, () => [
            vue.createVNode(_component_u_icon, {
              name: _ctx.prefixIcon,
              size: "18",
              customStyle: _ctx.prefixIconStyle
            }, null, 8, ["name", "customStyle"])
          ], true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "u-input__content__field-wrapper",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
        }, [
          vue.createCommentVNode(" \u6839\u636Euni-app\u7684input\u7EC4\u4EF6\u6587\u6863\uFF0CH5\u548CAPP\u4E2D\u53EA\u8981\u58F0\u660E\u4E86password\u53C2\u6570(\u65E0\u8BBAtrue\u8FD8\u662Ffalse)\uFF0Ctype\u5747\u5931\u6548\uFF0C\u6B64\u65F6\n					\u4E3A\u4E86\u9632\u6B62type=number\u65F6\uFF0C\u53C8\u5B58\u5728password\u5C5E\u6027\uFF0Ctype\u65E0\u6548\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6Epassword\u4E3Aundefined\n				 "),
          vue.createElementVNode("input", {
            class: "u-input__content__field-wrapper__field",
            style: vue.normalizeStyle([$options.inputStyle]),
            type: _ctx.type,
            focus: _ctx.focus,
            cursor: _ctx.cursor,
            value: $data.innerValue,
            "auto-blur": _ctx.autoBlur,
            disabled: _ctx.disabled || _ctx.readonly,
            maxlength: _ctx.maxlength,
            placeholder: _ctx.placeholder,
            "placeholder-style": _ctx.placeholderStyle,
            "placeholder-class": _ctx.placeholderClass,
            "confirm-type": _ctx.confirmType,
            "confirm-hold": _ctx.confirmHold,
            "hold-keyboard": _ctx.holdKeyboard,
            "cursor-spacing": _ctx.cursorSpacing,
            "adjust-position": _ctx.adjustPosition,
            "selection-end": _ctx.selectionEnd,
            "selection-start": _ctx.selectionStart,
            password: _ctx.password || _ctx.type === "password" || void 0,
            ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
            onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
            onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
            onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
          }, null, 44, ["type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent"])
        ]),
        $options.isShowClear ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-input__content__clear",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
        }, [
          vue.createVNode(_component_u_icon, {
            name: "close",
            size: "11",
            color: "#ffffff",
            customStyle: "line-height: 12px"
          })
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.suffixIcon || _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "u-input__content__subfix-icon"
        }, [
          vue.renderSlot(_ctx.$slots, "suffix", {}, () => [
            vue.createVNode(_component_u_icon, {
              name: _ctx.suffixIcon,
              size: "18",
              customStyle: _ctx.suffixIconStyle
            }, null, 8, ["name", "customStyle"])
          ], true)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ], 6);
  }
  var uvInput = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L], ["__scopeId", "data-v-2ee84e72"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-input/u-input.vue"]]);
  const _sfc_main$L = {
    name: "u--input",
    mixins: [mpMixin, props$f, mixin],
    components: {
      uvInput
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvInput = vue.resolveComponent("uvInput");
    return vue.openBlock(), vue.createBlock(_component_uvInput, {
      modelValue: _ctx.modelValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => _ctx.$emit("update:modelValue", e)),
      type: _ctx.type,
      fixed: _ctx.fixed,
      disabled: _ctx.disabled,
      disabledColor: _ctx.disabledColor,
      clearable: _ctx.clearable,
      password: _ctx.password,
      maxlength: _ctx.maxlength,
      placeholder: _ctx.placeholder,
      placeholderClass: _ctx.placeholderClass,
      placeholderStyle: _ctx.placeholderStyle,
      showWordLimit: _ctx.showWordLimit,
      confirmType: _ctx.confirmType,
      confirmHold: _ctx.confirmHold,
      holdKeyboard: _ctx.holdKeyboard,
      focus: _ctx.focus,
      autoBlur: _ctx.autoBlur,
      disableDefaultPadding: _ctx.disableDefaultPadding,
      cursor: _ctx.cursor,
      cursorSpacing: _ctx.cursorSpacing,
      selectionStart: _ctx.selectionStart,
      selectionEnd: _ctx.selectionEnd,
      adjustPosition: _ctx.adjustPosition,
      inputAlign: _ctx.inputAlign,
      fontSize: _ctx.fontSize,
      color: _ctx.color,
      prefixIcon: _ctx.prefixIcon,
      suffixIcon: _ctx.suffixIcon,
      suffixIconStyle: _ctx.suffixIconStyle,
      prefixIconStyle: _ctx.prefixIconStyle,
      border: _ctx.border,
      readonly: _ctx.readonly,
      shape: _ctx.shape,
      customStyle: _ctx.customStyle,
      formatter: _ctx.formatter,
      ignoreCompositionEvent: _ctx.ignoreCompositionEvent
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "prefix", { slot: "prefix" }),
        vue.renderSlot(_ctx.$slots, "suffix", { slot: "suffix" })
      ]),
      _: 3
    }, 8, ["modelValue", "type", "fixed", "disabled", "disabledColor", "clearable", "password", "maxlength", "placeholder", "placeholderClass", "placeholderStyle", "showWordLimit", "confirmType", "confirmHold", "holdKeyboard", "focus", "autoBlur", "disableDefaultPadding", "cursor", "cursorSpacing", "selectionStart", "selectionEnd", "adjustPosition", "inputAlign", "fontSize", "color", "prefixIcon", "suffixIcon", "suffixIconStyle", "prefixIconStyle", "border", "readonly", "shape", "customStyle", "formatter", "ignoreCompositionEvent"]);
  }
  var __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u--input/u--input.vue"]]);
  var props$e = {
    props: {
      isDot: {
        type: Boolean,
        default: props$s.badge.isDot
      },
      value: {
        type: [Number, String],
        default: props$s.badge.value
      },
      modelValue: {
        type: [Number, String],
        default: props$s.badge.modelValue
      },
      show: {
        type: Boolean,
        default: props$s.badge.show
      },
      max: {
        type: [Number, String],
        default: props$s.badge.max
      },
      type: {
        type: String,
        default: props$s.badge.type
      },
      showZero: {
        type: Boolean,
        default: props$s.badge.showZero
      },
      bgColor: {
        type: [String, null],
        default: props$s.badge.bgColor
      },
      color: {
        type: [String, null],
        default: props$s.badge.color
      },
      shape: {
        type: String,
        default: props$s.badge.shape
      },
      numberType: {
        type: String,
        default: props$s.badge.numberType
      },
      offset: {
        type: Array,
        default: props$s.badge.offset
      },
      inverted: {
        type: Boolean,
        default: props$s.badge.inverted
      },
      absolute: {
        type: Boolean,
        default: props$s.badge.absolute
      }
    }
  };
  const _sfc_main$K = {
    name: "u-badge",
    mixins: [mpMixin, props$e, mixin],
    computed: {
      boxStyle() {
        let style = {};
        return style;
      },
      badgeStyle() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        if (this.bgColor && !this.inverted) {
          style.backgroundColor = this.bgColor;
        }
        if (this.absolute) {
          style.position = "absolute";
          if (this.offset.length) {
            const top = this.offset[0];
            const right = this.offset[1] || top;
            style.top = uni.$u.addUnit(top);
            style.right = uni.$u.addUnit(right);
          }
        }
        return style;
      },
      showValue() {
        switch (this.numberType) {
          case "overflow":
            return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
          case "ellipsis":
            return Number(this.value) > Number(this.max) ? "..." : this.value;
          case "limit":
            return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
          default:
            return Number(this.value);
        }
      }
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? (vue.openBlock(), vue.createElementBlock("text", {
      key: 0,
      class: vue.normalizeClass([[_ctx.isDot ? "u-badge--dot" : "u-badge--not-dot", _ctx.inverted && "u-badge--inverted", _ctx.shape === "horn" && "u-badge--horn", `u-badge--${_ctx.type}${_ctx.inverted ? "--inverted" : ""}`], "u-badge"]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle), $options.badgeStyle])
    }, vue.toDisplayString(_ctx.isDot ? "" : $options.showValue), 7)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__scopeId", "data-v-64d2630e"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-badge/u-badge.vue"]]);
  var props$d = {
    props: {
      duration: {
        type: Number,
        default: props$s.tabs.duration
      },
      list: {
        type: Array,
        default: props$s.tabs.list
      },
      lineColor: {
        type: String,
        default: props$s.tabs.lineColor
      },
      activeStyle: {
        type: [String, Object],
        default: props$s.tabs.activeStyle
      },
      inactiveStyle: {
        type: [String, Object],
        default: props$s.tabs.inactiveStyle
      },
      lineWidth: {
        type: [String, Number],
        default: props$s.tabs.lineWidth
      },
      lineHeight: {
        type: [String, Number],
        default: props$s.tabs.lineHeight
      },
      lineBgSize: {
        type: String,
        default: props$s.tabs.lineBgSize
      },
      itemStyle: {
        type: [String, Object],
        default: props$s.tabs.itemStyle
      },
      scrollable: {
        type: Boolean,
        default: props$s.tabs.scrollable
      },
      current: {
        type: [Number, String],
        default: props$s.tabs.current
      },
      keyName: {
        type: String,
        default: props$s.tabs.keyName
      }
    }
  };
  const _sfc_main$J = {
    name: "u-tabs",
    mixins: [mpMixin, mixin, props$d],
    data() {
      return {
        firstTime: true,
        scrollLeft: 0,
        scrollViewWidth: 0,
        lineOffsetLeft: 0,
        tabsRect: {
          left: 0
        },
        innerCurrent: 0,
        moving: false
      };
    },
    watch: {
      current: {
        immediate: true,
        handler(newValue, oldValue) {
          if (newValue !== this.innerCurrent) {
            this.innerCurrent = newValue;
            this.$nextTick(() => {
              this.resize();
            });
          }
        }
      },
      list() {
        this.$nextTick(() => {
          this.resize();
        });
      }
    },
    computed: {
      textStyle() {
        return (index2) => {
          const style = {};
          const customeStyle = index2 === this.innerCurrent ? uni.$u.addStyle(this.activeStyle) : uni.$u.addStyle(this.inactiveStyle);
          if (this.list[index2].disabled) {
            style.color = "#c8c9cc";
          }
          return uni.$u.deepMerge(customeStyle, style);
        };
      },
      propsBadge() {
        return uni.$u.props.badge;
      }
    },
    async mounted() {
      this.init();
    },
    emits: ["click", "change"],
    methods: {
      setLineLeft() {
        const tabItem = this.list[this.innerCurrent];
        if (!tabItem) {
          return;
        }
        let lineOffsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => total + curr.rect.width, 0);
        const lineWidth = uni.$u.getPx(this.lineWidth);
        this.lineOffsetLeft = lineOffsetLeft + (tabItem.rect.width - lineWidth) / 2;
        if (this.firstTime) {
          setTimeout(() => {
            this.firstTime = false;
          }, 10);
        }
      },
      animation(x, duration = 0) {
      },
      clickHandler(item2, index2) {
        this.$emit("click", __spreadProps(__spreadValues({}, item2), {
          index: index2
        }));
        if (item2.disabled)
          return;
        this.innerCurrent = index2;
        this.resize();
        this.$emit("change", __spreadProps(__spreadValues({}, item2), {
          index: index2
        }));
      },
      init() {
        uni.$u.sleep().then(() => {
          this.resize();
        });
      },
      setScrollLeft() {
        const tabRect = this.list[this.innerCurrent];
        const offsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => {
          return total + curr.rect.width;
        }, 0);
        const windowWidth = uni.$u.sys().windowWidth;
        let scrollLeft = offsetLeft - (this.tabsRect.width - tabRect.rect.width) / 2 - (windowWidth - this.tabsRect.right) / 2 + this.tabsRect.left / 2;
        scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - this.tabsRect.width);
        this.scrollLeft = Math.max(0, scrollLeft);
      },
      resize() {
        if (this.list.length === 0) {
          return;
        }
        Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(([tabsRect, itemRect = []]) => {
          this.tabsRect = tabsRect;
          this.scrollViewWidth = 0;
          itemRect.map((item2, index2) => {
            this.scrollViewWidth += item2.width;
            this.list[index2].rect = item2;
          });
          this.setLineLeft();
          this.setScrollLeft();
        });
      },
      getTabsRect() {
        return new Promise((resolve) => {
          this.queryRect("u-tabs__wrapper__scroll-view").then((size) => resolve(size));
        });
      },
      getAllItemRect() {
        return new Promise((resolve) => {
          const promiseAllArr = this.list.map((item2, index2) => this.queryRect(`u-tabs__wrapper__nav__item-${index2}`, true));
          Promise.all(promiseAllArr).then((sizes) => resolve(sizes));
        });
      },
      queryRect(el, item2) {
        return new Promise((resolve) => {
          this.$uGetRect(`.${el}`).then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-tabs" }, [
      vue.createElementVNode("view", { class: "u-tabs__wrapper" }, [
        vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
        vue.createElementVNode("view", { class: "u-tabs__wrapper__scroll-view-wrapper" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": _ctx.scrollable,
            "scroll-left": $data.scrollLeft,
            "scroll-with-animation": "",
            class: "u-tabs__wrapper__scroll-view",
            "show-scrollbar": false,
            ref: "u-tabs__wrapper__scroll-view"
          }, [
            vue.createElementVNode("view", {
              class: "u-tabs__wrapper__nav",
              ref: "u-tabs__wrapper__nav"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item2, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["u-tabs__wrapper__nav__item", [`u-tabs__wrapper__nav__item-${index2}`, item2.disabled && "u-tabs__wrapper__nav__item--disabled"]]),
                  key: index2,
                  onClick: ($event) => $options.clickHandler(item2, index2),
                  ref_for: true,
                  ref: `u-tabs__wrapper__nav__item-${index2}`,
                  style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.itemStyle), { flex: _ctx.scrollable ? "" : 1 }])
                }, [
                  vue.createElementVNode("text", {
                    class: vue.normalizeClass([[item2.disabled && "u-tabs__wrapper__nav__item__text--disabled"], "u-tabs__wrapper__nav__item__text"]),
                    style: vue.normalizeStyle([$options.textStyle(index2)])
                  }, vue.toDisplayString(item2[_ctx.keyName]), 7),
                  vue.createVNode(_component_u_badge, {
                    show: !!(item2.badge && (item2.badge.show || item2.badge.isDot || item2.badge.value)),
                    isDot: item2.badge && item2.badge.isDot || $options.propsBadge.isDot,
                    value: item2.badge && item2.badge.value || $options.propsBadge.value,
                    max: item2.badge && item2.badge.max || $options.propsBadge.max,
                    type: item2.badge && item2.badge.type || $options.propsBadge.type,
                    showZero: item2.badge && item2.badge.showZero || $options.propsBadge.showZero,
                    bgColor: item2.badge && item2.badge.bgColor || $options.propsBadge.bgColor,
                    color: item2.badge && item2.badge.color || $options.propsBadge.color,
                    shape: item2.badge && item2.badge.shape || $options.propsBadge.shape,
                    numberType: item2.badge && item2.badge.numberType || $options.propsBadge.numberType,
                    inverted: item2.badge && item2.badge.inverted || $options.propsBadge.inverted,
                    customStyle: "margin-left: 4px;"
                  }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                ], 14, ["onClick"]);
              }), 128)),
              vue.createElementVNode("view", {
                class: "u-tabs__wrapper__nav__line",
                ref: "u-tabs__wrapper__nav__line",
                style: vue.normalizeStyle([{
                  width: _ctx.$u.addUnit(_ctx.lineWidth),
                  transform: `translate(${$data.lineOffsetLeft}px)`,
                  transitionDuration: `${$data.firstTime ? 0 : _ctx.duration}ms`,
                  height: _ctx.$u.addUnit(_ctx.lineHeight),
                  background: _ctx.lineColor,
                  backgroundSize: _ctx.lineBgSize
                }])
              }, null, 4)
            ], 512)
          ], 8, ["scroll-x", "scroll-left"])
        ]),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ])
    ]);
  }
  var __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-f192babe"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-tabs/u-tabs.vue"]]);
  var props$c = {
    props: {
      safeAreaInsetTop: {
        type: Boolean,
        default: props$s.navbar.safeAreaInsetTop
      },
      placeholder: {
        type: Boolean,
        default: props$s.navbar.placeholder
      },
      fixed: {
        type: Boolean,
        default: props$s.navbar.fixed
      },
      border: {
        type: Boolean,
        default: props$s.navbar.border
      },
      leftIcon: {
        type: String,
        default: props$s.navbar.leftIcon
      },
      leftText: {
        type: String,
        default: props$s.navbar.leftText
      },
      rightText: {
        type: String,
        default: props$s.navbar.rightText
      },
      rightIcon: {
        type: String,
        default: props$s.navbar.rightIcon
      },
      title: {
        type: [String, Number],
        default: props$s.navbar.title
      },
      bgColor: {
        type: String,
        default: props$s.navbar.bgColor
      },
      titleWidth: {
        type: [String, Number],
        default: props$s.navbar.titleWidth
      },
      height: {
        type: [String, Number],
        default: props$s.navbar.height
      },
      leftIconSize: {
        type: [String, Number],
        default: props$s.navbar.leftIconSize
      },
      leftIconColor: {
        type: String,
        default: props$s.navbar.leftIconColor
      },
      autoBack: {
        type: Boolean,
        default: props$s.navbar.autoBack
      },
      titleStyle: {
        type: [String, Object],
        default: props$s.navbar.titleStyle
      }
    }
  };
  const _sfc_main$I = {
    name: "u-navbar",
    mixins: [mpMixin, mixin, props$c],
    data() {
      return {};
    },
    methods: {
      leftClick() {
        this.$emit("leftClick");
        if (this.autoBack) {
          uni.navigateBack();
        }
      },
      rightClick() {
        this.$emit("rightClick");
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_0$2);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-navbar" }, [
      _ctx.fixed && _ctx.placeholder ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-navbar__placeholder",
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit(_ctx.$u.getPx(_ctx.height) + _ctx.$u.sys().statusBarHeight, "px")
        })
      }, null, 4)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.fixed && "u-navbar--fixed"])
      }, [
        _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, {
          key: 0,
          bgColor: _ctx.bgColor
        }, null, 8, ["bgColor"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["u-navbar__content", [_ctx.border && "u-border-bottom"]]),
          style: vue.normalizeStyle({
            height: _ctx.$u.addUnit(_ctx.height),
            backgroundColor: _ctx.bgColor
          })
        }, [
          vue.createElementVNode("view", {
            class: "u-navbar__content__left",
            "hover-class": "u-navbar__content__left--hover",
            "hover-start-time": "150",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              _ctx.leftIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: _ctx.leftIcon,
                size: _ctx.leftIconSize,
                color: _ctx.leftIconColor
              }, null, 8, ["name", "size", "color"])) : vue.createCommentVNode("v-if", true),
              _ctx.leftText ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                style: vue.normalizeStyle({
                  color: _ctx.leftIconColor
                }),
                class: "u-navbar__content__left__text"
              }, vue.toDisplayString(_ctx.leftText), 5)) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.renderSlot(_ctx.$slots, "center", {}, () => [
            vue.createElementVNode("text", {
              class: "u-line-1 u-navbar__content__title",
              style: vue.normalizeStyle([{
                width: _ctx.$u.addUnit(_ctx.titleWidth)
              }, _ctx.$u.addStyle(_ctx.titleStyle)])
            }, vue.toDisplayString(_ctx.title), 5)
          ], true),
          _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-navbar__content__right",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              _ctx.rightIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: _ctx.rightIcon,
                size: "20"
              }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
              _ctx.rightText ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                class: "u-navbar__content__right__text"
              }, vue.toDisplayString(_ctx.rightText), 1)) : vue.createCommentVNode("v-if", true)
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ], 6)
      ], 2)
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-0e9610be"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-navbar/u-navbar.vue"]]);
  var props$b = {
    props: {
      status: {
        type: String,
        default: props$s.loadmore.status
      },
      bgColor: {
        type: String,
        default: props$s.loadmore.bgColor
      },
      icon: {
        type: Boolean,
        default: props$s.loadmore.icon
      },
      fontSize: {
        type: [String, Number],
        default: props$s.loadmore.fontSize
      },
      iconSize: {
        type: [String, Number],
        default: props$s.loadmore.iconSize
      },
      color: {
        type: String,
        default: props$s.loadmore.color
      },
      loadingIcon: {
        type: String,
        default: props$s.loadmore.loadingIcon
      },
      loadmoreText: {
        type: String,
        default: props$s.loadmore.loadmoreText
      },
      loadingText: {
        type: String,
        default: props$s.loadmore.loadingText
      },
      nomoreText: {
        type: String,
        default: props$s.loadmore.nomoreText
      },
      isDot: {
        type: Boolean,
        default: props$s.loadmore.isDot
      },
      iconColor: {
        type: String,
        default: props$s.loadmore.iconColor
      },
      marginTop: {
        type: [String, Number],
        default: props$s.loadmore.marginTop
      },
      marginBottom: {
        type: [String, Number],
        default: props$s.loadmore.marginBottom
      },
      height: {
        type: [String, Number],
        default: props$s.loadmore.height
      },
      line: {
        type: Boolean,
        default: props$s.loadmore.line
      },
      lineColor: {
        type: String,
        default: props$s.loadmore.lineColor
      },
      dashed: {
        type: Boolean,
        default: props$s.loadmore.dashed
      }
    }
  };
  const _sfc_main$H = {
    name: "u-loadmore",
    mixins: [mpMixin, mixin, props$b],
    data() {
      return {
        dotText: "\u25CF"
      };
    },
    computed: {
      loadTextStyle() {
        return {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          lineHeight: uni.$u.addUnit(this.fontSize),
          backgroundColor: this.bgColor
        };
      },
      showText() {
        let text2 = "";
        if (this.status == "loadmore")
          text2 = this.loadmoreText;
        else if (this.status == "loading")
          text2 = this.loadingText;
        else if (this.status == "nomore" && this.isDot)
          text2 = this.dotText;
        else
          text2 = this.nomoreText;
        return text2;
      }
    },
    methods: {
      loadMore() {
        if (this.status == "loadmore")
          this.$emit("loadmore");
      }
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$3);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-loadmore",
      style: vue.normalizeStyle([
        _ctx.$u.addStyle(_ctx.customStyle),
        {
          backgroundColor: _ctx.bgColor,
          marginBottom: _ctx.$u.addUnit(_ctx.marginBottom),
          marginTop: _ctx.$u.addUnit(_ctx.marginTop),
          height: _ctx.$u.addUnit(_ctx.height)
        }
      ])
    }, [
      _ctx.line ? (vue.openBlock(), vue.createBlock(_component_u_line, {
        key: 0,
        length: "140rpx",
        color: _ctx.lineColor,
        hairline: false,
        dashed: _ctx.dashed
      }, null, 8, ["color", "dashed"])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" \u52A0\u8F7D\u4E2D\u548C\u6CA1\u6709\u66F4\u591A\u7684\u72B6\u6001\u624D\u663E\u793A\u4E24\u8FB9\u7684\u6A2A\u7EBF "),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.status == "loadmore" || _ctx.status == "nomore" ? "u-more" : "", "u-loadmore__content"])
      }, [
        _ctx.status === "loading" && _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-loadmore__content__icon-wrap"
        }, [
          vue.createVNode(_component_u_loading_icon, {
            color: _ctx.iconColor,
            size: _ctx.iconSize,
            mode: _ctx.loadingIcon
          }, null, 8, ["color", "size", "mode"])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" \u5982\u679C\u6CA1\u6709\u66F4\u591A\u7684\u72B6\u6001\u4E0B\uFF0C\u663E\u793A\u5185\u5BB9\u4E3Adot\uFF08\u7C97\u70B9\uFF09\uFF0C\u52A0\u8F7D\u7279\u5B9A\u6837\u5F0F "),
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["u-line-1", [_ctx.status == "nomore" && _ctx.isDot == true ? "u-loadmore__content__dot-text" : "u-loadmore__content__text"]]),
          style: vue.normalizeStyle([$options.loadTextStyle]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.loadMore && $options.loadMore(...args))
        }, vue.toDisplayString($options.showText), 7)
      ], 2),
      _ctx.line ? (vue.openBlock(), vue.createBlock(_component_u_line, {
        key: 1,
        length: "140rpx",
        color: _ctx.lineColor,
        hairline: false,
        dashed: _ctx.dashed
      }, null, 8, ["color", "dashed"])) : vue.createCommentVNode("v-if", true)
    ], 4);
  }
  var __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-949fc7fe"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-loadmore/u-loadmore.vue"]]);
  var props$a = {
    props: {
      icon: {
        type: String,
        default: props$s.empty.icon
      },
      text: {
        type: String,
        default: props$s.empty.text
      },
      textColor: {
        type: String,
        default: props$s.empty.textColor
      },
      textSize: {
        type: [String, Number],
        default: props$s.empty.textSize
      },
      iconColor: {
        type: String,
        default: props$s.empty.iconColor
      },
      iconSize: {
        type: [String, Number],
        default: props$s.empty.iconSize
      },
      mode: {
        type: String,
        default: props$s.empty.mode
      },
      width: {
        type: [String, Number],
        default: props$s.empty.width
      },
      height: {
        type: [String, Number],
        default: props$s.empty.height
      },
      show: {
        type: Boolean,
        default: props$s.empty.show
      },
      marginTop: {
        type: [String, Number],
        default: props$s.empty.marginTop
      }
    }
  };
  const _sfc_main$G = {
    name: "u-empty",
    mixins: [mpMixin, mixin, props$a],
    data() {
      return {
        icons: {
          car: "\u8D2D\u7269\u8F66\u4E3A\u7A7A",
          page: "\u9875\u9762\u4E0D\u5B58\u5728",
          search: "\u6CA1\u6709\u641C\u7D22\u7ED3\u679C",
          address: "\u6CA1\u6709\u6536\u8D27\u5730\u5740",
          wifi: "\u6CA1\u6709WiFi",
          order: "\u8BA2\u5355\u4E3A\u7A7A",
          coupon: "\u6CA1\u6709\u4F18\u60E0\u5238",
          favor: "\u6682\u65E0\u6536\u85CF",
          permission: "\u65E0\u6743\u9650",
          history: "\u65E0\u5386\u53F2\u8BB0\u5F55",
          news: "\u65E0\u65B0\u95FB\u5217\u8868",
          message: "\u6D88\u606F\u5217\u8868\u4E3A\u7A7A",
          list: "\u5217\u8868\u4E3A\u7A7A",
          data: "\u6570\u636E\u4E3A\u7A7A",
          comment: "\u6682\u65E0\u8BC4\u8BBA"
        }
      };
    },
    computed: {
      emptyStyle() {
        const style = {};
        style.marginTop = uni.$u.addUnit(this.marginTop);
        return uni.$u.deepMerge(uni.$u.addStyle(this.customStyle), style);
      },
      textStyle() {
        const style = {};
        style.color = this.textColor;
        style.fontSize = uni.$u.addUnit(this.textSize);
        return style;
      },
      isSrc() {
        return this.icon.indexOf("/") >= 0;
      }
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "u-empty",
      style: vue.normalizeStyle([$options.emptyStyle])
    }, [
      !$options.isSrc ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
        key: 0,
        name: _ctx.mode === "message" ? "chat" : `empty-${_ctx.mode}`,
        size: _ctx.iconSize,
        color: _ctx.iconColor,
        "margin-top": "14"
      }, null, 8, ["name", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
        key: 1,
        style: vue.normalizeStyle({
          width: _ctx.$u.addUnit(_ctx.width),
          height: _ctx.$u.addUnit(_ctx.height)
        }),
        src: _ctx.icon,
        mode: "widthFix"
      }, null, 12, ["src"])),
      vue.createElementVNode("text", {
        class: "u-empty__text",
        style: vue.normalizeStyle([$options.textStyle])
      }, vue.toDisplayString(_ctx.text ? _ctx.text : $data.icons[_ctx.mode]), 5),
      _ctx.$slots.default || _ctx.$slots.$default ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "u-empty__wrap"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-5ebae466"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-empty/u-empty.vue"]]);
  var props$9 = {
    props: {
      label: {
        type: String,
        default: props$s.formItem.label
      },
      prop: {
        type: String,
        default: props$s.formItem.prop
      },
      borderBottom: {
        type: [String, Boolean],
        default: props$s.formItem.borderBottom
      },
      labelWidth: {
        type: [String, Number],
        default: props$s.formItem.labelWidth
      },
      rightIcon: {
        type: String,
        default: props$s.formItem.rightIcon
      },
      leftIcon: {
        type: String,
        default: props$s.formItem.leftIcon
      },
      required: {
        type: Boolean,
        default: props$s.formItem.required
      },
      leftIconStyle: {
        type: [String, Object],
        default: props$s.formItem.leftIconStyle
      }
    }
  };
  const _sfc_main$F = {
    name: "u-form-item",
    mixins: [mpMixin, mixin, props$9],
    data() {
      return {
        message: "",
        parentData: {
          labelPosition: "left",
          labelAlign: "left",
          labelStyle: {},
          labelWidth: 45,
          errorType: "message"
        }
      };
    },
    computed: {
      propsLine() {
        return uni.$u.props.line;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          uni.$u.error("u-form-item\u9700\u8981\u7ED3\u5408u-form\u7EC4\u4EF6\u4F7F\u7528");
        }
      },
      updateParentData() {
        this.getParentData("u-form");
      },
      clearValidate() {
        this.message = null;
      },
      resetField() {
        const value = uni.$u.getProperty(this.parent.originalModel, this.prop);
        uni.$u.setProperty(this.parent.model, this.prop, value);
        this.message = null;
      },
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form-item" }, [
      vue.createElementVNode("view", {
        class: "u-form-item__body",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle), {
          flexDirection: $data.parentData.labelPosition === "left" ? "row" : "column"
        }])
      }, [
        vue.createCommentVNode(' \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u5C06\u4E00\u4E2A\u53C2\u6570\u8BBE\u7F6E\u7A7A\u5B57\u7B26\u4E32\uFF0C\u7ED3\u679C\u4F1A\u53D8\u6210\u5B57\u7B26\u4E32"true" '),
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createCommentVNode(" {{required}} "),
          _ctx.required || _ctx.leftIcon || _ctx.label ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-form-item__body__left",
            style: vue.normalizeStyle({
              width: _ctx.$u.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
              marginBottom: $data.parentData.labelPosition === "left" ? 0 : "5px"
            })
          }, [
            vue.createCommentVNode(" \u4E3A\u4E86\u5757\u5BF9\u9F50 "),
            vue.createElementVNode("view", { class: "u-form-item__body__left__content" }, [
              vue.createCommentVNode(" nvue\u4E0D\u652F\u6301\u4F2A\u5143\u7D20before "),
              _ctx.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "u-form-item__body__left__content__required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              _ctx.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "u-form-item__body__left__content__icon"
              }, [
                vue.createVNode(_component_u_icon, {
                  name: _ctx.leftIcon,
                  "custom-style": _ctx.leftIconStyle
                }, null, 8, ["name", "custom-style"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", {
                class: "u-form-item__body__left__content__label",
                style: vue.normalizeStyle([$data.parentData.labelStyle, {
                  justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
                }])
              }, vue.toDisplayString(_ctx.label), 5)
            ])
          ], 4)) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createElementVNode("view", { class: "u-form-item__body__right" }, [
          vue.createElementVNode("view", { class: "u-form-item__body__right__content" }, [
            vue.createElementVNode("view", { class: "u-form-item__body__right__content__slot" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _ctx.$slots.right ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "item__body__right__content__icon"
            }, [
              vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ], 4),
      vue.renderSlot(_ctx.$slots, "error", {}, () => [
        !!$data.message && $data.parentData.errorType === "message" ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "u-form-item__body__right__message",
          style: vue.normalizeStyle({
            marginLeft: _ctx.$u.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
          })
        }, vue.toDisplayString($data.message), 5)) : vue.createCommentVNode("v-if", true)
      ], true),
      _ctx.borderBottom ? (vue.openBlock(), vue.createBlock(_component_u_line, {
        key: 0,
        color: $data.message && $data.parentData.errorType === "border-bottom" ? _ctx.$u.color.error : $options.propsLine.color,
        customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
      }, null, 8, ["color", "customStyle"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-212734aa"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-form-item/u-form-item.vue"]]);
  var props$8 = {
    props: {
      model: {
        type: Object,
        default: props$s.form.model
      },
      rules: {
        type: [Object, Function, Array],
        default: props$s.form.rules
      },
      errorType: {
        type: String,
        default: props$s.form.errorType
      },
      borderBottom: {
        type: Boolean,
        default: props$s.form.borderBottom
      },
      labelPosition: {
        type: String,
        default: props$s.form.labelPosition
      },
      labelWidth: {
        type: [String, Number],
        default: props$s.form.labelWidth
      },
      labelAlign: {
        type: String,
        default: props$s.form.labelAlign
      },
      labelStyle: {
        type: Object,
        default: props$s.form.labelStyle
      }
    }
  };
  const formatRegExp = /%[sdj%]/g;
  let warning = function warning2() {
  };
  if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning2(type2, errors) {
      if (typeof console !== "undefined" && console.warn) {
        if (errors.every((e) => typeof e === "string")) {
          formatAppLog("warn", "at node_modules/uview-plus/libs/util/async-validator.js:28", type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    const fields = {};
    errors.forEach((error2) => {
      const { field } = error2;
      fields[field] = fields[field] || [];
      fields[field].push(error2);
    });
    return fields;
  }
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    let i2 = 1;
    const f = args[0];
    const len = args.length;
    if (typeof f === "function") {
      return f.apply(null, args.slice(1));
    }
    if (typeof f === "string") {
      let str = String(f).replace(formatRegExp, (x) => {
        if (x === "%%") {
          return "%";
        }
        if (i2 >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i2++]);
          case "%d":
            return Number(args[i2++]);
          case "%j":
            try {
              return JSON.stringify(args[i2++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x;
        }
      });
      for (let arg = args[i2]; i2 < len; arg = args[++i2]) {
        str += ` ${arg}`;
      }
      return str;
    }
    return f;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
  }
  function isEmptyValue(value, type2) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func2, callback) {
    const results = [];
    let total = 0;
    const arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach((a) => {
      func2(a, count);
    });
  }
  function asyncSerialArray(arr, func2, callback) {
    let index2 = 0;
    const arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      const original = index2;
      index2 += 1;
      if (original < arrLength) {
        func2(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    const ret = [];
    Object.keys(objArr).forEach((k) => {
      ret.push.apply(ret, objArr[k]);
    });
    return ret;
  }
  function asyncMap(objArr, option, func2, callback) {
    if (option.first) {
      const _pending = new Promise((resolve, reject) => {
        const next = function next2(errors) {
          callback(errors);
          return errors.length ? reject({
            errors,
            fields: convertFieldsError(errors)
          }) : resolve();
        };
        const flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func2, next);
      });
      _pending.catch((e) => e);
      return _pending;
    }
    let firstFields = option.firstFields || [];
    if (firstFields === true) {
      firstFields = Object.keys(objArr);
    }
    const objArrKeys = Object.keys(objArr);
    const objArrLength = objArrKeys.length;
    let total = 0;
    const results = [];
    const pending = new Promise((resolve, reject) => {
      const next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject({
            errors: results,
            fields: convertFieldsError(results)
          }) : resolve();
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve();
      }
      objArrKeys.forEach((key) => {
        const arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func2, next);
        } else {
          asyncParallelArray(arr, func2, next);
        }
      });
    });
    pending.catch((e) => e);
    return pending;
  }
  function complementError(rule) {
    return function(oe) {
      if (oe && oe.message) {
        oe.field = oe.field || rule.fullField;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge$2(target, source) {
    if (source) {
      for (const s in source) {
        if (source.hasOwnProperty(s)) {
          const value = source[s];
          if (typeof value === "object" && typeof target[s] === "object") {
            target[s] = __spreadValues(__spreadValues({}, target[s]), value);
          } else {
            target[s] = value;
          }
        }
      }
    }
    return target;
  }
  function required(rule, value, source, errors, options, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  }
  function whitespace(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  }
  const pattern = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer2(value) {
      return /^(-)?\d+$/.test(value);
    },
    float: function float(value) {
      return /^(-)?\d+(\.\d+)?$/.test(value);
    },
    array: function array2(value) {
      return Array.isArray(value);
    },
    regexp: function regexp2(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e) {
        return false;
      }
    },
    date: function date2(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
    },
    number: function number2(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof +value === "number";
    },
    object: function object2(value) {
      return typeof value === "object" && !types.array(value);
    },
    method: function method2(value) {
      return typeof value === "function";
    },
    email: function email2(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url: function url2(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern.hex);
    }
  };
  function type(rule, value, source, errors, options) {
    if (rule.required && value === void 0) {
      required(rule, value, source, errors, options);
      return;
    }
    const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    const ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  }
  function range$2(rule, value, source, errors, options) {
    const len = typeof rule.len === "number";
    const min = typeof rule.min === "number";
    const max = typeof rule.max === "number";
    const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    let val = value;
    let key = null;
    const num = typeof value === "number";
    const str = typeof value === "string";
    const arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  }
  const ENUM = "enum";
  function enumerable(rule, value, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (rule[ENUM].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
    }
  }
  function pattern$1(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        const _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  }
  const rules = {
    required,
    whitespace,
    type,
    range: range$2,
    enum: enumerable,
    pattern: pattern$1
  };
  function string$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function method(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function number$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function _boolean(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function regexp(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function integer(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function floatFn(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function array$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "array") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "array");
      if (!isEmptyValue(value, "array")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function object$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  const ENUM$1 = "enum";
  function enumerable$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules[ENUM$1](rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function pattern$2(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function date$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        let dateObject;
        if (typeof value === "number") {
          dateObject = new Date(value);
        } else {
          dateObject = value;
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function required$1(rule, value, callback, source, options) {
    const errors = [];
    const type2 = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options, type2);
    callback(errors);
  }
  function type$1(rule, value, callback, source, options) {
    const ruleType = rule.type;
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function any(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
    }
    callback(errors);
  }
  const validators = {
    string: string$1,
    method,
    number: number$1,
    boolean: _boolean,
    regexp,
    integer,
    float: floatFn,
    array: array$1,
    object: object$1,
    enum: enumerable$1,
    pattern: pattern$2,
    date: date$1,
    url: type$1,
    hex: type$1,
    email: type$1,
    required: required$1,
    any
  };
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone2() {
        const cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  const messages = newMessages();
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  Schema.prototype = {
    messages: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge$2(newMessages(), _messages);
      }
      return this._messages;
    },
    define: function define(rules2) {
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      let z;
      let item2;
      for (z in rules2) {
        if (rules2.hasOwnProperty(z)) {
          item2 = rules2[z];
          this.rules[z] = Array.isArray(item2) ? item2 : [item2];
        }
      }
    },
    validate: function validate(source_, o, oc) {
      const _this = this;
      if (o === void 0) {
        o = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      let source = source_;
      let options = o;
      let callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback();
        }
        return Promise.resolve();
      }
      function complete(results) {
        let i2;
        let errors = [];
        let fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            let _errors;
            errors = (_errors = errors).concat.apply(_errors, e);
          } else {
            errors.push(e);
          }
        }
        for (i2 = 0; i2 < results.length; i2++) {
          add(results[i2]);
        }
        if (!errors.length) {
          errors = null;
          fields = null;
        } else {
          fields = convertFieldsError(errors);
        }
        callback(errors, fields);
      }
      if (options.messages) {
        let messages$1 = this.messages();
        if (messages$1 === messages) {
          messages$1 = newMessages();
        }
        deepMerge$2(messages$1, options.messages);
        options.messages = messages$1;
      } else {
        options.messages = this.messages();
      }
      let arr;
      let value;
      const series = {};
      const keys = options.keys || Object.keys(this.rules);
      keys.forEach((z) => {
        arr = _this.rules[z];
        value = source[z];
        arr.forEach((r) => {
          let rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = __spreadValues({}, source);
            }
            value = source[z] = rule.transform(value);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = __spreadValues({}, rule);
          }
          rule.validator = _this.getValidationMethod(rule);
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this.getType(rule);
          if (!rule.validator) {
            return;
          }
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value,
            source,
            field: z
          });
        });
      });
      const errorFields = {};
      return asyncMap(series, options, (data, doIt) => {
        const { rule } = data;
        let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullfield(key, schema) {
          return __spreadProps(__spreadValues({}, schema), { fullField: `${rule.fullField}.${key}` });
        }
        function cb(e) {
          if (e === void 0) {
            e = [];
          }
          let errors = e;
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          if (!options.suppressWarning && errors.length) {
            Schema.warning("async-validator:", errors);
          }
          if (errors.length && rule.message) {
            errors = [].concat(rule.message);
          }
          errors = errors.map(complementError(rule));
          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }
          if (!deep) {
            doIt(errors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [options.error(rule, format(options.messages.required, rule.field))];
              } else {
                errors = [];
              }
              return doIt(errors);
            }
            let fieldsSchema = {};
            if (rule.defaultField) {
              for (const k in data.value) {
                if (data.value.hasOwnProperty(k)) {
                  fieldsSchema[k] = rule.defaultField;
                }
              }
            }
            fieldsSchema = __spreadValues(__spreadValues({}, fieldsSchema), data.rule.fields);
            for (const f in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f)) {
                const fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
              }
            }
            const schema = new Schema(fieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, (errs) => {
              const finalErrors = [];
              if (errors && errors.length) {
                finalErrors.push.apply(finalErrors, errors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        let res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || `${rule.field} fails`);
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(() => cb(), (e) => cb(e));
        }
      }, (results) => {
        complete(results);
      });
    },
    getType: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    },
    getValidationMethod: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      const keys = Object.keys(rule);
      const messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || false;
    }
  };
  Schema.register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  Schema.warning = warning;
  Schema.messages = messages;
  Schema.warning = function() {
  };
  const _sfc_main$E = {
    name: "u-form",
    mixins: [mpMixin, mixin, props$8],
    provide() {
      return {
        uForm: this
      };
    },
    data() {
      return {
        formRules: {},
        validator: {},
        originalModel: null
      };
    },
    watch: {
      rules: {
        immediate: true,
        handler(n) {
          this.setRules(n);
        }
      },
      propsChange(n) {
        var _a;
        if ((_a = this.children) == null ? void 0 : _a.length) {
          this.children.map((child) => {
            typeof child.updateParentData == "function" && child.updateParentData();
          });
        }
      },
      model: {
        immediate: true,
        handler(n) {
          if (!this.originalModel) {
            this.originalModel = uni.$u.deepClone(n);
          }
        }
      }
    },
    computed: {
      propsChange() {
        return [
          this.errorType,
          this.borderBottom,
          this.labelPosition,
          this.labelWidth,
          this.labelAlign,
          this.labelStyle
        ];
      }
    },
    created() {
      this.children = [];
    },
    methods: {
      setRules(rules2) {
        if (Object.keys(rules2).length === 0)
          return;
        if (Object.keys(this.model).length === 0) {
          uni.$u.error("\u8BBE\u7F6Erules\uFF0Cmodel\u5FC5\u987B\u8BBE\u7F6E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
          return;
        }
        this.formRules = rules2;
        this.validator = new Schema(rules2);
      },
      resetFields() {
        this.resetModel();
      },
      resetModel(obj) {
        this.children.map((child) => {
          const prop = child == null ? void 0 : child.prop;
          const value = uni.$u.getProperty(this.originalModel, prop);
          uni.$u.setProperty(this.model, prop, value);
        });
      },
      clearValidate(props2) {
        props2 = [].concat(props2);
        this.children.map((child) => {
          if (props2[0] === void 0 || props2.includes(child.prop)) {
            child.message = null;
          }
        });
      },
      async validateField(value, callback, event2 = null) {
        this.$nextTick(() => {
          const errorsRes = [];
          value = [].concat(value);
          this.children.map((child) => {
            const childErrors = [];
            if (value.includes(child.prop)) {
              const propertyVal = uni.$u.getProperty(this.model, child.prop);
              const propertyChain = child.prop.split(".");
              const propertyName = propertyChain[propertyChain.length - 1];
              const rule = this.formRules[child.prop];
              if (!rule)
                return;
              const rules2 = [].concat(rule);
              for (let i2 = 0; i2 < rules2.length; i2++) {
                const ruleItem = rules2[i2];
                const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
                if (event2 && !trigger.includes(event2))
                  continue;
                const validator = new Schema({
                  [propertyName]: ruleItem
                });
                validator.validate({
                  [propertyName]: propertyVal
                }, (errors, fields) => {
                  var _a, _b;
                  if (uni.$u.test.array(errors)) {
                    errorsRes.push(...errors);
                    childErrors.push(...errors);
                  }
                  child.message = (_b = (_a = childErrors[0]) == null ? void 0 : _a.message) != null ? _b : null;
                });
              }
            }
          });
          typeof callback === "function" && callback(errorsRes);
        });
      },
      validate(callback) {
        if (Object.keys(this.formRules).length === 0) {
          uni.$u.error("\u672A\u8BBE\u7F6Erules\uFF0C\u8BF7\u770B\u6587\u6863\u8BF4\u660E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
          return;
        }
        return new Promise((resolve, reject) => {
          this.$nextTick(() => {
            const formItemProps = this.children.map((item2) => item2.prop);
            this.validateField(formItemProps, (errors) => {
              if (errors.length) {
                this.errorType === "toast" && uni.$u.toast(errors[0].message);
                reject(errors);
              } else {
                resolve(true);
              }
            });
          });
        });
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var uvForm = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-form/u-form.vue"]]);
  const _sfc_main$D = {
    name: "u--form",
    mixins: [mpMixin, props$8, mixin],
    components: {
      uvForm
    },
    created() {
      this.children = [];
    },
    methods: {
      setRules(rules2) {
        this.$refs.uForm.setRules(rules2);
      },
      validate() {
        return this.$refs.uForm.validate();
      },
      validateField(value, callback) {
        return this.$refs.uForm.validateField(value, callback);
      },
      resetFields() {
        return this.$refs.uForm.resetFields();
      },
      clearValidate(props2) {
        return this.$refs.uForm.clearValidate(props2);
      },
      setMpData() {
        this.$refs.uForm.children = this.children;
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvForm = vue.resolveComponent("uvForm");
    return vue.openBlock(), vue.createBlock(_component_uvForm, {
      ref: "uForm",
      model: _ctx.model,
      rules: _ctx.rules,
      errorType: _ctx.errorType,
      borderBottom: _ctx.borderBottom,
      labelPosition: _ctx.labelPosition,
      labelWidth: _ctx.labelWidth,
      labelAlign: _ctx.labelAlign,
      labelStyle: _ctx.labelStyle,
      customStyle: _ctx.customStyle
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["model", "rules", "errorType", "borderBottom", "labelPosition", "labelWidth", "labelAlign", "labelStyle", "customStyle"]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u--form/u--form.vue"]]);
  const _sfc_main$C = {
    data() {
      return {
        showApiModal: false,
        showFlowModal: false,
        showOkModal: false,
        showStopModal: false,
        defaultCoin: "\u706B\u5E01",
        isShowCoin: false,
        tabs: [{
          name: "\u73FE\u8CA8\u4EA4\u6613"
        }, {
          name: "\u5408\u7D04\u4EA4\u6613"
        }, {
          name: "\u8DDF\u55AE\u4EA4\u6613"
        }],
        swiperheight: 500,
        tabIndex: 0,
        form: {
          flow: "1"
        },
        rules: {
          "flow": {
            type: "string",
            required: true,
            message: "\u8ACB\u8F38\u5165\u8DDF\u5355\u5929\u6570",
            trigger: ["blur", "change"]
          }
        },
        coinList: [
          {
            name: "\u706B\u5E01",
            isActive: true
          },
          {
            name: "BCH",
            isActive: false
          },
          {
            name: "BTH",
            isActive: false
          }
        ],
        netTitleList: ["\u5E63\u7A2E", "\u6301\u5009\u8CC7\u7522USDT", "\u50F9\u683CUSDT"],
        tabslist: [
          {
            name: "\u5E63\u7A2E",
            status: "loadmore",
            loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
            loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
            nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86",
            list: [
              {
                type: "BTC",
                assets: "123456.1234",
                price: "1234.12",
                isType: 1
              },
              {
                type: "ETH",
                assets: "83456.1234",
                price: "1234.12",
                isType: 2
              },
              {
                type: "HT",
                assets: "53456.1234",
                price: "1234.12",
                isType: 3
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "HT",
                assets: "53456.1234",
                price: "1234.12"
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "HT",
                assets: "53456.1234",
                price: "1234.12"
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "HT",
                assets: "53456.1234",
                price: "1234.12"
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE122121",
                assets: "23456.1234",
                price: "1234.12"
              }
            ]
          },
          {
            name: "\u6301\u5009\u8CC7\u7522USDT",
            status: "nomore",
            loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
            loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
            nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86",
            list: [
              {
                type: "BTC",
                assets: "123456.1234",
                price: "1234.12",
                isType: 1
              },
              {
                type: "ETH",
                assets: "83456.1234",
                price: "1234.12",
                isType: 2
              },
              {
                type: "HT",
                assets: "53456.1234",
                price: "1234.12",
                isType: 3
              },
              {
                type: "BTC",
                assets: "123456.1234",
                price: "1234.12"
              },
              {
                type: "ETH",
                assets: "83456.1234",
                price: "1234.12"
              },
              {
                type: "HT",
                assets: "53456.1234",
                price: "1234.12"
              },
              {
                type: "XRP",
                assets: "23456.1234",
                price: "1234.12"
              },
              {
                type: "DOGE",
                assets: "23456.1234",
                price: "1234.12"
              }
            ]
          },
          {
            name: "\u50F9\u683CUSDT",
            status: "nomore",
            loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
            loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
            nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86",
            list: [
              {
                name: "\u7434\u59D0",
                isStop: true,
                winning: "90%"
              },
              {
                name: "\u9CB2\u9E4F\u793E",
                isStop: false,
                winning: "80%"
              }
            ]
          }
        ]
      };
    },
    onLoad() {
    },
    methods: {
      showAuth() {
        if (this.defaultCoin === "\u5E01\u5B89") {
          this.showApiModal = true;
        }
      },
      confirmAPI() {
        navigate("/pages/home/apiAuth/apiAuth");
      },
      selectCoin(obj) {
        this.coinList.forEach((item2) => {
          if (item2.name === obj.name) {
            item2.isActive = true;
            this.defaultCoin = item2.name;
          } else {
            item2.isActive = false;
          }
        });
        this.isShowCoin = false;
      },
      showCoin() {
        this.isShowCoin = !this.isShowCoin;
      },
      navToSearch() {
        navigate("/pages/trade/search/search");
      },
      navToSetStrategy(item2) {
        if (item2 && !item2.isType) {
          navigate(`/pages/trade/setStrategy/setStrategy?type=${this.tabIndex + 1}`);
        } else {
          const url2 = this.tabIndex === 0 ? "/pages/trade/position/position" : "/pages/trade/positionContract/positionContract";
          navigate(`${url2}`);
        }
      },
      loadmore(index2) {
        this.tabslist[index2].status = "loading";
        const obj = {
          type: "BTC",
          assets: "123456.1234",
          price: "1234.12"
        };
        if (this.tabslist[index2].list.length > 30) {
          this.tabslist[index2].status = "nomore";
          return;
        }
        setTimeout(() => {
          const list2 = [];
          for (let i2 = 0; i2 < 10; i2++) {
            list2.push(obj);
          }
          this.tabslist[index2].list = [...this.tabslist[index2].list, ...list2];
        }, 1e3);
      },
      tabClick(e) {
        this.tabIndex = e.index;
      },
      tabChange(e) {
        this.tabIndex = e.detail.current;
      },
      flow() {
        this.showFlowModal = true;
      },
      stop() {
        this.showStopModal = true;
      },
      confirmFlow() {
        this.showOkModal = true;
        this.showFlowModal = false;
      },
      confirmOk() {
        this.showOkModal = false;
      },
      stopFlow() {
        this.showStopModal = false;
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_2$4);
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$2);
    const _component_u__form = resolveEasycom(vue.resolveDynamicComponent("u--form"), __easycom_3);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" \u4EA4\u6613 "),
      vue.createElementVNode("view", { class: "trade page" }, [
        vue.createCommentVNode(" \u6388\u6743 "),
        $data.defaultCoin === "\u5E01\u5B89" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "t-modal",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.showAuth && $options.showAuth(...args), ["stop"]))
        })) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" \u5BFC\u822A "),
        vue.createVNode(_component_u_navbar, {
          fixed: false,
          height: "192rpx",
          leftIcon: "",
          title: ""
        }, {
          left: vue.withCtx(() => [
            vue.createCommentVNode(" \u67E5\u8BE2 "),
            vue.createElementVNode("view", { class: "t-search" }, [
              vue.createElementVNode("view", {
                class: "ts-left",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.showCoin && $options.showCoin(...args))
              }, [
                vue.createElementVNode("view", { class: "tsl-text" }, vue.toDisplayString($data.defaultCoin), 1),
                vue.createVNode(_component_u_icon, {
                  color: "#222222",
                  name: "arrow-down"
                }),
                vue.withDirectives(vue.createElementVNode("view", { class: "tsf-list animated fadeIn" }, [
                  vue.createVNode(_component_u_icon, {
                    class: "tsfl-icon",
                    color: "rgba(255, 255, 255, 0.8)",
                    name: "arrow-up-fill"
                  }),
                  vue.createElementVNode("view", { class: "tsfl-ul" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.coinList, (item2) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        onClick: vue.withModifiers(($event) => $options.selectCoin(item2), ["stop"]),
                        class: vue.normalizeClass([item2.isActive ? "is-active" : "", "tsfl-li"])
                      }, vue.toDisplayString(item2.name), 11, ["onClick"]);
                    }), 256))
                  ])
                ], 512), [
                  [vue.vShow, $data.isShowCoin]
                ])
              ]),
              vue.createElementVNode("view", {
                class: "ts-right",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.navToSearch && $options.navToSearch(...args))
              }, [
                vue.createVNode(_component_u__input, {
                  disabled: true,
                  class: "tr-input",
                  border: "none",
                  color: "#222222",
                  prefixIcon: "search",
                  prefixIconStyle: "font-size: 40rpx;color: #222222;padding-left: 20rpx"
                })
              ])
            ]),
            vue.createCommentVNode(" tab "),
            vue.createElementVNode("view", { class: "t-tab" }, [
              vue.createVNode(_component_u_tabs, {
                onClick: $options.tabClick,
                current: $data.tabIndex,
                list: $data.tabs,
                lineWidth: "80px",
                lineHeight: "7px",
                activeStyle: {
                  color: "#222222",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transform: "scale(1.2)"
                },
                inactiveStyle: {
                  color: "#222222",
                  fontSize: "16px",
                  transform: "scale(1)"
                },
                itemStyle: "height: 51rpx;"
              }, null, 8, ["onClick", "current", "list", "activeStyle", "inactiveStyle"]),
              vue.createElementVNode("view", {
                class: "t-Position",
                onClick: _cache[3] || (_cache[3] = ($event) => $options.navToSetStrategy())
              }, [
                vue.createVNode(_component_u_image, {
                  width: "34rpx",
                  height: "34.1rpx",
                  src: "/static/home/remark.png"
                }),
                vue.createElementVNode("text", { class: "t-text" }, "\u6301\u5009")
              ])
            ])
          ]),
          _: 1
        }),
        vue.createCommentVNode(" list "),
        vue.createElementVNode("swiper", {
          class: "t-swper",
          current: $data.tabIndex,
          onChange: _cache[6] || (_cache[6] = (...args) => $options.tabChange && $options.tabChange(...args))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabslist, (item2, index2) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              class: "net-list",
              key: index2
            }, [
              vue.withDirectives(vue.createElementVNode("view", { class: "cnl-title" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.netTitleList, (tip) => {
                  return vue.openBlock(), vue.createElementBlock("text", { class: "cnlt-text" }, vue.toDisplayString(tip), 1);
                }), 256))
              ], 512), [
                [vue.vShow, $data.tabIndex === 0 || $data.tabIndex === 1]
              ]),
              vue.withDirectives(vue.createElementVNode("view", { class: "sw-title" }, [
                vue.createElementVNode("view", { class: "swt-text" }, "\u7528\u6237\u540D"),
                vue.createElementVNode("view", { class: "swt-text" }, [
                  vue.createElementVNode("view", { class: "swtt-left" }, "\u80DC\u7387"),
                  vue.createElementVNode("view", { class: "swtt-right" }, [
                    vue.createVNode(_component_u_image, {
                      width: "31rpx",
                      height: "31rpx",
                      src: "/static/trade/tip.png"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "swt-text" }, "\u64CD\u4F5C")
              ], 512), [
                [vue.vShow, $data.tabIndex === 2]
              ]),
              vue.createElementVNode("scroll-view", {
                class: "ts-scroll",
                "scroll-y": "",
                onScrolltolower: ($event) => $options.loadmore(index2)
              }, [
                vue.createCommentVNode(" \u5217\u88681 "),
                vue.withDirectives(vue.createElementVNode("view", { class: "cnl-content" }, [
                  item2.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item2.list, (citem) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "cnlc-data",
                        onClick: ($event) => $options.navToSetStrategy(citem)
                      }, [
                        vue.createElementVNode("view", { class: "cnlcd-tip" }, [
                          vue.createElementVNode("view", { class: "cnlcdt-left" }, vue.toDisplayString(citem.type), 1),
                          citem.isType === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 0,
                            class: "cnlcdt-right isType1"
                          }, "\u4FDD\u5B88")) : vue.createCommentVNode("v-if", true),
                          citem.isType === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 1,
                            class: "cnlcdt-right isType2"
                          }, "\u5DF2\u505C\u6B62")) : vue.createCommentVNode("v-if", true),
                          citem.isType === 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 2,
                            class: "cnlcdt-right isType1"
                          }, "\u7A33\u5065")) : vue.createCommentVNode("v-if", true)
                        ]),
                        vue.createElementVNode("text", null, vue.toDisplayString(citem.assets), 1),
                        vue.createElementVNode("text", null, vue.toDisplayString(citem.price), 1)
                      ], 8, ["onClick"]);
                    }), 256)),
                    vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
                    vue.createVNode(_component_u_loadmore, {
                      status: item2.status,
                      "loading-text": item2.loadingText,
                      "loadmore-text": item2.loadmoreText,
                      "nomore-text": item2.nomoreText
                    }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
                  ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
                    vue.createVNode(_component_u_empty, {
                      mode: "data",
                      width: "100",
                      height: "100",
                      icon: "/static/home/no-data.png"
                    })
                  ], 64))
                ], 512), [
                  [vue.vShow, $data.tabIndex === 0 || $data.tabIndex === 1]
                ]),
                vue.createCommentVNode(" \u8DDF\u5355\u4EA4\u6613 "),
                vue.withDirectives(vue.createElementVNode("view", { class: "tw-documentary" }, [
                  item2.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item2.list, (citem) => {
                      return vue.openBlock(), vue.createElementBlock("view", { class: "twc-ul" }, [
                        vue.createElementVNode("view", { class: "twclb-li" }, vue.toDisplayString(citem.name), 1),
                        vue.createElementVNode("view", { class: "twclb-li" }, vue.toDisplayString(citem.winning), 1),
                        citem.isStop ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          onClick: _cache[4] || (_cache[4] = (...args) => $options.stop && $options.stop(...args)),
                          class: "twclb-li twclb-stop"
                        }, "\u7EC8\u6B62")) : (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          onClick: _cache[5] || (_cache[5] = (...args) => $options.flow && $options.flow(...args)),
                          class: "twclb-li twclb-flow"
                        }, "\u8DDF\u5355"))
                      ]);
                    }), 256)),
                    vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
                    vue.createVNode(_component_u_loadmore, {
                      status: item2.status,
                      "loading-text": item2.loadingText,
                      "loadmore-text": item2.loadmoreText,
                      "nomore-text": item2.nomoreText
                    }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
                  ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
                    vue.createVNode(_component_u_empty, {
                      mode: "data",
                      width: "100",
                      height: "100",
                      icon: "/static/home/no-data.png"
                    })
                  ], 64))
                ], 512), [
                  [vue.vShow, $data.tabIndex === 2]
                ])
              ], 40, ["onScrolltolower"])
            ]);
          }), 128))
        ], 40, ["current"]),
        vue.createCommentVNode(" API\u6388\u6743 "),
        vue.createVNode(_component_u_modal, {
          cancelText: "\u53D6\u6D88",
          onCancel: _cache[8] || (_cache[8] = ($event) => $data.showApiModal = false),
          showCancelButton: "",
          closeOnClickOverlay: true,
          onClose: _cache[9] || (_cache[9] = ($event) => $data.showApiModal = false),
          confirmText: "API\u6388\u6B0A",
          onConfirm: $options.confirmAPI,
          tconfirmColor: "#FFB119",
          cancelColor: "#333333",
          show: $data.showApiModal,
          title: "API\u6388\u6B0A"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "slot-content" }, [
              vue.createElementVNode("view", {
                class: "no-close",
                onClick: _cache[7] || (_cache[7] = ($event) => _ctx.showActiveModal = false)
              }, [
                vue.createVNode(_component_u__image, {
                  width: "39rpx",
                  height: "39rpx",
                  src: "/static/home/close.png"
                })
              ]),
              vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
                vue.createElementVNode("view", { class: "tbc-title" }, "\u8ACB\u5148\u6388\u6B0AAPI\u5F8C\uFF0C\u624D\u53EF\u4EE5\u7BE9\u9078\u4EA4\u6613\u6240")
              ])
            ])
          ]),
          _: 1
        }, 8, ["onConfirm", "show"]),
        vue.createCommentVNode(" \u786E\u5B9A\u8DDF\u5355 "),
        vue.createVNode(_component_u_modal, {
          cancelText: "\u53D6\u6D88",
          onCancel: _cache[12] || (_cache[12] = ($event) => $data.showFlowModal = false),
          showCancelButton: "",
          closeOnClickOverlay: true,
          onClose: _cache[13] || (_cache[13] = ($event) => $data.showFlowModal = false),
          confirmText: "\u786E\u5B9A",
          onConfirm: $options.confirmFlow,
          confirmColor: "#FFB119",
          cancelColor: "#333333",
          show: $data.showFlowModal,
          title: "\u786E\u5B9A\u8DDF\u5355"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "slot-content" }, [
              vue.createElementVNode("view", {
                class: "no-close",
                onClick: _cache[10] || (_cache[10] = ($event) => $data.showFlowModal = false)
              }, [
                vue.createVNode(_component_u__image, {
                  width: "39rpx",
                  height: "39rpx",
                  src: "/static/home/close.png"
                })
              ]),
              vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
                vue.createElementVNode("view", { class: "tm-top" }, [
                  vue.createVNode(_component_u__form, {
                    labelPosition: "left",
                    model: $data.form,
                    rules: $data.rules,
                    ref: "form"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_u_form_item, {
                        labelWidth: "150rpx",
                        label: "\u8DDF\u5355\u5929\u6570",
                        prop: "flow"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_u__input, {
                            disabled: "",
                            border: "surround",
                            customStyle: "padding-right: 50rpx",
                            inputAlign: "left",
                            modelValue: $data.form.flow,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.form.flow = $event),
                            placeholder: "\u8ACB\u8F38\u5165\u8DDF\u5355\u5929\u6570"
                          }, null, 8, ["modelValue"]),
                          vue.createElementVNode("view", { class: "fix-right" }, "\u5929")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model", "rules"])
                ]),
                vue.createElementVNode("view", { class: "tm-bottom" }, [
                  vue.createVNode(_component_u_icon, {
                    color: "rgba(255, 87, 51, 1)",
                    name: "info-circle-fill"
                  }),
                  vue.createElementVNode("view", {
                    size: "16",
                    class: "tmb-text"
                  }, "\u8DDF\u5355\u8BE5\u7528\u6237\u4F1A\u6536\u53D6XXX\u8BA2\u9605\u8D39")
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["onConfirm", "show"]),
        vue.createCommentVNode(" \u7EC8\u6B62 "),
        vue.createVNode(_component_u_modal, {
          cancelText: "\u53D6\u6D88",
          onCancel: _cache[15] || (_cache[15] = ($event) => $data.showStopModal = false),
          showCancelButton: "",
          closeOnClickOverlay: true,
          onClose: _cache[16] || (_cache[16] = ($event) => $data.showStopModal = false),
          confirmText: "\u786E\u5B9A",
          onConfirm: $options.stopFlow,
          confirmColor: "#FFB119",
          cancelColor: "#333333",
          show: $data.showStopModal,
          title: "\u7EC8\u6B62\u8DDF\u5355"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "slot-content" }, [
              vue.createElementVNode("view", {
                class: "no-close",
                onClick: _cache[14] || (_cache[14] = ($event) => $data.showStopModal = false)
              }, [
                vue.createVNode(_component_u__image, {
                  width: "39rpx",
                  height: "39rpx",
                  src: "/static/home/close.png"
                })
              ]),
              vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, " \u786E\u5B9A\u7EC8\u6B62\u8DDF\u5355\uFF1F ")
            ])
          ]),
          _: 1
        }, 8, ["onConfirm", "show"]),
        vue.createCommentVNode(" \u64CD\u4F5C\u6210\u529F "),
        vue.createVNode(_component_u_modal, {
          class: "noline",
          closeOnClickOverlay: true,
          onClose: _cache[18] || (_cache[18] = ($event) => $data.showOkModal = false),
          confirmText: "\u597D\u7684",
          onConfirm: $options.confirmOk,
          confirmColor: "#FFB119",
          cancelColor: "#333333",
          show: $data.showOkModal
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "slot-content" }, [
              vue.createElementVNode("view", {
                class: "no-close",
                onClick: _cache[17] || (_cache[17] = ($event) => $data.showOkModal = false)
              }, [
                vue.createVNode(_component_u__image, {
                  width: "39rpx",
                  height: "39rpx",
                  src: "/static/home/close.png"
                })
              ]),
              vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
                vue.createVNode(_component_u__image, {
                  width: "115rpx",
                  height: "115rpx",
                  src: "/static/trade/success.png"
                }),
                vue.createElementVNode("view", { style: { "padding-top": "45rpx" } }, "\u64CD\u4F5C\u6210\u529F")
              ])
            ])
          ]),
          _: 1
        }, 8, ["onConfirm", "show"])
      ])
    ], 2112);
  }
  var PagesTradeTrade = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/trade.vue"]]);
  const _sfc_main$B = {
    data() {
      return {
        bgColor: "rgba(0, 0, 0, 0)",
        assetsInfo: {
          erc20: "123456.1234",
          tex: "123456.1234",
          contractUSDT: 0,
          address: "",
          secretKey: "WERT SDFG RTYU HJKL"
        },
        showActiveModal: false
      };
    },
    onUnload() {
    },
    onShow(e) {
      try {
        const { address } = uni.getStorageSync("userInfo");
        if (address) {
          this.assetsInfo.address = address;
          try {
            uni.removeStorageSync("toAssets");
          } catch (e2) {
            formatAppLog("log", "at pages/assets/assets.vue:102", "toAssets", e2);
          }
        }
      } catch (e2) {
        formatAppLog("log", "at pages/assets/assets.vue:107", "toAssets", e2);
      }
    },
    methods: {
      copy() {
        copy(this.value);
      },
      addUSDT(type2) {
        uni.navigateTo({
          url: `/pages/home/addUSDT/addUSDT?type=${type2}`
        });
      },
      navigatorTo() {
        uni.navigateTo({
          url: `/pages/assets/transactionDetails/transactionDetails`
        });
      },
      activation() {
        this.assetsInfo.address = "asfasde2eqwfefsdvasfasde2eqwfefsdvasfasde2eqwfefsdv";
        this.showActiveModal = true;
      },
      copyKey() {
        copy(this.assetsInfo.secretKey);
      },
      navtoWithdrawal(type2) {
        uni.navigateTo({
          url: `/pages/assets/withdrawal/withdrawal?type=${type2}`
        });
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "assets" }, [
      vue.createVNode(_component_u_navbar, {
        bgColor: $data.bgColor,
        fixed: false,
        height: "92rpx",
        leftIcon: "",
        title: ""
      }, {
        left: vue.withCtx(() => [
          vue.createCommentVNode(" \u67E5\u8BE2 "),
          vue.createElementVNode("view", { class: "a-title" }, " \u8CC7\u7522 ")
        ]),
        right: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "p-posi",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigatorTo && $options.navigatorTo(...args))
          }, [
            vue.createVNode(_component_u_image, {
              width: "48rpx",
              height: "48rpx",
              src: "/static/trade/position.png"
            }),
            vue.createElementVNode("text", { class: "pp-text" }, "\u4EA4\u6613\u660E\u7EC6")
          ])
        ]),
        _: 1
      }, 8, ["bgColor"]),
      vue.createCommentVNode(" \u5185\u5BB9 "),
      vue.createElementVNode("view", { class: "a-content" }, [
        vue.createElementVNode("view", { class: "ac-li ac-bg1" }, [
          vue.createElementVNode("view", { class: "acl-title" }, "ERC20 \u53EF\u7528\u4F59\u984DUSDT"),
          vue.createElementVNode("view", { class: "acl-amount" }, vue.toDisplayString($data.assetsInfo.erc20), 1),
          vue.createElementVNode("view", { class: "acl-btn" }, [
            vue.createElementVNode("view", {
              class: "aclb-btn",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.addUSDT(1))
            }, "\u6DFB\u52A0\u4FDD\u8B49\u91D1"),
            vue.createElementVNode("view", {
              class: "aclb-btn aclb-bg-none",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.navtoWithdrawal(1))
            }, "\u63D0\u73FE\u4FDD\u8B49\u91D1")
          ])
        ]),
        vue.createElementVNode("view", { class: "ac-li ac-bg2" }, [
          vue.createElementVNode("view", { class: "acl-title" }, "TRX \u53EF\u7528\u4F59\u984DUSDT"),
          vue.createElementVNode("view", { class: "acl-amount" }, vue.toDisplayString($data.assetsInfo.tex), 1),
          vue.createElementVNode("view", { class: "acl-btn" }, [
            vue.createElementVNode("view", {
              class: "aclb-btn",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.addUSDT(2))
            }, "\u6DFB\u52A0\u4FDD\u8B49\u91D1"),
            vue.createElementVNode("view", {
              class: "aclb-btn aclb-bg-none",
              onClick: _cache[4] || (_cache[4] = ($event) => $options.navtoWithdrawal(2))
            }, "\u63D0\u73FE\u4FDD\u8B49\u91D1")
          ])
        ]),
        vue.createElementVNode("view", { class: "ac-li ac-bg3" }, [
          vue.createElementVNode("view", { class: "acl-title" }, "\u5408\u7D04\u53EF\u7528\u4F59\u984DUSDT"),
          vue.createElementVNode("view", { class: "acl-amount" }, vue.toDisplayString($data.assetsInfo.contractUSDT), 1),
          vue.withDirectives(vue.createElementVNode("view", { class: "acl-address" }, [
            vue.createElementVNode("view", { class: "acla-left" }, [
              vue.createElementVNode("view", { class: "aclal-top" }, "\u5408\u7EA6\u5730\u5740"),
              vue.createElementVNode("text", { class: "aclal-bottom" }, vue.toDisplayString($data.assetsInfo.address), 1)
            ]),
            vue.createElementVNode("view", {
              class: "acla-img",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.copy && $options.copy(...args))
            }, [
              vue.createVNode(_component_u__image, {
                width: "40rpx",
                height: "40rpx",
                src: "/static/home/copy.png"
              })
            ])
          ], 512), [
            [vue.vShow, $data.assetsInfo.address]
          ]),
          vue.createElementVNode("view", {
            class: "acl-btn",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.activation && $options.activation(...args))
          }, [
            vue.createElementVNode("view", { class: "aclb-btn aclb-one" }, "\u6FC0\u6D3B")
          ])
        ])
      ]),
      vue.createCommentVNode(" \u6FC0\u6D3B\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        class: "noline",
        closeOnClickOverlay: true,
        onClose: _cache[9] || (_cache[9] = ($event) => $data.showActiveModal = false),
        confirmText: "\u786E\u5B9A",
        onConfirm: _cache[10] || (_cache[10] = ($event) => $data.showActiveModal = false),
        title: "\u6FC0\u6D3B",
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showActiveModal
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[7] || (_cache[7] = ($event) => $data.showActiveModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createElementVNode("view", { class: "tbc-title" }, "\u79C1\u94A5\u4EC5\u5C55\u793A\u4E00\u6B21Mircat\u4E0D\u4F1A\u5E2E\u7528\u6237\u4FDD\u5B58\u8BF7\u8C28\u614E\u4FDD\u7BA1"),
              vue.createElementVNode("view", { class: "tbc-content" }, [
                vue.createElementVNode("view", { class: "tbcc-key" }, vue.toDisplayString($data.assetsInfo.secretKey), 1),
                vue.createElementVNode("view", {
                  class: "auca-img",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.copyKey && $options.copyKey(...args))
                }, [
                  vue.createVNode(_component_u__image, {
                    width: "31rpx",
                    height: "31rpx",
                    src: "/static/home/copy.png"
                  })
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ]);
  }
  var PagesAssetsAssets = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/assets/assets.vue"]]);
  const _sfc_main$A = {
    data() {
      return {
        userInfo: {
          photo: "/static/userImg/default-photo.png",
          name: "\u8D75\u5927\u5E74",
          talk: "\u4ED6\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"
        }
      };
    },
    methods: {
      navigatorTo(name, from) {
        from = from ? from : "my";
        uni.navigateTo({
          url: `/pages/${from}/${name}/${name}`
        });
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "my" }, [
        vue.createVNode(_component_u_navbar, {
          bgColor: "rgba(0, 0, 0, 0)",
          fixed: false,
          height: "212rpx",
          leftIcon: "",
          title: ""
        }, {
          left: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "m-left" }, [
              vue.createElementVNode("view", { class: "ml-box" }, [
                vue.createElementVNode("image", {
                  class: "mlb-img",
                  src: $data.userInfo.photo,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ]),
              vue.createCommentVNode(' <u-image class="ml-img" width="128rpx" height="128rpx" :src="userInfo.photo"></u-image> '),
              vue.createElementVNode("view", { class: "ml-info" }, [
                vue.createElementVNode("view", { class: "mli-name" }, vue.toDisplayString($data.userInfo.name), 1),
                vue.createElementVNode("view", { class: "mli-talk" }, vue.toDisplayString($data.userInfo.talk), 1)
              ])
            ])
          ]),
          right: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: "m-edit",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.navigatorTo("editUser"))
            }, "\u7F16\u8F91\u8D44\u6599")
          ]),
          _: 1
        }),
        vue.createCommentVNode(" \u9080\u8BF7\u597D\u53CB "),
        vue.createElementVNode("view", {
          class: "mc-interview",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.navigatorTo("inviteFriends"))
        }, [
          vue.createVNode(_component_u_image, {
            width: "750rpx",
            height: "210rpx",
            src: "/static/userImg/interview.png"
          }),
          vue.createElementVNode("view", { class: "mci-btn" }, "\u7ACB\u5373\u9080\u8BF7")
        ]),
        vue.createCommentVNode(" \u5185\u5BB9 "),
        vue.createElementVNode("view", { class: "m-content" }, [
          vue.createCommentVNode(" \u64CD\u4F5C "),
          vue.createElementVNode("view", { class: "mc-option" }, [
            vue.createElementVNode("view", {
              class: "mco-li",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.navigatorTo("mySubscribe"))
            }, [
              vue.createElementVNode("view", { class: "mcol-img" }, [
                vue.createVNode(_component_u_image, {
                  width: "104rpx",
                  height: "104rpx",
                  src: "/static/userImg/star.png"
                })
              ]),
              vue.createElementVNode("view", { class: "mcol-text" }, "\u6211\u7684\u8BA2\u9605")
            ]),
            vue.createElementVNode("view", {
              class: "mco-li",
              style: { "padding-top": "16rpx" },
              onClick: _cache[3] || (_cache[3] = ($event) => $options.navigatorTo("mybillingCenter"))
            }, [
              vue.createElementVNode("view", { class: "mcol-img" }, [
                vue.createVNode(_component_u_image, {
                  width: "77rpx",
                  height: "77rpx",
                  src: "/static/userImg/bill-center.png"
                })
              ]),
              vue.createElementVNode("view", { class: "mcol-text" }, "\u8D26\u5355\u4E2D\u5FC3")
            ]),
            vue.createElementVNode("view", {
              class: "mco-li",
              style: { "padding-top": "14rpx" },
              onClick: _cache[4] || (_cache[4] = ($event) => $options.navigatorTo("muOpertaionRecord"))
            }, [
              vue.createElementVNode("view", { class: "mcol-img" }, [
                vue.createVNode(_component_u_image, {
                  width: "76rpx",
                  height: "82rpx",
                  src: "/static/userImg/option.png"
                })
              ]),
              vue.createElementVNode("view", { class: "mcol-text" }, "\u64CD\u4F5C\u8BB0\u5F55")
            ]),
            vue.createElementVNode("view", {
              class: "mco-li",
              style: { "padding-top": "21rpx" },
              onClick: _cache[5] || (_cache[5] = ($event) => $options.navigatorTo("apiAuth", "home"))
            }, [
              vue.createElementVNode("view", { class: "mcol-img" }, [
                vue.createVNode(_component_u_image, {
                  width: "77rpx",
                  height: "77rpx",
                  src: "/static/userImg/api-auth.png"
                })
              ]),
              vue.createElementVNode("view", { class: "mcol-text" }, "API\u6388\u6743")
            ])
          ]),
          vue.createCommentVNode(" \u5176\u5B83\u529F\u80FD "),
          vue.createElementVNode("view", { class: "mc-others" }, [
            vue.createElementVNode("view", { class: "mco-title" }, "\u5176\u4ED6\u529F\u80FD"),
            vue.createElementVNode("view", { class: "mco-ul" }, [
              vue.createElementVNode("view", {
                class: "mcou-li",
                onClick: _cache[6] || (_cache[6] = ($event) => $options.navigatorTo("userFadeback"))
              }, [
                vue.createElementVNode("view", { class: "mcoul-img" }, [
                  vue.createVNode(_component_u_image, {
                    width: "58rpx",
                    height: "58rpx",
                    src: "/static/userImg/user-feedback.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "mcoul-text" }, "\u7528\u6237\u53CD\u9988")
              ]),
              vue.createElementVNode("view", {
                class: "mcou-li",
                onClick: _cache[7] || (_cache[7] = ($event) => $options.navigatorTo("messageCenter"))
              }, [
                vue.createElementVNode("view", { class: "mcoul-img" }, [
                  vue.createVNode(_component_u_image, {
                    width: "58rpx",
                    height: "58rpx",
                    src: "/static/userImg/message-center.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "mcoul-text" }, "\u6D88\u606F\u4E2D\u5FC3")
              ]),
              vue.createElementVNode("view", {
                class: "mcou-li",
                onClick: _cache[8] || (_cache[8] = ($event) => $options.navigatorTo("aboutUs"))
              }, [
                vue.createElementVNode("view", { class: "mcoul-img" }, [
                  vue.createVNode(_component_u_image, {
                    width: "58rpx",
                    height: "58rpx",
                    src: "/static/userImg/aboutus.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "mcoul-text" }, "\u5173\u4E8E\u6211\u4EEC")
              ]),
              vue.createElementVNode("view", {
                class: "mcou-li",
                onClick: _cache[9] || (_cache[9] = ($event) => $options.navigatorTo("setting"))
              }, [
                vue.createElementVNode("view", { class: "mcoul-img" }, [
                  vue.createVNode(_component_u_image, {
                    width: "58rpx",
                    height: "58rpx",
                    src: "/static/userImg/setting.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "mcoul-text" }, "\u8BBE\u7F6E")
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  var PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/my.vue"]]);
  const _sfc_main$z = {
    data() {
      return {
        authList: [
          {
            title: "Binance",
            value: "\u5DF2\u6388\u6743",
            isActive: true,
            apiKey: "dasdqwe2sadsr4refdvdfwee2e2",
            secretKey: "dasdqwe2sadsr4refdvdfwee2e2"
          },
          {
            title: "Bibox",
            value: "\u672A\u6388\u6B0A"
          },
          {
            title: "\u706B\u5E01",
            value: "\u672A\u6388\u6B0A"
          },
          {
            title: "MEXC",
            value: "\u672A\u6388\u6B0A"
          },
          {
            title: "Gate",
            value: "\u672A\u6388\u6B0A"
          }
        ]
      };
    },
    methods: {
      navigator(item2) {
        const { apiKey, isActive, title, secretKey } = item2;
        if (isActive) {
          navigate(`/pages/home/apiAuthSure/apiAuthSure?name=${title}&apiKey=${apiKey}&secretKey=${secretKey}`);
        } else {
          navigate(`/pages/home/apiAuthSure/apiAuthSure?name=${title}`);
        }
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "api-auth page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        title: "API\u6388\u6743",
        rightIcon: "/static/home/remark.png",
        height: "92rpx",
        autoBack: true
      }, {
        right: vue.withCtx(() => [
          vue.createVNode(_component_u_image, {
            width: "54rpx",
            height: "54rpx",
            src: "/static/home/remark.png"
          })
        ]),
        _: 1
      }),
      vue.createCommentVNode(" \u5217\u8868 "),
      vue.createElementVNode("view", { class: "aa-list" }, [
        vue.createElementVNode("view", { class: "aal-ul" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.authList, (item2, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "aalu-li",
              onClick: ($event) => $options.navigator(item2)
            }, [
              vue.createElementVNode("text", { class: "aalul-left" }, vue.toDisplayString(item2.title), 1),
              vue.createElementVNode("view", { class: "aalul-right" }, [
                vue.createElementVNode("text", {
                  class: vue.normalizeClass(["aalulr-text", item2.isActive ? "isActive" : ""])
                }, vue.toDisplayString(item2.value), 3),
                vue.createVNode(_component_u_icon, { name: "arrow-right" })
              ])
            ], 8, ["onClick"]);
          }), 256))
        ])
      ])
    ]);
  }
  var PagesHomeApiAuthApiAuth = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/home/apiAuth/apiAuth.vue"]]);
  var props$7 = {
    props: {
      hairline: {
        type: Boolean,
        default: props$s.button.hairline
      },
      type: {
        type: String,
        default: props$s.button.type
      },
      size: {
        type: String,
        default: props$s.button.size
      },
      shape: {
        type: String,
        default: props$s.button.shape
      },
      plain: {
        type: Boolean,
        default: props$s.button.plain
      },
      disabled: {
        type: Boolean,
        default: props$s.button.disabled
      },
      loading: {
        type: Boolean,
        default: props$s.button.loading
      },
      loadingText: {
        type: [String, Number],
        default: props$s.button.loadingText
      },
      loadingMode: {
        type: String,
        default: props$s.button.loadingMode
      },
      loadingSize: {
        type: [String, Number],
        default: props$s.button.loadingSize
      },
      openType: {
        type: String,
        default: props$s.button.openType
      },
      formType: {
        type: String,
        default: props$s.button.formType
      },
      appParameter: {
        type: String,
        default: props$s.button.appParameter
      },
      hoverStopPropagation: {
        type: Boolean,
        default: props$s.button.hoverStopPropagation
      },
      lang: {
        type: String,
        default: props$s.button.lang
      },
      sessionFrom: {
        type: String,
        default: props$s.button.sessionFrom
      },
      sendMessageTitle: {
        type: String,
        default: props$s.button.sendMessageTitle
      },
      sendMessagePath: {
        type: String,
        default: props$s.button.sendMessagePath
      },
      sendMessageImg: {
        type: String,
        default: props$s.button.sendMessageImg
      },
      showMessageCard: {
        type: Boolean,
        default: props$s.button.showMessageCard
      },
      dataName: {
        type: String,
        default: props$s.button.dataName
      },
      throttleTime: {
        type: [String, Number],
        default: props$s.button.throttleTime
      },
      hoverStartTime: {
        type: [String, Number],
        default: props$s.button.hoverStartTime
      },
      hoverStayTime: {
        type: [String, Number],
        default: props$s.button.hoverStayTime
      },
      text: {
        type: [String, Number],
        default: props$s.button.text
      },
      icon: {
        type: String,
        default: props$s.button.icon
      },
      iconColor: {
        type: String,
        default: props$s.button.icon
      },
      color: {
        type: String,
        default: props$s.button.color
      }
    }
  };
  const _sfc_main$y = {
    name: "u-button",
    mixins: [mpMixin, mixin, props$7],
    data() {
      return {};
    },
    computed: {
      bemClass() {
        if (!this.color) {
          return this.bem("button", ["type", "shape", "size"], ["disabled", "plain", "hairline"]);
        } else {
          return this.bem("button", ["shape", "size"], ["disabled", "plain", "hairline"]);
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : uni.$u.config.color[`u-${this.type}`];
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      }
    },
    emits: [
      "click",
      "getphonenumber",
      "getuserinfo",
      "error",
      "opensetting",
      "launchapp"
    ],
    methods: {
      clickHandler() {
        if (!this.disabled && !this.loading) {
          uni.$u.throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      },
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$5);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("button", {
      "hover-start-time": Number(_ctx.hoverStartTime),
      "hover-stay-time": Number(_ctx.hoverStayTime),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
      class: vue.normalizeClass(["u-button u-reset-button", $options.bemClass]),
      style: vue.normalizeStyle([$options.baseColor, _ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createVNode(_component_u_loading_icon, {
          mode: _ctx.loadingMode,
          size: _ctx.loadingSize * 1.15,
          color: $options.loadingColor
        }, null, 8, ["mode", "size", "color"]),
        vue.createElementVNode("text", {
          class: "u-button__loading-text",
          style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
        }, vue.toDisplayString(_ctx.loadingText || _ctx.text), 5)
      ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: _ctx.icon,
          color: $options.iconColorCom,
          size: $options.textSize * 1.35,
          customStyle: { marginRight: "2px" }
        }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", {
            class: "u-button__text",
            style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
          }, vue.toDisplayString(_ctx.text), 5)
        ], true)
      ], 64))
    ], 46, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class"]);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-6f953de1"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-button/u-button.vue"]]);
  const _sfc_main$x = {
    onLoad: function(option) {
      formatAppLog("log", "at pages/home/apiAuthSure/apiAuthSure.vue:56", option.name);
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
            uni.$u.toast("\u4FEE\u6539");
          } else {
            uni.$u.toast("\u65B0\u589E");
          }
          uni.navigateBack({
            delta: 1
          });
        }).catch((errors) => {
          uni.$u.toast("\u6821\u9A8C\u5931\u8D25");
        });
      },
      confirm() {
        this.formPwd;
        this.$refs.formPwd.validate().then((res) => {
          formatAppLog("log", "at pages/home/apiAuthSure/apiAuthSure.vue:146", res);
          this.tempType = "add";
          this.showPwd = false;
        });
      },
      cancel() {
        this.showPwd = false;
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$2);
    const _component_u__form = resolveEasycom(vue.resolveDynamicComponent("u--form"), __easycom_3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "api-auth-sure page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: $data.coinName,
        height: "92rpx",
        autoBack: true
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(' <template #right>\n				<u-image width="28" height="28" src="../../../static/home/remark.png"></u-image>\n			</template> ')
        ]),
        _: 1
      }, 8, ["title"]),
      vue.createCommentVNode(" \u5185\u5BB9 "),
      vue.createElementVNode("view", { class: "aas-content" }, [
        vue.createElementVNode("view", { class: "aas-text" }, [
          vue.createElementVNode("view", null, "1.\u7372\u53D6" + vue.toDisplayString($data.coinName) + ".pro\u7684Api Key\uFF1A\u7528\u65BC\u540C\u6B65\u6301\u5009\u548C\u4EA4\u6613\u6578\u64DA", 1),
          vue.createElementVNode("view", null, "2.\u8F38\u5165\u6216\u5FA9\u88FD\u7C98\u8CBC\u4F60\u7684Api Key")
        ]),
        vue.createElementVNode("view", { class: "aas-export" }, [
          vue.createVNode(_component_u__form, {
            labelPosition: "left",
            model: $data.form,
            rules: $data.rules,
            ref: "form"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "Api Key\uFF1A",
                prop: "apiKey",
                borderBottom: "true",
                ref: "apiKey"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    inputAlign: "right",
                    disabled: $data.tempType === "edit",
                    modelValue: $data.form.apiKey,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.apiKey = $event),
                    placeholder: "\u8ACB\u8F38\u5165api key",
                    border: "none"
                  }, null, 8, ["disabled", "modelValue"])
                ]),
                _: 1
              }, 512),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "Secret Key:",
                prop: "secretKey",
                borderBottom: "",
                ref: "secretKey"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    inputAlign: "right",
                    disabled: $data.tempType === "edit",
                    modelValue: $data.form.secretKey,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.secretKey = $event),
                    placeholder: "\u8ACB\u8F38\u5165Secret Key",
                    border: "none"
                  }, null, 8, ["disabled", "modelValue"])
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        vue.createVNode(_component_u_button, {
          onClick: $options.submit,
          class: "aas-submit color000",
          color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($data.tempType === "edit" ? "\u4FEE\u6539" : "\u5C0E\u5165"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      vue.createCommentVNode(" \u5BC6\u7801\u9A8C\u8BC1\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        confirmText: "\u786E\u5B9A",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        cancelText: "\u53D6\u6D88",
        title: "\u5BC6\u78BC\u9A57\u8B49",
        showCancelButton: "",
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showPwd
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createVNode(_component_u__form, {
                labelPosition: "left",
                model: $data.formPwd,
                rules: $data.rules,
                ref: "formPwd"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_form_item, {
                    labelWidth: "180rpx",
                    label: "\u7576\u524D\u8CEC\u6236\uFF1A"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", null, vue.toDisplayString($data.formPwd.emial), 1)
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_u_form_item, {
                    labelWidth: "180rpx",
                    label: "\u5BC6\u78BC\uFF1A",
                    prop: "pwd",
                    ref: "pwd"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_u__input, {
                        type: "password",
                        modelValue: $data.formPwd.pwd,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formPwd.pwd = $event),
                        placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              }, 8, ["model", "rules"]),
              vue.createElementVNode("view")
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "onCancel", "show", "title"])
    ]);
  }
  var PagesHomeApiAuthSureApiAuthSure = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/home/apiAuthSure/apiAuthSure.vue"]]);
  const _sfc_main$w = {
    data() {
      return {
        noPayList: [
          {
            tip: "\u8DDF\u55AE\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8DDF\u55AE\u8CBB",
            balance: "100",
            coinName: "\u706B\u5E01",
            time: "2021-10-10 12:10"
          }
        ],
        paydeList: [
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u624B\u7E8C\u8CBB",
            balance: "100",
            coinName: "\u706B\u5E01",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          }
        ]
      };
    },
    methods: {}
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "bill-center page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        leftIcon: "/static/home/arrow-left-black.png",
        title: "\u8CEC\u55AE\u4E2D\u5FC3",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => _ctx.loadmore && _ctx.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.noPayList.length > 0 || $data.paydeList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createCommentVNode(" \u5217\u8868 "),
          vue.createElementVNode("view", { class: "bcc-list" }, [
            vue.createCommentVNode(" \u5F85\u652F\u4ED8 "),
            $data.noPayList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "bccl-noPay"
            }, "\u5F85\u652F\u4ED8")) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" \u5F85\u652F\u4ED8\u5217\u8868 "),
            $data.noPayList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($data.noPayList, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "bccl-li" }, [
                vue.createElementVNode("view", { class: "bcclu-top" }, [
                  vue.createElementVNode("view", { class: "bcclut-left" }, [
                    vue.createElementVNode("text", { class: "bcclutl-text" }, "\u652F\u4ED8\u8CEC\u55AE"),
                    vue.createElementVNode("view", { class: "bcclutl-tip" }, vue.toDisplayString(item2.tip), 1)
                  ]),
                  vue.createElementVNode("view", { class: "bcclut-right" }, "-" + vue.toDisplayString(item2.balance) + " USDT", 1)
                ]),
                vue.createElementVNode("view", { class: "bcclu-bottom" }, [
                  vue.createElementVNode("view", { class: "bcclub-left" }, [
                    vue.createElementVNode("text", { class: "bcclubl-name" }, vue.toDisplayString(item2.coinName), 1),
                    vue.createElementVNode("view", { class: "bcclubl-money" }, "\u4F59\u984D\uFF1A600 USDT")
                  ]),
                  vue.createElementVNode("view", { class: "bcclub-right" }, vue.toDisplayString(item2.time), 1)
                ])
              ]);
            }), 256)) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" \u5DF2\u652F\u4ED8 "),
            $data.noPayList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "bccl-Payed"
            }, "\u5DF2\u652F\u4ED8")) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" \u5DF2\u652F\u4ED8\u5217\u8868 "),
            $data.paydeList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 3 }, vue.renderList($data.paydeList, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "bccl-li" }, [
                vue.createElementVNode("view", { class: "bcclu-top" }, [
                  vue.createElementVNode("view", { class: "bcclut-left" }, [
                    vue.createElementVNode("text", { class: "bcclutl-text" }, "\u652F\u4ED8\u8CEC\u55AE"),
                    vue.createElementVNode("view", { class: "bcclutl-tip" }, vue.toDisplayString(item2.tip), 1)
                  ]),
                  vue.createElementVNode("view", { class: "bcclut-right" }, "-" + vue.toDisplayString(item2.balance) + " USDT", 1)
                ]),
                vue.createElementVNode("view", { class: "bcclu-bottom" }, [
                  vue.createElementVNode("view", { class: "bcclub-left" }, [
                    vue.createElementVNode("text", { class: "bcclubl-name" }, vue.toDisplayString(item2.coinName), 1),
                    vue.createElementVNode("view", { class: "bcclubl-money" }, "\u4F59\u984D\uFF1A600 USDT")
                  ]),
                  vue.createElementVNode("view", { class: "bcclub-right" }, vue.toDisplayString(item2.time), 1)
                ])
              ]);
            }), 256)) : vue.createCommentVNode("v-if", true)
          ])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32)
    ]);
  }
  var PagesHomeBillingCenterBillingCenter = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/home/billingCenter/billingCenter.vue"]]);
  const _sfc_main$v = {
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
        copy();
      },
      isAdequateFn(id) {
        const obj = this.payList.find((item2) => item2.name === id);
        this.isAdequate = obj.surplusMoney > this.needToPay;
        this.surplusMoney = obj.surplusMoney;
      },
      selectPaytype(item2) {
        if (item2.isContractActive)
          return;
        this.isContractPay = item2.name === "\u5408\u7EA6\u652F\u4ED8";
        this.payList.forEach((citem) => {
          if (citem.name === item2.name) {
            citem.isActive = true;
            this.isAdequate = citem.surplusMoney > this.needToPay;
            this.surplusMoney = citem.surplusMoney;
          } else {
            citem.isActive = false;
          }
        });
      },
      navigator() {
        navigate(`/pages/home/addUSDT/addUSDT`);
      },
      activeShow() {
        this.showActiveModal = true;
      },
      navigateBack() {
        uni.navigateBack();
      },
      confirmActive() {
        try {
          uni.reLaunch({
            url: "/pages/assets/assets"
          });
        } catch (e) {
        }
      },
      submit() {
        if (!this.isAdequate)
          return;
        navigate("/pages/home/paySuccess/paySuccess");
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "to-be-paid" }, [
      vue.createCommentVNode(" \u5BFC\u822A\u6761 "),
      vue.createElementVNode("view", { class: "tbp-nav" }, [
        vue.createElementVNode("view", { class: "tbpn-top" }, [
          vue.createElementVNode("view", {
            class: "tbpnt-img",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateBack && $options.navigateBack(...args))
          }, [
            vue.createVNode(_component_u__image, {
              width: "54rpx",
              height: "54rpx",
              src: "/static/home/arr-back.png"
            })
          ]),
          vue.createElementVNode("view", { class: "tbpnt-title" }, "\u5F85\u652F\u4ED8\u8CEC\u55AE"),
          vue.createElementVNode("view", { class: "tbpnt-right" })
        ])
      ]),
      vue.createCommentVNode(" \u5185\u5BB9 "),
      vue.createElementVNode("view", { class: "tbp-content" }, [
        vue.createCommentVNode(" \u9700\u8981\u652F\u4ED8 "),
        vue.createElementVNode("view", { class: "tbpc-need" }, [
          vue.createElementVNode("view", { class: "tbpcn-top" }, "\u60A8\u9084\u9700\u8981\u652F\u4ED8"),
          vue.createElementVNode("view", { class: "tbpcn-bottom" }, [
            vue.createElementVNode("text", { class: "tbpcnb-left" }, vue.toDisplayString($data.needToPay), 1),
            vue.createElementVNode("text", { class: "tbpcnb-right" }, "USDT")
          ])
        ]),
        vue.createCommentVNode(" \u652F\u4ED8\u65B9\u5F0F "),
        vue.createElementVNode("view", { class: "tbpc-pay-type" }, [
          vue.createElementVNode("view", { class: "tbpcp-title" }, "\u9078\u64C7\u652F\u4ED8\u65B9\u5F0F"),
          vue.createElementVNode("view", { class: "tbpcp-ul" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.payList, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.selectPaytype(item2),
                class: "tbpcp-li"
              }, [
                vue.createElementVNode("text", null, vue.toDisplayString(item2.name), 1),
                !item2.isContractActive ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "tbpcpl-img"
                }, [
                  vue.createVNode(_component_u__image, {
                    width: "46rpx",
                    height: "46rpx",
                    src: `/static/home/${item2.isActive ? "selected" : "unSelected"}.png`
                  }, null, 8, ["src"])
                ])) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "tbpcpl-btn",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.activeShow && $options.activeShow(...args))
                }, " \u6FC0\u6D3B "))
              ], 8, ["onClick"]);
            }), 256))
          ])
        ]),
        vue.createCommentVNode(" \u6E29\u99A8\u63D0\u793A "),
        vue.createElementVNode("view", { class: "tbpc-tip" }, [
          vue.createElementVNode("view", null, "\u6EAB\u99A8\u63D0\u793A\uFF1A"),
          vue.createElementVNode("view", null, "\u7CFB\u7D71\u6BCF\u67081\u865F\uFF0C\u6BCF\u5468\u51FA\u4E00\u6B21\u8CEC\u55AE\uFF0C2\u5929\u5167\u5FC5\u9808\u5B8C\u6210\u652F\u4ED8\uFF0C\u5982\u903E\u671F\u652F\u4ED8\u8CEC\u55AE\uFF0C\u8CEC\u6236\u5C07\u6703\u88AB\u51CD\u7D50\uFF0C\u9700\u806F\u7CFB\u5BA2\u670D\u5B8C\u6210\u8CEC\u55AE\u652F\u4ED8\u5F8C\uFF0C\u65B9\u53EF\u958B\u901A\u7CFB\u7D71\u3002")
        ]),
        vue.createCommentVNode(" \u652F\u4ED8 "),
        vue.createElementVNode("view", { class: "tbpc-pay" }, [
          vue.createElementVNode("view", { class: "tbpcp-top" }, [
            vue.createElementVNode("view", { class: "tbpcpt-left" }, [
              vue.createElementVNode("text", null, vue.toDisplayString(!$data.isAdequate ? "\u4F59\u984D\u4E0D\u8DB3\uFF1A" : "\u4F59\u984D\u5145\u8DB3\uFF1A"), 1),
              vue.createElementVNode("text", null, vue.toDisplayString($data.surplusMoney) + " USDT", 1)
            ]),
            !$data.isAdequate && !$data.isContractPay ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              onClick: _cache[2] || (_cache[2] = (...args) => $options.navigator && $options.navigator(...args)),
              class: "tbpcpt-right"
            }, "\u6DFB\u52A0\u4FDD\u8B49\u91D1")) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createVNode(_component_u_button, {
            onClick: $options.submit,
            class: "tbpcp-submit",
            color: !$data.isAdequate ? "#CCCCCC" : "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(!$data.isAdequate ? "\u652F\u4ED8" : "\u78BA\u5B9A\u652F\u4ED8"), 1)
            ]),
            _: 1
          }, 8, ["onClick", "color"])
        ])
      ]),
      vue.createCommentVNode(" \u6FC0\u6D3B\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        class: "noline",
        closeOnClickOverlay: true,
        onClose: _cache[5] || (_cache[5] = ($event) => $data.showActiveModal = false),
        confirmText: "\u597D\u7684",
        onConfirm: $options.confirmActive,
        title: "\u6FC0\u6D3B",
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showActiveModal
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[3] || (_cache[3] = ($event) => $data.showActiveModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createElementVNode("view", { class: "tbc-title" }, "\u8ACB\u4FDD\u5B58\u597D\u60A8\u7684\u79C1\u9470"),
              vue.createElementVNode("view", { class: "tbc-content" }, [
                vue.createElementVNode("view", { class: "tbcc-key" }, vue.toDisplayString($data.secretKey), 1),
                vue.createElementVNode("view", {
                  class: "auca-img",
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.copy && $options.copy(...args))
                }, [
                  vue.createVNode(_component_u__image, {
                    width: "31rpx",
                    height: "31rpx",
                    src: "/static/home/copy.png"
                  })
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show", "title"])
    ]);
  }
  var PagesHomeToBePaidToBePaid = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/home/toBePaid/toBePaid.vue"]]);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var uqrcode = { exports: {} };
  (function(module, exports) {
    !function(o, e) {
      module.exports = e();
    }(window, function() {
      function o(o2) {
        this.mode = r.MODE_8BIT_BYTE, this.data = o2;
      }
      function e(o2, e2) {
        this.typeNumber = o2, this.errorCorrectLevel = e2, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array();
      }
      o.prototype = { getLength: function(o2) {
        return this.data.length;
      }, write: function(o2) {
        for (var e2 = 0; e2 < this.data.length; e2++)
          o2.put(this.data.charCodeAt(e2), 8);
      } }, e.prototype = { addData: function(e2) {
        var r2 = new o(e2);
        this.dataList.push(r2), this.dataCache = null;
      }, isDark: function(o2, e2) {
        if (o2 < 0 || this.moduleCount <= o2 || e2 < 0 || this.moduleCount <= e2)
          throw new Error(o2 + "," + e2);
        return this.modules[o2][e2];
      }, getModuleCount: function() {
        return this.moduleCount;
      }, make: function() {
        if (this.typeNumber < 1) {
          var o2 = 1;
          for (o2 = 1; o2 < 40; o2++) {
            for (var e2 = v.getRSBlocks(o2, this.errorCorrectLevel), r2 = new p(), t2 = 0, i3 = 0; i3 < e2.length; i3++)
              t2 += e2[i3].dataCount;
            for (i3 = 0; i3 < this.dataList.length; i3++) {
              var n2 = this.dataList[i3];
              r2.put(n2.mode, 4), r2.put(n2.getLength(), h.getLengthInBits(n2.mode, o2)), n2.write(r2);
            }
            if (r2.getLengthInBits() <= 8 * t2)
              break;
          }
          this.typeNumber = o2;
        }
        this.makeImpl(false, this.getBestMaskPattern());
      }, makeImpl: function(o2, r2) {
        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
        for (var t2 = 0; t2 < this.moduleCount; t2++) {
          this.modules[t2] = new Array(this.moduleCount);
          for (var i3 = 0; i3 < this.moduleCount; i3++)
            this.modules[t2][i3] = null;
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(o2, r2), this.typeNumber >= 7 && this.setupTypeNumber(o2), this.dataCache == null && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r2);
      }, setupPositionProbePattern: function(o2, e2) {
        for (var r2 = -1; r2 <= 7; r2++)
          if (!(o2 + r2 <= -1 || this.moduleCount <= o2 + r2))
            for (var t2 = -1; t2 <= 7; t2++)
              e2 + t2 <= -1 || this.moduleCount <= e2 + t2 || (this.modules[o2 + r2][e2 + t2] = 0 <= r2 && r2 <= 6 && (t2 == 0 || t2 == 6) || 0 <= t2 && t2 <= 6 && (r2 == 0 || r2 == 6) || 2 <= r2 && r2 <= 4 && 2 <= t2 && t2 <= 4);
      }, getBestMaskPattern: function() {
        for (var o2 = 0, e2 = 0, r2 = 0; r2 < 8; r2++) {
          this.makeImpl(true, r2);
          var t2 = h.getLostPoint(this);
          (r2 == 0 || o2 > t2) && (o2 = t2, e2 = r2);
        }
        return e2;
      }, createMovieClip: function(o2, e2, r2) {
        var t2 = o2.createEmptyMovieClip(e2, r2);
        this.make();
        for (var i3 = 0; i3 < this.modules.length; i3++)
          for (var n2 = 1 * i3, a2 = 0; a2 < this.modules[i3].length; a2++) {
            var d2 = 1 * a2;
            this.modules[i3][a2] && (t2.beginFill(0, 100), t2.moveTo(d2, n2), t2.lineTo(d2 + 1, n2), t2.lineTo(d2 + 1, n2 + 1), t2.lineTo(d2, n2 + 1), t2.endFill());
          }
        return t2;
      }, setupTimingPattern: function() {
        for (var o2 = 8; o2 < this.moduleCount - 8; o2++)
          this.modules[o2][6] == null && (this.modules[o2][6] = o2 % 2 == 0);
        for (var e2 = 8; e2 < this.moduleCount - 8; e2++)
          this.modules[6][e2] == null && (this.modules[6][e2] = e2 % 2 == 0);
      }, setupPositionAdjustPattern: function() {
        for (var o2 = h.getPatternPosition(this.typeNumber), e2 = 0; e2 < o2.length; e2++)
          for (var r2 = 0; r2 < o2.length; r2++) {
            var t2 = o2[e2], i3 = o2[r2];
            if (this.modules[t2][i3] == null)
              for (var n2 = -2; n2 <= 2; n2++)
                for (var a2 = -2; a2 <= 2; a2++)
                  this.modules[t2 + n2][i3 + a2] = n2 == -2 || n2 == 2 || a2 == -2 || a2 == 2 || n2 == 0 && a2 == 0;
          }
      }, setupTypeNumber: function(o2) {
        for (var e2 = h.getBCHTypeNumber(this.typeNumber), r2 = 0; r2 < 18; r2++) {
          var t2 = !o2 && (e2 >> r2 & 1) == 1;
          this.modules[Math.floor(r2 / 3)][r2 % 3 + this.moduleCount - 8 - 3] = t2;
        }
        for (r2 = 0; r2 < 18; r2++) {
          t2 = !o2 && (e2 >> r2 & 1) == 1;
          this.modules[r2 % 3 + this.moduleCount - 8 - 3][Math.floor(r2 / 3)] = t2;
        }
      }, setupTypeInfo: function(o2, e2) {
        for (var r2 = this.errorCorrectLevel << 3 | e2, t2 = h.getBCHTypeInfo(r2), i3 = 0; i3 < 15; i3++) {
          var n2 = !o2 && (t2 >> i3 & 1) == 1;
          i3 < 6 ? this.modules[i3][8] = n2 : i3 < 8 ? this.modules[i3 + 1][8] = n2 : this.modules[this.moduleCount - 15 + i3][8] = n2;
        }
        for (i3 = 0; i3 < 15; i3++) {
          n2 = !o2 && (t2 >> i3 & 1) == 1;
          i3 < 8 ? this.modules[8][this.moduleCount - i3 - 1] = n2 : i3 < 9 ? this.modules[8][15 - i3 - 1 + 1] = n2 : this.modules[8][15 - i3 - 1] = n2;
        }
        this.modules[this.moduleCount - 8][8] = !o2;
      }, mapData: function(o2, e2) {
        for (var r2 = -1, t2 = this.moduleCount - 1, i3 = 7, n2 = 0, a2 = this.moduleCount - 1; a2 > 0; a2 -= 2)
          for (a2 == 6 && a2--; ; ) {
            for (var d2 = 0; d2 < 2; d2++)
              if (this.modules[t2][a2 - d2] == null) {
                var u2 = false;
                n2 < o2.length && (u2 = (o2[n2] >>> i3 & 1) == 1), h.getMask(e2, t2, a2 - d2) && (u2 = !u2), this.modules[t2][a2 - d2] = u2, --i3 == -1 && (n2++, i3 = 7);
              }
            if ((t2 += r2) < 0 || this.moduleCount <= t2) {
              t2 -= r2, r2 = -r2;
              break;
            }
          }
      } }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(o2, r2, t2) {
        for (var i3 = v.getRSBlocks(o2, r2), n2 = new p(), a2 = 0; a2 < t2.length; a2++) {
          var d2 = t2[a2];
          n2.put(d2.mode, 4), n2.put(d2.getLength(), h.getLengthInBits(d2.mode, o2)), d2.write(n2);
        }
        var u2 = 0;
        for (a2 = 0; a2 < i3.length; a2++)
          u2 += i3[a2].dataCount;
        if (n2.getLengthInBits() > 8 * u2)
          throw new Error("code length overflow. (" + n2.getLengthInBits() + ">" + 8 * u2 + ")");
        for (n2.getLengthInBits() + 4 <= 8 * u2 && n2.put(0, 4); n2.getLengthInBits() % 8 != 0; )
          n2.putBit(false);
        for (; !(n2.getLengthInBits() >= 8 * u2 || (n2.put(e.PAD0, 8), n2.getLengthInBits() >= 8 * u2)); )
          n2.put(e.PAD1, 8);
        return e.createBytes(n2, i3);
      }, e.createBytes = function(o2, e2) {
        for (var r2 = 0, t2 = 0, i3 = 0, n2 = new Array(e2.length), a2 = new Array(e2.length), d2 = 0; d2 < e2.length; d2++) {
          var u2 = e2[d2].dataCount, s2 = e2[d2].totalCount - u2;
          t2 = Math.max(t2, u2), i3 = Math.max(i3, s2), n2[d2] = new Array(u2);
          for (var g2 = 0; g2 < n2[d2].length; g2++)
            n2[d2][g2] = 255 & o2.buffer[g2 + r2];
          r2 += u2;
          var l2 = h.getErrorCorrectPolynomial(s2), c2 = new f(n2[d2], l2.getLength() - 1).mod(l2);
          a2[d2] = new Array(l2.getLength() - 1);
          for (g2 = 0; g2 < a2[d2].length; g2++) {
            var m2 = g2 + c2.getLength() - a2[d2].length;
            a2[d2][g2] = m2 >= 0 ? c2.get(m2) : 0;
          }
        }
        var v2 = 0;
        for (g2 = 0; g2 < e2.length; g2++)
          v2 += e2[g2].totalCount;
        var p2 = new Array(v2), C2 = 0;
        for (g2 = 0; g2 < t2; g2++)
          for (d2 = 0; d2 < e2.length; d2++)
            g2 < n2[d2].length && (p2[C2++] = n2[d2][g2]);
        for (g2 = 0; g2 < i3; g2++)
          for (d2 = 0; d2 < e2.length; d2++)
            g2 < a2[d2].length && (p2[C2++] = a2[d2][g2]);
        return p2;
      };
      for (var r = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, t = { L: 1, M: 0, Q: 3, H: 2 }, i2 = 0, n = 1, a = 2, d = 3, u = 4, s = 5, g = 6, l = 7, h = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(o2) {
        for (var e2 = o2 << 10; h.getBCHDigit(e2) - h.getBCHDigit(h.G15) >= 0; )
          e2 ^= h.G15 << h.getBCHDigit(e2) - h.getBCHDigit(h.G15);
        return (o2 << 10 | e2) ^ h.G15_MASK;
      }, getBCHTypeNumber: function(o2) {
        for (var e2 = o2 << 12; h.getBCHDigit(e2) - h.getBCHDigit(h.G18) >= 0; )
          e2 ^= h.G18 << h.getBCHDigit(e2) - h.getBCHDigit(h.G18);
        return o2 << 12 | e2;
      }, getBCHDigit: function(o2) {
        for (var e2 = 0; o2 != 0; )
          e2++, o2 >>>= 1;
        return e2;
      }, getPatternPosition: function(o2) {
        return h.PATTERN_POSITION_TABLE[o2 - 1];
      }, getMask: function(o2, e2, r2) {
        switch (o2) {
          case i2:
            return (e2 + r2) % 2 == 0;
          case n:
            return e2 % 2 == 0;
          case a:
            return r2 % 3 == 0;
          case d:
            return (e2 + r2) % 3 == 0;
          case u:
            return (Math.floor(e2 / 2) + Math.floor(r2 / 3)) % 2 == 0;
          case s:
            return e2 * r2 % 2 + e2 * r2 % 3 == 0;
          case g:
            return (e2 * r2 % 2 + e2 * r2 % 3) % 2 == 0;
          case l:
            return (e2 * r2 % 3 + (e2 + r2) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + o2);
        }
      }, getErrorCorrectPolynomial: function(o2) {
        for (var e2 = new f([1], 0), r2 = 0; r2 < o2; r2++)
          e2 = e2.multiply(new f([1, c.gexp(r2)], 0));
        return e2;
      }, getLengthInBits: function(o2, e2) {
        if (1 <= e2 && e2 < 10)
          switch (o2) {
            case r.MODE_NUMBER:
              return 10;
            case r.MODE_ALPHA_NUM:
              return 9;
            case r.MODE_8BIT_BYTE:
            case r.MODE_KANJI:
              return 8;
            default:
              throw new Error("mode:" + o2);
          }
        else if (e2 < 27)
          switch (o2) {
            case r.MODE_NUMBER:
              return 12;
            case r.MODE_ALPHA_NUM:
              return 11;
            case r.MODE_8BIT_BYTE:
              return 16;
            case r.MODE_KANJI:
              return 10;
            default:
              throw new Error("mode:" + o2);
          }
        else {
          if (!(e2 < 41))
            throw new Error("type:" + e2);
          switch (o2) {
            case r.MODE_NUMBER:
              return 14;
            case r.MODE_ALPHA_NUM:
              return 13;
            case r.MODE_8BIT_BYTE:
              return 16;
            case r.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + o2);
          }
        }
      }, getLostPoint: function(o2) {
        for (var e2 = o2.getModuleCount(), r2 = 0, t2 = 0; t2 < e2; t2++)
          for (var i3 = 0; i3 < e2; i3++) {
            for (var n2 = 0, a2 = o2.isDark(t2, i3), d2 = -1; d2 <= 1; d2++)
              if (!(t2 + d2 < 0 || e2 <= t2 + d2))
                for (var u2 = -1; u2 <= 1; u2++)
                  i3 + u2 < 0 || e2 <= i3 + u2 || d2 == 0 && u2 == 0 || a2 == o2.isDark(t2 + d2, i3 + u2) && n2++;
            n2 > 5 && (r2 += 3 + n2 - 5);
          }
        for (t2 = 0; t2 < e2 - 1; t2++)
          for (i3 = 0; i3 < e2 - 1; i3++) {
            var s2 = 0;
            o2.isDark(t2, i3) && s2++, o2.isDark(t2 + 1, i3) && s2++, o2.isDark(t2, i3 + 1) && s2++, o2.isDark(t2 + 1, i3 + 1) && s2++, s2 != 0 && s2 != 4 || (r2 += 3);
          }
        for (t2 = 0; t2 < e2; t2++)
          for (i3 = 0; i3 < e2 - 6; i3++)
            o2.isDark(t2, i3) && !o2.isDark(t2, i3 + 1) && o2.isDark(t2, i3 + 2) && o2.isDark(t2, i3 + 3) && o2.isDark(t2, i3 + 4) && !o2.isDark(t2, i3 + 5) && o2.isDark(t2, i3 + 6) && (r2 += 40);
        for (i3 = 0; i3 < e2; i3++)
          for (t2 = 0; t2 < e2 - 6; t2++)
            o2.isDark(t2, i3) && !o2.isDark(t2 + 1, i3) && o2.isDark(t2 + 2, i3) && o2.isDark(t2 + 3, i3) && o2.isDark(t2 + 4, i3) && !o2.isDark(t2 + 5, i3) && o2.isDark(t2 + 6, i3) && (r2 += 40);
        var g2 = 0;
        for (i3 = 0; i3 < e2; i3++)
          for (t2 = 0; t2 < e2; t2++)
            o2.isDark(t2, i3) && g2++;
        return r2 += 10 * (Math.abs(100 * g2 / e2 / e2 - 50) / 5);
      } }, c = { glog: function(o2) {
        if (o2 < 1)
          throw new Error("glog(" + o2 + ")");
        return c.LOG_TABLE[o2];
      }, gexp: function(o2) {
        for (; o2 < 0; )
          o2 += 255;
        for (; o2 >= 256; )
          o2 -= 255;
        return c.EXP_TABLE[o2];
      }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, m = 0; m < 8; m++)
        c.EXP_TABLE[m] = 1 << m;
      for (m = 8; m < 256; m++)
        c.EXP_TABLE[m] = c.EXP_TABLE[m - 4] ^ c.EXP_TABLE[m - 5] ^ c.EXP_TABLE[m - 6] ^ c.EXP_TABLE[m - 8];
      for (m = 0; m < 255; m++)
        c.LOG_TABLE[c.EXP_TABLE[m]] = m;
      function f(o2, e2) {
        if (o2.length == null)
          throw new Error(o2.length + "/" + e2);
        for (var r2 = 0; r2 < o2.length && o2[r2] == 0; )
          r2++;
        this.num = new Array(o2.length - r2 + e2);
        for (var t2 = 0; t2 < o2.length - r2; t2++)
          this.num[t2] = o2[t2 + r2];
      }
      function v(o2, e2) {
        this.totalCount = o2, this.dataCount = e2;
      }
      function p() {
        this.buffer = new Array(), this.length = 0;
      }
      function C(o2) {
        return o2.setFillStyle = o2.setFillStyle || function(e2) {
          o2.fillStyle = e2;
        }, o2.setFontSize = o2.setFontSize || function(e2) {
          o2.font = `${e2}px`;
        }, o2.setTextAlign = o2.setTextAlign || function(e2) {
          o2.textAlign = e2;
        }, o2.setTextBaseline = o2.setTextBaseline || function(e2) {
          o2.textBaseline = e2;
        }, o2.draw = o2.draw || function(o3, e2) {
          e2 && e2();
        }, o2.clearRect = o2.clearRect || function(e2, r2, t2, i3) {
          o2.draw(false);
        }, o2;
      }
      function b(o2, e2) {
        var r2 = this.data = "", t2 = this.size = 200;
        this.useDynamicSize = false, this.dynamicSize = t2;
        var i3 = this.typeNumber = -1;
        this.errorCorrectLevel = b.errorCorrectLevel.H;
        var n2 = this.margin = 0;
        this.areaColor = "#FFFFFF", this.backgroundColor = "rgba(255,255,255,0)", this.backgroundImageSrc = void 0;
        var a2 = this.backgroundImageWidth = void 0, d2 = this.backgroundImageHeight = void 0, u2 = this.backgroundImageX = void 0, s2 = this.backgroundImageY = void 0;
        this.backgroundImageAlpha = 1, this.backgroundImageBorderRadius = 0;
        var g2 = this.backgroundPadding = 0;
        this.foregroundColor = "#000000", this.foregroundImageSrc = void 0;
        var l2 = this.foregroundImageWidth = void 0, h2 = this.foregroundImageHeight = void 0, c2 = this.foregroundImageX = void 0, m2 = this.foregroundImageY = void 0, f2 = this.foregroundImagePadding = 0;
        this.foregroundImageBackgroundColor = "#FFFFFF";
        var v2 = this.foregroundImageBorderRadius = 0, p2 = this.foregroundImageShadowOffsetX = 0, y = this.foregroundImageShadowOffsetY = 0, k = this.foregroundImageShadowBlur = 0;
        this.foregroundImageShadowColor = "#808080";
        var w = this.foregroundPadding = 0, I = this.positionProbeBackgroundColor = void 0, B = this.positionProbeForegroundColor = void 0, S = this.separatorColor = void 0, P = this.positionAdjustBackgroundColor = void 0, T = this.positionAdjustForegroundColor = void 0, L = this.timingBackgroundColor = void 0, D = this.timingForegroundColor = void 0, E = this.typeNumberBackgroundColor = void 0, A = this.typeNumberForegroundColor = void 0, N = this.darkBlockColor = void 0;
        this.base = void 0, this.modules = [], this.moduleCount = 0;
        var z = this.canvasContext = void 0;
        this.drawReserve = false, this.isMaked = false, Object.defineProperties(this, { data: { get() {
          if (r2 === "" || r2 === void 0)
            throw formatAppLog("error", "at node_modules/uqrcodejs/uqrcode.js:34", "[uQRCode]: data must be set!"), new b.Error("data must be set!");
          return r2;
        }, set(o3) {
          r2 = String(o3);
        } }, size: { get: () => t2, set(o3) {
          t2 = Number(o3);
        } }, typeNumber: { get: () => i3, set(o3) {
          i3 = Number(o3);
        } }, margin: { get: () => n2, set(o3) {
          n2 = Number(o3);
        } }, backgroundImageWidth: { get() {
          return a2 === void 0 ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * a2 : a2;
        }, set(o3) {
          a2 = Number(o3);
        } }, backgroundImageHeight: { get() {
          return d2 === void 0 ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * d2 : d2;
        }, set(o3) {
          d2 = Number(o3);
        } }, backgroundImageX: { get() {
          return u2 === void 0 ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * u2 : u2;
        }, set(o3) {
          u2 = Number(o3);
        } }, backgroundImageY: { get() {
          return s2 === void 0 ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * s2 : s2;
        }, set(o3) {
          s2 = Number(o3);
        } }, backgroundPadding: { get: () => g2, set(o3) {
          g2 = o3 > 1 ? 1 : o3 < 0 ? 0 : o3;
        } }, foregroundImageWidth: { get() {
          return l2 === void 0 ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * l2 : l2;
        }, set(o3) {
          l2 = Number(o3);
        } }, foregroundImageHeight: { get() {
          return h2 === void 0 ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * h2 : h2;
        }, set(o3) {
          h2 = Number(o3);
        } }, foregroundImageX: { get() {
          return c2 === void 0 ? this.dynamicSize / 2 - this.foregroundImageWidth / 2 : this.useDynamicSize ? this.dynamicSize / this.size * c2 : c2;
        }, set(o3) {
          c2 = Number(o3);
        } }, foregroundImageY: { get() {
          return m2 === void 0 ? this.dynamicSize / 2 - this.foregroundImageHeight / 2 : this.useDynamicSize ? this.dynamicSize / this.size * m2 : m2;
        }, set(o3) {
          m2 = Number(o3);
        } }, foregroundImagePadding: { get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * f2 : f2;
        }, set(o3) {
          f2 = Number(o3);
        } }, foregroundImageBorderRadius: { get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * v2 : v2;
        }, set(o3) {
          v2 = Number(o3);
        } }, foregroundImageShadowOffsetX: { get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * p2 : p2;
        }, set(o3) {
          p2 = Number(o3);
        } }, foregroundImageShadowOffsetY: { get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * y : y;
        }, set(o3) {
          y = Number(o3);
        } }, foregroundImageShadowBlur: { get() {
          return this.useDynamicSize ? this.dynamicSize / this.size * k : k;
        }, set(o3) {
          k = Number(o3);
        } }, foregroundPadding: { get: () => w, set(o3) {
          w = o3 > 1 ? 1 : o3 < 0 ? 0 : o3;
        } }, positionProbeBackgroundColor: { get() {
          return I || this.backgroundColor;
        }, set(o3) {
          I = o3;
        } }, positionProbeForegroundColor: { get() {
          return B || this.foregroundColor;
        }, set(o3) {
          B = o3;
        } }, separatorColor: { get() {
          return S || this.backgroundColor;
        }, set(o3) {
          S = o3;
        } }, positionAdjustBackgroundColor: { get() {
          return P || this.backgroundColor;
        }, set(o3) {
          P = o3;
        } }, positionAdjustForegroundColor: { get() {
          return T || this.foregroundColor;
        }, set(o3) {
          T = o3;
        } }, timingBackgroundColor: { get() {
          return L || this.backgroundColor;
        }, set(o3) {
          L = o3;
        } }, timingForegroundColor: { get() {
          return D || this.foregroundColor;
        }, set(o3) {
          D = o3;
        } }, typeNumberBackgroundColor: { get() {
          return E || this.backgroundColor;
        }, set(o3) {
          E = o3;
        } }, typeNumberForegroundColor: { get() {
          return A || this.foregroundColor;
        }, set(o3) {
          A = o3;
        } }, darkBlockColor: { get() {
          return N || this.foregroundColor;
        }, set(o3) {
          N = o3;
        } }, canvasContext: { get() {
          if (z === void 0)
            throw formatAppLog("error", "at node_modules/uqrcodejs/uqrcode.js:34", "[uQRCode]: use drawCanvas, you need to set the canvasContext!"), new b.Error("use drawCanvas, you need to set the canvasContext!");
          return z;
        }, set(o3) {
          z = C(o3);
        } } }), b.plugins.forEach((o3) => o3(b, this, false)), o2 && this.setOptions(o2), e2 && (this.canvasContext = C(e2));
      }
      return f.prototype = { get: function(o2) {
        return this.num[o2];
      }, getLength: function() {
        return this.num.length;
      }, multiply: function(o2) {
        for (var e2 = new Array(this.getLength() + o2.getLength() - 1), r2 = 0; r2 < this.getLength(); r2++)
          for (var t2 = 0; t2 < o2.getLength(); t2++)
            e2[r2 + t2] ^= c.gexp(c.glog(this.get(r2)) + c.glog(o2.get(t2)));
        return new f(e2, 0);
      }, mod: function(o2) {
        if (this.getLength() - o2.getLength() < 0)
          return this;
        for (var e2 = c.glog(this.get(0)) - c.glog(o2.get(0)), r2 = new Array(this.getLength()), t2 = 0; t2 < this.getLength(); t2++)
          r2[t2] = this.get(t2);
        for (t2 = 0; t2 < o2.getLength(); t2++)
          r2[t2] ^= c.gexp(c.glog(o2.get(t2)) + e2);
        return new f(r2, 0).mod(o2);
      } }, v.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], v.getRSBlocks = function(o2, e2) {
        var r2 = v.getRsBlockTable(o2, e2);
        if (r2 == null)
          throw new Error("bad rs block @ typeNumber:" + o2 + "/errorCorrectLevel:" + e2);
        for (var t2 = r2.length / 3, i3 = new Array(), n2 = 0; n2 < t2; n2++)
          for (var a2 = r2[3 * n2 + 0], d2 = r2[3 * n2 + 1], u2 = r2[3 * n2 + 2], s2 = 0; s2 < a2; s2++)
            i3.push(new v(d2, u2));
        return i3;
      }, v.getRsBlockTable = function(o2, e2) {
        switch (e2) {
          case t.L:
            return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 0];
          case t.M:
            return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 1];
          case t.Q:
            return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 2];
          case t.H:
            return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 3];
          default:
            return;
        }
      }, p.prototype = { get: function(o2) {
        var e2 = Math.floor(o2 / 8);
        return (this.buffer[e2] >>> 7 - o2 % 8 & 1) == 1;
      }, put: function(o2, e2) {
        for (var r2 = 0; r2 < e2; r2++)
          this.putBit((o2 >>> e2 - r2 - 1 & 1) == 1);
      }, getLengthInBits: function() {
        return this.length;
      }, putBit: function(o2) {
        var e2 = Math.floor(this.length / 8);
        this.buffer.length <= e2 && this.buffer.push(0), o2 && (this.buffer[e2] |= 128 >>> this.length % 8), this.length++;
      } }, e.errorCorrectLevel = t, b.errorCorrectLevel = e.errorCorrectLevel, b.Error = function(o2) {
        this.errMsg = "[uQRCode]: " + o2;
      }, b.plugins = [], b.use = function(o2) {
        typeof o2 == "function" && b.plugins.push(o2);
      }, b.prototype.loadImage = function(o2) {
        return Promise.resolve(o2);
      }, b.prototype.setOptions = function(o2) {
        var e2, r2, t2, i3, n2, a2, d2, u2, s2, g2, l2, h2, c2, m2, f2, v2, p2, C2, b2, y, k, w, I, B, S, P, T, L, D, E, A, N, z, _, M, O, R, x, F, H, X, Y, j, W, G, K, Q, U, $, J, q, V, Z, oo, eo, ro;
        o2 && (Object.keys(o2).forEach((e3) => {
          this[e3] = o2[e3];
        }), function(o3 = {}, e3 = {}, r3 = false) {
          let t3;
          t3 = r3 ? o3 : __spreadValues({}, o3);
          for (let o4 in e3) {
            var i4 = e3[o4];
            i4 != null && (i4.constructor == Object ? t3[o4] = this.deepReplace(t3[o4], i4) : i4.constructor != String || i4 ? t3[o4] = i4 : t3[o4] = t3[o4]);
          }
        }(this, { data: o2.data || o2.text, size: o2.size, useDynamicSize: o2.useDynamicSize, typeNumber: o2.typeNumber, errorCorrectLevel: o2.errorCorrectLevel, margin: o2.margin, areaColor: o2.areaColor, backgroundColor: o2.backgroundColor || ((e2 = o2.background) === null || e2 === void 0 ? void 0 : e2.color), backgroundImageSrc: o2.backgroundImageSrc || ((r2 = o2.background) === null || r2 === void 0 || (t2 = r2.image) === null || t2 === void 0 ? void 0 : t2.src), backgroundImageWidth: o2.backgroundImageWidth || ((i3 = o2.background) === null || i3 === void 0 || (n2 = i3.image) === null || n2 === void 0 ? void 0 : n2.width), backgroundImageHeight: o2.backgroundImageHeight || ((a2 = o2.background) === null || a2 === void 0 || (d2 = a2.image) === null || d2 === void 0 ? void 0 : d2.height), backgroundImageX: o2.backgroundImageX || ((u2 = o2.background) === null || u2 === void 0 || (s2 = u2.image) === null || s2 === void 0 ? void 0 : s2.x), backgroundImageY: o2.backgroundImageY || ((g2 = o2.background) === null || g2 === void 0 || (l2 = g2.image) === null || l2 === void 0 ? void 0 : l2.y), backgroundImageAlpha: o2.backgroundImageAlpha || ((h2 = o2.background) === null || h2 === void 0 || (c2 = h2.image) === null || c2 === void 0 ? void 0 : c2.alpha), backgroundImageBorderRadius: o2.backgroundImageBorderRadius || ((m2 = o2.background) === null || m2 === void 0 || (f2 = m2.image) === null || f2 === void 0 ? void 0 : f2.borderRadius), backgroundPadding: o2.backgroundPadding, foregroundColor: o2.foregroundColor || ((v2 = o2.foreground) === null || v2 === void 0 ? void 0 : v2.color), foregroundImageSrc: o2.foregroundImageSrc || ((p2 = o2.foreground) === null || p2 === void 0 || (C2 = p2.image) === null || C2 === void 0 ? void 0 : C2.src), foregroundImageWidth: o2.foregroundImageWidth || ((b2 = o2.foreground) === null || b2 === void 0 || (y = b2.image) === null || y === void 0 ? void 0 : y.width), foregroundImageHeight: o2.foregroundImageHeight || ((k = o2.foreground) === null || k === void 0 || (w = k.image) === null || w === void 0 ? void 0 : w.height), foregroundImageX: o2.foregroundImageX || ((I = o2.foreground) === null || I === void 0 || (B = I.image) === null || B === void 0 ? void 0 : B.x), foregroundImageY: o2.foregroundImageY || ((S = o2.foreground) === null || S === void 0 || (P = S.image) === null || P === void 0 ? void 0 : P.y), foregroundImagePadding: o2.foregroundImagePadding || ((T = o2.foreground) === null || T === void 0 || (L = T.image) === null || L === void 0 ? void 0 : L.padding), foregroundImageBackgroundColor: o2.foregroundImageBackgroundColor || ((D = o2.foreground) === null || D === void 0 || (E = D.image) === null || E === void 0 ? void 0 : E.backgroundColor), foregroundImageBorderRadius: o2.foregroundImageBorderRadius || ((A = o2.foreground) === null || A === void 0 || (N = A.image) === null || N === void 0 ? void 0 : N.borderRadius), foregroundImageShadowOffsetX: o2.foregroundImageShadowOffsetX || ((z = o2.foreground) === null || z === void 0 || (_ = z.image) === null || _ === void 0 ? void 0 : _.shadowOffsetX), foregroundImageShadowOffsetY: o2.foregroundImageShadowOffsetY || ((M = o2.foreground) === null || M === void 0 || (O = M.image) === null || O === void 0 ? void 0 : O.shadowOffsetY), foregroundImageShadowBlur: o2.foregroundImageShadowBlur || ((R = o2.foreground) === null || R === void 0 || (x = R.image) === null || x === void 0 ? void 0 : x.shadowBlur), foregroundImageShadowColor: o2.foregroundImageShadowColor || ((F = o2.foreground) === null || F === void 0 || (H = F.image) === null || H === void 0 ? void 0 : H.shadowColor), foregroundPadding: o2.foregroundPadding, positionProbeBackgroundColor: o2.positionProbeBackgroundColor || ((X = o2.positionProbe) === null || X === void 0 ? void 0 : X.backgroundColor) || ((Y = o2.positionDetection) === null || Y === void 0 ? void 0 : Y.backgroundColor), positionProbeForegroundColor: o2.positionProbeForegroundColor || ((j = o2.positionProbe) === null || j === void 0 ? void 0 : j.foregroundColor) || ((W = o2.positionDetection) === null || W === void 0 ? void 0 : W.foregroundColor), separatorColor: o2.separatorColor || ((G = o2.separator) === null || G === void 0 ? void 0 : G.color), positionAdjustBackgroundColor: o2.positionAdjustBackgroundColor || ((K = o2.positionAdjust) === null || K === void 0 ? void 0 : K.backgroundColor) || ((Q = o2.alignment) === null || Q === void 0 ? void 0 : Q.backgroundColor), positionAdjustForegroundColor: o2.positionAdjustForegroundColor || ((U = o2.positionAdjust) === null || U === void 0 ? void 0 : U.foregroundColor) || (($ = o2.alignment) === null || $ === void 0 ? void 0 : $.foregroundColor), timingBackgroundColor: o2.timingBackgroundColor || ((J = o2.timing) === null || J === void 0 ? void 0 : J.backgroundColor), timingForegroundColor: o2.timingForegroundColor || ((q = o2.timing) === null || q === void 0 ? void 0 : q.foregroundColor), typeNumberBackgroundColor: o2.typeNumberBackgroundColor || ((V = o2.typeNumber) === null || V === void 0 ? void 0 : V.backgroundColor) || ((Z = o2.versionInformation) === null || Z === void 0 ? void 0 : Z.backgroundColor), typeNumberForegroundColor: o2.typeNumberForegroundColor || ((oo = o2.typeNumber) === null || oo === void 0 ? void 0 : oo.foregroundColor) || ((eo = o2.versionInformation) === null || eo === void 0 ? void 0 : eo.foregroundColor), darkBlockColor: o2.darkBlockColor || ((ro = o2.darkBlock) === null || ro === void 0 ? void 0 : ro.color) }, true));
      }, b.prototype.make = function() {
        let { foregroundColor: o2, backgroundColor: r2, typeNumber: t2, errorCorrectLevel: i3, data: n2, size: a2, margin: d2, useDynamicSize: u2 } = this;
        if (o2 === r2)
          throw formatAppLog("error", "at node_modules/uqrcodejs/uqrcode.js:34", "[uQRCode]: foregroundColor and backgroundColor cannot be the same!"), new b.Error("foregroundColor and backgroundColor cannot be the same!");
        var s2 = new e(t2, i3);
        s2.addData(function(o3) {
          o3 = o3.toString();
          for (var e2, r3 = "", t3 = 0; t3 < o3.length; t3++)
            (e2 = o3.charCodeAt(t3)) >= 1 && e2 <= 127 ? r3 += o3.charAt(t3) : e2 > 2047 ? (r3 += String.fromCharCode(224 | e2 >> 12 & 15), r3 += String.fromCharCode(128 | e2 >> 6 & 63), r3 += String.fromCharCode(128 | e2 >> 0 & 63)) : (r3 += String.fromCharCode(192 | e2 >> 6 & 31), r3 += String.fromCharCode(128 | e2 >> 0 & 63));
          return r3;
        }(n2)), s2.make(), this.base = s2, this.typeNumber = s2.typeNumber, this.modules = s2.modules, this.moduleCount = s2.moduleCount, this.dynamicSize = u2 ? Math.ceil((a2 - 2 * d2) / s2.moduleCount) * s2.moduleCount + 2 * d2 : a2, function(o3) {
          let { dynamicSize: e2, margin: r3, backgroundColor: t3, backgroundPadding: i4, foregroundColor: n3, foregroundPadding: a3, modules: d3, moduleCount: u3 } = o3, s3 = (e2 - 2 * r3) / u3, g2 = s3, l2 = 0;
          i4 > 0 && (l2 = g2 * i4 / 2, g2 -= 2 * l2);
          let h2 = s3, c2 = 0;
          a3 > 0 && (c2 = h2 * a3 / 2, h2 -= 2 * c2);
          for (var m2 = 0; m2 < u3; m2++)
            for (var f2 = 0; f2 < u3; f2++) {
              var v2 = f2 * s3 + r3, p2 = m2 * s3 + r3;
              if (d3[m2][f2]) {
                var C2 = c2, b2 = v2 + c2, y = p2 + c2, k = h2, w = h2;
                d3[m2][f2] = { type: ["foreground"], color: n3, isBlack: true, isDrawn: false, destX: v2, destY: p2, destWidth: s3, destHeight: s3, x: b2, y, width: k, height: w, paddingTop: C2, paddingRight: C2, paddingBottom: C2, paddingLeft: C2 };
              } else
                C2 = l2, b2 = v2 + l2, y = p2 + l2, k = g2, w = g2, d3[m2][f2] = { type: ["background"], color: t3, isBlack: false, isDrawn: false, destX: v2, destY: p2, destWidth: s3, destHeight: s3, x: b2, y, width: k, height: w, paddingTop: C2, paddingRight: C2, paddingBottom: C2, paddingLeft: C2 };
            }
        }(this), function(o3) {
          let { modules: e2, moduleCount: r3, positionProbeBackgroundColor: t3, positionProbeForegroundColor: i4 } = o3, n3 = r3 - 7;
          [[0, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1], [4, 0, 1], [5, 0, 1], [6, 0, 1], [0, 1, 1], [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 0], [6, 1, 1], [0, 2, 1], [1, 2, 0], [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 2, 0], [6, 2, 1], [0, 3, 1], [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 1], [5, 3, 0], [6, 3, 1], [0, 4, 1], [1, 4, 0], [2, 4, 1], [3, 4, 1], [4, 4, 1], [5, 4, 0], [6, 4, 1], [0, 5, 1], [1, 5, 0], [2, 5, 0], [3, 5, 0], [4, 5, 0], [5, 5, 0], [6, 5, 1], [0, 6, 1], [1, 6, 1], [2, 6, 1], [3, 6, 1], [4, 6, 1], [5, 6, 1], [6, 6, 1]].forEach((o4) => {
            var r4 = e2[o4[0]][o4[1]], a3 = e2[o4[0] + n3][o4[1]], d3 = e2[o4[0]][o4[1] + n3];
            d3.type.push("positionProbe"), a3.type.push("positionProbe"), r4.type.push("positionProbe"), r4.color = o4[2] == 1 ? i4 : t3, a3.color = o4[2] == 1 ? i4 : t3, d3.color = o4[2] == 1 ? i4 : t3;
          });
        }(this), function(o3) {
          let { modules: e2, moduleCount: r3, separatorColor: t3 } = o3;
          [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]].forEach((o4) => {
            var i4 = e2[o4[0]][o4[1]], n3 = e2[r3 - o4[0] - 1][o4[1]], a3 = e2[o4[0]][r3 - o4[1] - 1];
            a3.type.push("separator"), n3.type.push("separator"), i4.type.push("separator"), i4.color = t3, n3.color = t3, a3.color = t3;
          });
        }(this), function(o3) {
          let { typeNumber: e2, modules: r3, moduleCount: t3, foregroundColor: i4, backgroundColor: n3, positionAdjustForegroundColor: a3, positionAdjustBackgroundColor: d3, timingForegroundColor: u3, timingBackgroundColor: s3 } = o3;
          const g2 = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]][e2 - 1];
          if (g2) {
            const o4 = [[-2, -2, 1], [-1, -2, 1], [0, -2, 1], [1, -2, 1], [2, -2, 1], [-2, -1, 1], [-1, -1, 0], [0, -1, 0], [1, -1, 0], [2, -1, 1], [-2, 0, 1], [-1, 0, 0], [0, 0, 1], [1, 0, 0], [2, 0, 1], [-2, 1, 1], [-1, 1, 0], [0, 1, 0], [1, 1, 0], [2, 1, 1], [-2, 2, 1], [-1, 2, 1], [0, 2, 1], [1, 2, 1], [2, 2, 1]], e3 = g2.length;
            for (let l2 = 0; l2 < e3; l2++)
              for (let h2 = 0; h2 < e3; h2++) {
                let { x: e4, y: c2 } = { x: g2[l2], y: g2[h2] };
                e4 < 9 && c2 < 9 || e4 > t3 - 9 - 1 && c2 < 9 || c2 > t3 - 9 - 1 && e4 < 9 || o4.forEach((o5) => {
                  var t4 = r3[e4 + o5[0]][c2 + o5[1]];
                  t4.type.push("positionAdjust"), t4.type.includes("timing") ? o5[2] == 1 ? t4.color = a3 == i4 ? u3 : a3 : t4.color = a3 == i4 && d3 == n3 ? s3 : d3 : t4.color = o5[2] == 1 ? a3 : d3;
                });
              }
          }
        }(this), function(o3) {
          let { modules: e2, moduleCount: r3, timingForegroundColor: t3, timingBackgroundColor: i4 } = o3, n3 = r3 - 16;
          for (let o4 = 0; o4 < n3; o4++) {
            var a3 = e2[6][8 + o4], d3 = e2[8 + o4][6];
            a3.type.push("timing"), d3.type.push("timing"), a3.color = 1 & o4 ^ 1 ? t3 : i4, d3.color = 1 & o4 ^ 1 ? t3 : i4;
          }
        }(this), function(o3) {
          let { modules: e2, moduleCount: r3, darkBlockColor: t3 } = o3;
          var i4 = e2[r3 - 7 - 1][8];
          i4.type.push("darkBlock"), i4.color = t3;
        }(this), function(o3) {
          let { typeNumber: e2, modules: r3, moduleCount: t3, typeNumberBackgroundColor: i4, typeNumberForegroundColor: n3 } = o3;
          if (e2 < 7)
            return r3;
          const a3 = [0, 0, 0, 0, 0, 0, 0, "000111110010010100", "001000010110111100", "001001101010011001", "001010010011010011", "001011101111110110", "001100011101100010", "001101100001000111", "001110011000001101", "001111100100101000", "010000101101111000", "010001010001011101", "010010101000010111", "010011010100110010", "010100100110100110", "010101011010000011", "010110100011001001", "010111011111101100", "011000111011000100", "011001000111100001", "011010111110101011", "011011000010001110", "011100110000011010", "011101001100111111", "011110110101110101", "011111001001010000", "100000100111010101", "100001011011110000", "100010100010111010", "100011011110011111", "100100101100001011", "100101010000101110", "100110101001100100", "100111010101000001", "101000110001101001"];
          let d3 = a3[e2] + a3[e2], u3 = [t3 - 11, t3 - 10, t3 - 9];
          [[5, u3[2]], [5, u3[1]], [5, u3[0]], [4, u3[2]], [4, u3[1]], [4, u3[0]], [3, u3[2]], [3, u3[1]], [3, u3[0]], [2, u3[2]], [2, u3[1]], [2, u3[0]], [1, u3[2]], [1, u3[1]], [1, u3[0]], [0, u3[2]], [0, u3[1]], [0, u3[0]], [u3[2], 5], [u3[1], 5], [u3[0], 5], [u3[2], 4], [u3[1], 4], [u3[0], 4], [u3[2], 3], [u3[1], 3], [u3[0], 3], [u3[2], 2], [u3[1], 2], [u3[0], 2], [u3[2], 1], [u3[1], 1], [u3[0], 1], [u3[2], 0], [u3[1], 0], [u3[0], 0]].forEach((o4, e3) => {
            var t4 = r3[o4[0]][o4[1]];
            t4.type.push("typeNumber"), t4.color = d3[e3] == "1" ? n3 : i4;
          });
        }(this), this.isMaked = true;
      }, b.prototype.getDrawModules = function() {
        let o2 = [], { modules: e2, moduleCount: r2, dynamicSize: t2, areaColor: i3, backgroundImageSrc: n2, backgroundImageX: a2, backgroundImageY: d2, backgroundImageWidth: u2, backgroundImageHeight: s2, backgroundImageAlpha: g2, backgroundImageBorderRadius: l2, foregroundImageSrc: h2, foregroundImageX: c2, foregroundImageY: m2, foregroundImageWidth: f2, foregroundImageHeight: v2, foregroundImagePadding: p2, foregroundImageBackgroundColor: C2, foregroundImageBorderRadius: b2, foregroundImageShadowOffsetX: y, foregroundImageShadowOffsetY: k, foregroundImageShadowBlur: w, foregroundImageShadowColor: I } = this;
        i3 && o2.push({ name: "area", type: "area", color: i3, x: 0, y: 0, width: t2, height: t2 }), n2 && o2.push({ name: "backgroundImage", type: "image", imageSrc: n2, mappingName: "backgroundImageSrc", x: a2, y: d2, width: u2, height: s2, alpha: g2, borderRadius: l2 });
        for (var B = 0; B < r2; B++)
          for (var S = 0; S < r2; S++) {
            var P = e2[B][S];
            P.isDrawn || (P.type.includes("foreground") ? o2.push({ name: "foreground", type: "tile", color: P.color, destX: P.destX, destY: P.destY, destWidth: P.destWidth, destHeight: P.destHeight, x: P.x, y: P.y, width: P.width, height: P.height, paddingTop: P.paddingTop, paddingRight: P.paddingRight, paddingBottom: P.paddingBottom, paddingLeft: P.paddingLeft, rowIndex: B, colIndex: S }) : o2.push({ name: "background", type: "tile", color: P.color, destX: P.destX, destY: P.destY, destWidth: P.destWidth, destHeight: P.destHeight, x: P.x, y: P.y, width: P.width, height: P.height, paddingTop: P.paddingTop, paddingRight: P.paddingRight, paddingBottom: P.paddingBottom, paddingLeft: P.paddingLeft, rowIndex: B, colIndex: S }), P.isDrawn = true);
          }
        return h2 && o2.push({ name: "foregroundImage", type: "image", imageSrc: h2, mappingName: "foregroundImageSrc", x: c2, y: m2, width: f2, height: v2, padding: p2, backgroundColor: C2, borderRadius: b2, shadowOffsetX: y, shadowOffsetY: k, shadowBlur: w, shadowColor: I }), o2;
      }, b.prototype.isBlack = function(o2, e2) {
        var r2 = this.moduleCount;
        return !(0 > o2 || 0 > e2 || o2 >= r2 || e2 >= r2) && this.modules[o2][e2].isBlack;
      }, b.prototype.drawCanvas = function() {
        let { isMaked: o2, canvasContext: e2, useDynamicSize: r2, dynamicSize: t2, foregroundColor: i3, foregroundPadding: n2, backgroundColor: a2, backgroundPadding: d2, drawReserve: u2, margin: s2 } = this;
        if (!o2)
          return formatAppLog("error", "at node_modules/uqrcodejs/uqrcode.js:34", "[uQRCode]: please execute the make method first!"), Promise.reject(new b.Error("please execute the make method first!"));
        let g2 = this.getDrawModules(), l2 = async (o3, r3) => {
          try {
            e2.clearRect(0, 0, t2, t2), e2.draw(false);
            for (var i4 = 0; i4 < g2.length; i4++) {
              var n3 = g2[i4];
              switch (e2.save(), n3.type) {
                case "area":
                  e2.setFillStyle(n3.color), e2.fillRect(n3.x, n3.y, n3.width, n3.height);
                  break;
                case "tile":
                  var a3 = n3.x, d3 = n3.y, s3 = n3.width, l3 = n3.height;
                  e2.beginPath(), e2.moveTo(a3, d3), e2.arcTo(a3 + s3, d3, a3 + s3, d3 + l3, 0), e2.arcTo(a3 + s3, d3 + l3, a3, d3 + l3, 0), e2.arcTo(a3, d3 + l3, a3, d3, 0), e2.arcTo(a3, d3, a3 + s3, d3, 0), e2.closePath(), e2.fillStyle = n3.color, e2.fill(), e2.clip();
                  break;
                case "image":
                  if (n3.name === "backgroundImage") {
                    a3 = n3.x, d3 = n3.y, s3 = n3.width, l3 = n3.height;
                    s3 < 2 * (c2 = n3.borderRadius) && (c2 = s3 / 2), l3 < 2 * c2 && (c2 = l3 / 2), e2.globalAlpha = n3.alpha, e2.beginPath(), e2.moveTo(a3 + c2, d3), e2.arcTo(a3 + s3, d3, a3 + s3, d3 + l3, c2), e2.arcTo(a3 + s3, d3 + l3, a3, d3 + l3, c2), e2.arcTo(a3, d3 + l3, a3, d3, c2), e2.arcTo(a3, d3, a3 + s3, d3, c2), e2.closePath(), e2.strokeStyle = "rgba(0,0,0,0)", e2.stroke(), e2.clip();
                    try {
                      var h2 = await this.loadImage(n3.imageSrc);
                      e2.drawImage(h2, n3.x, n3.y, n3.width, n3.height);
                    } catch (o4) {
                      throw formatAppLog("error", "at node_modules/uqrcodejs/uqrcode.js:34", `[uQRCode]: ${n3.mappingName} invalid!`), new b.Error(`${n3.mappingName} invalid!`);
                    }
                  } else if (n3.name === "foregroundImage") {
                    var c2;
                    a3 = n3.x, d3 = n3.y, s3 = n3.width, l3 = n3.height;
                    s3 < 2 * (c2 = n3.borderRadius) && (c2 = s3 / 2), l3 < 2 * c2 && (c2 = l3 / 2);
                    var m2 = n3.x - n3.padding, f2 = n3.y - n3.padding, v2 = n3.width + 2 * n3.padding, p2 = n3.height + 2 * n3.padding, C2 = v2 / s3 * c2;
                    v2 < 2 * C2 && (C2 = v2 / 2), p2 < 2 * C2 && (C2 = p2 / 2), e2.save(), e2.shadowOffsetX = n3.shadowOffsetX, e2.shadowOffsetY = n3.shadowOffsetY, e2.shadowBlur = n3.shadowBlur, e2.shadowColor = n3.shadowColor, e2.beginPath(), e2.moveTo(m2 + C2, f2), e2.arcTo(m2 + v2, f2, m2 + v2, f2 + p2, C2), e2.arcTo(m2 + v2, f2 + p2, m2, f2 + p2, C2), e2.arcTo(m2, f2 + p2, m2, f2, C2), e2.arcTo(m2, f2, m2 + v2, f2, C2), e2.closePath(), e2.setFillStyle(n3.backgroundColor), e2.fill(), e2.restore(), e2.beginPath(), e2.moveTo(m2 + C2, f2), e2.arcTo(m2 + v2, f2, m2 + v2, f2 + p2, C2), e2.arcTo(m2 + v2, f2 + p2, m2, f2 + p2, C2), e2.arcTo(m2, f2 + p2, m2, f2, C2), e2.arcTo(m2, f2, m2 + v2, f2, C2), e2.closePath(), e2.setFillStyle(n3.padding > 0 ? n3.backgroundColor : "rgba(0,0,0,0)"), e2.fill(), e2.beginPath(), e2.moveTo(a3 + c2, d3), e2.arcTo(a3 + s3, d3, a3 + s3, d3 + l3, c2), e2.arcTo(a3 + s3, d3 + l3, a3, d3 + l3, c2), e2.arcTo(a3, d3 + l3, a3, d3, c2), e2.arcTo(a3, d3, a3 + s3, d3, c2), e2.closePath(), e2.strokeStyle = "rgba(0,0,0,0)", e2.stroke(), e2.clip();
                    try {
                      h2 = await this.loadImage(n3.imageSrc);
                      e2.drawImage(h2, n3.x, n3.y, n3.width, n3.height);
                    } catch (o4) {
                      throw formatAppLog("error", "at node_modules/uqrcodejs/uqrcode.js:34", `[uQRCode]: ${n3.mappingName} invalid!`), new b.Error(`${n3.mappingName} invalid!`);
                    }
                  }
              }
              u2 && e2.draw(true), e2.restore();
            }
            e2.draw(true), setTimeout(o3, 150);
          } catch (o4) {
            if (!(o4 instanceof b.Error))
              throw o4;
            r3(o4);
          }
        };
        return new Promise((o3, e3) => {
          l2(o3, e3);
        });
      }, b.prototype.draw = function() {
        return this.drawCanvas();
      }, b.prototype.register = function(o2) {
        o2 && o2(b, this, true);
      }, b;
    });
  })(uqrcode);
  var UQRCode = uqrcode.exports;
  const _sfc_main$u = {
    data() {
      return {
        qrcodeWidth: 275,
        value: "asfasde2eqwfefsdvasfasde2eqwfefsdvasfasde2eqwfefsdv",
        showAddSucess: false,
        showActiveModal: false
      };
    },
    onReady() {
      var qr = new UQRCode();
      qr.data = this.value;
      qr.size = uni.upx2px(this.qrcodeWidth);
      qr.make();
      var canvasContext = uni.createCanvasContext("qrcode", this);
      qr.canvasContext = canvasContext;
      qr.drawCanvas();
      let inter = setInterval(() => {
        this.showAddSucess = true;
        clearInterval(inter);
      }, 1e4);
    },
    methods: {
      copy() {
        copy(this.value);
      },
      navigateBack() {
        uni.navigateBack();
      },
      savePic() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const ws = page2.$getAppWebview();
        let bitmap = new plus.nativeObj.Bitmap("addUSDT");
        ws.draw(bitmap, function() {
          let fileName = `_doc/${new Date().getTime()}.png`;
          bitmap.save(fileName, {}, function(i2) {
            uni.saveImageToPhotosAlbum({
              filePath: i2.target,
              success: function() {
                bitmap.clear();
                uni.$u.toast("\u4FDD\u5B58\u56FE\u7247\u6210\u529F");
              }
            });
          }, function(e) {
            uni.$u.toast("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25");
          });
        }, function(e) {
          uni.$u.toast("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25");
        });
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "add-usdt",
      id: "addUSDT"
    }, [
      vue.createCommentVNode(" \u5BFC\u822A\u6761 "),
      vue.createElementVNode("view", { class: "au-nav" }, [
        vue.createElementVNode("view", {
          class: "an-img",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateBack && $options.navigateBack(...args))
        }, [
          vue.createVNode(_component_u__image, {
            width: "54rpx",
            height: "54rpx",
            src: "/static/home/arrow-left-black.png"
          })
        ]),
        vue.createElementVNode("view", { class: "an-title" }, "\u6DFB\u52A0 USDT"),
        vue.createVNode(_component_u__image, {
          class: "an-bg",
          width: "467rpx",
          height: "256rpx",
          src: "/static/home/usdt.png"
        })
      ]),
      vue.createCommentVNode(" \u4E8C\u7EF4\u7801 "),
      vue.createElementVNode("view", { class: "au-code" }, [
        vue.createElementVNode("view", { class: "acu-cen" }, [
          vue.createElementVNode("view", { class: "auc-canvas" }, [
            vue.createElementVNode("canvas", {
              id: "qrcode",
              "canvas-id": "qrcode",
              style: vue.normalizeStyle(`width: ${$data.qrcodeWidth}rpx;height: ${$data.qrcodeWidth}rpx;`)
            }, null, 4)
          ])
        ]),
        vue.createElementVNode("view", { class: "auc-text" }, "\u50C5\u652F\u6301\u5C0D\u8A72\u5730\u5740\u5145\u503CUSDT"),
        vue.createElementVNode("view", { class: "auc-address" }, [
          vue.createElementVNode("view", { class: "auca-left" }, [
            vue.createElementVNode("view", { class: "aucal-top" }, "USDT \u6DFB\u52A0\u5730\u5740"),
            vue.createElementVNode("text", { class: "aucal-bottom" }, vue.toDisplayString($data.value), 1)
          ]),
          vue.createElementVNode("view", {
            class: "auca-img",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.copy && $options.copy(...args))
          }, [
            vue.createVNode(_component_u__image, {
              width: "31rpx",
              height: "31rpx",
              src: "/static/home/copy.png"
            })
          ])
        ])
      ]),
      vue.createCommentVNode(" \u4FDD\u5B58\u56FE\u7247 "),
      vue.createVNode(_component_u_button, {
        class: "au-save",
        onClick: $options.savePic,
        color: "#000"
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("\u4FDD\u5B58\u5716\u7247")
        ]),
        _: 1
      }, 8, ["onClick"]),
      vue.createCommentVNode(" \u6DFB\u52A0\u6210\u529F "),
      vue.createVNode(_component_u_modal, {
        class: "noline",
        closeOnClickOverlay: true,
        onClose: _cache[3] || (_cache[3] = ($event) => $data.showAddSucess = false),
        confirmText: "\u53BB\u652F\u4ED8",
        onConfirm: $options.navigateBack,
        title: "",
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showAddSucess
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[2] || (_cache[2] = ($event) => $data.showAddSucess = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", {
              class: "n-center",
              style: { "padding": "40rpx 0" }
            }, [
              vue.createElementVNode("view", { class: "tbc-title" }, [
                vue.createVNode(_component_u__image, {
                  width: "182rpx",
                  height: "148rpx",
                  src: "/static/home/success.png"
                })
              ]),
              vue.createElementVNode("view", { class: "tbc-content" }, "\u6DFB\u52A0\u6210\u529F")
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"])
    ]);
  }
  var PagesHomeAddUSDTAddUSDT = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/home/addUSDT/addUSDT.vue"]]);
  const _sfc_main$t = {
    data() {
      return {};
    },
    methods: {
      submit() {
        uni.reLaunch({
          url: "/pages/home/home"
        });
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "pay-success" }, [
      vue.createElementVNode("view", { class: "ps-null" }, [
        vue.createVNode(_component_u_image, {
          width: "219rpx",
          height: "219rpx",
          src: "/static/home/pay-success.png"
        }),
        vue.createElementVNode("view", { class: "bccn-text" }, "\u652F\u4ED8\u6210\u529F"),
        vue.createVNode(_component_u_button, {
          class: "ps-sbmit",
          onClick: $options.submit,
          text: "\u56DE\u9996\u9801",
          color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
        }, null, 8, ["onClick", "color"])
      ])
    ]);
  }
  var PagesHomePaySuccessPaySuccess = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/home/paySuccess/paySuccess.vue"]]);
  const _sfc_main$s = {
    data() {
      return {
        value: "",
        hisList: ["BTC", "BTC", "BTC", "BTC", "BTC", "BTC", "BTC", "BTC", "BTC", "BTC", "BTC", "BTC"],
        searchList: []
      };
    },
    methods: {
      change(e) {
        if (!e)
          return;
        setTimeout(() => {
          for (let i2 = 0; i2 < 10; i2++) {
            this.searchList.push(this.value);
          }
        }, 500);
      },
      clickHot(item2) {
        this.value = item2;
      },
      clear() {
        this.searchList = [];
      },
      navBack() {
        uni.reLaunch({
          url: "/pages/trade/trade"
        });
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "search" }, [
      vue.createElementVNode("view", { class: "s-top" }, [
        vue.createVNode(_component_u__input, {
          onChange: $options.change,
          onClear: $options.clear,
          modelValue: $data.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event),
          focus: true,
          placeholder: "\u641C\u7D22\u5E63\u540D\u7A31",
          clearable: "",
          class: "st-input",
          border: "none",
          color: "#222222",
          prefixIcon: "search",
          prefixIconStyle: "font-size: 40rpx;color: #222222;padding-left: 20rpx"
        }, null, 8, ["onChange", "onClear", "modelValue"])
      ]),
      vue.createElementVNode("view", { class: "s-list" }, [
        vue.createCommentVNode(" \u70ED\u95E8 "),
        vue.withDirectives(vue.createElementVNode("view", { class: "sl-hot" }, [
          vue.createElementVNode("view", { class: "slh-title" }, "\u71B1\u9580\u6A19\u7C3D"),
          vue.createElementVNode("view", { class: "slh-ul" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.hisList, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickHot(item2),
                class: "slhu-li"
              }, vue.toDisplayString(item2), 9, ["onClick"]);
            }), 256))
          ])
        ], 512), [
          [vue.vShow, !$data.value]
        ]),
        vue.createCommentVNode(" list "),
        $data.value && $data.searchList.length ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "sl-seach-list"
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.searchList, (item2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              onClick: ($event) => $options.navBack(item2),
              class: "slsl-li"
            }, vue.toDisplayString(item2), 9, ["onClick"]);
          }), 256))
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  var PagesTradeSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/search/search.vue"]]);
  var props$6 = {
    props: {
      name: {
        type: [String, Number, Boolean],
        default: props$s.radio.name
      },
      shape: {
        type: String,
        default: props$s.radio.shape
      },
      disabled: {
        type: [String, Boolean],
        default: props$s.radio.disabled
      },
      labelDisabled: {
        type: [String, Boolean],
        default: props$s.radio.labelDisabled
      },
      activeColor: {
        type: String,
        default: props$s.radio.activeColor
      },
      inactiveColor: {
        type: String,
        default: props$s.radio.inactiveColor
      },
      iconSize: {
        type: [String, Number],
        default: props$s.radio.iconSize
      },
      labelSize: {
        type: [String, Number],
        default: props$s.radio.labelSize
      },
      label: {
        type: [String, Number],
        default: props$s.radio.label
      },
      size: {
        type: [String, Number],
        default: props$s.radio.size
      },
      color: {
        type: String,
        default: props$s.radio.color
      },
      labelColor: {
        type: String,
        default: props$s.radio.labelColor
      },
      iconColor: {
        type: String,
        default: props$s.radio.iconColor
      }
    }
  };
  const _sfc_main$r = {
    name: "u-radio",
    mixins: [mpMixin, mixin, props$6],
    data() {
      return {
        checked: false,
        parentData: {
          iconSize: 12,
          labelDisabled: null,
          disabled: null,
          shape: null,
          activeColor: null,
          inactiveColor: null,
          size: 18,
          value: null,
          modelValue: null,
          iconColor: null,
          placement: "row",
          borderBottom: false,
          iconPlacement: "left"
        }
      };
    },
    computed: {
      elDisabled() {
        return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
      },
      elLabelDisabled() {
        return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
      },
      elSize() {
        return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
      },
      elIconSize() {
        return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
      },
      elActiveColor() {
        return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
      },
      elInactiveColor() {
        return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
      },
      elLabelColor() {
        return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
      },
      elShape() {
        return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
      },
      elLabelSize() {
        return uni.$u.addUnit(this.labelSize ? this.labelSize : this.parentData.labelSize ? this.parentData.labelSize : "15");
      },
      elIconColor() {
        const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
        if (this.elDisabled) {
          return this.checked ? this.elInactiveColor : "transparent";
        } else {
          return this.checked ? iconColor : "transparent";
        }
      },
      iconClasses() {
        let classes = [];
        classes.push("u-radio__icon-wrap--" + this.elShape);
        if (this.elDisabled) {
          classes.push("u-radio__icon-wrap--disabled");
        }
        if (this.checked && this.elDisabled) {
          classes.push("u-radio__icon-wrap--disabled--checked");
        }
        return classes;
      },
      iconWrapStyle() {
        const style = {};
        style.backgroundColor = this.checked && !this.elDisabled ? this.elActiveColor : "#ffffff";
        style.borderColor = this.checked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
        style.width = uni.$u.addUnit(this.elSize);
        style.height = uni.$u.addUnit(this.elSize);
        if (this.parentData.iconPlacement === "right") {
          style.marginRight = 0;
        }
        return style;
      },
      radioStyle() {
        const style = {};
        if (this.parentData.borderBottom && this.parentData.placement === "row") {
          uni.$u.error("\u68C0\u6D4B\u5230\u60A8\u5C06borderBottom\u8BBE\u7F6E\u4E3Atrue\uFF0C\u9700\u8981\u540C\u65F6\u5C06u-radio-group\u7684placement\u8BBE\u7F6E\u4E3Acolumn\u624D\u6709\u6548");
        }
        if (this.parentData.borderBottom && this.parentData.placement === "column") {
          style.paddingBottom = uni.$u.os() === "ios" ? "12px" : "8px";
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          uni.$u.error("u-radio\u5FC5\u987B\u642D\u914Du-radio-group\u7EC4\u4EF6\u4F7F\u7528");
        }
        this.checked = this.name === this.parentData.modelValue;
      },
      updateParentData() {
        this.getParentData("u-radio-group");
      },
      iconClickHandler(e) {
        this.preventEvent(e);
        if (!this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      wrapperClickHandler(e) {
        this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
      },
      labelClickHandler(e) {
        this.preventEvent(e);
        if (!this.elLabelDisabled && !this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      emitEvent() {
        if (!this.checked) {
          this.$emit("change", this.name);
          this.$nextTick(() => {
            uni.$u.formValidate(this, "change");
          });
        }
      },
      setRadioCheckedStatus() {
        this.emitEvent();
        this.checked = true;
        typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-radio", [`u-radio-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "u-border-bottom"]]),
      onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"])),
      style: vue.normalizeStyle([$options.radioStyle])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-radio__icon-wrap", $options.iconClasses]),
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
        style: vue.normalizeStyle([$options.iconWrapStyle])
      }, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_u_icon, {
            class: "u-radio__icon-wrap__icon",
            name: "checkbox-mark",
            size: $options.elIconSize,
            color: $options.elIconColor
          }, null, 8, ["size", "color"])
        ], true)
      ], 6),
      vue.createElementVNode("text", {
        class: "u-radio__text",
        onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), ["stop"])),
        style: vue.normalizeStyle({
          color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
          fontSize: $options.elLabelSize,
          lineHeight: $options.elLabelSize
        })
      }, vue.toDisplayString(_ctx.label), 5)
    ], 6);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-354c0f29"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-radio/u-radio.vue"]]);
  var props$5 = {
    props: {
      modelValue: {
        type: [String, Number, Boolean],
        default: props$s.radioGroup.value
      },
      disabled: {
        type: Boolean,
        default: props$s.radioGroup.disabled
      },
      shape: {
        type: String,
        default: props$s.radioGroup.shape
      },
      activeColor: {
        type: String,
        default: props$s.radioGroup.activeColor
      },
      inactiveColor: {
        type: String,
        default: props$s.radioGroup.inactiveColor
      },
      name: {
        type: String,
        default: props$s.radioGroup.name
      },
      size: {
        type: [String, Number],
        default: props$s.radioGroup.size
      },
      placement: {
        type: String,
        default: props$s.radioGroup.placement
      },
      label: {
        type: [String],
        default: props$s.radioGroup.label
      },
      labelColor: {
        type: [String],
        default: props$s.radioGroup.labelColor
      },
      labelSize: {
        type: [String, Number],
        default: props$s.radioGroup.labelSize
      },
      labelDisabled: {
        type: Boolean,
        default: props$s.radioGroup.labelDisabled
      },
      iconColor: {
        type: String,
        default: props$s.radioGroup.iconColor
      },
      iconSize: {
        type: [String, Number],
        default: props$s.radioGroup.iconSize
      },
      borderBottom: {
        type: Boolean,
        default: props$s.radioGroup.borderBottom
      },
      iconPlacement: {
        type: String,
        default: props$s.radio.iconPlacement
      }
    }
  };
  const _sfc_main$q = {
    name: "u-radio-group",
    mixins: [mpMixin, mixin, props$5],
    computed: {
      parentData() {
        return [
          this.modelValue,
          this.disabled,
          this.inactiveColor,
          this.activeColor,
          this.size,
          this.labelDisabled,
          this.shape,
          this.iconSize,
          this.borderBottom,
          this.placement
        ];
      },
      bemClass() {
        return this.bem("radio-group", ["placement"]);
      }
    },
    watch: {
      parentData() {
        if (this.children.length) {
          this.children.map((child) => {
            typeof child.init === "function" && child.init();
          });
        }
      }
    },
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    emits: ["update:modelValue", "change"],
    methods: {
      unCheckedOther(childInstance) {
        this.children.map((child) => {
          if (childInstance !== child) {
            child.checked = false;
          }
        });
        const {
          name
        } = childInstance;
        this.$emit("update:modelValue", name);
        this.$emit("change", name);
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-radio-group", $options.bemClass])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2);
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-2363100d"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-radio-group/u-radio-group.vue"]]);
  const _sfc_main$p = {
    data() {
      return {
        bgColor: "#FFCA5D",
        susInfo: {
          name: "BTC",
          accountBalance: "123456.1234",
          usdtPrice: "123456.12"
        },
        proportion: {
          type: "1",
          max: "1",
          input: "",
          self: "",
          magnification: "1"
        },
        selfList: [],
        edit: false,
        type: 1
      };
    },
    onLoad(e) {
      const { edit, type: type2 } = e;
      this.edit = edit;
      if (type2)
        this.type = Number(type2);
      this.editData();
    },
    onShow(e) {
      formatAppLog("log", "at pages/trade/setStrategy/setStrategy.vue:130", e);
      uni.$on("setStraegy", (e2) => {
        this.getSelfList();
      });
    },
    methods: {
      editData() {
      },
      getSelfList() {
        this.selfList = [{
          label: "\u7A33\u5065\u578B\u7B56\u7565"
        }, {
          label: "\u6FC0\u8FDB\u578B\u7B56\u7565"
        }];
      },
      navigatorToExplain() {
        uni.navigateTo({ url: "/pages/trade/strategEexplain/strategEexplain" });
      },
      navigatorToCustom() {
        uni.navigateTo({ url: `/pages/trade/customStrategy/customStrategy?type=${this.type}` });
      },
      changeDefalut() {
        this.proportion.self = "";
      },
      changeStr() {
        this.proportion.type = "";
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_radio = resolveEasycom(vue.resolveDynamicComponent("u-radio"), __easycom_1$1);
    const _component_u_radio_group = resolveEasycom(vue.resolveDynamicComponent("u-radio-group"), __easycom_2$1);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "set-strategy page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        bgColor: $data.bgColor,
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: !$data.edit ? "\u8A2D\u7F6E\u7B56\u7565" : "\u4FEE\u6539\u7B56\u7565",
        rightIcon: "/static/home/remark.png",
        height: "92rpx",
        autoBack: true
      }, {
        right: vue.withCtx(() => [
          vue.createVNode(_component_u_image, {
            onClick: $options.navigatorToExplain,
            width: "54rpx",
            height: "54rpx",
            src: "/static/home/remark.png"
          }, null, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["bgColor", "title"]),
      vue.createElementVNode("view", { class: "stc-bg" }),
      vue.createElementVNode("view", { class: "st-content" }, [
        vue.createCommentVNode(" \u5E01\u79CD "),
        vue.createElementVNode("view", { class: "stc-sus" }, [
          vue.createElementVNode("view", { class: "stcs-li" }, [
            vue.createElementVNode("view", { class: "stcsl-top" }, "\u5E63\u7A2E"),
            vue.createElementVNode("view", { class: "stcsl-bottom" }, vue.toDisplayString($data.susInfo.name), 1)
          ]),
          vue.createElementVNode("view", { class: "stcs-li" }, [
            vue.createElementVNode("view", { class: "stcsl-top" }, "\u8CEC\u6236\u4F59\u984DUSDT"),
            vue.createElementVNode("view", { class: "stcsl-bottom" }, vue.toDisplayString($data.susInfo.accountBalance), 1)
          ]),
          vue.createElementVNode("view", { class: "stcs-li" }, [
            vue.createElementVNode("view", { class: "stcsl-top" }, "\u50F9\u683CUSDT"),
            vue.createElementVNode("view", { class: "stcsl-bottom" }, vue.toDisplayString($data.susInfo.usdtPrice), 1)
          ])
        ]),
        vue.createCommentVNode(" \u8BBE\u7F6E\u7B56\u7565 "),
        vue.createElementVNode("view", { class: "stc-set" }, [
          vue.createElementVNode("view", { class: "scts-title" }, "\u8ACB\u9078\u64C7\u60A8\u7684\u57F7\u884C\u7B56\u7565"),
          vue.createElementVNode("view", { class: "stcs-str" }, [
            vue.createVNode(_component_u_radio_group, {
              onChange: $options.changeDefalut,
              modelValue: $data.proportion.type,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.proportion.type = $event),
              activeColor: "#FCA504"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_radio, {
                  iconColor: "#222222",
                  label: "\u7A69\u5065\u578B\u7B56\u7565",
                  name: "1"
                }),
                vue.createVNode(_component_u_radio, {
                  style: { "margin-left": "20rpx" },
                  iconColor: "#222222",
                  label: "\u6FC0\u8FDB\u578B\u7B56\u7565",
                  name: "2"
                })
              ]),
              _: 1
            }, 8, ["onChange", "modelValue"])
          ]),
          $data.type === 2 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createElementVNode("view", { class: "scts-title mt" }, "\u8BBE\u7F6E\u6C38\u7EED\u5408\u7EA6\u500D\u7387"),
            vue.createElementVNode("view", { class: "stcs-str" }, [
              vue.createVNode(_component_u_radio_group, {
                onChange: $options.changeDefalut,
                modelValue: $data.proportion.magnification,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.proportion.magnification = $event),
                activeColor: "#FCA504"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_radio, {
                    iconColor: "#222222",
                    label: "\u7A69\u5065\u578B\u7B56\u7565",
                    name: "1"
                  }),
                  vue.createVNode(_component_u_radio, {
                    style: { "margin-left": "20rpx" },
                    iconColor: "#222222",
                    label: "\u6FC0\u8FDB\u578B\u7B56\u7565",
                    name: "2"
                  })
                ]),
                _: 1
              }, 8, ["onChange", "modelValue"])
            ])
          ], 64)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "scts-title scts-top" }, "\u8A2D\u7F6E\u6700\u5927\u6B62\u640D\u6BD4\u4F8B"),
          vue.createElementVNode("view", { class: "scts-proportion" }, [
            vue.createVNode(_component_u_radio_group, {
              placement: "column",
              modelValue: $data.proportion.max,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.proportion.max = $event),
              activeColor: "#FCA504"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_radio, {
                  iconColor: "#222222",
                  label: "\u9ED8\u8A8D30%",
                  name: "1"
                }),
                vue.createElementVNode("view", { class: "sctsp-inter" }, [
                  vue.createVNode(_component_u_radio, {
                    iconColor: "#222222",
                    label: "",
                    name: "2"
                  }),
                  vue.createVNode(_component_u__input, {
                    type: "number",
                    class: "stctsp-input",
                    placeholder: "\u624B\u52D5\u8F38\u5165\u8A2D\u7F6E\u6BD4\u4F8B\uFF0C\u6700\u4F4E10%",
                    border: "surround",
                    modelValue: $data.proportion.input,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.proportion.input = $event)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        vue.createCommentVNode(" \u81EA\u5B9A\u4E49\u7B56\u7565 "),
        vue.createElementVNode("view", { class: "stc-self" }, [
          vue.createElementVNode("view", {
            class: "stcs-add",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.navigatorToCustom && $options.navigatorToCustom(...args))
          }, [
            vue.createElementVNode("view", { class: "stcs-text" }, "\u81EA\u5B9A\u7FA9\u7B56\u7565"),
            vue.createVNode(_component_u_image, {
              width: "30rpx",
              height: "30rpx",
              src: "/static/trade/add.png"
            })
          ]),
          vue.createCommentVNode(" \u7B56\u7565list "),
          vue.createElementVNode("view", { class: "stcs-list" }, [
            vue.createVNode(_component_u_radio_group, {
              onChange: $options.changeStr,
              modelValue: $data.proportion.self,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.proportion.self = $event),
              activeColor: "#999999"
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.selfList, (item2, index2) => {
                  return vue.openBlock(), vue.createBlock(_component_u_radio, {
                    style: { "margin-left": "20rpx" },
                    label: item2.label,
                    name: item2.label
                  }, null, 8, ["label", "name"]);
                }), 256)),
                vue.createCommentVNode(' <u-radio style="margin-left: 20rpx;" label="\u6FC0\u8FDB\u578B\u7B56\u7565" :name="item.index"></u-radio> ')
              ]),
              _: 1
            }, 8, ["onChange", "modelValue"])
          ])
        ]),
        vue.createCommentVNode(" \u63D0\u793A "),
        vue.createElementVNode("view", { class: "stc-tip" }, "\u63D0\u793A\uFF1A\u57F7\u884C\u7B56\u7565\uFF0C\u8ACB\u63D0\u524D\u628AUSDT\u5283\u8F49\u5230\u60A8\u7684\u6C38\u7E8C\u5408\u7D04\u8CEC\u6236\u3002"),
        vue.createCommentVNode(" \u78BA\u8A8D\u57F7\u884C\u7B56\u7565 "),
        vue.createElementVNode("view", { class: "stc-btn" }, [
          vue.createVNode(_component_u_button, {
            onClick: _ctx.submit,
            class: "color000",
            color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u78BA\u8A8D\u57F7\u884C\u7B56\u7565 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var PagesTradeSetStrategySetStrategy = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/setStrategy/setStrategy.vue"]]);
  var props$4 = {
    props: {
      name: {
        type: [String, Number, Boolean],
        default: props$s.checkbox.name
      },
      shape: {
        type: String,
        default: props$s.checkbox.shape
      },
      size: {
        type: [String, Number],
        default: props$s.checkbox.size
      },
      checked: {
        type: Boolean,
        default: props$s.checkbox.checked
      },
      disabled: {
        type: [String, Boolean],
        default: props$s.checkbox.disabled
      },
      activeColor: {
        type: String,
        default: props$s.checkbox.activeColor
      },
      inactiveColor: {
        type: String,
        default: props$s.checkbox.inactiveColor
      },
      iconSize: {
        type: [String, Number],
        default: props$s.checkbox.iconSize
      },
      iconColor: {
        type: String,
        default: props$s.checkbox.iconColor
      },
      label: {
        type: [String, Number],
        default: props$s.checkbox.label
      },
      labelSize: {
        type: [String, Number],
        default: props$s.checkbox.labelSize
      },
      labelColor: {
        type: String,
        default: props$s.checkbox.labelColor
      },
      labelDisabled: {
        type: [String, Boolean],
        default: props$s.checkbox.labelDisabled
      }
    }
  };
  const _sfc_main$o = {
    name: "u-checkbox",
    mixins: [mpMixin, mixin, props$4],
    data() {
      return {
        isChecked: false,
        parentData: {
          iconSize: 12,
          labelDisabled: null,
          disabled: null,
          shape: "square",
          activeColor: null,
          inactiveColor: null,
          size: 18,
          modelValue: null,
          iconColor: null,
          placement: "row",
          borderBottom: false,
          iconPlacement: "left"
        }
      };
    },
    computed: {
      elDisabled() {
        return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
      },
      elLabelDisabled() {
        return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
      },
      elSize() {
        return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
      },
      elIconSize() {
        return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
      },
      elActiveColor() {
        return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
      },
      elInactiveColor() {
        return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
      },
      elLabelColor() {
        return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
      },
      elShape() {
        return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
      },
      elLabelSize() {
        return uni.$u.addUnit(this.labelSize ? this.labelSize : this.parentData.labelSize ? this.parentData.labelSize : "15");
      },
      elIconColor() {
        const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
        if (this.elDisabled) {
          return this.isChecked ? this.elInactiveColor : "transparent";
        } else {
          return this.isChecked ? iconColor : "transparent";
        }
      },
      iconClasses() {
        let classes = [];
        classes.push("u-checkbox__icon-wrap--" + this.elShape);
        if (this.elDisabled) {
          classes.push("u-checkbox__icon-wrap--disabled");
        }
        if (this.isChecked && this.elDisabled) {
          classes.push("u-checkbox__icon-wrap--disabled--checked");
        }
        return classes;
      },
      iconWrapStyle() {
        const style = {};
        style.backgroundColor = this.isChecked && !this.elDisabled ? this.elActiveColor : "#ffffff";
        style.borderColor = this.isChecked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
        style.width = uni.$u.addUnit(this.elSize);
        style.height = uni.$u.addUnit(this.elSize);
        if (this.parentData.iconPlacement === "right") {
          style.marginRight = 0;
        }
        return style;
      },
      checkboxStyle() {
        const style = {};
        if (this.parentData.borderBottom && this.parentData.placement === "row") {
          uni.$u.error("\u68C0\u6D4B\u5230\u60A8\u5C06borderBottom\u8BBE\u7F6E\u4E3Atrue\uFF0C\u9700\u8981\u540C\u65F6\u5C06u-checkbox-group\u7684placement\u8BBE\u7F6E\u4E3Acolumn\u624D\u6709\u6548");
        }
        if (this.parentData.borderBottom && this.parentData.placement === "column") {
          style.paddingBottom = "8px";
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          uni.$u.error("u-checkbox\u5FC5\u987B\u642D\u914Du-checkbox-group\u7EC4\u4EF6\u4F7F\u7528");
        }
        const value = this.parentData.modelValue;
        if (this.checked) {
          this.isChecked = true;
        } else if (uni.$u.test.array(value)) {
          this.isChecked = value.some((item2) => {
            return item2 === this.name;
          });
        }
      },
      updateParentData() {
        this.getParentData("u-checkbox-group");
      },
      wrapperClickHandler(e) {
        this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
      },
      iconClickHandler(e) {
        this.preventEvent(e);
        if (!this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      labelClickHandler(e) {
        this.preventEvent(e);
        if (!this.elLabelDisabled && !this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      emitEvent() {
        this.$emit("change", this.isChecked);
        this.$nextTick(() => {
          uni.$u.formValidate(this, "change");
        });
      },
      setRadioCheckedStatus() {
        this.isChecked = !this.isChecked;
        this.emitEvent();
        typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
      }
    },
    watch: {
      checked() {
        this.isChecked = this.checked;
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-checkbox", [`u-checkbox-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "u-border-bottom"]]),
      style: vue.normalizeStyle([$options.checkboxStyle]),
      onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"]))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-checkbox__icon-wrap", $options.iconClasses]),
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
        style: vue.normalizeStyle([$options.iconWrapStyle])
      }, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_u_icon, {
            class: "u-checkbox__icon-wrap__icon",
            name: "checkbox-mark",
            size: $options.elIconSize,
            color: $options.elIconColor
          }, null, 8, ["size", "color"])
        ], true)
      ], 6),
      vue.createElementVNode("text", {
        onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), ["stop"])),
        style: vue.normalizeStyle({
          color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
          fontSize: $options.elLabelSize,
          lineHeight: $options.elLabelSize
        })
      }, vue.toDisplayString(_ctx.label), 5)
    ], 6);
  }
  var __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-4dffb701"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-checkbox/u-checkbox.vue"]]);
  var props$3 = {
    props: {
      name: {
        type: String,
        default: props$s.checkboxGroup.name
      },
      modelValue: {
        type: Array,
        default: props$s.checkboxGroup.value
      },
      shape: {
        type: String,
        default: props$s.checkboxGroup.shape
      },
      disabled: {
        type: Boolean,
        default: props$s.checkboxGroup.disabled
      },
      activeColor: {
        type: String,
        default: props$s.checkboxGroup.activeColor
      },
      inactiveColor: {
        type: String,
        default: props$s.checkboxGroup.inactiveColor
      },
      size: {
        type: [String, Number],
        default: props$s.checkboxGroup.size
      },
      placement: {
        type: String,
        default: props$s.checkboxGroup.placement
      },
      labelSize: {
        type: [String, Number],
        default: props$s.checkboxGroup.labelSize
      },
      labelColor: {
        type: [String],
        default: props$s.checkboxGroup.labelColor
      },
      labelDisabled: {
        type: Boolean,
        default: props$s.checkboxGroup.labelDisabled
      },
      iconColor: {
        type: String,
        default: props$s.checkboxGroup.iconColor
      },
      iconSize: {
        type: [String, Number],
        default: props$s.checkboxGroup.iconSize
      },
      iconPlacement: {
        type: String,
        default: props$s.checkboxGroup.iconPlacement
      },
      borderBottom: {
        type: Boolean,
        default: props$s.checkboxGroup.borderBottom
      }
    }
  };
  const _sfc_main$n = {
    name: "u-checkbox-group",
    mixins: [mpMixin, mixin, props$3],
    computed: {
      parentData() {
        return [
          this.modelValue,
          this.disabled,
          this.inactiveColor,
          this.activeColor,
          this.size,
          this.labelDisabled,
          this.shape,
          this.iconSize,
          this.borderBottom,
          this.placement
        ];
      },
      bemClass() {
        return this.bem("checkbox-group", ["placement"]);
      }
    },
    watch: {
      parentData: {
        handler() {
          if (this.children.length) {
            this.children.map((child) => {
              typeof child.init === "function" && child.init();
            });
          }
        },
        deep: true
      }
    },
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    emits: ["update:modelValue", "change"],
    methods: {
      unCheckedOther(childInstance) {
        const values = [];
        this.children.map((child) => {
          if (child.isChecked) {
            values.push(child.name);
          }
        });
        this.$emit("change", values);
        this.$emit("update:modelValue", values);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-checkbox-group", $options.bemClass])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2);
  }
  var __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-42e5b97e"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.vue"]]);
  const _sfc_main$m = {
    data() {
      return {
        posList: [
          {
            id: 1,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "-100",
            floating: "30%"
          },
          {
            id: 2,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          },
          {
            id: 3,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          },
          {
            id: 4,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          },
          {
            id: 5,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          }
        ],
        loadInfo: {
          status: "nomore",
          loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
          loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
          nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86"
        },
        scrollheight: 500,
        isSlectList: false,
        showClearModal: false,
        showStrateModal: false,
        stopStrategySelect: "",
        showOkModal: false
      };
    },
    onReady() {
    },
    methods: {
      loadmore() {
      },
      cliclList(ojb) {
        this.posList.forEach((item3) => {
          if (ojb.id === item3.id) {
            item3.isActive = !item3.isActive;
          } else {
            item3.isActive = false;
          }
        });
        const item2 = this.posList.find((item3) => item3.isActive);
        this.isSlectList = (item2 == null ? void 0 : item2.isActive) ? true : false;
      },
      clearAll() {
        this.showClearModal = true;
        if (this.isSlectList)
          ;
      },
      confirmClear() {
        formatAppLog("log", "at pages/trade/position/position.vue:236", this.stopStrategySelect);
        this.showClearModal = false;
        setTimeout(() => {
          this.showOkModal = true;
        }, 1e3);
      },
      confirmStrate() {
        formatAppLog("log", "at pages/trade/position/position.vue:244", this.stopStrategySelect);
        this.showStrateModal = false;
        setTimeout(() => {
          this.showOkModal = true;
        }, 1e3);
      },
      stopStr() {
        if (!this.isSlectList)
          return;
        this.showStrateModal = true;
        setTimeout(() => {
        });
      },
      editStr() {
        if (!this.isSlectList)
          return;
        uni.navigateTo({
          url: `/pages/trade/setStrategy/setStrategy?edit=true`
        });
      },
      confirmOk() {
        this.showOkModal = false;
      },
      navigatorTo() {
        uni.navigateTo({
          url: `/pages/trade/positionRecord/positionRecord`
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    const _component_u_checkbox = resolveEasycom(vue.resolveDynamicComponent("u-checkbox"), __easycom_6);
    const _component_u_checkbox_group = resolveEasycom(vue.resolveDynamicComponent("u-checkbox-group"), __easycom_7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "position page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u6301\u5009",
        rightIcon: "/static/home/remark.png",
        height: "92rpx",
        autoBack: true
      }, {
        right: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "p-posi",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigatorTo && $options.navigatorTo(...args))
          }, [
            vue.createVNode(_component_u_image, {
              width: "48rpx",
              height: "48rpx",
              src: "/static/trade/position.png"
            }),
            vue.createElementVNode("text", { class: "pp-text" }, "\u64CD\u4F5C\u8A18\u9304")
          ])
        ]),
        _: 1
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[1] || (_cache[1] = (...args) => $options.loadmore && $options.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.posList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.posList, (item2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["ps-data", item2.isActive ? "pd-border" : ""]),
              onClick: ($event) => $options.cliclList(item2)
            }, [
              vue.createCommentVNode(" \u5E01\u79CD "),
              vue.createElementVNode("view", { class: "psd-sus" }, [
                vue.createElementVNode("view", { class: "psds-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u5E63\u7A2E"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, [
                    vue.createElementVNode("view", null, vue.toDisplayString(item2.coin), 1),
                    vue.createElementVNode("view", { class: "pb-btn" }, "\u6FC0\u8FDB")
                  ])
                ]),
                vue.createElementVNode("view", { class: "psds-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u8CEC\u6236\u4F59\u984DUSDT"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.hasUSDT), 1)
                ]),
                vue.createElementVNode("view", { class: "psds-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u50F9\u683CUSDT"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.priceUSDT), 1)
                ])
              ]),
              vue.createElementVNode("view", { class: "psd-bottom" }, [
                vue.createElementVNode("view", { class: "psdbs-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u5F53\u524D\u6301\u4ED3\u6570\u91CF"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.count), 1)
                ]),
                vue.createElementVNode("view", { class: "psdbs-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u76EE\u524D\u6D6E\u76C8"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.surplus), 1)
                ]),
                vue.createElementVNode("view", { class: "psdbs-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u6D6E\u76C8\u5229"),
                  vue.createElementVNode("view", { class: "psdsl-bottom pl-color" }, [
                    vue.createElementVNode("text", null, vue.toDisplayString(item2.surplus > 0 ? "+" : "-"), 1),
                    vue.createTextVNode(vue.toDisplayString(item2.floating), 1)
                  ])
                ])
              ])
            ], 10, ["onClick"]);
          }), 256)),
          vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
          vue.createVNode(_component_u_loadmore, {
            status: $data.loadInfo.status,
            "loading-text": $data.loadInfo.loadingText,
            "loadmore-text": $data.loadInfo.loadmoreText,
            "nomore-text": $data.loadInfo.nomoreText
          }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32),
      vue.createElementVNode("view", { class: "p-bottom" }, [
        vue.createElementVNode("view", { class: "pb-top" }, "\u8BF7\u5148\u9009\u62E9\u5BF9\u5E94\u7684\u4EA4\u6613\u5BF9\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF08\u53EA\u80FD\u9009\u4E00\u4E2A\uFF09"),
        vue.createElementVNode("view", { class: "ob-bottom" }, [
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.clearAll && $options.clearAll(...args)),
            class: "obb-li isActive"
          }, "\u4E00\u9375\u6E05\u5009"),
          vue.createElementVNode("view", {
            onClick: _cache[3] || (_cache[3] = (...args) => $options.stopStr && $options.stopStr(...args)),
            class: vue.normalizeClass(["obb-li", $data.isSlectList ? "isActive" : ""])
          }, "\u505C\u6B62\u7B56\u7565", 2),
          vue.createElementVNode("view", {
            onClick: _cache[4] || (_cache[4] = (...args) => $options.editStr && $options.editStr(...args)),
            class: vue.normalizeClass(["obb-li", $data.isSlectList ? "isActive" : ""])
          }, "\u4FEE\u6539\u7B56\u7565", 2)
        ])
      ]),
      vue.createCommentVNode(" \u4E00\u952E\u6E05\u4ED3\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        cancelText: "\u53D6\u6D88",
        onCancel: _cache[6] || (_cache[6] = ($event) => $data.showClearModal = false),
        showCancelButton: "",
        closeOnClickOverlay: true,
        onClose: _cache[7] || (_cache[7] = ($event) => $data.showClearModal = false),
        confirmText: "\u786E\u5B9A",
        onConfirm: $options.confirmClear,
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showClearModal,
        title: "\u505C\u6B62\u7B56\u7565"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[5] || (_cache[5] = ($event) => $data.showClearModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createElementVNode("view", { class: "tbc-title" }, vue.toDisplayString(!$data.isSlectList ? "\u4E00\u9375\u6E05\u5009\u5C07\u6703\u64A4\u92B7USDT\u6240\u6709\u639B\u55AE/\u6301\u5009\uFF0C\u4E26\u4EE5\u5E02\u50F9\u59D4\u6258\u65B9\u5F0F\u6E05\u5009USDT\u6240\u6709\u5009\u4F4D" : "\u786E\u5B9A\u6E05\u9664\u5F53\u524D\u9009\u4E2D\u7684\u639B\u55AE/\u6301\u5009\uFF1F"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"]),
      vue.createCommentVNode(" \u505C\u6B62\u7B56\u7565\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        cancelText: "\u53D6\u6D88",
        onCancel: _cache[10] || (_cache[10] = ($event) => $data.showStrateModal = false),
        showCancelButton: "",
        closeOnClickOverlay: true,
        onClose: _cache[11] || (_cache[11] = ($event) => $data.showStrateModal = false),
        confirmText: "\u786E\u5B9A",
        onConfirm: $options.confirmStrate,
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showStrateModal,
        title: "\u505C\u6B62\u7B56\u7565"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[8] || (_cache[8] = ($event) => $data.showStrateModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createElementVNode("view", { class: "tbc-title" }, "\u78BA\u5B9A\u8981\u505C\u6B62\u8A72\u4EA4\u6613\u5C0D\u7B56\u7565\u55CE\uFF1F\u505C\u6B62\u7B56\u7565\u4E0D\u6703\u6E05\u5009\uFF0C\u53EA\u662F\u505C\u6B62\u4E86\u76E3\u807D"),
              vue.createElementVNode("view", { style: { "padding-top": "30rpx" } }, [
                vue.createVNode(_component_u_checkbox_group, {
                  modelValue: $data.stopStrategySelect,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.stopStrategySelect = $event)
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_checkbox, {
                      shape: "circle",
                      activeColor: "#FCA504",
                      iconColor: "#222222",
                      label: "\u505C\u6B62\u4E26\u5168\u90E8\u5E73\u5009/\u8CE3\u6389\u73FE\u8CA8",
                      name: "\u505C\u6B62\u4E26\u5168\u90E8\u5E73\u5009/\u8CE3\u6389\u73FE\u8CA8"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"]),
      vue.createCommentVNode(" \u64CD\u4F5C\u6210\u529F "),
      vue.createVNode(_component_u_modal, {
        class: "noline",
        closeOnClickOverlay: true,
        onClose: _cache[13] || (_cache[13] = ($event) => $data.showOkModal = false),
        confirmText: "\u597D\u7684",
        onConfirm: $options.confirmOk,
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showOkModal
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[12] || (_cache[12] = ($event) => $data.showOkModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createVNode(_component_u__image, {
                width: "115rpx",
                height: "115rpx",
                src: "/static/trade/success.png"
              }),
              vue.createElementVNode("view", { style: { "padding-top": "45rpx" } }, "\u64CD\u4F5C\u6210\u529F")
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"])
    ]);
  }
  var PagesTradePositionPosition = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/position/position.vue"]]);
  const _sfc_main$l = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "strateg-explain page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u7B56\u7565\u8BF4\u660E",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("view", { class: "se-content" }, [
        vue.createElementVNode("view", { class: "se-li" }, [
          vue.createElementVNode("view", { class: "set-dot" }),
          vue.createElementVNode("view", { class: "set-text" }, [
            vue.createTextVNode("\u7A33\u5065\u578B\u7B56\u7565\u5F00\u5355\u4F1A\u66F4\u4FDD\u5B88\uFF0C\u9891\u7387\u4E5F\u53EF\u4EE5\uFF1B"),
            vue.createElementVNode("br"),
            vue.createTextVNode("\u6FC0\u8FDB\u578B\u7B56\u7565\u5F00\u5355\u4F1A\u66F4\u5BB9\u6613\uFF0C\u5229\u6DA6\u53EF\u80FD\u66F4\u9AD8\u3002")
          ])
        ]),
        vue.createElementVNode("view", { class: "se-li" }, [
          vue.createElementVNode("view", { class: "set-dot" }),
          vue.createElementVNode("view", { class: "set-text" }, "\u5408\u7EA6\u500D\u7387\u60A8\u53EF\u4EE5\u4EA4\u7531\u7CFB\u7EDF\u667A\u80FD\u5207\u6362\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u9009\u62E9\u3002")
        ]),
        vue.createElementVNode("view", { class: "se-li" }, [
          vue.createElementVNode("view", { class: "set-dot" }),
          vue.createElementVNode("view", { class: "set-text" }, " \u6B62\u635F\u6BD4\u4F8B\u4E3A\u60A8\u672C\u91D1\u7684\u53EF\u63A5\u53D7\u6700\u5927\u6B62\u635F\u6BD4\u4F8B\uFF0C\u5F53\u5230\u8FBE\u60A8\u7684\u8BBE\u7F6E\u6B62\u635F\u6BD4\u4F8B\u65F6\uFF0C\u7CFB\u7EDF\u5C06\u7ACB\u5373\u4F18\u5148\u81EA\u52A8\u89E6\u53D1\u6B62\u635F\uFF0C\u6E05\u4ED3\u6240\u6709\u5408\u7EA6\u3002\u4F46\u662F\u5B9E\u9645\u6B62\u635F\u6BD4\u4F8B\u4E0D\u4E00\u5B9A\u7B49\u4E8E\u8BBE\u7F6E\u6B62\u635F\u6BD4\u4F8B\u3002\u539F\u56E0\u662F\u5E02\u573A\u4EF7\u683C\u53EF\u80FD\u53D8\u5316\u592A\u5FEB\uFF0C\u6216\u8005\u4EA4\u6613\u6240\u6DF1\u5EA6\u4E0D\u591F\uFF0C\u6216\u8005\u4EA4\u6613\u6240\u51FA\u73B0\u5361\u987F\uFF0C\u505C\u6B62\u4EA4\u6613\u7B49\u5F02\u5E38\u60C5\u51B5\uFF0C\u56E0\u6B64\u5BFC\u81F4\u6E05\u4ED3\u4E0D\u53CA\u65F6\u800C\u51FA\u73B0\u8D85\u51FA\u6BD4\u4F8B\u8D85\u8FC7\u6216\u8D85\u51FA\u9884\u671F\u3002 ")
        ])
      ])
    ]);
  }
  var PagesTradeStrategEexplainStrategEexplain = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/strategEexplain/strategEexplain.vue"]]);
  var props$2 = {
    props: {
      loading: {
        type: Boolean,
        default: props$s.switch.loading
      },
      disabled: {
        type: Boolean,
        default: props$s.switch.disabled
      },
      size: {
        type: [String, Number],
        default: props$s.switch.size
      },
      activeColor: {
        type: String,
        default: props$s.switch.activeColor
      },
      inactiveColor: {
        type: String,
        default: props$s.switch.inactiveColor
      },
      modelValue: {
        type: [Boolean, String, Number],
        default: props$s.switch.value
      },
      activeValue: {
        type: [String, Number, Boolean],
        default: props$s.switch.activeValue
      },
      inactiveValue: {
        type: [String, Number, Boolean],
        default: props$s.switch.inactiveValue
      },
      asyncChange: {
        type: Boolean,
        default: props$s.switch.asyncChange
      },
      space: {
        type: [String, Number],
        default: props$s.switch.space
      }
    }
  };
  const _sfc_main$k = {
    name: "u-switch",
    mixins: [mpMixin, mixin, props$2],
    watch: {
      modelValue: {
        immediate: true,
        handler(n) {
          if (n !== this.inactiveValue && n !== this.activeValue) {
            uni.$u.error("v-model\u7ED1\u5B9A\u7684\u503C\u5FC5\u987B\u4E3AinactiveValue\u3001activeValue\u4E8C\u8005\u4E4B\u4E00");
          }
        }
      }
    },
    data() {
      return {
        bgColor: "#ffffff"
      };
    },
    computed: {
      isActive() {
        return this.modelValue === this.activeValue;
      },
      switchStyle() {
        let style = {};
        style.width = uni.$u.addUnit(this.size * 2 + 2);
        style.height = uni.$u.addUnit(Number(this.size) + 2);
        if (this.customInactiveColor) {
          style.borderColor = "rgba(0, 0, 0, 0)";
        }
        style.backgroundColor = this.isActive ? this.activeColor : this.inactiveColor;
        return style;
      },
      nodeStyle() {
        let style = {};
        style.width = uni.$u.addUnit(this.size - this.space);
        style.height = uni.$u.addUnit(this.size - this.space);
        const translateX = this.isActive ? uni.$u.addUnit(this.space) : uni.$u.addUnit(this.size);
        style.transform = `translateX(-${translateX})`;
        return style;
      },
      bgStyle() {
        let style = {};
        style.width = uni.$u.addUnit(Number(this.size) * 2 - this.size / 2);
        style.height = uni.$u.addUnit(this.size);
        style.backgroundColor = this.inactiveColor;
        style.transform = `scale(${this.isActive ? 0 : 1})`;
        return style;
      },
      customInactiveColor() {
        return this.inactiveColor !== "#fff" && this.inactiveColor !== "#ffffff";
      }
    },
    emits: ["update:modelValue", "change"],
    methods: {
      clickHandler() {
        if (!this.disabled && !this.loading) {
          const oldValue = this.isActive ? this.inactiveValue : this.activeValue;
          if (!this.asyncChange) {
            this.$emit("update:modelValue", oldValue);
          }
          this.$nextTick(() => {
            this.$emit("change", oldValue);
          });
        }
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-switch", [_ctx.disabled && "u-switch--disabled"]]),
      style: vue.normalizeStyle([$options.switchStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.createElementVNode("view", {
        class: "u-switch__bg",
        style: vue.normalizeStyle([$options.bgStyle])
      }, null, 4),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-switch__node", [_ctx.modelValue && "u-switch__node--on"]]),
        style: vue.normalizeStyle([$options.nodeStyle]),
        ref: "u-switch__node"
      }, [
        vue.createVNode(_component_u_loading_icon, {
          show: _ctx.loading,
          mode: "circle",
          timingFunction: "linear",
          color: _ctx.modelValue ? _ctx.activeColor : "#AAABAD",
          size: _ctx.size * 0.6
        }, null, 8, ["show", "color", "size"])
      ], 6)
    ], 6);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-7e2f0021"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-switch/u-switch.vue"]]);
  const _sfc_main$j = {
    data() {
      return {
        form: {
          a: "\u5E38\u898F\u88DC\u5009",
          bbbb: "\u5F00\u7A7A"
        },
        rules: {
          "a": {
            type: "string",
            required: true,
            message: "\u8ACB\u8F38\u5165api key",
            trigger: ["blur", "change"]
          }
        },
        type: 1
      };
    },
    onLoad(e) {
      const { type: type2 } = e;
      this.type = Number(type2);
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((res) => {
          debugger;
          uni.$emit("setStraegy", this.form.a);
          uni.navigateBack({
            delta: 1
          });
        }).catch((errors) => {
          uni.$u.toast("\u6821\u9A8C\u5931\u8D25");
        });
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_radio = resolveEasycom(vue.resolveDynamicComponent("u-radio"), __easycom_1$1);
    const _component_u_radio_group = resolveEasycom(vue.resolveDynamicComponent("u-radio-group"), __easycom_2$1);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$2);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    const _component_u_switch = resolveEasycom(vue.resolveDynamicComponent("u-switch"), __easycom_5);
    const _component_u__form = resolveEasycom(vue.resolveDynamicComponent("u--form"), __easycom_3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "cus-strategy page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u81EA\u5B9A\u7FA9\u76E3\u807D\u7B56\u7565",
        height: "92rpx",
        autoBack: true
      }),
      vue.createCommentVNode(" \u5185\u5BB9 "),
      vue.createElementVNode("view", { class: "cs-content" }, [
        vue.createElementVNode("view", { class: "cn-form" }, [
          vue.createVNode(_component_u__form, {
            labelPosition: "left",
            model: $data.form,
            rules: $data.rules,
            ref: "form"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u88DC\u5009\u65B9\u5F0F",
                prop: "a",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_radio_group, {
                    modelValue: $data.form.a,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.a = $event),
                    activeColor: "#FCA504"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_u_radio, {
                        iconColor: "#222222",
                        label: "\u5E38\u898F\u88DC\u5009",
                        name: "\u5E38\u898F\u88DC\u5009"
                      }),
                      vue.createVNode(_component_u_radio, {
                        style: { "margin-left": "20rpx" },
                        iconColor: "#222222",
                        label: "\u500D\u6578\u88DC\u5009",
                        name: "\u500D\u6578\u88DC\u5009"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $data.type === 2 ? (vue.openBlock(), vue.createBlock(_component_u_form_item, {
                key: 0,
                labelWidth: "200rpx",
                label: "\u65B9\u5411\u9009\u62E9",
                prop: "bbbb",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_radio_group, {
                    modelValue: $data.form.bbbb,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.bbbb = $event),
                    activeColor: "#FCA504"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_u_radio, {
                        iconColor: "#222222",
                        label: "\u5F00\u7A7A",
                        name: "\u5F00\u7A7A"
                      }),
                      vue.createVNode(_component_u_radio, {
                        style: { "margin-left": "20rpx" },
                        iconColor: "#222222",
                        label: "\u5F00\u591A",
                        name: "\u5F00\u591A"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })) : vue.createCommentVNode("v-if", true),
              $data.type === 2 ? (vue.openBlock(), vue.createBlock(_component_u_form_item, {
                key: 1,
                labelWidth: "200rpx",
                label: "\u9009\u62E9\u6760\u6746",
                prop: "d",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    customStyle: "padding-right: 50rpx",
                    inputAlign: "right",
                    modelValue: $data.form.d,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.d = $event),
                    placeholder: "\u9ED8\u8BA45\u500D\uFF0C\u6700\u9AD8100\u500D",
                    border: "none"
                  }, null, 8, ["modelValue"]),
                  vue.createElementVNode("view", { class: "fix-right" }, "\u500D")
                ]),
                _: 1
              })) : vue.createCommentVNode("v-if", true),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u7B56\u7565\u540D\u7A31",
                prop: "b",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    inputAlign: "right",
                    modelValue: $data.form.b,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.b = $event),
                    placeholder: "\u5982\uFF1A\u7A69\u5065",
                    border: "none"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $data.type === 2 ? (vue.openBlock(), vue.createBlock(_component_u_form_item, {
                key: 2,
                labelWidth: "200rpx",
                label: "\u5F00\u4ED3\u6DF1\u5EA6",
                prop: "c",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    customStyle: "padding-right: 90rpx",
                    inputAlign: "right",
                    modelValue: $data.form.c,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.c = $event),
                    placeholder: "\u4E0D\u9700\u8981\u76D1\u542C\u53EF\u4E0D\u586B",
                    border: "none"
                  }, null, 8, ["modelValue"]),
                  vue.createElementVNode("view", { class: "fix-right" }, "USDT")
                ]),
                _: 1
              })) : vue.createCommentVNode("v-if", true),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u9996\u55AE\u91D1\u984D",
                prop: "c",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    customStyle: "padding-right: 90rpx",
                    inputAlign: "right",
                    modelValue: $data.form.c,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.form.c = $event),
                    placeholder: "\u8ACB\u8F38\u5165\u91D1\u984D",
                    border: "none"
                  }, null, 8, ["modelValue"]),
                  vue.createElementVNode("view", { class: "fix-right" }, "USDT")
                ]),
                _: 1
              }),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u6700\u9AD8\u88DC\u5009",
                prop: "d",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    customStyle: "padding-right: 50rpx",
                    inputAlign: "right",
                    modelValue: $data.form.d,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.form.d = $event),
                    placeholder: "\u8ACB\u8F38\u5165",
                    border: "none"
                  }, null, 8, ["modelValue"]),
                  vue.createElementVNode("view", { class: "fix-right" }, "\u5355")
                ]),
                _: 1
              }),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u88DC\u5009\u6BD4\u4F8B",
                prop: "e",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    inputAlign: "right",
                    modelValue: $data.form.e,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.form.e = $event),
                    placeholder: "\u8ACB\u8F38\u5165\u6BD4\u4F8B %",
                    border: "none"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u53CD\u5F48\u6BD4\u4F8B",
                prop: "f",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    inputAlign: "right",
                    modelValue: $data.form.f,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.form.f = $event),
                    placeholder: "\u8ACB\u8F38\u5165\u6BD4\u4F8B %",
                    border: "none"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u6B62\u76C8\u6BD4\u4F8B",
                prop: "g",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    inputAlign: "right",
                    modelValue: $data.form.g,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.form.g = $event),
                    placeholder: "\u8ACB\u8F38\u5165\u6BD4\u4F8B %",
                    border: "none"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u8FFD\u8E64\u6B62\u76C8",
                prop: "h",
                borderBottom: "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "cnf-right" }, [
                    vue.createVNode(_component_u_switch, {
                      size: "20",
                      space: "2",
                      modelValue: $data.form.h,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.form.h = $event),
                      activeColor: "#FCA504",
                      inactiveColor: "rgb(230, 230, 230)"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        vue.createCommentVNode(" \u78BA\u8A8D\u57F7\u884C\u7B56\u7565 "),
        vue.createElementVNode("view", { class: "csc-btn" }, [
          vue.createVNode(_component_u_button, {
            onClick: $options.submit,
            class: "color000",
            color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" \u78BA\u5B9A ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var PagesTradeCustomStrategyCustomStrategy = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/customStrategy/customStrategy.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        posList: [
          {
            id: 1,
            coin: "BTC",
            hasUSDT: "\u5E73\u4ED3",
            priceUSDT: "10",
            count: "1002",
            surplus: "-100",
            floating: "30%",
            optType: 1,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 2,
            coin: "BTC",
            hasUSDT: "\u5F00\u591A",
            priceUSDT: "20",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 2,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 3,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "2",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 4,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 5,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "1",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 6,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "3",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          }
        ],
        loadInfo: {
          status: "nomore",
          loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
          loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
          nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86"
        }
      };
    },
    onReady() {
    },
    methods: {
      loadmore() {
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "position-record page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u64CD\u4F5C\u8BB0\u5F55",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.loadmore && $options.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.posList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.posList, (item2) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createElementVNode("view", { class: "psd-time" }, vue.toDisplayString(item2.time), 1),
              vue.createElementVNode("view", { class: "ps-data" }, [
                vue.createCommentVNode(" \u5E01\u79CD "),
                vue.createElementVNode("view", { class: "psd-sus" }, [
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top" }, "\u5E01\u79CD"),
                    vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.coin), 1)
                  ]),
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textCenter" }, "\u64CD\u4F5C\u7C7B\u578B"),
                    vue.createElementVNode("view", { class: "psdsl-bottom pl-color textCenter" }, [
                      item2.optType == 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "\u5E73\u4ED3")) : vue.createCommentVNode("v-if", true),
                      item2.optType == 2 ? (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "\u5F00\u591A")) : vue.createCommentVNode("v-if", true),
                      item2.optType == 3 ? (vue.openBlock(), vue.createElementBlock("text", { key: 2 }, "\u6E05\u4ED3")) : vue.createCommentVNode("v-if", true)
                    ])
                  ]),
                  item2.optType != 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "psds-li"
                  }, [
                    vue.createElementVNode("view", { class: "psdsl-top textRight" }, "\u5408\u7EA6\u500D\u7387"),
                    vue.createElementVNode("view", { class: "psdsl-bottom textRight pl-color2" }, "X " + vue.toDisplayString(item2.priceUSDT), 1)
                  ])) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "psds-li"
                  }, [
                    vue.createElementVNode("view", { class: "psdsl-top textRight" }, "\u73B0\u8D27"),
                    vue.createCommentVNode(' <view class="psdsl-bottom textRight pl-color2">X {{item.priceUSDT}}</view> ')
                  ]))
                ]),
                vue.createElementVNode("view", { class: "psd-bottom" }, [
                  vue.createElementVNode("view", { class: "psdbs-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top" }, "\u6210\u4EA4\u4EF7\u683CUSDT"),
                    vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.count), 1)
                  ]),
                  vue.createElementVNode("view", { class: "psdbs-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textRight" }, "\u4EA4\u6613\u91D1\u989DUSDT"),
                    vue.createElementVNode("view", { class: "psdsl-bottom textRight" }, vue.toDisplayString(item2.surplus), 1)
                  ])
                ])
              ])
            ], 64);
          }), 256)),
          vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
          vue.createVNode(_component_u_loadmore, {
            class: "load",
            status: $data.loadInfo.status,
            "loading-text": $data.loadInfo.loadingText,
            "loadmore-text": $data.loadInfo.loadmoreText,
            "nomore-text": $data.loadInfo.nomoreText
          }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32)
    ]);
  }
  var PagesTradePositionRecordPositionRecord = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/positionRecord/positionRecord.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        posList: [
          {
            id: 1,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "-100",
            floating: "30%",
            multiple: 100
          },
          {
            id: 2,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          },
          {
            id: 3,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          },
          {
            id: 4,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          },
          {
            id: 5,
            coin: "BTC",
            hasUSDT: "123456.1234",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%"
          }
        ],
        loadInfo: {
          status: "nomore",
          loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
          loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
          nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86"
        },
        isSlectList: false,
        showClearModal: false,
        showStrateModal: false,
        stopStrategySelect: "",
        showOkModal: false
      };
    },
    onLoad() {
    },
    methods: {
      loadmore() {
        formatAppLog("log", "at pages/trade/positionContract/positionContract.vue:204", "\u66F4\u591A");
      },
      cliclList(ojb) {
        this.posList.forEach((item3) => {
          if (ojb.id === item3.id) {
            item3.isActive = !item3.isActive;
          } else {
            item3.isActive = false;
          }
        });
        const item2 = this.posList.find((item3) => item3.isActive);
        this.isSlectList = (item2 == null ? void 0 : item2.isActive) ? true : false;
      },
      clearAll() {
        this.showClearModal = true;
        if (this.isSlectList)
          ;
      },
      confirmClear() {
        formatAppLog("log", "at pages/trade/positionContract/positionContract.vue:229", this.stopStrategySelect);
        this.showClearModal = false;
        setTimeout(() => {
        }, 1e3);
      },
      confirmStrate() {
        formatAppLog("log", "at pages/trade/positionContract/positionContract.vue:237", this.stopStrategySelect);
        this.showStrateModal = false;
        setTimeout(() => {
          this.showOkModal = true;
        }, 1e3);
      },
      stopStr() {
        if (!this.isSlectList)
          return;
        this.showStrateModal = true;
        setTimeout(() => {
          this.showOkModal = true;
        });
      },
      editStr() {
        if (!this.isSlectList)
          return;
        uni.navigateTo({
          url: `/pages/trade/setStrategy/setStrategy?edit=true&type=2`
        });
      },
      confirmOk() {
        this.showOkModal = false;
      },
      navigatorTo() {
        uni.navigateTo({
          url: `/pages/trade/positionReContract/positionReContract`
        });
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$5);
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    const _component_u_checkbox = resolveEasycom(vue.resolveDynamicComponent("u-checkbox"), __easycom_6);
    const _component_u_checkbox_group = resolveEasycom(vue.resolveDynamicComponent("u-checkbox-group"), __easycom_7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "position page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u6301\u5009",
        rightIcon: "/static/home/remark.png",
        height: "92rpx",
        autoBack: true
      }, {
        right: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "p-posi",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigatorTo && $options.navigatorTo(...args))
          }, [
            vue.createVNode(_component_u_image, {
              width: "48rpx",
              height: "48rpx",
              src: "/static/trade/position.png"
            }),
            vue.createElementVNode("text", { class: "pp-text" }, "\u64CD\u4F5C\u8A18\u9304")
          ])
        ]),
        _: 1
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[1] || (_cache[1] = (...args) => $options.loadmore && $options.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.posList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.posList, (item2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["ps-data", item2.isActive ? "pd-border" : ""]),
              onClick: ($event) => $options.cliclList(item2)
            }, [
              vue.createCommentVNode(" \u5E01\u79CD "),
              vue.createElementVNode("view", { class: "psd-sus" }, [
                vue.createElementVNode("view", { class: "psds-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u5E01\u79CD"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, [
                    vue.createElementVNode("view", { class: "flex" }, [
                      vue.createElementVNode("text", null, vue.toDisplayString(item2.coin), 1),
                      item2.multiple ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "f-mut"
                      }, "X" + vue.toDisplayString(item2.multiple), 1)) : vue.createCommentVNode("v-if", true)
                    ]),
                    vue.createElementVNode("view", { class: "pb-btn" }, "\u6FC0\u8FDB")
                  ])
                ]),
                vue.createElementVNode("view", { class: "psds-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u6301\u4ED3\u8D44\u4EA7USDT"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.hasUSDT), 1)
                ]),
                vue.createElementVNode("view", { class: "psds-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u4EF7\u683CUSDT"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.priceUSDT), 1)
                ])
              ]),
              vue.createElementVNode("view", { class: "psd-bottom" }, [
                vue.createElementVNode("view", { class: "psdbs-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u5F53\u524D\u6301\u4ED3\u4FDD\u8BC1\u91D1"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.count), 1)
                ]),
                vue.createElementVNode("view", { class: "psdbs-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u76EE\u524D\u6D6E\u76C8"),
                  vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.surplus), 1)
                ]),
                vue.createElementVNode("view", { class: "psdbs-li" }, [
                  vue.createElementVNode("view", { class: "psdsl-top" }, "\u6D6E\u76C8\u5229"),
                  vue.createElementVNode("view", { class: "psdsl-bottom pl-color" }, [
                    vue.createElementVNode("text", null, vue.toDisplayString(item2.surplus > 0 ? "+" : "-"), 1),
                    vue.createTextVNode(vue.toDisplayString(item2.floating), 1)
                  ])
                ])
              ])
            ], 10, ["onClick"]);
          }), 256)),
          vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
          vue.createVNode(_component_u_loadmore, {
            class: "load",
            status: $data.loadInfo.status,
            "loading-text": $data.loadInfo.loadingText,
            "loadmore-text": $data.loadInfo.loadmoreText,
            "nomore-text": $data.loadInfo.nomoreText
          }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32),
      vue.createElementVNode("view", { class: "p-bottom" }, [
        vue.createElementVNode("view", { class: "pb-top" }, "\u8BF7\u5148\u9009\u62E9\u5BF9\u5E94\u7684\u4EA4\u6613\u5BF9\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF08\u53EA\u80FD\u9009\u4E00\u4E2A\uFF09"),
        vue.createElementVNode("view", { class: "ob-bottom" }, [
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.clearAll && $options.clearAll(...args)),
            class: "obb-li isActive"
          }, "\u4E00\u9375\u6E05\u5009"),
          vue.createElementVNode("view", {
            onClick: _cache[3] || (_cache[3] = (...args) => $options.stopStr && $options.stopStr(...args)),
            class: vue.normalizeClass(["obb-li", $data.isSlectList ? "isActive" : ""])
          }, "\u505C\u6B62\u7B56\u7565", 2),
          vue.createElementVNode("view", {
            onClick: _cache[4] || (_cache[4] = (...args) => $options.editStr && $options.editStr(...args)),
            class: vue.normalizeClass(["obb-li", $data.isSlectList ? "isActive" : ""])
          }, "\u4FEE\u6539\u7B56\u7565", 2)
        ])
      ]),
      vue.createCommentVNode(" \u4E00\u952E\u6E05\u4ED3\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        cancelText: "\u53D6\u6D88",
        onCancel: _cache[6] || (_cache[6] = ($event) => $data.showClearModal = false),
        showCancelButton: "",
        closeOnClickOverlay: true,
        onClose: _cache[7] || (_cache[7] = ($event) => $data.showClearModal = false),
        confirmText: "\u786E\u5B9A",
        onConfirm: $options.confirmClear,
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showClearModal,
        title: "\u505C\u6B62\u7B56\u7565"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[5] || (_cache[5] = ($event) => $data.showClearModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createElementVNode("view", { class: "tbc-title" }, vue.toDisplayString(!$data.isSlectList ? "\u4E00\u9375\u6E05\u5009\u5C07\u6703\u64A4\u92B7USDT\u6240\u6709\u639B\u55AE/\u6301\u5009\uFF0C\u4E26\u4EE5\u5E02\u50F9\u59D4\u6258\u65B9\u5F0F\u6E05\u5009USDT\u6240\u6709\u5009\u4F4D" : "\u786E\u5B9A\u6E05\u9664\u5F53\u524D\u9009\u4E2D\u7684\u639B\u55AE/\u6301\u5009\uFF1F"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"]),
      vue.createCommentVNode(" \u505C\u6B62\u7B56\u7565\u5F39\u7A97 "),
      vue.createVNode(_component_u_modal, {
        cancelText: "\u53D6\u6D88",
        onCancel: _cache[10] || (_cache[10] = ($event) => $data.showStrateModal = false),
        showCancelButton: "",
        closeOnClickOverlay: true,
        onClose: _cache[11] || (_cache[11] = ($event) => $data.showStrateModal = false),
        confirmText: "\u786E\u5B9A",
        onConfirm: $options.confirmStrate,
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showStrateModal,
        title: "\u505C\u6B62\u7B56\u7565"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[8] || (_cache[8] = ($event) => $data.showStrateModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createElementVNode("view", { class: "tbc-title" }, "\u78BA\u5B9A\u8981\u505C\u6B62\u8A72\u4EA4\u6613\u5C0D\u7B56\u7565\u55CE\uFF1F\u505C\u6B62\u7B56\u7565\u4E0D\u6703\u6E05\u5009\uFF0C\u53EA\u662F\u505C\u6B62\u4E86\u76E3\u807D"),
              vue.createElementVNode("view", { style: { "padding-top": "30rpx" } }, [
                vue.createVNode(_component_u_checkbox_group, {
                  modelValue: $data.stopStrategySelect,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.stopStrategySelect = $event)
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_checkbox, {
                      shape: "circle",
                      activeColor: "#FCA504",
                      iconColor: "#222222",
                      label: "\u505C\u6B62\u4E26\u5168\u90E8\u5E73\u5009/\u8CE3\u6389\u73FE\u8CA8",
                      name: "\u505C\u6B62\u4E26\u5168\u90E8\u5E73\u5009/\u8CE3\u6389\u73FE\u8CA8"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"]),
      vue.createCommentVNode(" \u64CD\u4F5C\u6210\u529F "),
      vue.createVNode(_component_u_modal, {
        class: "noline",
        closeOnClickOverlay: true,
        onClose: _cache[13] || (_cache[13] = ($event) => $data.showOkModal = false),
        confirmText: "\u597D\u7684",
        onConfirm: $options.confirmOk,
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showOkModal
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[12] || (_cache[12] = ($event) => $data.showOkModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createVNode(_component_u__image, {
                width: "115rpx",
                height: "115rpx",
                src: "/static/trade/success.png"
              }),
              vue.createElementVNode("view", { style: { "padding-top": "45rpx" } }, "\u64CD\u4F5C\u6210\u529F")
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"])
    ]);
  }
  var PagesTradePositionContractPositionContract = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/positionContract/positionContract.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        posList: [
          {
            id: 1,
            coin: "BTC",
            hasUSDT: "\u5E73\u4ED3",
            priceUSDT: "10",
            count: "1002",
            surplus: "-100",
            floating: "30%",
            optType: 1,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 2,
            coin: "BTC",
            hasUSDT: "\u5F00\u591A",
            priceUSDT: "20",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 2,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 3,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "2",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 4,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 5,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "1",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 6,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "3",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          }
        ],
        loadInfo: {
          status: "nomore",
          loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
          loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
          nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86"
        }
      };
    },
    onLoad() {
    },
    methods: {
      loadmore() {
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "position-record page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u64CD\u4F5C\u8BB0\u5F55",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.loadmore && $options.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.posList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.posList, (item2) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createElementVNode("view", { class: "psd-time" }, vue.toDisplayString(item2.time), 1),
              vue.createElementVNode("view", { class: "ps-data" }, [
                vue.createCommentVNode(" \u5E01\u79CD "),
                vue.createElementVNode("view", { class: "psd-sus" }, [
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top" }, "\u5E01\u79CD"),
                    vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.coin), 1)
                  ]),
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textCenter" }, "\u64CD\u4F5C\u7C7B\u578B"),
                    vue.createElementVNode("view", { class: "psdsl-bottom textCenter" }, [
                      item2.optType === 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "\u5E73\u4ED3")) : vue.createCommentVNode("v-if", true),
                      item2.optType === 2 ? (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "\u5F00\u591A")) : vue.createCommentVNode("v-if", true),
                      item2.optType === 3 ? (vue.openBlock(), vue.createElementBlock("text", { key: 2 }, "\u6E05\u4ED3")) : vue.createCommentVNode("v-if", true),
                      item2.optType === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 3,
                        class: "psdslb-btn"
                      }, "\u8DDF\u5355")) : vue.createCommentVNode("v-if", true)
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textRight" }, "\u5408\u7EA6\u500D\u7387"),
                    vue.createElementVNode("view", { class: "psdsl-bottom textRight pl-color2" }, "X " + vue.toDisplayString(item2.priceUSDT), 1)
                  ])
                ]),
                vue.createElementVNode("view", { class: "psd-bottom" }, [
                  vue.createElementVNode("view", { class: "psdbs-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top" }, "\u6210\u4EA4\u4EF7\u683CUSDT"),
                    vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.count), 1)
                  ]),
                  vue.createElementVNode("view", { class: "psdbs-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textRight" }, "\u4EA4\u6613\u91D1\u989DUSDT"),
                    vue.createElementVNode("view", { class: "psdsl-bottom textRight" }, vue.toDisplayString(item2.surplus), 1)
                  ])
                ])
              ])
            ], 64);
          }), 256)),
          vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
          vue.createVNode(_component_u_loadmore, {
            class: "load",
            status: $data.loadInfo.status,
            "loading-text": $data.loadInfo.loadingText,
            "loadmore-text": $data.loadInfo.loadmoreText,
            "nomore-text": $data.loadInfo.nomoreText
          }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32)
    ]);
  }
  var PagesTradePositionReContractPositionReContract = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/trade/positionReContract/positionReContract.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        posList: [
          {
            id: 1,
            coin: "REC20",
            priceUSDT: "1000",
            count: "1002",
            isAdd: 1
          },
          {
            id: 1,
            coin: "TRX",
            priceUSDT: "100",
            count: "100",
            isAdd: 2
          },
          {
            id: 1,
            coin: "\u5408\u7EA6",
            priceUSDT: "100",
            count: "100",
            isAdd: 2
          }
        ],
        loadInfo: {
          status: "nomore",
          loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
          loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
          nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86"
        }
      };
    },
    methods: {
      loadmore() {
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "trans-details page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u4EA4\u6613\u660E\u7EC6",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.loadmore && $options.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.posList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.posList, (item2) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "ps-data" }, [
              vue.createCommentVNode(" \u5E01\u79CD "),
              vue.createElementVNode("view", { class: "psd-sus" }, [
                vue.createElementVNode("view", { class: "psds-li" }, vue.toDisplayString(item2.isAdd === 1 ? "\u6DFB\u52A0\u4FDD\u8BC1\u91D1" : "\u63D0\u73B0\u4FDD\u8BC1\u91D1"), 1),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["psds-li", item2.isAdd === 1 ? "pl-color" : "pl-color2"])
                }, vue.toDisplayString(item2.isAdd === 1 ? "+" : "-") + vue.toDisplayString(item2.priceUSDT) + " USDT ", 3)
              ]),
              vue.createElementVNode("view", { class: "psd-bottom" }, vue.toDisplayString(item2.coin) + " \u4F59\u989D: " + vue.toDisplayString(item2.count) + " USDT ", 1)
            ]);
          }), 256)),
          vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
          vue.createVNode(_component_u_loadmore, {
            class: "load",
            status: $data.loadInfo.status,
            "loading-text": $data.loadInfo.loadingText,
            "loadmore-text": $data.loadInfo.loadmoreText,
            "nomore-text": $data.loadInfo.nomoreText
          }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32)
    ]);
  }
  var PagesAssetsTransactionDetailsTransactionDetails = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/assets/transactionDetails/transactionDetails.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        showOkModal: false,
        form: {
          address: "",
          money: ""
        },
        showOkModal: false,
        serviceCharge: "0.003",
        rules: {
          "address": {
            type: "string",
            required: true,
            message: "\u8BF7\u8F93\u5165\u6536\u6B3E\u5730\u5740",
            trigger: ["blur", "change"]
          },
          "money": {
            type: "string",
            required: true,
            pattern: /^[1-9]*[1-9][0-9]*$/,
            message: "\u8F93\u5165\u7684\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0",
            trigger: ["blur", "change"]
          }
        }
      };
    },
    methods: {
      navigateBack() {
        uni.navigateBack();
      },
      submit() {
        this.$refs.form.validate().then((res) => {
          this.showOkModal = true;
        }).catch((errors) => {
        });
      },
      confirmOk() {
        uni.reLaunch({
          url: "/pages/assets/assets"
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$2);
    const _component_u__form = resolveEasycom(vue.resolveDynamicComponent("u--form"), __easycom_3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_5$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "awidth-usdt page" }, [
      vue.createCommentVNode(" \u5BFC\u822A\u6761 "),
      vue.createElementVNode("view", { class: "au-nav" }, [
        vue.createElementVNode("view", {
          class: "an-img",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateBack && $options.navigateBack(...args))
        }, [
          vue.createVNode(_component_u__image, {
            width: "54rpx",
            height: "54rpx",
            src: "/static/home/arrow-left-black.png"
          })
        ]),
        vue.createElementVNode("view", { class: "an-title" }, "\u6DFB\u52A0 USDT"),
        vue.createCommentVNode(' <u--image class="an-bg" width="467rpx" height="256rpx" src="/static/home/usdt.png"></u--image> ')
      ]),
      vue.createElementVNode("view", { class: "au-content" }, [
        vue.createCommentVNode(' <view class="auc-title">\u6536\u6B3E\u5730\u5740</view>\n			<view class="auc-li">\n				<u--input class="aucw-input" border="none" color="#222222"\n					prefixIconStyle="font-size: 40rpx;color: #222222;padding-left: 20rpx"></u--input>\n			</view>\n			<view class="auc-title">\u8F49\u51FA\u91D1\u984D</view>\n			<view class="auc-li">\n				<u--input class="aucw-input" border="none" color="#222222"\n					prefixIconStyle="font-size: 40rpx;color: #222222;padding-left: 20rpx"></u--input>\n			</view> '),
        vue.createVNode(_component_u__form, {
          labelPosition: "top",
          model: $data.form,
          rules: $data.rules,
          ref: "form"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_form_item, {
              label: "\u6536\u6B3E\u5730\u5740",
              prop: "address"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u__input, {
                  customStyle: "padding-left: 39rpx",
                  class: "auc-input",
                  modelValue: $data.form.address,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.address = $event),
                  placeholder: "\u8BF7\u8F93\u5165\u6536\u6B3E\u5730\u5740",
                  border: "none"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            vue.createVNode(_component_u_form_item, {
              label: "\u8F49\u51FA\u91D1\u984D",
              prop: "money"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u__input, {
                  type: "number",
                  customStyle: "padding-left: 39rpx",
                  class: "auc-input",
                  modelValue: $data.form.money,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.money = $event),
                  placeholder: "\u8BF7\u8F93\u5165\u8F49\u51FA\u91D1\u984D",
                  border: "none"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"]),
        vue.createElementVNode("view", { class: "auc-title" }, "\u624B\u7E8C\u8CBB\uFF1A" + vue.toDisplayString($data.serviceCharge) + " USDT", 1)
      ]),
      vue.createCommentVNode(" \u786E\u8BA4\u8F6C\u51FA "),
      vue.createVNode(_component_u_button, {
        onClick: $options.submit,
        class: "au-submit color000",
        color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(" \u786E\u8BA4\u8F6C\u51FA ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      vue.createCommentVNode(" \u64CD\u4F5C\u6210\u529F "),
      vue.createVNode(_component_u_modal, {
        class: "noline",
        closeOnClickOverlay: true,
        onClose: _cache[4] || (_cache[4] = ($event) => $data.showOkModal = false),
        confirmText: "\u597D\u7684",
        onConfirm: $options.confirmOk,
        confirmColor: "#FFB119",
        cancelColor: "#333333",
        show: $data.showOkModal
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "slot-content" }, [
            vue.createElementVNode("view", {
              class: "no-close",
              onClick: _cache[3] || (_cache[3] = ($event) => $data.showOkModal = false)
            }, [
              vue.createVNode(_component_u__image, {
                width: "39rpx",
                height: "39rpx",
                src: "/static/home/close.png"
              })
            ]),
            vue.createElementVNode("view", { style: { "padding": "40rpx 0" } }, [
              vue.createVNode(_component_u__image, {
                width: "115rpx",
                height: "115rpx",
                src: "/static/trade/success.png"
              }),
              vue.createElementVNode("view", { style: { "padding-top": "45rpx" } }, "\u64CD\u4F5C\u6210\u529F")
            ])
          ])
        ]),
        _: 1
      }, 8, ["onConfirm", "show"])
    ]);
  }
  var PagesAssetsWithdrawalWithdrawal = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/assets/withdrawal/withdrawal.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        paydeList: [
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u624B\u7E8C\u8CBB",
            balance: "100",
            coinName: "\u706B\u5E01",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          },
          {
            tip: "\u8A02\u95B1\u8CBB",
            balance: "100",
            coinName: "ERC20",
            time: "2021-10-10 12:10"
          }
        ]
      };
    },
    methods: {}
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "bill-center page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        leftIcon: "/static/home/arrow-left-black.png",
        title: "\u8CEC\u55AE\u4E2D\u5FC3",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => _ctx.loadmore && _ctx.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.paydeList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createCommentVNode(" \u5217\u8868 "),
          vue.createElementVNode("view", { class: "bcc-list" }, [
            vue.createCommentVNode(" \u5DF2\u652F\u4ED8\u5217\u8868 "),
            $data.paydeList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($data.paydeList, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "bccl-li" }, [
                vue.createElementVNode("view", { class: "bcclu-top" }, [
                  vue.createElementVNode("view", { class: "bcclut-left" }, [
                    vue.createElementVNode("text", { class: "bcclutl-text" }, "\u652F\u4ED8\u8CEC\u55AE"),
                    vue.createCommentVNode(' <view class="bcclutl-tip"></view> ')
                  ]),
                  vue.createElementVNode("view", { class: "bcclut-right" }, "-" + vue.toDisplayString(item2.balance) + " USDT", 1)
                ]),
                vue.createElementVNode("view", { class: "bcclu-bottom" }, [
                  vue.createElementVNode("view", { class: "bcclub-left" }, [
                    vue.createElementVNode("text", { class: "bcclubl-name" }, vue.toDisplayString(item2.coinName), 1),
                    vue.createElementVNode("view", { class: "bcclubl-money" }, "\u4F59\u984D\uFF1A600 USDT")
                  ]),
                  vue.createElementVNode("view", { class: "bcclub-right" }, vue.toDisplayString(item2.time), 1)
                ])
              ]);
            }), 256)) : vue.createCommentVNode("v-if", true)
          ])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32)
    ]);
  }
  var PagesMyMybillingCenterMybillingCenter = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/mybillingCenter/mybillingCenter.vue"]]);
  const _sfc_main$c = {
    onLoad: function(option) {
    },
    data() {
      return {
        form: {
          subscribe: "",
          profit: ""
        },
        rules: {
          "subscribe": {
            type: "string",
            required: true,
            pattern: /^[1-9]\d{0,3}$|^10000$/g,
            message: "\u8BF7\u8F93\u51651-10000\u7684\u6570\u5B57",
            trigger: ["blur", "change"]
          },
          "profit": {
            pattern: /^([12][0-9]|30|[1-9])$/g,
            type: "string",
            required: true,
            message: "\u8BF7\u8F93\u51651-30\u7684\u6570\u5B57",
            trigger: ["blur", "change"]
          }
        }
      };
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((res) => {
          uni.navigateBack({
            delta: 1
          });
        }).catch((errors) => {
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$2);
    const _component_u__form = resolveEasycom(vue.resolveDynamicComponent("u--form"), __easycom_3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "my-sub" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u6211\u7684\u8BA2\u9605",
        height: "92rpx",
        autoBack: true
      }),
      vue.createCommentVNode(" \u5185\u5BB9 "),
      vue.createElementVNode("view", { class: "aas-content" }, [
        vue.createElementVNode("view", { class: "aas-export" }, [
          vue.createVNode(_component_u__form, {
            labelPosition: "left",
            model: $data.form,
            rules: $data.rules,
            ref: "form"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u6211\u7684\u8BA2\u9605\u8D39",
                prop: "subscribe",
                borderBottom: "true",
                ref: "subscribe"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    type: "number",
                    inputAlign: "right",
                    modelValue: $data.form.subscribe,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.subscribe = $event),
                    placeholder: "\u6700\u9AD810\uFF0C000USDT",
                    border: "none"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512),
              vue.createVNode(_component_u_form_item, {
                labelWidth: "200rpx",
                label: "\u6211\u7684\u76C8\u5229\u8D39",
                prop: "profit",
                borderBottom: "",
                ref: "profit"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    type: "number",
                    inputAlign: "right",
                    modelValue: $data.form.profit,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.profit = $event),
                    placeholder: "0-30%",
                    border: "none"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        vue.createElementVNode("view", { class: "aas-text" }, [
          vue.createElementVNode("view", null, "\u5907\u6CE8\uFF1A"),
          vue.createElementVNode("view", null, "\u5E73\u53F0\u5C06\u4ECE\u60A8\u7684\u8BA2\u9605\u8D39\u548C\u76C8\u5229\u8D39\u6536\u53D620%\u8D39\u7528\u4F5C\u4E3A\u5E73\u53F0\u7684\u6B63\u5E38\u8FD0\u8425\u6280\u672F\u670D\u52A1\u8D39")
        ]),
        vue.createVNode(_component_u_button, {
          onClick: $options.submit,
          class: "aas-submit color000",
          color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(" \u63D0\u4EA4 ")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]);
  }
  var PagesMyMySubscribeMySubscribe = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/mySubscribe/mySubscribe.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        posList: [
          {
            id: 1,
            coin: "BTC",
            hasUSDT: "\u5E73\u4ED3",
            priceUSDT: "10",
            count: "1002",
            surplus: "-100",
            floating: "30%",
            optType: 1,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 2,
            coin: "BTC",
            hasUSDT: "\u5F00\u591A",
            priceUSDT: "20",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 2,
            time: "2021-05-02 12:02:01",
            isTrade: true
          },
          {
            id: 3,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "2",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 4,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "123456.12",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 5,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "1",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          },
          {
            id: 6,
            coin: "BTC",
            hasUSDT: "\u6E05\u4ED3",
            priceUSDT: "3",
            count: "1002",
            surplus: "100",
            floating: "30%",
            optType: 3,
            time: "2021-05-02 12:02:01"
          }
        ],
        loadInfo: {
          status: "nomore",
          loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
          loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
          nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86"
        }
      };
    },
    onLoad() {
    },
    methods: {
      loadmore() {
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "position-record page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u64CD\u4F5C\u8BB0\u5F55",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.loadmore && $options.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.posList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.posList, (item2) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createElementVNode("view", { class: "psd-time" }, vue.toDisplayString(item2.time), 1),
              vue.createElementVNode("view", { class: "ps-data" }, [
                vue.createCommentVNode(" \u5E01\u79CD "),
                vue.createElementVNode("view", { class: "psd-sus" }, [
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top" }, "\u5E01\u79CD"),
                    vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.coin), 1)
                  ]),
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textCenter" }, "\u64CD\u4F5C\u7C7B\u578B"),
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["psdsl-bottom textCenter", item2.isTrade ? "pl-color" : ""])
                    }, [
                      item2.optType === 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "\u5E73\u4ED3")) : vue.createCommentVNode("v-if", true),
                      item2.optType === 2 ? (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "\u5F00\u591A")) : vue.createCommentVNode("v-if", true),
                      item2.optType === 3 ? (vue.openBlock(), vue.createElementBlock("text", { key: 2 }, "\u6E05\u4ED3")) : vue.createCommentVNode("v-if", true),
                      item2.optType === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 3,
                        class: "psdslb-btn"
                      }, "\u8DDF\u5355")) : vue.createCommentVNode("v-if", true)
                    ], 2)
                  ]),
                  vue.createElementVNode("view", { class: "psds-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textRight" }, "\u5408\u7EA6\u500D\u7387"),
                    vue.createElementVNode("view", { class: "psdsl-bottom textRight pl-color2" }, "X " + vue.toDisplayString(item2.priceUSDT), 1)
                  ])
                ]),
                vue.createElementVNode("view", { class: "psd-bottom" }, [
                  vue.createElementVNode("view", { class: "psdbs-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top" }, "\u6210\u4EA4\u4EF7\u683CUSDT"),
                    vue.createElementVNode("view", { class: "psdsl-bottom" }, vue.toDisplayString(item2.count), 1)
                  ]),
                  vue.createElementVNode("view", { class: "psdbs-li" }, [
                    vue.createElementVNode("view", { class: "psdsl-top textRight" }, "\u4EA4\u6613\u91D1\u989DUSDT"),
                    vue.createElementVNode("view", { class: "psdsl-bottom textRight" }, vue.toDisplayString(item2.surplus), 1)
                  ])
                ])
              ])
            ], 64);
          }), 256)),
          vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
          vue.createVNode(_component_u_loadmore, {
            class: "load",
            status: $data.loadInfo.status,
            "loading-text": $data.loadInfo.loadingText,
            "loadmore-text": $data.loadInfo.loadmoreText,
            "nomore-text": $data.loadInfo.nomoreText
          }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32)
    ]);
  }
  var PagesMyMuOpertaionRecordMuOpertaionRecord = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/muOpertaionRecord/muOpertaionRecord.vue"]]);
  var props$1 = {
    props: {
      value: {
        type: [String, Number],
        default: props$s.textarea.value
      },
      modelValue: {
        type: [String, Number],
        default: props$s.textarea.value
      },
      placeholder: {
        type: [String, Number],
        default: props$s.textarea.placeholder
      },
      placeholderClass: {
        type: String,
        default: props$s.input.placeholderClass
      },
      placeholderStyle: {
        type: [String, Object],
        default: props$s.input.placeholderStyle
      },
      height: {
        type: [String, Number],
        default: props$s.textarea.height
      },
      confirmType: {
        type: String,
        default: props$s.textarea.confirmType
      },
      disabled: {
        type: Boolean,
        default: props$s.textarea.disabled
      },
      count: {
        type: Boolean,
        default: props$s.textarea.count
      },
      focus: {
        type: Boolean,
        default: props$s.textarea.focus
      },
      autoHeight: {
        type: Boolean,
        default: props$s.textarea.autoHeight
      },
      fixed: {
        type: Boolean,
        default: props$s.textarea.fixed
      },
      cursorSpacing: {
        type: Number,
        default: props$s.textarea.cursorSpacing
      },
      cursor: {
        type: [String, Number],
        default: props$s.textarea.cursor
      },
      showConfirmBar: {
        type: Boolean,
        default: props$s.textarea.showConfirmBar
      },
      selectionStart: {
        type: Number,
        default: props$s.textarea.selectionStart
      },
      selectionEnd: {
        type: Number,
        default: props$s.textarea.selectionEnd
      },
      adjustPosition: {
        type: Boolean,
        default: props$s.textarea.adjustPosition
      },
      disableDefaultPadding: {
        type: Boolean,
        default: props$s.textarea.disableDefaultPadding
      },
      holdKeyboard: {
        type: Boolean,
        default: props$s.textarea.holdKeyboard
      },
      maxlength: {
        type: [String, Number],
        default: props$s.textarea.maxlength
      },
      border: {
        type: String,
        default: props$s.textarea.border
      },
      formatter: {
        type: [Function, null],
        default: props$s.textarea.formatter
      },
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  };
  const _sfc_main$a = {
    name: "u-textarea",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        innerValue: "",
        focused: false,
        firstChange: true,
        changeFromInner: false,
        innerFormatter: (value) => value
      };
    },
    created() {
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      textareaClass() {
        let classes = [], { border, disabled } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-textarea--radius"]));
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-textarea--no-radius"
        ]));
        disabled && classes.push("u-textarea--disabled");
        return classes.join(" ");
      },
      textareaStyle() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
    methods: {
      setFormatter(e) {
        this.innerFormatter = e;
      },
      onFocus(e) {
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.$emit("blur", e);
        uni.$u.formValidate(this, "blur");
      },
      onLinechange(e) {
        this.$emit("linechange", e);
      },
      onInput(e) {
        let { value = "" } = e.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value);
        this.innerValue = value;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      valueChange() {
        const value = this.innerValue;
        this.$nextTick(() => {
          this.$emit("update:modelValue", value);
          this.changeFromInner = true;
          this.$emit("change", value);
          uni.$u.formValidate(this, "change");
        });
      },
      onConfirm(e) {
        this.$emit("confirm", e);
      },
      onKeyboardheightchange(e) {
        this.$emit("keyboardheightchange", e);
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-textarea", $options.textareaClass]),
      style: vue.normalizeStyle([$options.textareaStyle])
    }, [
      vue.createElementVNode("textarea", {
        class: "u-textarea__field",
        value: $data.innerValue,
        style: vue.normalizeStyle({ height: _ctx.$u.addUnit(_ctx.height) }),
        placeholder: _ctx.placeholder,
        "placeholder-style": _ctx.$u.addStyle(_ctx.placeholderStyle, "string"),
        "placeholder-class": _ctx.placeholderClass,
        disabled: _ctx.disabled,
        focus: _ctx.focus,
        autoHeight: _ctx.autoHeight,
        fixed: _ctx.fixed,
        cursorSpacing: _ctx.cursorSpacing,
        cursor: _ctx.cursor,
        showConfirmBar: _ctx.showConfirmBar,
        selectionStart: _ctx.selectionStart,
        selectionEnd: _ctx.selectionEnd,
        adjustPosition: _ctx.adjustPosition,
        disableDefaultPadding: _ctx.disableDefaultPadding,
        holdKeyboard: _ctx.holdKeyboard,
        maxlength: _ctx.maxlength,
        "confirm-type": _ctx.confirmType,
        ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
        onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onLinechange: _cache[2] || (_cache[2] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => $options.onInput && $options.onInput(...args)),
        onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
        onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
      }, null, 44, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent"]),
      _ctx.count ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: "u-textarea__count",
        style: vue.normalizeStyle({
          "background-color": _ctx.disabled ? "transparent" : "#fff"
        })
      }, vue.toDisplayString($data.innerValue.length) + "/" + vue.toDisplayString(_ctx.maxlength), 5)) : vue.createCommentVNode("v-if", true)
    ], 6);
  }
  var uvTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-8c2832be"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-textarea/u-textarea.vue"]]);
  const _sfc_main$9 = {
    name: "u--textarea",
    mixins: [mpMixin, props$1, mixin],
    components: {
      uvTextarea
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvTextarea = vue.resolveComponent("uvTextarea");
    return vue.openBlock(), vue.createBlock(_component_uvTextarea, {
      value: _ctx.value,
      modelValue: _ctx.modelValue,
      placeholder: _ctx.placeholder,
      height: _ctx.height,
      confirmType: _ctx.confirmType,
      disabled: _ctx.disabled,
      count: _ctx.count,
      focus: _ctx.focus,
      autoHeight: _ctx.autoHeight,
      fixed: _ctx.fixed,
      cursorSpacing: _ctx.cursorSpacing,
      cursor: _ctx.cursor,
      showConfirmBar: _ctx.showConfirmBar,
      selectionStart: _ctx.selectionStart,
      selectionEnd: _ctx.selectionEnd,
      adjustPosition: _ctx.adjustPosition,
      disableDefaultPadding: _ctx.disableDefaultPadding,
      holdKeyboard: _ctx.holdKeyboard,
      maxlength: _ctx.maxlength,
      border: _ctx.border,
      customStyle: _ctx.customStyle,
      formatter: _ctx.formatter,
      ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
      onInput: _cache[0] || (_cache[0] = (e) => _ctx.$emit("input", e)),
      "onUpdate:modelValue": _cache[1] || (_cache[1] = (e) => _ctx.$emit("update:modelValue", e))
    }, null, 8, ["value", "modelValue", "placeholder", "height", "confirmType", "disabled", "count", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "border", "customStyle", "formatter", "ignoreCompositionEvent"]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u--textarea/u--textarea.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        value: ""
      };
    },
    methods: {
      submit() {
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u__textarea = resolveEasycom(vue.resolveDynamicComponent("u--textarea"), __easycom_1);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "user-fadeback page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        leftIcon: "/static/home/arrow-left-black.png",
        title: "\u7528\u6237\u53CD\u9988",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("view", { class: "uf-textarea" }, [
        vue.createVNode(_component_u__textarea, {
          class: "uft-area",
          border: "none",
          maxlength: "500",
          height: "150",
          count: true,
          modelValue: $data.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event),
          placeholder: "\u6B22\u8FCE\u63D0\u51FA\u5404\u4F4D\u7684\u5B9D\u8D35\u610F\u89C1\uFF0C\u8BA9\u6211\u4EEC\u66F4\u597D"
        }, null, 8, ["modelValue"])
      ]),
      vue.createElementVNode("view", { class: "uf-btn" }, [
        vue.createVNode(_component_u_button, {
          onClick: $options.submit,
          class: "color000",
          color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(" \u63D0\u4EA4 ")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]);
  }
  var PagesMyUserFadebackUserFadeback = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/userFadeback/userFadeback.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        posList: [
          {
            id: 1,
            img: "/static/userImg/system-bulletin.png",
            msgTitle: "\u7CFB\u7EDF\u516C\u544A",
            msg: "\u5E73\u53F0\u4F18\u5316\u529F\u80FD\uFF0C\u4EA4\u6613\u66F4\u5FEB\u901F",
            time: "2021-05-02 12:02:01"
          },
          {
            id: 2,
            img: "/static/userImg/billtobepaid.png",
            msgTitle: "\u5F85\u652F\u4ED8\u8D26\u5355",
            msg: "\u5E73\u53F0\u4F18\u5316\u529F\u80FD\uFF0C\u4EA4\u6613\u66F4\u5FEB\u901F",
            time: "2021-05-02 12:02:01"
          },
          {
            id: 3,
            img: "/static/userImg/other.png",
            msgTitle: "\u5176\u5B83",
            msg: "\u5E73\u53F0\u4F18\u5316\u529F\u80FD\uFF0C\u4EA4\u6613\u66F4\u5FEB\u901F",
            time: "2021-05-02 12:02:01"
          }
        ],
        loadInfo: {
          status: "nomore",
          loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D",
          loadmoreText: "\u8F7B\u8F7B\u4E0A\u62C9",
          nomoreText: "\u5B9E\u5728\u6CA1\u6709\u4E86"
        }
      };
    },
    onLoad() {
    },
    methods: {
      loadmore() {
      },
      navigatorTo(item2) {
        if (item2.msgTitle === "\u7CFB\u7EDF\u516C\u544A") {
          uni.navigateTo({
            url: "/pages/my/systemBulletin/systemBulletin"
          });
        } else if (item2.msgTitle === "\u5F85\u652F\u4ED8\u8D26\u5355") {
          uni.navigateTo({
            url: "/pages/home/billingCenter/billingCenter"
          });
        } else
          ;
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_2$3);
    const _component_u_empty = resolveEasycom(vue.resolveDynamicComponent("u-empty"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "message-center page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        leftIcon: "/static/home/arrow-left-black.png",
        fixed: false,
        title: "\u6211\u7684\u6D88\u606F",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("scroll-view", {
        class: "p-scroll",
        "scroll-y": "",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.loadmore && $options.loadmore(...args))
      }, [
        vue.createCommentVNode(" \u5217\u8868 "),
        $data.posList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.posList, (item2) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createElementVNode("view", { class: "ps-time" }, vue.toDisplayString(item2.time), 1),
              vue.createElementVNode("view", {
                class: "ps-data",
                onClick: ($event) => $options.navigatorTo(item2)
              }, [
                vue.createElementVNode("view", { class: "psd-left" }, [
                  vue.createVNode(_component_u__image, {
                    width: "104rpx",
                    height: "104rpx",
                    src: item2.img
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "psd-right" }, [
                  vue.createElementVNode("view", { class: "psdr-title" }, vue.toDisplayString(item2.msgTitle), 1),
                  vue.createElementVNode("view", { class: "psdr-msg" }, vue.toDisplayString(item2.msg), 1)
                ])
              ], 8, ["onClick"])
            ], 64);
          }), 256)),
          vue.createCommentVNode(" \u4E0A\u62C9\u52A0\u8F7D "),
          vue.createVNode(_component_u_loadmore, {
            class: "load",
            status: $data.loadInfo.status,
            "loading-text": $data.loadInfo.loadingText,
            "loadmore-text": $data.loadInfo.loadmoreText,
            "nomore-text": $data.loadInfo.nomoreText
          }, null, 8, ["status", "loading-text", "loadmore-text", "nomore-text"])
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode(" \u65E0\u5185\u5BB9\u9ED8\u8BA4 "),
          vue.createVNode(_component_u_empty, {
            mode: "data",
            width: "100",
            height: "100",
            icon: "/static/home/no-data.png"
          })
        ], 64))
      ], 32)
    ]);
  }
  var PagesMyMessageCenterMessageCenter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/messageCenter/messageCenter.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        currentVersion: "V2.0.2",
        lastVersion: "V2.0.2"
      };
    },
    methods: {
      submit() {
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "about-us page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        leftIcon: "/static/home/arrow-left-black.png",
        title: "\u5173\u4E8E\u6211\u4EEC",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("view", { class: "au-content" }, [
        vue.createElementVNode("view", { class: "au-box" }),
        vue.createElementVNode("view", { class: "au-title" }, "\u667A\u80FD\u4EA4\u6613\u673A\u5668\u4EBA"),
        vue.createElementVNode("view", { class: "au-current" }, "\u5F53\u524D\u7248\u672C" + vue.toDisplayString($data.currentVersion), 1),
        vue.createElementVNode("view", { class: "au-last" }, "\u6700\u65B0\u7248\u672C" + vue.toDisplayString($data.lastVersion), 1),
        vue.createElementVNode("view", { class: "au-check" }, [
          vue.createVNode(_component_u_button, {
            onClick: $options.submit,
            class: "auc-submit color000",
            color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u68C0\u67E5\u66F4\u65B0")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var PagesMyAboutUsAboutUs = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/aboutUs/aboutUs.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        list: [
          {
            isActive: true,
            name: "\u82F1\u6587"
          },
          {
            isActive: false,
            name: "\u7E41\u4F53\u4E2D\u6587"
          }
        ]
      };
    },
    methods: {
      selectPaytype(item2) {
        this.list.forEach((citem) => {
          if (citem.name === item2.name) {
            citem.isActive = true;
          } else {
            citem.isActive = false;
          }
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "setting page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        leftIcon: "/static/home/arrow-left-black.png",
        title: "\u8BBE\u7F6E",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("view", { class: "s-content" }, [
        vue.createElementVNode("view", { class: "sc-ul" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              onClick: ($event) => $options.selectPaytype(item2),
              class: "scu-li"
            }, [
              vue.createElementVNode("text", null, vue.toDisplayString(item2.name), 1),
              vue.createElementVNode("view", { class: "scul-img" }, [
                vue.createVNode(_component_u__image, {
                  width: "46rpx",
                  height: "46rpx",
                  src: `/static/home/${item2.isActive ? "selected" : "unSelected"}.png`
                }, null, 8, ["src"])
              ])
            ], 8, ["onClick"]);
          }), 256))
        ])
      ])
    ]);
  }
  var PagesMySettingSetting = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/setting/setting.vue"]]);
  function pickExclude(obj, keys) {
    if (!["[object Object]", "[object File]"].includes(Object.prototype.toString.call(obj))) {
      return {};
    }
    return Object.keys(obj).reduce((prev, key) => {
      if (!keys.includes(key)) {
        prev[key] = obj[key];
      }
      return prev;
    }, {});
  }
  function formatImage(res) {
    return res.tempFiles.map((item2) => __spreadProps(__spreadValues({}, pickExclude(item2, ["path"])), {
      type: "image",
      url: item2.path,
      thumb: item2.path,
      size: item2.size
    }));
  }
  function formatVideo(res) {
    return [
      __spreadProps(__spreadValues({}, pickExclude(res, ["tempFilePath", "thumbTempFilePath", "errMsg"])), {
        type: "video",
        url: res.tempFilePath,
        thumb: res.thumbTempFilePath,
        size: res.size
      })
    ];
  }
  function chooseFile({
    accept,
    multiple,
    capture,
    compressed,
    maxDuration,
    sizeType,
    camera,
    maxCount
  }) {
    return new Promise((resolve, reject) => {
      switch (accept) {
        case "image":
          uni.chooseImage({
            count: multiple ? Math.min(maxCount, 9) : 1,
            sourceType: capture,
            sizeType,
            success: (res) => resolve(formatImage(res)),
            fail: reject
          });
          break;
        case "video":
          uni.chooseVideo({
            sourceType: capture,
            compressed,
            maxDuration,
            camera,
            success: (res) => resolve(formatVideo(res)),
            fail: reject
          });
          break;
      }
    });
  }
  var mixinUp = {
    watch: {
      accept: {
        immediate: true,
        handler(val) {
          if (val === "all" || val === "media") {
            uni.$u.error("\u53EA\u6709\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u624D\u652F\u6301\u628Aaccept\u914D\u7F6E\u4E3Aall\u3001media\u4E4B\u4E00");
          }
          if (val === "file") {
            uni.$u.error("\u53EA\u6709\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u548CH5(HX2.9.9)\u624D\u652F\u6301\u628Aaccept\u914D\u7F6E\u4E3Afile");
          }
        }
      }
    }
  };
  var props = {
    props: {
      accept: {
        type: String,
        default: props$s.upload.accept
      },
      capture: {
        type: [String, Array],
        default: props$s.upload.capture
      },
      compressed: {
        type: Boolean,
        default: props$s.upload.compressed
      },
      camera: {
        type: String,
        default: props$s.upload.camera
      },
      maxDuration: {
        type: Number,
        default: props$s.upload.maxDuration
      },
      uploadIcon: {
        type: String,
        default: props$s.upload.uploadIcon
      },
      uploadIconColor: {
        type: String,
        default: props$s.upload.uploadIconColor
      },
      useBeforeRead: {
        type: Boolean,
        default: props$s.upload.useBeforeRead
      },
      afterRead: {
        type: Function,
        default: null
      },
      beforeRead: {
        type: Function,
        default: null
      },
      previewFullImage: {
        type: Boolean,
        default: props$s.upload.previewFullImage
      },
      maxCount: {
        type: [String, Number],
        default: props$s.upload.maxCount
      },
      disabled: {
        type: Boolean,
        default: props$s.upload.disabled
      },
      imageMode: {
        type: String,
        default: props$s.upload.imageMode
      },
      name: {
        type: String,
        default: props$s.upload.name
      },
      sizeType: {
        type: Array,
        default: props$s.upload.sizeType
      },
      multiple: {
        type: Boolean,
        default: props$s.upload.multiple
      },
      deletable: {
        type: Boolean,
        default: props$s.upload.deletable
      },
      maxSize: {
        type: [String, Number],
        default: props$s.upload.maxSize
      },
      fileList: {
        type: Array,
        default: props$s.upload.fileList
      },
      uploadText: {
        type: String,
        default: props$s.upload.uploadText
      },
      width: {
        type: [String, Number],
        default: props$s.upload.width
      },
      height: {
        type: [String, Number],
        default: props$s.upload.height
      },
      previewImage: {
        type: Boolean,
        default: props$s.upload.previewImage
      }
    }
  };
  const _sfc_main$4 = {
    name: "u-upload",
    mixins: [mpMixin, mixin, mixinUp, props],
    data() {
      return {
        lists: [],
        isInCount: true
      };
    },
    watch: {
      fileList: {
        immediate: true,
        handler() {
          this.formatFileList();
        },
        immediate: true,
        deep: true
      }
    },
    emits: ["error", "beforeRead", "oversize", "afterRead", "delete", "clickPreview"],
    methods: {
      formatFileList() {
        const {
          fileList = [],
          maxCount
        } = this;
        const lists = fileList.map((item2) => Object.assign(Object.assign({}, item2), {
          isImage: this.accept === "image" || uni.$u.test.image(item2.url || item2.thumb),
          isVideo: this.accept === "video" || uni.$u.test.video(item2.url || item2.thumb),
          deletable: typeof item2.deletable === "boolean" ? item2.deletable : this.deletable
        }));
        this.lists = lists;
        this.isInCount = lists.length < maxCount;
      },
      chooseFile() {
        const {
          maxCount,
          multiple,
          lists,
          disabled
        } = this;
        if (disabled)
          return;
        let capture;
        try {
          capture = uni.$u.test.array(this.capture) ? this.capture : this.capture.split(",");
        } catch (e) {
          capture = [];
        }
        chooseFile(Object.assign({
          accept: this.accept,
          multiple: this.multiple,
          capture,
          compressed: this.compressed,
          maxDuration: this.maxDuration,
          sizeType: this.sizeType,
          camera: this.camera
        }, {
          maxCount: maxCount - lists.length
        })).then((res) => {
          this.onBeforeRead(multiple ? res : res[0]);
        }).catch((error2) => {
          this.$emit("error", error2);
        });
      },
      onBeforeRead(file) {
        const {
          beforeRead,
          useBeforeRead
        } = this;
        let res = true;
        if (uni.$u.test.func(beforeRead)) {
          res = beforeRead(file, this.getDetail());
        }
        if (useBeforeRead) {
          res = new Promise((resolve, reject) => {
            this.$emit("beforeRead", Object.assign(Object.assign({
              file
            }, this.getDetail()), {
              callback: (ok) => {
                ok ? resolve() : reject();
              }
            }));
          });
        }
        if (!res) {
          return;
        }
        if (uni.$u.test.promise(res)) {
          res.then((data) => this.onAfterRead(data || file));
        } else {
          this.onAfterRead(file);
        }
      },
      getDetail(index2) {
        return {
          name: this.name,
          index: index2 == null ? this.fileList.length : index2
        };
      },
      onAfterRead(file) {
        const {
          maxSize,
          afterRead
        } = this;
        const oversize = Array.isArray(file) ? file.some((item2) => item2.size > maxSize) : file.size > maxSize;
        if (oversize) {
          this.$emit("oversize", Object.assign({
            file
          }, this.getDetail()));
          return;
        }
        if (typeof afterRead === "function") {
          afterRead(file, this.getDetail());
        }
        this.$emit("afterRead", Object.assign({
          file
        }, this.getDetail()));
      },
      deleteItem(index2) {
        this.$emit("delete", Object.assign(Object.assign({}, this.getDetail(index2)), {
          file: this.fileList[index2]
        }));
      },
      onPreviewImage(item2) {
        if (!item2.isImage || !this.previewFullImage)
          return;
        uni.previewImage({
          urls: this.lists.filter((item3) => this.accept === "image" || uni.$u.test.image(item3.url || item3.thumb)).map((item3) => item3.url || item3.thumb),
          current: item2.url || item2.thumb,
          fail() {
            uni.$u.toast("\u9884\u89C8\u56FE\u7247\u5931\u8D25");
          }
        });
      },
      onPreviewVideo(event2) {
        if (!this.data.previewFullImage)
          return;
        const {
          index: index2
        } = event2.currentTarget.dataset;
        const {
          lists
        } = this.data;
        wx.previewMedia({
          sources: lists.filter((item2) => isVideoFile(item2)).map((item2) => Object.assign(Object.assign({}, item2), {
            type: "video"
          })),
          current: index2,
          fail() {
            uni.$u.toast("\u9884\u89C8\u89C6\u9891\u5931\u8D25");
          }
        });
      },
      onClickPreview(event2) {
        const {
          index: index2
        } = event2.currentTarget.dataset;
        const item2 = this.data.lists[index2];
        this.$emit("clickPreview", Object.assign(Object.assign({}, item2), this.getDetail(index2)));
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-upload",
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      vue.createElementVNode("view", { class: "u-upload__wrap" }, [
        _ctx.previewImage ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($data.lists, (item2, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "u-upload__wrap__preview",
            key: index2
          }, [
            item2.isImage || item2.type && item2.type === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: item2.thumb || item2.url,
              mode: _ctx.imageMode,
              class: "u-upload__wrap__preview__image",
              onClick: ($event) => $options.onPreviewImage(item2),
              style: vue.normalizeStyle([{
                width: _ctx.$u.addUnit(_ctx.width),
                height: _ctx.$u.addUnit(_ctx.height)
              }])
            }, null, 12, ["src", "mode", "onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "u-upload__wrap__preview__other"
            }, [
              vue.createVNode(_component_u_icon, {
                color: "#80CBF9",
                size: "26",
                name: item2.isVideo || item2.type && item2.type === "video" ? "movie" : "folder"
              }, null, 8, ["name"]),
              vue.createElementVNode("text", { class: "u-upload__wrap__preview__other__text" }, vue.toDisplayString(item2.isVideo || item2.type && item2.type === "video" ? "\u89C6\u9891" : "\u6587\u4EF6"), 1)
            ])),
            item2.status === "uploading" || item2.status === "failed" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "u-upload__status"
            }, [
              vue.createElementVNode("view", { class: "u-upload__status__icon" }, [
                item2.status === "failed" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                  key: 0,
                  name: "close-circle",
                  color: "#ffffff",
                  size: "25"
                })) : (vue.openBlock(), vue.createBlock(_component_u_loading_icon, {
                  key: 1,
                  size: "22",
                  mode: "circle",
                  color: "#ffffff"
                }))
              ]),
              item2.message ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "u-upload__status__message"
              }, vue.toDisplayString(item2.message), 1)) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true),
            item2.status !== "uploading" && (_ctx.deletable || item2.deletable) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "u-upload__deletable",
              onClick: vue.withModifiers(($event) => $options.deleteItem(index2), ["stop"])
            }, [
              vue.createElementVNode("view", { class: "u-upload__deletable__icon" }, [
                vue.createVNode(_component_u_icon, {
                  name: "close",
                  color: "#ffffff",
                  size: "10"
                })
              ])
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            item2.status === "success" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 4,
              class: "u-upload__success"
            }, [
              vue.createElementVNode("view", { class: "u-upload__success__icon" }, [
                vue.createVNode(_component_u_icon, {
                  name: "checkmark",
                  color: "#ffffff",
                  size: "12"
                })
              ])
            ])) : vue.createCommentVNode("v-if", true)
          ]);
        }), 128)) : vue.createCommentVNode("v-if", true),
        $data.isInCount ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          _ctx.$slots.default || _ctx.$slots.$default ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseFile && $options.chooseFile(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: vue.normalizeClass(["u-upload__button", [_ctx.disabled && "u-upload__button--disabled"]]),
            "hover-class": !_ctx.disabled ? "u-upload__button--hover" : "",
            "hover-stay-time": "150",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.chooseFile && $options.chooseFile(...args)),
            style: vue.normalizeStyle([{
              width: _ctx.$u.addUnit(_ctx.width),
              height: _ctx.$u.addUnit(_ctx.height)
            }])
          }, [
            vue.createVNode(_component_u_icon, {
              name: _ctx.uploadIcon,
              size: "26",
              color: _ctx.uploadIconColor
            }, null, 8, ["name", "color"]),
            _ctx.uploadText ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "u-upload__button__text"
            }, vue.toDisplayString(_ctx.uploadText), 1)) : vue.createCommentVNode("v-if", true)
          ], 14, ["hover-class"]))
        ], 64)) : vue.createCommentVNode("v-if", true)
      ])
    ], 4);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-0eb306c1"], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/node_modules/uview-plus/components/u-upload/u-upload.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        form: {
          nickname: "\u5DE6\u4E00",
          photo: "/static/userImg/default-photo.png"
        },
        fileList1: []
      };
    },
    methods: {
      async afterRead(file, lists, name) {
        this[`fileList${event.name}`].push(__spreadProps(__spreadValues({}, item), {
          status: "uploading",
          message: "\u4E0A\u4F20\u4E2D"
        }));
        const result = await this.uploadFilePromise(lists[i].url);
        this.form.photo = result;
      },
      uploadFilePromise(url2) {
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: "",
            filePath: url2,
            name: "file",
            formData: {
              user: "test"
            },
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data);
              }, 1e3);
            }
          });
        });
      },
      change(value) {
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1$2);
    const _component_u_upload = resolveEasycom(vue.resolveDynamicComponent("u-upload"), __easycom_2);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "edit-user page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        leftIcon: "/static/home/arrow-left-black.png",
        title: "\u4E2A\u4EBA\u4FE1\u606F",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("view", { class: "eu-content" }, [
        vue.createElementVNode("view", { class: "euc-update-photo" }, [
          vue.createVNode(_component_u_upload, {
            fileList: _ctx.fileList,
            onAfterRead: $options.afterRead,
            onDelete: _ctx.deletePic,
            name: "6",
            maxCount: 1
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "ec-custom" }, [
                vue.createElementVNode("view", { class: "ecc-box" }, [
                  vue.createElementVNode("image", {
                    class: "eccb-img",
                    src: $data.form.photo,
                    mode: "widthFix"
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "eup-btn" }, [
                  vue.createVNode(_component_u_button, {
                    class: "eupb-submit color000",
                    color: "linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("\u66F4\u6362\u5934\u50CF")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }, 8, ["fileList", "onAfterRead", "onDelete"])
        ]),
        vue.createElementVNode("view", { class: "euc-nickname" }, [
          vue.createElementVNode("view", { class: "eucn-name" }, "\u6635\u79F0"),
          vue.createVNode(_component_u__input, {
            onChange: _ctx.changeNickName,
            inputAlign: "right",
            modelValue: $data.form.nickname,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.nickname = $event),
            placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
            border: "none"
          }, null, 8, ["onChange", "modelValue"])
        ])
      ])
    ]);
  }
  var PagesMyEditUserEditUser = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/editUser/editUser.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        qrcodeWidth: 192,
        inviteCode: "imm201"
      };
    },
    onReady() {
      const qr = new UQRCode();
      qr.data = this.inviteCode;
      qr.size = uni.upx2px(this.qrcodeWidth);
      qr.make();
      const canvasContext = uni.createCanvasContext("qrcode", this);
      qr.canvasContext = canvasContext;
      qr.drawCanvas();
    },
    methods: {
      copy() {
        copy(this.inviteCode);
      },
      navigateBack() {
        uni.navigateBack();
      },
      savePic() {
        uni.$u.toast("\u957F\u6309");
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const ws = page2.$getAppWebview();
        let bitmap = new plus.nativeObj.Bitmap("inviteFriends");
        ws.draw(bitmap, function() {
          let fileName = `_doc/${new Date().getTime()}.png`;
          bitmap.save(fileName, {}, function(i2) {
            uni.saveImageToPhotosAlbum({
              filePath: i2.target,
              success: function() {
                bitmap.clear();
                uni.$u.toast("\u4FDD\u5B58\u56FE\u7247\u6210\u529F");
              }
            });
          }, function(e) {
            uni.$u.toast("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25");
          });
        }, function(e) {
          uni.$u.toast("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25");
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "invite-friends",
      onLongpress: _cache[2] || (_cache[2] = (...args) => $options.savePic && $options.savePic(...args)),
      id: "inviteFriends"
    }, [
      vue.createCommentVNode(" \u5BFC\u822A\u6761 "),
      vue.createCommentVNode(` <u-navbar bgColor="#F4C543" :fixed="false" leftIcon='' title="">
		</u-navbar> `),
      vue.createCommentVNode(" \u4E8C\u7EF4\u7801 "),
      vue.createElementVNode("view", { class: "if-content" }, [
        vue.createElementVNode("view", {
          class: "ifc-img",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateBack && $options.navigateBack(...args))
        }, [
          vue.createVNode(_component_u__image, {
            width: "54rpx",
            height: "54rpx",
            src: "/static/home/arrow-left-black.png"
          })
        ]),
        vue.createElementVNode("view", { class: "ifc-title" }, "MIRCAT"),
        vue.createElementVNode("view", { class: "ifc-title2" }, "\u667A\u80FD\u4EA4\u6613\u673A\u5668\u4EBA"),
        vue.createElementVNode("view", { class: "ifc-title3" }, "7x24h\u667A\u6167\u4EA4\u6613\uFF0C\u4FBF\u6377\u9AD8\u6548"),
        vue.createCommentVNode(" \u732B\u54AA  "),
        vue.createElementVNode("image", {
          class: "ifc-cat",
          src: "/static/userImg/share-cat.png"
        }),
        vue.createCommentVNode(" \u5DE6\u8FB9\u5C0F\u56FE "),
        vue.createElementVNode("image", {
          class: "ifc-left-circular",
          src: "/static/userImg//share-left-circular.png"
        }),
        vue.createCommentVNode(" \u53F3\u8FB9\u5C0F\u56FE "),
        vue.createElementVNode("image", {
          class: "ifc-right-circular",
          src: "/static/userImg/share-right-circular.png"
        }),
        vue.createCommentVNode(" \u4E2D\u95F4\u5185\u5BB9 "),
        vue.createElementVNode("view", { class: "ifc-center" }, [
          vue.createElementVNode("view", { class: "ifcc-title" }, "\u4E13\u5C5E\u9080\u8BF7\u7801"),
          vue.createElementVNode("view", { class: "ifcc-code" }, vue.toDisplayString($data.inviteCode), 1),
          vue.createCommentVNode(" \u590D\u5236 "),
          vue.createElementVNode("view", {
            class: "ifcc-copy",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.copy && $options.copy(...args))
          }, [
            vue.createElementVNode("image", {
              class: "ifccc-img",
              src: "/static/userImg/share-copy.png"
            }),
            vue.createElementVNode("view", { class: "ifccc-text" }, "\u590D\u5236")
          ]),
          vue.createCommentVNode(" \u865A\u7EBF "),
          vue.createElementVNode("view", { class: "ifcc-line" }),
          vue.createElementVNode("view", { class: "ifcc-left-circular" }),
          vue.createElementVNode("view", { class: "ifcc-right-circular" }),
          vue.createElementVNode("view", { class: "iff-center" }, [
            vue.createElementVNode("view", { class: "ifcc-qr-code" }, [
              vue.createElementVNode("canvas", {
                id: "qrcode",
                "canvas-id": "qrcode",
                style: vue.normalizeStyle(`width: ${$data.qrcodeWidth}rpx;height: ${$data.qrcodeWidth}rpx;`)
              }, null, 4),
              vue.createElementVNode("view", { class: "ifccqc-left-top" }),
              vue.createElementVNode("view", { class: "ifccqc-right-top" }),
              vue.createElementVNode("view", { class: "ifccqc-left-bottom" }),
              vue.createElementVNode("view", { class: "ifccqc-right-bottom" })
            ])
          ]),
          vue.createElementVNode("view", { class: "ifcc-text" }, "\u626B\u7801\u52A0\u5165\u6211\u4EEC"),
          vue.createElementVNode("view", { class: "ifcc-text2" }, "\u4ECE\u8FD9\u91CC\u5F00\u542F\u4F60\u7684\u6570\u5B57\u8D44\u4EA7\u81EA\u52A8\u4EA4\u6613\u4EBA\u751F")
        ])
      ]),
      vue.createCommentVNode(" \u957F\u6309\u4FDD\u5B58\u56FE\u7247 "),
      vue.createElementVNode("view", { class: "ifc-press" }, "\u957F\u6309\u4FDD\u5B58\u56FE\u7247"),
      vue.createCommentVNode(" \u5E95\u90E8\u56FE\u7247 "),
      vue.createElementVNode("image", {
        class: "ifc-bottom-img",
        src: "/static/userImg/share-bg-bottom.png"
      })
    ], 32);
  }
  var PagesMyInviteFriendsInviteFriends = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/inviteFriends/inviteFriends.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "sys-bullet page" }, [
      vue.createCommentVNode(" \u5BFC\u822A "),
      vue.createVNode(_component_u_navbar, {
        fixed: false,
        leftIcon: "/static/home/arrow-left-black.png",
        title: "\u7CFB\u7EDF\u516C\u544A",
        height: "92rpx",
        autoBack: true
      }),
      vue.createElementVNode("view", { class: "sb-content" }, [
        vue.createElementVNode("view", { class: "sb-text" }, "\u5E73\u53F0\u4F18\u5316\u529F\u80FD\uFF0C\u4EA4\u6613\u66F4\u5FEB\u901F"),
        vue.createElementVNode("view", { class: "sb-time" }, "2021-05-02 12:02:01")
      ])
    ]);
  }
  var PagesMySystemBulletinSystemBulletin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/pages/my/systemBulletin/systemBulletin.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/trade/trade", PagesTradeTrade);
  __definePage("pages/assets/assets", PagesAssetsAssets);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/home/apiAuth/apiAuth", PagesHomeApiAuthApiAuth);
  __definePage("pages/home/apiAuthSure/apiAuthSure", PagesHomeApiAuthSureApiAuthSure);
  __definePage("pages/home/billingCenter/billingCenter", PagesHomeBillingCenterBillingCenter);
  __definePage("pages/home/toBePaid/toBePaid", PagesHomeToBePaidToBePaid);
  __definePage("pages/home/addUSDT/addUSDT", PagesHomeAddUSDTAddUSDT);
  __definePage("pages/home/paySuccess/paySuccess", PagesHomePaySuccessPaySuccess);
  __definePage("pages/trade/search/search", PagesTradeSearchSearch);
  __definePage("pages/trade/setStrategy/setStrategy", PagesTradeSetStrategySetStrategy);
  __definePage("pages/trade/position/position", PagesTradePositionPosition);
  __definePage("pages/trade/strategEexplain/strategEexplain", PagesTradeStrategEexplainStrategEexplain);
  __definePage("pages/trade/customStrategy/customStrategy", PagesTradeCustomStrategyCustomStrategy);
  __definePage("pages/trade/positionRecord/positionRecord", PagesTradePositionRecordPositionRecord);
  __definePage("pages/trade/positionContract/positionContract", PagesTradePositionContractPositionContract);
  __definePage("pages/trade/positionReContract/positionReContract", PagesTradePositionReContractPositionReContract);
  __definePage("pages/assets/transactionDetails/transactionDetails", PagesAssetsTransactionDetailsTransactionDetails);
  __definePage("pages/assets/withdrawal/withdrawal", PagesAssetsWithdrawalWithdrawal);
  __definePage("pages/my/mybillingCenter/mybillingCenter", PagesMyMybillingCenterMybillingCenter);
  __definePage("pages/my/mySubscribe/mySubscribe", PagesMyMySubscribeMySubscribe);
  __definePage("pages/my/muOpertaionRecord/muOpertaionRecord", PagesMyMuOpertaionRecordMuOpertaionRecord);
  __definePage("pages/my/userFadeback/userFadeback", PagesMyUserFadebackUserFadeback);
  __definePage("pages/my/messageCenter/messageCenter", PagesMyMessageCenterMessageCenter);
  __definePage("pages/my/aboutUs/aboutUs", PagesMyAboutUsAboutUs);
  __definePage("pages/my/setting/setting", PagesMySettingSetting);
  __definePage("pages/my/editUser/editUser", PagesMyEditUserEditUser);
  __definePage("pages/my/inviteFriends/inviteFriends", PagesMyInviteFriendsInviteFriends);
  __definePage("pages/my/systemBulletin/systemBulletin", PagesMySystemBulletinSystemBulletin);
  const _sfc_main = {
    onLaunch: async function() {
    },
    mounted() {
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:9", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:12", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/lvjun/Desktop/lvjun-work/uniapp-demo/App.vue"]]);
  const store = createStore({
    state: {
      init: "1234556"
    },
    mutations: {},
    actions: {}
  });
  var wx$1 = { exports: {} };
  (function(module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory();
    })(commonjsGlobal, function() {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.i = function(value) {
          return value;
        };
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, {
              configurable: false,
              enumerable: true,
              get: getter
            });
          }
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function getDefault() {
            return module2["default"];
          } : function getModuleExports() {
            return module2;
          };
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object2, property) {
          return Object.prototype.hasOwnProperty.call(object2, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 13);
      }([
        function(module2, exports2, __webpack_require__) {
          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
          module2.exports = {
            type: function type2(ob) {
              return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
            },
            isObject: function isObject2(ob, real) {
              if (real) {
                return this.type(ob) === "object";
              } else {
                return ob && (typeof ob === "undefined" ? "undefined" : _typeof(ob)) === "object";
              }
            },
            isFormData: function isFormData(val) {
              return typeof FormData !== "undefined" && val instanceof FormData;
            },
            trim: function trim2(str) {
              return str.replace(/(^\s*)|(\s*$)/g, "");
            },
            encode: function encode2(val) {
              return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            },
            formatParams: function formatParams(data) {
              var str = "";
              var first = true;
              var that = this;
              if (!this.isObject(data)) {
                return data;
              }
              function _encode(sub, path) {
                var encode2 = that.encode;
                var type2 = that.type(sub);
                if (type2 == "array") {
                  sub.forEach(function(e, i2) {
                    if (!that.isObject(e))
                      i2 = "";
                    _encode(e, path + ("%5B" + i2 + "%5D"));
                  });
                } else if (type2 == "object") {
                  for (var key in sub) {
                    if (path) {
                      _encode(sub[key], path + "%5B" + encode2(key) + "%5D");
                    } else {
                      _encode(sub[key], encode2(key));
                    }
                  }
                } else {
                  if (!first) {
                    str += "&";
                  }
                  first = false;
                  str += path + "=" + encode2(sub);
                }
              }
              _encode(data, "");
              return str;
            },
            merge: function merge(a, b) {
              for (var key in b) {
                if (!a.hasOwnProperty(key)) {
                  a[key] = b[key];
                } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                  this.merge(a[key], b[key]);
                }
              }
              return a;
            }
          };
        },
        function(module2, exports2, __webpack_require__) {
          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
          var _createClass = function() {
            function defineProperties(target, props2) {
              for (var i2 = 0; i2 < props2.length; i2++) {
                var descriptor = props2[i2];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var util = __webpack_require__(0);
          var isBrowser = typeof document !== "undefined";
          function EngineWrapper(adapter2) {
            var AjaxEngine = function() {
              function AjaxEngine2() {
                _classCallCheck(this, AjaxEngine2);
                this.requestHeaders = {};
                this.readyState = 0;
                this.timeout = 0;
                this.responseURL = "";
                this.responseHeaders = {};
              }
              _createClass(AjaxEngine2, [{
                key: "_call",
                value: function _call(name) {
                  this[name] && this[name].apply(this, [].splice.call(arguments, 1));
                }
              }, {
                key: "_changeReadyState",
                value: function _changeReadyState(state) {
                  this.readyState = state;
                  this._call("onreadystatechange");
                }
              }, {
                key: "open",
                value: function open(method2, url2) {
                  this.method = method2;
                  if (!url2) {
                    url2 = location.href;
                  } else {
                    url2 = util.trim(url2);
                    if (url2.indexOf("http") !== 0) {
                      if (isBrowser) {
                        var t = document.createElement("a");
                        t.href = url2;
                        url2 = t.href;
                      }
                    }
                  }
                  this.responseURL = url2;
                  this._changeReadyState(1);
                }
              }, {
                key: "send",
                value: function send(arg) {
                  var _this = this;
                  arg = arg || null;
                  var self2 = this;
                  if (adapter2) {
                    var request = {
                      method: self2.method,
                      url: self2.responseURL,
                      headers: self2.requestHeaders || {},
                      body: arg
                    };
                    util.merge(request, self2._options || {});
                    if (request.method === "GET") {
                      request.body = null;
                    }
                    self2._changeReadyState(3);
                    var timer = void 0;
                    self2.timeout = self2.timeout || 0;
                    if (self2.timeout > 0) {
                      timer = setTimeout(function() {
                        if (self2.readyState === 3) {
                          _this._call("onloadend");
                          self2._changeReadyState(0);
                          self2._call("ontimeout");
                        }
                      }, self2.timeout);
                    }
                    request.timeout = self2.timeout;
                    adapter2(request, function(response) {
                      function getAndDelete(key2) {
                        var t = response[key2];
                        delete response[key2];
                        return t;
                      }
                      if (self2.readyState !== 3)
                        return;
                      clearTimeout(timer);
                      self2.status = getAndDelete("statusCode") - 0;
                      var responseText = getAndDelete("responseText");
                      var statusMessage = getAndDelete("statusMessage");
                      if (!self2.status) {
                        self2.statusText = responseText;
                        self2._call("onerror", { msg: statusMessage });
                      } else {
                        var responseHeaders = getAndDelete("headers");
                        var headers = {};
                        for (var field in responseHeaders) {
                          var value = responseHeaders[field];
                          var key = field.toLowerCase();
                          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                            headers[key] = value;
                          } else {
                            headers[key] = headers[key] || [];
                            headers[key].push(value);
                          }
                        }
                        var cookies = headers["set-cookie"];
                        if (isBrowser && cookies) {
                          cookies.forEach(function(e) {
                            document.cookie = e.replace(/;\s*httpOnly/ig, "");
                          });
                        }
                        self2.responseHeaders = headers;
                        self2.statusText = statusMessage || "";
                        self2.response = self2.responseText = responseText;
                        self2._response = response;
                        self2._changeReadyState(4);
                        self2._call("onload");
                      }
                      self2._call("onloadend");
                    });
                  } else {
                    formatAppLog("error", "at node_modules/flyio/dist/npm/wx.js:311", "Ajax require adapter");
                  }
                }
              }, {
                key: "setRequestHeader",
                value: function setRequestHeader(key, value) {
                  this.requestHeaders[util.trim(key)] = value;
                }
              }, {
                key: "getResponseHeader",
                value: function getResponseHeader(key) {
                  return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
                }
              }, {
                key: "getAllResponseHeaders",
                value: function getAllResponseHeaders() {
                  var str = "";
                  for (var key in this.responseHeaders) {
                    str += key + ":" + this.getResponseHeader(key) + "\r\n";
                  }
                  return str || null;
                }
              }, {
                key: "abort",
                value: function abort(msg) {
                  this._changeReadyState(0);
                  this._call("onerror", { msg });
                  this._call("onloadend");
                }
              }], [{
                key: "setAdapter",
                value: function setAdapter(requestAdapter) {
                  adapter2 = requestAdapter;
                }
              }]);
              return AjaxEngine2;
            }();
            return AjaxEngine;
          }
          module2.exports = EngineWrapper;
        },
        function(module2, exports2, __webpack_require__) {
          var _createClass = function() {
            function defineProperties(target, props2) {
              for (var i2 = 0; i2 < props2.length; i2++) {
                var descriptor = props2[i2];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var utils = __webpack_require__(0);
          var isBrowser = typeof document !== "undefined";
          var Fly2 = function() {
            function Fly3(engine) {
              _classCallCheck(this, Fly3);
              this.engine = engine || XMLHttpRequest;
              this.default = this;
              function wrap(interceptor) {
                var resolve = void 0;
                var reject = void 0;
                function _clear() {
                  interceptor.p = resolve = reject = null;
                }
                utils.merge(interceptor, {
                  lock: function lock() {
                    if (!resolve) {
                      interceptor.p = new Promise(function(_resolve, _reject) {
                        resolve = _resolve;
                        reject = _reject;
                      });
                    }
                  },
                  unlock: function unlock() {
                    if (resolve) {
                      resolve();
                      _clear();
                    }
                  },
                  clear: function clear() {
                    if (reject) {
                      reject("cancel");
                      _clear();
                    }
                  }
                });
              }
              var interceptors = this.interceptors = {
                response: {
                  use: function use(handler, onerror) {
                    this.handler = handler;
                    this.onerror = onerror;
                  }
                },
                request: {
                  use: function use(handler) {
                    this.handler = handler;
                  }
                }
              };
              var irq = interceptors.request;
              var irp = interceptors.response;
              wrap(irp);
              wrap(irq);
              this.config = {
                method: "GET",
                baseURL: "",
                headers: {},
                timeout: 0,
                params: {},
                parseJson: true,
                withCredentials: false
              };
            }
            _createClass(Fly3, [{
              key: "request",
              value: function request(url2, data, options) {
                var _this = this;
                var engine = new this.engine();
                var contentType = "Content-Type";
                var contentTypeLowerCase = contentType.toLowerCase();
                var interceptors = this.interceptors;
                var requestInterceptor = interceptors.request;
                var responseInterceptor = interceptors.response;
                var requestInterceptorHandler = requestInterceptor.handler;
                var promise2 = new Promise(function(resolve, reject) {
                  if (utils.isObject(url2)) {
                    options = url2;
                    url2 = options.url;
                  }
                  options = options || {};
                  options.headers = options.headers || {};
                  function isPromise2(p) {
                    return p && p.then && p.catch;
                  }
                  function enqueueIfLocked(promise3, callback) {
                    if (promise3) {
                      promise3.then(function() {
                        callback();
                      });
                    } else {
                      callback();
                    }
                  }
                  function makeRequest(options2) {
                    data = options2.body;
                    url2 = utils.trim(options2.url);
                    var baseUrl = utils.trim(options2.baseURL || "");
                    if (!url2 && isBrowser && !baseUrl)
                      url2 = location.href;
                    if (url2.indexOf("http") !== 0) {
                      var isAbsolute = url2[0] === "/";
                      if (!baseUrl && isBrowser) {
                        var arr = location.pathname.split("/");
                        arr.pop();
                        baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                      }
                      if (baseUrl[baseUrl.length - 1] !== "/") {
                        baseUrl += "/";
                      }
                      url2 = baseUrl + (isAbsolute ? url2.substr(1) : url2);
                      if (isBrowser) {
                        var t = document.createElement("a");
                        t.href = url2;
                        url2 = t.href;
                      }
                    }
                    var responseType = utils.trim(options2.responseType || "");
                    var needQuery = ["GET", "HEAD", "DELETE", "OPTION"].indexOf(options2.method) !== -1;
                    var dataType = utils.type(data);
                    var params = options2.params || {};
                    if (needQuery && dataType === "object") {
                      params = utils.merge(data, params);
                    }
                    params = utils.formatParams(params);
                    var _params = [];
                    if (params) {
                      _params.push(params);
                    }
                    if (needQuery && data && dataType === "string") {
                      _params.push(data);
                    }
                    if (_params.length > 0) {
                      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                    }
                    engine.open(options2.method, url2);
                    try {
                      engine.withCredentials = !!options2.withCredentials;
                      engine.timeout = options2.timeout || 0;
                      if (responseType !== "stream") {
                        engine.responseType = responseType;
                      }
                    } catch (e) {
                    }
                    var customContentType = options2.headers[contentType] || options2.headers[contentTypeLowerCase];
                    var _contentType = "application/x-www-form-urlencoded";
                    if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                      data = utils.formatParams(data);
                    } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                      _contentType = "application/json;charset=utf-8";
                      data = JSON.stringify(data);
                    }
                    if (!(customContentType || needQuery)) {
                      options2.headers[contentType] = _contentType;
                    }
                    for (var k in options2.headers) {
                      if (k === contentType && utils.isFormData(data)) {
                        delete options2.headers[k];
                      } else {
                        try {
                          engine.setRequestHeader(k, options2.headers[k]);
                        } catch (e) {
                        }
                      }
                    }
                    function onresult(handler, data2, type2) {
                      enqueueIfLocked(responseInterceptor.p, function() {
                        if (handler) {
                          if (type2) {
                            data2.request = options2;
                          }
                          var ret = handler.call(responseInterceptor, data2, Promise);
                          data2 = ret === void 0 ? data2 : ret;
                        }
                        if (!isPromise2(data2)) {
                          data2 = Promise[type2 === 0 ? "resolve" : "reject"](data2);
                        }
                        data2.then(function(d) {
                          resolve(d);
                        }).catch(function(e) {
                          reject(e);
                        });
                      });
                    }
                    function onerror(e) {
                      e.engine = engine;
                      onresult(responseInterceptor.onerror, e, -1);
                    }
                    function Err(msg, status) {
                      this.message = msg;
                      this.status = status;
                    }
                    engine.onload = function() {
                      try {
                        var response = engine.response || engine.responseText;
                        if (response && options2.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1 && !utils.isObject(response)) {
                          response = JSON.parse(response);
                        }
                        var headers = engine.responseHeaders;
                        if (!headers) {
                          headers = {};
                          var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                          items.pop();
                          items.forEach(function(e2) {
                            if (!e2)
                              return;
                            var key = e2.split(":")[0];
                            headers[key] = engine.getResponseHeader(key);
                          });
                        }
                        var status = engine.status;
                        var statusText = engine.statusText;
                        var _data = { data: response, headers, status, statusText };
                        utils.merge(_data, engine._response);
                        if (status >= 200 && status < 300 || status === 304) {
                          _data.engine = engine;
                          _data.request = options2;
                          onresult(responseInterceptor.handler, _data, 0);
                        } else {
                          var e = new Err(statusText, status);
                          e.response = _data;
                          onerror(e);
                        }
                      } catch (e2) {
                        onerror(new Err(e2.msg, engine.status));
                      }
                    };
                    engine.onerror = function(e) {
                      onerror(new Err(e.msg || "Network Error", 0));
                    };
                    engine.ontimeout = function() {
                      onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                    };
                    engine._options = options2;
                    setTimeout(function() {
                      engine.send(needQuery ? null : data);
                    }, 0);
                  }
                  enqueueIfLocked(requestInterceptor.p, function() {
                    utils.merge(options, JSON.parse(JSON.stringify(_this.config)));
                    var headers = options.headers;
                    headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                    delete headers[contentTypeLowerCase];
                    options.body = data || options.body;
                    url2 = utils.trim(url2 || "");
                    options.method = options.method.toUpperCase();
                    options.url = url2;
                    var ret = options;
                    if (requestInterceptorHandler) {
                      ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                    }
                    if (!isPromise2(ret)) {
                      ret = Promise.resolve(ret);
                    }
                    ret.then(function(d) {
                      if (d === options) {
                        makeRequest(d);
                      } else {
                        resolve(d);
                      }
                    }, function(err) {
                      reject(err);
                    });
                  });
                });
                promise2.engine = engine;
                return promise2;
              }
            }, {
              key: "all",
              value: function all(promises) {
                return Promise.all(promises);
              }
            }, {
              key: "spread",
              value: function spread(callback) {
                return function(arr) {
                  return callback.apply(null, arr);
                };
              }
            }]);
            return Fly3;
          }();
          Fly2.default = Fly2;
          ["get", "post", "put", "patch", "head", "delete"].forEach(function(e) {
            Fly2.prototype[e] = function(url2, data, option) {
              return this.request(url2, data, utils.merge({ method: e }, option));
            };
          });
          ["lock", "unlock", "clear"].forEach(function(e) {
            Fly2.prototype[e] = function() {
              this.interceptors.request[e]();
            };
          });
          module2.exports = Fly2;
        },
        ,
        ,
        ,
        ,
        function(module2, exports2, __webpack_require__) {
          module2.exports = function(request, responseCallback) {
            var con = {
              method: request.method,
              url: request.url,
              dataType: request.dataType || void 0,
              header: request.headers,
              data: request.body || {},
              responseType: request.responseType || "text",
              success: function success(res) {
                responseCallback({
                  statusCode: res.statusCode,
                  responseText: res.data,
                  headers: res.header,
                  statusMessage: res.errMsg
                });
              },
              fail: function fail(res) {
                responseCallback({
                  statusCode: res.statusCode || 0,
                  statusMessage: res.errMsg
                });
              }
            };
            wx.request(con);
          };
        },
        ,
        ,
        ,
        ,
        ,
        function(module2, exports2, __webpack_require__) {
          var _Fly = __webpack_require__(2);
          var EngineWrapper = __webpack_require__(1);
          var adapter2 = __webpack_require__(7);
          var wxEngine = EngineWrapper(adapter2);
          module2.exports = function(engine) {
            return new _Fly(engine || wxEngine);
          };
        }
      ]);
    });
  })(wx$1);
  var Fly = /* @__PURE__ */ getDefaultExportFromCjs(wx$1.exports);
  const install$1 = (app, vm) => {
    const fly = new Fly();
    fly.interceptors.request.use((request) => {
      let token = uni.getStorageSync("aliToken");
      if (token) {
        request.headers["token"] = token;
      }
      return request;
    }, function(error2) {
      return Promise.reject(error2);
    });
    fly.interceptors.response.use((res) => {
      return res;
    }, (error2) => {
      return Promise.reject(error2);
    });
    app.config.globalProperties.$http = fly;
  };
  var http = {
    install: install$1
  };
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i2 = 0, l = obj.length; i2 < l; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$1() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$1(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$1({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i2 = 0, l = arguments.length; i2 < l; i2++) {
      forEach(arguments[i2], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  var adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile(__spreadValues(__spreadValues(__spreadValues({}, _config), otherConfig), mergeKeys$1(optionalKeys, config2)));
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request(__spreadValues(__spreadValues({}, _config), mergeKeys$1(optionalKeys, config2)));
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  var dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  var mergeConfig = (globalsConfig, config2 = {}) => {
    const method2 = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method: method2,
      url: config2.url || "",
      params: config2.params || {},
      custom: __spreadValues(__spreadValues({}, globalsConfig.custom || {}), config2.custom || {}),
      header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));
    if (method2 === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method2 === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultsKeys, globalsConfig, config2));
    }
    return config3;
  };
  var defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type2) {
      return type2 != null && obj instanceof type2;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value) {
              resolve(_clone(value, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value) {
            var entryChild = _clone(value, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i2 in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i2);
          if (attrs) {
            child[i2] = _clone(parent2[i2], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i2);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i2] = _clone(parent2[i2], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            var symbol = symbols[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i2 = 0; i2 < allPropertyNames.length; i2++) {
            var propertyName = allPropertyNames[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/uview-plus/libs/luch-request/core/Request.js:39", "\u8BBE\u7F6E\u5168\u5C40\u53C2\u6570\u5FC5\u987B\u63A5\u6536\u4E00\u4E2AObject");
      }
      this.config = clone(__spreadValues(__spreadValues({}, defaults), arg));
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        method: "GET"
      }, options));
    }
    post(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "POST"
      }, options));
    }
    put(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "PUT"
      }, options));
    }
    delete(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "DELETE"
      }, options));
    }
    options(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "OPTIONS"
      }, options));
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        params: {},
        animationType: "pop-in",
        animationDuration: 300,
        intercept: false
      };
      this.route = this.route.bind(this);
    }
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = uni.$u.deepMerge(options, this.config);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === uni.$u.page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = uni.$u.deepMerge(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    openPage(config2) {
      const {
        url: url2,
        type: type2,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  var route = new Router().route;
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i2 = 0; i2 < step; i2++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i2 + startR)},${Math.round(sG * i2 + startG)},${Math.round(sB * i2 + startB)})`);
      if (i2 === 0)
        hex = rgbToHex(startColor);
      if (i2 === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i2, i2 + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i2 = 0; i2 < aColor.length; i2++) {
        let hex = Number(aColor[i2]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i2 = 0; i2 < aNum.length; i2 += 1) {
          numHex += aNum[i2] + aNum[i2];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i2, i2 + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  var colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i2 in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at node_modules/uview-plus/libs/function/digit.js:45", `${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (test.number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i2 = 0; i2 < len; i2++)
        uuid[i2] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i2 = 0; i2 < 36; i2++) {
        if (!uuid[i2]) {
          r = 0 | Math.random() * 16;
          uuid[i2] = chars[i2 == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i2 = 0; i2 < styleArray.length; i2++) {
        if (styleArray[i2]) {
          const item2 = styleArray[i2].split(":");
          style[trim(item2[0])] = trim(item2[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i2 in customStyle) {
      const key = i2.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i2]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = "") {
    if (!unit) {
      unit = uni.$u.config.unit || "px";
    }
    value = String(value);
    return test.number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = test.array(obj) ? [] : {};
    for (const i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        o[i2] = typeof obj[i2] === "object" ? deepClone(obj[i2]) : obj[i2];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at node_modules/uview-plus/libs/function/index.js:238", `uView\u63D0\u793A\uFF1A${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError("fillString must be String");
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      "d": date2.getDate().toString().padStart(2, "0"),
      "h": date2.getHours().toString().padStart(2, "0"),
      "M": date2.getMinutes().toString().padStart(2, "0"),
      "s": date2.getSeconds().toString().padStart(2, "0")
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format2 = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = new Date().getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (format2 === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = timeFormat(timestamp, format2);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i2 = 0; i2 < value.length; i2++) {
              _result.push(`${key}[${i2}]=${value[i2]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type2 = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type2) == -1)
      type2 = "success";
    let iconName = "";
    switch (type2) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event2) {
    const formItem2 = uni.$u.$parent.call(instance, "u-form-item");
    const form2 = uni.$u.$parent.call(instance, "u-form");
    if (formItem2 && form2) {
      form2.validateField(formItem2.prop, () => {
      }, event2);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i2 = 1; i2 < keys.length; i2++) {
        if (firstObj) {
          firstObj = firstObj[keys[i2]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$u;
    uni.$u.config = deepMerge2(uni.$u.config, config2);
    uni.$u.props = deepMerge2(uni.$u.props, props2);
    uni.$u.color = deepMerge2(uni.$u.color, color2);
    uni.$u.zIndex = deepMerge2(uni.$u.zIndex, zIndex2);
  }
  var index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    setConfig
  };
  var zIndex = {
    toast: 10090,
    noNetwork: 10080,
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  var platform$1 = platform;
  const $u = __spreadProps(__spreadValues({
    route,
    date: index.timeFormat,
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: ["primary", "success", "error", "warning", "info"],
    http: new Request(),
    config,
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$s
  }, index), {
    color,
    platform: platform$1
  });
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.config.globalProperties.$u = $u;
    Vue2.config.globalProperties.$nextTick = (cb) => {
      cb();
    };
    Vue2.mixin(mixin);
  };
  var uviewPlus = {
    install
  };
  var vueClipboard = { exports: {} };
  var clipboard_min = { exports: {} };
  /*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   */
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      return n = { 686: function(t, e, n2) {
        n2.d(e, { default: function() {
          return b;
        } });
        var e = n2(279), i2 = n2.n(e), e = n2(370), u = n2.n(e), e = n2(817), r2 = n2.n(e);
        function c(t2) {
          try {
            return document.execCommand(t2);
          } catch (t3) {
            return;
          }
        }
        var a = function(t2) {
          t2 = r2()(t2);
          return c("cut"), t2;
        };
        function o2(t2, e2) {
          var n3, o3, t2 = (n3 = t2, o3 = document.documentElement.getAttribute("dir") === "rtl", (t2 = document.createElement("textarea")).style.fontSize = "12pt", t2.style.border = "0", t2.style.padding = "0", t2.style.margin = "0", t2.style.position = "absolute", t2.style[o3 ? "right" : "left"] = "-9999px", o3 = window.pageYOffset || document.documentElement.scrollTop, t2.style.top = "".concat(o3, "px"), t2.setAttribute("readonly", ""), t2.value = n3, t2);
          return e2.container.appendChild(t2), e2 = r2()(t2), c("copy"), t2.remove(), e2;
        }
        var f = function(t2) {
          var e2 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { container: document.body }, n3 = "";
          return typeof t2 == "string" ? n3 = o2(t2, e2) : t2 instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(t2 == null ? void 0 : t2.type) ? n3 = o2(t2.value, e2) : (n3 = r2()(t2), c("copy")), n3;
        };
        function l(t2) {
          return (l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var s = function() {
          var t2 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e2 = t2.action, n3 = e2 === void 0 ? "copy" : e2, o3 = t2.container, e2 = t2.target, t2 = t2.text;
          if (n3 !== "copy" && n3 !== "cut")
            throw new Error('Invalid "action" value, use either "copy" or "cut"');
          if (e2 !== void 0) {
            if (!e2 || l(e2) !== "object" || e2.nodeType !== 1)
              throw new Error('Invalid "target" value, use a valid Element');
            if (n3 === "copy" && e2.hasAttribute("disabled"))
              throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if (n3 === "cut" && (e2.hasAttribute("readonly") || e2.hasAttribute("disabled")))
              throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
          }
          return t2 ? f(t2, { container: o3 }) : e2 ? n3 === "cut" ? a(e2) : f(e2, { container: o3 }) : void 0;
        };
        function p(t2) {
          return (p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        function d(t2, e2) {
          for (var n3 = 0; n3 < e2.length; n3++) {
            var o3 = e2[n3];
            o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(t2, o3.key, o3);
          }
        }
        function y(t2, e2) {
          return (y = Object.setPrototypeOf || function(t3, e3) {
            return t3.__proto__ = e3, t3;
          })(t2, e2);
        }
        function h(n3) {
          var o3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t2) {
              return false;
            }
          }();
          return function() {
            var t2, e2 = v(n3);
            return t2 = o3 ? (t2 = v(this).constructor, Reflect.construct(e2, arguments, t2)) : e2.apply(this, arguments), e2 = this, !(t2 = t2) || p(t2) !== "object" && typeof t2 != "function" ? function(t3) {
              if (t3 !== void 0)
                return t3;
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(e2) : t2;
          };
        }
        function v(t2) {
          return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          })(t2);
        }
        function m(t2, e2) {
          t2 = "data-clipboard-".concat(t2);
          if (e2.hasAttribute(t2))
            return e2.getAttribute(t2);
        }
        var b = function() {
          !function(t3, e3) {
            if (typeof e3 != "function" && e3 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && y(t3, e3);
          }(r3, i2());
          var t2, e2, n3, o3 = h(r3);
          function r3(t3, e3) {
            var n4;
            return function(t4) {
              if (!(t4 instanceof r3))
                throw new TypeError("Cannot call a class as a function");
            }(this), (n4 = o3.call(this)).resolveOptions(e3), n4.listenClick(t3), n4;
          }
          return t2 = r3, n3 = [{ key: "copy", value: function(t3) {
            var e3 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { container: document.body };
            return f(t3, e3);
          } }, { key: "cut", value: function(t3) {
            return a(t3);
          } }, { key: "isSupported", value: function() {
            var t3 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], t3 = typeof t3 == "string" ? [t3] : t3, e3 = !!document.queryCommandSupported;
            return t3.forEach(function(t4) {
              e3 = e3 && !!document.queryCommandSupported(t4);
            }), e3;
          } }], (e2 = [{ key: "resolveOptions", value: function() {
            var t3 = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
            this.action = typeof t3.action == "function" ? t3.action : this.defaultAction, this.target = typeof t3.target == "function" ? t3.target : this.defaultTarget, this.text = typeof t3.text == "function" ? t3.text : this.defaultText, this.container = p(t3.container) === "object" ? t3.container : document.body;
          } }, { key: "listenClick", value: function(t3) {
            var e3 = this;
            this.listener = u()(t3, "click", function(t4) {
              return e3.onClick(t4);
            });
          } }, { key: "onClick", value: function(t3) {
            var e3 = t3.delegateTarget || t3.currentTarget, n4 = this.action(e3) || "copy", t3 = s({ action: n4, container: this.container, target: this.target(e3), text: this.text(e3) });
            this.emit(t3 ? "success" : "error", { action: n4, text: t3, trigger: e3, clearSelection: function() {
              e3 && e3.focus(), window.getSelection().removeAllRanges();
            } });
          } }, { key: "defaultAction", value: function(t3) {
            return m("action", t3);
          } }, { key: "defaultTarget", value: function(t3) {
            t3 = m("target", t3);
            if (t3)
              return document.querySelector(t3);
          } }, { key: "defaultText", value: function(t3) {
            return m("text", t3);
          } }, { key: "destroy", value: function() {
            this.listener.destroy();
          } }]) && d(t2.prototype, e2), n3 && d(t2, n3), r3;
        }();
      }, 828: function(t) {
        var e;
        typeof Element == "undefined" || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t2, e2) {
          for (; t2 && t2.nodeType !== 9; ) {
            if (typeof t2.matches == "function" && t2.matches(e2))
              return t2;
            t2 = t2.parentNode;
          }
        };
      }, 438: function(t, e, n2) {
        var u = n2(828);
        function i2(t2, e2, n3, o2, r2) {
          var i3 = function(e3, n4, t3, o3) {
            return function(t4) {
              t4.delegateTarget = u(t4.target, n4), t4.delegateTarget && o3.call(e3, t4);
            };
          }.apply(this, arguments);
          return t2.addEventListener(n3, i3, r2), { destroy: function() {
            t2.removeEventListener(n3, i3, r2);
          } };
        }
        t.exports = function(t2, e2, n3, o2, r2) {
          return typeof t2.addEventListener == "function" ? i2.apply(null, arguments) : typeof n3 == "function" ? i2.bind(null, document).apply(null, arguments) : (typeof t2 == "string" && (t2 = document.querySelectorAll(t2)), Array.prototype.map.call(t2, function(t3) {
            return i2(t3, e2, n3, o2, r2);
          }));
        };
      }, 879: function(t, n2) {
        n2.node = function(t2) {
          return t2 !== void 0 && t2 instanceof HTMLElement && t2.nodeType === 1;
        }, n2.nodeList = function(t2) {
          var e = Object.prototype.toString.call(t2);
          return t2 !== void 0 && (e === "[object NodeList]" || e === "[object HTMLCollection]") && "length" in t2 && (t2.length === 0 || n2.node(t2[0]));
        }, n2.string = function(t2) {
          return typeof t2 == "string" || t2 instanceof String;
        }, n2.fn = function(t2) {
          return Object.prototype.toString.call(t2) === "[object Function]";
        };
      }, 370: function(t, e, n2) {
        var f = n2(879), l = n2(438);
        t.exports = function(t2, e2, n3) {
          if (!t2 && !e2 && !n3)
            throw new Error("Missing required arguments");
          if (!f.string(e2))
            throw new TypeError("Second argument must be a String");
          if (!f.fn(n3))
            throw new TypeError("Third argument must be a Function");
          if (f.node(t2))
            return c = e2, a = n3, (u = t2).addEventListener(c, a), { destroy: function() {
              u.removeEventListener(c, a);
            } };
          if (f.nodeList(t2))
            return o2 = t2, r2 = e2, i2 = n3, Array.prototype.forEach.call(o2, function(t3) {
              t3.addEventListener(r2, i2);
            }), { destroy: function() {
              Array.prototype.forEach.call(o2, function(t3) {
                t3.removeEventListener(r2, i2);
              });
            } };
          if (f.string(t2))
            return t2 = t2, e2 = e2, n3 = n3, l(document.body, t2, e2, n3);
          throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
          var o2, r2, i2, u, c, a;
        };
      }, 817: function(t) {
        t.exports = function(t2) {
          var e, n2 = t2.nodeName === "SELECT" ? (t2.focus(), t2.value) : t2.nodeName === "INPUT" || t2.nodeName === "TEXTAREA" ? ((e = t2.hasAttribute("readonly")) || t2.setAttribute("readonly", ""), t2.select(), t2.setSelectionRange(0, t2.value.length), e || t2.removeAttribute("readonly"), t2.value) : (t2.hasAttribute("contenteditable") && t2.focus(), n2 = window.getSelection(), (e = document.createRange()).selectNodeContents(t2), n2.removeAllRanges(), n2.addRange(e), n2.toString());
          return n2;
        };
      }, 279: function(t) {
        function e() {
        }
        e.prototype = { on: function(t2, e2, n2) {
          var o2 = this.e || (this.e = {});
          return (o2[t2] || (o2[t2] = [])).push({ fn: e2, ctx: n2 }), this;
        }, once: function(t2, e2, n2) {
          var o2 = this;
          function r2() {
            o2.off(t2, r2), e2.apply(n2, arguments);
          }
          return r2._ = e2, this.on(t2, r2, n2);
        }, emit: function(t2) {
          for (var e2 = [].slice.call(arguments, 1), n2 = ((this.e || (this.e = {}))[t2] || []).slice(), o2 = 0, r2 = n2.length; o2 < r2; o2++)
            n2[o2].fn.apply(n2[o2].ctx, e2);
          return this;
        }, off: function(t2, e2) {
          var n2 = this.e || (this.e = {}), o2 = n2[t2], r2 = [];
          if (o2 && e2)
            for (var i2 = 0, u = o2.length; i2 < u; i2++)
              o2[i2].fn !== e2 && o2[i2].fn._ !== e2 && r2.push(o2[i2]);
          return r2.length ? n2[t2] = r2 : delete n2[t2], this;
        } }, t.exports = e, t.exports.TinyEmitter = e;
      } }, r = {}, o.n = function(t) {
        var e = t && t.__esModule ? function() {
          return t.default;
        } : function() {
          return t;
        };
        return o.d(e, { a: e }), e;
      }, o.d = function(t, e) {
        for (var n2 in e)
          o.o(e, n2) && !o.o(t, n2) && Object.defineProperty(t, n2, { enumerable: true, get: e[n2] });
      }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, o(686).default;
      function o(t) {
        if (r[t])
          return r[t].exports;
        var e = r[t] = { exports: {} };
        return n[t](e, e.exports, o), e.exports;
      }
      var n, r;
    });
  })(clipboard_min);
  (function(module, exports) {
    var Clipboard = clipboard_min.exports;
    var VueClipboardConfig = {
      autoSetContainer: false,
      appendToBody: true
    };
    var VueClipboard2 = {
      install: function(Vue2) {
        var globalPrototype = Vue2.version.slice(0, 2) === "3." ? Vue2.config.globalProperties : Vue2.prototype;
        globalPrototype.$clipboardConfig = VueClipboardConfig;
        globalPrototype.$copyText = function(text2, container) {
          return new Promise(function(resolve, reject) {
            var fakeElement = document.createElement("button");
            var clipboard = new Clipboard(fakeElement, {
              text: function() {
                return text2;
              },
              action: function() {
                return "copy";
              },
              container: typeof container === "object" ? container : document.body
            });
            clipboard.on("success", function(e) {
              clipboard.destroy();
              resolve(e);
            });
            clipboard.on("error", function(e) {
              clipboard.destroy();
              reject(e);
            });
            if (VueClipboardConfig.appendToBody)
              document.body.appendChild(fakeElement);
            fakeElement.click();
            if (VueClipboardConfig.appendToBody)
              document.body.removeChild(fakeElement);
          });
        };
        Vue2.directive("clipboard", {
          bind: function(el, binding, vnode) {
            if (binding.arg === "success") {
              el._vClipboard_success = binding.value;
            } else if (binding.arg === "error") {
              el._vClipboard_error = binding.value;
            } else {
              var clipboard = new Clipboard(el, {
                text: function() {
                  return binding.value;
                },
                action: function() {
                  return binding.arg === "cut" ? "cut" : "copy";
                },
                container: VueClipboardConfig.autoSetContainer ? el : void 0
              });
              clipboard.on("success", function(e) {
                var callback = el._vClipboard_success;
                callback && callback(e);
              });
              clipboard.on("error", function(e) {
                var callback = el._vClipboard_error;
                callback && callback(e);
              });
              el._vClipboard = clipboard;
            }
          },
          update: function(el, binding) {
            if (binding.arg === "success") {
              el._vClipboard_success = binding.value;
            } else if (binding.arg === "error") {
              el._vClipboard_error = binding.value;
            } else {
              el._vClipboard.text = function() {
                return binding.value;
              };
              el._vClipboard.action = function() {
                return binding.arg === "cut" ? "cut" : "copy";
              };
            }
          },
          unbind: function(el, binding) {
            if (!el._vClipboard)
              return;
            if (binding.arg === "success") {
              delete el._vClipboard_success;
            } else if (binding.arg === "error") {
              delete el._vClipboard_error;
            } else {
              el._vClipboard.destroy();
              delete el._vClipboard;
            }
          }
        });
      },
      config: VueClipboardConfig
    };
    {
      module.exports = VueClipboard2;
    }
  })(vueClipboard);
  var VueClipboard = vueClipboard.exports;
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    app.use(http);
    app.use(uviewPlus);
    app.use(VueClipboard);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
