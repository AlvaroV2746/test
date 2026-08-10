// @ts-check
import _ from 'lodash';
const tree = {
    name: 'div',
    type: 'tag-internal',
    className: 'codica-community',
    children: [
        {
            name: 'div',
            type: 'tag-internal',
            className: 'old-class',
            children: [],
        },
        {
            name: 'div',
            type: 'tag-internal',
            className: 'old-class',
            children: [],
        },
    ],
};

// BEGIN (write your solution here)
const changeClass = (tree, oldClass, newClass) => {
    const newTree = _.cloneDeep(tree);

    // 2. Si la clase del nodo actual coincide, la cambiamos
    if (newTree.className === oldClass) {
        newTree.className = newClass;
    }
if (newTree.className === oldClass) {
        newTree.className = newClass;
    }

if (newTree.children && newTree.children.length > 0) {
        newTree.children = newTree.children.map((child) => 
            changeClass(child, oldClass, newClass)
        );
    }
    return newTree;
}
// END

console.log(changeClass(tree, "old-class", "new-class"));


// Resultado:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'codica-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
