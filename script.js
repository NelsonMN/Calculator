// Constants:

current = document.querySelector(".current");
hist = document.querySelector(".history");

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
    if (current.textContent == "0") {
        current.textContent = "9";
    } else {
        current.textContent += "9";
    }
});

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "8";
    } else {
        current.textContent += "8";
    }
});

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "7";
    } else {
        current.textContent += "7";
    }
});

const six = document.getElementById("six");
six.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "6";
    } else {
        current.textContent += "6";
    }
});

const five = document.getElementById("five");
five.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "5";
    } else {
        current.textContent += "5";
    }
});

const four = document.getElementById("four");
four.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "4";
    } else {
        current.textContent += "4";
    }
});

const three = document.getElementById("three");
three.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "3";
    } else {
        current.textContent += "3";
    }
});
 
const two = document.getElementById("two");
two.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "2";
    } else {
        current.textContent += "2";
    }
});

const one = document.getElementById("one");
one.addEventListener("click", () => {
    if (current.textContent == "0") {
        current.textContent = "1";
    } else {
        current.textContent += "1";
    }
});

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    const expression = current.textContent.split(" ");
    if (!current.textContent.startsWith("0") && current.textContent != "") {
        current.textContent += "0";
    } else if (expression.length == 3 && !expression[2].endsWith("0")) {
        current.textContent += "0";
    }
}); 

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    const expression = current.textContent.split(" ");
    if (!current.textContent.includes(".") || 
    (expression.length == 3 && !expression[2].includes("."))) {
        current.textContent += ".";
    }
});
    

// Operator Click Events:

const addition = document.getElementById("add");
addition.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes(" - ") &&
    !current.textContent.includes(" + ") &&
    !current.textContent.includes(" x ") &&
    !current.textContent.includes(" / ")) {
        current.textContent += " + ";
    } else if (current.textContent == "") {
        current.textContent += "0 + "
    }
})

const subtractor = document.getElementById("subtract");
subtractor.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes(" - ") &&
    !current.textContent.includes(" + ") &&
    !current.textContent.includes(" x ") &&
    !current.textContent.includes(" / ")) {
        current.textContent += " - ";
    } else if (current.textContent == "") {
        current.textContent += "0 - "
    }
})


const multiplier = document.getElementById("multiply");
multiplier.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes(" - ") &&
    !current.textContent.includes(" + ") &&
    !current.textContent.includes(" x ") &&
    !current.textContent.includes(" / ")) {
        current.textContent += " x ";
    } else if (current.textContent == "") {
        current.textContent += "0 x "
    }
})


const divider = document.getElementById("divide");
divider.addEventListener("click", () => {
    if (current.textContent != "" && 
    !current.textContent.includes(" - ") &&
    !current.textContent.includes(" + ") &&
    !current.textContent.includes(" x ") &&
    !current.textContent.includes(" / ")) {
        current.textContent += " / ";
    } else if (current.textContent == "") {
        current.textContent += "0 / "
    }
})


// Clear and Delete Events:

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    hist.textContent = "";
    current.textContent = "0";
})

const del = document.querySelector(".delete");
del.addEventListener("click", () => {
    current.textContent = current.textContent.substring(0, current.textContent.length - 1)
})


// Operator Functionality:

const equality = document.getElementById("equality");
equality.addEventListener("click", () => {
    const expression = current.textContent.split(" ");
    if (expression.length == 3 && current.textContent.endsWith("/ 0")) {
        alert("Nice Try! You can't divide by 0!")
        hist.textContent = "";
        current.textContent = "0";
    }
    else if (expression.length == 3 && expression[2] != "") {
        hist.textContent = current.textContent;
        current.textContent = operate(Number(expression[0]), expression[1], Number(expression[2]));
    }
})


// Limiting amount of numbers on display:
if (current.textContent.length > 21) {
    const numbers = document.querySelectorAll(".num")
    numbers.removeEventListener
}