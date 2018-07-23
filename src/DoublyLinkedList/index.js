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
}

export default DoublyLinkedList;
