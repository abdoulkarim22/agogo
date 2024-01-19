
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