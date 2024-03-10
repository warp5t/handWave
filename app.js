var mainContainer = document.querySelector('.main-container');
// mainContainer.style.backgroundColor = 'red';
function addColor(event) {
    var element = event.target;
    element.classList.add('activCell');
}
function removeColor(event) {
    var element = event.target;
    element.classList.remove('activCell');
}
function fillField() {
    var heightCell = 10;
    var countY = Math.floor(window.innerHeight / heightCell);
    var countX = Math.floor(window.innerWidth / heightCell);
    var countCell = countX * countY;
    for (var i = 0; i < countCell; i++) {
        var cell = document.createElement('div');
        mainContainer.append(cell);
        cell.classList.add('cell');
        cell.addEventListener('mousemove', addColor);
        cell.addEventListener('mouseout', removeColor);
    }
}
fillField();
