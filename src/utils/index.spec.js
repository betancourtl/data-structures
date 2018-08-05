import { swap } from './';

describe('Utils', () => {
  it('should swap', () => {
    const arr = [1, 2, 3, 4];
    swap(arr, 0, 1);
    expect(arr).to.deep.equal([2, 1, 3, 4]);
  });
}); 