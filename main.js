const allist = {
  list: {
    "create a new practice task": 'In Progress',
    "make a bed": 'Done',
    "write a post": 'To Do',
  },
};
function changeStatus(key, status) {
  if (key in allist.list) {
    allist.list[key] = status;
    console.log('Статус задачи: ' + key + ' изменен на - ' + status);
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

/* function showList(push, task2) {
  let q = 0;
  let i = 0;
  let x = 0;
 for (let key in allist.list) {
  if(allist.list[key] === 'Done' && q < 1) {
      q++;
      console.log(`${allist.list[key]} :
       ${[key]}`);
       
    }
 
  
  else if(allist.list[key] === 'Done' && q >= 1) {
    q++;
    console.log(`${[key]} : ${allist.list[key]}`);
    
  }
  
  
 };

 for (let key in allist.list) {
    if(allist.list[key] === 'In Progress' && i < 1) {
      i++;
      console.log(`${allist.list[key]} :
       ${[key]}`);
    }
    
    else if(allist.list[key] === 'In Progress' && i >= 1) {
      i++;
      console.log(`${[key]} : ${allist.list[key]}`);
     
    }
   
  };
  
  for (let key in allist.list) {
    if(allist.list[key] === 'To Do' && x < 1) {
      x++;
      console.log(`${allist.list[key]} :
       ${[key]}`);
    }
    else if(allist.list[key] === 'To Do' && x >= 1) {
      x++;
      console.log(`${allist.list[key]} :
       ${[key]}`);
      
    }
    let push = `${allist.list[key]} :
    ${[key]}`;
       return push + task2;

} 




/* let result = showList(allist.list[key], key);
console.log(result); 
if (x === 0) {
  console.log('Nothing is done');
}
else if (i === 0) {
  console.log('Nothing is done');
}
else if (q === 0) {
  console.log('Nothing is done');
}

}; */
function showList() {
  let text = "",
    todo = `Todo:`,
    progress = `
    Progress:
  `,
    done = `
    Done:
  `,
    todoFlag = true,
    progressFlag = true,
    doneFlag = true;
  for (key in allist.list) {
    switch (allist.list[key]) {
      case 'To Do':
        todo +=  `\n ${key}`;
        todoFlag = false;
        break;
      case 'In Progress':
        progress += 
        `${key}`;
        progressFlag = false;
        break;
      case 'Done':
        done += 
        `${key}`;
        doneFlag = false;
        break;

    }
  }
  if (todoFlag) {
    todo += '-';
  }
  if (progressFlag) {
    progress += '-';
  }
  if (doneFlag) {
    done += '-';
  }
  text = todo + progress + done;
  console.log(text);
}


changeStatus('create a new practice task', 'To Do');
changeStatus('make a bed', 'To Do');
changeStatus('write a post', 'In Progress');
addTask('wash the floors', 'To Do');
deleteTask('wash the loors', 'To Do');
addTask('wash the floors', 'Done');
addTask('washdfdfd the floors', 'To Do');
deleteTask('washdfdfd the floors', 'To Do');

showList();