const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];


  
let NewArray = {name: 'sex', status: 'Done', priority: 'medium'};
let NewArray2 = {name: 'horror', status: 'Done', priority: 'high'};
list.push(NewArray, NewArray2);
     
    
    const changeStatus =  list.map(object => {
      if (object.name === 'create a post') {
        return {
          name: object.name,
          status: 'Done',
          priority: 'high'
        };
      }
      else if(object.name === 'test') {
        return {
          name: object.name,
          status: 'In Progress',
          priority: 'medium'
        };
      }
      else {
        return object;
      }
     })
     

  list.splice(3, 3);


  for (let task of list) {
    console.log(task);
  }