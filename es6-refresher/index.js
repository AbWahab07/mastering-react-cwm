const person = {
  // property
  name: "Abdul",
  // methods
  walk: function() {},
  // ES6 method syntax
  talk() {}
};

person.talk();
// you use bracket notation when you don't know ahead of time
// what property or mehtod you're going to access.
const targetMember = "name";
person[targetMember] = "John";
