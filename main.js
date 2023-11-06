const PRIORITY = {
  HIGH: 'high',
  LOW: 'low'
};
const STATUS = {
  TODO: 'ToDo',
  DONE: 'Done'
};

const list = [ 
	{name: 'create a post', status: STATUS.TODO , priority: PRIORITY.HIGH}, 
  {name: 'test', status: STATUS.DONE, priority: PRIORITY.LOW },
  {name: 'Create ToDo UI list', status: STATUS.TODO, priority: PRIORITY.HIGH}
];
document.addEventListener('DOMContentLoaded', () => {
 const addTaskForm = document.getElementById('form');
 const addTaskFormLow = document.getElementById('form_low');
const taskList = document.getElementById('taskList');
  addTaskForm.addEventListener('submit', function addTaskHigh(event) {
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

const closeDiv = document.createElement('closeDiv');
closeDiv.classList = 'closeDiv';

const rootTask = document.createElement('ul');
rootTask.className = 'taskList';

const saveResult = document.createElement('li');
saveResult.className = 'saveResult';

const labelBox = document.createElement('label');
labelBox.textContent = 'Новая задача';
labelBox.className = 'labelBox';

const checkBox = document.createElement('input');
checkBox.type = 'checkbox';
checkBox.className = 'checkBox';

checkBox.classList.add('divcheckBox');
const saveName = document.createElement('span');
saveName.textContent = taskInput;
saveName.className = 'saveName';

const saveName2 = document.createElement('span');
saveName2.textContent = taskInput2;
saveName2.classList.add('style');

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Удалить';
deleteButton.type = 'submit';
deleteButton.className = 'deleteButton';

const removeButton = () => divTask.remove('divTask');
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

const buttonLow = document.getElementById('buttonLow');
addTaskFormLow.addEventListener('submit', function addTaskLow(event) {
  event.preventDefault();
  const taskForm2 = document.getElementById('addTaskForm2');
  let taskInput2 = taskForm2.value;
  const divcheckBox = document.querySelector('.div_checkbox');
  taskForm2.value = '';
  function createAddElement(task){
    const divTask = document.createElement('div');
    divTask.className = 'divTask';
    divTask.id = 'divTask';
    
    const rootTask = document.createElement('ul');
    rootTask.className = 'taskList';
    
    const saveResult = document.createElement('li');
    saveResult.className = 'saveResult';
    
    const labelBox = document.createElement('label');
    labelBox.textContent = 'Новая задача';
    labelBox.className = 'labelBox';
    
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkBox';
    
    const saveName2 = document.createElement('span');
    saveName2.textContent = task;
    saveName2.className = 'saveName2';
   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.type = 'submit';
    deleteButton.className = 'deleteButton';
   
    saveResult.appendChild(checkBox);
saveResult.appendChild(saveName2);
rootTask.appendChild(saveResult);
divTask.appendChild(rootTask);
addTaskFormLow.appendChild(divTask);
  }
createAddElement(taskInput2)
const deleteButton = document.getElementById('buttonLow');
const deleteTask = () => {
  const parentDeleteTask = document.getElementById('form_low');
  
  const childDeleteTask = document.getElementById('divTask:lastChild');
  // const childDeleteTask = document.querySelector('div:lastChild');
  parentDeleteTask.removeChild(childDeleteTask);
  console.log(parentDeleteTask);
//  while (childDeleteTask) {
//   parentDeleteTask.removeChild(childDeleteTask);
//   childDeleteTask = parentDeleteTask.lastChild;
//  }

};
deleteButton.addEventListener('click', deleteTask);


})

})
