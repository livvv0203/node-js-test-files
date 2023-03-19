let myName = 'Olivia';
let age = 12;
let isRunning = true;

const summarizeUser = (userName, userAge, userActivity) => {
  return (
    'User name is: ' +
    userName +
    ' Age is: ' +
    userAge +
    ' is moving: ' +
    userActivity
  );
};

console.log(summarizeUser(myName, age, isRunning));

const addup = (a, b) => a + b;

console.log(addup(2, 3));
