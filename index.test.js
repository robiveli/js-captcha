import { defaults } from './jest.config';
import jCaptcha from './dist/js/index';

//let myCaptcha;

describe('initialize error', () => {

    test('should throw an error if no default `.jCaptcha` element present in DOM', () => {
        expect(() => {
            myCaptcha = new jCaptcha();
        }).toThrowError();
    });
});

describe('initialize success', () => {

    test('should be initialized if default `.jCaptcha` element exist', () => {
        document.body.innerHTML = `<input class="jCaptcha" type="text">`;
        myCaptcha = new jCaptcha();

        expect(myCaptcha).toBeDefined();
    });

    test('should create default canvas `.jCaptchaCanvas` element', () => {
        expect(document.querySelector('.jCaptchaCanvas')).toBeDefined();
    });
});
