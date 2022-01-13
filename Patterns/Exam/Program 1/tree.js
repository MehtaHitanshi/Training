var n = 3;
var pattern = "";

for (i = 0; i < 1; i++) {
    for (j = -n; j <= 0; j++) {
        if (i == 0 && j == 0)
            pattern += 'o\n'
        else
            pattern += ' '
    }
}

for (v = 0; v < n - 1; v++) {
    for (i = 0; i < n; i++) {
        for (j = -n; j <= n; j++) {
            if (i + j == -1)
                pattern += '/'
            else if (j - i == 1)
                pattern += '\\'
            else if ((Math.abs(i) - Math.abs(j)) < n && (Math.abs(i) - Math.abs(j) >= 0))
                pattern += '-'
            else
                pattern += ' '
        }
        pattern += '\n'
    }
}

for (i = 0; i < n; i++) {
    for (j = -n; j <= n; j++) {
        if (j == 0)
            pattern += '='
        else if (Math.abs(j) == 2)
            pattern += '|'
        else
            pattern += ' '
    }
    pattern += '\n'
}

for (i = 0; i < 1; i++) {
    for (j = 0; j < 2 * n + 1; j++) {
        pattern += '='
    }
}

console.log(pattern);