// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
   if (!root) {
     return 0;
   }

   root.level = 1;
   let queue = [root];

   while(queue.length > 0) {
     let node = queue.shift();

     if (!node.left && !node.right) {
       return node.level;
     }

     if (node.left) {
       node.left.level = node.level + 1;
       queue.push(node.left);
     }

     if (node.right) {
       node.right.level = node.level + 1;
       queue.push(node.right);
     }
   }
 };
