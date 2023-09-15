
function add(operand1, operand2){
    return(operand1 + operand2);
}

function subtract(operand1, operand2){
    return(operand1 - operand2);
}

function multiply(operand1, operand2){
    return((operand1 * operand2).toFixed(2));
}

function divide(operand1, operand2){
    if(operand1 == 0 || operand2 == 0){
        alert("You can't divide by 0 :(");
        return(0);
    }
    else{
        return((operand1 / operand2).toFixed(2));
    }
}

function operate(operand1, operation, operand2){
    if(operation === '+'){
        return add(operand1, operand2);
    }
    else if(operation === '-'){
        return subtract(operand1, operand2);
    }
    else if(operation === '*'){
        return multiply(operand1, operand2);
    }
    else if(operation === '/'){
        return divide(operand1, operand2);
    }
    else{
        alert("Error");
        clear();
    }
}

function updateDisplay(value){
    displayValue.textContent+= value;
}

function clear(){
    displayValue.textContent = '';
}

const displayValue = document.querySelector('#result');

const buttons = document.querySelectorAll('.key');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        updateDisplay(button.id);
    })
})

const clear_button = document.querySelector('#clear');
clear_button.addEventListener('click', () =>{
    clear();
})

const equals_button = document.querySelector('#equal');
equals_button.addEventListener('click',() => {
    let input_array = displayValue.textContent.split(/([+*\-/])/);
    while(input_array.length >=3){
    console.log(input_array);
    let operand1 = parseFloat(input_array.shift());
    let operation = input_array.shift();
    let operand2 = parseFloat(input_array.shift());
    console.log(input_array)
    let temp_answer = operate(operand1,operation,operand2)
    clear();
    input_array.unshift(temp_answer);
    updateDisplay(temp_answer);
}   
});


//let operand1 = parseFloat(input_array.shift());
    //let operation = input_array.shift();
    //let operand2 = parseFloat(input_array.shift());
    //console.log(input_array)
    //clear();
    //let answer = operate(operand1,operation,operand2)
    //updateDisplay(answer);