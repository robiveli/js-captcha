{ 
    'use strict';

    function extendDefaults(defaults, options) {

        if (typeof NodeList.prototype.forEach !== 'function') {

            NodeList.prototype.forEach = Array.prototype.forEach;

        }

        Object.keys(options).forEach((keys) => {

            defaults[keys] = options[keys];

        });

        return defaults;
            
    }

    let sumNum, num1, num2;

    function genereateRandomNum() {

        num1 = Math.round(Math.random() * (8)) + 1;
        num2 = Math.round(Math.random() * (8)) + 1;

        sumNum = num1 + num2;

    }

    function renderEl($captcha, requiredValue) {

        $captcha[0].insertAdjacentHTML('beforebegin', '<div class="jCaptchaText"></div>');
        this.$jCaptchaText = this.$jCaptchaText || document.getElementsByClassName('jCaptchaText');

        this.$jCaptchaText[0].textContent = num1 + ' + ' + num2 + ' ' + requiredValue + '';

    }

    let jCaptcha = function(options) {

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

        init() {

            this.$captcha = document.getElementsByClassName(this.options.el);

            this.reset();

        },

        validate() {

            this.callbackReceived = this.callbackReceived || (typeof this.options.callback == 'function');

            if (this.$captcha[0].value != sumNum) {

                this.callbackReceived && this.options.callback('error', this.$captcha);

                (this.options.resetOnError === true) && this.reset();
                (this.options.focusOnError === true) && this.$captcha[0].focus();
                (this.options.clearOnSubmit === true) && (this.$captcha[0].value = '');

            } else {

                this.callbackReceived && this.options.callback('success', this.$captcha);
                (this.options.clearOnSubmit === true) && (this.$captcha[0].value = '');

            }

        },

        reset() {

            genereateRandomNum();
            renderEl(this.$captcha, this.options.requiredValue);

        }

    };

}