var mainContainer = document.querySelector('.main-container');
var lastTouchedCell = null; // Track the last touched cell
function addColor(event) {
    var element = null;
    if (event instanceof MouseEvent) {
        element = event.target;
    }
    else {
        var touch = event.touches[0];
        element = document.elementFromPoint(touch.clientX, touch.clientY);
    }
    if (element && element.classList.contains('cell')) {
        if (lastTouchedCell && lastTouchedCell !== element) {
            lastTouchedCell.classList.remove('activCell');
        }
        lastTouchedCell = element;
        element.classList.add('activCell');
    }
}
function removeColor(event) {
    if (event instanceof MouseEvent) {
        var element = event.target;
        element.classList.remove('activCell');
    }
}
function fillField() {
    var heightCell = 10;
    var countY = Math.floor(window.innerHeight / heightCell);
    var countX = Math.floor(window.innerWidth / heightCell);
    var countCell = countX * countY;
    for (var i = 0; i < countCell; i++) {
        var cell = document.createElement('div');
        mainContainer.appendChild(cell);
        cell.classList.add('cell');
        cell.addEventListener('touchstart', function (event) {
            if (event instanceof TouchEvent) {
                var touch = event.touches[0];
                var element = document.elementFromPoint(touch.clientX, touch.clientY);
                console.log(element);
            }
        });
        cell.addEventListener('mousemove', addColor);
        cell.addEventListener('mouseout', removeColor);
        cell.addEventListener('touchmove', addColor, { passive: true });
        cell.addEventListener('touchstart', addColor, { passive: true });
    }
}
fillField();
