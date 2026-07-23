const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const isObject = (x) => typeof x === 'object' && x !== null;


const cloneDeep = (data) => {
  // PASO 1: Si no es un objeto (es un string, número, null, etc.),
  // no hay nada que clonar profundamente, lo retornamos tal cual.
  if (!isObject(data)) {
    return data;
  }

  const output = {};

  for (const key in data) {
    if (Object.hasOwn(data, key)) {
      output[key] = cloneDeep(data[key]);
    }
  }

  return output;
};


const result = cloneDeep(data);

console.log(result);

console.log("------------------------------------");

console.log(data);

console.log(data.key2 === result.key2);


