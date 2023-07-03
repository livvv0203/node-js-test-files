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
  // Time Complexity: O(Log n)
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

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // Found the node
        return true;
      }
    }
    return false;
  } // end of find method

  // Breadth First Search
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    // Check if something in the queue
    while (queue.length) {
      // take out one node from the beginning
      node = queue.shift();
      // push it into the list to be return
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // DFS - PreOrder - Recursively
  DFSPreOrder() {
    let data = [];

    // This is a helper function
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

//          10
//     5         13
//  2     7   11    16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(2);
tree.insert(3);
tree.insert(8);
tree.insert(5);

console.log(tree.DFSPreOrder());
