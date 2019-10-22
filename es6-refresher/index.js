// var -> function scope
// let -> block scope
// const -> block scope

function sayHello() {
  // for (var i = 0; i < 5; i++) {
  //   console.log(i);
  // }
  // console.log(i); // 5

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // Error i isn't defined
}
sayHello();
