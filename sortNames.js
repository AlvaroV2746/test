const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

const getSortedNames = (users) => {
    const namesSorted = [];

    for (user of users){
        const {name} = user;
        namesSorted.push(name) 
    }

    return namesSorted.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

};


const result = getSortedNames(users);

console.log(result);



