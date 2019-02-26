const display = document.getElementById("output");
const buttons = document.querySelectorAll('button');
let workingNumber = "";
let savedNumber = "";
let operand = "";
let resetDisplay = false;

buttons.forEach((button) =>{
    button.addEventListener('click',function(){
        checkInput(button.id);
        });
    });

function updateDisplay(str) {
    let displayString = str.toString();

    if(displayString.length >= 11) {
        console.log("entered if")
        let shortenedStr = "";
        for(let i = 0; i < 10; i++){
            shortenedStr += displayString.charAt(i);
            console.log("new string addition");
        }
        displayString = shortenedStr;
    }
    display.innerHTML = displayString;
}

function checkInput(selection) {
    if(resetDisplay) {
        resetDisplay = false;
        workingNumber = "";
    }
    switch (selection) {
        case "zero": 
            workingNumber += 0
            break;
        case "one":
            workingNumber += 1
            break;
        case "two": 
            workingNumber += 2;
            break;
        case "three":
            workingNumber += 3
            break;
        case "four":
            workingNumber += 4
            break;
        case "five":
            workingNumber += 5
            break;
        case "six":
            workingNumber += 6
            break;
        case "seven":
            workingNumber += 7
            break;
        case "eight":
            workingNumber += 8
            break;
        case "nine":
            workingNumber += 9
            break;
        case "decimal":
                workingNumber += ".";
            break;
        case "plus":
        case "minus":
        case "multiply":
        case "divide":
            savedNumber = workingNumber;
            operand = selection;
            resetDisplay = true;
            break;
        case "clear":
            clearAll();
            break;
        case "equals":
            operate();
            break;
        default:
    }
    if(!resetDisplay){
        updateDisplay(workingNumber);
    } else {
        updateDisplay(savedNumber);
    }
    
};

function operate() {
    savedNumber = parseFloat(savedNumber);
    workingNumber = parseFloat(workingNumber);
    switch(operand){
        case "plus":
            savedNumber = savedNumber + workingNumber;
            break;
        case "minus":
            savedNumber = savedNumber - workingNumber;
            break;
        case "multiply":
            savedNumber = savedNumber * workingNumber;
            break;
        case "divide":
            savedNumber = savedNumber / workingNumber;
            break;
        default:
    }
    resetDisplay = true;

    updateDisplay(savedNumber);
}

function clearAll() {
    workingNumber = "";
    savedNumber = "";
    resetDisplay = false;
}
