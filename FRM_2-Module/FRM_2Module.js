
// const startTime = new Date(1632111952313);
// const endTime = Date.now();
// const timeDiff = endTime - startTime;
// console.log(`${timeDiff}`);

// function TimeoutFunction() {
//    const startTime = new Date(1632111952313);
// const endTime = Date.now();
// const timeDiff = endTime - startTime;
// console.log(`${timeDiff}`);
// }
//    const logger = new Logger()

//    logger.start();
   
// TimeoutFunction();
//    logger.end();
   
//    console.log(logger.result);
class Logger {
   constructor() {
     this.startTime = 0;
     this.endTime = 0;
     this.result = 0;
   }
   
   start() {
     this.startTime = Date.now();
   }
   
   end() {
     this.endTime = Date.now();
     this.result = this.endTime - this.startTime;
   }
 }
 
 function TimeoutFunction() {
   const startTime = new Date(1632111952313);
   const endTime = Date.now();
   const timeDiff = endTime - startTime;
   console.log(`${timeDiff}`);
 }
 
 const logger = new Logger();
 logger.start();
 TimeoutFunction();
 logger.end();
 console.log(logger.result);
