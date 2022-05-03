function today () {
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(todayDate)
}
today()