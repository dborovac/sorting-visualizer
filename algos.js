function* selectionSort() {
    for (let i = 0; i < elements.length-1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < elements.length; j++) {
        if (elements[j] < elements[minIdx]) minIdx = j;                        
      }
      swap(elements, minIdx, i);
      yield;
    }  
  }

  function* bubbleSort() {
      for (let i = 0; i < elements.length; i++) {
          for (let j = 0; j < elements.length; j++) {
              if (elements[j] > elements[j+1]) swap(elements, j, j+1);
          }
          yield;
      }
  }
  
  function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }