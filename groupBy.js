const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
];

const groupBy = (users, prop) => {

    const outcome = users.reduce((acc, user) => {
        if (!Object.hasOwn(acc, user[prop])) {
            acc[user[prop]] = [];
        }

        acc[user[prop]].push(user);

        return acc;
    }, {});
    return outcome
}
groupBy(students, "mark");


// MEJOR ALTERNATIVA
// const getFreeDomainsCount = (emails) => {
//     return emails
//         // 1. Filtramos solo los que su dominio esté en la lista gratuita
//         .filter((email) => {
//             const domain = email.split('@')[1];
//             return freeEmailDomains.includes(domain);
//         })
//         // 2. Mapeamos para quedarnos únicamente con el texto del dominio
//         .map((email) => email.split('@')[1])
//         // 3. Reducimos para contar cuántas veces aparece cada uno
//         .reduce((acc, domain) => {
//             // Si ya existe le sumamos 1, si no, arranca en 1
//             acc[domain] = (acc[domain] || 0) + 1;
//             return acc;
//         }, {});
// };