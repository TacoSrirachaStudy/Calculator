import {
  answer,
  calculateButton,
  input1,
  input2,
  operation,
} from "./htmlElements";

calculateButton.addEventListener("click", () => {
  if (!checkInput()) return; // 입력 필드 검증

  const num1: number = Number(input1.value); // 입력값을 숫자로 변경
  const num2: number = Number(input2.value);

  const result = calculate(num1, num2, operation.value); // 결과 연산

  answer.textContent = String(result); // 정답 출력
});

/* 입력 필드 검증 함수 */
function checkInput() {
  const isInputEmpty: boolean = isEmpty(input1.value, input2.value);
  if (isInputEmpty) {
    alert("뭐 잊은거 없어?");
    return false;
  }
  return true;
}

/* 입력 필드가 비었는지 확인하는 함수 */
function isEmpty(num1: string, num2: string): boolean {
  return num1 === "" || num2 === "";
}

/* 결과 연산 함수 */
function calculate(num1: number, num2: number, sign: string): number {
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
