function averagePair(arr, ave) {
    if (arr.length <2) {
        return false
    }
    let sum = ave * 2
    let averagePairTable = {}
    for (let eachNum of arr) {
        let eachNumString = eachNum.toString()
        if (averagePairTable[eachNumString]) {
            return true
        } else {
            averagePairTable[(sum-eachNum).toString()] = eachNum
        }
    }
    return false
}