let display = document.getElementById("display");
let currentInput = ""; // Stores the current input

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

// Function to append a number or operator to the current input
function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number.toString();
  } else {
    currentInput += number;
  }
  display.innerText = currentInput;
}

// Function to add an operator
function appendOperator(operator) {
  if (currentInput && !isNaN(currentInput.slice(-1))) { // Prevents double operators
    currentInput += operator;
    display.innerText = currentInput;
  }
}

// Function to calculate square
function calculateSquare() {
  if (currentInput && !isNaN(currentInput)) {
    const result = Math.pow(parseFloat(currentInput), 2);
    currentInput = result.toString();
    display.innerText = currentInput;
  }
}

// Function to calculate the result
function calculateResult() {
  try {
    const result = eval(currentInput); // Use eval for simplicity
    currentInput = result.toString();
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = "Error";
  }
}
