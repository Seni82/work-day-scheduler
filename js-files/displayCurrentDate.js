let currentDayElement;

let update = function(){
  const currentDate = moment().format('dddd, Do of MMMM YYYY, HH:mm:ssA');
  currentDayElement.text(currentDate);
};

$(document).ready(function(){
  currentDayElement = $("#currentDay");
  update();
  setInterval(update, 1000);
});
