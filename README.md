# JavaScript Captcha #
## Simple captcha module written in pure JavaScript with no dependencies ##


### Install ###

```sh
npm install jcaptcha
```

### Usage ###

Just include required JavaScript:
```sh
<script src="jCaptcha.js"></script>
```

Initialize it:
```sh
<script>
    var myCaptcha = new jCaptcha();
</script>
```

Call `validate()` method when required (e.g. on submit event):
```sh
<script>
    myCaptcha.validate();
</script>
```

No styling included, just style it as you wish :)

### Options ###

jCaptcha can take an optional parameters - an object of key/value settings:

- **el** String *(default:jCaptcha)* - css class for input element
- **requiredValue** String *(default:\*)* - required filed indicator
- **resetOnError** Boolean *(default:)* - render new random numbers on error validate
- **focusOnError** Boolean *(default:)* - focus input field on error validate
- **clearOnSubmit** Boolean *(default:)* - clear input value on every validate
- **callback** Object *(default:null)* - as invoked function these useful arguments are returned: *response* and *captcha input node*

### API ###

`reset()` - generate new random numbers

`validate()` - validate entered result in input field

### Demo ###

Demo available [here](http://www.rvdizajn.com/js-captcha/).

### License  ###

js-captcha is licensed under the [MIT license](http://opensource.org/licenses/MIT).
