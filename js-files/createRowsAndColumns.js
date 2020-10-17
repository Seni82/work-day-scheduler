//array of working hour time.
const workingHours = ['9AM', '10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']
const tableContainer = $(".container");
let individualRow;


//creating the grid system on the programmatically.
$(document).ready(function(){
for(workingHour of workingHours)
{
  individualRow = "<div class= 'row time-block'>"
  individualRow+="<div class='col-md-1 hour' id='hour'>"+"<strong>"+workingHour+"</strong>"+"</div>";                  
  individualRow+="<textarea class='col-md-10 description blockrow'>"+"</textarea>";
  individualRow+="<button class='col-md-1 btn saveBtn'>"+"<i class='fas fa-save i:hover'>"+"</i>"+"</button>";
  individualRow+="</div>"
  tableContainer.append(individualRow);
  setBackgroundColour(workingHour);
}


//need to find better ways of doing time comparison
function setBackgroundColour(workingHour){
  let allMyRows = $(".blockrow");
  let timeSupplied;
  switch(workingHour)
  {
    case "9AM":
      timeSupplied = '09:00';
      break;

    case "10AM":
      timeSupplied = '10:00';
      break;

    case "11AM":
      timeSupplied = '11:00';
      break;
    
    case "12PM":
      timeSupplied = '12:00';
      break;

    case "1PM":
      timeSupplied = '01:00';
      break;

    case "2PM":
      timeSupplied = '02:00';
      break;

    case "3PM":
      timeSupplied = '03:00';
      break;

    case "4PM":
      timeSupplied = '04:00';
      break;

      case "5PM":
        timeSupplied = '05:00';
        break;
   
    default:
      console.log("Oops no matching time in the switch case!!")
      break;
  }
  for(eachRow of allMyRows)
  {
     let timeNowAfterConvertion = moment().valueOf();
     let workingHourAfterConversion = moment(timeSupplied, 'hh:mm').valueOf();
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

//onclick event for saving the inputted task.
 $(".saveBtn").on("click", function(){
      let currentRowInScope = $(this).siblings(".description");
      let data = $(currentRowInScope).val();
      let keyValue = $(this).siblings(".description").siblings("#hour").text();
      keyValue = keyValue+="Task";
      console.log("My key", keyValue, currentRowInScope, data)
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
