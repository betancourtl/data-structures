import HashSet from './';

describe('HashSet', () => {
  it('should create a HashMap', () => {
    expect(new HashSet() instanceof HashSet);
  });

  it('should hash a char', () => {
    const hashSet = new HashSet();
    const hash = hashSet.loseLoseHashCode('dog');
    expect(hash).to.equal(314 % 37)
  });

  it('should put a value into the hashSet', () => {
    const hashSet = new HashSet();
    hashSet.put('Luis');
    hashSet.put('Raul');
    expect(hashSet.get('Luis')).to.equal('Luis');
    expect(hashSet.get('Raul')).to.equal('Raul');
  });

  it('should remove a value from the hashSet', () => {
    const hashSet = new HashSet();
    hashSet.put('Luis');
    hashSet.put('Raul');
    hashSet.remove('Luis');
    hashSet.remove('Raul');
    expect(hashSet.get('Luis')).to.equal(undefined);
    expect(hashSet.get('Raul')).to.equal(undefined);
    expect(hashSet.table).to.deep.equal({});
  });

  it('should get a value from the hashSet', () => {
    const hashSet = new HashSet();
    hashSet.put('Luis');
    hashSet.put('Raul');
    expect(hashSet.get('Luis')).to.equal('Luis');
    expect(hashSet.get('Raul')).to.equal('Raul');
  });

  it('should return true if it is empty and false if not', () => {
    const hashMap = new HashSet();
    expect(hashMap.isEmpty).to.equal(true);
    const dog = { name: 'Fluffy', breed: 'Shi Tzu' };
    const cat = { name: 'KitKat', breed: 'Meow Mix' };
    hashMap.put('dog', dog);
    hashMap.put('cat', cat);
    expect(hashMap.isEmpty).to.equal(false);
  });

  it('should return the table as a string', () => {
    const hashSet = new HashSet();
    hashSet.put('Luis');
    hashSet.put('Jonathan');
    hashSet.put('Jaime');
    hashSet.put('Raul');
    expect(typeof hashSet.toString()).to.equal('string');
  });
});
