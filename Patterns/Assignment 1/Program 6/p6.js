var n = 4;

for(i = 0; i < n; i++)
{
    pattern = "";
    for(j=-n; j < n; j++)
    {
        if(Math.abs(i) - Math.abs(j) >= 0)
            pattern += Math.abs(i) - Math.abs(j) + 1;
        else
            pattern += ' ';

    }
    console.log(pattern);
}

