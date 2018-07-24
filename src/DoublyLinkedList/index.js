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
    let current = this.head;

    // When inserting in the head
    if (index === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
    }

    // when inserting in the tail
    else if (index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    }

    else {
      // when inserting anywhere else
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
    }
    this.count++;
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
