import LinkedList from '../LinkedList';
import Node from '../Node';

class CircularList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  // whenever I push an item it needs to change the tail pointer.
  push = el => {
    const node = new Node(el);
    if (this.head === null) {
      node.next = node;
      this.head = node;
    }
    else {
      this.getElementAt(this.count - 1).next = node;
      node.next = this.head;
    }
    this.count++;
    return this;
  };

  removeAt = index => {
    // check if the index is within boundary
    if (!this._withinBoundary(index)) return undefined;
    // find the node and the prev node.
    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      this.count--;
      // update the tail pointers
      this.count === 0
        ? this.head = null
        : this.getElementAt(this.count - 1).next = this.head;
      return ;
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
}

export default CircularList;
