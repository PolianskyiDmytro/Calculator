const display = document.getElementById("display");
let dotSwitch = true;

function addToDisplay(input) {
  if (!'1234567890'.includes(display.value[display.value.length - 1])
    && (input === '.' || input === '-' || input === '+' || input === '*' || input === '/')) {
    event.preventDefault();
    return
  }

  if ('1234567890'.includes(display.value[display.value.length - 1])
    && input === '.'
    && (display.value.includes('-') || display.value.includes('+') || display.value.includes('*') || display.value.includes('/'))) {
    if (dotSwitch === false) {
      event.preventDefault();
      return
    }
    dotSwitch = false;
    display.value += input;
    event.preventDefault();
    return
  }

  if ('+-*/'.includes(display.value[display.value.length - 1])){
    event.preventDefault();
    dotSwitch = true;
  }

  if (display.value.includes('.') && input === '.') {
    event.preventDefault();
    return
  }

  if(display.value.length > 8){
    document.getElementById("display").style.fontSize = '32px';
  }
  if(display.value.length > 12){
    document.getElementById("display").style.fontSize = '24px';
  }
  

  display.value += input;
  event.preventDefault();
}

function deleteSymbol() {
  if (display.value[display.value.length - 1] === '.') {
    dotSwitch = true;
  }
  if(display.value.length <= 12){
    document.getElementById("display").style.fontSize = '32px';
  }
  if(display.value.length < 8){
    document.getElementById("display").style.fontSize = '40px';
  }
  
  display.value = display.value.slice(0, -1);
  event.preventDefault();
}

function allClear() {
  document.getElementById("display").style.fontSize = '40px';
  display.value = "";
  event.preventDefault();
}

function calculate() {
  try {
    display.value = eval(display.value);
    event.preventDefault();
  }
  catch(error){
    alert("Error, finish the expression");
    event.preventDefault();
  }
}