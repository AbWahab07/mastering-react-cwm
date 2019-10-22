// Spread Operator usage in Arrays
// const first = [ 1, 2, 3 ];
// const second = [ 4, 5, 6 ];
// const clone = [ ...first ];
// const combined = [ ...first, ...second ];

// Spread Operator usage in Objects
const first = { name: "Abdul" };
const second = { job: "Developer" };

const clone = { ...first }; // cloning an object
console.log(clone);

const combined = { ...first, ...second, location: "Aus" }; // combining two objects
console.log(combined);
