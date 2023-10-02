const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];


  
let NewArray = {name: 'sex', status: 'Done', priority: 'medium'};
let NewArray2 = {name: 'horror', status: 'Done', priority: 'high'};
list.push(NewArray, NewArray2);
     
    
    const changeStatus = list.map(object => {
      switch(object.name) {
        case 'create a post':
          return {
            name: object.name,
            status: 'Done',
            priority: 'high'
          };
         
          case 'test':
            return {
              name: object.name,
              status: 'In Progress',
              priority: 'medium'
            };
           
            case 'sex':
            return {
              name: object.name,
              status: 'In Progress',
              priority: 'low'
            };
            
            case 'horror':
            return {
              name: object.name,
              status: 'In Progress',
              priority: 'low'
            };
           
            default:
              console.log('Invalid task name');
              return object;
      }
      
    });
    
     
  /*   changeStatus.shift()
     changeStatus.pop(); */
  for (let task of changeStatus) {
    console.log(task);
  }