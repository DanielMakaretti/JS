let userName = 'Daniel';
let userAge = '25';
let userHeight;
console.log(userName + ' is ' + userAge + ' years old');
userHeight = 170;
console.log(userHeight);
console.log (`2 + 2 = ${2+2}`);
let nameFiledChecked = true;
let ageFiledChecked = false;
let a = 1;
let c = 2;
console.log (c);
let f = 1+2;
let d = 1+3;
console.log (d);
const myAge = 25;
console.log (myAge);
const REDCOLOR = '#F00';
const ORANGECOLOR = '#FR20';
const BLUECOLOR = '#RGB5'
let color = REDCOLOR;
console.log (color);
/* alert(a>c);
let result = 5 > 4;
alert( result ); */



 /*  let message = (login == ('Сотрудник')) ? 'Привет':
  (login == 'Директор') ? 'Здравствуйте':
  (login == '') ? 'Нет логина':
  ''; */
 function showMessage() {
console.log ('Сообщение!');
 }
showMessage();
showMessage();
showMessage();
showMessage();

let s = 5;
let x = 6;

console.log ('Сложение: ' + (x % s));
  
let num_3 = Number('5');
let num_4 = Number('3');
console.log (num_3 + num_4);

console.log ('Math: ' + Math.PI);
console.log ('Math: ' + Math.E);
console.log ('Math: ' + Math.sin(num_3));
console.log ('Math: ' + Math.min(3, 4, 5, 7, 1));

let number1 = 15;
let number2 = true;
if (number1 == 15 && number2 == true) {
    console.log ('No, bitch');
}
else if (number1 >= 16) {
    console.log ('No, gay');
}
else if (number1 < 10) {
    console.log ('SEX.gay')
}
else {
    console.log ('XAXAXA,lox')
}

let lesson = 2 + 2;

switch (lesson) {
    case 4:
        alert('Good');
        break;
     case 3:
     case 10:
        console.log('Minor, meen1');
        console.log('Minor, meen2');
                console.log('Minor, meen3');
                break;
                default:
                    console.log('None meaning');
}

/* if (browser == 'Edge') {
    alert( "You've got the Edge!" );
}
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
}
else {
    alert( 'We hope that this page looks ok!' );
} */

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
        case 1:
            alert('Вы ввели число 1');
            break;
            case 2:
                case 3:
                alert('Вы ввели число 2,а может и 3');
                break;
                default:
                    alert('Buy');
}