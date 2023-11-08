const firstInput = document.querySelector(".first-input") as HTMLInputElement;
const secondInput = document.querySelector(".second-input") as HTMLInputElement;

const select = document.querySelector("select") as HTMLSelectElement;
let showresult = document.querySelector("h3") as HTMLHeadingElement;
const showResultButton = document.querySelector(".result");

showResultButton?.addEventListener("click", () => {
  const input1: number = parseFloat(firstInput.value);
  const input2: number = parseFloat(secondInput.value);

  const operator: string = select.value;
  let result: number;

  switch (operator) {
    case "sum":
      result = input1 + input2;
      break;
    case "sub":
      result = input1 - input2;
      break;
    case "mul":
      result = input1 * input2;
      break;
    case "divide":
      result = input1 / input2;
      break;
    default:
      alert("연산자를 선택하세요.");
      return;
  }
  showresult.textContent = String(result);
  alert(`계산 결과는 ${result}`);
});
