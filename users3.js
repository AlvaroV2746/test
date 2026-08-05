const users = [
    {
        name: 'Tiburcio',
        friends: [
            { name: 'Marisol', gender: 'female' },
            { name: 'Ramiro', gender: 'male' },
        ],
    },
    { name: 'Bruno', friends: [] },
    {
        name: 'Santiago',
        friends: [
            { name: 'Ana', gender: 'female' },
            { name: 'Juana', gender: 'female' },
        ],
    },
    {
        name: 'Roberto',
        friends: [
            { name: 'Miguel', gender: 'male' },
        ],
    },
];


const getGirlFriends = (users) => {

    const friends = users.map((user) => user.friends);

    const map = friends.flat().map((user) => {
        return {
            name: user.name,
            gender: user.gender
        };
    });

    const outcome = map.filter((user) => user.gender === "female");
    return outcome
}

const outcome = getGirlFriends(users);
console.log(outcome);

// [
//   { name: 'Marisol', birthday: '1983-03-23' },
//   { name: 'Ana', birthday: '2012-11-03' },
//   { name: 'Juan', birthday: '1933-05-14' },
//   { name: 'Teresa', birthday: '2012-11-03' },
// ];