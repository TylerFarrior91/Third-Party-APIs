$(function () {

    $(".saveBtn").on("click", function () {

        var description = $(this).prev().val();

        var timeBlockID = $(this).parent().attr("id");

        localStorage.setItem(timeBlockID, description);
    });


    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id").split("-")[1]);

        if (hour < currentHour) {
            $(this).addClass("past");
        } else if (hour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });

    $(".time-block").each(function () {
        var timeBlockID = $(this).attr("id");
        var description = localStorage.getItem(timeBlockID);

        if (description) {
            $(this).find("textarea").val(description);
        }
    });

    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
});
$(".saveBtn").on("click", function () {

});

