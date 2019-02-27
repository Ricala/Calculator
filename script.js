const display = document.getElementById("output");
const buttons = document.querySelectorAll('button');
let workingNumber = "";
let savedNumber = "";
let operand = "";
let resetDisplay = false;
let continueCalc = false;

//Attach listeners to buttons
buttons.forEach((button) =>{
    button.addEventListener('click',function(){
        checkInput(button.id);
        });
    });

//Update user display
function updateDisplay(str) {
    let displayString = str.toString();
    
    //Shorten number length if longer than 10
    if(displayString.length >= 11) {
        let shortenedStr = "";
        for(let i = 0; i < 10; i++){
            shortenedStr += displayString.charAt(i);
        };
        displayString = shortenedStr;
    };
    if(resetDisplay && operand) {
        display.innerHTML = displayString + getOperand();
    } else {
        display.innerHTML = displayString;
    };
};

//check button input
function checkInput(selection) {
    if(resetDisplay && operand && selection !== "delete") {
        resetDisplay = false;
        workingNumber = "";
    };
    
    switch (selection) {
        case "zero": 
            workingNumber += 0
            break;
        case "one":
            workingNumber += 1
            break;
        case "two": 
            workingNumber += 2
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
            disableDecimal(true);
            break;
        case "delete":
            deleteNumber();
            break;
        case "plus":
        case "minus":
        case "multiply":
        case "divide":
            setOperations(selection)
            break;
        case "clear":
            clearAll();
            break;
        case "equals":
            calculate();
            break;
        default:
    };
    
    //check if user display needs to be reset
    if(!resetDisplay){
        updateDisplay(workingNumber);
    } else {
        updateDisplay(savedNumber);
    };
    
};

//convert to float and operate
function calculate() {
    savedNumber = parseFloat(savedNumber);
    workingNumber = parseFloat(workingNumber);

    //check if there are two numbers to calculate
    if(!isNaN(savedNumber) && !isNaN(workingNumber)) {
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
        operand = "";
        updateDisplay(savedNumber);
        disableDecimal(false);
        continueCalc = true;

    } else {
        clearAll();
    }
};

function clearAll() {
    workingNumber = "";
    savedNumber = "";
    operand = "";
    resetDisplay = false;
    disableDecimal(false);
    continueCalc = false;
};

function setOperations(selection) {
    //check if operation is continuing after inital calculation
    if(savedNumber && workingNumber && selection) {
        calculate();
    }
    //if this is first calculation, transfer work number to saved
    if(!continueCalc) {
        savedNumber = workingNumber;
    }
    operand = selection;
    resetDisplay = true;
    disableDecimal(false);
};

//delete number
function deleteNumber (){
    if(workingNumber && operand) {
        operand = "";
    } else {
        workingNumber = workingNumber.slice(0, -1);
    }
}

//get operand for display
function getOperand() {
    switch(operand) {
        case "plus":
            return "+"
        case "minus":
            return "-";
        case "multiply":
            return "*";
        case "divide":
            return "/";
        default:

    };
};

//toggle decimal button
function disableDecimal(e){
    if(e){
        document.getElementById("decimal").disabled = true;
    } else {

        document.getElementById("decimal").disabled = false;
    };
};
