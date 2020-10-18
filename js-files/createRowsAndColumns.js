//array of working hour time.
const workingHoursDisplayedOnWebsite = ['9AM', '10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']
const tableContainer = $(".container");
let individualRow;


//creating the grid system on the programmatically.
$(document).ready(function(){
for(workingHourDisplayedOnWebsite of workingHoursDisplayedOnWebsite)
{
  individualRow = "<div class= 'row time-block'>"
  individualRow+="<div class='col-md-1 hour' id='hour'>"+"<strong>"+workingHourDisplayedOnWebsite+"</strong>"+"</div>";                  
  individualRow+="<textarea class='col-md-10 description blockrow'>"+"</textarea>";
  individualRow+="<button class='col-md-1 btn saveBtn'>"+"<i class='fas fa-save i:hover'>"+"</i>"+"</button>";
  individualRow+="</div>"
  tableContainer.append(individualRow);
  setBackGroundTaskColor();
}

function setBackGroundTaskColor()
{
  let allMyRows = $(".description");
  for(eachRow of allMyRows){
  let taskTimeOnWebSite = $(eachRow).siblings("#hour").text();
   switch(taskTimeOnWebSite)
   { 
    case "9AM":
      startTimeSupplied = '09:00:00';
      endTimeRange = '09:59:59';
      break;

     case "10AM":
      startTimeSupplied = '10:00:00';
      endTimeRange = '10:59:59';
      break;

    case "11AM":
      startTimeSupplied = '11:00:00';
      endTimeRange = '11:59:59';
      break;
    
    case "12PM":
      startTimeSupplied = '12:00:00';
      endTimeRange = '12:59:59';
      break;

    case "1PM":
      startTimeSupplied = '13:00:00';
      endTimeRange = '13:59:59';
      break;

    case "2PM":
      startTimeSupplied = '14:00:00';
      endTimeRange = '14:59:59';
      break;

    case "3PM":
      startTimeSupplied = '15:00:00';
      endTimeRange = '15:59:59';
      break;

    case "4PM":
      startTimeSupplied = '16:00:00';
      endTimeRange = '16:59:59';
      break;

      case "5PM":
        startTimeSupplied = '17:00:00';
        endTimeRange = '17:59:59';
        break;

      default:
        console.log("Oops no matching time in the switch case!!")
        break;
   }
   let startTimeHour = moment(startTimeSupplied, 'HH:mm:ss');
   let endTimeHour = moment(endTimeRange, 'HH:mm:ss');
   let getCurrentTime = moment().format('HH:mm:ss');
   let checkCurrentTime = moment(getCurrentTime, 'HH:mm:ss');  
   if(moment(checkCurrentTime).isBefore(startTimeHour))
   {
    $(eachRow).addClass("future").removeClass("past present");
   }else if(moment(checkCurrentTime).isBetween(startTimeHour, endTimeHour)){
      $(eachRow).addClass("present").removeClass("past future");
   }else if(moment(checkCurrentTime).isAfter(endTimeHour)){
     $(eachRow).addClass("past").removeClass("present future"); 
   }
   else{
     console.log("OOOOOoooooooooops an error occur. No time within the time specified.")
   }
  }
}

//onclick event for saving the inputted task.
$(".saveBtn").on("click", function(){
  let data = $(this).siblings(".description").val();
  let keyValue = $(this).siblings(".description").siblings("#hour").text();
  keyValue = keyValue+="Task";
  console.log("Key:",keyValue,"- value:",data)
  localStorage.setItem(keyValue, data);
});


//calling data persist function.
dataPersist();

 //function to persist data.
 function dataPersist(){
  let AllRowsInScope = $(".description");
  for(rowInScope of AllRowsInScope)
  {
    let keyValue = $(rowInScope).siblings("#hour").text();
    keyValue = keyValue+="Task";
    if(localStorage.getItem(keyValue) == null)
    {
      return;
    }
    if (keyValue != null){
      let val = localStorage.getItem(keyValue);
      $(rowInScope).val(val);
    } 
  }
}
});







































/*
//I have implemented a better way for time comparison so function is now obsolete.
//need to find better ways of doing time comparison
function setBackgroundColour(workingHourDisplayedOnWebsite){
  //setBackGroundTaskColor();
  let allMyRows = $(".blockrow");
  let startTimeSupplied;
  let endTimeRange;
  switch(workingHourDisplayedOnWebsite)
  {
    case "9AM":
      startTimeSupplied = '09:00:00';
      endTimeRange = '09:59:59';
      break;

    case "10AM":
      startTimeSupplied = '10:00:00';
      endTimeRange = '10:59:59';
      break;

    case "11AM":
      startTimeSupplied = '11:00:00';
      endTimeRange = '11:59:59';
      break;
    
    case "12PM":
      startTimeSupplied = '12:00:00';
      endTimeRange = '12:59:59';
      break;

    case "1PM":
      startTimeSupplied = '01:00:00';
      endTimeRange = '01:59:59';
      break;

    case "2PM":
      startTimeSupplied = '02:00:00';
      endTimeRange = '02:59:59';
      break;

    case "3PM":
      startTimeSupplied = '03:00:00';
      endTimeRange = '03:59:59';
      break;

    case "4PM":
      startTimeSupplied = '04:00:00';
      endTimeRange = '04:59:59';
      break;

      case "5PM":
        startTimeSupplied = '05:00:00';
        endTimeRange = '05:59:59';
        break;
   
    default:
      console.log("Oops no matching time in the switch case!!")
      break;
  }
  for(eachRow of allMyRows)
  {
     let timeNowAfterConvertion = moment().valueOf();
     let workingHourAfterConversion = moment(startTimeSupplied, 'hh:mm:ss').valueOf();
     if(timeNowAfterConvertion > workingHourAfterConversion){
        $(eachRow).addClass("past");
     }else if(timeNowAfterConvertion === workingHourAfterConversion){
      $(eachRow).removeClass("past");
      $(eachRow).addClass("present");
     }else {
      $(eachRow).removeClass("past");
      $(eachRow).removeClass("present");
      $(eachRow).addClass("future");
     }
  } 
  
}
*/