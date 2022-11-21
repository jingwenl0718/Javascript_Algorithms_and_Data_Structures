class MaxBinaryHeap {
    constructor(){
        this.values = []
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp(element)
    }
    bubbleUp(element) {
        let idx = this.values.length -1
        while (idx > 0) {
            let parentIdx = Math.floor ((idx-1)/2)
            let parent = this.values[parentIdx]
            if (element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    exactMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown(){
        let idx = 0
        let length = this.values.length 
        let element = this.values[0]
        while (true) {
            let leftChildIdx = idx * 2 + 1
            let rightChildIdx = idx * 2 + 2
            let swap = null
            if (leftChildIdx<length) {
                let leftChild = this.values[leftChildIdx]
                if (leftChild > this.values[idx]) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx<length) {
                let rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild > this.values[idx]) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx
                }
            }
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}
