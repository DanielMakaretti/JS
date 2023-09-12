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

/* function calc(opertion, a = 1, b = 2) {
    return a + b;
    
}

console.log(calc('add', 1, 2));
сalc(‘multi’, 1, 2);
сalc(’subtract’, 3, 2); */

/* let a = prompt('Сколько будет 2 + 2?');
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
} */

/* let i = 1;

do {
  console.log(i);
	i = i + 1;
} while (i < 19); */

/* let i = 1;
for (; i < 10; i++) {
    console.log(i)
} */

/* for (; i < 10;) {
    console.log(i);
    i = i + 1;
} */
/* 
for (let i = 1; i < 19; i++) {
    console.log(i)
    break;
} */

/* while (true) {
	console.log('начало');
	break;
  console.log('конец, который не случится');
}
console.log('конец'); */

/* for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
} */

/* const phoneBook = {
    'John': 89048614779,
    'Adam': 89047693237,
    'Liza': 89053432324,
    
}
phoneBook['Adam'] = 99999999;
console.log(phoneBook['Adam']); */

/* const phoneBook = {
    list: {
        'John': 89048614779,
        'Adam': 89047693237,
        'Liza': 89053432324
    },
    last: {
        'John': 890486414779,
        'Adam': 89047695555555,
        'Liza': 89053432324
    },
    log() {
        console.log(this.last)
    }
    
}
delete fullName[list]; */

/* var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log('Time: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
console.log('Date: ' + date.getFullYear() + ':' + (date.getMonth()+1) + ':' + date.getDate());
'Date: ' + date.setHours(23);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds()); */

/* var arrow = [90, 87, 79, 1, 2, 3, 4];
var stroka = arrow.reverse().join('||');

console.log(stroka.split(', ')); */

/* class Person {
    constructor(name, age, happiness, want_suicide) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.want_suicide = want_suicide;
    }
    info() {
        console.log('Man - ' + this.name + ': ' + 'AGE: ' + this.age + '; ' + 'HaPPi: '
         + this.happiness + '; ' + 'want suicid: ' 
         + this.want_suicide + '.');
    }
}
var alex = new Person('Alex', 45, true, 0);
var bob = new Person('Bob', 15, false, 90);

alex.info();
bob.info(); */

/* console.log(alex.age);
console.log(bob.happiness); */

/* const phoneBook = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
		"Jim Smith": 111111111
	}
};

if (phoneBook.list.John) { // свойство существует
	console.log('John is here!'); // John is here!
}
if (phoneBook.list["Jane Doe"]) {
    console.log('John is HERE!');
}
if (phoneBook.list.HEY) {
    console.log('azaza');
}

if (phoneBook.list.Art) { // свойства не существует
	console.log('Art is here!');
}

console.log(phoneBook.list.Art);
console.log(phoneBook.list.HEY); */

/* const phoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
  };
  
  for (const name in phoneBook.list) {
    console.log('(' + name + ' - ' + phoneBook.list[name] + ')'); // John
  } */

  const allist = {
    list: {
    'create a new practicle task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
    },
  };
 

function changeStatus(task, status) {
   
    console.log(task + ': ' + status);
   
}
changeStatus('create a new practice task', 'To do');
changeStatus('make a bed', 'To do');
changeStatus('write a post', 'In Progress');
showList('To Do', 'In Progress', 'Done',)

   
/* let usera = 'Done';
function changeStatus() {
    let usera = 'To do';
}
changeStatus();
let usera2 = '"make a bed"';
function addTask() {
    let usera2 = '"make a bed"';
}
    console.log(usera2 + ': ' + usera);

 */



/*  if (allist.list['create a new practicle tast']) {
    console.log(allist.list['In Prigress']); 
  } 
  const allist = {
    list: {
    'create a new practicle tast': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
    },

  };
  function changeStatus() {
    let (allist.list["create a new practicle tast"]) = 'To do';
} 
var status1 = 'In Progress'; 
  let status2 = 'Done';
  let status3 = 'To Do'
  let task1 = 'create a new practicle tast:';
  let task2 = 'make a bed:';
  let task3 = 'write a post:';
 
 
 if (task1 = status1) {
    console.log('"create a new practice task": In Progress');
  }
  else if (task1 != status1 || task2 != status2) {
    console.log(task1 + status3)
  }
else {
    function changeStatus() {
        var status1 = 'To do';
    } 

changeStatus(); */

/* 
function addRecord(key, value) { // функция принимает ключ и значение
	this.list[key] = value; // у объекта, который вызвал функцию, в свойстве list свойству [key] присваиваем value 
}

const phoneBook = { // создадим книгу контактов
  list: { 
    "John": 123456789,
    "Jane Doe": 987654321,
  },
	addRecord // добавляем объекту функцию addRecord
};

const toDoList = {  // создадим туду лист
	list: {
		"make a video": "open",
	},
	addRecord // добавляем объекту функцию addRecord
}

// теперь можно вызвать toDoList.addRecord с аргументами key и value
toDoList.addRecord('do something', 'open'); // в этот момент в addRecord - this === toDoList
console.log(toDoList.list); // { 'make a video': 'open', 'do something': 'open' } */

/* function sum(n, c) {
    return n + c
}
sum(4, 2); */

/* const sum = (a, b) => a + b;
sum(1, 2);

const timestamp = () => console.log(new Date()); // new Date() - возвращает текущую дату и время
timestamp(); */
/* let sum = (a, b) => { // открывающая скобка
	if (!a || !b) {
		return undefiend;
	}
	return a + b; // фигурные скобки обязывают использовать return
} // закрывающая скобка

sum(1, 2); // 3
sum(1); // undefined */

/* function showVerticalMessage() {
    let strada = `
    s
    t
    r
    a
    d
    a`
    console.log(strada);
}
showVerticalMessage(strada); */
