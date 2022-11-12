function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (str1.length == 0) {
        return true
    }
    if(str2.length < str1.length) {
        return false
    }
    let pointer1 = 0
    let pointer2 = 0
    while (pointer1<str1.length && pointer2<str2.length) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++
            pointer2++
        } else {
            pointer2++
        }
    }
    if (pointer1 === str1.length) {
        return true
    }
    return false