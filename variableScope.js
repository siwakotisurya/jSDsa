// Notes
// Global variables can be declared at any place in a program, either before or after function definitions.

function showScope(){
  return scope;
}
var scope = 'global';
console.log(scope);
console.log(showScope());

function showMyScope(){
  var scope = 'I am inside function // Local Mode';
  return scope;
}
var scope = 'I am outside function // Global Mode';
console.log(scope);
console.log(showMyScope());
// Overusing global variables
function dangerScope(){
  scope = 'local with keyword var';
  return scope;
}
var scope = 'Outside of function';
console.log(scope);
console.log(dangerScope());
console.log(scope);

for(var i = 1; i <= 10; ++i){
  var anon = 'I am inside for loop';
  console.log("Hello, world!");
}
console.log(anon);
