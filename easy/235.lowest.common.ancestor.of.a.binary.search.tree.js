// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
//
//        _______6______
//       /              \
//    ___2__          ___8__
//   /      \        /      \
//   0      _4       7       9
//         /  \
//         3   5
//
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

function findNode(root, value) {
  var node = root;

  while (node) {
    if (node.val === value) {
      return true;
    } else if (node.val > value) {
      node = node.left;
    } else if (node.val < value) {
      node = node.right;
    }
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

  let path = [];
  let node = root;
  let smaller = p.val < q.val ? p : q;

  while(node) {
    path.push(node);

    if (node.val === smaller.val) {
      break;
    } else if (node.left && smaller.val < node.val) {
      node = node.left;
    } else if (node.right && node.val < smaller.val) {
      node = node.right;
    } else {
      node = null;
    }
  }

  if (p.val === q.val) {
    return node;
  }

  let larger = p.val > q.val ? p : q;

  for (let i = path.length - 1; i > 0; i--) {
    let node = path[i];

    if (i < (path.length - 1) && node === path[i + 1].right) {
      continue;
    }

    if (node.val === larger.val || findNode(node.right, larger.val)) {
      return node;
    }
  }

  return root;
};
