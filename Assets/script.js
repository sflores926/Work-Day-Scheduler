//function for current day and time
$('#currentDay').html(moment().format('LLLL'));


//assigned variables

var saveBtn = $(".saveBtn");
var time = $(".time-block");


//time block to indicate if the event is in the past, present, and future
function timeBlock() {
    var hours = moment().hours();


    //loop
    time.each(function () {
        var currentHr = parseInt($(this).attr("id"));
        // console.log(time.each);
        if (currentHr < hours) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentHr === hours) {
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

//to have event saved in local storage not be erased
function eventPlanner() {
    $(".hour").each(function () {
        var currentHr = $(this).text();
        var planner = localStorage.getItem(currentHr);


    });

  timeBlock();  
}

eventPlanner();




