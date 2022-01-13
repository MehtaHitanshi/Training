/*
P6: Write a program to draw a pattern given below from 0-9.  
E.g. if n==5
    1
   121
  12321
 1234321
123454321
*/

var n = 5
var str
// for (let i = 0; i <= n; i++) {
//     for (let j = n; j > i; j--) {
//         str += " "
//     }
//     for (j = 1; j <= i; j++) {
//         str += j
//     }
//     for(let k = i-1; k >= 1; k--)
//     {
//         str += k
//     }
//     str += "\n"
// }
// console.log(str)

for(let i = 0; i < n; i++)
{
    str = ""
    for(let j = -n; j <n; j++)
    {
        if(Math.abs(i) - Math.abs(j) >= 0)
        {
            str += Math.abs(i) - Math.abs(j) + 1
        }
        else
            str += " "
    }
    console.log(str)
}