import LinkedList from '../LinkedList';
import DoublyNode from "../DoublyNode";

class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }

  push = el => {
    this.insertAt(this.count, el);
  };

  insertAt = (index, el) => {
    if (!this._withinInsertBoundary(index)) return undefined;
    const node = new DoublyNode(el);
    let prev = null;
    let current = this.head;

    // Insert at the tail
    if (this.count === index) {
      const node = new DoublyNode(el);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
      }
    }

    // prev -> node -> current
    else if (index === 0) {
      this.head = node;
      if (this.head === null) this.tail = node;
      node.next = current;
      node.prev = null;
      current.prev = node;
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

    // The item is the head
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

    // If the item is the tail
    let prev = null;

    // We use the tail reference to avoid searching for the element
    // This results in an 0(1) operation
    if (this.count - 1 === index) {
      prev = this.tail.prev;
      current = this.tail;
    } else {
      // We use the search for the index
      // This results in an 0(n) operation
      current = this.getElementAt(index);
      prev = current.prev;
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
