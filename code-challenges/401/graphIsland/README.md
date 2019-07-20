# Challenge Summary  
Given a graph, determine if it has islands.  
  
## Challenge Description  
Given a graph, determin whether or not it has islands (stretch goal, count the number of islands).  
  
## Approach & Efficiency   
Loop through the adjacency list keys, for each key check if it's in the set (has been seen). If it's not, traverse the connected vertexes, mark them as seen (add them to the set), and increment the island count.  
  
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/graph-island.jpg)  