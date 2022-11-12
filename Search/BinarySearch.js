function binarySearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let leftPointer = 0
    let rightPointer = arr.length -1
    while (leftPointer <= rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer)/2)
        if (arr[middle] === num) return middle
        else if (arr[middle] < num) leftPointer = middle + 1
        else rightPointer = middle -1
    }
    return -1
  }