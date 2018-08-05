import { defaultEquals } from '../utils';
import TreeNode from '../TreeNode';

class BinarySearchTree {
  constructor(equalsFn = defaultEquals) {
    this.root = null;
    this.equalsFn = equalsFn;
  }

  // do not bind "this" with arrow fn so subclasses can call this with super.
  insert(key) {
    this.root === null
      ? this.root = new TreeNode(key)
      : this.insertNode(this.root, key);

    return this;
  };

  insertNode(root, key) {
    const right = root.right;
    const left = root.left;

    if (key < root.key) {
      left === null
        ? root.left = new TreeNode(key)
        : this.insertNode(root.left, key);
    }
    else {
      right === null
        ? root.right = new TreeNode(key)
        : this.insertNode(root.right, key);
    }
  };

  inOrderTraverse = cb => {
    this.inOrderTraverseNode(cb, this.root)
  };

  preOrderTraverse = cb => {
    this.preOrderTraverseNode(cb, this.root)
  };

  postOrderTraverse = cb => {
    this.postOrderTraverseNode(cb, this.root)
  };

  // L C R
  inOrderTraverseNode = (cb, node) => {
    if (node !== null) {
      this.inOrderTraverseNode(cb, node.left);
      cb(node);
      this.inOrderTraverseNode(cb, node.right);
    }
  };

  // C L R
  preOrderTraverseNode = (cb, node) => {
    if (node !== null) {
      cb(node);
      this.preOrderTraverseNode(cb, node.left);
      this.preOrderTraverseNode(cb, node.right);
    }
  };

  // L R C
  postOrderTraverseNode = (cb, node) => {
    if (node !== null) {
      this.postOrderTraverseNode(cb, node.left);
      this.postOrderTraverseNode(cb, node.right);
      cb(node);
    }
  };

  min = () => {
    const node = this.findMinNode(this.root);
    return node !== null ? node.key : null
  };

  findMinNode = (node) => {
    if (node === null) return node;
    else if (node.left !== null) return this.findMinNode(node.left);
    else return node;
  };

  max = () => {
    const node = this.findMaxNode(this.root);
    return node !== null ? node.key : null
  };

  findMaxNode = (node) => {
    if (node === null) return node;
    else if (node.right !== null) return this.findMaxNode(node.right);
    else return node;
  };

  search = key => {
    return this.searchNode(this.root, key);
  };

  searchNode = (node, key) => {
    if (node === null) return false;
    if (key < node.key) return this.searchNode(node.left, key);
    else if (key > node.key) return this.searchNode(node.right, key);
    else return true;
  };

  remove = key => {
    return this.removeNode(this.root, key);
  };

  _isLeafNode = node => {
    return node.left === null && node.right === null
  };

  removeNode = (node, key) => {
    if (node === null) return null;
    const nodeKey = node.key;

    if (key < nodeKey) {
      // we want to replace the left node here with the new node or null
      node.left = this.removeNode(node.left, key);
      return node;
    }

    else if (key > nodeKey) {
      // we want to replace the left node here with the new node or null
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // node has been found at this point
    else {
      // case 1
      if (this._isLeafNode(node)) {
        // set the node to null and return it back so it can replace
        // the left or right parent node values
        node = null;
        return node;
      }
      //case 2
      if (node.left === null) {
        // we can do this because we know that one of the leaf nodes is null
        node = node.right;
        return node;
      }
      //case 3
      else if (node.right === null) {
        // we can do this because we know that one of the leaf nodes is null
        node = node.left;
        return node;
      }

      // case 3
      // left and right nodes exist.
      // we find the minimum node in this tree.
      // we then set the node.key value that we are removing to the minimum node key.
      // we remove the minimum node.key from the tree.
      // this is a very clever implementation (I found this on a packt javascript data structures book).
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  };
}

export default BinarySearchTree;
