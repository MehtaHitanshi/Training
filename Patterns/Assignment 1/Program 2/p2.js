var n = 3;

let pattern = "";
for(i = 1; i <= n; i++)  // Print Rows
{
    for( j = 1; j <= n; j++) 
    {
        pattern += j; // Print Columns 
    }
    pattern += '\n'; 
}
console.log(pattern);