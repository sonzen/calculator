// create vars for elements

const buttons = document.querySelectorAll('.keyBoard .buttons');
const clearButton = document.querySelector('.clearButton');
const zero = document.querySelector('.zero');
const output = document.querySelector('#output');
let storedValue = '';
 
// add effects to buttons
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
  

// add effect to clearButton Var
  clearButton.addEventListener('mouseover', function(){
  this.style.opacity = '70%'; 
  });
  
  clearButton.addEventListener('mouseout', function(){
  this.style.opacity = ''; 
  })
  
  clearButton.addEventListener('mousedown', function(){
  this.style.opacity = '25%'; 
  })
  
  clearButton.addEventListener('mouseup', function(){
  this.style.opacity = ''; 
  })
  
// add mouse effects of zero Var
  zero.addEventListener('mouseover', function(){
  this.style.opacity = '70%'; 
  });
  
  zero.addEventListener('mouseout', function(){
  this.style.opacity = ''; 
  })

  zero.addEventListener('mousedown', function(){
  this.style.opacity = '25%'; 
  })
  
  zero.addEventListener('mouseup', function(){
  this.style.opacity = ''; 
  })

//   add functions to numbers and operators. solve equation
  
    button.addEventListener('mousedown', function(event){
      if(event.target.value == 1 || event.target.value == 2 || event.target.value == 3 || event.target.value == 4||event.target.value == 5 || event.target.value == 6 ||event.target.value == 7 ||event.target.value == 8||event.target.value == 9){
         let newNumb = document.createTextNode(event.target.value);
         output.appendChild(newNumb);
      }
      else if(event.target.value == 0 && output.innerHTML != ''){
        let newNumb = document.createTextNode('0');
        output.appendChild(newNumb);
      }
      else if(event.target.value == '+'||event.target.value == '-'||event.target.value == '/' ||event.target.value == '*'||event.target.value == '%'){
        let pushedNum = output.textContent + event.target.value;
        output.innerHTML = '';
        storedValue += pushedNum;
        }
      else if(event.target.value == '='){
        let pushedNum = output.textContent;
        storedValue += pushedNum;
        output.textContent = eval(storedValue); 
        storedValue= '';
      }
      else if(event.target.value == 'CLEAR'){
        storedValue= '';
        output.innerHTML = '';
      }
  })
})

