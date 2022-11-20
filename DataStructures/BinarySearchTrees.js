// nonlinear, only parent-child relationship exist, only one root exists, leaf (with no children), edge (connection, usually an arrow)

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let runner = this.root
        while (true) {
            if (val === runner.val) return undefined
            if (val < runner.val) {
                if (!runner.left) {
                    runner.left = newNode
                    return this
                }
                runner = runner.left
            } else {
                if (!runner.right) {
                    runner.right = newNode
                    return this
                }
                runner = runner.right
            }
        }
    }

    find(val) {
        if (!this.root) return false
        let runner = this.root
        while (true) {
            if (val === runner.val) return true
            else if (val<runner.val) {
                if (!runner.left) return false
                runner = runner.left
            } else {
                if (!runner.right) return false
                runner = runner.right 
            }
        }
    }

    // find(value){
    //     if(this.root === null) return false;
    //     var current = this.root,
    //         found = false;
    //     while(current && !found){
    //         if(value < current.value){
    //             current = current.left;
    //         } else if(value > current.value){
    //             current = current.right;
    //         } else {
    //             found = true;
    //         }
    //     }
    //     if(!found) return undefined;
    //     return current;
    // }
    // contains(value){
    //     if(this.root === null) return false;
    //     var current = this.root,
    //         found = false;
    //     while(current && !found){
    //         if(value < current.value){
    //             current = current.left;
    //         } else if(value > current.value){
    //             current = current.right;
    //         } else {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)