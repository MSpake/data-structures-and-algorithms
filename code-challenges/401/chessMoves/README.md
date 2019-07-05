# Challenge Summary  
Given a chess board, check if the king is in dnager.  
  
## Challenge Description  
Given a 2d array representing an 8 x 8 chess board with 5 pieces somewhere on the board ((K)ing, (Q)ueen, (B)ishop, (R)ook, (Kn)ight). Check to see if the king is in danger from any of the other pieces. (Harder version: check if the King is in check)  
  
## Approach & Efficiency   
Start by looping through the board to find the location of all the pieces. O(n)  
Then it's a bunch of conditionals to check the safety of the king.  
  
## Solution  
![whiteboard](https://github.com/MSpake/data-structures-and-algorithms/blob/master/assets/chess-moves.jpg)  
