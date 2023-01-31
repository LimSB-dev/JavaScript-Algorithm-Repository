class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.bits = new Array(size).fill(0);
  }

  hash1(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash % this.size;
  }

  hash2(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return (hash >> 16) % this.size;
  }

  add(str) {
    this.bits[this.hash1(str)] = 1;
    this.bits[this.hash2(str)] = 1;
  }

  contains(str) {
    return this.bits[this.hash1(str)] === 1 && this.bits[this.hash2(str)] === 1;
  }
}
