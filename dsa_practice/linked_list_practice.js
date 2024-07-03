// Linked list has two parts:
// Node, LinkedList
// Node has value and address of next node
// LinkedList has head, append, search


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        const newNode = new Node(value)
        // Check kung wala pang laman yung head
        if (!this.head) {
            return this.head = newNode
        }
        // We are traversing to the end of the linked list
        let currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
        }
        return currNode.next = newNode;
    }

    search(value, currNode = this.head) {
        // Base Case, End of the Linked List
        if (currNode === null) { return null }
        // Base Case, Value found
        if (currNode.value === value) { return currNode }

        return this.search(value, currNode.next)
    }

}

let linked_list = new LinkedList();

console.log(linked_list.append(0));
console.log(linked_list.append(1));
console.log(linked_list.append(2));

console.log(linked_list.search(1));