
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
const toDo = document.querySelector("#to-do");
var screenValue = '';
let decimalAllowed = true;
var iteration;



const keys = { 
    '%': '%',
    '7': '7', '8': '8',
    '9': '9', '*': '*',     
    '4': '4', '5': '5', 
    '6': '6', '-': '-',
    '1': '1', '2': '2', 
    '3': '3', '+': '+',
    '0': '0', '.': '.',
    '/': '/',
    'Enter': '=', 'Backspace': 'Del'
 };

document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    var buttonText = keys[key];
    if (buttonText) {
        condition(buttonText);
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        resetCalculator();
    }
});

function condition(buttonText) {
    if (buttonText === '.' && !decimalAllowed) {
        return;
    }

    if (isOperator(buttonText)) {
        decimalAllowed = true;
    }

    if (buttonText === 'X') {
        buttonText = '*';
    }

    if (buttonText === 'C') {
        resetCalculator();
        return;
    }

    if (buttonText === 'Del') {
        screenValue = screenValue.slice(0, -1);
    } else if (buttonText === '=') {
         iteration = screenValue;
        try {
            screen.value = eval(screenValue);
            var ans = screen.value;
        } catch (error) {
            screen.value = "Error";
        }
      screenValue = screen.value;


      todo(`${iteration} = ${ans}`);
      screenValue="";

    } else {
        if (buttonText === '.' && decimalAllowed) {
            decimalAllowed = false;
        }
        screenValue += buttonText;
    }

    screen.value = screenValue;
    
}

function isOperator(text) {
    return ['+', '-', '*', '/', '%','Del'].includes(text);
}

function resetCalculator() {
    screenValue = '';
    screen.value = '';
    decimalAllowed = true;
    
}

const todo = (text)=>{
    // console.log(text);
    const newList = document.createElement("li");
    newList.innerHTML= `
    <span >${text}</span>
    <i class="fas fa-times"></i>
    `;
    toDo.appendChild(newList);

    newList.querySelector("i").addEventListener("click" ,function(){
        newList.remove();
    })

        
        newList.querySelector("span").addEventListener("click", function(){ 
        resetCalculator();    
        screen.value = text;
        condition(text);
         })  
         
}

// -------------------------> Click Even
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        condition(buttonText);
    });
});


