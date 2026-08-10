const array =  [1, 2, 3, 4];


const fill = (arr, value, start = 0, end = (arr.length)) => {

    if (start > end - 1){
        return arr
    }
    if(end > arr.length){
        end = arr.length
    }
    for (let i = start; i < end; i++){
        arr[i] = value;
    }
    return arr
}

export default fill
// console.log(fill(array, "*"));
