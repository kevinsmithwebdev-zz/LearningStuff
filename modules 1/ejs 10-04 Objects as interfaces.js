// Stored in an IIFE in an object, names still invisible

var weekDay = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(4));
// Thursday

console.log(weekDay.number("Monday"));
// 1

console.log(weekDay.names);
// undefined