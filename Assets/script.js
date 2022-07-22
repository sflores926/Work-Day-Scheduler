//function for current day and time
function update() {
    $('#currentDay').html(moment().format('dddd. MMMM Do YYYY H:mm:ss'));
  }
  
  setInterval(update, 1000);

//assigned variables
var saveBtn = $(".saveBtn");

$(document).ready(function() { 
//time block to indicate if the event is in the past, present, and future
function timeBlock() {
    var hour = moment().hours();

    //loop
    $(".time-block").each(function() {
        var currentHr = parseInt($(this).attr("id"));
        
        if (currentHr < hour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentHr === hour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
 timeBlock();
//save button listener
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").val();
    var text = $(this).siblings(".text");

    localStorage.setItem(time, text);

});
console.log(saveBtn); 

});
