
// ========================== je recupeur les ID ====================================
const linput = document.getElementById("input");
// const Letemps = document.getElementById("Time");
const Seconds = document.getElementById("seconds");
const Minutes = document.getElementById("minutes");
const twoMinutes = document.getElementById("twoMinutes");
const foMinutes = document.getElementById("foMinutes");
const treeMinutes = document.getElementById("treeMinutes");
const Divcontuetout = document.getElementById("letime");
const inputForm = document.querySelector("#inputForm");
const timerElement = document.getElementById("Time");
let timeNull = null;
// ===================================================================================





// ============================= pour les 20 SECS ====================================
Divcontuetout.style.display = "none"
Seconds.addEventListener('click', function () {
  if (timeNull != null) {
    Divcontuetout.style.display = "none"
    clearInterval(timeNull)
  }
  let temps = 20
  const timerElement = document.getElementById("Time")
  let ladate = new Date()
  let Finheure = `${ladate.getHours() + Math.floor(temps / 3600)}:${ladate.getMinutes() + Math.floor(temps / 60 % 60)}:${ladate.getSeconds() + Math.floor(temps % 60)}`
  Divcontuetout.style.display = "block"
  document.getElementById("span").innerHTML = Finheure;
  timeNull = setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps--;
    if (temps === -1) {
      Divcontuetout.style.display = "none"
      clearInterval(temps)
    }
  }, 1000);
});

// ============================= pour les 20 SECS =================================


//  ========================= Pour le CAPPUCINO  ==================================
Minutes.addEventListener('click', function (event) {
  if (endTime != null) {
    Divcontuetout.style.display = "none"
    clearInterval(timeNull)
  }
  const departMinutes = 5
  let temps = departMinutes * 60
  const timerElement = document.getElementById("Time")
  timeNull = setInterval(() => {
    let ladate = new Date()
    let Finheure = `${ladate.getHours() + Math.floor(temps / 3600)}:${ladate.getMinutes() + Math.floor(temps / 60 % 60)}:${ladate.getSeconds() + Math.floor(temps % 60)}`
    Divcontuetout.style.display = "block"
    document.getElementById("span").innerHTML = Finheure;
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps--;
    if (temps === -1) {
      Divcontuetout.style.display = "none"
      clearInterval(temps)
    }
  }, 1000);

});
//  ========================= Pour le CAPPUCINO  =======================

//  ========================= Pour le the =============================

twoMinutes.addEventListener('click', function () {
  if (timeNull != null) {
    Divcontuetout.style.display = "none"
    clearInterval(timeNull)
  }
  const departMinutes = 15
  let temps = departMinutes * 60
  const timerElement = document.getElementById("Time")
  timeNull = setInterval(() => {
    Divcontuetout.style.display = "block"
    let ladate = new Date();
    let finheure = `${ladate.getHours() + Math.floor(temps / 3600)}:${ladate.getMinutes() + Math.floor(temps / 60 % 60)}:${ladate.getSeconds() + Math.floor(temps % 60)}`
    document.getElementById("span").innerHTML = finheure;
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps--
    if (temps === -1) {
      Divcontuetout.style.display = "none"
      clearInterval(timeNull)
    }
  }, 1000);
});
//  ========================= Pour le the ====================================


//  ========================= Pour le petit Dejeuner =======================
treeMinutes.addEventListener('click', function (event) {
  if (timeNull != null) {
    Divcontuetout.style.display = "none"
    clearInterval(timeNull)
  }
  const departMinutes = 20
  let temps = departMinutes * 60
  const timerElement = document.getElementById("Time")
  timeNull = setInterval(() => {
    Divcontuetout.style.display = "block"
    let ladate = new Date();
    let finheure = `${ladate.getHours() + Math.floor(temps / 3600)}:${ladate.getMinutes() + Math.floor(temps / 60 % 60)}:${ladate.getSeconds() + Math.floor(temps % 60)}`
    document.getElementById("span").innerHTML = finheure;
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps--
    if (temps === -1) {
      Divcontuetout.style.display = "none"
      clearInterval(timeNull)
    }
  }, 1000);
});
//  ========================= Pour le petit Dejeuner =======================


