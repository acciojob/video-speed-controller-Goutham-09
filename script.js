const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

function handleSpeed(e) {
    const y = e.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;

    const min = 0.4;
    const max = 4;

    const playbackRate = percent * (max - min) + min;

    speedBar.style.height = `${percent * 100}%`;
    speedBar.textContent = `${playbackRate.toFixed(2)}×`;

    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleSpeed);