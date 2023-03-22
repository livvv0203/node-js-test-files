const fetchData = (callback) => {
  setTimeout(() => {
    callback('Done');
  }, 1500);
};

// async code
setTimeout(() => {
  console.log('Test Test');
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

// sync code
console.log('hi'); // no delay

