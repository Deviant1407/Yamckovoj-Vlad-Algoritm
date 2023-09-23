let clock = document.getElementById("clock");
let Data_T = document.getElementById("Data");

function updateTime () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let Day = now.getDate();
    let Month = now.getMonth();
    let Year = now.getFullYear();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;
    let DataString = Day + "." + Month + "." + Year;

    clock.innerHTML = timeString;
    Data_T.innerHTML = DataString;
}

setInterval(updateTime, 1000);
updateTime();

