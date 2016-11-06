// Given a linked list, swap every two adjacent nodes and return its head.
//
// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.
//
// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }

  var nodeA = head;
  var nodeB = head.next;
  var result = {};
  var start = result;
  var temp;

  while (nodeA && nodeB) {
    start.next = nodeB;
    temp = nodeB.next;

    nodeB.next = nodeA;
    nodeA.next = null;

    start = nodeA;
    nodeA = temp;
    nodeB = temp ? temp.next : null;
  }

  if (nodeA) {
    start.next = nodeA;
  }

  return result.next;
};
