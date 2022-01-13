var n = 5;

var pattern = "";

for(i = 0; i < n; i++)
{
    for(j = 0; j < n; j++)
    {
        if(i == n -3 && j == n-3)
            pattern += 'o';
        else if(i + j == n - 1)
            pattern += '/'
        else if(i == j)
            pattern += '\\'
        else if(i == 0 || i == 4)
            pattern += '-'
        else if(j == 0 || j == 4)
            pattern += '|'
        else if(Math.abs(i) - Math.abs(j) == 1)
            pattern += ' '
        else
            pattern += ' ';
    }
    pattern += '\n';
}
console.log(pattern);