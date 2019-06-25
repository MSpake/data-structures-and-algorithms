# Find Pair    
Given an array of integers and a value, find a pair of integers in the array that sum to that value.  
   
## Challenge   
Find 2 ways.  
Take in an array of integers and a value. Find the pair of elements (if present) that add up to the given value.  
   
## Approach & Efficiency   
1. Loop through the entire array once per element in the array (brute force approach). Time: O(n^2) Space: O(1)    
2. Map the elements, tracking how many times they are in the array. Loop through the array, subtracting the element from the value and checking to see if the value is present in the map.    
   
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/find-pair.jpg)