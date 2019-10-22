const person = {
  talk() {
    setTimeout(function() {
      // we're calling a standalone function so 'this' isn't binded
      // in case of callback functions strict mode doesn't kicks in and we get 'Window' object
      console.log("this", this); // Logs 'Window' object
    }, 1000);
  }
};
person.talk();

const personArr = {
  talk() {
    setTimeout(() => {
      // passing an arrow function as a callback will inherit 'this' keyword
      console.log("this", this); // Logs personArr object
    }, 1000);
  }
};
personArr.talk();
