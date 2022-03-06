let seattle = document.getElementById("seattle");
let chicago = document.getElementById('chicago');
let nyc = document.getElementById('nyc');
let sydney = document.getElementById('sydney');
let tokyo = document.getElementById('tokyo');
let hcm = document.getElementById('hcm');
let shanghai = document.getElementById('shanghai');


const dateAndTime = new Date();
let month = dateAndTime.getMonth();
let day = dateAndTime.getDate();
let year = dateAndTime.getFullYear();
let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", 'September', 'October', 'November', 'December'];

// returns date in mm/dd/yyyy
for (let i=0; i<monthName.length; i++) {
    if (i == month){
        month = monthName[i];
    }
}
const date = month + " " + day + " , " + year;
document.getElementById('display-date').innerHTML = date;

// find time in hh : mm :: ss
// display AM or PM
let hour = dateAndTime.getHours();
let minute = dateAndTime.getMinutes();
let seconds = dateAndTime.getSeconds();
let dayOrNight = 'AM';
let currentTime;

//change from military time to normal time
function getTime(){
    seconds++;

    // clock part
    if (seconds > 59){
        seconds = 0;
        minute++;
    }
    if(minute > 59){
        minute = 0;
        hour++;
    }

    if (hour > 12) {
        hour -= 12;
        dayOrNight = 'PM';
    }

    if(hour == 0){
        hour = 12;
        dayOrNight = 'AM';
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    // fix minutes < 10

    setTimeout(getTime, 1000);

    currentTime = hour + " : " + minute + " : " + seconds + " "+ dayOrNight;

    document.getElementById('display-time').innerHTML = currentTime;
}

getTime();

