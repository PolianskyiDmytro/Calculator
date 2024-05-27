const display = document.getElementById("display");

function addToDisplay(input){
  if (!'1234567890'.includes(display.value[display.value.length - 1]) && (input === '.' || input === '-' || input === '+' || input === '*' || input === '/')){
    event.preventDefault();
    return
  }
  if(display.value.includes('.') && input === '.'){
    event.preventDefault();
    return
  }

  if(display.value.includes('-') && (input === '-' || input === '+' || input === '*' || input === '/')){
    event.preventDefault();
    return
  }

  if(display.value.includes('+') && (input === '-' || input === '+' || input === '*' || input === '/')){
    event.preventDefault();
    return
  }

  if(display.value.includes('*') && (input === '-' || input === '+' || input === '*' || input === '/')){
    event.preventDefault();
    return
  }

  if(display.value.includes('/') && (input === '-' || input === '+' || input === '*' || input === '/')){
    event.preventDefault();
    return
  }

  display.value += input;
  event.preventDefault();
}

function clearDisplay(){

}

function calculate(){

}