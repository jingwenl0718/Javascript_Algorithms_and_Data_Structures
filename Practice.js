// FrequencyCount Pattern

// CountUniqueValues(two pointers pattern)
function countUniqueValues(arr) {
    let i=0
    let j=1
    while (j<arr.length) {
        if (arr[i] == arr[j]) {
            j++
        }
        if (arr[i] !== arr[j]) {
            arr[i+1] = arr[j]
            i++
        }
    }
    return i+1
}