/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Given a binary tree, find its minimum depth.
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  // If the subtree is empty i.e. root is NULL, return depth as 0...
  if (root == null) return 0;

  // If the both subtrees are empty - single node
  if (root.left == null && root.right == null) return 1;

  // If the left subtree is empty, return the depth of right subtree after adding 1 to it
  if (root.left == null) return 1 + minDepth(root.right);

  // If the right subtree is empty, return the depth of left subtree after adding 1 to it
  if (root.right == null) return 1 + minDepth(root.left);

  // When the two child function return its depth
  // Pick the minimum out of these two subtrees and return this value after adding 1 to it
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1; // Adding 1 is the current node which is the parent of the two subtrees...
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

console.log(minDepth(root));
