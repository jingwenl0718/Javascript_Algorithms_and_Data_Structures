// FIFO first in first out 
// method 1 
// can implement it using Array using push & shift OR shift & pop 

// method 2
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node (val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        if (this.size === 0) return null
        let removedNode = this.first 
        if (this.size === 1) this.last = null
        this.first = this.first.next
        this.size--
        return removedNode
    }
}

