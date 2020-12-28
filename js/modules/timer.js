function addZero(num) {
  if (num < 10) {
    num = `0${num}`;
  }
  return num;
}

function timer(id, deadline) {

    function parseTime(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / 1000 / 60 / 60 / 24),
          hours = Math.floor((t / 1000 / 60 / 60) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);
      return {
        t,
        days,
        hours,
        minutes,
        seconds,
      };
    }
    
    function showLeftTime(selector, endtime) {
      let timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timerInterval = setInterval(updateClocks, 1000);
  
      updateClocks();
  
      function updateClocks() {
        let time = parseTime(endtime);
        if (time.t > 0) {
          days.textContent = addZero(time.days);
          hours.textContent = addZero(time.hours);
          minutes.textContent = addZero(time.minutes);
          seconds.textContent = addZero(time.seconds);
        } else {
          clearInterval(timerInterval);
        }
      }
    }
    showLeftTime(id, deadline);
}

export default timer;
export {addZero};