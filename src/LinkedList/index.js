import Node from '../Node';
import { defaultEquals } from '../utils';

/**
 * Linked list creates linked nodes.
 */
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
    this.equals = defaultEquals; // User can change this to be able to compare different data structures.
  }

  _withinBoundary = index => {
    return (index >= 0 && index < this.count) === true;
  };

  getElementAt = index => {
    if (!this._withinBoundary(index)) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  };

  push = el => {
    const node = new Node(el);
    if (this.head === null) this.head = node;
    else this.getElementAt(this.count - 1).next = node;
    this.count++;
    return this;
  };

  insertAt = (index, el) => {
    if (!this._withinBoundary(index)) return undefined;
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

  removeAt = index => {
    // check id the index is within boundary
    if (!this._withinBoundary(index)) return undefined;
    // find the node and the prev node.
    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      this.count--;
      return;
    }

    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.count--;
    return current.element;
  };

  remove = el => {
    const index = this.indexOf(el);
    return this.removeAt(index);
  };

  indexOf = el => {
    let current = this.head;

    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equals(current.element, el)) return i;
      current = current.next;
    }

    return -1;
  };

  size = () => {
    return this.count;
  };

  isEmpty = () => {
    return this.head === null;
  };

  toString = () => {
    if (this.isEmpty()) return '';
    let current = this.head;
    let acc = [];
    for (let i = 0; i < this.count; i++) {
      acc.push(current.element);
      current = current.next;
    }

    return acc.join(', ');
  };
}

export default LinkedList;
