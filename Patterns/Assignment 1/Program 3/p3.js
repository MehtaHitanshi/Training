var n = 3;

let pattern = "";
for(i = 1; i <= n; i++)  // Print Rows
{
    for( j = 1; j <= n; j++) // Print Columns
    {
        pattern += i;     // it will run until j isn't > n
    }
    pattern += '\n'; 
}
console.log(pattern);