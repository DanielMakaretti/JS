const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];
function addTask(number, number2, name){
    const NewTask = list.map(NewTask => NewTask.name);
    NewTask.splice(number, number2, name);
    var result = NewTask.map(item => {
      if(item === 'create a post') {
        return {
          name: item,
          status: 'In progress',
          priority: 'low'
        };
      }
        else if(item === 'test') {
          return {
            name: item,
            status: 'Done',
            priority: 'high'
          };
        }
        else {
          return {
            name: item,
            status: 'To do',
            priority: 'Medium'
          };
        };
      });
 
      console.log(result);
    };
    
   
    
    function deleteTask(index, numeric) {
      let deletetask = list.splice(index, numeric);
      console.log(deletetask);
    }
  

addTask(2, 0, 'sex');
deleteTask(2, 1);