/**
 * Node is used with linked lists, to keep track of the nodes.
 */
class Node {
  constructor(element) {
    this.next = null;
    this.element = element;
  }
}

/**
 * Linked list creates linked nodes.
 */
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  push = el => {
    const node = new Node(el);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  };

  insert = (index, el) => {
    if ((index >= 0 && index <= this.count) === false) return undefined;
    const node = new Node(el);
    let prev = null;
    let current = this.head;

    // element is at head
    if (index === 0) {
      node.next = current;
      this.head = node;
    }

    // element is not at head
    else {
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = node;
      node.next = current;
    }
    this.count++;
  };

  remove = el => {

  };

  indexOf = el => {

  };

  removeAt = index => {

  };

  toString = () => {

  };

  size = () => {

  };

  isEmpty = () => {
    return this.head === null;
  };
}

export default LinkedList;
