# Merge Sort and Quick Sort  
Implement Merge Sort and Quick sort.  
  
## Challenge  
Starting with the Merge sort we did in class, improve the efficiancy.  
Starting with the Quick sort we did in class, re-implement with three part partition.  
  
## Approach & Efficiency   
Merge - Divide and conquer, divide the array down into 1-2 element sub arrays, then sort them into the output array on the way back up the recursive call stack.  
Quick - Use a pivot, swap elements around based on whether they are less than, equal to, or larger than the pivot. Then pass the 'less than' and 'larger than' ranges recursively sorting.    
  
## API  
  
**Merge Sort** - Stable, returns a new array.  
**Quick Sort** - Unstable, sorts in place.  