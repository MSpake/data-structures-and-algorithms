# Challenge Summary  
Given a possibly infinite stream of characters, return the top n most frequent characters.  
  
## Challenge Description  
Given a stream, return the n most frequent characters. The characters in the stream are accesible only via stream.getNext(). Minimize the likelyhood of your code breaking (infinite while loop, exceeding maximum call stack, etc...)  
  
## Approach & Efficiency   
Not coded, but would use a heap for tracking character counts, and would need some kind of external processing to break the data down into smaller pieces that could be checked one at a time.    
  
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/stream-characters.jpg)  