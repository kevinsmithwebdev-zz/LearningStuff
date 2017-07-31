/* This code simply outputs the square of 100, but in the real world it could be a module that adds a method to some prototype or sets up a widget on a web page. It is wrapped in a function to prevent the variables it uses internally from polluting the global scope.

Why did we wrap the namespace function in a pair of parentheses? This has to do with a quirk in JavaScript’s syntax. If an expression starts with the keyword function, it is a function expression. However, if a statement starts with function, it is a function declaration, which requires a name and, not being an expression, cannot be called by writing parentheses after it. You can think of the extra wrapping parentheses as a trick to force the function to be interpreted as an expression. */

(function() {
  function square(x) { return x * x; }
  var hundred = 100;

  console.log(square(hundred));
})();
// 10000