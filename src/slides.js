const slides = [
    "assets/image/slide-01.jpg",
    "assets/image/slide-02.jpg",
    "assets/image/slide-03.jpg",
    "assets/image/slide-04.jpg",
    "assets/image/slide-05.jpg",
    "assets/image/slide-06.jpg"
]

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

setInterval(autoSlide, 5000)