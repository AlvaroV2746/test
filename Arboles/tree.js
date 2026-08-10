/* eslint-disable import/prefer-default-export */
// @ts-check

import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

const tree = trees.mkdir('mis documentos', [
    trees.mkfile('avatar.jpg', { size: 100 }),
    trees.mkfile('pasaporte.jpg', { size: 200 }),
    trees.mkfile('familia.jpg', { size: 150 }),
    trees.mkfile('direcciones', { size: 125 }),
    trees.mkdir('presentaciones')
]);


const compressImages = (tree) => {
    const children = trees.getChildren(tree);

    const newChildren = children.map((child) => {
        const name = trees.getName(child);
        const ext = trees.getName(child).split(".");
        const meta = _.cloneDeep(trees.getMeta(child));

        if (trees.isFile(child) && ext[1] === "jpg") {

            meta.size = meta.size / 2;
            return trees.mkfile(name, meta)
        }

        if (trees.isDirectory(child)) {
            const innerChildren = [...trees.getChildren(child)];
            return trees.mkdir(name, innerChildren, meta);
        }

        return trees.mkfile(name, meta)
    });

    const newMeta = _.cloneDeep(trees.getMeta(tree));
    return trees.mkdir(trees.getName(tree), newChildren, newMeta);
}

console.log(compressImages(tree));
