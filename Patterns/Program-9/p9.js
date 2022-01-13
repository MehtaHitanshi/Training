/*
P3:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
E.g. if n==5

\ - - - /
| \   / | 
|   o   |
| /   \ |
/ - - - \

*/

var n = 5
var str = ""

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (n % 2 != 0) {
            if (i == Math.floor(n / 2) && j == Math.floor(n / 2))
                str += "o"
            else if (i == j)
                str += "\\"
            else if (i + j == n - 1)
                str += "/"
            else if (i == 0 || i == n - 1)
                str += "-"
            else if (j == 0 || j == n - 1)
                str += "|"
            else
                str += " "
        }
        else {
            if (i == Math.floor(n / 2) && j == Math.floor(n / 2))
                str += "o"
            else if (i == j)
                str += "\\"
            else if (i + j == n - 1)
                str += "/"
            else if (i == 0 || i == n - 1)
                str += "-"
            else if (j == 0 || j == n - 1)
                str += "|"
            else
                str += " "
        }
    }
    str += "\n"
}
console.log(str)