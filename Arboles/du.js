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
const du = (tree) => {
    const calculateSize = (node) => {
        if (isFile(node)) {
            return getMeta(node).size || 0;
        }
        const children = getChildren(node);
        const sizes = children.map(calculateSize);
        return _.sum(sizes);
    };
    const children = getChildren(tree);

    const result = children.map((child) => {
        return [getName(child), calculateSize(child)];
    });
        return result.sort((a, b) => b[1] - a[1]);


}
// END

console.log(du(tree));

