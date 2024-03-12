var mainContainer = document.getElementById('mainContainer');
var lastTouchedCell = null;
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
    var heightCell = 10.2;
    var countY = Math.floor(window.innerHeight / heightCell);
    var countX = Math.floor(window.innerWidth / heightCell);
    var countCell = countX * countY;
    for (var i = 0; i < countCell; i++) {
        var cell = document.createElement('div');
        mainContainer.appendChild(cell);
        cell.classList.add('cell');
        cell.id = "cell_" + i;
    }
}
fillField();
function timeDelay(tEl) {
    setTimeout(function () {
        tEl.classList.remove('activCell');
        window.javascript.gc();
    }, 50);
}
mainContainer.addEventListener('touchmove', function (event) {
    addColor(event);
});
mainContainer.addEventListener('touchstart', function (event) {
    addColor(event);
});
mainContainer.addEventListener('mousemove', function (event) {
    if (event.target !== null) {
        var targetElement = event.target;
        targetElement.classList.add('activCell');
        timeDelay(targetElement);
    }
});
