const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".function");
const equalSign = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const previousNumberTextElement = document.querySelector(".previous-number");
const currentNumberTextElement = document.querySelector(".current-number");
const plusminus = document.querySelector("#plusminus");
class Calculator {
  constructor(previousNumberTextElement, currentNumberTextElement) {
    this.previousNumberTextElement = previousNumberTextElement;
    this.currentNumberTextElement = currentNumberTextElement;
  }

  clear() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentNumber === "") return;
    if (this.previousNumber !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousNumber);
    const current = parseFloat(this.currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      case "%":
        computation = (prev / current) * 100 + "%";
        break;
      case "-/+":
        computation = current * -1;
        break;
      default:
        return;
    }
    this.currentNumber = computation;
    this.operation = undefined;
    this.previousNumber = "";
  }

  getDisplayNumber(number) {
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return "";
    return floatNumber.toLocaleString("en");
  }

  updateDisplay() {
    this.currentNumberTextElement.innerHTML = this.getDisplayNumber(
      this.currentNumber
    );
    if (this.operation != null) {
      this.previousNumberTextElement.innerHTML = `${this.getDisplayNumber(
        this.previousNumber
      )} ${this.operation}`;
    } else {
      this.previousNumberTextElement.innerHTML = "";
    }
  }
}
const calculator = new Calculator(
  previousNumberTextElement,
  currentNumberTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay(button.innerHTML);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerHTML);
    calculator.updateDisplay();
  });
});

equalSign.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

clear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
