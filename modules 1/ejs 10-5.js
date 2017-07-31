/* For bigger modules, gathering all the exported values into an object at the end of the function becomes awkward since many of the exported functions are likely to be big and you’d prefer to write them somewhere else, near related internal code. A convenient alternative is to declare an object (conventionally named exports) and add properties to that whenever we are defining something that needs to be exported. In the following example, the module function takes its interface object as an argument, allowing code outside of the function to create it and store it in a variable. (Outside of a function, this refers to the global scope object.) */

(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});

console.log(weekDay.name(3));
// Wednesday

console.log(weekDay.number("Saturday"));
// 6