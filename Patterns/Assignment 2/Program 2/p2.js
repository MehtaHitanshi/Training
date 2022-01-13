var n = 4;
var pattern = "";

for(i = -n; i <= n; i++)
{
    if(i == 0)
        continue
    for(j = -n; j <= n; j++)
    {
        if(j == 0)
            continue
        if((Math.abs(i) + Math.abs(j) <= n + 1) && (Math.sign(i) == Math.sign(j)))
            pattern += '@';
        else
            pattern += ' ';

    }
    pattern += '\n';
}
console.log(pattern);
