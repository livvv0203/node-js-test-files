function TestFunction() {
  for (var i = 0; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      console.log('J is: ' + j);
    }
    console.log('End ----> I is: ' + i);
  }
}

function AnotherFunction(content) {
  console.log('Calling Another Function: ' + content);
}

// TestFunction();
AnotherFunction('Test Test Test!!!');






