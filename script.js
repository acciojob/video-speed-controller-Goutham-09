const video = document.querySelector(".viewer");

const playButton = document.querySelector(".toggle");

const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

const volume = document.querySelector(".volume");

const playbackSpeed = document.querySelector(".playbackSpeed");

const rewindButton = document.querySelector('[data-skip="-10"]');
const forwardButton = document.querySelector('[data-skip="25"]');



function togglePlay() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

}

playButton.addEventListener("click", togglePlay);


// Change button character

function updateButton() {

    if (video.paused) {
        playButton.textContent = "►";
    } else {
        playButton.textContent = "❚ ❚";
    }

}

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);




function updateProgress() {

    const percentage =
        (video.currentTime / video.duration) * 100;

    progressFilled.style.width = `${percentage}%`;

}

video.addEventListener("timeupdate", updateProgress);




progress.addEventListener("click", function (e) {

    const position =
        e.offsetX / progress.offsetWidth;

    video.currentTime =
        position * video.duration;

});


// --------------------
// VOLUME
// --------------------

volume.addEventListener("input", function () {

    video.volume = this.value;

});



playbackSpeed.addEventListener("input", function () {

    video.playbackRate = this.value;

});


// --------------------
// REWIND / FORWARD
// --------------------

rewindButton.addEventListener("click", function () {

    video.currentTime -= 10;

});


forwardButton.addEventListener("click", function () {

    video.currentTime += 25;

});