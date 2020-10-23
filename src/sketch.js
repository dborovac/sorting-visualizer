let elements, sorter;

function setup() {
  canvas = createCanvas(windowWidth-(windowWidth*0.4), windowHeight-(windowHeight*0.2));
  canvas.parent('container');
  
  noStroke();
  c = color('#f5a25d');
  fill(c);

  generateArray();

  initDOM();
  sorter = selectionSort();
  noLoop();
}

function draw() {
  background('#ebebeb');

  let x = 0;
  for (let i = 0; i < elements.length; i++) {
    rect(x, height-elements[i], floor(width/elements.length), elements[i]);
    x += width/elements.length;
  }

  if (sorter.next().done) {
    print('done!');
    noLoop();
  }
}

function generateArray() {
  elements = new Array(floor(width/10));
  for (let i = 0; i < width/10; i++) {
    elements[i] = floor(random() * height) + 1;
  }
}

function reset() {
  background('#ebebeb'); //fixes a bug where the canvas background color changes to the bg-color of the <body> on reset (???)
  generateArray();  
  let x = 0;
  for (let i = 0; i < elements.length; i++) {
    rect(x, height-elements[i], floor(width/elements.length), elements[i]);
    x += width/elements.length;
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
    case "quick-sort":
      sorter = quickSort(elements, 0, elements.length);
      break;
    default:
      print('not found');
  }
}
