function Letter(){
  this.letter = [];
  this.add = addLetter;
  this.getWords = getWords;
}
function addLetter(letter){
  this.letter.push(letter);
}

function getWords(letter){
  this.letter.forEach(displayWords)
}

function displayWords(letter){
  console.log(letter);
}
letter = new Letter;
letter.add('a');
letter.add('n');
letter.add('o');
letter.add('n');
letter.getWords();
