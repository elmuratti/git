const hourEl = document.querySelector("#hours");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

 

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  if (hour < 10) {
    hour = `0${hour}`;
  } else {
    hour = hour;
  }

  minute = minute < 10 ? `0${minute}` : minute;
  seconds = seconds < 10 ? `0${seconds}` : seconds;


  hourEl.innerText = hour;
  minuteEl.innerText = minute;
  secondEl.innerText = seconds;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
