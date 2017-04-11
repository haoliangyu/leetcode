// Given a binary tree, flatten it to a linked list in-place.
//
// For example,
// Given
//
//         1
//        / \
//       2   5
//      / \   \
//     3   4   6
//
// The flattened tree should look like:
//
//   1
//    \
//     2
//      \
//       3
//        \
//         4
//          \
//           5
//            \
//             6

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let flatten = function(root) {

  if (!root) {
    return root;
  }

  let parent = {};
  let nodes = [root];

  while (nodes.length > 0) {
    let node = nodes.pop();

    if (node.right) {
      nodes.push(node.right);
    }

    if (node.left) {
      nodes.push(node.left);
    }

    node.left = null;
    parent.right = node;
    parent = node;
  }

  root = parent.right;
};
