// @ts-check

import _ from 'lodash';
import {
    isFile, getName, getMeta, getChildren, mkdir, mkfile
} from '@hexlet/immutable-fs-trees';

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
du
// END

console.log(du(tree));

