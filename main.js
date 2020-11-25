let sec;
let min;
let hr;
let runTime;
let decimal = "0";
let timeState = 0; // 0 - stop, 1 - run
const btnStart = document.querySelector('.start');
const btnWait = document.querySelector('.wait');
const btnReset = document.querySelector('.reset');
const second = document.querySelector('.seconds');
const minute = document.querySelector('.minutes');
const hour = document.querySelector('.hours');

function timeFormat() {
  if (sec <= 9) {
    second.innerHTML = decimal + sec;
  } else {
    second.innerHTML = sec;
  }
}

function run() {
  sec++
  timeFormat();
}

function init() {
  sec = 0;
  runTime = setInterval(run, 500);
}

function pause() {
  timeFormat();
  clearInterval(runTime);
}

function reset() {
  decimal = "0";
  sec = 0;
  timeFormat();
}

function resume() {
  decimal = second.textContent[0], 10;
  sec = second.textContent[1], 10;
  timeFormat();
  runTime = setInterval(run, 500);
  console.log(sec);
}

btnStart.addEventListener('click', () => {
console.log(timeState);

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


