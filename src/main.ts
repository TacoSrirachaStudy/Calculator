const input1: HTMLInputElement = document.querySelector(
  "body > main > section > input[type=number]:nth-child(1)"
) as HTMLInputElement;
const input2: HTMLInputElement = document.querySelector(
  "body > main > section > input[type=number]:nth-child(3)"
) as HTMLInputElement;
const operation: HTMLSelectElement = document.querySelector(
  "body > main > section > select"
) as HTMLSelectElement;
const calculateButton: HTMLButtonElement = document.querySelector(
  "body > main > button"
) as HTMLButtonElement;
const answer: HTMLHeadingElement = document.querySelector(
  "body > main > section > h3"
) as HTMLHeadingElement;

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
