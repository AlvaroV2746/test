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

// (students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }