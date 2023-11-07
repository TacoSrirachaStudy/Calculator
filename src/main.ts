type Operator = "sum" | "sub" | "mul" | "divide";

const input1 = document.getElementById("input1") as HTMLInputElement | null;
const input2 = document.getElementById("input2") as HTMLInputElement | null;
const sign = document.getElementById("sign") as HTMLSelectElement;
const result = document.getElementById("result") as HTMLHeadingElement;
const resultBtn = document.getElementById(
  "resultBtn"
) as HTMLButtonElement | null;

function calculate(num1: number, num2: number, operator: Operator): number {
  switch (operator) {
    case "sum":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mul":
      return num1 * num2;
    case "divide":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return NaN;
      }
  }
}

if (input1 && input2 && sign && result && resultBtn) {
  function displayResult() {
    const num1 = parseFloat(input1?.value || "0");
    const num2 = parseFloat(input2?.value || "0");
    const selectedOperator = sign.value as Operator;
    const resultValue = calculate(num1, num2, selectedOperator);
    result.textContent = resultValue.toString();
  }

  resultBtn.addEventListener("click", displayResult);
} else {
  console.error("돌아가! 계산안돼");
}
