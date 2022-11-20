class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length ++
        return this
    }

    pop() {
        if (this.length === 0) return undefinied
        let removedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedNode.prev 
            this.tail.next = null
            removedNode.prev = null
        }
        this.length--
        return removedNode
    }

    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            oldHead.next = null
            this.head.prev = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index < this.length/2) {
            let runner = this.head
            count = 0
            while (count < index) {
                runner = runner.next 
                count++
            }
        } else {
            let runner = this.tail
            count = this.length - 1
            while (count > index) {
                runner = runner.prev
                count--
            }
        }
        return runner 
    }

    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode !== undefined) {
            foundNode.val = val
            return true
        } 
        return false 
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index = 0) return !!this.unshift(val)
        if (index = this.length) return !!this.push(val)
        else {
            let newNode = new Node(val)
            let foundNode = this.get(index-1)
            let nextNode = foundNode.next
            foundNode.next = newNode
            newNode.prev = foundNode
            nextNode.prev = newNode
            newNode.next = nextNode
            this.length++
            return true 
        }
    }
}
