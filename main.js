let numbers = document.querySelectorAll(".number");
let accumulator = document.querySelector("#accumulator");
let result = document.querySelector("#result");
let operators = document.querySelectorAll(".operator");
let multiplication = document.querySelector("#multiplication");
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let division = document.querySelector("#division");
let test = document.querySelector("#clean");
let equals = document.querySelector("#equal");
equals.addEventListener("click", setResult2);

let stack = [];
let trigger = "";

function tr() {
  console.log(stack)
}

//tester.addEventListener("click", tr)

function add() {
  if (accumulator.textContent) {
    stack.push(Number(accumulator.textContent))
    setResult()
    console.log(trigger);
    // stack.push(Number(accumulator.textContent))
    accumulator.textContent = "";
    trigger = "add";
    console.log(stack);
  } else {

    accumulator.textContent = result.textContent;
    stack.push(Number(accumulator.textContent));
    accumulator.textContent = "";
    trigger = "add";
  
  }
  

}

function subtract() {
  if (accumulator.textContent) {
    stack.push(Number(accumulator.textContent))
    setResult()
    console.log(trigger);
    // stack.push(Number(accumulator.textContent))
    accumulator.textContent = "";
    trigger = "subtract";
    console.log(stack);
  } else {

    accumulator.textContent = result.textContent;
    stack.push(Number(accumulator.textContent));
    accumulator.textContent = "";
    trigger = "subtract";
  
  }
}

function multiply() {

  if (accumulator.textContent) {
    stack.push(Number(accumulator.textContent))
    setResult()
    console.log(trigger);
    // stack.push(Number(accumulator.textContent))
    accumulator.textContent = "";
    trigger = "multiply";
    console.log(stack);
  } else {
    accumulator.textContent = result.textContent;
    stack.push(Number(accumulator.textContent));
    accumulator.textContent = "";
    trigger = "multiply";
  }
}

function divide() {
  if (accumulator.textContent) {
    stack.push(Number(accumulator.textContent))
    setResult()
    console.log(trigger);
    // stack.push(Number(accumulator.textContent))
    accumulator.textContent = "";
    trigger = "divide";
    console.log(stack);
  } else {

      accumulator.textContent = result.textContent;
      stack.push(Number(accumulator.textContent));
      accumulator.textContent = "";
      trigger = "divide";
  
  }
}

addition.addEventListener("click", add); // (1) works here but not below.
subtraction.addEventListener("click", subtract);
multiplication.addEventListener("click", multiply);
division.addEventListener("click", divide);

function t() {
  stack = [];
  result.textContent = "";
  accumulator.textContent = "";
  trigger = "";
  console.log(stack);

}

function res() {
  // console.log(result.textContent);
  if (!result.textContent) {
    console.log("Y")
    result.textContent = stack[0]//accumulator.textContent
  }
}

operators.forEach(operator => operator.addEventListener("click", res));

test.addEventListener("click", t);

function setResult() {

  let len = stack.length;
  if (trigger === "add") {
    result.textContent = Number(result.textContent) + stack[len - 1]
  }

  if (trigger === "subtract") {
    result.textContent = Number(result.textContent) - stack[len - 1]
  }

  if (trigger === "multiply") {
    result.textContent = Number(result.textContent) * stack[len - 1]
  }

  if (trigger === "divide") {
    result.textContent = Number(result.textContent) / stack[len - 1]
  }

}

function setResult2() {

  let len = stack.length;
  if (trigger === "add") {
    result.textContent = Number(result.textContent) + Number(accumulator.textContent);
    accumulator.textContent = "";
  }

  if (trigger === "subtract") {
    result.textContent = Number(result.textContent) - Number(accumulator.textContent);
    accumulator.textContent = "";
  }

  if (trigger === "multiply") {
    result.textContent = Number(result.textContent) * Number(accumulator.textContent);
    accumulator.textContent = "";
  }

  if (trigger === "divide") {
    result.textContent = Number(result.textContent) / Number(accumulator.textContent);
    accumulator.textContent = "";
  }

}

function screen() {
  accumulator.textContent += this.textContent;
}

numbers.forEach(number => number.addEventListener("click", screen));