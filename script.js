// Getting references to HTML elements
let display = document.getElementById('display'); 
let stopBtn = document.getElementById('stop');  
let startBtn = document.getElementById('start');  
let resetBtn = document.getElementById('reset');  

// Initializing time variables
let [msec, secs, mins, hrs] = [0, 0, 0, 0]; // Variables for milliseconds, seconds, minutes, and hours

let timerId = null; // Variable to hold the timer interval ID

// Event listeners for buttons

// Start button click event
startBtn.addEventListener('click', function () {
    // If there's an existing timer, clear it before starting a new one
    if (timerId !== null) {
        clearInterval(timerId);
    }
    // Set a new interval to call the startTimer function every 10 milliseconds
    timerId = setInterval(startTimer, 10);
});

// Stop button click event
stopBtn.addEventListener('click', function () {
    // Clear the interval to stop the timer
    clearInterval(timerId);
});

// Reset button click event
resetBtn.addEventListener('click', function () {
    // Clear the interval to stop the timer
    clearInterval(timerId);
    // Reset display and time variables to initial values
    display.innerHTML = `00 : 00 : 00 : 00`;
    msec = secs = mins = hrs = 0;
});

// Function to update the timer
function startTimer() {
    msec++; 
    if (msec == 100) { 
        msec = 0; 
        secs++; 
        if (secs == 60) { 
            secs = 0;
            mins++; 
        }
        if (mins == 60) { 
            mins = 0; 
            hrs++; 
        }
    }

    // Formatting values to display in HH : MM : SS : MS format
    let ms = msec < 10 ? `0${msec}` : msec; 
    let s = secs < 10 ? `0${secs}` : secs; 
    let m = mins < 10 ? `0${mins}` : mins; 
    let h = hrs < 10 ? `0${hrs}` : hrs;    

    // Update the display with the formatted time
    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
