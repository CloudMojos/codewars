// Linked list has two parts:
// First is the node,
// Second is the linked_list containing nodes

// nodes has its own value and the address of the next node.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        // Base case, wala pang head
        if (this.head === null) {
            return this.head = newNode;
        }
        let currNode = this.head;
        // Traverse to the end
        while (currNode.next) {
            currNode = currNode.next;
        }
        // exited while loop, now add the value to the end
        currNode.next = newNode;
    }

    search(value, currNode = this.head) {
        if (currNode === null) return null;
        if (currNode.value === value) return currNode;

        return this.search(value, currNode.next)
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log(list.search(2)); // Output: true
console.log(list.search(4)); // Output: false