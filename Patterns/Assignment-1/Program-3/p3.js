/*
P3: Write a program to draw a pattern given below from 0-9. 
E.g. if n==5
11111
22222
33333
44444
55555
*/

var n = 5
var str = ""

for(let i = 0;i < n ; i++)
{
    for(let j = 0;j < n;j++)
    {
        str += i+1
    }
    str += "\n"
}
console.log(str)