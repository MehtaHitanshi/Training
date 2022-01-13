/*
P4: Write a program to draw a pattern given below from 0-9.  
E.g. if n==5
*
**
***
****
*****
*/

var n = 5
var str = ""

for(let i = 1;i <= n;i++)
{
    for(let j = 1;j <=i;j++)
    {
        str += "*" 
    }
    str += "\n"
}
console.log(str)