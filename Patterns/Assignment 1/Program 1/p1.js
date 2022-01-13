var n = 7;

let pattern = "";
for(i = 0; i < n; i++)  // 
{
    for( j = 0; j < n; j++)
    {
        pattern += "*";
    }
    pattern += '\n'; 
}
console.log(pattern);