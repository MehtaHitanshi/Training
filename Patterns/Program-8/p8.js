/*
P2:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
E.g. if n==5
    @
   @@
  @@@
 @@@@
@@@@@
     @@@@@
     @@@@
     @@@
     @@
     @
*/

var n = 4
var str = ""

for (let i = -n; i <= n; i++) {
    if (i == 0)
        continue
    for (let j = -n; j <=n; j++) {
        if (j == 0)
            continue
        if((Math.abs(i) + Math.abs(j) <= n+1) && (Math.sign(i) == Math.sign(j))) {
            str += "@"
        }
        else
            str += " "
    }
  str += "\n"
}
console.log(str)

// var n = 5
// var str = ""

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i + j >= n - 1)
//             str += "@"
//         else
//             str += " "
//     }
//     str += "\n"
    

// }
// //console.log(str)

// for(let i = 0;i < n;i++)
// {
//     for(let k = n;k > i;k--)
//     {
//         str += " "
//     }
//     for(let j = 0; j < n;j++)
//     {
//         if(i+j <= n-1)
//             str += "@"
//         else
//             str += " "
//     }
//     str += "\n"
// }
// console.log(str)