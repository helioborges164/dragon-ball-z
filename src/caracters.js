const caracters = {
    goku: {
        name:"Goku",
        nameImage:"/assets/image/titulo-goku.png",
        description:"Goku é gentil, ingênuo e otimista. Ama lutar para se superar, valoriza os amigos e tem um coração puro e corajoso.",
        imageCard:"/assets/image/goku.gif",
        imageMain:"/assets/image/goku.png"
    },

    vegeta: {
        name:"Vegeta",
        nameImage:"/assets/image/titulo-vegeta.png",
        description:"Vegeta é orgulhoso, determinado e intenso. Sempre busca superar Goku e proteger sua família com bravura silenciosa.",
        imageCard:"/assets/image/vegeta.gif",
        imageMain:"/assets/image/vegeta.png"
    },

    piccolo: {
        name:"Piccolo",
        nameImage:"/assets/image/titulo-piccolo.png",
        description:"Piccolo é sábio, calmo e estrategista. De antigo inimigo a mentor, se tornou um dos maiores protetores da Terra.",
        imageCard:"/assets/image/piccolo.gif",
        imageMain:"/assets/image/piccolo.png"
    },

    gohan: {
        name:"Gohan",
        nameImage:"/assets/image/titulo-gohan.png",
        description:"Gohan é gentil e estudioso, mas guarda um poder imenso. Quando luta por quem ama, revela sua força interior.",
        imageCard:"/assets/image/gohan.gif",
        imageMain:"/assets/image/gohan.png"
    },

    trunks: {
        name:"Trunks",
        nameImage:"/assets/image/titulo-trunks.png",
        description:"Trunks vem de um futuro destruído, é sério e corajoso. Com sua espada e senso de justiça, enfrenta qualquer ameaça.",
        imageCard:"/assets/image/trunks.gif",
        imageMain:"/assets/image/trunks.png"
    }
}

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
}