<<<<<<< HEAD
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());

// const month = date.getMonth();

monthNameEl.textContent = date.toLocaleDateString("en", {
  month: "long",
});

dayNameEl.textContent = date.toLocaleDateString("en", {
  weekday: "long",
});

dayNumEl.textContent = date.getDate();
yearEl.textContent = date.getFullYear();
=======
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.textContent = h;
  minuteEl.textContent = m;
  secondsEl.textContent = s;
  ampmEl.textContent = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
>>>>>>> 9321a80 (Add digital-clock project)
