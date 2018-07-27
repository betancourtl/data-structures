class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString = () => {
    const value = typeof this.value === 'object'
      ? JSON.stringify(this.value)
      : this.value;
    return `[#${this.key}: ${value}]`;
  };
}

export default ValuePair;
