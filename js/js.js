window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }
  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
  //timer
  // let deadline = "2019-10-21";

  // function getTimeRemaining(endtime) {
  //   let t = Date.parse(endtime) - Date.parse(new Date()),
  //     seconds = Math.floor((t / 1000) % 60),
  //     minutes = math.floor((t / 1000 / 60) % 60),
  //     hours = Math.floor(t / (1000 * 60 * 60) % 24);

  //   return {
  //     "total": t,
  //     "hours": hours,
  //     "minutes": minutes,
  //     "seconds": seconds
  //   };
  // }

  // function setClock(id, endtime) {
  //   let timer = document.getElementById(id),
  //     hours = timer.querySelector(".hours"),
  //     minutes = timer.querySelector(".minites"),
  //     seconds = timer.querySelector(".seconds");


  //   function updateClock() {
  //     let t = getTimeRemaining(endtime);
  //     hours.textContent = ("0" + t.hours).slice(-2);
  //     minutes.textContent = ("0" + t.minutes).slice(-2);
  //     seconds.textContent = ("0" + t.seconds).slice(-2);
  //     if (t.total <= 0) {
  //       clearInterval(timeInterval);
  //     }
  //   }
  //   updateClock();
  //   timeInterval = setInterval(updateClock, 1000);
  //   initializeClock(id, deadline);
  // }
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('timer', deadline);
});