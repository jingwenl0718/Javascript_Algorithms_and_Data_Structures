function bubbleSort(arr) {
    // if arr is nearly sorted, save a lot of time
    let noSwaps = true 
    for (let i=arr.length-1; i>=0; i--) {
        for (let j=0; j<=i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                // noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSort([4,3,7,6]))
console.log(bubbleSort([]))