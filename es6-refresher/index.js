const square = function(name) {
  return number * number;
};

const squareArr = number => {
  return number * number;
};

// if there is one parameter, we can remove the parenthesis
// if body of the function contains only one statement then
// we can remove the curly braces as well as the return keyword
const squareArrow = number => number * number;
console.log(squareArrow(5));

// Usage
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

const inActiveJobs = jobs.filter(job => !job.isActive);

console.log(activeJobs);
console.log(inActiveJobs);
