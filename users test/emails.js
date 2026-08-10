// @ts-check

import { get } from 'es-toolkit/compat';

const freeEmailDomains = [
    'gmail.com',
    'live.com',
    'hotmail.com',
    'yahoo.com',
];

const emails = [
    'info@gmail.com',
    'info@live.com',
    'info@hotmail.com',
    'mk@host.com',
    'support@codica.io',
    'key@live.com',
    'sergio@gmail.com',
    'miguel@gmail.com',
    'miguel@hotmail.com',
];


// BEGIN (write your solution here)
const getFreeDomainsCount = (emails) => {

    const getDomains = (list) => list.map((email) => {
        const partes = email.split('@');
        return partes[1];
    });

    const result = getDomains(emails);

    const outcome = result.reduce((acc, item) => {

        if (!Object.hasOwn(acc, item) && freeEmailDomains.includes(item)) {
            acc[item] = [0];
        }
        if (freeEmailDomains.includes(item)) {
            let count = parseInt(acc[item]) + 1;
            acc[item] = count;
        }
        return acc;
    }, {});

    return outcome;
}
// END
console.log(getFreeDomainsCount(emails));



// [
//   'gmail.com',
//   'live.com',
//   'hotmail.com',
//   'host.com',
//   'codica.io',
//   'live.com',
//   'gmail.com',
//   'gmail.com',
//   'hotmail.com'
// ]