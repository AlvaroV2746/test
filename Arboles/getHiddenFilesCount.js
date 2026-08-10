// @ts-check

import _ from 'lodash';
import { isFile, getName, getChildren, mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
    mkdir('etc', [
        mkdir('apache'),
        mkdir('nginx', [
            mkfile('.nginx.conf', { size: 800 }),
        ]),
        mkdir('.consul', [
            mkfile('.config.json', { size: 1200 }),
            mkfile('data', { size: 8200 }),
            mkfile('raft', { size: 80 }),
        ]),
    ]),
    mkfile('.hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
]);


// BEGIN (write your solution here)
const getHiddenFilesCount = (tree) => {
    // Caso base: si el nodo es un archivo, retornamos 1
    let name = getName(tree);
    if (isFile(tree)) {
        if (name.startsWith(".")) {
            return 1;
        }
        return 0;
    }

    const children = getChildren(tree);

    const names = children.map(getHiddenFilesCount);

return _.sum(names);
};


// END
console.log(getHiddenFilesCount(tree)); //3
