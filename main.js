document.addEventListener('DOMContentLoaded', () => {
function getCalculator(){
const calc_label = parseInt(document.getElementById('calc_label').value);
const calc_label2 = parseInt(document.getElementById('calc_label2').value);
let select = document.getElementById('select').value;
let plus = document.getElementById('plus').value;
let minus = document.getElementById('minus').value;
let multi = document.getElementById('multi').value;
let division = document.getElementById('division').value;
const result = document.getElementById('result');
elem = document.getElementById('form');
const backgroundColor = elem.style.backgroundColor;
    if(select === plus){
        const plus_exp = calc_label + calc_label2;
        result.textContent = plus_exp;
      }
      else if(select === minus){
        const minus_exp = calc_label - calc_label2;
        result.textContent = minus_exp;
      
      }
      else if(select === multi){
        const multi_exp = calc_label * calc_label2;
        result.textContent = multi_exp;
      }
      else if(select === division){
        const division_exp = calc_label / calc_label2;
        result.textContent = division_exp;
      }
      else{
        result.textContent = 'LOX';
      }
      sessionStorage.setItem('result', result.textContent);
}

const savedResult = sessionStorage.getItem('result');
result.textContent = savedResult;
const resultat = document.getElementById('resultat');
resultat.addEventListener('click', getCalculator);


});
function validation(form){
  function removeError(input){
const parent = input.parentNode;
if(parent.classList.contains('error')){
  parent.querySelector('.error-label').remove()
  parent.classList.remove('error')
}
  }

  function createError(input, text){
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')
    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;
    parent.append(errorLabel);
    parent.classList.add('error');
    
  }
  let resultTwo = true;
  for(const input of form.querySelectorAll('input')){
    removeError(input)
    if(input.value == ''){
      console.log('ERROR');
      createError(input, 'Поле не заполнено');
      resultTwo = false;
    }
  }
  return resultTwo;
}

document.getElementById('form').addEventListener('submit', function (event) {
 event.preventDefault()
  if(validation(this) == true){
    alert('Form successfully sent');
  }
});
