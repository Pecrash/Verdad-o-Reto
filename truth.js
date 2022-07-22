export const truth = [
	"¿Qué es lo más vergonzoso que te ha pasado en la vida?",

	"¿Cuál es el hábito más desagradable que tienes?",

	"¿Alguna vez has tenido sexo en la cama de tus padres?",

	"¿Alguna vez te has olvidado del nombre de la persona con la que te has acostado?",

	"¿Alguna vez has dudado de tu orientación sexual?",

	"¿a quién besarías de los presentes (no cuentan las parejas)?",

	"¿Con cuántas personas te has acostado?",

	"¿Has tenido relaciones con un desconocido/a?",

	"¿Quién de las personas de este grupo tiene el cuerpo más bonito?",

	"¿Has tenido sexo en la calle?",

	"¿Alguna vez te han sorprendido teniendo sexo?",

	"¿Cuál fue el sueño más extraño que has tenido?",

	"¿Cuál es tu mayor secreto?",

	"Si hoy fuera tu último día de vida, ¿qué harías?",

	"¿Qué es lo más ridículo que te ha pasado por la calle?",

	"¿Alguna vez has traicionado a un(a) amigo/a? ¿Cómo fue?",

	"¿Qué es lo más fuerte que has hecho en un reto?",

	"Menciona un rumor que hayas empezado sobre alguien.",

	"¿Qué haces cuando estás solo y nadie te está viendo?",

	"¿Alguna vez has compartido el secreto de un amigo tuyo con alguien más?",

	"¿Cuál es la mentira más grande que has contado y que no hayan atrapado diciéndola?",

	"¿Quién en esta habitación sería la peor persona como pareja y por qué?",

	"Si pudieras borrar alguna experiencia negativa de tu vida, ¿cuál sería?",

	"Cuenta alguna vez que fingiste estar enfermo para zafarte de algo.",

	"Cuenta tu anécdota más desagradable.",

	"¿Tendrías relaciones sexuales con un familiar tuyo?",

	"¿Qué es lo más cruel que le has hecho a un amigo/a?",

	"¿Alguna vez una persona se te ha acercado para ofrecerte sexo?",

	"¿Miedo más ridículo que tengas?",

	"¿Opinión tuya que crees que si la dices en público te genere una funa?",

	"¿Alguna estupidez bien grande que hayas realizado dormido?",

	"¿Película que todo mundo ama pero tu odias con toda tu alma?",

	"¿que sería lo primero que harías si pudieras parar el tiempo?",

	"Si pudieras cogerte a una persona que no está en este momento acá...¿quien sería?",

	"¿Anécdota más extraña que ocurrió durante el sexo?",

	"¿Hace cuánto no te masturbas?",

	"¿Que cosa te daría mucho asco en el sexo",

	"¿Posición favorita? y ¿por qué?",

	"¿Tendrías relaciones con alguien trans?",

	"¿Irias a un prostíbulo?",

	"Menciona tres adjetivos que describan cómo eres en la cama",
];

export function randomTruth(min, max) {
	let num = Math.floor(Math.random() * (max - min + 1) + min);
	const texto = document.getElementById("text");
	texto.innerText = truth[num];
}

console.log(truth.length);
