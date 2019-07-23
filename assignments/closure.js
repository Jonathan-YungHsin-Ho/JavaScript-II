// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const secretPassword = password => {
  console.log('I shall never reveal this password!');
  
  const snitch = () => 'Psst... the password is ' + password;
  return snitch;
}

const secret = secretPassword('abc123');

console.log(secret());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {count++; console.log(count);};
};
// Example usage:
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment: () => {
      let count = 0;
      return () => console.log(count++);
    },
    decrement: () => {
      let count = 0;
      return () => console.log(count--);
    }
  };
};

const incrementer = counterFactory().increment();
const decrementer = counterFactory().decrement();

incrementer();
incrementer();
incrementer();

decrementer();
decrementer();
decrementer();

