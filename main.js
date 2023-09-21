const allist = {
  list: {
    "create a new practice task": "In Progress", 
    "make a bed": "Done", 
    "write a post": "To Do",
  },
};
function changeStatus(key, status) {
  if (key in allist.list) {
    allist.list[key] = status;
    console.log('Статус задачи: ' + key + ' изменен на - ' + status );
}
else {
  console.log('задачи - ' + key + ', со статусом - ' + status + ' нет в списке');
}
}

function addTask(key, status) {
  allist.list[key] = status;
  console.log('Задача ' + key + ', со статусом - ' + status + ', добавлена');
}

function deleteTask(key, status) {
  if (key in allist.list) {
    allist.list[key] = status;
    delete status;
console.log('Задача ' + key + ', со статусом - ' + status + ', удалена');
  }
  else {
    console.log('задачи - ' + key + ', со статусом - ' + status + ' нет в списке');
  }
}
  
function showList() {
  const StatusToDO = {
    ToDo: {},
    InProgress: {},
    Done: {},
   
  };
 for (const key in this.list) {
  let statuswhow = this.list[key];
  StatusToDO[statuswhow][key] = '';
 }
  for (const status in StatusToDO) {
    console.log(status + ': ');

    let taskExist = false;
    for(const task in StatusToDO[status]) {
      taskExist = true;
      console.log('  ' + task);
    }
    if (!taskExist) {
      console.log('   -');
    }
  }

};

changeStatus('create a new practice task', 'To Do');
changeStatus('make a bed', 'To Do');
changeStatus('write a post', 'In Progress');
deleteTask('wash the floors', 'Done');
addTask('wash the floors', 'Done');
showList();