       
// //     document.getElementById('form').addEventListener('submit', findNameGendorize = (event) => {
// //         event.preventDefault()
// //    const findNameInput = document.querySelector('.findNameInput').value;
// //     const serverUrl = 'https://api.genderize.io';
// //     const url = `${serverUrl}?name=${findNameInput}`;
// //     fetch(url)
// //     .then(response => {
// //         if (!response.ok || response.status === 404) {
// //             throw new Error('Request failed');
// //         }
// //         return response.json()
// //        })
// //    .then(data => {
// //        alert(`${data.name} is ${data.gender}`)
// //    })
// //    .catch(error => {
// //        console.error('Ошибка, ебланка:', error)
// //    })
// // })

// //    document.querySelector('.submitButton').addEventListener('click',() => {
// //     const findNameInput = document.querySelector('.findNameInput').value;
// //     findNameInput.value = '';
// // });

// const person = {
//     name: 'Daniel',
//     age: 25,
//     city: 'Syktyvkar'
// };
// for (const [key, value] of Object.entries(person)) {
//     console.log(`${key}: ${value}`);
//   }

// const sum = (...numbers) => {
// return numbers.reduce((total, num) => total * num);
// }

// console.log(sum(1, 2, 5, 4));

// const arrayOne = [1, 2, 3];
// const arrayTwo = [4, 5, 6];
// const arrayThree = [7, 8, 9];
// const arrayFour = [...arrayOne, ...arrayTwo, arrayThree];
// console.log(arrayFour);

// const ages = {
//     john: 30,
//     jane: 25,
//     bob: 40
//   };
  
//   const ageArray = Object.values(ages);
  
//   const averageAge = ageArray.reduce((total, age) => total + age) / ageArray.length;
  
//   console.log(averageAge); 

// const newPerson = 42;
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', newPerson.toString())
// console.log(localStorage.getItem('number'))

const object = {
  name: 'Max',
  age: 20
}

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Vladlen'

console.log(person)
