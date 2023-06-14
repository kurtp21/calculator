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
            runningSum = 0;
            buffer = '0';
            break; 
        case 'Del': 
            if (buffer.length === 1) {
                buffer = '0'; 
            } else {
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;
        default:
            alert("ERROR!");
            break;
    }
}

function handleNumber(stringNumber) {
    if (stringNumber === '0') {
        buffer = stringNumber;
    } else {
        buffer += stringNumber; 
    }
} 
