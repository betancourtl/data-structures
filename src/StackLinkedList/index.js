import DoublyLinkedList from '../DoublyLinkedList';

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push = el => {
    this.items.push(el);
  };

  pop = () => {
    this.items.removeAt(this.items.count - 1);
  };
}

export default StackLinkedList;
