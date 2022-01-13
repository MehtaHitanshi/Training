var n = 5;

var pattern = "";

for(i = -(n + 1); i <= n + 1; i++)
{
    for(j = -(n + 1); j <= n + 1; j++)
    {
        if(i == -(n + 1) || i == n + 1 || j == -(n + 1) || j == n + 1)
            pattern += '0'
        else if (Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0 || j == 0)
            pattern += String.fromCharCode(Math.abs(i) - Math.abs(j) + 97)
        else if (Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0)
            pattern += Math.abs(i) - Math.abs(j) + 1
        else    
            pattern += ' '
    }
    pattern += '\n';
}
console.log(pattern);