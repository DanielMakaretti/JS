/* let userName = 'Daniel';
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
console.log (color); */
/* alert(a>c);
let result = 5 > 4;
alert( result ); */



 /*  let message = (login == ('Сотрудник')) ? 'Привет':
  (login == 'Директор') ? 'Здравствуйте':
  (login == '') ? 'Нет логина':
  ''; */
 /* function showMessage() {
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
} */

/* if (browser == 'Edge') {
    alert( "You've got the Edge!" );
}
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
}
else {
    alert( 'We hope that this page looks ok!' );
} */

/* const number = +prompt('Введите число между 0 и 3', '');

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
} */
/* 
let array = [5, true, 'stroka', 5.7, 0, -100];
console.log(array[0]);
if (array[0] > array[3]) {
    console.log ('Hi,mommy!')
}
else {
    console.log ('NO!');
}

let matrix = [
    [5, true], ['stroka', 5.7], [0, -100]
];
console.log(matrix[0][1]); */

/* for (var i = 10; i < 50; i *= 2) {
console.log (i);
}

var j = 1000;
while (j > 100) {
    console.log (j);
    j -= 100;
}
*/
/* 
for (var i = 10; i < 20; i += 2) {
    if (i > 15)
    break;
    console.log (i);
}

var arr = [5, true, 'stroka', 5.7, 0, -100];

for (var i = 0; i < arr.length; i++) {
    arr[i] *= -2;
    console.log('Элемент ' + (i + 1) + ': ' + arr[i]);
} */

/* function info(word) {
   
    console.log(word + 'Hi!');
    console.log('Hi!!!!!');
}
function summa(a,b) {
    var res = a + b;
    info(res);


}
summa(5, 7);

function summa(arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++) 
sum += arr[i];
    console.log(sum);
}
var array = [6, 8, 1];
var array_2 = [6, 8, 1, 7];
var array_3 = [6, 8, 1, 90];

summa(array);
summa(array_2);
summa(array_3); */

/* function checkAge(age) {
    if(age < 18) {
    console.log('you are not allowed');
    }
    else if(age >= 18) {
        console.log('you are welcome!');
    
    }
    else {
alert('lox');
    }
}


/* checkAge(NaN); 
function checkAge(age) {
	if (age >= 18) { return true;} 
	else { return confirm('А родители разрешили?');} 
}

checkAge(19); */

function calc(opertion, a = 1, b = 2) {
    return a + b;
    
}

console.log(calc('add', 1, 2));
сalc(‘multi’, 1, 2);
сalc(’subtract’, 3, 2);