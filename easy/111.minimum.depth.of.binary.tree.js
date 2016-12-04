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

   function getMinDepth(root) {
     if (!root) {
       return 0;
     }

     if (root.left && root.right) {
       let leftHeight = getMinDepth(root.left);
       let rightHeight = getMinDepth(root.right);
       return (leftHeight < rightHeight ? leftHeight : rightHeight) + 1;
     } else if (!root.right && root.left) {
       return getMinDepth(root.left) + 1;
     } else if (root.right && !root.left) {
       return getMinDepth(root.right) + 1;
     } else {
       return 1;
     }
   }

   return getMinDepth(root);
 };
