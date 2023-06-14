let runningSum = 0;
let buffer = "0";
let prevOperator; 

const screen = document.querySelector('.screen'); 
const calcButton = document.querySelector(".calc-buttons");

calcButton.addEventListener('click', function(event) {
    let opt = event.target.innerText;  

    if (isNaN(opt)) {
        checkSymbol(opt);
    } else {
        handleNumber(opt); 
    }
    screen.innerText = buffer; 
}, false);

function checkSymbol(sym) {
    switch (sym) {
        case 'Clear':
            // alert("It reached here")
            runningSum = 0;
            buffer = "0";
            break; 
        case 'Del': 
            // alert("It reached here")
            if (buffer.length === 1) {
                buffer = "0"; 
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '±':
            // alert("It reached here");
            checkNumber(parseInt(buffer));
            break; 
        case '=':
            if (prevOperator === null) {
                return; 
            }
            calculate(parseInt(buffer)); 
            prevOperator = null;
            buffer = runningSum;
            runningSum = 0;
        case '+':
        case '−':
        case '×':
        case '÷':
            // alert("It reached here");
            preformOperation(sym); 
        default:
            alert("ERROR!");
            break;
    }
}

function preformOperation(symbol) {
    // alert("It reached here");
    if (buffer === "0") {
            return; 
    }

    const num = parseInt(buffer);

    if (runningSum === 0) {
        runningSum = num; 
    } else {
        calculate(num);
    }

    prevOperator = symbol;
    buffer = '0'; 
}

function calculate(number) {
     if (prevOperator === '+') {
        runningSum += number;
     } else if (prevOperator === '−') {
        runningSum -= number;
     } else if (prevOperator === '×') {
        runningSum *= number;
     } else if (prevOperator === '÷') {
        runningSum /= number;
     }
}

function checkNumber(inputNumber) {
    if (inputNumber === 0) {
        return;
    } else {
        var newNum = inputNumber * -1; 
        buffer = newNum.toString(); 
    }
}

function handleNumber(stringNumber) {
    if (stringNumber === "0") {
        buffer = stringNumber;
    } else {
        buffer += stringNumber; 
    }
} 
