var userInput1 = document.getElementById('userInput1');
var userInput2 = document.getElementById('userInput2');
var operationType = document.getElementById('operationType');
var answer = document.getElementById('answer');
var resultBtn = document.getElementById('resultBtn');
function getResult() {
    var firstInput = Number(userInput1.value);
    var secondInput = Number(userInput2.value);
    var operator = operationType.value;
    var result = calculate(firstInput, secondInput, operator);
    answer.innerText = result.toString();
}
function calculate(firstInput, secondInput, operator) {
    var result = 0;
    switch (operator) {
        case "sum":
            result = firstInput + secondInput;
            break;
        case "sub":
            result = firstInput - secondInput;
            break;
        case "mul":
            result = firstInput * secondInput;
            break;
        case "divide":
            if (secondInput !== 0) {
                result = firstInput / secondInput;
            }
            else {
                throw new Error('0으로 나눌 수 없습니다 ^0^');
            }
            break;
    }
    return result;
}
resultBtn.addEventListener("click", getResult);
