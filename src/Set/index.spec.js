import Set from './';

describe('should ', () => {
  it('should create a set', () => {
    const set = new Set();
    set
      .add(1)
      .add(2)
      .add(3);
    expect(set.items[1]).to.equal(1);
    expect(set.items[2]).to.equal(2);
    expect(set.items[3]).to.equal(3);
    expect(set.count).to.equal(3)
  });

  it('should remove to a set', () => {
    const set = new Set();
    set
      .add(1)
      .add(2)
      .add(3)
      .remove(2)
      .remove(3);
    expect(set.items[1]).to.equal(1);
    expect(set.items[2]).to.equal(undefined);
    expect(set.items[3]).to.equal(undefined);
    expect(set.count).to.equal(1)
  });

  it('should get the values of a set', () => {
    const set = new Set();
    set
      .add(1)
      .add(2)
      .add(3);
    expect(set.values).to.deep.equal([1, 2, 3]);
    expect(set.count).to.equal(3)
  });

  it('should clear the set', () => {
    const set = new Set();
    set
      .add(1)
      .add(2)
      .add(3)
      .clear();
    expect(set.values).to.deep.equal([]);
    expect(set.count).to.equal(0)
  });

  it('should check if the set has a value', () => {
    const set = new Set();
    set
      .add(1)
      .add(2)
      .add(3);
    expect(set.values).to.deep.equal([1, 2, 3]);
    expect(set.has(1)).to.equal(true);
    expect(set.has(2)).to.equal(true);
    expect(set.has(3)).to.equal(true);
    expect(set.count).to.equal(3)
  });

  it('should return the size of a set', () => {
    const set = new Set();
    set
      .add(1)
      .add(2)
      .add(3);
    expect(set.size).to.equal(3);
  });

  it('should return the items in SetA and Set B', () => {
    const setA = new Set([1, 2, 3]);
    const setB = new Set([4, 5, 6]);
    const setC = setA.union(setB);
    expect(setC.values).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it('should return the items that are the same in Set A and Set B', () => {
    const setA = new Set([1, 2, 3, 4, 5]);
    const setB = new Set([3, 4, 5, 6, 7]);
    const setC = setA.intersection(setB);
    expect(setC.values).to.deep.equal([3, 4, 5]);
  });

  it('should return the items that are not the same in Set A and Set B', () => {
    const setA = new Set([1, 2, 3, 4, 5]);
    const setB = new Set([3, 4, 5, 6, 7]);
    const setC = setA.difference(setB);
    expect(setC.values).to.deep.equal([1, 2]);
  });

  it('should return true if setA is a subset of setB', () => {
    const setA = new Set([4, 5]);
    const setB = new Set([1, 2, 3, 4, 5]);
    const isSubset = setA.isSubsetOf(setB);
    expect(isSubset).to.equal(true);
  });

  it('should return false if setB is not a subset of setA', () => {
    const setA = new Set([4, 5, 6]);
    const setB = new Set([1, 2, 3, 4, 5]);
    const isSubset = setA.isSubsetOf(setB);
    expect(isSubset).to.equal(false);
  });
});