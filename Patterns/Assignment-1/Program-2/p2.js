 /*
 P2: Write a program to draw a pattern given below from 0-9.
E.g. if n==5
12345
12345
12345
12345
12345
*/
 
 
 var n = 6
 var str = ""

 for(let i = 0;i < n ; i++)
 {
     for(let j = 0;j < n;j++)
     {
         str += j+1
     }
     str += "\n"
 }
 console.log(str)