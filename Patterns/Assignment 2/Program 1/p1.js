var n = 4;

var pattern = "";

for(i = 0; i < n; i++)
{
    for(j = 0; j < n; j++)
    {
        if(i == j || i+j == n - 1 )
            pattern += '#';
        else
            pattern += '*';
    }
    pattern += '\n';
}
console.log(pattern);