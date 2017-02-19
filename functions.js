// Notes
// JavaScript provides the means to define both value-returning functions and
// functions that don’t return values (sometimes called subprocedures or void functions).
// All function parameters in JavaScript are passed by value,
// and there are no reference parameters.
// However, there are reference objects, such as arrays, which are passed to functions by reference
function factorial(number){
  var product = 1
  // set i = number and iterate until i is greater than = number; decrease i by 1 in each iteration
  for (var i = number; i >= number; i--){
    product = product * i;
  }
  return product;
}
console.log(factorial(5));


function curve(array, amount){
  for (var i = 0; i < array.length; ++i){
    array[i] += amount;
  }
  return array
}
grades = [13, 14, 15];
console.log(curve(grades, 10));
