let arr = [5, 3, 1, 2, 7, 0, -5]

function selsort(arr){
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min])
                min = j
        }
        
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    
    
    }
}
selsort(arr)
console.log(arr)