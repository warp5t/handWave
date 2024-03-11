const mainContainer = document.querySelector('.main-container') as HTMLElement;
let lastTouchedCell: HTMLDivElement | null = null; // Track the last touched cell

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
  const heightCell = 10;
  const countY = Math.floor(window.innerHeight / heightCell);
  const countX = Math.floor(window.innerWidth / heightCell);
  const countCell = countX * countY;

  for (let i = 0; i < countCell; i++) {
    const cell = document.createElement('div');
    mainContainer.appendChild(cell);
    cell.classList.add('cell');

    cell.addEventListener('touchstart', (event) => {
      if (event instanceof TouchEvent) {
        const touch = event.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLDivElement;
        console.log(element);
      }
    })
    cell.addEventListener('mousemove', addColor);
    cell.addEventListener('mouseout', removeColor);
    cell.addEventListener('touchmove', addColor, {passive: true});
    cell.addEventListener('touchstart', addColor, {passive: true});
  }
}

fillField();