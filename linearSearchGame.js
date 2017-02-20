// with break
function linearSearch(guessNumber){
  var numbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
  var output;
  for(var i = 0; i < numbers.length; ++i){
    output = (guessNumber == numbers[i]) ? 'correct' : 'incorrect';
    break;
  }
  console.log(output);
}
// without break
function linearSearch(guessNumber){
  var numbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
  var output;
  for(var i = 0; i < numbers.length; ++i){
    output = (guessNumber == numbers[i]) ? 'correct' : 'incorrect';
  }
  console.log(output);
}
