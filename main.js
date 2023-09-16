
/*=================================Calculator==================================================*/ 

function calc(operation, a, b) {
  switch(operation) {
    case 'add':
      return (a + b)
  
  case 'multi':
    return (a - b);
    case 'subtract':
      return (a * b);
      default:
        return alert('It is wrong!');
  }
}
console.log(calc('subtract', 1, 2));



