// Follow up for problem "Populating Next Right Pointers in Each Node".
//
// What if the given tree could be any binary tree? Would your previous solution still work?
//
// Note:
//
//     You may only use constant extra space.
//
// For example,
// Given the following binary tree,
//
//          1
//        /  \
//       2    3
//      / \    \
//     4   5    7
//
// After calling your function, the tree should look like:
//
//          1 -> NULL
//        /  \
//       2 -> 3 -> NULL
//      / \    \
//     4-> 5 -> 7 -> NULL

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root === null) {
    return;
  }

  let stack = [root];
  root.level = 0;

  while (stack.length > 0) {
    let node = stack.shift();

    if (stack.length === 0) {
      node.next = null;
    } else if (node.level !== stack[0].level) {
      node.next = null;
    } else {
      node.next = stack[0];
    }

    if (node.left !== null) {
      node.left.level = node.level + 1;
      stack.push(node.left);
    }

    if (node.right !== null) {
      node.right.level = node.level + 1;
      stack.push(node.right);
    }
  }
};
