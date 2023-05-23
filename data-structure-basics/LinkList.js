/**
 * Piece of data -> value
 * reference to next node -> next
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // update current tail point to the new node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // traverse() {
  //     var current = this.head;
  //     while(current) {
  //         console.log(current.value);
  //         current = current.next;
  //     }
  // }

  pop() {
    if (!this.head) return undefined;
    // Loop through the list until reach the tail
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log(current);
    return current;
  }
  // removing a node from the beginning
  shift() {
    if (!this.head) return undefined;

    let shiftedHead = this.head;
    this.head = shiftedHead.next;
    this.length--;
    console.log(shiftedHead);
    return shiftedHead;
  }

  // adding a new node to the beginning of the Link list
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return 'Invalid index!';

    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // insert a new node
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return this.push(value);

    if (index === 0) this.unshift(value);

    // Otherwise
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // remove a node at a specific position
  remove(index) {
    // index is less than 0 or greater than length
    if (index < 0 || index > this.length) return 'Invalid index!';
    // index is same as (length - 1) -> pop, remove last item
    if (index === this.length - 1) return this.pop();
    // index is 0, shift
    if (index === 0) return this.shift();
    // otherwise, use the get method, access the node at index - 1, which is the prev node
    var previousNode = this.get(index - 1);
    var removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
 
    return removedNode;
  }

  // reverse the linked list
  reverse() {
    // first, we swap head and tail
    let current = this.head; // temp node to store head
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  // traverse the linked list and print the value
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

var l = new SinglyLinkedList();
l.push(1);
l.push(2);
l.push(3);

l.print();
// execute function
l.reverse();
l.print();
// console.log(JSON.stringify(l));
