var number = 1;
var sum = 0;
while(number < 10){
  sum += number;
  number++;
}
console.log(sum);
var number = 10;
var sum = 0;
for(var i = 0; i < number; i++){
  sum = sum + number;
}
console.log(sum);
var numbers = [1, 2, 3, 4];
var sum = 0;
for(var i = 0; i < numbers.length; ++i){
  sum = sum + numbers[i];
}
console.log(sum);
