const btnSound = document.querySelector(".btn-sound")
const btnLogin = document.querySelector(".btn-login")
const btnClose = document.querySelector(".btn-close")
const imageSound = document.querySelector(".image-sound")

const music = new Audio("./assets/audio/dragonball-z.MP3")
let activeAudio = false

function soundClick() {
    

    if (activeAudio) {
        imageSound.src = "./assets/image/sound-off.png"
        music.pause()
    } else {
        imageSound.src = "./assets/image/sound-on.png"
        music.loop = true
        music.play()
    }
    activeAudio = !activeAudio
}

btnSound.addEventListener("click", soundClick)

const btnMenu = document.querySelector(".btn-menu")
const navList = document.getElementById("nav-list")

let activeMenu = false

btnMenu.addEventListener("click", () => {
    if(activeMenu) {
        navList.style.display = "none"
    } else {
        navList.style.display = "block"
    }

    activeMenu = !activeMenu
})

const shadow = document.getElementById("shadow")
const formLogin = document.getElementById("form-login")
const imageLogin = document.querySelector(".image-login")

function soundEffect() {
    const audio = new Audio("./assets/audio/teleport-sound.MP3")
    audio.play()
}

function loginActive() {
        imageLogin.src = "./assets/image/login-on.png"
        shadow.style.display = "block"
        formLogin.style.display = "block"

        soundEffect()
}

function closeLogin() {
        imageLogin.src = "./assets/image/login-off.png"
        shadow.style.display = "none"
        formLogin.style.display = "none"

        soundEffect()
}

btnLogin.addEventListener("click", loginActive)
btnClose.addEventListener("click", closeLogin)

//Parte 2 - News

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

//Parte 3 - Personagens

const btnCaracters = document.querySelectorAll(".symbols-image")
const nameTitle = document.getElementById("image-caracter")
const descriptionCaracter = document.getElementById("description-caracters")
const actionImage = document.getElementById("action-image")
const caracterImage = document.getElementById("image-main")


btnCaracters.forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-caracter")
        updateCaracters(name)
    })
})

const updateCaracters = (name) => {
    const caracter = caracters[name]
    if (caracter) {
        nameTitle.src = caracter.nameImage
        descriptionCaracter.innerText = caracter.description
        actionImage.src = caracter.imageCard
        caracterImage.src = caracter.imageMain
    }
    soundEffect()
}

//Parte 4 - Slides

let currentImage = 0

const imageCenter = document.getElementById("center")
const imageLeft = document.getElementById("left")
const imageRight = document.getElementById("right")

const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const indicator = document.querySelectorAll(".btn-slide")


function updateSlides() {
    const total = slides.length

    const prevImage = (currentImage + 1 + total) % total
    const centerImage = currentImage
    const NextImage = (currentImage - 1 + total) % total

    imageLeft.src = slides[prevImage]
    imageCenter.src = slides[centerImage]
    imageRight.src = slides[NextImage]

    indicator.forEach((dot, i) => {
        dot.classList.toggle("active", i === centerImage)
    })
}

prevButton.addEventListener("click", () => {
    currentImage = (currentImage - 1 + slides.length) % slides.length
    updateSlides()
})

nextButton.addEventListener("click", () => {
    currentImage = (currentImage + 1) % slides.length
    updateSlides()
})

indicator.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        currentImage = i
        updateSlides()
    })
})

function autoSlide() {
    currentImage = (currentImage + 1) % slides.length
    updateSlides()
}

setInterval(autoSlide, 3000)
