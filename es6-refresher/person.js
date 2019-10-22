class Person {
  constructor(name) {
    this.name = name;
  }

  // there is a single place we've to modify walk method
  // DRY code
  walk() {
    console.log("walk");
  }
}

export default Person;
