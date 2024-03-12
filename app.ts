const mainContainer = document.getElementById('mainContainer') as HTMLElement;
let lastTouchedCell: HTMLDivElement | null = null;

function addColor(event: MouseEvent | TouchEvent) {
  let element: HTMLDivElement | null = null;

  if (event instanceof MouseEvent) {
    element = event.target as HTMLDivElement;
  } else {
    const touch = event.touches[0];
    element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLDivElement;
  }

  if (element && element.classList.contains('cell')) {
    if (lastTouchedCell && lastTouchedCell !== element) {
      lastTouchedCell.classList.remove('activCell');
    }
    lastTouchedCell = element;
    element.classList.add('activCell');
  }
}

function removeColor(event: MouseEvent | TouchEvent) {
  if (event instanceof MouseEvent) {
    const element = event.target as HTMLDivElement;
    element.classList.remove('activCell');
  }
}

function fillField() {
  const heightCell = 10.2;
  const countY = Math.floor(window.innerHeight / heightCell);
  const countX = Math.floor(window.innerWidth / heightCell);
  const countCell = countX * countY;

  for (let i = 0; i < countCell; i++) {
    const cell = document.createElement('div');
    mainContainer.appendChild(cell);
    cell.classList.add('cell');
    cell.id = `cell_${i}`;
  }
}

fillField();

function timeDelay(tEl: HTMLDivElement) {
  setTimeout(() => {
    tEl.classList.remove('activCell');
    (window as any).javascript.gc();
  }, 50);
}

mainContainer.addEventListener('touchmove', (event) => {
  addColor(event)
})

mainContainer.addEventListener('touchstart', (event) => {
  addColor(event)
})

mainContainer.addEventListener('mousemove', (event) => {
  if (event.target !== null) {
    const targetElement = event.target as HTMLDivElement;
    targetElement.classList.add('activCell')
    timeDelay(targetElement)
  }
})



