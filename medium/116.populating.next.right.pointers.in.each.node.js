// Given a binary tree
//
//    struct TreeLinkNode {
//      TreeLinkNode *left;
//      TreeLinkNode *right;
//      TreeLinkNode *next;
//    }
//
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
//
// Initially, all next pointers are set to NULL.
//
// Note:
//
//    You may only use constant extra space.
//    You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
//
// For example,
// Given the following perfect binary tree,
//
//         1
//       /  \
//      2    3
//     / \  / \
//    4  5  6  7
//
// After calling your function, the tree should look like:
//
//         1 -> NULL
//       /  \
//      2 -> 3 -> NULL
//     / \  / \
//    4->5->6->7 -> NULL
//
// Subscribe to see which companies asked this question.

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
 let connect = function(root) {

   if (root === null) {
     return;
   }

   let stack = [root];
   let level = 0;
   let levelNodes = 1;

   while (stack.length > 0) {
     let node = stack.shift();
     levelNodes--;

     if (levelNodes === 0) {
       node.next = null;
       level++;
       levelNodes = 1 << level;
     } else {
       node.next = stack[0];
     }

     if (node.left !== null) {
       stack.push(node.left);
       stack.push(node.right);
     }
   }
 };
