function pivot (arr, left = 0, right = arr.length-1) {
    let swapIndex = left
    for (let i=left + 1; i<=right; i++) {
        if (arr[i] < arr[left]) {
            swapIndex ++
            if (i !== swapIndex) [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
    }
    [arr[left], arr[swapIndex]] = [arr[swapIndex], arr[left]]
    return swapIndex
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left<right) {
        let swapIndex = pivot (arr, left, right)
        quickSort (arr, left, swapIndex-1)
        quickSort (arr, swapIndex+1, right)
    }
    return arr
}

console.log(quickSort([6,2,5,4]))