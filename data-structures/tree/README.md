# Trees  
Tree Node, Binary Tree, and Binary Search Tree  
  
## Challenge  
Create a Node class that has value, left, and right properties. Create a Binary Tree class that has preOrder(), inOrder(), and postOrder() traversal methods. Create a Binary Search Tree class that has add(value) and contains(value) methods.  
  
## Approach & Efficiency  
All methods in the Binary Tree class are O(n), where n in the number of nodes in the tree.  
Both methods in the Binary Search Tree class are O(log n), where n is the number of nodes in the tree.  
  
## API  
Binary Tree:  
* add(value) - Adds a value to the tree in the first open positon found, moving left-to-right and root-to-leaves.  
* preOrder() - Returns an array of all values in the tree in preOrder order.  
* inOrder() - Returns an array of all values in the tree in inOrder order.  
* postOrder() - Returns an array of all values in the tree in postOrder order.  
  
Binary Search Tree:  
* add(value) - Adds a value to the tree, smaller values to the left, larger values to the right.    
* contains(value) - Determines whether on nor a value is in the tree, returns true or false.  