let arr = ['A', 'M', 'C', 1.5, 3, 8]
let arr1 = [5, 2, 6, 4, 3, 1]

/*function insSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i]
        j = i - 1

        while (j >= 0 && temp <= arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
        //console.log(arr);
    }
}
insSort(arr)
console.log(arr)*/

//arr = [0, 'a', 0, 'A', 0, 1.5, 'M', 'C', 8, 3, 1, 'b', 0, 0, 'B']
function check_values_small(first_input, second_input) {
    first_val = first_input
    second_val = second_input
    if (typeof (first_val) == 'string') {
        first_val = first_val.charCodeAt()

        if (first_val > 91) {
            first_norm = first_val - 97
        }
        else {
            first_norm = first_val - 65
        }
    }
    else {
        first_norm = first_val
    }
    if (typeof (second_val) == 'string') {
        second_val = second_val.charCodeAt()
        if (second_val > 91) {
            second_norm = second_val - 97
        }
        else {
            second_norm = second_val - 65
        }
    }
    else {
        second_norm = second_val
    }
    if (first_norm == second_norm && typeof (second_input) != 'string') {
        return true
    }
    else if (first_norm == second_norm && second_val > first_val && typeof (first_val) != 'string') {
        return false
    }
    else if (first_norm == second_norm && second_val > first_val) {
        return true
    }
    else if (first_norm > second_norm) {
        return true
    }
    return false
}
// arr=[0,1]
for (i = 0; i < arr.length; i++) {
    val = arr[i];
    j = i - 1;
    while (j >= 0 && check_values_small(arr[j], val)) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = val;
}
console.log(arr)