import crc32 from 'crc-32';

const MAP_SIZE = 1000;

// 2. Función auxiliar que convierte cualquier texto en un índice de nuestro array
const getIndex = (key) => {
    // crc32.str(key) nos devuelve un número entero (puede ser positivo o negativo)
    const hashCode = crc32.str(key);

    // Math.abs nos asegura que el número sea siempre positivo
    // El operador resto (%) nos asegura que el resultado esté entre 0 y (MAP_SIZE - 1)
    const index = Math.abs(hashCode) % MAP_SIZE;

    return index;
};

const make = () => {
    return new Array(MAP_SIZE);
}
const set = (map, key, value) => {
    const index = getIndex(key);

    if (map[index] === undefined) {
        map[index] = [key, value];
        return true
    }
    else if (map[index][0] === key) {
        map[index][1] = value;
        return true
    }
    else {
        return false
    }

}
const get = (map, key, defaultValue = null) => {
    const index = getIndex(key);
    if (map[index] !== undefined && map[index][0] === key){
        return map[index][1]
    } else{
        return defaultValue
    }

}

console.log(getIndex('user'));

// import { make, set, get } from './map.js';

// const map = make();
// let result = get(map, 'key');
// console.log(result); // => null

// result = get(map, 'key', 'default_value');
// console.log(result); // => "default_value"

// set(map, 'key2', 'value2');
// result = get(map, 'key2');
// console.log(result); // => "value2"
