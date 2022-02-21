let no = [8, 2, 5, -5, 1, 6, 0]

//console.log(no.length)

//ascending order
/*function bubblesort(no){
    for(let i = 0; i <= no.length; i++)
    {
        for(let j = 0; j <= (no.length - i - 1); j++)
        {
            if(no[j] > no[j+1])
            {
                let temp = no[j]
                no[j] = no[j+1]
                no[j+1] = temp
            }
        }
    }
    console.log(no)
}*/

//descending order
function bubblesort(no) {
    for (let i = 0; i <= no.length; i++) {
        for (let j = 1; j <= (no.length - i); j++) {
            if (no[j] < no[j + 1]) {
                let temp = no[j]
                no[j] = no[j + 1]
                no[j + 1] = temp
            }
        }
    }
    console.log(no)
}

bubblesort(no)