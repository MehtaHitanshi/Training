var n = 7
var str = ""

for (let i = -(n + 1); i <= n + 1; i++) {
    for (let j = -(n + 1); j <= n + 1; j++) {
        if (j == -(n + 1) || j == n + 1)
            str += "|"
        else if (i == -(n + 1) || i == n + 1)
            str += "="
        else if (i == 0 && j == 0)
            str += "x"
        else if (j == 0 || i == 0)
            str += "0"
        else if (i == j)
            str += "\\"
        else if (Math.abs(i) == Math.abs(j))
            str += "/"
        else if (Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0)
            str += Math.abs(j)
        else if (Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) <= 0 && i != 0)
            str += n - Math.abs(j) + 1
        else if (Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >= 1)
            str += String.fromCharCode(Math.abs(j) + 97)
        else if (Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) <= 1)
            str += String.fromCharCode(n- Math.abs(j) + 97 + 1)
        else
            str += " "
    }
    str += "\n"
}
console.log(str)
