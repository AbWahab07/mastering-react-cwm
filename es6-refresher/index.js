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

person.talk(); // logs person object

// binding this to person object
const talk = person.talk.bind(person);
talk(); // logs person object
