import HashMapSeparateChaining from './';

describe.only('HashMapSeparateChaining', () => {
  it('should create a HashMapSeparateChaining', () => {
    expect(new HashMapSeparateChaining() instanceof HashMapSeparateChaining);
  });

  it('should hash a char', () => {
    const hashMap = new HashMapSeparateChaining();
    const hash = hashMap.loseLoseHashCode('dog');
    expect(hash).to.equal(314 % 37)
  });

  it('should put a value into the map', () => {
    const hashMap = new HashMapSeparateChaining();
    const value = { name: 'Fluffy', breed: 'Shi Tzu' };
    hashMap.put('dog', value);
    expect(hashMap.get('dog')).to.deep.equal(value);
  });

  xit('should remove a value from the map', () => {
    const hashMap = new HashMap();
    const value = { name: 'Fluffy', breed: 'Shi Tzu' };
    hashMap.put('dog', value);
    hashMap.remove('dog');
    expect(hashMap.table).to.deep.equal({})
  });

  xit('should get a value from the map', () => {
    const hashMap = new HashMap();
    const dog = { name: 'Fluffy', breed: 'Shi Tzu' };
    const cat = { name: 'KitKat', breed: 'Choco flow' };
    hashMap.put('dog', dog);
    hashMap.put('cat', cat);
    expect(hashMap.get('dog')).to.equal(dog);
    expect(hashMap.get('cat')).to.equal(cat);
  });

  xit('should return true if it is empty and false if not', () => {
    const hashMap = new HashMap();
    expect(hashMap.isEmpty).to.equal(true);
    const dog = { name: 'Fluffy', breed: 'Shi Tzu' };
    const cat = { name: 'KitKat', breed: 'Choco flow' };
    hashMap.put('dog', dog);
    hashMap.put('cat', cat);
    expect(hashMap.isEmpty).to.equal(false);
  });

  xit('should return the table as a string', () => {
    const hashMap = new HashMap();
    expect(hashMap.isEmpty).to.equal(true);
    const dog = { name: 'Fluffy', breed: 'Shi Tzu' };
    const cat = { name: 'KitKat', breed: 'Choco flow' };
    hashMap.put('dog', dog);
    hashMap.put('cat', cat);
  });
});
