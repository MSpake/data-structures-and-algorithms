# Challenge Summary  
PseudoQueue using Stacks  
  
## Challenge Description  
Create a pseudoQueue class that behaves like a queue (first in, first out, has enqueue() and dequeue() methods), but internally uses two Stacks (that have only push, pop, and peek) to store the queue.  
  
## Approach & Efficiency  
Enqueueing to the pseudoQueue is O(1), it just adds a new node to the first stack.  
Dequeueing to the pseudoQueue is O(2n) where n is the number of entries in the first stack. It iterates over the first stack, pushing them one by one into the second stack, removes the last element (which was the first one in), and then iterates over the second stack, pushing them all back into the first stack.  
  
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/queue-with-stacks.jpg)  
