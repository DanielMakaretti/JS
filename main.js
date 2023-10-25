document.addEventListener('DOMContentLoaded', () => {
 const addTaskForm = document.getElementById('form');
 const addTaskFormLow = document.getElementById('form_low');
const taskList = document.getElementById('taskList');
  addTaskForm.addEventListener('submit', function(event) {
event.preventDefault();
const taskForm = document.getElementById('addTaskForm');
const taskForm2 = document.getElementById('addTaskForm2');
const divCheckbox = document.getElementById('divCheckbox');
const style = document.querySelector('.taskList');


const divcheckBox = document.querySelector('.div_checkbox');
let taskInput = taskForm.value;
let taskInput2 = taskForm2.value;

const divTask = document.createElement('div');
divTask.className = 'divTask';
divTask.style.cssText = ` 
word-wrap: break-word;
display: flex;
border: 3px solid rgba(0,0,0,0.3);
border-radius: 10px;
margin-bottom: 10px;
justify-content: space-between;
word-wrap: break-word;
flex-direction: row;
position:relative;
`
const closeDiv = document.createElement('closeDiv');
closeDiv.classList = 'closeDiv';
closeDiv.style.cssText = `
position: absolute;
right: 0;
align-item: center;
word-wrap: break-word;
margin: 10px 20px 5px 0px;
width: 25px;
height: 20px;
background-color: rgba(0, 0, 0, 0.5);
clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
`

const rootTask = document.createElement('ul');
rootTask.className = 'taskList';
rootTask.style.cssText = ` 
padding-left: 0px;
margin: 0px;
`
const saveResult = document.createElement('li');
saveResult.className = 'saveResult';
saveResult.style.cssText = `list-style-type: none;
display: block;

align-item:center;
`
const labelBox = document.createElement('label');
labelBox.textContent = 'Новая задача';
labelBox.className = 'labelBox';
labelBox.style.cssText = `
`
const checkBox = document.createElement('input');
checkBox.type = 'checkbox';
checkBox.className = 'checkBox';
checkBox.style.cssText = `
min-height: 100%;
width: 30px;
height: 30px;
display: inline-block;
flex-direction: center;

`
checkBox.classList.add('divcheckBox');
const saveName = document.createElement('span');
saveName.textContent = taskInput;
saveName.classList.add('style');
saveName.style.cssText = `margin: 20px 20px 20px;
font-size: 25px;
font-family: Noto Sans, sans-serif;
`

const saveName2 = document.createElement('span');
saveName2.textContent = taskInput2;
saveName2.classList.add('style');
saveName2.style.cssText = `margin: 20px 20px 20px;
font-size: 25px;
font-family: Noto Sans, sans-serif;
`
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Удалить';
deleteButton.type = 'submit';
deleteButton.className = 'deleteButton';
deleteButton.style.cssText = `position: absolute;
right: 0;
align-item: center;
word-wrap: break-word;
`

function removeButton(){
  divTask.remove('divTask');
}
closeDiv.addEventListener('click', removeButton);


saveResult.appendChild(checkBox);
saveResult.appendChild(saveName);
saveResult.appendChild(closeDiv); 
rootTask.appendChild(saveResult);
divTask.appendChild(rootTask);
addTaskForm.appendChild(divTask);


taskForm.value = '';
taskForm2.value = '';

  })
 

addTaskFormLow.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskForm2 = document.getElementById('addTaskForm2');
  let taskInput2 = taskForm2.value;
  const divcheckBox = document.querySelector('.div_checkbox');

const divTask = document.createElement('div');
divTask.className = 'divTask';
divTask.style.cssText = ` 
word-wrap: break-word;
display: flex;
border: 3px solid rgba(0,0,0,0.3);
border-radius: 10px;
margin-bottom: 10px;
justify-content: space-between;
word-wrap: break-word;
flex-direction: row;
position:relative;
`
const closeDiv = document.createElement('closeDiv');
closeDiv.classList = 'closeDiv';
closeDiv.style.cssText = `
position: absolute;
right: 0;
align-item: center;
word-wrap: break-word;
margin: 10px 20px 5px 0px;
width: 25px;
height: 20px;
background-color: rgba(0, 0, 0, 0.5);
clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
`

const rootTask = document.createElement('ul');
rootTask.className = 'taskList';
rootTask.style.cssText = ` 
padding-left: 0px;
margin: 0px;
`
const saveResult = document.createElement('li');
saveResult.className = 'saveResult';
saveResult.style.cssText = `list-style-type: none;
display: block;

align-item:center;
`
const labelBox = document.createElement('label');
labelBox.textContent = 'Новая задача';
labelBox.className = 'labelBox';
labelBox.style.cssText = `
`
const checkBox = document.createElement('input');
checkBox.type = 'checkbox';
checkBox.className = 'checkBox';
checkBox.style.cssText = `
min-height: 100%;
width: 30px;
height: 30px;
display: inline-block;
flex-direction: center;

`

const saveName2 = document.createElement('span');
saveName2.textContent = taskInput2;
saveName2.classList.add('style');
saveName2.style.cssText = `margin: 20px 20px 20px;
font-size: 25px;
font-family: Noto Sans, sans-serif;
`
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Удалить';
deleteButton.type = 'submit';
deleteButton.className = 'deleteButton';
deleteButton.style.cssText = `position: absolute;
right: 0;
align-item: center;
word-wrap: break-word;
`

function removeButton(){
  divTask.remove('divTask');
}
closeDiv.addEventListener('click', removeButton);


saveResult.appendChild(checkBox);
saveResult.appendChild(saveName2);
saveResult.appendChild(closeDiv); 
rootTask.appendChild(saveResult);
divTask.appendChild(rootTask);
addTaskFormLow.appendChild(divTask);



taskForm2.value = '';

})
})