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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);


console.log(tree);