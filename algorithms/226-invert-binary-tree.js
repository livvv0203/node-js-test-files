/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * TreeNode Class
 * @param {Tree} val
 * @param {*} left
 * @param {*} right
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Base case
  if (root === null) {
    return root;
  }

  invertTree(root.left);
  invertTree(root.right);

  // swapping
  const current = root.left;
  root.left = root.right;
  root.right = current;
  return root;
};
