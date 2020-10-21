let elements, sorter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  elements = new Array(windowWidth/10);
  stroke(1);
  for (let i = 0; i < windowWidth/10; i++) {
    elements[i] = floor(random() * windowHeight) + 1;
  }
  sorter = selectionSort();
}

function draw() {
  background(127);
  let x = 0;
  for (let i = 0; i < elements.length; i++) {
    rect(x, windowHeight-elements[i], 10, elements[i]);
    x += 10;
  }
  if (sorter.next().done) {
    print("done!");
  }
}

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

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}