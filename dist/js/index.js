(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (root['jCaptcha'] = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['jCaptcha'] = factory();
  }
}(this, function () {

"use strict";

{
  let sumNum, num1, num2;
  let numberOfTries = 0;
  function generateRandomNum() {
    num1 = Math.round(Math.random() * 8) + 1;
    num2 = Math.round(Math.random() * 8) + 1;
    sumNum = num1 + num2;
  }

  /**
   * @param {object} $el
   * @param {object} options
   * @param {boolean} shouldReset
   */
  function setCaptcha($el, options, shouldReset) {
    if (!shouldReset) {
      $el.insertAdjacentHTML("beforebegin", `<canvas class="${options.canvasClass}"
                    width="${options.canvasStyle.width}" height="${options.canvasStyle.height}">
                </canvas>
            `);
      this.$captchaEl = document.querySelector(`.${options.canvasClass}`);
      this.$captchaTextContext = this.$captchaEl.getContext("2d");
      this.$captchaTextContext = Object.assign(this.$captchaTextContext, options.canvasStyle);
    }
    this.$captchaTextContext.clearRect(0, 0, options.canvasStyle.width, options.canvasStyle.height);
    this.$captchaTextContext.fillText(`${num1} + ${num2} ${options.requiredValue}`, 0, 0);
  }

  /**
   * @param {object}
   */
  function jCaptcha(options = {}) {
    this.options = Object.assign({}, {
      el: ".jCaptcha",
      canvasClass: "jCaptchaCanvas",
      requiredValue: "*",
      resetOnError: true,
      focusOnError: true,
      clearOnSubmit: true,
      callback: null,
      canvasStyle: {}
    }, options);
    this._init();
  }
  jCaptcha.prototype = {
    _init() {
      this.$el = document.querySelector(this.options.el);
      generateRandomNum();
      setCaptcha.call(this, this.$el, this.options);
    },
    validate() {
      numberOfTries++;
      this.callbackReceived = this.callbackReceived || typeof this.options.callback == "function";
      if (this.$el.value != sumNum) {
        this.callbackReceived && this.options.callback("error", this.$el, numberOfTries);
        this.options.resetOnError === true && this.reset();
        this.options.focusOnError === true && this.$el.focus();
        this.options.clearOnSubmit === true && (this.$el.value = "");
      } else {
        this.callbackReceived && this.options.callback("success", this.$el, numberOfTries);
        this.options.clearOnSubmit === true && (this.$el.value = "");
      }
    },
    reset() {
      generateRandomNum();
      setCaptcha.call(this, this.$el, this.options, true);
    }
  };
}

return jCaptcha;

}));
