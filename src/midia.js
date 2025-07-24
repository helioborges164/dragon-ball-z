const btnSound = document.querySelector(".btn-sound")
const btnLogin = document.querySelector(".btn-login")
const btnClose = document.querySelector(".btn-close")
const imageSound = document.querySelector(".image-sound")

const music = document.getElementById("music-dbz")
let activeAudio = false

function soundClick() {
    

    if (activeAudio) {
        imageSound.src = "/assets/image/sound-off.png"
        music.pause()
    } else {
        imageSound.src = "/assets/image/sound-on.png"
        music.play()
    }
    activeAudio = !activeAudio
}



btnSound.addEventListener("click", soundClick)

//Seção 2

const trailerVideo = document.getElementById("trailer")

function muteAudio() {
    music.volume = 0.1 
}

function restore() {
    music.volume = 1 
}

const tag = document.createElement("script")
tag.src = "https://www.youtube.com/iframe_api"

const firstScriptTag = document.getElementsByTagName("script")[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let player

window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player("trailer", {
        events: {
            "onStateChange": onPlayerStateChange
        }
    })
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        if (activeAudio) {
            muteAudio()
        }
    } else if (event.data === YT.PlayerState.PAUSED) {
        restore()
    } else if (event.data === YT.PlayerState.ENDED) {
        restore()
    }
}