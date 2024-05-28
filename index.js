const display = document.getElementById("display");
let dotSwitch = true;

function addToDisplay(input){
  if (!'1234567890'.includes(display.value[display.value.length - 1]) 
  && (input === '.' || input === '-' || input === '+' || input === '*' || input === '/')){
    event.preventDefault();
    return
  }

  if('1234567890'.includes(display.value[display.value.length - 1]) 
  && input === '.' 
  && (display.value.includes('-') || display.value.includes('+') || display.value.includes('*') || display.value.includes('/'))){
    if (dotSwitch === false){
      event.preventDefault();
      return
    }
    dotSwitch = false;
    display.value += input;
    event.preventDefault();
    return
  }

  if (display.value.includes('.') && input === '.'){
    event.preventDefault();
    return
  }

  if((display.value.includes('-') || display.value.includes('+') || display.value.includes('*') || display.value.includes('/')) 
  && (input === '-' || input === '+' || input === '*' || input === '/')){
    event.preventDefault();
    return
  }

  display.value += input;
  event.preventDefault();
}

function clearDisplay(){
  display.value = display.value.slice(0, -1);
  event.preventDefault();
}

function calculate(){

}