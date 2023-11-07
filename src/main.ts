const $ = (selector: string) => document.querySelector(selector);

const num1Input = $('input[type="number"]:nth-of-type(1)') as HTMLInputElement;
const num2Input = $('input[type="number"]:nth-of-type(2)') as HTMLInputElement;
const selectOperator = $('select[name="calculate"]') as HTMLSelectElement;
const resultDisplay = $("h3") as HTMLHeadingElement;
const calculateButton = $("button");

function calculateResult() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = selectOperator.value;

  let result: number;

  switch (operator) {
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
      result = num1 / num2;
      break;
    default:
      result = NaN;
  }

  if (isNaN(result)) {
    resultDisplay.textContent = "계산 불가";
  } else {
    resultDisplay.textContent = result.toString();
  }
}

if (calculateButton) {
  calculateButton.addEventListener("click", calculateResult);
}
