// Constants:
current = document.querySelector(".current");


// Functions to Calculate

function add(x, y) {
    return x + y
};

function subtract(x, y) {
    return x - y
};

function multiply(x, y) {
    return x * y
};

function divide(x, y) {
    return x / y
};

function operate(operator, x, y) {
    if (operator === "+") {
        return add(x,y)
    } else if (operator === "-") {
        return subtract(x,y)
    } else if (operator === "*") {
        return multiply(x,y)
    } else if (operator === "/") {
        return divide(x,y)
    }
};


// Click Events:
const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    current.textContent += "9";
});

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    current.textContent += "8";
});

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    current.textContent += "7";
});

const six = document.getElementById("six");
six.addEventListener("click", () => {
    current.textContent += "6";
});

const five = document.getElementById("five");
five.addEventListener("click", () => {
    current.textContent += "5";
});

const four = document.getElementById("four");
four.addEventListener("click", () => {
    current.textContent += "4";
});

const three = document.getElementById("three");
three.addEventListener("click", () => {
    current.textContent += "3";
});

const two = document.getElementById("two");
two.addEventListener("click", () => {
    current.textContent += "2";
});

const one = document.getElementById("one");
one.addEventListener("click", () => {
    current.textContent += "1";
});

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    if (!current.textContent.startsWith("0") && current.textContent != "") {
        current.textContent += "0";}
        }
); 

// Operator Click Events

const addition = document.getElementById("addition");

const subtractor = document.getElementById("subtractor");

const multiplier = document.getElementById("multiplier");

const divider = document.getElementById("divider");

const decimal = document.getElementById("decimal");

const equality = document.getElementById("equality");
