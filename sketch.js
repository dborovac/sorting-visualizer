let elements, sorter;

function setup() {
  canvas = createCanvas(windowWidth-(windowWidth*0.2), windowHeight-(windowHeight*0.2));
  canvas.parent('container');
  
  stroke(100);
  c = color('#bedbbb');
  fill(c);

  generate();

  initDOM();
  // setSorter();
  sorter = selectionSort();
  noLoop();
}

function draw() {
  c = color('#e8ded2')
  background(c);

  let x = 0;
  for (let i = 0; i < elements.length; i++) {
    rect(x, height-elements[i], floor(width/elements.length), elements[i]);
    x += 10;
  }

  if (sorter.next().done) {
    print("done!");
  }
}

function generate() {
  elements = new Array(floor(width/10));
  for (let i = 0; i < width/10; i++) {
    elements[i] = floor(random() * height) + 1;
  }
}

function reset() {
  c = color('#e8ded2')
  background(c);

  generate();
  let x = 0;
  for (let i = 0; i < elements.length; i++) {
    rect(x, height-elements[i], floor(width/elements.length), elements[i]);
    x += 10;
  }
}

function setSorter() {
  switch(getSelectedAlgo()) {
    case "selection-sort":
      sorter = selectionSort();
      break;      
    case "bubble-sort":
      sorter = bubbleSort();
      break;
    default:
      print('not found');
  }
}