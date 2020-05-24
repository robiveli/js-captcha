# JavaScript Captcha #
### Simple captcha component (<2KB) written in pure JavaScript with no dependencies ###

Simple numeric captcha rendered within basic [canvas element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas).

### Demo ###

Demo can be seen [here](https://www.rvdizajn.com/js-captcha/).

### Install ###

```
npm install js-captcha --save
```

### Usage ###

Just include required JavaScript:
```
<script src="jCaptcha.js"></script>
```
or
```
import jCaptcha from 'jCaptcha';
```
Define main captcha input element in HTML:
```
<input class="jCaptcha" type="text" placeholder="Type in result please">
```

Initialize it:
```
<script>
    var myCaptcha = new jCaptcha({
        el: '.jCaptcha',
        canvas: {
            class: 'jCaptchaCanvas',
            style: {
                // required properties for captcha stylings:
                width: 100,
                height: 15,
                textBaseline: 'top',
                font: '15px Arial',
                textAlign: 'left',
                fillStyle: '#ddd'
            }
        },
        // set callback function for success and error messages:
        callback: ( response, $captchaInputElement, numberOfTries ) => {
            if ( response == 'success' ) {
                // success handle, e.g. continue with form submit
            }
            if ( response == 'error' ) {
                // error handle, e.g. add error class to captcha input

                if (numberOfTries === 3) {
                    // maximum attempts handle, e.g. disable form
                }
            }
        }
    });
</script>
```

And then call `validate()` method when required (e.g. on form submit event):
```
<script>
    myCaptcha.validate();
</script>
```

No stylings included, just style it as you wish, see options below.

### Options ###

jCaptcha can take an optional parameter - an [Object] of key/value settings:

 Name                | Required | Type          | Default     | Description |
| ---                | ---      | ---           | ---         | ---         |
| el                 | false     | [String]      | 'jCaptcha'  | CSS class for input element |
| requiredValue      | false    | [String]      | '*'         | Render new random numbers on error validate |
| resetOnError      | false    | [Boolean]      | true         | Mandatory field indicator |
| focusOnError      | false    | [Boolean]      | true         | Focus input field on error validate |
| clearOnSubmit     | false    | [Boolean]      | true'         | Clear input value on every validate |
| callback          | false    | [Function]     | null         | As invoked function these useful arguments are returned: response (type: *String*, value: *'success'* or *'error'*), captcha (type: *Element*) and number of tries (type: *Number*) |
| canvasClass       | false    | [String]      | 'jCaptchaCanvas'         | CSS class of canvas captcha
| canvasStyle      | true    | [Object]      | {}         | Canvas stylings object, required for canvas appearance |
| canvasStyle.width      | false    | [Number]      | null         | Width of canvas captcha element (in px) |
| canvasStyle.height      | false    | [Number]      | null         | Height of canvas captcha element (in px) |
| canvasStyle.font      | false    | [String]      | ''         | Font size and font family of canvas captcha element |
| canvasStyle.fillStyle      | false    | [String]      | ''         | Text color of canvas captcha element |
| canvasStyle.textAlign      | false    | [String]      | ''         | Text align of canvas captcha element |
| canvasStyle.textBaseline      | false    | [String]      | ''         | Text baseline of canvas captcha element |


### API ###

`reset()` - generate and render new random numbers

`validate()` - validate entered result in input field


### Browser support ###

Works in every modern browser which has support for [canvas element](http://caniuse.com/#feat=canvas-text).

### License  ###

js-captcha is licensed under the [MIT license](http://opensource.org/licenses/MIT).
