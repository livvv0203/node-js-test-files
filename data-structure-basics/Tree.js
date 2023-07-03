// Common Non-linear Data Structure

// Binary - at most 2 children

// Binary Search Tree(BST) - Sorted in a way - all nodes to the left are less than the parent node

// Node class - represents each node of the tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // inserting a node - iteratively
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        // break out of the loop using return
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  // Find a node in BST
  find(value) {
    // Starting at the root
    if (this.root === null) return false;
  }
}

//          10
//     5         13
//  2     7   11    16

var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(2);
console.log(tree);
console.log(tree.find(100));
