import Person from "./person";

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

export default Teacher;
