// Calculator JavaScript - Easy to understand for beginners!

// First, let's get the display element where we'll show numbers
// document.getElementById finds an element by its ID in the HTML
const display = document.getElementById('dislay'); // Note: your HTML has 'dislay' (missing 'p')

// These variables store our calculator's current state
let currentNumber = '0';        // The number currently shown on display
let previousNumber = null;      // The first number in a calculation
let operator = null;           // The math operation (+, -, *, /)
let waitingForOperand = false; // Are we waiting for a new number to be typed?

// This function updates what we see on the calculator screen
function updateDisplay() {
    display.textContent = currentNumber;
}

// This function handles when someone clicks a number button (0-9)
function inputNumber(num) {
    // If we're waiting for a new number, replace the display
    if (waitingForOperand) {
        currentNumber = num;
        waitingForOperand = false;
    } else {
        // Otherwise, add the digit to the current number
        // If display shows '0', replace it. Otherwise, add to it.
        currentNumber = currentNumber === '0' ? num : currentNumber + num;
    }
    updateDisplay();
}

// This function handles the decimal point button
function inputDecimal() {
    // Only add a decimal point if there isn't one already
    if (currentNumber.indexOf('.') === -1) {
        // If we're waiting for a new number, start with '0.'
        if (waitingForOperand) {
            currentNumber = '0.';
            waitingForOperand = false;
        } else {
            // Add decimal point to current number
            currentNumber += '.';
        }
        updateDisplay();
    }
}

// This function handles operator buttons (+, -, *, /)
function inputOperator(nextOperator) {
    const inputValue = parseFloat(currentNumber); // Convert text to number

    // If we already have numbers and an operator, calculate the result first
    if (previousNumber !== null && !waitingForOperand) {
        const result = calculate();
        currentNumber = String(result);
        updateDisplay();
    } else {
        // This is the first number in our calculation
        previousNumber = inputValue;
    }

    waitingForOperand = true;
    operator = nextOperator;
}

// This is where the math happens!
function calculate() {
    const prev = previousNumber;           // First number
    const current = parseFloat(currentNumber); // Second number
    
    // If we don't have both numbers, return the current number
    if (prev === null || isNaN(current)) {
        return current;
    }

    let result;
    
    // Do the math based on which operator was clicked
    switch (operator) {
        case '+':
            result = prev + current;  // Addition: add the numbers
            break;
        case '-':
            result = prev - current;  // Subtraction: subtract second from first
            break;
        case '*':
        case 'X':  // Handle both * and X for multiplication
            result = prev * current;  // Multiplication: multiply the numbers
            break;
        case '/':
            // Division: divide first number by second
            // Check if dividing by zero (which is not allowed in math)
            if (current === 0) {
                alert('Cannot divide by zero!'); // Show error message
                return prev; // Return the first number unchanged
            }
            result = prev / current;
            break;
        default:
            return current;
    }
    
    return result;
}

// This function handles the equals button
function performCalculation() {
    const result = calculate();
    
    // Reset everything for the next calculation
    currentNumber = String(result);
    previousNumber = null;
    operator = null;
    waitingForOperand = true;
    
    updateDisplay();
}

// This function handles the DEL button (delete last digit)
function deleteLastDigit() {
    if (currentNumber.length > 1) {
        // Remove the last character from current number
        currentNumber = currentNumber.slice(0, -1);
    } else {
        // If only one digit left, set to '0'
        currentNumber = '0';
    }
    updateDisplay();
}

// This function handles the RESET button (clear everything)
function resetCalculator() {
    currentNumber = '0';
    previousNumber = null;
    operator = null;
    waitingForOperand = false;
    updateDisplay();
}

// Now we need to connect our functions to the buttons!
// We'll add event listeners to all buttons

// Get all the buttons in the calculator
const buttons = document.querySelectorAll('button');

// Loop through each button and add a click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent; // Get the text on the button
        
        // Check what kind of button was clicked and do the right thing
        if (buttonText >= '0' && buttonText <= '9') {
            // Number button (0-9)
            inputNumber(buttonText);
        } 
        else if (buttonText === '.') {
            // Decimal point button
            inputDecimal();
        }
        else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === 'X' || buttonText === '/') {
            // Operator buttons
            inputOperator(buttonText);
        }
        else if (buttonText === '=') {
            // Equals button - do the calculation
            performCalculation();
        }
        else if (buttonText === 'Del') {
            // Delete button - remove last digit
            deleteLastDigit();
        }
        else if (buttonText === 'RESET') {
            // Reset button - clear everything
            resetCalculator();
        }
    });
});

// Set the initial display when the page loads
updateDisplay();

// Optional: Add keyboard support so people can use their keyboard too!
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        inputNumber(key);
    } else if (key === '.') {
        inputDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        inputOperator(key);
    } else if (key === 'Enter' || key === '=') {
        performCalculation();
    } else if (key === 'Backspace') {
        deleteLastDigit();
    } else if (key === 'Escape') {
        resetCalculator();
    }
});

/* 
HOW THIS CALCULATOR WORKS:

1. When you click a number, it gets added to the display
2. When you click an operator (+, -, *, /), it remembers the first number and the operation
3. When you type the second number and click =, it does the math
4. DEL removes the last digit you typed
5. RESET clears everything and starts over

MATH OPERATIONS:
- Addition (+): Adds two numbers together (5 + 3 = 8)
- Subtraction (-): Subtracts the second number from the first (5 - 3 = 2)  
- Multiplication (* or X): Multiplies two numbers (5 * 3 = 15)
- Division (/): Divides the first number by the second (6 / 3 = 2)

The calculator also prevents dividing by zero, which would cause an error!
*/