
const $ = (selector:string) => document.querySelector(selector) as HTMLElement;

const num1 = $('#num1') as HTMLInputElement;;
const num2 = $('#num2') as HTMLInputElement;;
const cal=$('select[name="calculate"]') as HTMLSelectElement;
const resultTag=$('h3') as HTMLElement;
const btn = $('button') as HTMLButtonElement;;

const calculate =()=>{
  let preNum = parseFloat(num1.value);
  let postNum = parseFloat(num2.value);

  let result:number|string;

  switch (cal.value) {
    case 'sum':
      result = preNum+postNum;
      break;
    case 'sub':
      result = preNum-postNum;
      break;
    case 'mul':
      result = preNum*postNum;
      break;
    case 'divide':
      result = preNum/postNum;
      break;
    default:
      result="";
      break;
  }


  resultTag.textContent=result.toString();
  
}
btn.addEventListener('click',calculate);