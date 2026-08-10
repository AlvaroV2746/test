const removeFirstLevel = (tree) => {
    const outcome = [];
    for (let t of tree){
        if (Array.isArray(t)){
            outcome.push(t);
        }
    }
    return outcome.flat();
}
const arr = [1, 2, [3, 5], [[4, 3], 2]];
console.log(removeFirstLevel(arr));
