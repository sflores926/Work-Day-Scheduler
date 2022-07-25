//function for current day and time
$('#currentDay').html(moment().format('LLLL'));


$(document).ready(function() {
//assigned variables

var saveBtn = $(".saveBtn");
// var time = $(".time-block");


//time block to indicate if the event is in the past, present, and future
function timeBlock() {
    var hour = moment().hours();

    //loop to c
    $(".time-block").each(function () {
        var currentHr = parseInt($(this).attr("id"));
        
        if (hour > currentHr) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (hour === currentHr) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        
    })
};
// console.log(timeBlock);
// timeBlock();


// save button listener
saveBtn.on("click", function () {

    var hour = $(this).siblings(".hour").text();
    var text = $(this).siblings(".text").val();

    localStorage.setItem(hour, text);

// console.log(this);
// console.log(hour,text);
// console.log(text);
});
// console.log(saveBtn);


// console.log(saveBtn);

//to get item from local storage
function eventPlanner() {
    $(".hour").each(function () {
        var currentHr = $(this).text();
        var planner = localStorage.getItem(currentHr);

        if(currentHr !== null) {
            $(this).siblings(".text").val(planner);
        }

    });

  timeBlock(); 
}

eventPlanner();



});