//  ========================= Pour le dejeuner ===============================
foMinutes.addEventListener('click', function () {
  if (timeNull != null) {
    Divcontuetout.style.display = "none"
    clearInterval(timeNull)
  }
  Divcontuetout.style.display = "block"
  const departMinutes = 30
  let temps = departMinutes * 60
  const timerElement = document.getElementById("Time")
  let ladate = new Date();
  let heure = `${ladate.getHours() + Math.floor(temps / 3600)}:${ladate.getMinutes() + Math.floor(temps / 60 % 60)}:${ladate.getSeconds() + Math.floor(temps % 60)}`
  document.getElementById("span").innerHTML = heure;
  timeNull = setInterval(() => {
    // if (temps <= -1 || temps === -1) {
    //   Divcontuetout.style.display = "none"
    // }
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps--
    if (temps === -1) {
      Divcontuetout.style.display = "none"
      clearInterval(timeNull)
    }
  }, 1000);
});
//  ========================= Pour le dejeuner =======================

// =============================== pour input ===========================

inputForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (timeNull != null) {
    clearInterval(timeNull)
  }
  Divcontuetout.style.display = "block"
  const departinput = linput.value;
  let temps = departinput * 60;
  linput.value = "";
  let date = new Date();
  let dates = `${date.getHours() + Math.floor(temps / 3600)}:${date.getMinutes() + Math.floor(temps / 60 % 60)}:${date.getSeconds() + Math.floor(temps % 60)}`
  document.getElementById("span").innerHTML = dates;
  console.log(dates);
  if (timeNull =! null) {
    clearInterval(timeNull)
  }
  timeNull = setInterval(() => {
    temps--;
    Indicateur(temps)
    if (temps === -1) {
      document.location.reload();
      Divcontuetout.style.display = "none";
      clearInterval(timeNull);
    }
  }, 1000)
})






function Indicateur(secondes) {
  let heure = 0;
  let minutes = 0;
  let seconde = 0;
  heure = Math.floor(secondes / 3600);
  minutes = Math.floor(secondes / 60 % 60);
  seconde = Math.floor(secondes % 60);
  timerElement.innerText = `${heure < 10 ? "0" : ""}${heure}:${minutes < 10 ? "0" : ""}${minutes}:${seconde < 10 ? "0" : ""}${seconde}`
  console.log(timerElement);
}









// const timeH = document.querySelector(".time");
// const be_back = document.querySelector(".be-back");
// let countDown = null;

// // 20 SECS
// let toweny_secs = 20 + 1;
// const toweny_SECS = document.getElementById("20_SECS");

// toweny_SECS.addEventListener("click", () => {
//   timeH.style.display = "block";
//   be_back.style.display = "block";
//   // get time back
//   var date = new Date();
//   var current_time = `${
//     date.getHours() + Math.floor(toweny_secs / (60 * 60))
//   } : ${date.getMinutes() + Math.floor((toweny_secs / 60) % 60)} : ${(
//     date.getSeconds() + toweny_secs) % 60
//   }`;
//   document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

//   if (countDown != null) {
//     clearInterval(countDown);
//   }
//   countDown = setInterval(() => {
//     toweny_secs--;
//     displayTime(toweny_secs);
//     if (toweny_secs <= 0 || toweny_secs < 1) {
//       endTime();
//       document.location.reload()
//       clearInterval(countDown);
//     }
//   }, 1000);
// });

// // CAPPUCINO_5
// let fiveCappicino = 5 * 60 + 1;
// const CAPPUCINO = document.getElementById("CAPPUCINO_5");

// CAPPUCINO.addEventListener("click", () => {
//   timeH.style.display = "block";
//   be_back.style.display = "block";
//   // get time back
//   var date = new Date();
//   var current_time = `${
//     date.getHours() + Math.floor(fiveCappicino / (60 * 60))
//   } : ${date.getMinutes() + Math.floor((fiveCappicino / 60) % 60)} : ${
//     (date.getSeconds() + fiveCappicino) % 60
//   }`;
//   document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

//   if (countDown != null) {
//     clearInterval(countDown);
//   }
//   countDown = setInterval(() => {
//     fiveCappicino--;
//     displayTime(fiveCappicino);
//     if (fiveCappicino <= 0 || fiveCappicino < 1) {
//       endTime();
//       document.location.reload()
//       clearInterval(countDown);
//     }
//   }, 1000);
// });

// // THE_15
// let fiveteenThe = 15 * 60 + 1;
// const THE = document.getElementById("THE_15");

