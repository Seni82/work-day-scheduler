$(document).ready(function(){
const currentDayElement = $("#currentDay");
const currentDate = moment().format('dddd, Do of MMMM YYYY.');
console.log(currentDate);
currentDayElement.text(currentDate);
});