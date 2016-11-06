#  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
#
#     push(x) -- Push element x onto stack.
#     pop() -- Removes the element on top of the stack.
#     top() -- Get the top element.
#     getMin() -- Retrieve the minimum element in the stack.
#
# Example:
#
# MinStack minStack = new MinStack();
# minStack.push(-2);
# minStack.push(0);
# minStack.push(-3);
# minStack.getMin();   --> Returns -3.
# minStack.pop();
# minStack.top();      --> Returns 0.
# minStack.getMin();   --> Returns -2.

import sys

class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """

        self.data = []
        self.minVal = sys.maxint

    def push(self, x):
        """
        :type x: int
        :rtype: void
        """

        self.data.append(x);

        if x < self.minVal:
            self.minVal = x

    def pop(self):
        """
        :rtype: void
        """

        value = self.data.pop()
        if value == self.minVal:
            self.minVal = sys.maxint

            for val in self.data:
                if val < self.minVal:
                    self.minVal = val

    def top(self):
        """
        :rtype: int
        """

        return self.data[len(self.data) - 1]

    def getMin(self):
        """
        :rtype: int
        """

        if self.minVal == sys.maxint:
            return None
        else:
            return self.minVal

# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
