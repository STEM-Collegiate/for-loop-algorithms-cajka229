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
    for(val of testArrays){
        total += val;
    }
    console.log("The sum total is: ", total);
    return total;
}

function meanArray(testArrays){
    let average = 0;
    for (val of testArrays){
        average += val;
    }
    average = average/testArrays.length;
    console.log("the average is " + average);
    return average
}

function doubleArray(testArrays){
    const doubleVal = [];
    for (val of testArrays){
        doubleVal.push(val*2);
    }
    console.log(doubleVal);
    return doubleVal;
}

function squareArray(testArrays){
    const squareVal = [];
    for (val of testArrays){
        squareVal.push(val * val);
    }
    console.log(squareVal);
    return squareVal;
}

function minValue(testArrays){
    let minVal = testArrays[0];
    for (val of testArrays){
        if (val<minVal){
            minVal = val;
        }
    }
    console.log(minVal);
    return minVal;
}

function maxValue(testArrays){
    let maxVal = testArrays[0];
    for (val of testArrays){
        if (val>maxVal){
            maxVal = val;
        }
    }
    console.log(maxVal);
    return maxVal;
}

function countEvens(testArrays){
    let numberOfEvens = 0;
    for (val of testArrays){
        if ((val%2)==0){
            numberOfEvens += 1;
        }
    }
    console.log(numberOfEvens);
    return numberOfEvens
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

