document.addEventListener('DOMContentLoaded', () => {
function getCalculator(){
const calc_label = parseInt(document.getElementById('calc_label').value);
const calc_label2 = parseInt(document.getElementById('calc_label2').value);
let select = document.getElementById('select').value;
let plus = document.getElementById('plus').value;
let minus = document.getElementById('minus').value;
let multi = document.getElementById('multi').value;
let division = document.getElementById('division').value;

    if(select === plus){
        const plus_exp = calc_label + calc_label2;
        console.log(plus_exp);
      }
      else if(select === minus){
        const minus_exp = calc_label - calc_label2;
       console.log(minus_exp);
      }
      else if(select === multi){
        const multi_exp = calc_label * calc_label2;
        console.log(multi_exp);
      }
      else if(select === division){
        const division_exp = calc_label / calc_label2;
        console.log(division_exp);
      }
      else{
        resultat.textContent = 'LOX';
      }
}
const resultat = document.getElementById('resultat');
resultat.addEventListener('click', getCalculator);
const result = document.getElementById('result').textContent;
document.getElementById('result').textContent = getCalculator();
console.log(result);
});

/* document.getElementById('form').addEventListener('submit', function buttonClickEqually(event) {
 event.preventDefault()
   validation(this);
}); */
