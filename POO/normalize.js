// BEGIN (write your solution here)
// const normalize = (countries) => {
//     const outcome = {};
//     for (const country of countries) {
//         const auxCountry = country.country.trim().toLowerCase();
//         const auxName = country.name.trim().toLowerCase();
//         if (!outcome[auxCountry]) {
//             outcome[auxCountry] = [];
//         }
//         if (!outcome[auxCountry].includes(auxName)) {
//             outcome[auxCountry].push(auxName);
//             outcome[auxCountry].sort()
//         }
//     }
//     return outcome;
// }
// // END

// const countries = [
//     { name: 'Miami', country: 'usa' },
//     { name: 'Moscow ', country: '  ruSsiA' },
//     { name: 'samarA', country: ' Russia' },
// ];

// console.log(normalize(countries));

// -------------------------ALTERNATIVA-------------------------
const items = [
  { categoria: 'fruta', nombre: '  Manzana ' },
  { categoria: 'FRUTA', nombre: 'pera' },
  { categoria: 'fruta', nombre: 'manzana' }, // duplicada
  { categoria: 'VERDURA', nombre: 'zanahoria' },
];

const resultado = items.reduce((acumulador, item) => {
  // 1. Normalizamos las claves y los valores usando trim y toLowerCase
  const cat = item.categoria.trim().toLowerCase();
  const nombre = item.nombre.trim().toLowerCase();

  // 2. Si la categoría no existe en el acumulador, la inicializamos
  if (!acumulador[cat]) {
    acumulador[cat] = [];
  }

  // 3. Evitamos duplicados y agregamos el elemento si no está
  if (!acumulador[cat].includes(nombre)) {
    acumulador[cat].push(nombre);
  }

  return acumulador;
}, {}); // <--- El objeto vacío {} es el valor inicial del acumulador

// 4. Si quisieras ordenar al final, puedes recorrer las llaves del objeto resultante
Object.keys(resultado).forEach(cat => {
  resultado[cat].sort();
});

console.log(resultado);