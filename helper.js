// avarage number from array of numbers
function getAvrageNumber(array){
    let sum = 0;
    for (let value of array)
    sum += value;
    return sum / array.length; 
}

