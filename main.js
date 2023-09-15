
  const allist = {
    list: {
    'create a new practicle task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
    },
  };
/* function changeStatus(task, status) {
    If (task in allist.list) {
        allist.list[task] = status;
        } else {
        console.log("нет такой задачи");
        }
    }
  changeStatus(); */
  function addTask(task, status) {
    allist.list[task] = status;
    console.log( allist.list);
  }
  addTask();

  function deleteTask(task) {
    delete allist.list[task];
  }
  deleteTask();


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


/*=================================Calculator==================================================*/ 

function calc(operation, a, b) {
 if (operation == 'add') {return (a + b)}
 else if (operation == 'multi') {return (a * b)}
 else if (operation == 'subtract') {return (a - b)}
else { return confirm('It is wrong!');} 
}
console.log(calc('subtract', 1, 2));



