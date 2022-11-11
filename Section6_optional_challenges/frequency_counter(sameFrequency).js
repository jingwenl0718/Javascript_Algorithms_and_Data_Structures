function sameFrequency(num1, num2) {
    if (num1.length !== num2.length) {
        return false
    }
    let frequencyTable1 = {}
    for (let eachNum of num1) {
        frequencyTable1["eachNum"] = (frequencyTable1["eachNum"] || 0) + 1
    }
    for (let eachNum of num2) {
        if (!frequencyTable1["eachNum"]) {
            return false
        } else {
            frequencyTable1["eachNum"]--
        }
    }
    return true
}