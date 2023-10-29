function calculateAgeAndTimeSinceBirth() {
  const birthdate = new Date(2002, 8, 21); // JavaScript months are 0-based (0-11)

  setInterval(function() {
    const current_time = new Date();
    const time_difference = current_time - birthdate;
    const years = Math.floor(time_difference / (365 * 24 * 60 * 60 * 1000));
    if(years<10){
        document.getElementById("years").innerHTML = "0"+years+":";
    }
    else{
        document.getElementById("years").innerHTML = years+":";
    }
    const total_seconds = Math.floor(time_difference / 1000);

    const age_in_seconds = years * 365 * 24 * 60 * 60;
    const difference_in_seconds = total_seconds - age_in_seconds;

    let minutes = Math.floor(difference_in_seconds / 60);
    let seconds = difference_in_seconds % 60;
    if(seconds<10){
        document.getElementById("seconds").innerHTML = "0"+seconds+":";
    }
    else{
        document.getElementById("seconds").innerHTML = seconds+":";
    }
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    if(minutes<10){
        document.getElementById("minutes").innerHTML = "0"+minutes+":";
    }
    else{
        document.getElementById("minutes").innerHTML = minutes+":";
    }
    let days = Math.floor(hours / 24);
    if(days<10){
        document.getElementById("days").innerHTML = "0"+days+":";
    }
    else{
        document.getElementById("days").innerHTML = days+":";
    }
    hours = hours % 24;
    if(hours<10){
        document.getElementById("hours").innerHTML = "0"+hours+":";
    }
    else{
        document.getElementById("hours").innerHTML = hours+":";
    }
    const milliseconds = time_difference % 1000;
    if(milliseconds<10){
        document.getElementById("milliseconds").innerHTML = "00"+milliseconds;
    }
    else if(milliseconds<100){
        document.getElementById("milliseconds").innerHTML = "0"+milliseconds;
    }
    else{
        document.getElementById("milliseconds").innerHTML = milliseconds;
    }
    //console.log(milliseconds);
    
    //console.log(`You are ${years} years old, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds have passed since your birth.`);

}, 1); // Update every 1 second
}

calculateAgeAndTimeSinceBirth()