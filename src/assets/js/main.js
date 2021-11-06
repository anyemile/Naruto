console.log("Hola como estas :D")
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

const audio = document.getElementById("audio")
const playPause =document.getElementById("play")

playPause-addEventListener("click", () => {
    if (audio.paused || audio.ended) {
            playPause.querySelector("pause-btn").classList
            playPause.querySelector("play-btn").classList
        audio.play();
    } else {
        audio.pause();
        playPause.querySelector("pause-btn").classList
        playPause.querySelector("play-btn").classList
    }
})