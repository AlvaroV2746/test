const hasNumber = (string) => (string.search(/\d/) !== -1);

// BEGIN (write your solution here)

export default class PasswordValidator {
    constructor(options = {}) {
        this.minLength = options.minLength ?? 8;
        this.containNumbers = 'containNumbers' in options ? options.containNumbers : true;
    }

    validate(password) {
        const errors = {};

        if (password.length < this.minLength) {
            errors.minLength = 'too small';
        }

        if (this.containNumbers) {
            const hasNumber = /\d/.test(password);
            if (!hasNumber) {
                errors.containNumbers = 'should contain at least one number';
            }
        }
        return errors;
    }
}
// END

const validador = new PasswordValidator({ containNumbers: false });
console.log(validador.validate('qwerty'));
// {}
validador.validate('qwerty'); // { minLength: 'demasiado corto' }
