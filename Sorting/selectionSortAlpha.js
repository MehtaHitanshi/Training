let arr = ['a', 'g', 'A', 'j', 'h', 'B', 'c', 'b']
let arr1 = [5, 3, 1, 2, 7, 0, -5]

for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
        if (checkValue(arr[j], arr[min]))
            min = j
    }

    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp


}
console.log(arr)

function checkValue(v1, v2) {
    v1 = (v1.charCodeAt())
    v2 = (v2.charCodeAt())

    if (v1 > 91)
        norm1 = v1 - 97
    else
        norm1 = v1 - 65

    if (v2 > 91)
        norm2 = v2 - 97
    else
        norm2 = v2 - 65

    if (norm1 == norm2 && v2 < v1)
        return true
    else if (norm1 < norm2)
        return true

    return false
}