const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];

  list.forEach((object, index) => {
    if(object.name === 'create a post') {
    let NewDone = list[index].status;
    NewDone = 'Done';
     let NewHigh = list[index].priority;
     NewHigh = 'high';
      
    }
    else if(object.name === 'test'){
      NewProgress = list[index].status;
      NewProgress = 'It Progress';
    }
  });

    const NewArray2 = list.splice(2, 0, {
      name:'sex',
      status: 'Done',
      priority: 'medium'
    });
    console.log(NewArray2);
  /*   const NewArray = list.map(task => {
      if(task === 'sex') {
        return {
          name: 'sex',
          status: 'Done',
          priority: 'medium'
        }
      }
        else if(task === 'test') {
          return {
            name: 'test',
            status: 'Done',
            priority: 'high'
          }
        }
        else {
          return {
            name: 'create a post',
            status: 'In progress',
            priority: 'low'
          }
        }
      });
      
      console.log(NewArray); */
  
 
   
 
   /*function deleteTask(index, numeric) {
    let result = addTask(2, 1, 'sex');
      let deletetask = result.splice(index, numeric);
      if(deleteTask = result.splice(index, numeric)){
      console.log(deletetask);
      }
      else {
        console.log('Таких объектов в массиве нет');
      }
    };  */