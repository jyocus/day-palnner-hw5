// Psuedo Code 
// - First create time blocks in html, can leverage bootstrap for easier formatting 
// - Add current date, can use moment.js for formatting, need this date and time to be able to reference on the rest of the script
// - Variables declared for current date, individual time blocks, variables to use exisiting css classes and ids
// - Can potentially add classes for past, present and future times and then build a function to add those classes for color change
    // if (time=id) .attr(#present) ... and so forth
// - Need to add local storage so the page saves tasks upon refresh - use localStorage.getItem 

//the .ready in jquery allows js code to run as soon as the DOM is safe to manipulate https://api.jquery.com/ready/ 
$(document).ready(function(){
    if(!localStorage.getItem('timeBlocks')) {
      updateCalendarTasks(timeBlocks);
    } else {
      updateCalendarTasks(JSON.parse(localStorage.getItem('timeBlocks')));
    }
  })

//Pre-established ID for the current time on provided HTML - Need "let" since the date will change? Const gave me an error
let currentDay = $("#currentDay");
currentDay = moment().format('MM-DD-YYYY'); // https://www.sitepoint.com/managing-dates-times-using-moment-js/
$("#currentDay").text(currentDay);

//Array of objects with empty values for each time in calendar - empty values will be replaced by a number for local storage to access 
let timeBlocks = {
    "8:00 AM": "",
    "9:00 AM" : "",
    "10:00 AM": "",
    "11:00 AM": "",
    "12:00 PM": "",
    "1:00 PM": "",
    "2:00 PM": "",
    "3:00 PM": "",
    "4:00 PM": "",
    "5:00 PM": "",
}

// Tried using parseInt() but this function does not give me the output I need, referenced another project to understand the switch function
// Ex: parseInt (8:00 AM, 8)
function stringToNumber(timeString) {
    switch(timeString) {
        case  "8:00 AM": return 8;
        case  "9:00 AM": return 9;
        case "10:00 AM": return 10;
        case "11:00 AM": return 11;
        case "12:00 PM": return 12;
        case "1:00 PM": return 13;
        case "2:00 PM": return 14;
        case "3:00 PM": return 15;
        case "4:00 PM": return 16;
        case "5:00 PM": return 17;
    }
}

//Within this loop I understand that we need to define new IDs so that they can be compared, then using moment.js can compare the times on the calendar with the actual time
let counter = 1
for(const property in timeBlocks) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    //The for...in statement will go through the timeBlocks object and the output will be logged as the object and it's value
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(timeBlocks[property]);
    let timeId = "#time" + counter;
    let presentHour = moment().hour();
    let timeString = $(timeId).text();
    let timeNumber = stringToNumber(timeString);  
    if(timeNumber < presentHour) { // conditionals for the current time against the time on the calendar to decide which class to add
      $(textEntry).addClass("past");
    } else if (timeNumber > presentHour) {
      $(textEntry).addClass("future");
    } else {
      $(textEntry).addClass("present");
    }
    counter ++; // This allows for the increment of the counter so it loops through each row
  }

// for above tried something similar that I found on stackoverflow but had difficulty https://stackoverflow.com/questions/38899291/jquery-highlight-row-within-specific-time
//$('#timeTable .dateRow').each(function () {
//     var startTime = $(this).closest("div").find("#time-1") .text();
//     var endTime = $(this).closest("div").find("#time-2").text();
//     if (moment().>(startTime)) {
//         $(this).addClass('past'); 
//     } 
//   });

$("button").click(function() {
    value = $(this).siblings("textarea").val();
    timestring = $(this).siblings("div").text();

    //need to add function below to call here
});


//This will got through each ".cal-row" class in the html and find the children div and textareas for each row 
function updateCalendarTasks(dayObject) {
    $(".cal-row").each(function(index) {
        let res = $(this).children("div");
        $(this).children("textarea").text(dayObject[res.text()]);
    })
}