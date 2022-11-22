class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
  }

  clear() {
    
  }
}
  
const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".function")
const comaSign = document.querySelector(".coma")
const equalSign = document.querySelector(".equal")
const clearAll = document.querySelector(".clear")
const previousOperandTextElement = document.querySelector(".previous-operand")
const currentOperandTextElement = document.querySelector(".current-operand")



numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})









