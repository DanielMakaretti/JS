function getAverage(){
  const array = [1,4,4,4,1,2,3];
  const sum = array.reduce(function(arraySum, arrayNumber){
    return (arraySum + arrayNumber) 
  }, 0) / array.length;
  let OneSum = Math.round(sum);
  console.log(`([${array}],${OneSum})`);
  return sum;
  
  }
getAverage();

