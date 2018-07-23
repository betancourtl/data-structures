import Node from '../Node';

class DoublyNode extends Node {
  constructor(element, prev = null, next = null) {
    super(element, next);
    this.prev = prev;
  }
}

export default DoublyNode;
