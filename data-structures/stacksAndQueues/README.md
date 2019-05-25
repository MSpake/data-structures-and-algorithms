# Stacks and Queues  
A stack is a data structure containging nodes. Each node references the next node in the stack. It follows the 'first in last out' principle.  
A queue is a data structure containing nodes. Each node references the next node in the stack. it follows the 'first in first out' principle. 
  
## Challenge  
Write a Stack class that has the pop(), push(), and peek() methods.  
Write a Queue class that has the enqueue(), dequeue(), and peek() methods.  
  
## Approach & Efficiency  
All methods are O(1). The Stack class contains a reference to the top node and adds/removes directly from the top. The Queue class contains references to both the front and rear nodes and adds directly to the rear and removes directly from the front.  
  
## API  
  
### Stack  
**push(val[s])** - adds one ore more entries to the top of the stack.  
**pop(val[s])** - removes one entry from the top of the stack and returns the value of the removed node.  
**peek(val[s])** - returns the value of the topmost node without modifying the stack.  
  
###Queue  
**enqueue(val[s])** - adds one ore more entries to the end of the queue.  
**dequeue(val[s])** - removes one entry from the front of the queue and returns the value of the removed node.  
**peek(val[s])** - returns the value of the foremost node without modifying the queue.  