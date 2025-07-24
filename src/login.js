const shadow = document.getElementById("shadow")
const formLogin = document.getElementById("form-login")
const imageLogin = document.querySelector(".image-login")

function soundEffect() {
    const audio = new Audio("/assets/audio/teleport-sound.mp3")
    audio.play()
}

function loginActive() {
        imageLogin.src = "/assets/image/login-on.png"
        shadow.style.display = "block"
        formLogin.style.display = "block"

        soundEffect()
}

function closeLogin() {
        imageLogin.src = "/assets/image/login-off.png"
        shadow.style.display = "none"
        formLogin.style.display = "none"

        soundEffect()
}

btnLogin.addEventListener("click", loginActive)
btnClose.addEventListener("click", closeLogin)