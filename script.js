$(document).ready(function() {
  
    // moment.js time update
    var update = function() {
      document.getElementById("currentDay")
      .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);
   
    // Get save button to add input text to local storage
    $(".savebutton").on("click", function() {
      
      var input = $(this).siblings(".form-control").val();
      var hour = $(this).siblings().attr("id");

      localStorage.setItem(hour, input);
    });

    // Setting input area for each hour to local storage
    $("#to-do8").val(localStorage.getItem("hour8"));
    $("#to-do9").val(localStorage.getItem("hour9"));
    $("#to-do10").val(localStorage.getItem("hour10"));
    $("#to-do11").val(localStorage.getItem("hour11"));
    $("#to-do12").val(localStorage.getItem("hour12"));
    $("#to-do13").val(localStorage.getItem("hour13"));
    $("#to-do14").val(localStorage.getItem("hour14"));
    $("#to-do15").val(localStorage.getItem("hour15"));
    $("#to-do16").val(localStorage.getItem("hour16"));
    $("#to-do17").val(localStorage.getItem("hour17"));
    $("#to-do18").val(localStorage.getItem("hour18"));
  
  

  })