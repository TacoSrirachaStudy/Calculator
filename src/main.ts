const userInput = document.getElementsByClassName('userInput');
const operationType: HTMLSelectElement = document.getElementById('operationType') as HTMLSelectElement;
const answer: HTMLElement = document.getElementById('answer')!;


const onClickResult = () => {
    const firstInput: number = Number(userInput[0]);
    const secondInput:number = Number(userInput[1]);
    const operator:string = operationType.value;

    const result:number = calculate(firstInput, secondInput, operator);
    answer.innerText = result.toString();

}

function calculate(firstInput:number, secondInput:number, operator:string):number {
    let result:number = 0;
    switch(operator) {
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
            } else {
                throw new Error('0으로 나눌 수 없습니다 ^0^');
            }
            break;
    }
    return result;
}

