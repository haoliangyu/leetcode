// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

function getDepth(node) {
    if (!node) {
        return 0;
    }

    var left = getDepth(node.left);
    var right = getDepth(node.right);

    return left > right ?  left + 1 : right + 1;
}

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
var maxDepth = function(root) {
    return getDepth(root);
};
