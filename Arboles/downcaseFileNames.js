// @ts-check
import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);


// BEGIN (write your solution here)
const downcaseFileNames = (tree) => {
  let name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    return mkfile(name = name.toLowerCase(), newMeta); // Archivo nuevo con el dueño cambiado
  }

  // Recorremos hijos y generamos versiones modificadas
  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));
  return mkdir(name, newChildren, newMeta); // Directorio nuevo con dueño nuevo y cambios en hijos

}
// END

const newTree = downcaseFileNames(tree);




