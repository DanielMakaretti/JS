const button = document.getElementById('elem');
const pauseButton = document.getElementById('elem2');
const resumeButton = document.getElementById('elem3');
let isPaused = false;
let Stopwatch;
let watch = 0;
const buttonClickStopwatch = () => {
    if(isPaused === true){
        return;
    };
    Stopwatch = setInterval(() => {
                watch++;
        if(watch === 10){
            clearInterval(Stopwatch);
        };
       
    console.log(watch);
}, 1000);
};
const togglePause = () => {
    isPaused = !isPaused;
    if(isPaused){
        clearInterval(Stopwatch);
} else{
    buttonClickStopwatch();
};
};

const toggleResume = () => {
    isPaused = false;
    buttonClickStopwatch();
};
button.addEventListener('click', () => buttonClickStopwatch());
pauseButton.addEventListener('click', () => togglePause());
resumeButton.addEventListener('click', () => toggleResume());

