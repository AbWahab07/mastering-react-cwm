const person = {
  // property
  name: "Abdul",
  // methods
  walk: function() {},
  // ES6 method syntax
  talk() {
    console.log(this);
  }
};
// when we call method on an object, this referes to the current object
person.talk(); // logs person object

const talk = person.talk;
// when we call a standalone function, this refers to the Window
talk(); // logs Window or undefined(if strict mode is enabled)
