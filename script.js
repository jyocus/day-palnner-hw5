// Psuedo Code 
// - First create time blocks in html, can leverage bootstrap for easier formatting 
// - Add current date, can use moment.js for formatting, need this date and time to be able to reference on the rest of the script
// - Variables declared for current date, individual time blocks, variables to use exisiting css classes and ids
// - Can potentially add classes for past, present and future times and then build a function to add those classes for color change
    // if (time=id) .attr(#present) ... and so forth
// - Need to add local storage so the page saves tasks upon refresh - use localStorage.getItem 



//Pre-established ID for the current time on provided HTML
let currentDay = $("#currentDay");
currentDay = moment().format('MM-DD-YYYY'); // https://www.sitepoint.com/managing-dates-times-using-moment-js/
$("#currentDay").text(currentDay);

