// node containing left and right
// BST takes sorted array
// takes middle, then construct left and right using bst again

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    create(sorted_array, start = 0, end = sorted_array.length - 1) {
        if (start > end) {
            return null;
        }
        const middle = sorted_array.length - 1;
        const node = new Node(sorted_array[middle]);
        node.left = this.create(sorted_array, start, middle - 1);
        node.right = this.create(sorted_array, middle + 1, end);
        return node
    }

    build(sorted_array) {
        this.root = this.create(sorted_array)
    }
}

const sorted_array = [1, 2, 3, 4, 5, 6, 7];
const tree = new BST();
tree.build(sorted_array);
console.log(tree.root);