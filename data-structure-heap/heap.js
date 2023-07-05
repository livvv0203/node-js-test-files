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
  extractMax() {
    // Swap the first value with the last one
    // Store the Max value
    const max = this.values[0];
    // Pop it off
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // Sink down or bubble down the node
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0; // Sinking down from the root
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChildValue, rightChildValue;
      let swap = null;

      // check if left child index is inbound, to validate the index
      if (leftChildIndex < length) {
        leftChildValue = this.values[leftChildIndex];
        if (leftChildValue > element) {
          // keeps track of the postion that we are going to swap with
          swap = leftChildIndex;
        }
      }

      // check the same on right child index, if it's inbound or not
      if (rightChildIndex < length) {
        rightChildValue = this.values[rightChildIndex];
        if (
          (swap === null && rightChildValue > element) ||
          (swap !== null && rightChildValue > leftChildValue)
        ) {
          swap = rightChildIndex;
        }
      }

      // never swap, break out of the loop
      if (swap === null) break;
      // Do the swap
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      // update new parent
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log(JSON.stringify(heap));
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(JSON.stringify(heap));

// [41, 39, 33, 18, 27, 12, 55]
//   0   1   2   3   4   5   6
