var mid = 25;
var high = 50; var low = 1;
var current = 13; var found = -1;
// if conditions
if (current < mid) {
   mid = (current-low) / 2;
}
console.log(mid);
// else if
var mid = 25;
var high = 50; var low = 1;
var current = 13; var found = -1;
if (current < mid){
  mid = (current-low) / 2;
}
else if (current > mid){
  mid = (current+high) / 2;
}
else{
  found = current;
}
console.log(mid);
var month = '12';
var monthName;
switch(month){
  case '1':
  monthName = 'January';
  console.log(monthName);
  break
  case '12':
  monthName = 'December';
  console.log(monthName);
  break;
  default:
  console.log('hello world');
}
