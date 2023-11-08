import {
  answer,
  calculateButton,
  input1,
  input2,
  operation,
} from "./htmlElements";

calculateButton.addEventListener("click", () => {
  const isInputEmpty: boolean = isEmpty(input1.value, input2.value);
  if (isInputEmpty) {
    alert("뭐 잊은거 없어?");
    return;
  }
  const num1: number = Number(input1.value);
  const num2: number = Number(input2.value);
  const result = operate(num1, num2, operation.value);
  answer.textContent = String(result);
});

function operate(num1: number, num2: number, sign: string): number {
  switch (sign) {
    case "sum":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mul":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      return 0;
  }
}

function isEmpty(num1: string, num2: string): boolean {
  return num1 === "" || num2 === "";
}
