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

/* ----------------------------------------
            FULLSCREEN
---------------------------------------- */

function getFullscreenElement() {
	return (
		document.fullscreenElement ||
		document.webkitFullscreenElement ||
		document.mozFullscreenElement ||
		document.msFullscreenElement
	);
}

const fullscreen = () => {
	if (getFullscreenElement()) {
		document.exitFullscreen();
	} else {
		document.documentElement.requestFullscreen().catch((e) => {
			console.log(e);
		});
	}
};

let screen = document.getElementById("fullscreen");
screen.addEventListener("click", fullscreen);

/* ----------------------------------------
            POP UP WINDOW
---------------------------------------- */

let btnTruth = document.getElementById("truth"),
	btnDare = document.getElementById("dare"),
	btnClose = document.getElementById("close"),
    b_blur = document.getElementById("blur"),
    modal_container = document.getElementById("modal-container"),
    wave = document.getElementById("wave"),
    kind = document.getElementById("kind"),
    text = document.getElementById("text");

var tipo = '';

let pop_up = (tipo) => {
    modal_container.classList.add('active')
    b_blur.classList.add('blur')
    wave.classList.add('wave')

    if (tipo == 'truth') {
        wave.classList.add("wave_true")
        kind.innerText = "Verdad"
    } else {
        wave.classList.add("wave_dare")
        kind.innerText = "Reto"
    }
}

let pop_up_close = (tipo) => {
    modal_container.classList.remove('active')
    b_blur.classList.remove('blur')

    if (tipo == "truth") {
        wave.classList.remove('wave_true') 
    } else {
        wave.classList.remove('wave_dare')
    }
}

btnTruth.addEventListener('click', function() {
    tipo = 'truth'
    pop_up(tipo)
},false)

btnDare.addEventListener('click', function() {
    tipo = 'dare'
    pop_up(tipo)
}, false)

btnClose.addEventListener('click', function() {
    pop_up_close(tipo)
}, false)