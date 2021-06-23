// Use Moment.js to format the following variables:
$(document).ready(function(){

// 1. Current Day display at the top of the calander
var current = moment().format("MMM Do, YYYY");
$("#currentDay").text(current);


//2. scrolling down should present a timeblocks for business hours
    //Done

//3. Each timeblock is color coded to indicate the past, present, or future dates.
function calApperance() {

    //gets the current hour
    var currentHour = moment().hour();

     $(".row").each(function(){
        var hourElm = parseInt ($(this).attr("id"));
        
        if (hourElm < currentHour){
            $(this).removeClass(["present", "future"]);
            $(this).addClass("past");

        } else if (hourElm === currentHour){
            $(this).removeClass(["past", "future"]);
            $(this).addClass("present");

        }else{

            $(this).removeClass(["past", "present"]);
            $(this).addClass("future");
        }
    })

    saveNote();
}

//4. Should be able to enter an event by clicking inside the timeblock.
// done

//5. Event is saved in local storage when clicking save button for the timeblock.
//6. Refresing the page will save the events entered
function saveNote() {
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var note = $(this).siblings(".event").val();

        localStorage.setItem(time, note);
    }) 

    console.log(localStorage);

    $("#9 .event").val(localStorage.getItem("9"));
    $("#10 .event").val(localStorage.getItem("10"));
    $("#11 .event").val(localStorage.getItem("11"));
    $("#12 .event").val(localStorage.getItem("12"));
    $("#13 .event").val(localStorage.getItem("13"));
    $("#14 .event").val(localStorage.getItem("14"));
    $("#15 .event").val(localStorage.getItem("15"));
    $("#16 .event").val(localStorage.getItem("16"));
    $("#17 .event").val(localStorage.getItem("17"));
}


calApperance();

})