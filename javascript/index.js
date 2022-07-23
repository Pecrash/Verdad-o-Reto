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

import { truth, randomTruth } from "/javascript/truth.js";
import { dare, randomDare } from "/javascript/dare.js";
import {add_p,btnAdd} from "/javascript/add.js"

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
            ADD PLAYERS
---------------------------------------- */

/* add_p.forEach((item) => {
    let num = 1
    const div = document.createElement("div")
    div.textContent = item
    main.appendChild(div)
    div.classList.add(`player player-${num}`)
    num++
    console.log(item)
}) */

console.log(add_p)

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
	next = 0;

var tipo = "";

let pop_up = (tipo) => {
	modal_container.classList.add("active");
	b_blur.classList.add("blur");
	wave.classList.add("wave");

	if (tipo == "truth") {
		wave.classList.add("wave_true");
		kind.innerText = "Verdad";
		randomTruth(0, truth.length - 1);
	} else {
		wave.classList.add("wave_dare");
		kind.innerText = "Reto";
		randomDare(0, dare.length - 1);
	}
};

let pop_up_close = (tipo) => {
	modal_container.classList.remove("active");
	b_blur.classList.remove("blur");

	if (tipo == "truth") {
		wave.classList.remove("wave_true");
	} else {
		wave.classList.remove("wave_dare");
	}
};

btnTruth.addEventListener(
	"click",
	function () {
		tipo = "truth";
		if (next == 1) {
			pop_up(tipo);
		} else {
			alert();
		}
	},
	false
);

btnDare.addEventListener(
	"click",
	function () {
		tipo = "dare";
		if (next == 1) {
			pop_up(tipo);
		} else {
			alert();
		}
	},
	false
);

btnClose.addEventListener(
	"click",
	function () {
		pop_up_close(tipo);
		next = 0;
	},
	false
);

/* ----------------------------------------
                 SELECTION
---------------------------------------- */
let start = document.getElementById("start"),
	random = 0,
	contador = 0,
	turnos = [],
	anterior = random,
	borrar = NaN,
	player = NaN;

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

start.addEventListener("click", function () {
	anterior = random;
	random = aleatorio(1, 6);
	next = 1;
	/* Esto es para que no se repitan los ultimos 3 turnos
    o los ultimos (número de jugadores/2) */
	console.log(`random: ${random}`);

	turnos.forEach(() => {
		if (turnos.includes(random)) {
			random = aleatorio(1, 6);
			console.log(`soy del if: random ${random}`);
		}
		if (contador >= 4) {
			contador = 0;
		}
	});

	turnos[contador] = random;
	contador++;

	player = document.getElementById(`player-${random}`);
	player.classList.add("active");

	/* Esto remueve la clase active de cualquier jugador diferente del actual, 
    probablemente pueda optimizarse mejor*/
	for (let index = 1; index <= 6; index++) {
		borrar = document.getElementById(`player-${index}`);
		if (index != random) {
			borrar.classList.remove("active");
		}
		console.log(
			`index: ${index}`,
			`random: ${random}`,
			`anterior: ${anterior}`
		);
	}
	console.log(`contador: ${contador}`);
	console.log(`array: ${turnos}`);
	console.log(player);

	/* Esto simplemente funciona como scroll en la seccion de jugadores */
	start.href = `#player-${random}`;
});

/* ----------------------------------------
            SECCION JUGADORES
---------------------------------------- */
