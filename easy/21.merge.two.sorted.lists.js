// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  var result = { val: -Infinity, next: null };
  var node = result;

  var nodeA = l1;
  var nodeB = l2;

  while (nodeA || nodeB) {
    if (nodeA && nodeB) {
      if (nodeA.val < nodeB.val) {
        node.next = nodeA;
        nodeA = nodeA.next;
      } else {
        node.next = nodeB;
        nodeB = nodeB.next;
      }

      node = node.next;
    } else {
      node.next = !nodeA ? nodeB : nodeA;
      break;
    }
  }

  return result.next;
};
