function Grades(){
  this.data = [];
  this.add = add;
  this.average = average;
  this.allData = allData;
}

function add(data){
  this.data.push(data);
}
function allData(){
  return this.data;
}
function average(){
  var total = 0;
  for(var i = 0; i < this.data.length; i++){
    total += this.data[i];
  }
  average = total/this.data.length;
  return average;
}
grade = new Grades;
grade.add(10);
grade.add(20);
grade.add(30);
console.log(grade.allData());
console.log(grade.average());
