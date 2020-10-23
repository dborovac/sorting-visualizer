let select;
function initDOM() {
    select = document.getElementById('select');
    startBtn = document.getElementById('start');
    resetBtn = document.getElementById('reset');

    startBtn.onclick = function() {
        setSorter();
        loop();
    }

    resetBtn.onclick = function() {
        clear();
        reset();
        noLoop();
    }
}

function getSelectedAlgo() {
    return select.value;
}