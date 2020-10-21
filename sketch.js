let elements, sorter;

function setup() {
  canvas = createCanvas(windowWidth-(windowWidth*0.2), windowHeight-(windowHeight*0.2));
  canvas.parent('container');
  elements = new Array(floor(width/10));
  stroke(100);
  c = color('#bedbbb');
  fill(c);
  for (let i = 0; i < width/10; i++) {
    elements[i] = floor(random() * height) + 1;
  }
  sorter = selectionSort();
  // noLoop();
}

function draw() {
  c = color('#e8ded2')
  background(c);
  let x = 0;
  for (let i = 0; i < elements.length; i++) {
    print(width/elements.length);
    rect(x, height-elements[i], floor(width/elements.length), elements[i]);
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