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

// Inheritane
class Teacher extends Person {
  constructor(name, degree) {
    super(name); // we must call the parent constructor otherwise there will be error
    this.degree = degree;
  }

  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Abdul", "Software");
teacher.walk(); // calling a method inherited from parent
