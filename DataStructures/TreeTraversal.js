// Breadth First Search
// Depth First Search (InOrder (from smallest to biggest), PostOrder, PreOrder)
// same time complexity between BFS and DFS: O(N)
// space complexity: for wide trees, DFS has less space complexity, versus BFS (needs to store everything on a level in a queue)
// for deep trees (e.g. deep one-sided tree) BFS saves a lot of space complexity 

BFS() {
    let node = this.root 
    let data = []
    let queue = []
    queue.push(node)
    while (queue.length) {
        node = queue.shift() 
        data.push (node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return data 
}  

DFSPreOrder() {
    let data = []
    function traverse(node) {
        data.push(node.val)
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data 
}

DFSPostOrder() {
    let data = []
    function traverse(node) {
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        data.push(node.val)
    }
    traverse(this.root)
    return data 
}

DFSInOder() {
    let data = []
    function traverse(node) {
        if (node.left) traverse(node.left)
        // node.left && traverse(node.left)
        data.push(node.val)
        if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data 
}