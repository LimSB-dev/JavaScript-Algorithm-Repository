class Heap {
  constructor() {
    this.heap = [];
  }

  // 트리 구조를 만족하도록 마지막 노드에 새로운 값을 추가하는 함수
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 새로운 노드를 추가한 후에 부모 노드와 값을 비교하여 교환하는 함수
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  // 최댓값을 가져오는 함수
  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return max;
  }

  // 힙의 가장 큰 요소를 제거하고 부모 노드와 값을 비교하여 교환하는 함수
  sinkDown(index) {
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > this.heap[index]) swap = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > this.heap[index]) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  // 가장 작은 값을 가져오는 함수
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return min;
  }

  // 가장 작은 값을 올바른 위치에 배치하는 함수
  heapifyDown() {
    let index = 0;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;

    while (leftChildIndex < this.heap.length) {
      let minIndex = index;
      if (this.heap[minIndex] > this.heap[leftChildIndex])
        minIndex = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[minIndex] > this.heap[rightChildIndex]
      )
        minIndex = rightChildIndex;
      if (minIndex === index) break;
      [this.heap[index], this.heap[minIndex]] = [
        this.heap[minIndex],
        this.heap[index],
      ];
      index = minIndex;
      leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;
    }
  }
}
