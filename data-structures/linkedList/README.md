# Singly Linked List  
A linked list.   
  
## Challenge  
Create a linked list that has nodes that are linked together by reference, starting at the head.    

## Approach & Efficiency
Because this linked list stores a reference to both the head and tail nodes, both insert() and append() can add nodes without having to traverse the list and therefore have an O(1).  
  
print(), includes(), insertBefore(), insertAfter(), and delete() have to traverse the list. print() traverses the entire thing, the others traverses until either finding the given value or reaching the end. As such, they have an O(n).  
  
## API  
**insert(val[s])** - Inserts one or more new nodes at the beginning (head) of the list.  
**append(val[s])** - Appends one or more new nodes to the end (tail) of the list.  
**includes(val)** - Checks to see if a node exists in the list with the given value. Returns true or false.  
**print()** - Returns an array containing all the values of the nodes in the list, starting at the head.  
**insertBefore(val, newVal)** - Inserts a new node into the list, directly before the node containing the given value.  
**insertAfter(val, newVal)** - Inserts a new node into the list, directly after the node containing the given value.  
**delete(val)** - Deletes the given value from the list  
    
## Whitboard  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/linked_list.jpg)  
![whiteboard2](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/linked_list_k_from_end.jpg)

