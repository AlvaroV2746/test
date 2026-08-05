// @ts-check

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];


import { sortBy } from 'es-toolkit';

// BEGIN (write your solution here)
export default function takeOldest(users, quantity = 1) {
    const usersCopy = structuredClone(users);

    const sorted = sortBy(usersCopy, [user => Date.parse(user.birthday)]);

    return sorted.slice(0, quantity);
}
// END

console.log(takeOldest(users, 2));
