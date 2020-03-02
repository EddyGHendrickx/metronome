let song = new Audio('TICK.mp3');


function bpmToMs(bpm){
    return (1/(bpm/60))*1000;
}

function clearTheInterval(parameter) {
        clearInterval(parameter);
}

function metronome() {
    song.play();
}
let play = document.getElementById("play");
play.addEventListener("click", function () {
    let input = +document.getElementById("input").value;
    let result = bpmToMs(input);
    let Interval = setInterval(metronome, result);
    let stop = document.getElementById("stop");
    let duratie = (+document.getElementById("length").value)*1000;

    setTimeout(function () {
        clearTheInterval(Interval);
    }, duratie);

    stop.addEventListener("click", function () {
        clearTheInterval(Interval);
    });
});

