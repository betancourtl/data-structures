import LinkedList from '../LinkedList';
import DoublyNode from "../DoublyNode";

class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }

  push = el => {
    const node = new DoublyNode(el);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    this.count++;
    this.tail = node;
  };

  insertAt = (index, el) => {
    if (!this._withinBoundary(index)) return undefined;
    const node = new DoublyNode(el);
    let prev = null;
    let current = this.head;

    // prev -> node -> current
    if (index === 0) {
      node.next = current;
      node.prev = null;
      current.prev = node;
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

      // prev -> node -> current
      prev.next = node;
      node.prev = prev;
      node.next = current;
      current.prev = node;
    }
    this.count++;
    this.tail = this.getElementAt(this.count - 1);
  };

  removeAt = (index) => {
    if (!this._withinBoundary(index)) return undefined;
    let current = this.head;

    if (index === 0) {
      // prev | current | next
      //        ^ to be deleted
      this.head = current.next;
      current.next && current.next.prev
        ? current.next.prev = null
        : this.tail = null;
      this.count--;
      return;
    }

    let prev = null;
    for (let i = 0; i < index; i++) {
      // prev | current | next
      //        ^ to be deleted
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    prev.next && prev.next.prev
      ? prev.next.prev = prev
      : this.tail = prev;

    this.count--;
    return current.element;
  };
}

export default DoublyLinkedList;
