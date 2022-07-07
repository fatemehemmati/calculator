'use strict';

const numberButtonCollection = document.getElementsByClassName("btn-number");
const operatorButtonCollection = document.getElementsByClassName("btn-operator");
const equal = document.getElementById('btn-eql')
const clear = document.getElementById('btn-clear');
const sum = document.getElementById('screen');
const bt = document.getElementById('btn-1');

console.log(sum);
const numberButtons = [...numberButtonCollection]; 
const operatorButtons = [...operatorButtonCollection];

let otherValue;
let currentValue = 0;
let operator = '';

 equal.addEventListener("click",function(){calculate()} );

//  clear.addEventListener("click", clearAll());
function setValues(element) {
    console.log(element, "set value")
    if(operator===''){
        if(currentValue===0){
            currentValue = element.textContent;
            sum.textContent = element.textContent;
        }
        else {
            otherValue = element.textContent;
            currentValue += otherValue;
            sum.textContent = currentValue;
        }
    } else {
        otherValue = element.textContent;
        sum.textContent = otherValue;
        if (operator === '+') {
        currentValue= Number(otherValue)+Number(currentValue)
      } if (operator === '-') {
        currentValue = Number(otherValue) - Number(currentValue);
        } if (operator === '*') {
         currentValue = Number(otherValue) * Number(currentValue);
        } if (operator === '/') {
          currentValue = Number(currentValue) / Number(otherValue);
      }
    }
}
   
function calculate() {
   
        sum.textContent = currentValue;
    }


numberButtons.forEach(element => {
    element.addEventListener("click",function(){setValues(element)}  )
});
operatorButtons.forEach((element) => {
    element.addEventListener("click", function () {
        operator = element.textContent;
    });
});
    









// console.log(document.getElementsByClassName(".screen").textContent);
// const sum = document.querySelector('.screen');
// console.log(sum)
// sum.addEventListener("click", calc, false);
//     function calc() {
//         console.log(sum);
//         sum.textContent = 'something else';
//     }
// console.log(el,"something")