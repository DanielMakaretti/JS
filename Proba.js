
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries){
    let values = Object.values(salaries);
    let result = Math.max(...values)
    for(let [key, value] of Object.entries(salaries)){
     if(value === result){
      console.log(key);
     }
    }
    }
  topSalary(salaries);