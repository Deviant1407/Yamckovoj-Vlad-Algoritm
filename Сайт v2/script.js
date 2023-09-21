let blok_1 = document.getElementById("history");
let Active_blok_1 = false;

let blok_2 = document.getElementById("night_sity");
let Active_blok_2 = false;

let blok_3 = document.getElementById("red_square");
let Active_blok_3 = false;

let blok_4 = document.getElementById("moscow_river");
let Active_blok_4 = false;

let blok_5 = document.getElementById("church");
let Active_blok_5 = false;

let blok_6 = document.getElementById("museums");
let Active_blok_6 = false;

let blok_7 = document.getElementById("theatres");
let Active_blok_7 = false;

let blok_8 = document.getElementById("about_the_team");
let Active_blok_8 = false;

function open_1() {
    if (Active_blok_1 == false) {
        blok_1.classList.remove("close");
        blok_2.classList.add("close");
        blok_3.classList.add("close");
        blok_4.classList.add("close");
        blok_5.classList.add("close");
        blok_6.classList.add("close");
        blok_7.classList.add("close");
        blok_8.classList.add("close");
        Active_blok_1 = true;
    }
    else if (Active_blok_1 == true) {
        blok_1.classList.add("close");
        Active_blok_1 = false;
    }
    
}
function open_2 () {
    if (Active_blok_2 == false) {
        blok_2.classList.remove("close");
        blok_1.classList.add("close");
        blok_3.classList.add("close");
        blok_4.classList.add("close");
        blok_5.classList.add("close");
        blok_6.classList.add("close");
        blok_7.classList.add("close");
        blok_8.classList.add("close");
        Active_blok_2 = true;
    }
    else if (Active_blok_2 == true) {
        blok_2.classList.add("close");
        Active_blok_2 = false;
    }
}
function open_3 () {
    if (Active_blok_3 == false) {
        blok_3.classList.remove("close");
        blok_1.classList.add("close");
        blok_2.classList.add("close");
        blok_4.classList.add("close");
        blok_5.classList.add("close");
        blok_6.classList.add("close");
        blok_7.classList.add("close");
        blok_8.classList.add("close");
        Active_blok_3 = true;
    }
    else if (Active_blok_3 == true) {
        blok_3.classList.add("close");
        Active_blok_3 = false;
    }
}
function open_4 () {
    if (Active_blok_4 == false) {
        blok_4.classList.remove("close");
        blok_1.classList.add("close");
        blok_2.classList.add("close");
        blok_3.classList.add("close");
        blok_5.classList.add("close");
        blok_6.classList.add("close");
        blok_7.classList.add("close");
        blok_8.classList.add("close");
        Active_blok_4 = true;
    }
    else if (Active_blok_4 == true) {
        blok_4.classList.add("close");
        Active_blok_4 = false;
    }
}
function open_5 () {
    if (Active_blok_5 == false) {
        blok_5.classList.remove("close");
        blok_1.classList.add("close");
        blok_2.classList.add("close");
        blok_3.classList.add("close");
        blok_4.classList.add("close");
        blok_6.classList.add("close");
        blok_7.classList.add("close");
        blok_8.classList.add("close");
        Active_blok_5 = true;
    }
    else if (Active_blok_5 == true) {
        blok_5.classList.add("close");
        Active_blok_5 = false;
    }
}
function open_6 () {
    if (Active_blok_6 == false) {
        blok_6.classList.remove("close");
        blok_1.classList.add("close");
        blok_2.classList.add("close");
        blok_3.classList.add("close");
        blok_4.classList.add("close");
        blok_5.classList.add("close");
        blok_7.classList.add("close");
        blok_8.classList.add("close");
        Active_blok_6 = true;
    }
    else if (Active_blok_6 == true) {
        blok_6.classList.add("close");
        Active_blok_6 = false;
    }
}
function open_7 () {
    if (Active_blok_7 == false) {
        blok_7.classList.remove("close");
        blok_1.classList.add("close");
        blok_2.classList.add("close");
        blok_3.classList.add("close");
        blok_4.classList.add("close");
        blok_5.classList.add("close");
        blok_6.classList.add("close");
        blok_8.classList.add("close");
        Active_blok_7 = true;
    }
    else if (Active_blok_7 == true) {
        blok_7.classList.add("close");
        Active_blok_7 = false;
    }
}
function open_8 () {
    if (Active_blok_8 == false) {
        blok_8.classList.remove("close");
        blok_1.classList.add("close");
        blok_2.classList.add("close");
        blok_3.classList.add("close");
        blok_4.classList.add("close");
        blok_5.classList.add("close");
        blok_6.classList.add("close");
        blok_7.classList.add("close");
        Active_blok_8 = true;
    }
    else if (Active_blok_8 == true) {
        blok_8.classList.add("close");
        Active_blok_8 = false;
    }
}

let clock = document.getElementById("clock");

function updateTime () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;

    clock.innerHTML = timeString;
}

setInterval(updateTime, 1000);
updateTime();

