# Hashtables  
HashTable implementation  
  
## Challenge  
Write a HashTable data structure with the methods add(), get(), contains(), and hash().  
  
## Approach & Efficiency  
All methods have O(1) efficiancy.  
    
## API  
Add(key, value) adds the key/value pair to the internal array with O(1) eficiancy.  
Get(key) returns the value associated with the given key (if it exists) with O(1) efficiancy.  
Contains(key) checks if the given key is present in the internal array, returns either true or false. O(1) efficiency.  
Hash(key) internal method that takes in a key and hashes it into an index. O(1) efficiancy.  