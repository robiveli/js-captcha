# JavaScript Captcha #
### Simple captcha component (2.11 KB) written in pure JavaScript with no dependencies ###

Easy to resolve random math addition rendered within basic canvas element.

### Install ###

```
npm install js-captcha
```

### Usage ###

Just include required JavaScript:
```
<script src="jCaptcha.js"></script>
```
or
```
import jCaptcha from './js-captcha/dist/jCaptcha';
```

Set captcha input element:
```
<input class="jCaptcha" type="text" placeholder="Type in result please">
```

Initialize it:
```
<script>
    var myCaptcha = new jCaptcha();
</script>
```

Call `validate()` method when required (e.g. on submit event):
```
<script>
    myCaptcha.validate();
</script>
```

No extra styling included, just style it as you wish, see options below.

### Options ###

jCaptcha can take an optional parameters - an object of key/value settings:

- **el** String *(default:jCaptcha)* - css class for input element
- **requiredValue** String *(default:\*)* - required filed indicator
- **resetOnError** Boolean *(default:true)* - render new random numbers on error validate
- **focusOnError** Boolean *(default:true)* - focus input field on error validate
- **clearOnSubmit** Boolean *(default:true)* - clear input value on every validate
- **canvasWidth** Number *(default:50)* - width of canvas captcha element (in px)
- **canvasHeight** Number *(default:15)* - height of canvas captcha element (in px)
- **canvasFontSize** String *(default:15px)* - font size of canvas captcha element
- **canvasFontFamily** String *(default:Arial)* - font family of canvas captcha element
- **canvasFillStyle** String *(default:#ddd)* - text color of canvas captcha element
- **callback** Object *(default:null)* - as invoked function these useful arguments are returned: *response* and *captcha input node*

### API ###

`reset()` - generate new random numbers

`validate()` - validate entered result in input field

### Demo ###

Demo available [here](https://www.rvdizajn.com/js-captcha/).

### Browser support ###

Works in every modern browser which has support for [canvas element](http://caniuse.com/#feat=canvas-text).

### License  ###

js-captcha is licensed under the [MIT license](http://opensource.org/licenses/MIT).
