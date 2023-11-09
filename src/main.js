var $ = function (selector) { return document.querySelector(selector); };
var $$ = function (selector) { return document.querySelectorAll(selector); };
var num1 = $('#num1');
;
var num2 = $('#num2');
;
var cal = $('select[name="calculate"]');
var resultTag = $('h3');
var btn = $('button');
;
var calculate = function () {
    var preNum = parseFloat(num1.value);
    var postNum = parseFloat(num2.value);
    var result;
    switch (cal.value) {
        case 'sum':
            result = preNum + postNum;
            break;
        case 'sub':
            result = preNum - postNum;
            break;
        case 'mul':
            result = preNum * postNum;
            break;
        case 'divide':
            result = preNum / postNum;
            break;
        default:
            result = "";
            break;
    }
    resultTag.textContent = result.toString();
};
btn.addEventListener('click', calculate);
