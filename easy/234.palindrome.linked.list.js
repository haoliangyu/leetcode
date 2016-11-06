// Given a singly linked list, determine if it is a palindrome.
//
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) {
    return true;
  }

  var count = 1;
  var end = head;
  while (end.next) {
    end.next.prev = end;
    end = end.next;
    count += 1;
  }

  var nodeA = head;
  var nodeB = end;
  count = count / 2;

  for (var i = 0; i < count; i++) {
    if (nodeA.val !== nodeB.val) {
      return false;
    }

    nodeA = nodeA.next;
    nodeB = nodeB.prev;
  }

  return true;
};
