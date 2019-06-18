# 3 or More Ways to Reverse an Array   
Reverses the order of elements in an array in at least 3 different ways.  
  
[Pull Request](https://github.com/MSpake/data-structures-and-algorithms/pull/32)  
[travis](https://www.travis-ci.com/MSpake/data-structures-and-algorithms)  
  
## Challenge  
To take in an array of any length and return an array with the elements in reverse order without using build in methods.
  
## Approach & Efficiency  
1. Loop through, pushing elements into a new array in reverse order. Time: O(n) Space:O(n)  
2. Push elements into a stack, then pop them, reasigning them in reverse order in the same array. Time: O(n) Space: O(n)  
3. Recursive, removing/storing the from value on the way down and rebuilding the array on the way back up. Time: O(n) Space: O(1)    
  
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/array-reverse-multi-solution.jpg)