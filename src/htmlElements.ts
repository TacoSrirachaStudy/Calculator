export const input1: HTMLInputElement = document.querySelector(
  "body > main > section > input[type=number]:nth-child(1)"
) as HTMLInputElement;
export const input2: HTMLInputElement = document.querySelector(
  "body > main > section > input[type=number]:nth-child(3)"
) as HTMLInputElement;
export const operation: HTMLSelectElement = document.querySelector(
  "body > main > section > select"
) as HTMLSelectElement;
export const calculateButton: HTMLButtonElement = document.querySelector(
  "body > main > button"
) as HTMLButtonElement;
export const answer: HTMLHeadingElement = document.querySelector(
  "body > main > section > h3"
) as HTMLHeadingElement;
