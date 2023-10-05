function BackCountTimeout(second){
   console.log(second);
  
let counterId = setInterval(() => {
   --second
   if(second === 0){
      clearInterval(counterId);
   }
   console.log(second);
}, 500);
};



BackCountTimeout(10)
