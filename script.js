let display = document.getElementById('display');
let stopBtn = document.getElementById('stop');
let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');
let [msec, secs, mins, hrs] = [0, 0, 0, 0];

let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    display.innerHTML = `00 : 00 : 00 : 00`;
    msec = secs = mins = hrs = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let ms = msec < 10 ? `0${msec}` : msec;
    let s = secs < 10 ? `0${secs}` : secs;
    let m = mins < 10 ? `0${mins}` : mins;
    let h = hrs < 10 ? `0${hrs}` : hrs;

    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}