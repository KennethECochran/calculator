let operand1;
let operation;
let operand2;

function add(operand1, operand2){
    return(operand1 + operand2);
}

function subtract(operand1, operand2){
    return(operand1 - operand2);
}

function multiply(operand1, operand2){
    return(operand1 * operand2);
}

function divide(operand1, operand2){
    if(operand1 == 0 || operand2 == 0){
        return("Error: You cannot divide by 0 :(");
    }
    else{
        return(operand1 / operand2);
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
        return("Error: You didn't enter a valid operation");
    }
}