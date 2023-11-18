function Task(task) {
    this.myname = task;
    this.status = 'в плане';
    this.complete = function(state) {
        this.status = state
        if (taskOne.myname === 'купить молоко') {
            console.log(`${taskOne.myname}: ${taskOne.status}`); 

            } else {
                console.log('купить молоко: в плане');
            };
         if (taskTwo.myname === 'сделать домашку') {
            console.log(`${taskTwo.myname}: ${taskOne.status}`); 
         } else {
            console.log('сделать домашку: в плане');
         };
         if (taskOne.myname === 'программировать') {
            console.log(`${taskOne.myname}: ${taskOne.status}`); 
         } else {
            console.log('программировать: в плане');
         }
    };
};
const taskOne = new Task('программировать');
const taskTwo = new Task('сделать домашку');
const taskThree = new Task('купить молоко');
taskOne.complete('done');

// function addTask(status) {
//     if (taskOne) {
//         taskOne.complete(status);
//         console.log(taskOne)
//         console.log(`${taskOne.myname}: ${status}`);
//     } 
// }
// addTask('выполнено');