var n = 6;

var pattern = "";

for(i = 0; i < n; i++)
{
    for(j = 0; j <= i; j++)
    {
        pattern += '*';
    }
    pattern += '\n';
}
console.log(pattern);