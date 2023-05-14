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

  
}

var l = new SinglyLinkedList();
l.push(1);
l.push(2);
l.push(3);
l.pop();
