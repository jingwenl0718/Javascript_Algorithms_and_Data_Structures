// LIFO (last in first out) for stacks
// Method 1
// can implement using Array const stack = []
// can use push & pop (O1, better) || unshift & shift (ON)

// Method 2 using SLL (push and pop from the beginning rather than the back, to make it a constant time O1 rather than On)
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            newNode.next = temp
        }
        return ++this.size
    }

    pop() {
        if (!this.first) return null
        let removedNode = this.first
        if (this.size === 1) this.last = null
        this.first = removedNode.next
        this.size--
        return removedNode
    }
}


