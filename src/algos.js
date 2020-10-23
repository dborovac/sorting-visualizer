function* selectionSort() {
    for (let i = 0; i < elements.length-1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < elements.length; j++) {
        if (elements[j] < elements[minIdx]) minIdx = j;                              
      }
      yield swap(elements, minIdx, i);            
    }
     
  }

  function* bubbleSort() {
      for (let i = 0; i < elements.length; i++) {
          for (let j = 0; j < elements.length; j++) {
              if (elements[j] > elements[j+1]) yield swap(elements, j, j+1);              
          }
      }
  }

  function* quickSort(array, min, max) {
    if (max - min <= 1) return array;

    let [pivot, less, greater] = [array[min], [], []];
    for (let i = min + 1; i < max; i++) {
      if (array[i] < pivot) less.push(array[i]);
      else greater.push(array[i]);
      array.splice(min, i - min + 1, ...less.concat(pivot, greater));
      yield array;
    }
    yield* quickSort(array, min, min + less.length);
    yield* quickSort(array, min + less.length + 1, max);
  }

  
  function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }