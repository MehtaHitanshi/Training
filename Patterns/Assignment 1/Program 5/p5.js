var n = 5;

var pattern = "";

for(i = 0; i <=n; i++)
{
    for(j = 0; j <=n; j++)
    {
        if(i+j <= n)
            pattern += ' ';
        else
            pattern += '*';
    }
    pattern += '\n';
}
console.log(pattern);