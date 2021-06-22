// Use Moment.js to format the following variables:


// 1. Current Day display at the top of the calander
var current = moment().format("MMM D, YYYY");
$("#currentDay").text(current);


var events = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//2. scrolling down should present a timeblocks for business hours



//3. Each timeblock is color coded to indicate the past, present, or future dates.

var calApperance = function() {

    var currentHour = moment().hour();

    console.log(currentHour);

     $(".row").each(function(){
        var hourElm = parseInt ($(this).attr("id"));

        if (hourElm < currentHour){
            $(this).removeClass(["present", "future"]).addClass("past");

        } else if (hourElm === currentHour){
            $(this).removeClass(["papastst", "future"]).addClass("present");

        }else{

            $(this).removeClass(["past", "present"]).addClass("future");
        }

    })

   

};


//4. Should be able to enter an event by clicking inside the timeblock.


//5. Event is saved in local storage when clicking save button for the timeblock.


//6. Refresing the page will save the events entered



calApperance();
















