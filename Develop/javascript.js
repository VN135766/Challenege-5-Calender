function today () {
    var todayDate = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").text(todayDate)
}
today()