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

class ProductInfo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id;
  }

  trimName() {
    this.name = this.name.trim();
  }

  addUpSpecialChar() {
    this.age = '000-----' + this.age;
  }

  assignProductId() {
    this.id = 'NUM' + Math.floor(Math.random() * 100000000);
  }
}

let product = new ProductInfo('       Oli    ', 58);
product.trimName();
product.addUpSpecialChar();
product.assignProductId();
console.log(product);

let product_1 = new ProductInfo('Test Name       ', 3);
product_1.trimName();
product_1.addUpSpecialChar();
product_1.assignProductId();

console.log(product_1);
