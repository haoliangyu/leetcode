// Reverse a singly linked list.

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
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  var node = head;
  var prev, next;

  while (true) {
    next = node.next;
    node.next = prev;
    prev = node;

    if (!next) {
      return node;
    }

    node = next;
  }
};
