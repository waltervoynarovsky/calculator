class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
  
  }


  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return
    if (this.previousOperand !== "") {
      this.compute()
    }
    this.operation = operation 
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  compute () {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
  }

  updateDisplay () {
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand
  }
}
  
const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".function")
const equalSign = document.querySelector(".equal")
const clearAll = document.querySelector(".clear")
const previousOperandTextElement = document.querySelector(".previous-operand")
const currentOperandTextElement = document.querySelector(".current-operand")


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay(button.innerText)
  })
});


operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalSign.addEventListener("click", () => {
  calculator.compute()
  calculator.updateDisplay()

});









