const data1 = {
  name: null,
  state: 'moderating',
};

const data2 = {
  name: 'Códica',
  state: 'published',
};

let object;

const data = {
  key2: 'value3',
  key3: 'val',
  key4: 'boom!',
  key: 'another value',
};




const fill = (data1, names, data2) => {
  if (names.length < 1){
    Object.assign(data1, data2);
    return data1
  }

  let data1Array = Object.entries(data1);

  for (const name of names){
 
      if (Object.hasOwn(data1, name)){
        data1[name] = data2[name];
      }

  }
  return data1
}


console.log(fill(data1, ['name'], data2));

// // Las llamadas a continuación deben considerarse independientes

// fill(company, ['name'], data);
// // {
// //   name: 'Códica',
// //   state: 'moderating',
// // }

// fill(company, [], data);
// // {
// //   name: 'Códica',
// //   state: 'published',
