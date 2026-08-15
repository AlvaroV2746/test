/* eslint-disable no-param-reassign */

// BEGIN (write your solution here)

const protect = (user, protectedProps) => {
    const handlers = {
        get: (target, prop) => {
            if (protectedProps.includes(prop)) {
                throw new Error(`Error: Acceso restringido a ${prop}`)
            } else {
                return target[prop]
            }
        },
        set: (target, prop, value) => {
            if (protectedProps.includes(prop)) {
                throw new Error(`Error: Acceso restringido a ${prop}`)
            }else{
                target[prop] = value;
                return true;
            }
        }
    }
    return new Proxy(user, handlers);

}

// END
const user = {
    name: 'John',
    age: 25,
    password: 'secret',
};
