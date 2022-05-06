function today() {
    var todayDate = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").html(todayDate);
}
today();

var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var text = $(this).siblings(".description").val();
    var index = $(this).siblings(".hour").text();
    console.log(text);
    localStorage.setItem(index, text);
}
);

function displayPlanner() {
    $(".hour").each(function () {
        var currentHourOnPlanner = $(this).text();
        var currentTask = localStorage.getItem(currentHourOnPlanner);
        if (currentTask != "") {
            $(this).siblings(".description").val(currentTask);
        }
    }
    )
}



displayPlanner();

