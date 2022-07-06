/* const objeto = [
    {
        pregunta: 'holi',
        id: 1
    },
    {
        pregunta: 'nel hermano',
        id: 2
    },
    {
        pregunta: 'buberrimo',
        id: 3
    }
]

const texto = document.getElementById('text')
texto.innerText = objeto[2].pregunta */
function getFullscreenElement () {
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
}

const fullscreen = () => {
    if (getFullscreenElement()) {
        document.exitFullscreen()
    } else {
        document.documentElement.requestFullscreen().catch((e) => {
            console.log(e)
        })
    }
}

let screen = document.getElementById('fullscreen')
screen.addEventListener("click", fullscreen)
