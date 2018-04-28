// target the display in which to show the digits and result
const displayText = document.querySelector(".calculator .display__text");
// target all the buttons
const buttons = document.querySelectorAll(".calculator button");

// listen for a click event on all buttons
buttons.forEach(button => button.addEventListener("click", handleButtons));

// define regex for the digits and the operator signs
const regexDigits = /[0-9]/;
const regexOperators = /[\+\-\*\/]/;

// define a function which dispatches the possible operations based on the button pressed
function handleButtons(event) {
    // the button pressed in found in the click event under the value of event.target.dataset.value
    // using the data attribute included for this purpose in the HTML
    let buttonPressed = event.target.dataset.value;

    // trigger different functions based on the button pressed
    if(buttonPressed == "no-function") {
        return false;
    }
    else if(buttonPressed == "ac" || buttonPressed == "ec") {
        clearDisplay();
    }
    else if(regexDigits.test(buttonPressed)) {
        displayDigit(buttonPressed);
    }
    else if(regexOperators.test(buttonPressed)) {
        computeOperation(buttonPressed);
    } 
    else {
        displayResult(buttonPressed);
    }
}

// if a clear button is pressed, clear the display
function clearDisplay() {
    displayText.textContent = "";
}
// if a digit button is pressed, display append the digit
function displayDigit(digit) {
    displayText.textContent += digit;
}
// if an operator sign is pressed, append it to the display, but only if a digit is already typed right before it
function computeOperation(operator) {
    if(regexDigits.test(displayText.textContent[displayText.textContent.length-1])) {
        displayText.textContent += operator;    
    }
}
// if the equal sign is pressed, display the digit if only a digit is present (do nothing), else compute the operation if an operator separates digits, else return an error 
function displayResult(equal) {
    if(!regexOperators.test(displayText.textContent) && regexDigits.test(displayText.textContent)) {
        return false;
    } 
    else if(regexDigits.test(displayText.textContent[displayText.textContent.length-1])) {
        // retrieve the numbers and the separating operator
        const operatorIndex = displayText.textContent.indexOf(displayText.textContent.match(regexOperators));
        const firstNumber = parseFloat(displayText.textContent.substr(0,operatorIndex));
        const operator = displayText.textContent.substr(operatorIndex, 1);
        const secondNumber = parseFloat(displayText.textContent.substr(operatorIndex + 1));
        // return the operation
        switch(operator) {
            case "+":
                displayText.textContent = firstNumber + secondNumber;  
                break;
            case "-":
                displayText.textContent = firstNumber - secondNumber;    
                break;
            case "*":
                displayText.textContent = firstNumber * secondNumber;    
                break;
            case "/":
                displayText.textContent = firstNumber / secondNumber;    
                break;            
        }
    }
    else {
        fourOhFour();
    }
}


function fourOhFour() {
    displayText.textContent = "err"; 
}