/**
 * Heaps: Anther category of trees
 * For any index of an array n
 * Left child is stored at 2n + 1
 * right child is stored at 2n + 2
 */

// Max Binary Heap
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  /**
   * Adding to a MaxBinaryHeap
   * 1. Add to the end of Heap
   * 2. Bubble up - compare with its parent node and check to swap
   */
  insert(element) {
    // Step 1:
    this.values.push(element);
    // Step 2: Bubble up
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1; // 6
    const element = this.values[index]; // value is 55
    while (index > 0) {
      // Define index of the parent
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      // swap if element is greater than value of its parent node
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // [IMPORTANT] - update index to be parent index
      index = parentIndex;
    }
  }

  /**
   * Removing from a Heap - ExtractMax
   */
  
}

let heap = new MaxBinaryHeap();
console.log(JSON.stringify(heap));
heap.insert(55);
console.log(JSON.stringify(heap));

// [41, 39, 33, 18, 27, 12, 55]
//   0   1   2   3   4   5   6
