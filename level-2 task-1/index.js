const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const value = this.innerHTML;
    if (value === 'C') {
      display.value = '0';
    } else if(value === 'del'){
      const x = display.value.substring(0,display.value.length-1);
      
      display.value = x;
    }else if (value === "+/-") {
      if(display.value!='0')
      {display.value = eval("-" + display.value);}
    }else if (value === '=') {
      display.value = eval(display.value);
    } else {
      if(value == 'x'){
        if(display.value !='0'){
        display.value += '*'
        }
      }else{
        if(display.value == '0'){
          display.value = value;
        }else if(display.value == '0' && value in ('+','-','*','/')){
          display.value = '0';
        }else{
          display.value += value;
        }
      }
    }
  });
}
