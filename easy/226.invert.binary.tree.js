function invert(node) {
    temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) {
        invert(node.left)
    }

    if (node.right) {
        invert(node.right)
    }
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return root;
    }

    invert(root);
    return root;
};
