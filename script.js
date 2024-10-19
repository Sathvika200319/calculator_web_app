
let currentInput = '';
let operator = '';
let previousInput = '';


function appendCharacter(character) {
    const resultField = document.getElementById("result");

    if (['+', '-', '*', '/', '%'].includes(character)) {
        if (previousInput !== '' && currentInput !== '') {
            calculateResult();  // Auto calculate if there are existing values
        }
        operator = character;
        previousInput = currentInput;
        currentInput = '';
    } else {
        currentInput += character;
    }

    resultField.value = previousInput + operator + currentInput;
}


function clearResult() {
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById("result").value = '';
}


function deleteLast() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
    } else if (operator !== '') {
        operator = '';
    } else if (previousInput !== '') {
        previousInput = previousInput.slice(0, -1);
    }

    document.getElementById("result").value = previousInput + operator + currentInput;
}


function calculateResult() {
    let result = 0;
    const previousValue = parseFloat(previousInput);
    const currentValue = parseFloat(currentInput);

    if (isNaN(previousValue) || isNaN(currentValue)) {
        document.getElementById("result").value = 'Error';
        return;
    }

    switch (operator) {
        case '+':
            result = previousValue + currentValue;
            break;
        case '-':
            result = previousValue - currentValue;
            break;
        case '*':
            result = previousValue * currentValue;
            break;
        case '/':
            result = currentValue !== 0 ? previousValue / currentValue : 'Error';
            break;
        case '%':
            result = previousValue % currentValue;
            break;
        default:
            result = 'Error';
    }

    document.getElementById("result").value = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}
