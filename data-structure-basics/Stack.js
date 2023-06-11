// Stack - a collection of data
// Last in first out data structure
var stack = [];

stack.push("goodle", "gpt", "msft");

stack.unshift("Create new file");
// console.log(stack);
let shiftResult = stack.pop();
// console.log(shiftResult);

/**
 * Create stack using Linked List
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size; 
    }

    // basically shift
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var stack_1 = new Stack();
stack_1.push(1);
stack_1.push(2);
stack_1.pop();
console.log(stack_1);









