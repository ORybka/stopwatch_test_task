let sec = 0;
let min = 0;
let hr = 0;
let runTime;
let decimal = "0";
let timeState = 0; // 0 - stop, 1 - run, 2 - pause
const btnStart = document.querySelector('.start');
const btnWait = document.querySelector('.wait');
const btnReset = document.querySelector('.reset');
const second = document.querySelector('.seconds');
const minute = document.querySelector('.minutes');
const hour = document.querySelector('.hours');

function timeFormat() {
  if (sec <= 9) {
    second.innerHTML = "0" + sec;
  } else {
    second.innerHTML = sec;
  }

  if (min <= 9) {
    minute.innerHTML = "0" + min;
  } else {
    minute.innerHTML = min;
  }

  if (hr <= 9) {
    hour.innerHTML = "0" + hr;
  } else {
    hour.innerHTML = hr;
  }
}

console.log(sec);
console.log(min);

function run() {
  sec++
  if (sec > 59) { 
    min++
    minute.innerHTML = "0" + min;
    sec = sec - 60;
  } 

  if (min > 59) {
    hr++
    hour.innerHTML = "0" + hr;
    min = min - 60;
  }
  timeFormat();
}

function init() {
  runTime = setInterval(run, 600);
}

function pause() {
  timeFormat();
  clearInterval(runTime);
}

function reset() {
  decimal = "0";
  sec = 0;
  min = 0;
  hr = 0;
  timeState = 0;
  minute.innerHTML = "0" + min;
  hour.innerHTML = "0" + hr;
  timeFormat();
}

function resume() {
  runTime = setInterval(run, 600);
}

btnStart.addEventListener('click', () => {

  if (timeState === 0) {
    init();
    timeState = 1;
  } else if(timeState === 1) {
    pause()
    timeState = 2;
  } else {
    resume();
    timeState = 1;
  }
})

btnReset.addEventListener('click', () => {
  clearInterval(runTime);
  reset();
  timeState = 0;
})
