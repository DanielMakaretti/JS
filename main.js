
/*=================================Calculator==================================================*/ 

function calc(operation, a, b) {
  switch(operation) {
    case 'add':
      return Number(a) + Number(b);
  case 'multi':
    return Number(a) - Number(b);
    case 'subtract':
      return Number(a) * Number(b);
      default:
        return alert('It is wrong!');
  }
}
console.log(calc('subtract', 2, 2)); //4
console.log(calc('multi', 1, 2)); //-1
console.log(calc('add', 1, 2)); //3

/*==============calc №2==================================================*/
function calc2(operation, a, b) {
  let result;
  switch(operation) {
    case 'add':
    result = Number(a) + Number(b);
    break;
    case 'multi':
      result = Number(a) - Number(b);
    break;
    case 'subtract':
      result = Number(a) * Number(b);
    break;
    default:
      return console.log('It is wrong!');
  }
  console.log(result);
}
calc2('add', 1, 2); //3
calc2('multi', 1, 2); //-1
calc2('subtract', 1, 2); //2