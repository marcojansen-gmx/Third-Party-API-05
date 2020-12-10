$(document).ready(function () {

  // variables and array
  let hours = ["hour8", "hour9", "hour10", "hour11", "hour12", "hour13", "hour14", "hour15", "hour16", "hour17", "hour18"];
  let toDo = ["#to-do8", "#to-do9", "#to-do10", "#to-d11", "#to-do12", "#to-do13", "#to-do14", "#to-do15", "#to-do16", "#to-do17", "#to-do18"];
  let times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  // moment.js date/time request
  var update = function () {
    document.getElementById("currentDay")
      .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }
  setInterval(update, 1000);

  var div = $("<div class='row'>");

  // for loop to add HTML table and content
  for (var i = 0; i < times.length; i++) {
    var div = $("<div class='row'>");

    const time = times[i];

    div.html(`
    <div class="col-sm-1" id="hour${time}">
    ${time}:00 AM
    </div>
    <input type="text" class="form-control col-sm-10" id="to-do${time}">
    <div class="btn btn-primary savebtn"><i class="far fa-calendar-alt"></i></div>`);
    $(".container").append(div);

  }

  // Get save button to add input text to local storage
  $(".savebtn").on("click", function () {

    let input = $(this).siblings(".form-control").val();
    let hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  // Setting input area for each hour to local storage
  for (let i = 0; i < hours.length; i++) {

    $(toDo[i]).val(localStorage.getItem(hours[i]));
  };

  // simplify code for color coding 

  // Color coding present, past, and future hours
  for (let index = 0; index < times.length; index++) {
    const time = times[index];
    const elId = "#hour" + time;
    if ((moment().format("H")) > i) {
      $(elId).css("background-color", "gray");
    } else if ((moment().format("H")) < i) {
      $(elId).css("background-color", "rgb(83, 172, 105)");
    } else if ((moment().format("H")) == i) {
      $(elId).css("background-color", "red");
    } else {
      alert('Error');
    }

  }

})