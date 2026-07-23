const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};


const fill = (data1,name, data2) => {
  
}


console.log(get(data, ['hosts', 0]));

// get(data, ['undefined']); // null
// get(data, ['user']); // 'ubuntu'
// get(data, ['user', 'ubuntu']); // null
// get(data, ['hosts', 1, 'name']); // 'web2'
// get(data, ['hosts', 0]); // { name: 'web1' }
// get(data, ['hosts', 1, null]); // 3
// get(data, ['hosts', 1, 'active']); // false
// get(data, []); // { user: 'ubuntu', hosts: { 0: { name: 'web1' }, 1: { name: 'web2', null: 3, active: false }}}

