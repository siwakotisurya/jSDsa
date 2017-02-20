function inclusiverange(int1, int2){
  rangeArray = []
  for (var i = int1; i <= int2; ++i){
    rangeArray.push(i);
  }
  return rangeArray;
}
var numbers = inclusiverange(1, 10);
Array.prototype.sample = function() {
   return Math.floor(Math.random() * this.length);
};
function guessNumber(number){
  var sample = numbers.sample();
  var guess = (number == sample) ? 'correct' : 'incorrect';
  return console.log('your guess is ' + guess);
}
