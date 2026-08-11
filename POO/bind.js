// @ts-check


// BEGIN (write your solution here)

const bind = (obj, fn) => {
    return function(...args) {
        return fn.call(obj, ...args);
    };
};
// END


const obj = { number: 5 };

const fn = function fn(number) {
    return number + this.number;
};

// 1. Creamos la función con contexto atado
const fnWithContext = bind(obj, fn);

// 2. La ejecutamos pasándole el número 3 e imprimimos el resultado
console.log(fnWithContext(3)); // Debería imprimir: 8