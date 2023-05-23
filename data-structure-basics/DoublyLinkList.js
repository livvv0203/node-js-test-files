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
}

let node = new Node(2);
console.log(node);

let DLL = new DoublyLinkedList(5);
console.log(DLL);

