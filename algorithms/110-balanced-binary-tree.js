/**
 * Given a binary tree, determine if it is height-balanced.
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
  // Constructor to create a new TreeNode
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// function to check if tree is height-balanced or not
function isBalanced(root) {
  // Base condition
  if (root == null) return true;

  // for left and right subtree height
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  // allowed values for (lh - rh) are 1, -1, 0
  if (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) == true &&
    isBalanced(root.right) == true
  )
    return true;

  // if we reach here means tree is not
  // height-balanced tree
  return false;
}

// function to find height of binary tree
function height(root) {
  // base condition when binary tree is empty
  if (root == null) return 0;
  
  return Math.max(height(root.left), height(root.right)) + 1;
}

// Driver function to test the above function
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(8);
if (isBalanced(root)) console.log('Tree is balanced');
else console.log('Tree is not balanced');
