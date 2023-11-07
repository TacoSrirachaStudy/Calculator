const $ = (selector: string) =>
  document.getElementById(selector) as HTMLElement;

const firstNumber = $("first_number") as HTMLInputElement;
const secondNumber = $("second_number") as HTMLInputElement;
const resultBtn = $("result_button") as HTMLButtonElement;
const selector = $("selector") as HTMLSelectElement;
const resultHere = $("result") as HTMLHeadingElement;

function blockString(inputDom: HTMLInputElement): void {
  inputDom.addEventListener("input", (e) => {
    const input = e.target as HTMLInputElement;
    const changeToNum = input.value.replace(/[^0-9.]/g, "");
    if (input.value != changeToNum) {
      alert("숫자입력하세요");
      input.value = "";
    }
  });
}

blockString(firstNumber);
blockString(secondNumber);

function calculator() {
  const num1 = parseFloat(firstNumber?.value);
  const num2 = parseFloat(secondNumber?.value);
  const selectorOptions = selector.value;

  let result: number | string;

  switch (selectorOptions) {
    case "sum":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "계산 불가";
      }
      break;
    default:
      result = "";
      break;
  }
  resultHere.textContent = result.toString();
  firstNumber.value = "";
  secondNumber.value = "";
}

resultBtn.addEventListener("click", calculator);
