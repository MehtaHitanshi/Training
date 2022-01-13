var n = 7;
var pattern = "";

for(i = -(n + 1); i <= n + 1; i++)
{
    for(j = -(n + 1); j <= n + 1; j++)
    {
        if(j == -(n + 1) || j == n + 1)
            pattern += 'O'
        else if(i == 0 && j == 0)
            pattern += 'O'
        else if(i == -(n + 1) || i == n + 1)
            pattern += '0'
        else if(Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0)
            pattern += Math.abs(j)
        else if(Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) <= 0 && i !=0)
            pattern += n - Math.abs(j) + 1
        else
            pattern += ' '
    }

    pattern += '\n'
}
console.log(pattern);