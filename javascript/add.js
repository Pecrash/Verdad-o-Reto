let btnAdd = document.getElementById("btn-add")
let add_p = []
let count = 0

let agregar = () => {
    const input = document.getElementById("input").value;

	if (count < 12 && input.length > 0) {
		add_p.push(input);
		count++;
		let box = document.getElementById(`box-${count}`);
		add_p.forEach(() => {
			if (!box.classList.contains("active")) {
				box.classList.add("active");
                box.innerText = input
			}
		});
	} else {
        if(count >= 12) {
            alert()
        }
    }
    form.reset();
	console.log(add_p);
    console.log(input.length)
};

/* if(bandera == 1) {
	
} */
btnAdd.addEventListener("click", agregar);

/* para agregar los jugadores a la siguiente sección */

const comenzar = document.getElementById("comenzar")
const main = document.getElementById("players__container")

comenzar.addEventListener("click", function() {
    localStorage.setItem("nombres", JSON.stringify(add_p))
}, false)

console.log(main)

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