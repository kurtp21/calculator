let runningSum = 0;
let buffer = '0';
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
            buffer = '0';
            break; 
        case 'Del': 
            // alert("It reached here")
            if (buffer.length === 1) {
                buffer = '0'; 
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+/-':
            // alert("It reached here");
            checkNumber(parseInt(buffer));
            break; 
        case '+':
        case '-':
        default:
            alert("ERROR!");
            break;
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
