// Constants:

current = document.querySelector(".current");
history = document.querySelector(".history");


// Functions to Calculate

function add(x, y) {
    return x + y
};

function subtract(x, y) {
    return x - y
};

function multiply(x, y) {
    return (x * y)
};

function divide(x, y) {
    return (x / y)
};

function operate(x, operator, y) {
    if (operator === "+") {
        return add(x, y)
    } else if (operator === "-") {
        return subtract(x, y)
    } else if (operator === "x") {
        return multiply(x, y)
    } else if (operator === "/") {
        return divide(x, y)
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

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    if (current.textContent == "") {
        current.textContent += "0.";}
    else if (!current.textContent.includes(".")) {
        current.textContent += ".";}
    } 
)
    

// Operator Click Events:

const addition = document.getElementById("add");
addition.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes("-") &&
    !current.textContent.includes("+") &&
    !current.textContent.includes("x") &&
    !current.textContent.includes("/")) {
        current.textContent += " + ";}
    }
)

const subtractor = document.getElementById("subtract");
subtractor.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes("-") &&
    !current.textContent.includes("+") &&
    !current.textContent.includes("x") &&
    !current.textContent.includes("/")) {
        current.textContent += " - ";}
    }
)

const multiplier = document.getElementById("multiply");
multiplier.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes("-") &&
    !current.textContent.includes("+") &&
    !current.textContent.includes("x") &&
    !current.textContent.includes("/")) {
        current.textContent += " x ";}
    }
)

const divider = document.getElementById("divide");
divider.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes("-") &&
    !current.textContent.includes("+") &&
    !current.textContent.includes("x") &&
    !current.textContent.includes("/")) {
        current.textContent += " / ";}
    }
)

// Clear and Delete Events:

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    current.textContent = "";
})

const del = document.querySelector(".delete");
del.addEventListener("click", () => {
    current.textContent = current.textContent.substring(0, current.textContent.length - 1)
})


// Operator Functionality:

const equality = document.getElementById("equality");
equality.addEventListener("click", () => {
    const expression = current.textContent.split(" ");
    if (expression.length == 3) {
        history.textContent = current.textContent;
        current.textContent = operate(parseInt(expression[0]), expression[1], parseInt(expression[2]));
    }
})