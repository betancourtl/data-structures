import TreeNode from './';

describe('TreeNode', () => {
  it('should create a tree node', () => {
    const node = new TreeNode();
    expect(node instanceof TreeNode);
  });

  it('should add a left and right property to the class', () => {
    const node = new TreeNode();
    node.left = 'Hello';
    node.right = 'World';
    node.key = 1;
    expect(node.left).to.equal(node.left);
    expect(node.right).to.equal(node.right);
    expect(node.key).to.equal(node.key);
  });
});