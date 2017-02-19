function Calendar(){
  this.Month = [];
  this.addMonth = WeekMonth;
  this.average = average;
}
function addMonth(monthArray){
  this.Month.push(monthArray);
}
calendar = new Calendar;
calendar.addMonth([1,2]);
