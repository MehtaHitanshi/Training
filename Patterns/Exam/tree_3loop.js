var n = 3;
var pattern = "";

for(i = 0; i <= n * n + 1; i++)
{
    for(j = -n; j <= n; j++)
    {
        if(i == 0 && j == 0)
            pattern += 'O'
        else if(Math.abs(i) == Math.abs(j) || Math.abs(i) - Math.abs(j) == n)
            pattern += '/'
        else    
            pattern += '*'
    }
    pattern += '\n'
}
console.log(pattern);