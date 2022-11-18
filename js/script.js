const buttons = document.querySelectorAll('p');

buttons.forEach(button => {
  button.addEventListener('mouseover', function(){
  this.style.opacity = '70%'; 
  });
  
  button.addEventListener('mouseout', function(){
  this.style.opacity = ''; 
  })
  
  button.addEventListener('mousedown', function(){
  this.style.opacity = '25%'; 
  })
  
  button.addEventListener('mouseup', function(){
  this.style.opacity = ''; 
  })
})

function calculator (a, b, c) {
  let output = 0;

    switch(c) {
      case '+':
        output = a + b
        break;

      case '*':
        output = a * b
        break;

      case '-':
        output = a - b
        break;

     case '/': 
        if (b === 0) {
          return "Can't divide by 0!"
        } else {
          output = a / b
        }
        break;
    }
  return output;
}