// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Get input values and display result
function calculate(operation) {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
    }

    document.getElementById("calculation-result").textContent = result;
}

// Attach event listeners
document.getElementById("add").addEventListener("click", function() {
    calculate('add');
});

document.getElementById("subtract").addEventListener("click", function() {
    calculate('subtract');
});

document.getElementById("multiply").addEventListener("click", function() {
    calculate('multiply');
});

document.getElementById("divide").addEventListener("click", function() {
    calculate('divide');
});
