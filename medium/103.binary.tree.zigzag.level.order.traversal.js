// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// return its zigzag level order traversal as:
//
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
   if (!root) {
     return [];
   }

   let results = [];
   let nodes = [root];
   let orderRight = false;

   while (nodes.length > 0) {
     let level = [];
     let next = [];

     for (let i = 0, n = nodes.length; i < n; i++) {
       level.push(nodes[i].val);

       if (nodes[i].left) {
         next.push(nodes[i].left);
       }

       if (nodes[i].right) {
         next.push(nodes[i].right);
       }
     }

     if (orderRight) {
       level.reverse();
     }

     results.push(level);

     nodes = next;
     orderRight = !orderRight;
   }

   return results;
 };
