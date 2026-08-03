const convert = (...dates) =>{
    if (dates.length === 0){
        return []
    }
    const outcome = [];
    let auxDate;
    for (let date of dates){
        auxDate = new Date(date[0], (date[1]-1), date[2]);
        outcome.push(auxDate.toDateString());
    }
    return outcome

}

console.log(convert([1993, 4, 24], [1997, 9, 12], [2001, 11, 18]));