const heap = [];

const parent = i => Math.floor((i - 1) / 2);
const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

const swap = (i, j) => ([heap[i], heap[j]] = [heap[j], heap[i]]);

const push = (dist, node) => {
  heap.push([dist, node]);
  let i = heap.length - 1;
  while (i > 0 && heap[i][0] < heap[parent(i)][0]) {
    swap(i, parent(i));
    i = parent(i);
  }
};

const pop = () => {
  if (!heap.length) return null;
  if (heap.length === 1) return heap.pop();

  const min = heap[0];
  heap[0] = heap.pop();

  let i = 0;
  while (left(i) < heap.length) {
    let smallest = left(i);

    if (
      right(i) < heap.length &&
      heap[right(i)][0] < heap[smallest][0]
    ) {
      smallest = right(i);
    }

    // ✅ compare by dist, not node
    if (heap[i][0] <= heap[smallest][0]) break;

    swap(i, smallest);
    i = smallest;
  }

  return min;
};

push(8, 5);
push(8, 7);
push(3, 7);
push(3, 2);
// heap.pop()
console.log(heap);

const a=pop()
console.log(a);


