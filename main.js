const button = document.getElementById('elem');
const pauseButton = document.getElementById('elem2');
let isPaused = false;
function buttonClickStopwatch(watch){
    watch = 0;
    if(isPaused === true){
        return;
    }
    let Stopwatch = setInterval(() => {
                watch++;
        if(watch === 10){
            clearInterval(Stopwatch);
        }
       
    console.log(watch);
}, 1000);
};
function togglePause(){
    if(isPaused === false){
         isPaused = !isPaused;
}}
button.addEventListener('click',() => buttonClickStopwatch(0));
pauseButton.addEventListener('click', togglePause);

