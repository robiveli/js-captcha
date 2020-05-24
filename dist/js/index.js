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
  var generateRandomNum = function generateRandomNum() {
    num1 = Math.round(Math.random() * 8) + 1;
    num2 = Math.round(Math.random() * 8) + 1;
    sumNum = num1 + num2;
  };
  /**
   * @param {Object}
   * @param {Object}
   * @param {Boolean}
  */


  var setCaptcha = function setCaptcha($el, options, shouldReset) {
    if (!shouldReset) {
      $el.insertAdjacentHTML('beforebegin', "<canvas class=\"".concat(options.canvasClass, "\"\n                    width=\"").concat(options.canvasStyle.width, "\" height=\"").concat(options.canvasStyle.height, "\">\n                </canvas>\n            "));
      this.$captchaEl = document.querySelector(".".concat(options.canvasClass));
      this.$captchaTextContext = this.$captchaEl.getContext('2d');
      this.$captchaTextContext = Object.assign(this.$captchaTextContext, options.canvasStyle);
    }

    this.$captchaTextContext.clearRect(0, 0, options.canvasStyle.width, options.canvasStyle.height);
    this.$captchaTextContext.fillText("".concat(num1, " + ").concat(num2, " ").concat(options.requiredValue), 0, 0);
  };
  /**
   * @param {Object}
  */


  var jCaptcha = function jCaptcha() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.options = Object.assign({}, {
      el: '.jCaptcha',
      canvasClass: 'jCaptchaCanvas',
      requiredValue: '*',
      resetOnError: true,
      focusOnError: true,
      clearOnSubmit: true,
      callback: null,
      canvasStyle: {}
    }, options);

    this._init();
  };

  var sumNum, num1, num2;
  var numberOfTries = 0;
  ;
  jCaptcha.prototype = {
    _init: function _init() {
      this.$el = document.querySelector(this.options.el);
      generateRandomNum();
      setCaptcha.call(this, this.$el, this.options);
    },
    validate: function validate() {
      numberOfTries++;
      this.callbackReceived = this.callbackReceived || typeof this.options.callback == 'function';

      if (this.$el.value != sumNum) {
        this.callbackReceived && this.options.callback('error', this.$el, numberOfTries);
        this.options.resetOnError === true && this.reset();
        this.options.focusOnError === true && this.$el.focus();
        this.options.clearOnSubmit === true && (this.$el.value = '');
      } else {
        this.callbackReceived && this.options.callback('success', this.$el, numberOfTries);
        this.options.clearOnSubmit === true && (this.$el.value = '');
      }
    },
    reset: function reset() {
      generateRandomNum();
      setCaptcha.call(this, this.$el, this.options, true);
    }
  };
}

return jCaptcha;

}));
