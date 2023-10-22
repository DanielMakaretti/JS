document.addEventListener('DOMContentLoaded', () => {
  let addTaskForm = document.getElementById('form');
  addTaskForm.addEventListener('submit', function(event) {
event.preventDefault();
let taskForm = document.getElementById('addTaskForm');
console.log(taskForm.value);
  })
 
})
