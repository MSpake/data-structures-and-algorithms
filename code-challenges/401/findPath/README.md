# Reverse an Array   
Given a binary tree and two values, return a linked list representing the path from the first value to the second.  
  
## Challenge  
Given a binary tree and two values, return a linked list representing the path from the first value to the second. If either value is not present, or the two values are in different subtrees, or the ending value doesn't follow the starting value, return null.  
  
## Approach & Efficiency  
Recusively search for the starting value. Then, recusively search for the ending value. If both are foud, build the linked list on the way back up the call stack.  
Worst Case complexity: Time and Space are O(n) where n is the number of nodes in the tree  (if starting and ending values are the same and are the last node checked).  
  
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/find-path.jpg)