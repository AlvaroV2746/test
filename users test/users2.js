const users = [
  {
    name: 'Tiburcio',
    children: [
      { name: 'Marisol', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bruno', children: [] },
  {
    name: 'Santiago',
    children: [
      { name: 'Ana', birthday: '2012-11-03' },
      { name: 'Juan', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Roberto',
    children: [
      { name: 'Teresa', birthday: '2012-11-03' },
    ],
  },
];

const getChildren = (users) => {

    const children = users.map((user) => user.children);

    const outcome = children.flat().map((user) => {
  return {
    name: user.name,
    birthday: user.birthday
  };
});
return outcome

}

const outcome = getChildren(users);
console.log(outcome);

// [
//   { name: 'Marisol', birthday: '1983-03-23' },
//   { name: 'Ana', birthday: '2012-11-03' },
//   { name: 'Juan', birthday: '1933-05-14' },
//   { name: 'Teresa', birthday: '2012-11-03' },
// ];