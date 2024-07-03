

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    buildTree(sorted_array, start = 0, end = sorted_array.length - 1) {
        if (end < start) {
            return null;
        }

        const middle = Math.floor((start + end) / 2);
        const node = new Node(sorted_array[middle]);
        // Left
        node.left = this.buildTree(sorted_array, start, middle - 1);
        // Right
        node.right = this.buildTree(sorted_array, middle + 1, end);

        return node
    }

    insert(value, node = this.root) {
        if (!node) {
            return new Node(value);
        }
        if (value < node.value) {
            node.left = this.insert(value, node.left)
        }
        if (value > node.value) {
            node.right = this.insert(value, node.right)
        }
        return node;
    }

    delete(value, node = this.root) {
        
        // One depth child
        // Two+ depth child

        // Base Case
        if (!node) {
            return null;
        }
        if (value < node.value) {
            node.left = this.delete(value, node.left)
            return node;
        }
        if (value > node.value) {
            node.right = this.delete(value, node.right)
            return node;
        }
        // value == node.value
        else {
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            
            // Two or more children case:
            
            let replacement_value = null;
            let cursor = node.right;
            // if (!node.right.left && !node.right.right) {
            //     cursor = node.right;
            // }
            // else {
            //     cursor = node.left;
            // }
            // console.log("My first right is: ", cursor.value);
            while (cursor.left !== null) {
                console.log("My left value is: ", cursor.left.value);
                cursor = cursor.left;
            }
            console.log("After the while loop, my value is: ", cursor);
            replacement_value = cursor.value;
            console.log("My replacement value is: ", replacement_value);
            node = this.delete(replacement_value, node);
            node.value = replacement_value;
            
            return node
        }
    }

    prettyPrint (node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      }

}

const sorted_array = [1, 2, 3, 5, 6, 7, 8, 9, 10]

const binaryTree = new BST();

binaryTree.root = binaryTree.buildTree(sorted_array);

// binaryTree.prettyPrint()

// binaryTree.insert(4);
// binaryTree.insert(2.1);
// binaryTree.insert(2.2);
binaryTree.insert(5.5);
binaryTree.insert(4.9);


binaryTree.prettyPrint()

console.log("deleting");

binaryTree.delete(2);

binaryTree.prettyPrint()

// console.log(binaryTree.root)



