function nativeStringSearch(longStr, shortStr) {
    let count = 0
    for (let i=0; i<longStr.length; i++) {
        let j = 0
        while (j<shortStr.length) {
            if (longStr[i+j] !== shortStr[j]) break
            j++
        }
        if (j === shortStr.length ) count++
    }
    return count
}