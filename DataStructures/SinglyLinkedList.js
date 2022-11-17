class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val) 
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }
    
    pop() {
        if (!this.head) return undefined
        let runner = this.head
        let runnerPrev = runner
        while (runner.next) {
            runnerPrev = runner 
            runner = runner.next
        }
        runnerPrev.next = null
        this.tail = runnerPrev
        this.length --
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return runner
    }
    
    shift() {
        if (!this.head) return undefined
        let removedNode = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) this.tail = null
        return removedNode
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this 
    }

    get(index) {
        if (num<0 || num>this.length-1) return null
        let count = 1
        let runner = this.head
        while (count <= num) {
            runner = runner.next
            count ++
        }
        return runner 
    }

    set(index, value) {
        let foundNode = this.get(index)
        if (foundNode === null) return false
        foundNode.val = value
        return true 
    }

    insert(index, value) {
        if (index<0 || index>this.length) return false
        if (index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(val)
        let foundNode = this.get(index-1)
        let newNode = new Node(value)
        let nextNode = foundNode.next
        foundNode.next = newNode
        newNode.next = nextNode
        this.length++
        return true
    }

    remove (index) {
        if (index<0 || index>this.length-1) return undefined
        if (index === 0) return this.shift()
        if (index === this.length-1) return this.pop()
        let foundNode = this.get(index-1)
        let removedNode = foundNode.next
        foundNode.next = removedNode.next
        this.length--
        return removedNode
    }

    reverse() {
        // if (!this.head) return this (not needed) 
        let curr = this.head
        this.head = this.tail
        this.tail = curr
        let prev = null
        let next 
        while (curr) {
            next = curr.next
            current.next = prev
            prev = curr
            curr = next
        }
        /*
        Or use forloop
        for (let i=0; i<this.length; i++) {
            next = curr.next
            current.next = prev
            prev = curr
            curr = next
        }
        */
        return this
    }
}