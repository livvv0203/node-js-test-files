const { get } = require('lodash');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Shifting means remove a node at the beginning of the list
  shift() {
    // Handle edge cases
    if (this.length === 0) return 'List is empty';

    // Store the current head in a variable
    let oldHead = this.head;

    if (this.length === 1) {
      // Remove the only node, to make it an empty list
      this.head = null;
      this.tail = null;
    } else {
      // Update the head to the next node
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
    }

    return oldHead;
  }

  // Create a new node with value that is passed in as a parameter, to the beginning of the list
  unshift(value) {
    let newNode = new Node(value);
    console.log(newNode.value);
    // Length is 0, set both head and tail to the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Looking for the value at given index
  get(index) {
    if (index < 0 || index >= this.length) return 'Index our of range!';
    let count = 0;
    let current = this.head;
    while (count != index) {
      console.log('Value is: ' + current.value);
      current = current.next;
      console.log('Now Value is: ' + current.value);
      count++;
    }
    console.log(current.value);
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      console.log('Setting: ' + index + ' node as ' + value);
      return true;
    }
    return false;
  }
}

let DLL = new DoublyLinkedList();
DLL.unshift(8);
DLL.unshift(16);
DLL.unshift(32);

// console.log(DLL);
console.log(DLL.get(1));
// 32 -> 16 -> 8
DLL.set(0, 10);
console.log(DLL); 





