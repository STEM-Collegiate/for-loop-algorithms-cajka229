// Arrays for testing
const testArrays = [
    [0, 1, 2, 3, 4, 5],              // ascending numbers
    [-2, 4, -6, 8, -10, 12],         // all even numbers
    [1, 3, 5, 7, 9, 11],             // all odd numbers
    [3, -1, 4, 1, 5, -9, 6],         // digits of pi
    [0, 1, undefined, 13, 17],       // undefined values
    [0, 1, null, 13, null]           // null values
];



function sumArray(testArrays){
    let total = 0;
    for(val of arr){
        total += val;
    }
    console.log("The sum total is: ", total);
    return total;
}

function meanArray(arr){
    let average = 0;
    for (val of testArrays){
        average += vla;
    }
    average = average/testArrays.length;
    console.log("the average is "+average)
}

const doubleVal = [];
function doubleArray(arr){
    for (val of testArrays){
        doubleVal.push(val*2);
    }
    console.log(doubleVal);
}
const squareVal = [];
function squareArray(arr){
    for (val of testArrays){
        squareVal.push(val ** 2);
    }
    console.log(squareVal);
}

function minValue(arr){
}

function maxValue(arr){
}

function countEvens(arr){
}

function countPositives(arr){
}

function filterOdds(arr){
}

function filterNegatives(arr){
}

function negativeExists(arr){
}

function firstEvenNumber(arr){
}

function allElementsPositive(arr){
}

function allElementsDefined(arr){
}

