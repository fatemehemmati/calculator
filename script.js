'use strict';
const calc = document.querySelector('.calculator');
const numberButtonCollection = document.getElementsByClassName("btn-number");
const operatorButtonCollection = document.getElementsByClassName("btn-operator");
const equal = document.getElementById('btn-eql')
const clear = document.getElementById('btn-clear');
const sum = document.getElementById('screen');
var prevX = 0;
var prevY = 0;


console.log(sum);
const numberButtons = [...numberButtonCollection]; 
const operatorButtons = [...operatorButtonCollection];

let otherValue;
let currentValue = 0;
let operator = '';


 equal.addEventListener("click",function(){calculate()} );
 clear.addEventListener("click", function () { clearAll() });
 
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
        currentValue =Number(currentValue)- Number(otherValue)  ;
        } if (operator === '*') {
         currentValue = Number(otherValue) * Number(currentValue);
        } if (operator === '/') {
          currentValue = Number(currentValue) / Number(otherValue);
      }
    }

    
}
   
function calculate() {
    sum.textContent = currentValue;
    currentValue = 0;
    operator = "";
}
    
function clearAll() {
    currentValue = 0;
    sum.textContent = 0;
    operator = '';
}


numberButtons.forEach(element => {
    element.addEventListener("click",function(){setValues(element)}  )
});
operatorButtons.forEach((element) => {
    element.addEventListener("click", function () {
        operator = element.textContent;
    });
});
//moving calculator

//calc.addEventListener('mousedown', mousedown);
  
function mousemove(e) {

   
   let newX = prevX - e.clientX;
   let newY = prevY - e.clientY;

   const rect = calc.getBoundingClientRect();
   
    calc.style.left = rect.left - newX + "px";
    
    calc.style.top = rect.top - newY + "px";
    console.log(calc);
   prevX = e.clientX;
   prevY = e.clientY;
}
 
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
    }
function mousedown(e) {
    prevX = e.clientX;
    prevY = e.clientY;
    window.addEventListener('mousemove', mousemove);
      //window.addEventListener("mouseup", mouseup);

 }


    









// console.log(document.getElementsByClassName(".screen").textContent);
// const sum = document.querySelector('.screen');
// console.log(sum)
// sum.addEventListener("click", calc, false);
//     function calc() {
//         console.log(sum);
//         sum.textContent = 'something else';
//     }
// console.log(el,"something")