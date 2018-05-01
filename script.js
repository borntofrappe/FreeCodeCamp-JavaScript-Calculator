// target the display in which to show the digits and result
const displayMain = document.querySelector(".calculator .display__text");
const displayChain = document.querySelector(".calculator .display__chain");
// target all the buttons
const buttons = document.querySelectorAll(".calculator button");

// listen for a click event on all buttons
buttons.forEach(button => button.addEventListener("click", handleButtons));

// define regex for the digits and the operator signs
const regexDigits = /[0-9]/;
const regexOperators = /[\+\-\*\/]/;
const regexDecimalPoint = /\./;

// define a regex for a valid expression (2 + 2 as well as 4 / 2 * 5 + 3)
// a number to which an operator and a number follow; operator and number which may occur however many times as wanted (but always ending with a number)
// const regexExpression = /^[0-9]+([\+\-\*\/\.][0-9]+)+$/;

// define a function which dispatches the possible occurrencies based on the button pressed
function handleButtons(event) {
    // the button pressed in found in the click event under the value of event.target.dataset.value
    // using the data attribute included for this purpose in the HTML
    let buttonPressed = event.target.dataset.value;

    // trigger different functions based on the button pressed
    if(buttonPressed == "ec") {
        clearMainDisplay();
    }
    else if(buttonPressed == "ac") {
        clearMainDisplay();        
        clearChainDisplay();
    }
    else if(regexDigits.test(buttonPressed)) {
        displayDigit(buttonPressed);
    }
    else if(buttonPressed == ".") {
        displayDecimalPoint();
    }
    else if(regexOperators.test(buttonPressed)) {
        displayOperator(buttonPressed);
    } 
    else if(buttonPressed == "=") {
        displayResult();
    }
    else {
        fourOhFour();
    }
}


// clearMainDisplay() clears the main display
function clearMainDisplay() {
    displayMain.textContent = "";
}

// clearChainDisplay clears the chain display
function clearChainDisplay() {
    displayChain.textContent = "";
}

// displayDigit() introduces a digit in the main display
// if there is an operator sign, it also pushes said character in the chain display
function displayDigit(digit) {
    const displayMainText = displayMain.textContent;
    if(regexOperators.test(displayMainText[displayMainText.length-1])) {
        displayChain.textContent += displayMainText;
        displayMain.textContent = digit;
    }    
    else {
        displayMain.textContent += digit;
    }
    
}

// displayDecimalPoint() introduces a decimal point in the main display, if a number is present and a decimal point is not
function displayDecimalPoint() {
    const displayMainText = displayMain.textContent;
    if(regexDigits.test(displayMainText[displayMainText.length-1]) && !regexDecimalPoint.test(displayMainText)) {
        displayMain.textContent += ".";
    }
}

// displayOperator() introduces a mathematical operator in the main display, if a number is present right before this sign
// moreover, it pushes the number present in the main display into the chain display

// there is an edge case in which an operator can be included if no digit is present in the main display, when "entry clear" is used on an operator
// this instance is checked with a conditional on the chainDisplay
function displayOperator(operator) {
    const displayMainText = displayMain.textContent;    
    if(regexDigits.test(displayMainText[displayMainText.length - 1])) {
        displayChain.textContent += displayMainText;
        displayMain.textContent = operator;    
    }
    const displayChainText = displayChain.textContent;
    if(regexDigits.test(displayChainText[displayChainText.length - 1])) {
        displayMain.textContent = operator;    
    }
}

// displayResult() introduces the result of the operation found in the chain display, upon appending the text in the main display to it
// if the last character in the main display is a number
function displayResult() {
    const displayMainText = displayMain.textContent;    
    if(regexDigits.test(displayMainText[displayMainText.length-1])) {
        displayChain.textContent += displayMainText;
        displayMain.textContent = computeOperation(displayChain.textContent);
        displayChain.textContent = "";
    }
}
// computeOperation() takes as argument the text in the chain display and outputs the operation described in it
function computeOperation(expression) {
    // eval() takes in as argument a string and outputs the result of the equivalent expression
    // the input is and always will be numbers separated by operators, so the function does the bare minimum

    // Math.round(x*100)/ 100 is used to round with two decimal digits; not the optimal solution, but works for most cases
    // example x = 2.586 -> x * 100 = 258.6 - > Math.round(x*100) = 258 -> Math.round(x*100)/100 = 2.58
    return Math.round(eval(expression)*100)/100;
}

// fourOhFour() is a catch-all function which outputs an error message if need be
function fourOhFour() {
    displayChain = ""
    displayMain.textContent = "err"; 
}
