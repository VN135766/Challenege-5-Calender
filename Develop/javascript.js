function today () {
    var todayDate = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").html(todayDate)
}
today()

$(".saveBtn").on("click", function(event) {
var text = $(event.target).siblings(".description").val();



})