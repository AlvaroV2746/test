// @ts-check

import path from 'path';
import { isFile, getName, getChildren, mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import { log } from 'console';
import { exit } from 'process';

const tree = mkdir('/', [
    mkdir('etc', [
        mkdir('apache'),
        mkdir('nginx', [
            mkfile('nginx.conf', { size: 800 }),
        ]),
        mkdir('consul', [
            mkfile('config.json', { size: 1200 }),
            mkfile('data', { size: 8200 }),
            mkfile('raft', { size: 80 }),
        ]),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
]);

// BEGIN (write your solution here)
const findFilesByName = (tree, match) => {
    const iter = (node, ancestry) => {
        const name = getName(node);
        const currentPath = path.join(ancestry, name);


        if (isFile(node)) {
            if (name.includes(match)) {
                return currentPath;
            }
            return []; 
        }

        const children = getChildren(node);
        return children.flatMap((child) => iter(child, currentPath));
    };

    return iter(tree, '/');
};
// END
console.log(findFilesByName(tree, 'co'));

// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
