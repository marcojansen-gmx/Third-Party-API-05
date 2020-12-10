$(document).ready(function() {
  
    // moment.js time update
    var update = function() {
      document.getElementById("currentDay")
      .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);
   
 
  
  })