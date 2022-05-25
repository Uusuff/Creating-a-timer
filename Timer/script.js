let ms = 0;
let s= 0;
let m= 0;
let counter = undefined;
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const time = document.querySelector('.time'); 



startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);
resetBtn.addEventListener('click', onResetClick);	

function getCurrentTime(){
    return m + ":" + s + ":" + ms
};

function onStartClick(){
	 if(!counter){
        counter = setInterval(runTimer, 10);
    }
	hide(startBtn);
	show(resetBtn);
	show(stopBtn);
}

function onStopClick(){
	clearInterval(counter);
    counter = undefined;
}

function onResetClick(){
	clearInterval(counter);
	counter = undefined;
	ms=0,s=0,m=0;
	time.textContent = getCurrentTime();
	hide(stopBtn);
	hide(resetBtn);
	show(startBtn);
}

function runTimer(){
	time.textContent = getCurrentTime();
	ms++
	if (ms==100){
		ms=0;
		s++;
	}
	if (s==60){
		s=0;
		m++
	}
}
function hide(btn){
	btn.classList.add("hidden");
}
function show(btn){
	btn.classList.remove("hidden");
}
