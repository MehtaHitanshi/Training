/*
P5: Write a program to draw a pattern given below from 0-9.  
E.g. if n==5
    *
   **
  ***
 ****
*****
*/

var n = 7
var str = ""

for(let i = 0;i <= n;i++)
{
    for(let j = 0;j <= n;j++)
    {
        if(i+j <= n)
            str += " " 
        else
            str += "*"
    }
    str += "\n"
}
console.log(str)
