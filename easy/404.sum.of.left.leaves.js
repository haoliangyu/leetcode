// Find the sum of all left leaves in a given binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function hasLeftLeave(node) {
   return node.left && !node.left.left && !node.left.right;
 }

 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var sumOfLeftLeaves = function(root) {
   var sum = 0;

   if (!root) {
     return sum;
   }

   var tasks = [root];

   while (tasks.length > 0) {
     var node = tasks.pop();

     var toSum = hasLeftLeave(node);
     if (toSum && node.left.val) {
       sum += node.left.val;
     }

     if (node.left) {
       tasks.push(node.left);
     }

     if (node.right) {
       tasks.push(node.right);
     }
   }

   return sum;
 };
