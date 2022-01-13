/*
P1: Write a program to draw a pattern given below from 0-100.
E.g. if n==5
*****
*****
*****
*****
*****
*/

var n = 6
var str = ""

for(let i = 0;i < n;i++)
{
    for(let j = 0;j < n;j++)
    {
        str += "*"
    }
    str += "\n"
}
console.log(str)
