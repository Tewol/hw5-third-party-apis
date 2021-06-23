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

    //console.log(currentHour);

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
}


//4. Should be able to enter an event by clicking inside the timeblock.

// done

//5. Event is saved in local storage when clicking save button for the timeblock.



//6. Refresing the page will save the events entered


calApperance();

})