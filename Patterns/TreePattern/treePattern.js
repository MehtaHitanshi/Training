var str = ""
var n = 5

for (let i = 0; i < 1; i++) {
    for (let j = -n; j <= 0; j++) {
        if (i == 0 && j == 0)
            str += "o\n"
        else
            str += " "
    }
}
//console.log(str)
for (let k = 0; k < n - 1; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = -n; j <= n; j++) {
            if (i + j == -1)
                str += "/"
            else if (j - i == 1)
                str += "\\"
            else if ((Math.abs(i) - Math.abs(j)) < n && (Math.abs(i) - Math.abs(j) >= 0))
                str += "-"
            else
                str += " "
        }
        str += "\n"
    }
    
}

for (let i = 0; i < n; i++) {
    for (let j = -n; j <= n; j++) {
        if (j == 0)
            str += "="
        else if (Math.abs(j) == 2)
            str += "|"
        else
            str += " "
    }
    str += "\n"
}

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 2 * n + 1; j++) {
        str += "="
    }
}

console.log(str)
