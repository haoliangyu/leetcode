// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
//
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
//
// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.
//
// Note:
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

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
let oddEvenList = function(head) {
  if (head === null || head.next === null || head.next.next === null) {
    return head;
  }

  let tail = head;
  let count = 1;

  while (tail.next !== null) {
    count++;
    tail = tail.next;
  }

  count = Math.floor(count / 2);

  let previous = head;
  let current = previous.next;

  while (count > 0) {
    previous.next = current.next;

    tail.next = current;
    tail = current;

    previous = previous.next;
    current = previous.next;
    count--;
  }

  tail.next = null;

  return head;
};
