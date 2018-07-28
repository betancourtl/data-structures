import { defaultEquals } from '../utils';
import TreeNode from '../TreeNode';

class BinarySearchTree {
  constructor(equalsFn = defaultEquals) {
    this.root = null;
    this.equalsFn = equalsFn;
  }

  insert = key => {
    this.root === null
      ? this.root = new TreeNode(key)
      : this.insertNode(this.root, key);

    return this;
  };

  insertNode = (root, key) => {
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
    return this.minNode(this.root);
  };

  minNode = (node) => {
    if (node === null) return node;
    else if (node.left !== null) return this.minNode(node.left);
    else return node.key;
  };

  max = () => {
    return this.maxNode(this.root);
  };

  maxNode = (node) => {
    if (node === null) return node;
    else if (node.right !== null) return this.maxNode(node.right);
    else return node.key;
  };

  search = key => {
    return this.searchNode(this.root, key);
  };

  searchNode = (node, key) => {
    // node is null
    if (node === null) return false;
    // key is less than left
    if (key < node.key) return this.searchNode(node.left, key);
    // key is greater than right
    else if (key > node.key) return this.searchNode(node.right, key);
    // We found the node
    else return true;
  };

  remove = e => {
  };
}

export default BinarySearchTree;
