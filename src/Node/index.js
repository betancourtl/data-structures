/**
 * Node is used with linked lists, to keep track of the nodes.
 */
class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

export default Node;
