/**
 * Object with key-value pairs
 * aka, property or field of the object
 */
const person = {
  name: 'Olivia',
  age: 12,
  greet: () => {
    console.log('Hi, I am: ' + this.name); // 'this' refers to the global scope of node runtime, to change, use traditional function syntax or bind()
  },
  // 'this' here refers to the current object: person
  greet_2() {
    console.log('Hi, I am: ' + this.name);
  }
};

// console.log(person);
// person.greet();
// person.greet_2();

const hobbies = ['Workout', 'Cooking'];

console.log(hobbies);

let n = 1;
for (let h of hobbies) {
    console.log('This is the: '+  n + 'th hobby: ' + h);
    n++;
}

const hobbiesModified = hobbies.map(hobby => 'Hobby: ' + hobby);
console.log(hobbiesModified);

// Primitive and Reference type recap in 2mins
// Object and arrays are ref types - Only store the address point to the place of the memory where array is stored, and the pointer is not changed by modify the elements   

/**
 * Spread
 */
const copiedHobby = hobbies.slice();
const copiedHobby2 = [...hobbies];
console.log(copiedHobby);
console.log(copiedHobby2);
/**
 * Rest
 */
 








