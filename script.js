'use strict';

const numberButtonsHtmlCollection = document.getElementsByClassName("btn");
const numberButtons = [...numberButtonsHtmlCollection]; 
let currentNumber = 0;
function calculate(value) {
    if (value === '=') {
        document.getElementById('screen').textContent = value;
    } 
    
}
}
numberButtons.forEach(element => {
   element.addEventListener("click", calculate(element), false);
})
