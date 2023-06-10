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

  // Push the node to the end of the list
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove a node at the end of the list
  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update the tail
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // Shifting means remove a node at the beginning of the list
  shift() {
    // Handle edge cases
    if (this.length === 0) return "List is empty";

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
    // console.log(newNode.value);
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
    if (index < 0 || index >= this.length) return "Index our of range!";
    let count = 0;
    let current = this.head;
    while (count != index) {
      // console.log("Value is: " + current.value);
      current = current.next;
      // console.log("Now Value is: " + current.value);
      count++;
    }
    // console.log(current.value);
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      console.log("Setting: " + index + " node as " + value);
      return true;
    }
    return false;
  }

  insert(index, value) {
    // check edge cases
    if (index < 0 || index >= this.length) return "Invalid index!";
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    // Otherwise, use the get method to find the node at (index - 1)
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    // Set of connections
    (prevNode.next = newNode), (newNode.prev = prevNode);
    (newNode.next = nextNode), (nextNode.prev = newNode);
    this.length++;
    return true;
  }

  traverse() {
    let i = 0;
    let currentNode = this.head;
    let arr = [];
    while (i < this.length) {
      // console.log(currentNode.value);
      arr.push(currentNode.value);
      currentNode = currentNode.next;
      i++;
    }
    console.log(arr);
  }

  remove(index) {
    // Edge cases
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // Otherwise, find prev of the index and remove
    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

let DLL = new DoublyLinkedList();
DLL.unshift(8);
DLL.unshift(16);
DLL.unshift(32);
DLL.push(64);

// 32 -> 16 -> 8
DLL.insert(2, "INSERTEDNODE");
DLL.insert(4, "NODEAT4");
DLL.remove(3);
DLL.traverse();
