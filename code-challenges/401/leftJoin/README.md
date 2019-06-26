# Hashmap LEFT JOIN  
Given two hashmaps, perform a left join and return a data structure containing the joined results.  
   
## Challenge  
Given two hashmaps, perform a left join and return a data structure containing the joined results. If the second map doesn't contain the key and a corresponding vlaue, insert null in it's place in the joined values. Can be in place or creating a new structure. Choose hashmaps or objects as input.  
  
## Approach & Efficiency  
Looped through first map, modifying the values to reflect both the original value and the value from the second map.  
Time and Space are both O(n) where n is the number of entries in the first map (plus the values of the second map for space)  
  
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/left-join.jpg)