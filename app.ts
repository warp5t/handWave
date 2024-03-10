

const mainContainer = document.querySelector('.main-container') as HTMLElement;

// mainContainer.style.backgroundColor = 'red';

function addColor(event: MouseEvent | TouchEvent) {
  const element = event.target as HTMLDivElement;
  element.classList.add('activCell');
}

function removeColor(event: MouseEvent | TouchEvent) {
  const element = event.target as HTMLDivElement;
  element.classList.remove('activCell');
}

function fillField() {
  const heightCell = 10;
  const countY = Math.floor(window.innerHeight / heightCell);
  const countX = Math.floor(window.innerWidth / heightCell);
  const countCell = countX * countY;
  for (let i = 0; i < countCell; i++) {
    const cell = document.createElement('div') as HTMLDivElement;
    mainContainer.append(cell);
    cell.classList.add('cell');
    cell.addEventListener('mousemove', addColor)
    cell.addEventListener('mouseout', removeColor)
    cell.addEventListener('touchstart', addColor)
    cell.addEventListener('touchmove', addColor)
    cell.addEventListener('touchend', removeColor)
  }
}

fillField()