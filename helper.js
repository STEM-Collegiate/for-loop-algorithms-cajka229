$(document).ready(function(){
    displayAll();
    loadTests();
});


// batch loader
function displayAll(){
  displayFunction("loops.js", "sumArray", "#sum");
  displayFunction("loops.js", "meanArray", "#mean");
  displayFunction("loops.js", "doubleArray", "#double");
  displayFunction("loops.js", "squareArray", "#square");
  displayFunction("loops.js", "minValue", "#min");
  displayFunction("loops.js", "maxValue", "#max");
  displayFunction("loops.js", "countEvens", "#countEvens");
  displayFunction("loops.js", "countPositives", "#countPositives");
  displayFunction("loops.js", "filterOdds", "#filterOdds");
  displayFunction("loops.js", "filterNegatives", "#filterNegatives");
  displayFunction("loops.js", "negativeExists", "#negativeExists");
  displayFunction("loops.js", "firstEvenNumber", "#firstEven");
  displayFunction("loops.js", "allElementsPositive", "#allPositive");
  displayFunction("loops.js", "allElementsDefined", "#allDefined");
}

function loadTests() {
    // Map each button ID to its test runner
    $("#test-sum").click(runSum);
    $("#test-mean").click(runMean);
    $("#test-double").click(runDouble);
    $("#test-square").click(runSquare);
    $("#test-min").click(runMin);
    $("#test-max").click(runMax);
    $("#test-countEvens").click(runCountEvens);
    $("#test-countPositives").click(runCountPositives);
    $("#test-filterOdds").click(runFilterOdds);
    $("#test-filterNegatives").click(runFilterNegatives);
    $("#test-negativeExists").click(runNegativeExists);
    $("#test-firstEven").click(runFirstEven);
    $("#test-allPositive").click(runAllPositive);
    $("#test-allDefined").click(runAllDefined);
}

// generic function to build result list
function runTest(fnRef, studentFn, testMethod, targetId) {
    const $result = $(targetId);
    $result.empty();
    for (let i = 0; i < testArrays.length; i++) {
        const message = testMethod(studentFn, testArrays[i]);
        const cssClass = message.startsWith("P") ? "pass" : "fail";
        $result.append(`<p class="${cssClass}">${message}</p>`);
    }
}

// individual task wrappers
function runSum() { runTest(sumArray, sumArray, testArray.sum, "#sum-results"); }
function runMean() { runTest(meanArray, meanArray, testArray.mean, "#mean-results"); }
function runDouble() { runTest(doubleArray, doubleArray, testArray.double, "#double-results"); }
function runSquare() { runTest(squareArray, squareArray, testArray.square, "#square-results"); }
function runMin() { runTest(minValue, minValue, testArray.min, "#min-results"); }
function runMax() { runTest(maxValue, maxValue, testArray.max, "#max-results"); }
function runCountEvens() { runTest(countEvens, countEvens, testArray.countEvens, "#countEvens-results"); }
function runCountPositives() { runTest(countPositives, countPositives, testArray.countPositives, "#countPositives-results"); }
function runFilterOdds() { runTest(filterOdds, filterOdds, testArray.filterOdds, "#filterOdds-results"); }
function runFilterNegatives() { runTest(filterNegatives, filterNegatives, testArray.filterNegatives, "#filterNegatives-results"); }
function runNegativeExists() { runTest(negativeExists, negativeExists, testArray.negativeExists, "#negativeExists-results"); }
function runFirstEven() { runTest(firstEvenNumber, firstEvenNumber, testArray.firstEvenNumber, "#firstEven-results"); }
function runAllPositive() { runTest(allElementsPositive, allElementsPositive, testArray.allElementsPositive, "#allPositive-results"); }
function runAllDefined() { runTest(allElementsDefined, allElementsDefined, testArray.allElementsDefined, "#allDefined-results"); }
