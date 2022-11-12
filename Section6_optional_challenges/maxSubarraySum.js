function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < num) {
        return null
    }
    let sum = 0
    for (let i=0; i<num; i++) {
      sum += arr[i] 
    }
    let result = sum
    let pointer = num-1
    while (pointer < arr.length-1) {
        sum = sum - arr[pointer-num+1] + arr[pointer+1]
        result = Math.max(sum, result)
        pointer++
    }
    return result
  }

// console.log(maxSubarraySum([100,200,300,400], 2))
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
// console.log(maxSubarraySum([2,3], 3))


  // 39 
 // 5
 // 5
 // null