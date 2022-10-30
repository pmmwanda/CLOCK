setInterval(displayTime, 1000);
function displayTime() {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", { months: "Long" });
    let year = timeNow.getFullYear();
    let period = "AM";
    if (hoursOfDay > 12) {
        hoursOfDay -= 12;
        period = "pm"
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12
        period = "AM"
    }
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;
    document.getElementById('Clock').innerHTML = time + "" + today + "" + months + "" + year;



}

displayTime();
