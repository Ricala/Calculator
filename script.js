const container = document.querySelector(".container");
const symbols = [1, 2, 3, "+",
                 4, 5, 6, "-",
                 7, 8, 9, "*",
                ".",0,"=", "/"];


//function createCalc() {
//    const textOutput = document.createElement("h3")
//    const text = document.createTextNode("text");
//    textOutput.setAttribute('id', 'output');
//    textOutput.appendChild(text);
//    container.appendChild(textOutput);
//    console.log('calcfunc');
//
//    for(let i = 0; i < symbols.length; i++){
//        const calcButtons = document.createElement("BUTTON");
//        calcButtons.textContent(symbols[i]);
//        calcButtons.classList(calcButtons);
//        container.appendChild(calcButtons);
//    }
//}
//createCalc();