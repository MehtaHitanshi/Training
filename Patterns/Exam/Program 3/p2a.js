var n = 5;
var pattern = "";

for(i = -(n + 1); i <= n + 1; i++)
{
    for(j = -(n + 1); j <= n + 1; j++)
    {
        if(j == -(n + 1) || j == n + 1)
            pattern += '|'
        else if(i == 0 && j == 0)
            pattern += 'X'
        else if(i == -(n + 1) || i == n + 1)
            pattern += '='
        else if(j == 0 || i == 0)
            pattern += '0'
            else if(i == j)
            pattern += '\\'
        else if(Math.abs(i) == Math.abs(j))
            pattern += '/'
        else if(Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0)
            pattern += Math.abs(j) // LT2 & RB1
        else if(Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) <= 0 && i !=0)
            pattern += n - Math.abs(j) + 1  // RT2 & LB1
        else if(Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >= 1 && i !=0)
            pattern += String.fromCharCode(Math.abs(j) + 97) // RT1 & LB2
        else if(Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) <= -1  && i !=0)
            pattern += String.fromCharCode(n - Math.abs(j) + 97 + 1)   // LT1 & RB2
        else
            pattern += ' '
    }

    pattern += '\n'
}
console.log(pattern);