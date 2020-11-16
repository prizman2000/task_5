let moleArray = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11', 'm12', 'm13', 'm14', 'm15'];
let score = 0;
let time;
let gameEnd = true;

window.addEventListener('DOMContentLoaded', gamePlay)

document.getElementsByClassName('play')[0].addEventListener('click', start);

function gamePlay() {
    document.getElementById('mole_container').addEventListener('click', function (data) {
        if (moleArray.indexOf(data.target.id) !== -1) {
            deleteMole(data.target.id);
            changePoints(++score);
            setTimeout(addMole, 300, getRandomMole());
        }
    })
}

function getRandomMole() {
    return moleArray[Math.floor(Math.random() * Math.floor(14))];
}

function addMole(id) {
    document.getElementById(id).style.display = 'block';
    if (!gameEnd) {
        setTimeout(function () {
            if (document.getElementById(id).style.display !== 'none') {
                deleteMole(id);
                setTimeout(addMole, Math.random() * Math.floor(300) + 100, getRandomMole());
            }
        }, Math.round(Math.random() * Math.floor(800)) + 300);
    }
}

function deleteMole(id) {
    document.getElementById(id).style.display = 'none';
}

function changePoints() {
    document.getElementById('points').innerHTML = score;
}

function startTime() {
    time = Date.now();
    countTime();
}

function countTime() {
    if ((Date.now() - time) >= 20000) {
        stopGame();
    } else {
        setTimeout(countTime, 20);
        document.getElementById('progress_bar').style.width = 80 - (Date.now() - time) * 0.004 + '%';
        document.getElementById('time').innerHTML = (Math.round(20 - (Date.now() - time) / 1000)).toString();
    }
}

function clear() {
    for (let i = 0; i < moleArray.length; i++) {
        document.getElementsByClassName('mol')[i].style.display = 'none';
    }
}

function start() {
    score = 0;
    document.getElementById('points').innerHTML = '0';
    clear();
    startTime();
    setTimeout(addMole, 300, getRandomMole());
}

function stopGame() {
    clear();
    score = 0;
    document.getElementById('time').innerHTML = '20';
    document.getElementById('progress_bar').style.width = 80 + '%';
}