// THE.addEventListener("click", () => {
//   timeH.style.display = "block";
//   be_back.style.display = "block";
//   // get time back
//   var date = new Date();
//   var current_time = `${
//     date.getHours() + Math.floor(fiveteenThe / (60 * 60))
//   } : ${date.getMinutes() + Math.floor((fiveteenThe / 60) % 60)} : ${(
//     date.getSeconds() + fiveteenThe )% 60
//   }`;
//   document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

//   if (countDown != null) {
//     clearInterval(countDown);
//   }
//   countDown = setInterval(() => {
//     fiveteenThe--;
//     displayTime(fiveteenThe);
//     if (fiveteenThe <= 0 || fiveteenThe < 1) {
//       endTime();
//       document.location.reload()
//       clearInterval(countDown);
//     }
//   }, 1000);
// });

// // PETIT Dejeuner
// let petitDejeuner = 20 * 60 + 1;
// const PETIT_DEJEUNER = document.getElementById("PETIT_DEJEUNER_20");

// PETIT_DEJEUNER.addEventListener("click", () => {
//   timeH.style.display = "block";
//   be_back.style.display = "block";

//   // get time back
//   var date = new Date();
//   var current_time = `${
//     date.getHours() + Math.floor(petitDejeuner / (60 * 60))
//   } : ${date.getMinutes() + Math.floor((petitDejeuner / 60) % 60)} : ${
//     (date.getSeconds() + petitDejeuner) % 60
//   }`;
//   document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

//   if (countDown != null) {
//     clearInterval(countDown);
//   }
//   countDown = setInterval(() => {
//     petitDejeuner--;
//     displayTime(petitDejeuner);
//     if (petitDejeuner <= 0 || petitDejeuner < 1) {
//       endTime();
//       document.location.reload()
//       clearInterval(countDown);
//     }
//   }, 1000);
// });

// //Dejeuner
// let dejeuner = 30 * 60 + 1;
// const DEJEUNER = document.getElementById("DEJEUNER_30");

// DEJEUNER.addEventListener("click", () => {
//   timeH.style.display = "block";
//   be_back.style.display = "block";

//   // get time back
//   var date = new Date();
//   var current_time = `${date.getHours() + Math.floor(dejeuner / (60 * 60))} : ${
//     date.getMinutes() + Math.floor((dejeuner / 60) % 60)
//   } : ${ (date.getSeconds() + dejeuner  ) % 60}`;
//   document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

//   if (countDown != null) {
//     clearInterval(countDown);
//   }
//   countDown = setInterval(() => {
//     dejeuner--;
//     displayTime(dejeuner);
//     if (dejeuner <= 0 || dejeuner < 1) {
//       endTime();
//       document.location.reload()
//       clearInterval(countDown);
//     }
//   }, 1000);
// });

// // input

// const form = document.querySelector("#input-box");
// const input = document.querySelector("#input-number");
// form.addEventListener("submit", (e) => {
  
//   timeH.style.display = "block";
//   be_back.style.display = "block";
//   e.preventDefault();
//   if (countDown != null) {
//     clearInterval(countDown);
//   }
//   let inputVal = input.value * 60 + 1;
//   input.value = ""
//   // get time back
//   var date = new Date();
//   var current_time = `${
//     date.getHours() + Math.floor((inputVal / (60 * 60)) % 24)
//   } : ${date.getMinutes() + Math.floor((inputVal / 60) % 60)} : ${
//     (date.getSeconds() + inputVal) % 60
//   }`;
//   document.getElementById("P1").innerHTML = "Be Back At  " + current_time;
//   countDown = setInterval(() => {
//     inputVal--;
//     displayTime(inputVal);
//     if (inputVal <= 0 || inputVal < 1) {
//       endTime();
//       document.location.reload()
//       clearInterval(countDown);
//     }
//   }, 1000);
// });

// // function Time
// function displayTime(second) {
//   var hrs = Math.floor(second / (60 * 60));
//   var min = Math.floor((second / 60) % 60);
//   var sec = second % 60;
//   timeH.innerHTML = `${hrs < 10 ? "0" : ""}${hrs}:${
//     min < 10 ? "0" : ""
//   }${min}:${sec < 10 ? "0" : ""}${sec} `;
// }

// // endTime function
// function endTime() {
//   timeH.style.display = "none";
//   be_back.style.display = "none";
// }


// function filterProduct(value) {
//   // button class code
//   let buttons = document.querySelectorAll(".tab-btn");
//   buttons.forEach((button) => {
//     //chek if value equals innnerText
//     if (value.toUpperCase() == button.innerText.toUpperCase()) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
// }
