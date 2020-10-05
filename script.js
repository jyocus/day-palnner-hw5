// Psuedo Code 
// - First create time blocks in html, can leverage bootstrap for easier formatting 
// - Add current date, can use moment.js for formatting, need this date and time to be able to reference on the rest of the script
// - Variables declared for current date, individual time blocks, variables to use exisiting css classes and ids
// - Can potentially add classes for past, present and future times and then build a function to add those classes for color change
    // if (time=id) .attr(#present) ... and so forth
// - Need to add local storage so the page saves tasks upon refresh - use localStorage.getItem 



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

