import HashMapSeparateChaining from './';

describe.only('HashMapSeparateChaining', () => {
  xit('should create a HashMapSeparateChaining', () => {
    expect(new HashMapSeparateChaining() instanceof HashMapSeparateChaining);
  });

  xit('should hash a char', () => {
    const hashMap = new HashMapSeparateChaining();
    const hash = hashMap.loseLoseHashCode('dog');
    expect(hash).to.equal(314 % 37)
  });

  it('should put a value into the map', () => {
    const hashMap = new HashMapSeparateChaining();
    const dog = { name: 'Fluffy', breed: 'Shi Tzu' };
    const cat = { name: 'Wizzy', breed: 'Fuzzy' };
    hashMap.put('Jonathan', dog);
    hashMap.put('Jamie', cat);
    expect(hashMap.table[5].head.element.key).to.equal('Jonathan');
    expect(hashMap.table[5].head.next.element.key).to.equal('Jamie');
  });

  it('should get a value from the map', () => {
    const hashMap = new HashMapSeparateChaining();
    const person1 = { name: 'Fluffy', breed: 'Shi Tzu' };
    const person2 = { name: 'Wizzy', breed: 'Fuzzy' };
    hashMap.put('Jonathan', person1);
    hashMap.put('Jamie', person2);
    const jonathan = hashMap.get('Jonathan');
    expect(jonathan.key).to.equal('Jonathan');
  });

  it('should remove a value from the map', () => {
    const hashMap = new HashMapSeparateChaining();
    const person1 = { name: 'Fluffy', breed: 'Shi Tzu' };
    hashMap.put('Jonathan', person1);
    hashMap.remove('Jonathan');
    expect(hashMap.table).to.deep.equal({});
  });

  it('should return true if it is empty and false if not', () => {
    const hashMap = new HashMapSeparateChaining();
    expect(hashMap.isEmpty).to.equal(true);
    const dog = { name: 'Fluffy', breed: 'Shi Tzu' };
    const cat = { name: 'KitKat', breed: 'Choco flow' };
    hashMap.put('dog', dog);
    hashMap.put('cat', cat);
    expect(hashMap.isEmpty).to.equal(false);
  });

  it('should return the table as a string', () => {
    const hashMap = new HashMapSeparateChaining();
    const dog = { name: 'Fluffy', breed: 'Shi Tzu' };
    const cat = { name: 'KitKat', breed: 'Choco flow' };
    hashMap.put('dog', dog);
    hashMap.put('cat', cat);
    console.log(hashMap.toString());
  });
});
