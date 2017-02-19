var words = ['a', 'b', 'c', 'd'];
var reverse_words = [];
function reverse(words){
  if (words.length > 0){
    reverse_words.push(words.pop());
    reverse(words);
  }
  return reverse_words;
}
console.log(reverse(words))
