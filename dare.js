export const dare = [
	"Quitarse las cuatro prendas de ropa que elija el afectado",

	"Quedarse en ropa interior delante de todos durante x minutos",

	"Meterse en el hueco más pequeño del armario de la habitación durante una ronda",

	"Llamar por teléfono a un ser querido y hacerle una falsa confesión acordada por el grupo",

	"Tomar una cucharada de picante",

	"Hacer ver a alguien que estás ligando con él o con ella",

	"Haz una videollamada y besa tu teléfono durante dos minutos",

	"Coquetea con el primer desconocido/a que pase por la calle",

	"Dile a alguien que te cae mal lo que verdaderamente piensas de él/ella",

	"Admite cuál es el mayor ridículo que has hecho nunca",

	"Demuestra un talento oculto que tengas",

	"Tener una conversación de mínimo 5 minutos con una persona aleatoria de la calle",

	"Pedirle el número de teléfono a alguien",

	"Cantarle a alguien una canción romántica a capela",

	"Pregúntale a alguien random por la calle qué es lo más extraño que han hecho nunca",

	"Pregúntale a alguien por la calle si creen que eres atractivo/a",

	"Abraza a la primera persona que encuentres",

	"Grita a los 4 vientos que te has enamorado",

	"Llamar a un número desconocido y pedir una pizza. Insistir aunque la persona diga que no es una pizzería",
];

export function randomDare(min, max) {
	let num = Math.floor(Math.random() * (max - min + 1) + min);
	const texto = document.getElementById("text");
	texto.innerText = dare[num];
}
console.log(dare.length);
