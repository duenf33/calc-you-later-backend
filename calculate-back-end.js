/******************
 * YOUR CODE HERE *
 ******************/
const calculate = function(value1, value2, sign){
  const num1 = parseInt(value1, 10);
  const num2 = parseInt(value2, 10);
  const char = sign.toLowerCase();
  if(char === 'x' || char === 'multiply' || char === 'times' || char === 'multiplied by'){
  return num1 * num2;
  } else if(char === '+' || char === 'plus' || char === 'add' || char === 'added to'){
  return num1 + num2;
  } else if(char === '/' || char === 'divide' || char === 'over' || char === 'divided by'){
  return num1 / num2;
  } else if(char === '-' || char === 'subtract' || char === 'minus' || char === 'subtracted from'){
  return num1 - num2;
  } else if(char === '%' || char === 'mod' || char === 'modulus'){
  return num1 % num2;
  } else {
    return 'Sorry, that\'s not a mathematical operation!'
  }  
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;