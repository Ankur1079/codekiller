function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    let display = document.getElementById("display");
    const lastChar = display.value.slice(-1);
    if (!isNaN(lastChar) || lastChar === '') {
        display.value += operator;
    }
}

function calculate() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
