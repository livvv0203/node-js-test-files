class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
let diameter = 0;
var diameterOfBinaryTree = function (root) {
  dfs(root);

  return diameter;
};

function dfs(node) {
  if (!node) return 0;

  const left = dfs(node.left);
  const right = dfs(node.right);

  // update diameter at every node
  diameter = Math.max(diameter, left + right);

  // update the largest number of edge so far
  return 1 + Math.max(left, right);
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(200);

console.log(diameterOfBinaryTree(root));
