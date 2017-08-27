(function (root, factory) {
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

{
        var extendDefaults = function extendDefaults(defaults, options) {

                if (typeof NodeList.prototype.forEach !== 'function') {

                        NodeList.prototype.forEach = Array.prototype.forEach;
                }

                Object.keys(options).forEach(function (keys) {

                        defaults[keys] = options[keys];
                });

                return defaults;
        };

        var genereateRandomNum = function genereateRandomNum() {

                num1 = Math.round(Math.random() * 8) + 1;
                num2 = Math.round(Math.random() * 8) + 1;

                sumNum = num1 + num2;
        };

        var renderEl = function renderEl($captcha, requiredValue) {

                $captcha[0].insertAdjacentHTML('beforebegin', '<div class="jCaptchaText"></div>');
                this.$jCaptchaText = this.$jCaptchaText || document.getElementsByClassName('jCaptchaText');

                this.$jCaptchaText[0].textContent = num1 + ' + ' + num2 + ' ' + requiredValue + '';
        };

        'use strict';

        var sumNum = void 0,
            num1 = void 0,
            num2 = void 0;

        var jCaptcha = function jCaptcha(options) {

                this.options = options ? extendDefaults(this.options, options) : this.options;

                this.init();
        };

        jCaptcha.prototype = {

                options: {

                        el: 'jCaptcha',
                        requiredValue: '*',
                        resetOnError: true,
                        focusOnError: true,
                        clearOnSubmit: true,
                        callback: null

                },

                init: function init() {

                        this.$captcha = document.getElementsByClassName(this.options.el);

                        this.reset();
                },
                validate: function validate() {

                        this.callbackReceived = this.callbackReceived || typeof this.options.callback == 'function';

                        if (this.$captcha[0].value != sumNum) {

                                this.callbackReceived && this.options.callback('error', this.$captcha);

                                this.options.resetOnError === true && this.reset();
                                this.options.focusOnError === true && this.$captcha[0].focus();
                                this.options.clearOnSubmit === true && (this.$captcha[0].value = '');
                        } else {

                                this.callbackReceived && this.options.callback('success', this.$captcha);
                                this.options.clearOnSubmit === true && (this.$captcha[0].value = '');
                        }
                },
                reset: function reset() {

                        genereateRandomNum();
                        renderEl(this.$captcha, this.options.requiredValue);
                }
        };
}

return jCaptcha;

}));
