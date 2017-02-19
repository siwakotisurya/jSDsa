var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
var total = 0;
var average = [];
function gradesTotalAverage(grades){
  var singleTotal = 0;
  for(var i = 0; i < grades.length; i++){
    for (var j = 0; j < grades[i].length; j++){
      total += grades[i][j];
    }
    average.push((total/grades[i].length).toFixed(2));
    total = 0;
  }
  console.log(average);
}
