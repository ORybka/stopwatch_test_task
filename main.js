let sec;
let min;
let hout;
const btnStart = document.querySelector('.start');
const btnWait = document.querySelector('.wait');
const btnReset = document.querySelector('.reset');
const second = document.querySelector('.seconds');
const minute = document.querySelector('.minutes');
const hour = document.querySelector('.hours');


function init() {
  sec = 0;
  setInterval(run, 1000);
}

function run() {
  sec++
  if (sec <= 9) {
    second.innerHTML = "0" + sec;
  } else {
    second.innerHTML = sec;
  }
}

btnStart.addEventListener('click', () => {
  init();
})


