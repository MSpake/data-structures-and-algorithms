# Singly Linked List  
A linked list.   
  
## Challenge  
Create a linked list that has nodes that are linked together by reference, starting at the head.    

## Approach & Efficiency
Because this linked list stores a reference to both the head and tail nodes, both insert() and append() can add nodes without having to traverse the list and therefore have an O(1).  
  
Both print() and includes() have to traverse the list. print() traverses the entire thing, includes() traverses until it either finds the given value or reaches the end. As such, it has an O(n).  
  
## API  
**insert(val)** - Inserts one or more new nodes at the beginning (head) of the list.  
**append(val)** - Appends one or more new nodes to the end (tail) of the list.  
**includes(val)** - Checks to see if a node exists in the list with the given value. Returns true or false.  
**print()** - Returns an array containing all the values of the nodes in the list, starting at the head.  