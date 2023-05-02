const secs = document.querySelector("#seconds");
const mins = document.querySelector("#minutes");
const work = document.querySelector("#interval-count");
const session = document.querySelector("#work-break");
let secCount = 0;
let minCount = 25;
let studying = true;
let workCount = 1;
let INTERVAL;

function second(amt) {
    if (secCount == 0){
        if (minCount == 0){
            studying ? goBreak() : goStudy();
        }
        else {
            secCount = 59;
            minute(1);
        }
    } else {
        secCount -= amt;
    }
    displaySec();
}

function minute(amt) {
    minCount -= 1;
    displayMin();
}

function start() {
	clearInterval(INTERVAL);
	INTERVAL = setInterval(() => {second(1)}, 5)
}

function stop() {
    clearInterval(INTERVAL);
}

function reset() {
    stop()
    if ((studying &&((minCount == 25) && (secCount == 0))) || (!studying &&((minCount == 5) && (secCount == 0)))){
        workCount = 1;
        work.innerHTML = workCount;
        studying = true;
        session.innerHTML = "Work";
    }
    minCount = (studying ? 25:5);
    secCount = 0;
    displayMin();
    displaySec();
}

function goBreak() {
    studying = false;
    session.innerHTML = "Break";
    refreshColor();
    stop();
    minCount = 5;
    secCount = 0;
    displayMin();
    displaySec();
}

function goStudy() {
    studying = true;
    session.innerHTML = "Study";
    refreshColor();
    stop();
    minCount = 25;
    secCount = 0;
    workCount += 1;
    work.innerHTML = workCount;
    displayMin();
    displaySec();
}

function displaySec() {
    if (secCount < 10){
        secs.innerHTML = "0" + secCount;
    } else {
        secs.innerHTML = secCount;
    }
    
}

function displayMin() {
    mins.innerHTML = minCount;
}


